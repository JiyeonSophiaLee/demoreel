console.log('unilityController.js is working');
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


UtilityController.prototype.expandMenuElseIf = function(biggeredElem){
  console.log('unitiycontroller expandMenuElseIf is working+')
  // return new Promise((resolve, reject)=>{
    ISU.select(`#${biggeredElem.id} .text`).style.visibility = 'visible'
    ISU.select(`#${biggeredElem.id} .contents`).style.zIndex = '-1';
    
    // ISU.select(`#${this.id} .neon1`).style.display = 'none';
    // ISU.select(`#${this.id} .neon2`).style.display = 'none';
    ISU.select(`#${biggeredElem.id} .neon1`).style.display = 'none';
    ISU.select(`#${biggeredElem.id} .neon2`).style.display = 'none';

    ISU.select(`#${biggeredElem.id} .neon1`).classList.remove(`${biggeredElem.id}Neon1`);
    ISU.select(`#${biggeredElem.id} .neon2`).classList.remove(`${biggeredElem.id}Neon2`);
    

    setTimeout(() => {
      ISU.select(`#${this.elem.id} .text`).style.visibility = 'hidden';
      ISU.select(`#${this.elem.id} .contents`).style.zIndex = '3';
      
      ISU.select(`#${biggeredElem.id} .neon1`).style.display = 'initial';
      ISU.select(`#${biggeredElem.id} .neon2`).style.display = 'initial';
    }, ISU.transitionValue['duration'] * 1000);


    // resolve();
  // })
}

UtilityController.prototype.expandMenuElse = function(){
//   return new Promise((resolve, reject)=>{
 
  console.log('utilitiy else is working');

  ISU.select(`#${this.elem.id} .contents`).style.zIndex = '0';
  ISU.select(`#${this.elem.id} .neon1`).style.display = 'none';
  ISU.select(`#${this.elem.id} .neon2`).style.display = 'none';
  ISU.select(`#${this.elem.id} .neon1`).classList.remove(`${this.id}Neon1`);
  ISU.select(`#${this.elem.id} .neon2`).classList.remove(`${this.id}Neon2`);


    if(innerWidth > 800){
      let demoHeight;

      if(innerWidth > 1400){
        demoHeight = ((ISU.transitionValue['masterMaxWidth'] * ISU.transitionValue['symetryDemoMenu'] / 100) * ISU.transitionValue['symetryDemoVideoWidth']/100) * (9/16);
      }else{ 
        demoHeight = ((ISU.DEMO__.parentElement.clientWidth * ISU.transitionValue['symetryDemoMenu'] / 100) * ISU.transitionValue['symetryDemoVideoWidth']/100) * (9/16);
      }

      gsap.to(
        ISU.DEMO_VIDEO,{
          width: ISU.transitionValue['symetryDemoVideoWidth'] + '%',
          height: demoHeight +'px',
          duration: ISU.transitionValue['duration'],
          ease: ISU.transitionValue['gsapEase']
        }
      )

    }else{
      gsap.to(
        ISU.DEMO_VIDEO,{
          width: ISU.transitionValue['symetryDemoVideoWidthMediaQuery'] + '%',
          height: (window.innerWidth * ISU.transitionValue['symetryDemoVideoWidthMediaQuery']/100)  * (9/16) +'px',
          duration: ISU.transitionValue['duration'],
          ease: ISU.transitionValue['gsapEase']
        }
      )

    }

    
    ISU.select(`#${this.elem.id} .text`).style.visibility = 'visible'
    


    setTimeout(() => {
      ISU.select(`#${this.elem.id} .neon1`).style.display = 'initial';
      ISU.select(`#${this.elem.id} .neon2`).style.display = 'initial';
    }, ISU.transitionValue['duration'] * 1000);
  
}
