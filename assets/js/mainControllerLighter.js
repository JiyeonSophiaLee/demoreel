import * as ISU from '/assets/js/InitialSetUp.js';
import Rect, {SetDefaultRectSize}from '/assets/js/border.js';
import UtilityController from '/assets/js/utilityController.js';
import Thumbnails, {workThumbnails, paintThumbnails} from '/assets/js/thumbnails.js';
import Skills, {skillListTL} from '/assets/js/skills.js';
import Info from '/assets/js/info.js';
//------gsap------//
// import gsap from '/assets/scripts/gsap-core.js';
// import { CSSPlugin } from "/assets/scripts/CSSPlugin.js";
// import { CSSRulePlugin } from "/assets/scripts/CSSRulePlugin.js";
// gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
// let test = new Thumbnails(workThumbnails)



let menuExpanded = false;
let biggerElem = null;
let biggeredElem = null;
let biggeredController =null;


ISU.allElems.forEach((elem)=>{
  SetDefaultRectSize(elem)
});

let demoVideoHeight = parseFloat(window.getComputedStyle(ISU.DEMO_VIDEO).width) * (9/16);
ISU.DEMO_VIDEO.style.height = demoVideoHeight +'px';



const LOGOcallClickEvent = function(){
  if(biggerElem != null){
    ISU.allElems.forEach((elem)=>{
      elem.removeEventListener('click',eval(elem.id+'MenuController')['callClickEvent'])
    })
    ISU.LOGO__.removeEventListener('click',LOGOcallClickEvent);
    eval(biggerElem.id + 'MenuController').expandMenu();
  }
}





function MenuController(id, hasThumbnail=false, hasSkills=false, hasInfo = false){
  this.id = id;
  this.elem = document.getElementById(id);
  this.Rect = this.Rect(this.id);
  this.UtilityController = this.UtilityController(this.id);

  if(hasThumbnail != false){
    this.Thumbnails = this.Thumbnails(this.id, hasThumbnail);
  };
  if(hasSkills != false){
    this.Skills = this.Skills(this.id, hasSkills);
  }
  if(hasInfo == true){
    this.Info = this.Info(this.id);
  }


  this.callClickEvent = () =>{
    this.elemEventListener(ISU.allElems,'remove','callClickEvent');
    ISU.LOGO__.removeEventListener('click',LOGOcallClickEvent);

    this.expandMenu();
  }
  
  
  
 


  this.updateResizeHandler = this.updateResize.bind(this);
  this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  this.hoveroverOffHandler = this.hoveroverOff.bind(this);
  


  window.addEventListener('resize',this.updateResizeHandler);
  this.elem.addEventListener('click',this.callClickEvent,false);
  this.elem.firstElementChild.addEventListener('mouseover', this.hoveroverOnHandler);
  this.elem.firstElementChild.addEventListener('mouseout', this.hoveroverOffHandler);
}

MenuController.prototype.Rect = (id)=>new Rect(id);
MenuController.prototype.UtilityController = (id)=>new UtilityController(id);
MenuController.prototype.Thumbnails = (id,hasThumbnail)=> new Thumbnails(id,hasThumbnail);
MenuController.prototype.Skills = (id,hasSkills)=>new Skills(id,hasSkills);
MenuController.prototype.Info = (id)=>new Info(id);


//--Event Listenr functions----------
MenuController.prototype.addEventCB = function(){
  console.log('add')
  this.elemEventListener(ISU.allElems,'add','callClickEvent');
  ISU.LOGO__.addEventListener('click',LOGOcallClickEvent);
}
MenuController.prototype.callFuncs = function(){
  console.log('callFuncs')
  if(typeof this.Thumbnails =='object' && this.id == biggerElem.id){
    this.Thumbnails.callThumbnail();
  }
  if(typeof this.Skills =='object' && this.id == biggerElem.id){
    this.Skills.callSkills();
  }
  if(typeof this.Info =='object' && this.id == biggerElem.id){
    console.log('-------this.elem-------', this.elem)
    this.Info.callInfo();
  }
  
  // callInfoContents(elem);
}
MenuController.prototype.stopFuncs = function(){
  console.log('stopFuncs');
  if(typeof biggeredController.Thumbnails =='object'){
    biggeredController.Thumbnails.stopThumbnail();
  }
  if(typeof biggeredController.Skills =='object'){
    biggeredController.Skills.stopSkills();
  }
  if(typeof biggeredController.Info =='object'){
    biggeredController.Info.stopInfo();
  }

  // callSkillContents(elem);
  // callInfoContents(elem);
}
MenuController.prototype.elemEventListener = function(elems,listener, handler) {
  let arrayElems = [...elems];
  // if(Array.isArray(elems)){
  //   arrayElems = elems;
  // }else{
    // arrayElems.push(elems);
  // }
  
  arrayElems.forEach((elem)=>{
    let controllerId = eval(elem.id+'MenuController')

    if (listener == 'add') {
      elem.addEventListener('click', controllerId[handler]);
    } else {
      elem.removeEventListener('click', controllerId[handler]);
    }
  })
}


//---------------------------------------

MenuController.prototype.expandMenu = function(){

  if (menuExpanded == false ){
    menuExpanded = true;
    biggerElem = this.elem;
    
    //----calculate demo height in order to give the same result to all functions------------------------
    getDemoVideHeight();
    
    

    async function callPromise(){
      try{
        const all = await Promise.all([this.Rect.expandMenuIf(demoVideoHeight,menuExpanded), this.UtilityController.expandMenuIf(demoVideoHeight)]);
        const animRect = await this.Rect.animRect(menuExpanded);
        const wavyAnim = await this.Rect.createWavyAnimation();
        const stopFuncs = await Promise.all([this.callFuncs(), this.addEventCB()]);
      }catch(e){
        console.log('error');
        const addEvent = await this.addEventCB();
      }
    }
    callPromise.call(this)


  }else if(biggerElem != this.elem){
    biggeredElem = biggerElem;
    biggerElem = this.elem;
    biggeredController = eval(biggeredElem.id+'MenuController');

    //----calculate demo height in order to give the same result to all functions------------------------
    getDemoVideHeight();

    async function callPromise(){
      try{
        const all = await Promise.all([this.Rect.expandMenuElseIf(demoVideoHeight,biggeredElem,menuExpanded), this.UtilityController.expandMenuElseIf(biggeredElem), this.stopFuncs()]);
        const stopWavyAnim = await biggeredController.Rect.stopWavyAnim();
        const animRect = await this.Rect.animRect(menuExpanded, biggeredElem);
        const wavyAnim = await this.Rect.createWavyAnimation();
        const stopFuncs = await Promise.all([this.callFuncs(), this.addEventCB()]);
      }catch(e){
        console.log('error');
        const addEvent = await this.addEventCB();
      }
    }

    callPromise.call(this);

  }else{
    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;
    biggeredController = eval(this.id+'MenuController');

    async function callPromise(){
      try{
        const all = await Promise.all([this.Rect.expandMenuElse(), this.UtilityController.expandMenuElse(), this.stopFuncs()]);
        const stopWavyAnim = await this.Rect.stopWavyAnim();
        const animRect = await this.Rect.animRect(menuExpanded, biggeredElem);
        // const wavyAnim = await this.Rect.createWavyAnimation();
        const stopFuncs = await Promise.all([this.addEventCB()]);
      }catch(e){
        console.log('error');
        const addEvent = await this.addEventCB();
      }
    }

    callPromise.call(this);


  }
  function getDemoVideHeight(){
    if(window.innerWidth > 800){
      demoVideoHeight = ((window.innerWidth * (100-ISU.transitionValue['unSymetryDemoMenu']) / 100) * ISU.transitionValue['unSymetryDemoVideoWidth']/100)  * (9/16);
    }else{
      if(window.innerWidth > ISU.remToPx(ISU.transitionValue['masterMinWidth'])){
        demoVideoHeight = (window.innerWidth * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      }else{
        demoVideoHeight = (ISU.remToPx(ISU.transitionValue['masterMinWidth']) * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      }
    };
  };
}


//---------updateResize--------------//


MenuController.prototype.updateResize = function(){

  this.Rect.updateResize(biggerElem,menuExpanded);
  if(biggerElem != null){
    if(typeof this.Thumbnails =='object' && this.id == biggerElem.id){
      this.Thumbnails.updateResize();
    }
    if(typeof this.Skills =='object' && this.id == biggerElem.id){
      this.Skills.updateResize();
    }   
  }

  demoVideoHeight = parseFloat(window.getComputedStyle(ISU.DEMO_VIDEO).width) * (9/16);
  ISU.DEMO_VIDEO.style.height = demoVideoHeight +'px';
  
  if(innerWidth > 800){
    ISU.MENU__.style.height = '100%';
    ISU.DEMO__.style.height = '100%';

    if (menuExpanded) {
      ISU.MASTER.style.maxWidth = '100%';

      ISU.DEMO__.style.width = 100 - ISU.transitionValue['unSymetryDemoMenu'] + '%';
      ISU.DEMO_VIDEO.style.width = ISU.transitionValue['unSymetryDemoVideoWidth'] + '%';

    }else{
      ISU.DEMO_VIDEO.style.width = '';
    }

  }else{
    ISU.DEMO__.style.width = '';

    if(menuExpanded ) {
      ISU.DEMO_VIDEO.style.width = ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] +'%';
    }
  }
}



//----------------hoverover----------------//

MenuController.prototype.hoveroverOn = function(){
  this.Rect.hoveroverOn(biggerElem);
}
MenuController.prototype.hoveroverOff = function(){
  this.Rect.hoveroverOff(biggerElem);
}


let workMenuController = new MenuController('work', workThumbnails);
let skillMenuController = new MenuController('skill',false, skillListTL);
let paintMenuController = new MenuController('paint', paintThumbnails);
let infoMenuController = new MenuController('info',false,false,true);


