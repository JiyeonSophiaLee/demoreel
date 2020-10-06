const MASTER = document.getElementById('master');
const TOP_MENU = document.getElementById('topMenu');
const MENU__ = document.getElementById('menu');
const DEMO__ = document.getElementById('demo');
const DEMO_VIDEO = document.getElementById('demoVideo');
const DEMO_SVG = document.getElementById('demoSVG');
const BOTTOM = document.getElementById('bottom');
const BOTTOM_MENU = document.getElementById('bottomMenu');
const WORK = document.getElementById('work');
const SKILL = document.getElementById('skill');
const PAINT = document.getElementById('paint');
const INFO = document.getElementById('info');
const TITLE = document.querySelector('#name');
const DEMO_VIDEO_RAINBOW = document.querySelector('#demoVideoRainbow');
const TITLE_NAME_CONTAINER = document.querySelector('#nameContainer');
const TITLE_NAME = document.querySelector('#name');
const THREEJS_BlOCKER = document.getElementById('threejsBlocker');
// const nameP = document.querySelectorAll('#name p');

const allElems = [WORK,PAINT,SKILL,INFO];

let menuExpanded = false;
let biggerElem = null;
let biggeredElem = null;



 

function getTransitionValue() {
  this.min = 50;
  this.max = 75;
  this.duration = 1;
  this.menuMax = 75;
  this.menuMin = 50;
  this.maxWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--maxWidth'));
  this.nameMaxMediaQuery = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nameMaxMediaQuery'));
  this.videoMaxWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--videoDemoWidth'));
  this.videoMinWidth = 90;
  this.videoMaxWidthMediaQuery = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--videoDemoWidthMediaQuery'));
  this.videoMinWidthMediaQuery = 50;
  this.borderMinMediaQuery = 13;
  this.borderMinMediaQueryUnit = 'vw';
  this.bordersSize = getComputedStyle(document.documentElement).getPropertyValue('--bordersSize');
  this.bordersSmallSize = getComputedStyle(document.documentElement).getPropertyValue('--bordersSmallSize');
  this.borderSize800 = getComputedStyle(document.documentElement).getPropertyValue('--borderSize800');
  this.borderSize1400 = getComputedStyle(document.documentElement).getPropertyValue('--borderSize1400');
};

let transitionValue = new getTransitionValue();


let resizeFinish;
// let botMenuPadding;
// let demoMargin;



// nameSplit();



let demoVideoHeight = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16);
DEMO_VIDEO.style.height = demoVideoHeight +'px';

if(innerWidth <= 800){
  DEMO__.style.height = demoVideoHeight +'px';
}else{
  
  // threeJsBlocker();

}



const TITLEcallClickEvent = function(){
  if(biggerElem != null){

    let elem = biggerElem;
    
    let bordersExpandMenu = eval('run' + elem.id.charAt(0).toUpperCase() + elem.id.slice(1) + 'Border');
    let utilitiExpandMenu = eval(elem.id + 'MenuUtilities');


    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;



    allElems.forEach((elem)=>{
      elem.removeEventListener('click',eval(`${elem.id}MenuController`)['callClickEvent']);
    })


    

    Promise.all([bordersExpandMenu.expandMenuElse(), utilitiExpandMenu.expandMenuElse(), callThumbnailElse(elem),stopSkills(),deleteThreeJs(elem)])
    // Promise.all([bordersExpandMenu.expandMenuElse(), utilitiExpandMenu.expandMenuElse()])
    .then(text=>utilitiExpandMenu.deleteMenuText())
    } 
}

TITLE.addEventListener('click',TITLEcallClickEvent);






// function getDemoVideoRainbow(){
//   demoVideoRainbow.style.width = demoVideoHeight + 4 + 'px';
//   console.log('rainbow is working');
// }




function menuController(id){
  this.elem = document.getElementById(id);
  // this.allElems = this.getAllElems(this)
  this.restElems = getRestElems(this.elem);

  this.callClickEvent = () =>{
      
        TITLE.removeEventListener('click',TITLEcallClickEvent);
        this.elem.removeEventListener('click', this.callClickEvent);
        this.restElemsEventListener('remove', 'callClickEvent');

        this.expandMenu();
    
  }

  this.elem.addEventListener('click',this.callClickEvent);
}

menuController.prototype.removeEventCB = function(){
  console.log('add')
  TITLE.addEventListener('click',TITLEcallClickEvent);
  this.elem.addEventListener('click', this.callClickEvent);
  this.restElemsEventListener('add', 'callClickEvent');
}
menuController.prototype.callAfterAnim = function(elem){
  console.log('call');
  callSkills(elem);
}

menuController.prototype.expandMenu = function(){
  
  let bordersExpandMenu = eval('run' + this.elem.id.charAt(0).toUpperCase() + this.elem.id.slice(1) + 'Border');
  let utilitiExpandMenu = eval(this.elem.id + 'MenuUtilities');
 
  document.querySelector(`#${this.elem.id} .borders .borderCover`).classList.remove('borderCoverWhite');
  


  if (menuExpanded == false ){
    menuExpanded = true;
    biggerElem = this.elem;
    
    demoVideoHeight = DEMO_VIDEO.parentElement.clientWidth * (transitionValue['videoMinWidthMediaQuery'] / 100) * (9/16);
    


    // Promise.all([bordersExpandMenu.expandMenuIf(), utilitiExpandMenu.expandMenuIf(),callThumbnailIf(this.elem),callThreeJS(this.elem)])
    Promise.all([bordersExpandMenu.expandMenuIf(), utilitiExpandMenu.expandMenuIf()])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())



  }else if(biggerElem != this.elem){
    biggeredElem = biggerElem;
    biggerElem = this.elem;

    demoVideoHeight =  DEMO_VIDEO.parentElement.clientWidth * (transitionValue['videoMinWidthMediaQuery'] / 100) * (9/16);

    

    // Promise.all([bordersExpandMenu.expandMenuElseIf(), utilitiExpandMenu.expandMenuElseIf(), callThumbnailElseIf(this.elem),callThreeJS(this.elem)])
    Promise.all([bordersExpandMenu.expandMenuElseIf(), utilitiExpandMenu.expandMenuElseIf(),stopSkills()])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())



  }else{
    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;

  


    // Promise.all([bordersExpandMenu.expandMenuElse(), utilitiExpandMenu.expandMenuElse(), callThumbnailElse(this.elem),deleteThreeJs(this.elem)])
    Promise.all([bordersExpandMenu.expandMenuElse(), utilitiExpandMenu.expandMenuElse(),stopSkills()])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())


  }


  
}

menuController.prototype.restElemsEventListener = function(listener, handler) {
  
  for (let i = 0; i < this.restElems.length; i++) {
    let controllerId = eval(this.restElems[i].id+'MenuController')

    if (listener == 'add') {
      this.restElems[i].addEventListener('click', controllerId[handler]);
    } else {
      this.restElems[i].removeEventListener('click', controllerId[handler]);
    }
  }
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
    
    DEMO__.classList.add('menutransition');
    DEMO_VIDEO.classList.add('menutransition');
    DEMO_VIDEO_RAINBOW.style.opacity = '50%';
    
    document.querySelector(`#${this.elem.id} .borderCover`).style.display = 'none';
    // document.querySelector(`#${this.elem.id} .neon1`).style.display = 'none';
    // document.querySelector(`#${this.elem.id} .neon2`).style.display = 'none';
    // document.querySelector(`#${this.elem.id} .neon1`).classList.remove(`${this.elem.id}Neon1`);
    // document.querySelector(`#${this.elem.id} .neon2`).classList.remove(`${this.elem.id}Neon2`);
    
    
    if(innerWidth > 800){
      
      DEMO_SVG.style.display= 'none';
      
      MASTER.classList.add('menutransition');
      TOP_MENU.classList.add('menutransition');
      TITLE_NAME_CONTAINER.classList.add('menutransition');
      TITLE_NAME.classList.add('menutransition');


      // NAME.classList.add('menutransition');

      MASTER.style.maxWidth = '100%';
      TITLE_NAME_CONTAINER.style.width = innerWidth * ( 100 - transitionValue['max']) / 100 + 'px';
      TITLE_NAME.style.width = transitionValue['videoMinWidth'] + '%';


      DEMO_VIDEO.style.width = transitionValue['videoMinWidth'] + '%';
      DEMO_VIDEO.style.height = ((innerWidth * (100-transitionValue.max) / 100) * transitionValue['videoMinWidth']/100)  * (9/16) +'px';

      DEMO__.style.width = ( 100 - transitionValue['max']) + '%';
      
    }else{

      BOTTOM_MENU.classList.add('menutransition');

      DEMO_VIDEO.style.width = transitionValue['videoMinWidthMediaQuery'] + '%';

      DEMO__.style.height = demoVideoHeight +'px' ;
      DEMO_VIDEO.style.height = demoVideoHeight +'px' ;

    }


  
    setTimeout(() => {
      document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '3';


      DEMO_VIDEO.classList.remove('menutransition');
      DEMO__.classList.remove('menutransition');

      if(innerWidth > 800){
        // document.querySelector(`#${this.elem.id} .neon1`).style.display = 'initial';
        // document.querySelector(`#${this.elem.id} .neon2`).style.display = 'initial';

        MASTER.classList.remove('menutransition');
        TOP_MENU.classList.remove('menutransition');
        TITLE_NAME_CONTAINER.classList.remove('menutransition');
        TITLE_NAME.classList.remove('menutransition');

        TITLE_NAME_CONTAINER.style.width = ( 100 - transitionValue['max']) + '%';

      }else{
        BOTTOM_MENU.classList.remove('menutransition');
      }

      document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
    }, transitionValue.duration * 1000);

    resolve();  
  })
}


menuUtilities.prototype.expandMenuElseIf = function(){
  return new Promise((resolve, reject)=>{

    document.querySelector(`#${this.elem.id} .borderCover`).style.display = 'none';

    document.querySelector(`#${biggeredElem.id} .text`).style.visibility = 'visible'
    document.querySelector(`#${biggeredElem.id} .contents`).style.zIndex = '0';
    
    // document.querySelector(`#${this.elem.id} .neon1`).style.display = 'none';
    // document.querySelector(`#${this.elem.id} .neon2`).style.display = 'none';
    document.querySelector(`#${biggeredElem.id} .neon1`).style.display = 'none';
    document.querySelector(`#${biggeredElem.id} .neon2`).style.display = 'none';

    document.querySelector(`#${biggeredElem.id} .neon1`).classList.remove(`${biggeredElem.id}Neon1`);
    document.querySelector(`#${biggeredElem.id} .neon2`).classList.remove(`${biggeredElem.id}Neon2`);
    



    setTimeout(() => {
     

      TOP_MENU.classList.remove('menutransition');
  
      DEMO__.classList.remove('menutransition');

      document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden';
      document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '3';

      document.querySelector(`#${biggeredElem.id} .borderCover`).style.opacity = '0';
      document.querySelector(`#${biggeredElem.id} .borderCover`).style.display = 'initial';
      // document.querySelector(`#${this.elem.id} .neon1`).style.display = 'initial';
      // document.querySelector(`#${this.elem.id} .neon2`).style.display = 'initial';
      document.querySelector(`#${biggeredElem.id} .neon1`).style.display = 'initial';
      document.querySelector(`#${biggeredElem.id} .neon2`).style.display = 'initial';
    }, transitionValue.duration * 1000);

    resolve()  
  })
}

menuUtilities.prototype.expandMenuElse = function(){
  return new Promise((resolve, reject)=>{

    DEMO_VIDEO.classList.add('menutransition');
    DEMO_VIDEO.style.width = transitionValue['videoMaxWidth'] + '%';
    DEMO_VIDEO_RAINBOW.style.opacity = '100%';

    document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '0';
    document.querySelector(`#${this.elem.id} .neon1`).style.display = 'none';
    document.querySelector(`#${this.elem.id} .neon2`).style.display = 'none';
    document.querySelector(`#${this.elem.id} .neon1`).classList.remove(`${this.elem.id}Neon1`);
    document.querySelector(`#${this.elem.id} .neon2`).classList.remove(`${this.elem.id}Neon2`);

    
    // threeJsBlocker();
  

    if(innerWidth > 800){
      DEMO_SVG.style.display= 'initial';
      
      
      MASTER.classList.add('menutransition');
      TITLE_NAME_CONTAINER.classList.add('menutransition');
      DEMO__.classList.add('menutransition');
      TITLE_NAME.classList.add('menutransition');
      
      


      MASTER.style.maxWidth = transitionValue['maxWidth'] + 'px';

      DEMO__.style.width = transitionValue['min'] + '%';
      if(innerWidth > 1400){
        DEMO_VIDEO.style.height = ((transitionValue['maxWidth'] * (transitionValue.min) / 100) * transitionValue['videoMaxWidth']/100) * (9/16) +'px';
      }else{  
        DEMO_VIDEO.style.height = ((DEMO__.parentElement.clientWidth * (transitionValue.min) / 100) * transitionValue['videoMaxWidth']/100) * (9/16) +'px';
      }
        TITLE_NAME_CONTAINER.style.width =  transitionValue['min'] + '%';
      TITLE_NAME.style.width = transitionValue['videoMaxWidth'] + '%';
      

    }else{
      let demoVideoHeight = innerWidth * transitionValue['videoMaxWidthMediaQuery'] / 100  * (9/16);
      
      
      DEMO__.classList.add('menutransition');
      BOTTOM_MENU.classList.add('menutransition');

      DEMO__.style.height = demoVideoHeight +'px' ;
      DEMO_VIDEO.style.height = demoVideoHeight +'px' ;
      DEMO_VIDEO.style.width = '';

    }

    // document.querySelector('#demoVideo div').style.filter = ''
    // document.querySelector('#demoVideo div').style.animation = ''
    // document.querySelector('#demoVideo div').style.opacity = ''

    document.querySelector(`#${this.elem.id} .text`).style.visibility = 'visible'
    
  setTimeout(() => {
    DEMO_VIDEO.classList.remove('menutransition');
    document.querySelector(`#${this.elem.id} .borderCover`).style.display = 'initial';
    document.querySelector(`#${this.elem.id} .neon1`).style.display = 'initial';
    document.querySelector(`#${this.elem.id} .neon2`).style.display = 'initial';


    if(innerWidth > 800){
      MASTER.classList.remove('menutransition');

      DEMO__.classList.remove('menutransition');
      TITLE_NAME_CONTAINER.classList.remove('menutransition');
      TITLE_NAME.classList.remove('menutransition');
      

      
    }else{
      DEMO__.classList.remove('menutransition');
      BOTTOM_MENU.classList.remove('menutransition');


    }
  }, transitionValue.duration * 1000);
  
  resolve()  
})
}

// menuUtilities.prototype.getPadding = function(){
//   this.padding =  parseFloat(window.getComputedStyle(BOTTOM_MENU).paddingTop);  
// }

menuUtilities.prototype.deleteMenuText = function(){
  // document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
  
}

menuUtilities.prototype.updateSize = function(){
  demoVideoHeight = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16);

  DEMO_VIDEO.style.height = demoVideoHeight +'px';

    if(innerWidth > 800){
      
      BOTTOM_MENU.style.height = '100%'
      DEMO__.style.height = '';
      
      

      if (menuExpanded ) {
        MASTER.style.maxWidth = '100%';
        TITLE_NAME_CONTAINER.style.width = ( 100 - transitionValue['max']) + '%';
        TITLE_NAME.style.width = transitionValue['videoMinWidth'] + '%';

        DEMO__.style.width = 100 - transitionValue['max'] + '%';
        DEMO_VIDEO.style.width = transitionValue['videoMinWidth'] + '%';
        // NAME.style.width = 100 - transitionValue['max'] + '%';


      }else{
        TITLE_NAME_CONTAINER.style.width = transitionValue['min'] + '%';
        DEMO_VIDEO.style.width = '';
        // threeJsBlocker();
      }

    }else{
      TITLE_NAME_CONTAINER.style.width = '100%';
      // TITLE_NAME.style.width =transitionValue['nameMaxMediaQuery']+'%';

      DEMO__.style.height = demoVideoHeight +'px';
    
      DEMO__.style.width = '';

      
      if (menuExpanded ) {

        TITLE_NAME.style.width = transitionValue['nameMaxMediaQuery'] + '%';
        DEMO_VIDEO.style.width = transitionValue['videoMinWidthMediaQuery'] +'%';
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

