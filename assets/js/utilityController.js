import * as ISU from '/assets/js/InitialSetUp.js';
import gsap from '/assets/scripts/gsap-core.js';
import { CSSPlugin } from "/assets/scripts/CSSPlugin.js";
import { CSSRulePlugin } from "/assets/scripts/CSSRulePlugin.js";
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

export default function UtilityController(id,demoVideoHeight){
  this.id = id;
  this.elem = document.getElementById(id);
  this.demoVideoHeight = demoVideoHeight;
  // this.padding;
}

UtilityController.prototype.expandMenuIf = function(demoVideoHeight){
  this.demoVideoHeight = demoVideoHeight;
  
  if(innerWidth > 800){
    ISU.DEMO_SVG.classList.remove('blurSVG');

    gsap.to(
      ISU.DEMO_VIDEO,{
        width: ISU.transitionValue['unSymetryDemoVideoWidth'] + '%',
        height: this.demoVideoHeight +'px',
        duration: ISU.transitionValue['duration'],
        ease: ISU.transitionValue['gsapEase']
      }
    )
  }else{
    gsap.to(
      ISU.DEMO_VIDEO,{
        width: ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] + '%',
        height: this.demoVideoHeight +'px',
        duration: ISU.transitionValue['duration'],
        ease: ISU.transitionValue['gsapEase']
      }
    )
  }


    setTimeout(() => {
      ISU.select(`#${this.id} .text`).style.visibility = 'hidden'
      ISU.select(`#${this.id} .contents`).style.zIndex = '3';

      if(innerWidth > 800){
        ISU.DEMO_SVG.classList.add('blurSVG');
      }
    }, ISU.transitionValue['duration'] * 1000);

}


// utilityController.prototype.expandMenuElseIf = function(){
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

// utilityController.prototype.expandMenuElse = function(){
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
// })style.css
// }

// utilityController.prototype.deleteMenuText = function(){
//   // document.querySelector(`#${this.elem.id} .text`).style.visibility = 'hidden'
  
// }

// utilityController.prototype.updateSize = function(){
  

// }

// let workutilityController = new utilityController('work');
// let skillutilityController = new utilityController('skill');
// let paintutilityController = new utilityController('paint');
// let infoutilityController = new utilityController('info');