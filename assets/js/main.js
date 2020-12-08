import * as ISU from '/assets/js/InitialSetUp.js';
import Boder, {SetDefaultBorderSize}from '/assets/js/border.js';

let menuExpanded = false;
let biggerElem = null;
let biggeredElem = null;

// let resizeFinish;

// console.log(new BORDER('work'))
SetDefaultBorderSize(ISU.allElems)


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

ISU.LOGO__.addEventListener('click',LOGOcallClickEvent,false);





function menuController(id){

  this.id = id;
  this.elem = document.getElementById(id);
  this.Border = this.Border(this.id);

  this.callClickEvent = () =>{
        this.elemEventListener(ISU.allElems,'remove','callClickEvent');
        ISU.LOGO__.removeEventListener('click',LOGOcallClickEvent);

        this.expandMenu();
    
  }

  this.elem.addEventListener('click',this.callClickEvent,false);


}

menuController.prototype.Border = (id)=>new Boder(id);


//--Event Listenr functions----------
menuController.prototype.addEventCB = function(){
  console.log('add')
  this.elemEventListener(ISU.allElems,'add','callClickEvent');
  ISU.LOGO__.addEventListener('click',LOGOcallClickEvent);
}
menuController.prototype.callAfterAnim = function(elem){
  console.log('call');
  // callSkillsContents(elem);
  // callInfoContents(elem)
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

      }else{
        demoVideoHeight = (ISU.remToPx(ISU.transitionValue['masterMinWidth']) * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);

      }
    }

    
    
    // Promise.all([this.Border.expandMenuIf(), utilitiExpandMenu.expandMenuIf(),callThumbnailIf(this.elem),callThreeJS(this.elem)])
    Promise.all([this.Border.expandMenuIf()])
      .then((success) => this.Border.animRectBorder())
      .then((success) => this.Border.createWavyAnimation())
      .then((success) => {this.addEventCB(); this.callAfterAnim(this.elem)})
      .catch((fail)=> this.addEventCB())
    


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




















// //--- menu Utiliti controller------------------------------------------------------------------------
// //----------------------------------------------------------------------------------------------------





















// function menuUtilities(id){
  
//   this.elem = document.getElementById(id);
//   // this.padding;



//   this.updateSizeHandler = this.updateSize.bind(this);

//   window.addEventListener('resize', this.updateSizeHandler);

// }

// menuUtilities.prototype.expandMenuIf = function(){
//   return new Promise((resolve, reject)=>{
   
    
 
//     if(innerWidth > 800){
//       DEMO_SVG.classList.remove('blurSVG');

//       gsap.to(
//         DEMO_VIDEO,{
//           width: transitionValue['unSymetryDemoVideoWidth'] + '%',
//           height: demoVideoHeight +'px',
//           duration: transitionValue['duration'],
//           ease: transitionValue['gsapEase']
//         }
//       )

//     }else{
      
//       gsap.to(
//         DEMO_VIDEO,{
//           width: transitionValue['unSymetryDemoVideoWidthMediaQuery'] + '%',
//           height: demoVideoHeight +'px',
//           duration: transitionValue['duration'],
//           ease: transitionValue['gsapEase']
//         }
//       )
//     }


//     setTimeout(() => {
//       document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
//       document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '3';

//       if(innerWidth > 800){
//         DEMO_SVG.classList.add('blurSVG');

//       }else{
//       }

//     }, transitionValue['duration'] * 1000);

//     resolve();  
//   })
// }


// menuUtilities.prototype.expandMenuElseIf = function(){
//   return new Promise((resolve, reject)=>{

//     // document.querySelector(`#${this.elem.id} .borderCover`).style.display = 'none';

//     document.querySelector(`#${biggeredElem.id} .text`).style.visibility = 'visible'
//     document.querySelector(`#${biggeredElem.id} .contents`).style.zIndex = '0';
    
//     // document.querySelector(`#${this.elem.id} .neon1`).style.display = 'none';
//     // document.querySelector(`#${this.elem.id} .neon2`).style.display = 'none';
//     document.querySelector(`#${biggeredElem.id} .neon1`).style.display = 'none';
//     document.querySelector(`#${biggeredElem.id} .neon2`).style.display = 'none';

//     document.querySelector(`#${biggeredElem.id} .neon1`).classList.remove(`${biggeredElem.id}Neon1`);
//     document.querySelector(`#${biggeredElem.id} .neon2`).classList.remove(`${biggeredElem.id}Neon2`);
    



//     setTimeout(() => {

//       document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden';
//       document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '3';

//       // document.querySelector(`#${biggeredElem.id} .borderCover`).style.opacity = '0';
//       // document.querySelector(`#${biggeredElem.id} .borderCover`).style.display = 'initial';
//       document.querySelector(`#${biggeredElem.id} .neon1`).style.display = 'initial';
//       document.querySelector(`#${biggeredElem.id} .neon2`).style.display = 'initial';
//     }, transitionValue.duration * 1000);

//     resolve()  
//   })
// }

// menuUtilities.prototype.expandMenuElse = function(){
//   return new Promise((resolve, reject)=>{

    
//     document.querySelector(`#${this.elem.id} .contents`).style.zIndex = '0';
//     document.querySelector(`#${this.elem.id} .neon1`).style.display = 'none';
//     document.querySelector(`#${this.elem.id} .neon2`).style.display = 'none';
//     document.querySelector(`#${this.elem.id} .neon1`).classList.remove(`${this.elem.id}Neon1`);
//     document.querySelector(`#${this.elem.id} .neon2`).classList.remove(`${this.elem.id}Neon2`);


  

//     if(innerWidth > 800){
      
//       let demoHeight;

//       if(innerWidth > 1400){
//         height = ((transitionValue['masterMaxWidth'] * transitionValue['symetryDemoMenu'] / 100) * transitionValue['symetryDemoVideoWidth']/100) * (9/16);

//       }else{ 
//         height = ((DEMO__.parentElement.clientWidth * transitionValue['symetryDemoMenu'] / 100) * transitionValue['symetryDemoVideoWidth']/100) * (9/16);

//       }

//       gsap.to(
//         DEMO_VIDEO,{
//           width: transitionValue['symetryDemoVideoWidth'] + '%',
//           height: height +'px',
//           duration: transitionValue['duration'],
//           ease: transitionValue['gsapEase']
//         }
//       )

//     }else{
//       gsap.to(
//         DEMO_VIDEO,{
//           width: transitionValue['symetryDemoVideoWidthMediaQuery'] + '%',
//           height: (innerWidth * transitionValue['symetryDemoVideoWidthMediaQuery']/100)  * (9/16) +'px',
//           duration: transitionValue['duration'],
//           ease: transitionValue['gsapEase']
//         }
//       )

//     }



//     document.querySelector(`#${this.elem.id} .text`).style.visibility = 'visible'
    
//   setTimeout(() => {
//     DEMO_VIDEO.classList.remove('menutransition');
//     document.querySelector(`#${this.elem.id} .neon1`).style.display = 'initial';
//     document.querySelector(`#${this.elem.id} .neon2`).style.display = 'initial';


//     if(innerWidth > 800){
//       MASTER.classList.remove('menutransition');

      
//     }else{
//       DEMO__.classList.remove('menutransition');
//       MENU__.classList.remove('menutransition');


//     }
//   }, transitionValue.duration * 1000);
  
//   resolve()  
// })
// }

// menuUtilities.prototype.deleteMenuText = function(){
//   // document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
  
// }

// menuUtilities.prototype.updateSize = function(){
//   demoVideoHeight = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16);

//   DEMO_VIDEO.style.height = demoVideoHeight +'px';

//     if(innerWidth > 800){
      
//       MENU__.style.height = '100%'
//       DEMO__.style.height = '100%';
      
      

//       if (menuExpanded ) {
//         MASTER.style.maxWidth = '100%';

//         DEMO__.style.width = 100 - transitionValue['unSymetryDemoMenu'] + '%';
//         DEMO_VIDEO.style.width = transitionValue['unSymetryDemoVideoWidth'] + '%';


//       }else{
//         DEMO_VIDEO.style.width = '';
//       }

//     }else{
//       DEMO__.style.width = '';

      
//       if (menuExpanded ) {
//         DEMO_VIDEO.style.width = transitionValue['unSymetryDemoVideoWidthMediaQuery'] +'%';
//       }
//     }

// }





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



// let workMenuUtilities = new menuUtilities('work');
// let skillMenuUtilities = new menuUtilities('skill');
// let paintMenuUtilities = new menuUtilities('paint');
// let infoMenuUtilities = new menuUtilities('info');


