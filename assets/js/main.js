import * as ISU from '/assets/js/InitialSetUp.js';
import Boder, {SetDefaultBorderSize}from '/assets/js/border.js';
import UtilityController from '/assets/js/utilityController.js';

let menuExpanded = false;
let biggerElem = null;
let biggeredElem = null;

// let resizeFinish;

// console.log(new BORDER('work'))
SetDefaultBorderSize(ISU.allElems,menuExpanded)


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





function menuController(id){

  this.id = id;
  this.elem = document.getElementById(id);
  this.Border = this.Border(this.id);
  this.UtilityController = this.UtilityController(this.id);

  this.callClickEvent = () =>{
        this.elemEventListener(ISU.allElems,'remove','callClickEvent');
        ISU.LOGO__.removeEventListener('click',LOGOcallClickEvent);

        this.expandMenu();
  }
  this.updateSizeHandler = this.updateSize.bind(this);

  
  this.elem.addEventListener('click',this.callClickEvent,false);
  window.addEventListener('resize',this.updateSizeHandler);
}

menuController.prototype.Border = (id)=>new Boder(id);
menuController.prototype.UtilityController = (id)=>new UtilityController(id);



//--Event Listenr functions----------
menuController.prototype.addEventCB = function(){
    console.log('add')
    this.elemEventListener(ISU.allElems,'add','callClickEvent');
    ISU.LOGO__.addEventListener('click',LOGOcallClickEvent);
}
menuController.prototype.callAfterAnim = function(elem){
    console.log('call');
}
menuController.prototype.elemEventListener = function(elems,listener, handler) {
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

menuController.prototype.expandMenu = function(){

  if (menuExpanded == false ){
      menuExpanded = true;
      biggerElem = this.elem;

    
    //----calculate demo height in order to give the same result to all functions------------------------
    if(window.innerWidth > 800){
      demoVideoHeight = ((window.innerWidth * (100-ISU.transitionValue['unSymetryDemoMenu']) / 100) * ISU.transitionValue['unSymetryDemoVideoWidth']/100)  * (9/16);
    }else{
      if(window.innerWidth > ISU.remToPx(ISU.transitionValue['masterMinWidth'])){
        demoVideoHeight = (window.innerWidth * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
        // console.log('this is menuController demoVideoHeight: ',demoVideoHeight)    
        // console.log('window.innerWidth',window.innerWidth)  
        // console.log('ISU.transitionValue[unSymetryDemoVideoWidthMediaQuery] /100: ',ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)
        // console.log('9/16')  
      }else{
        demoVideoHeight = (ISU.remToPx(ISU.transitionValue['masterMinWidth']) * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      }
    }

    
    // Promise.all([this.Border.expandMenuIf(demoVideoHeight,menuExpanded), this.UtilityController.expandMenuIf(demoVideoHeight)])
    //   .then((success) => this.Border.animRectBorder(menuExpanded), (err)=> {console.log('done1'); return Promise.reject(err);})
    //     .then((success) => this.Border.createWavyAnimation())
    //     .catch((fail)=> this.addEventCB())
    //       .then((success) => {this.addEventCB(); this.callAfterAnim(this.elem)})

    async function callPromise(){
      try{
        const all = await Promise.all([this.Border.expandMenuIf(demoVideoHeight,menuExpanded), this.UtilityController.expandMenuIf(demoVideoHeight)]);
        const animRect = await this.Border.animRectBorder(menuExpanded);
        const wavyAnim = await this.Border.createWavyAnimation();
        const callAfter = await Promise.all([this.addEventCB(), this.callAfterAnim(this.elem)]);
      }catch(e){
        const addEvent = await this.addEventCB();
      }
    }
    callPromise.call(this)


  }else if(biggerElem != this.elem){
//     biggeredElem = biggerElem;
//     biggerElem = this.elem;
//     console.log('if else is working')


//     //----calculate demo height in order to give the same result to all functions------------------------
//     // demoVideoHeight =  DEMO_VIDEO.parentElement.clientWidth * (transitionValue['unSymetryDemoVideoWidthMediaQuery'] / 100) * (9/16);
//     if(innerWidth > 800){
//       demoVideoHeight = ((innerWidth * (100-transitionValue['unSymetryDemoMenu']) / 100) * transitionValue['unSymetryDemoVideoWidth']/100)  * (9/16);
//     }else{
//       demoVideoHeight = (innerWidth * transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
//     }

    

//     Promise.all([bordersExpandMenu.expandMenuElseIf(), utilitiExpandMenu.expandMenuElseIf(),stopSkillsContents(),stopInfoContents(), callThumbnailElseIf(this.elem),callThreeJS(this.elem)])
//     // Promise.all([bordersExpandMenu.expandMenuElseIf(), utilitiExpandMenu.expandMenuElseIf(),stopSkillsContents(),stopInfoContents(), callThumbnailElseIf(this.elem)])
//     .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())
    // Promise.all([this.Border.expandMenuIf(), utilitiExpandMenu.expandMenuIf(),callThumbnailIf(this.elem),callThreeJS(this.elem)])
    Promise.all([this.Border.expandMenuElseIf(demoVideoHeight, menuExpanded), this.UtilityController.expandMenuElseIf(demoVideoHeight)])
      .then((success) => this.Border.animRectBorder(menuExpanded, biggeredElem))
        .then((success) => this.Border.createWavyAnimation())
        //.catch((fail)=> this.addEventCB())
          .then((success) => {this.addEventCB(); this.callAfterAnim(this.elem)})



//   }else{
//     menuExpanded =false;
//     biggerElem = null;
//     biggeredElem = null;

  
//     console.log('else is working')

//     Promise.all([bordersExpandMenu.expandMenuElse(), utilitiExpandMenu.expandMenuElse(),stopSkillsContents(),stopInfoContents(), callThumbnailElse(this.elem),deleteThreeJs(this.elem)])
//     // Promise.all([bordersExpandMenu.expandMenuElse(), utilitiExpandMenu.expandMenuElse(),stopSkillsContents(),stopInfoContents(), callThumbnailElse(this.elem)])
//     .then(text=>eval(this.elem.id + 'MenuUtilities').deleteMenuText())


  }
}
menuController.prototype.updateSize = function(){
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







// //---- general Function ------------------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------------






let workMenuController = new menuController('work');
let skillMenuController = new menuController('skill');
let paintMenuController = new menuController('paint');
let infoMenuController = new menuController('info');

// workMenuController.border = new BORDER('work');
// skillMenuController.border = new BORDER('skill');
// paintMenuController.border = new BORDER('paint');
// infoMenuController.border = new BORDER('info');






