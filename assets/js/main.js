const TOP_MENU = document.getElementById('topMenu');
const MENU__ = document.getElementById('menu');
const NAME = document.getElementById('name');
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
const TITLE_NAME = document.querySelectorAll('#name p');
const THREEJS_BlOCKER = document.getElementById('threejsBlocker')

let menuExpanded = false;
let biggerElem = null
let biggeredElem = null



 

function getTransitionValue() {
  this.min = 50;
  this.max = 75;
  this.duration = 1;
  this.menuMax = 75;
  this.menuMin = 50;
  this.videoMaxWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--videoDemoWidth'));
  this.videoMinWidth = 90;
  this.videoMaxWidthMediaQuery = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--videoDemoWidthMediaQuery'));
  this.videoMinWidthMediaQuery = 50;
  this.borderMinMediaQuery = 13;
  this.borderMinMediaQueryUnit = 'vw';
};

let transitionValue = new getTransitionValue();


let resizeFinish;
// let botMenuPadding;
// let demoMargin;


// getPadding();
// getDemoMargin();

let demoVideoHeight = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16);
DEMO_VIDEO.style.height = demoVideoHeight +'px';
if(innerWidth <= 800){
  DEMO__.style.height = demoVideoHeight +'px';
  THREEJS_BlOCKER.style.height = body.scrollHeight +'px';
}


TITLE.addEventListener('click',()=>{
  

  if(biggerElem != null){

    let elem = biggerElem;
    let allElems = [WORK,PAINT,SKILL,INFO];
    const callBiggerElemBorder = eval('run' + biggerElem.id.charAt(0).toUpperCase() + biggerElem.id.slice(1) + 'Border');
    const callBiggerElemUtilityMenu = eval(biggerElem.id + 'MenuUtilities');


    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;



    allElems.forEach((elem)=>{
      elem.removeEventListener('click',eval(`${elem.id}MenuController`)['callClickEvent']);
    })


    

    Promise.all([callBiggerElemBorder.expandMenuElse(allElems), callBiggerElemUtilityMenu.expandMenuElse(), callThumbnailElse(elem),deleteThreeJs(elem)])
    .then(text=>callBiggerElemUtilityMenu.deleteMenuText())
    } 
})







// function getDemoVideoRainbow(){
//   demoVideoRainbow.style.width = demoVideoHeight + 4 + 'px';
//   console.log('rainbow is working');
// }




function menuController(id){
  this.elem = document.getElementById(id);
  this.allElems = this.getAllElems(this)
  this.restElems = this.getRestElems(this);

  // this.expandMenuHandler = this.expandMenu.bind(this);

  this.callClickEvent = () =>{
      
        this.elem.removeEventListener('click', this.callClickEvent);
        this.restElemsEventListener('remove', 'callClickEvent');

        this.expandMenu();
    
  }

  this.elem.addEventListener('click',this.callClickEvent);
}

menuController.prototype.removeEventCB = function(){
  console.log('add')
  this.elem.addEventListener('click', this.callClickEvent)
  this.restElemsEventListener('add', 'callClickEvent')
}

menuController.prototype.expandMenu = function(){
  
  const bordersExpandMenu = eval('run' + this.elem.id.charAt(0).toUpperCase() + this.elem.id.slice(1) + 'Border');
  const utilitiExpandMenu = eval(this.elem.id + 'MenuUtilities');
 

  
  if (menuExpanded == false ){
    menuExpanded = true;
    biggerElem = this.elem;
    
    demoVideoHeight = DEMO_VIDEO.parentElement.clientWidth * (transitionValue['videoMinWidthMediaQuery'] / 100) * (9/16);
    


    Promise.all([bordersExpandMenu.expandMenuIf(this.allElems), utilitiExpandMenu.expandMenuIf(), callThumbnailIf(this.elem),callThreeJS(this.elem)])
    // Promise.all([bordersExpandMenu.expandMenuIf(this.allElems), utilitiExpandMenu.expandMenuIf()])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())



  }else if(biggerElem != this.elem){
    biggeredElem = biggerElem;
    biggerElem = this.elem;

    demoVideoHeight =  DEMO_VIDEO.parentElement.clientWidth * (transitionValue['videoMinWidthMediaQuery'] / 100) * (9/16);

    

    Promise.all([bordersExpandMenu.expandMenuElseIf(this.allElems), utilitiExpandMenu.expandMenuElseIf(), callThumbnailElseIf(this.elem),callThreeJS(this.elem)])
    // Promise.all([bordersExpandMenu.expandMenuElseIf(this.allElems), utilitiExpandMenu.expandMenuElseIf()])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())



  }else{
    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;

  


    Promise.all([bordersExpandMenu.expandMenuElse(this.allElems), utilitiExpandMenu.expandMenuElse(), callThumbnailElse(this.elem),deleteThreeJs(this.elem)])
    // Promise.all([bordersExpandMenu.expandMenuElse(this.allElems), utilitiExpandMenu.expandMenuElse()])
    .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())


  }


  
}

menuController.prototype.getAllElems = function() {
  let allElems = [];
  
  for (let i = 0; i < this.elem.parentElement.childNodes.length; i++) {
    if (this.elem.parentElement.childNodes[i].nodeType == 1) {
      allElems.push(this.elem.parentElement.childNodes[i]);
    }
  }
  
  return allElems;
}

menuController.prototype.getRestElems =function() {
  let restElems = [];
  
  for (let i = 0; i < this.elem.parentElement.childNodes.length; i++) {
    if (this.elem.parentElement.childNodes[i].nodeType == 1 && this.elem.parentElement.childNodes[i] != this.elem) {
      restElems.push(this.elem.parentElement.childNodes[i]);
    }
  }
  
  return restElems;
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


menuUtilities.prototype.expandMenuIf = function(restElems){
  return new Promise((resolve, reject)=>{
    
    DEMO__.classList.add('menutransition');
    DEMO_VIDEO.classList.add('menutransition');
    DEMO_VIDEO_RAINBOW.style.opacity = '50%';
    
    
    if(innerWidth > 800){
      
      DEMO_SVG.style.display= 'none';
      
      DEMO_VIDEO.style.width = transitionValue['videoMinWidth'] + '%';
      DEMO_VIDEO.style.height = ((DEMO__.parentElement.clientWidth * (100-transitionValue.max) / 100) * transitionValue['videoMinWidth']/100)  * (9/16) +'px';

      NAME.classList.add('menutransition');
      MENU__.classList.add('menutransition');
      TITLE_NAME.forEach((name)=>{
        name.classList.add('menutransition');
      });

      NAME.style.width = (100 - transitionValue.max) + '%';
      MENU__.style.width = transitionValue.max + '%';
      TITLE_NAME.forEach((name)=>{
        name.style.width = transitionValue.videoMinWidth + '%';
      });


      DEMO__.style.width = ( 100 - transitionValue['max']) + '%';
      

    }else{
      
      BOTTOM_MENU.classList.add('menutransition');

      DEMO_VIDEO.style.width = transitionValue['videoMinWidthMediaQuery'] + '%';

      DEMO__.style.height = demoVideoHeight +'px' ;
      DEMO_VIDEO.style.height = demoVideoHeight +'px' ;


    }


  
    setTimeout(() => {
      DEMO_VIDEO.classList.remove('menutransition');
      DEMO__.classList.remove('menutransition');

      if(innerWidth > 800){
        DEMO_SVG.classList.add('blurSVG');

        NAME.classList.remove('menutransition');
        MENU__.classList.remove('menutransition');
        TITLE_NAME.forEach((name)=>{
          name.classList.remove('menutransition');
        });
      }

      document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
    }, transitionValue.duration * 1000);

    resolve();  
  })
}


menuUtilities.prototype.expandMenuElseIf = function(){
  return new Promise((resolve, reject)=>{


    document.querySelector(`#${biggeredElem.id} .text`).style.visibility = 'visible'


    setTimeout(() => {
      TOP_MENU.classList.remove('menutransition');
      NAME.classList.remove('menutransition');
  
      MENU__.classList.remove('menutransition');
      DEMO__.classList.remove('menutransition');

      document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
    }, transitionValue.duration * 1000);

    resolve()  
  })
}

menuUtilities.prototype.expandMenuElse = function(){
  return new Promise((resolve, reject)=>{

    DEMO_VIDEO.classList.add('menutransition');
    DEMO_VIDEO.style.width = transitionValue['videoMaxWidth'] + '%';
    DEMO_VIDEO_RAINBOW.style.opacity = '100%';
  
  
    if(innerWidth > 800){
      DEMO_SVG.style.display= 'initial';
      DEMO_VIDEO.style.height = ((DEMO__.parentElement.clientWidth * (transitionValue.min) / 100) * transitionValue['videoMaxWidth']/100) * (9/16) +'px';


      NAME.style.width = (100 - transitionValue.min) + '%';
      NAME.classList.add('menutransition');
      MENU__.classList.add('menutransition');
      DEMO__.classList.add('menutransition');
      TITLE_NAME.forEach((name)=>{
        name.classList.add('menutransition');
      });


      MENU__.style.width = transitionValue['min'] + '%';
      DEMO__.style.width = ( 100 - transitionValue['min']) + '%';
      TITLE_NAME.forEach((name)=>{
        name.style.width =  transitionValue['videoMaxWidth'] + '%';
      });

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
    DEMO_VIDEO.classList.remove('menutransition')

    if(innerWidth > 800){
      DEMO_SVG.classList.add('blurSVG');

      NAME.classList.remove('menutransition');
      MENU__.classList.remove('menutransition');
      DEMO__.classList.remove('menutransition');
      TITLE_NAME.forEach((name)=>{
        name.classList.remove('menutransition');
      });

      
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
    // DEMO__.style.height = '100%'
    BOTTOM_MENU.style.height = '100%'
    DEMO__.style.height = '';
    

    if (menuExpanded ) {
      DEMO__.style.width = 100 - transitionValue['max'] + '%';
      DEMO_VIDEO.style.width = transitionValue['videoMinWidth'] + '%';
      NAME.style.width = 100 - transitionValue['max'] + '%';
      MENU__.style.width = transitionValue['max'] + '%';
    }else{
      DEMO_VIDEO.style.width = '';
    }

  }else{
    DEMO__.style.height = demoVideoHeight +'px';
  
    DEMO__.style.width = '';
    NAME.style.width ='';
    
    if (menuExpanded ) {
      DEMO_VIDEO.style.width = transitionValue['videoMinWidthMediaQuery'] +'%';
    }else{
      THREEJS_BlOCKER.style.height = body.scrollHeight +'px';
    }
  }
  // clearTimeout(resizeFinish);
  // resizeFinish = setTimeout(() => {
  //   DEMO_SVG.classList.add('blurSVG')
  // }, 200);

  // getMediaQeury800()

}
//---- general Function ------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------



// DEMO_VIDEO.addEventListener('click',()=>{console.log('this is working');DEMO_VIDEO.style.height = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16) +'px';})

let workMenuUtilities = new menuUtilities('work');
let skillMenuUtilities = new menuUtilities('skill');
let paintMenuUtilities = new menuUtilities('paint');
let infoMenuUtilities = new menuUtilities('info');


let workMenuController = new menuController('work');
let skillMenuController = new menuController('skill');
let paintMenuController = new menuController('paint');
let infoMenuController = new menuController('info');
