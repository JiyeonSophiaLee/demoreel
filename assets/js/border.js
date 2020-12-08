import * as ISU from '/assets/js/InitialSetUp.js';
import gsap from '/assets/scripts/gsap-core.js';
import { CSSPlugin } from "/assets/scripts/CSSPlugin.js";
import { CSSRulePlugin } from "/assets/scripts/CSSRulePlugin.js";
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

const demoMenuTransformTL = gsap.timeline({paused:true, duration: ISU.transitionValue['duration'],ease: ISU.transitionValue['gsapEase']})


//set border size---------
// setDefaultBorderSize(ISU.allElems);

export function SetDefaultBorderSize(elems){
  let arrayElems = [];
  if(Array.isArray(elems)){
    arrayElems = elems;
  }else{
    arrayElems.push(elems);
  }
  if(innerWidth > 1400){
    arrayElems.forEach(elem=>{
      elem.firstElementChild.style.width = 'var(--borderSize1400)';
      elem.firstElementChild.style.height = 'var(--borderSize1400)';
    });
  }else if(innerWidth > 800){
    arrayElems.forEach(elem=>{
      elem.firstElementChild.style.width = 'var(--bordersSize)';
      elem.firstElementChild.style.height = 'var(--bordersSize)';
    });
  }else{
    arrayElems.forEach(elem=>{
      elem.firstElementChild.style.width = 'var(--borderSize800)';
      elem.firstElementChild.style.height = 'var(--borderSize800)';
    });
  }
}
//------------------------



const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';


let requestAni = null;
let f = 0;
// let fSmaller = 0;
let dir = 1;
let NF = ISU.transitionValue['duration'] * 63;




export default function Border(id) {

  this.id = id;
  this.elem = document.getElementById(id);
  this.rectId = id + 'Border';
  this.rect = document.getElementById(this.rectId);
  this.svgCanvas = this.rect.parentElement;
  this.wavy1 = document.getElementById(id + 'BorderWavy1');
  this.wavy2 = document.getElementById(id + 'BorderWavy2');
  this.x = 0;
  this.y = 0;
  this.w = this.svgCanvas.parentElement.clientWidth;
  this.h = this.svgCanvas.parentElement.clientHeight;
  this.border = 5;
  this.multiply = 6;
  this.scale = 1;
  this.radius = window.innerWidth > 800 ? 8 : 4;
  this.speed = [2, 3];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = `url(#${this.rectId}Color)`;
  this.strokeWidth = window.innerWidth > 800 ? 8 : 5;
  this.strokeWidthUnit = 'px';
  this.strokeLineCap = 'square'; //square, butt or round
  this.margin = 0;



  this.variableX = this.x;
  this.variableY = this.y;
  this.variableW = this.w;
  this.variableH = this.h;

  //----this.extraSVGspace is for gsap wiggling on wave path. even if there is this.borders.radius, wiggling curve is go over the svg canvas with cardinal curve method---- 
  this.extraSVGspace = this.radius * 5 ;


  this.data;
  this.points = [];
  this.pointsTween = [];


  // this.expanding = false;
  // this.stop = false;


  this.subMenuChangingWidth, this.subMenuChangingHeight;
  // this.topMenuSize;



  //----call path-----

  this.createRectBorder(this);

  //-----------------

  // this.updateSizeHandler = this.updateSize.bind(this);
  // this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  // this.hoveroverOffHandler = this.hoveroverOff.bind(this);



  // window.addEventListener('resize', this.updateSizeHandler);
  // this.borders.elem.firstElementChild.addEventListener('mouseover', this.hoveroverOnHandler);
  // this.borders.elem.firstElementChild.addEventListener('mouseout', this.hoveroverOffHandler);

}




//---- expand Menu -------------------------------------------------------------------------

Border.prototype.expandMenuIf = function() {
  return new Promise((resolve,reject)=>{

    if(innerWidth > 800){
      demoMenuTransformTL.clear();
      demoMenuTransformTL
        .fromTo(
          ISU.MASTER,{
            maxWidth: ISU.transitionValue['masterMaxWidth']
          },{
            maxWidth: '100%'
          },0
        )
        .fromTo(
          ISU.DEMO__,{
            width: ISU.transitionValue['symetryDemoMenu'] + '%'
          },{
            width: (100 - ISU.transitionValue['unSymetryDemoMenu']) + '%'
          },0
        )

        demoMenuTransformTL.play();
    }
    this.unSymetryEachMenuTransform();

    


    
//     this.borders.rect.setAttributeNS(null, 'stroke', 'ivory');
//     if(innerWidth<800){
//       this.smallerRestElemBorders();
//     }
//     this.animRectBorder(this)
  
//   })
  
// };


// Border.prototype.expandMenuElseIf = function() {
//   return new Promise((resolve,reject)=>{

    
//     this.smallMenuSize = this.borders.elem.firstElementChild.clientWidth;
//     this.biggeredElemPath = document.getElementById(biggeredElem.id + 'Border');



//     this.unSymetryEachMenuTransform();

//     biggeredElem.firstElementChild.classList.add("menutransition");

//     setDefaultBorderSize(biggeredElem);




    
//     this.biggeredElemPath.setAttributeNS(null, 'stroke', eval(biggeredElem.id + 'Border').strokeColor);

//     //--- stop biggredElem wavy animation ---------------------------------------------------------
//     document.getElementById(biggeredElem.id + 'BorderWavy1').setAttribute('d', '');
//     document.getElementById(biggeredElem.id + 'BorderWavy2').setAttribute('d', '');
//     eval('run' + biggeredElem.id.charAt(0).toUpperCase() + biggeredElem.id.slice(1) + 'Border').stopTl()
//     //-----------------------------------------------------------------------------------------------
//     if(innerWidth<800){
//       this.smallerRestElemBordersElseIf();
//     }
//     this.animRectBorder(this)


      setTimeout(()=>{
        console.log('menu expanding is working')
        resolve();
      },2000)
  
//     setTimeout(() => {

//       biggeredElem.firstElementChild.classList.remove("menutransition");

//     }, transitionValue.duration * 1000);
//       
  
    
  })
  
};
  
  
// Border.prototype.expandMenuElse = function() {
//   return new Promise((resolve,reject)=>{
//     this.restElems = getRestElems(this.borders.elem);

//     allElems.forEach((allElem) => {
//       allElem.classList.add("menutransition");
//       allElem.style.width = '';
//       allElem.style.height = '';
//       if (allElem == this.borders.elem) {
//         allElem.firstElementChild.classList.add("menutransition");
//       }
//     })


//     if(innerWidth > 800){
//       // demoMenuTransformTL
//       //   .fromTo(
//       //     MASTER,{
//       //       maxWidth: transitionValue['masterMaxWidth']
//       //     },{
//       //       maxWidth: '100%'
//       //     },0
//       //   )
//       //   .fromTo(
//       //     DEMO__,{
//       //       width:transitionValue['symetryDemoMenu'] + '%'
//       //     },{
//       //       width: (100 - transitionValue['unSymetryDemoMenu']) + '%'
//       //     },0
//       //   )
//       demoMenuTransformTL.reverse();

//       // gsap.fromTo(
//       //   MASTER,{
//       //       maxWidth: '100%'
//       //     },{
//       //       maxWidth: transitionValue['masterMaxWidth'],
//       //       duration: transitionValue['duration'],
//       //       ease: transitionValue['gsapEase']
//       //     }
//       // )
//       // gsap.fromTo(
//       //   DEMO__,{
//       //     width: (100 - transitionValue['unSymetryDemoMenu']) + '%'
//       //   },{
//       //     width: transitionValue['symetryDemoMenu'] + '%',
//       //     duration: transitionValue['duration'],
//       //     ease: transitionValue['gsapEase']
//       //   }
//       // )
//     }
//     setDefaultBorderSize(this.borders.elem);




//       this.borders.rect.setAttributeNS(null, 'stroke', this.borders.strokeColor);

//       //--- stop this.elem wavy animation ---------------------------------------------------------
//       document.getElementById(this.borders.elem.id + 'BorderWavy1').setAttribute('d', '');
//       document.getElementById(this.borders.elem.id + 'BorderWavy2').setAttribute('d', '');
//       this.stopTl()
//       //-----------------------------------------------------------------------------------------------
//       if(innerWidth<800){
//         this.smallerRestElemBorders();
//       }
//       this.animRectBorder(this)






//     setTimeout(() => {


//       allElems.forEach((allElems) => {
//         allElems.classList.remove("menutransition");
//         if (allElems == this.borders.elem) {
//           allElems.firstElementChild.classList.remove("menutransition");
//         }

//       })
//       resolve()
//     }, transitionValue.duration * 1000);

  
//   })

// };

// Border.prototype.getFirstNum = function() {

//   let j = 0;

//   for (let i = 0; i < this.elemParent.childNodes.length; i++) {
//     j = j + 1;
//     if (this.elemParent.childNodes[i].nodeType != 1) {
//       j = j - 1;
//     }
//     if (this.elemParent.childNodes[i] === this.borders.elem) {
//       return j;
//     }
//   }
// }

// Border.prototype.unSymetryEachMenuTransform = function(){
//   let firstNum = this.getFirstNum(this);
//   let subMenus = [];
//   let j = 0;
  


//   subMenus.push(this.borders.elem);

//   for (let i = 0; i < this.elemParent.childNodes.length; i++) {
//     j = j + 1;
//     if (this.elemParent.childNodes[i].nodeType != 1) {
//       j = j - 1;
//     }
//     if (this.elemParent.childNodes[i].nodeType == 1) {
//       if(j != firstNum){
//         if(firstNum %2 == j%2){
//           subMenus.splice(1,0, this.elemParent.childNodes[i]);
         

//         }else if(Math.ceil(firstNum*0.5) == Math.ceil(j*0.5)){
//           subMenus.splice(2,0, this.elemParent.childNodes[i]);
        
//         }else{
//           subMenus.splice(3,0, this.elemParent.childNodes[i]);
//         }
//       }
//     }
//   }




//   allElems.forEach((allElems) => {
//     allElems.classList.add("menutransition")
//     if (allElems == this.borders.elem) {
//       allElems.firstElementChild.classList.add("menutransition");
//     }
//   })




//   this.subMenuChanging();


//   subMenus[0].style.width = transitionValue['unSymetryEachMenu'] + '%';
//   subMenus[0].style.height = transitionValue['unSymetryEachMenu'] + '%';
  
//     this.borders.elem.firstElementChild.style.width = this.subMenuChangingWidth + "px";
//     this.borders.elem.firstElementChild.style.height = this.subMenuChangingHeight + "px";
   
//   subMenus[1].style.width = transitionValue['unSymetryEachMenu'] + '%';
//   subMenus[1].style.height = (100 - transitionValue['unSymetryEachMenu']) + '%';

//   subMenus[2].style.width = (100 - transitionValue['unSymetryEachMenu']) + '%';
//   subMenus[2].style.height = transitionValue['unSymetryEachMenu'] + '%';

//   subMenus[3].style.width = (100 - transitionValue['unSymetryEachMenu']) + '%';
//   subMenus[3].style.height = (100 - transitionValue['unSymetryEachMenu']) + '%';


//   setTimeout(() => {

//     allElems.forEach((allElems) => {
//       allElems.classList.remove("menutransition")
//       if (allElems == this.borders.elem) {
//         allElems.firstElementChild.classList.remove("menutransition");
//       }
//     })

//       this.borders.elem.firstElementChild.style.width = '100%';
//       this.borders.elem.firstElementChild.style.height = '100%';

//   }, transitionValue['duration'] * 1000 );


//   // if (!this.subMenuTransfromTL) {

//   //   this.subMenuTransfromTL = gsap.timeline();

//   //   this.subMenuTransfromTL
//   //     .to(
//   //       subMenus[0],{
//   //         width: transitionValue['unSymetryEachMenu'] + '%',
//   //         height: transitionValue['unSymetryEachMenu'] + '%',
//   //         duration: transitionValue['duration'],
//   //         ease:'none'
//   //       },0
//   //     )
//   //     .to(
//   //       subMenus[1],{
//   //         width: transitionValue['unSymetryEachMenu'] + '%',
//   //         height: (100 - transitionValue['unSymetryEachMenu']) + '%',
//   //         duration: transitionValue['duration'],
//   //         ease:'none'
//   //       },0
//   //     )
//   //     .to(
//   //       subMenus[2],{
//   //         width: (100 - transitionValue['unSymetryEachMenu']) + '%',
//   //         height: transitionValue['unSymetryEachMenu'] + '%',
//   //         duration: transitionValue['duration'],
//   //         ease:'none'
//   //       },0
//   //     )
//   //     .to(
//   //       subMenus[3],{
//   //         width: (100 - transitionValue['unSymetryEachMenu']) + '%',
//   //         height: (100 - transitionValue['unSymetryEachMenu']) + '%',
//   //         duration: transitionValue['duration'],
//   //         ease:'none'
//   //       },0
//   //     )

//   // } else {
//   //   this.subMenuTransfromTL.resume();
//   // }



// ///-------------------------------



//   // gsap.to(
//   //   subMenus[0],{
//   //     width: transitionValue['unSymetryEachMenu'] + '%',
//   //     height: transitionValue['unSymetryEachMenu'] + '%',
//   //     duration: transitionValue['duration'],
//   //     ease:'none'
//   //   }
//   // )
//   // gsap.to(
//   //   subMenus[1],{
//   //     width: transitionValue['unSymetryEachMenu'] + '%',
//   //     height: (100 - transitionValue['unSymetryEachMenu']) + '%',
//   //     duration: transitionValue['duration'],
//   //     ease:'none'
//   //   }
//   // )
//   // gsap.to(
//   //   subMenus[2],{
//   //     width: (100 - transitionValue['unSymetryEachMenu']) + '%',
//   //     height: transitionValue['unSymetryEachMenu'] + '%',
//   //     duration: transitionValue['duration'],
//   //     ease:'none'
//   //   }
//   // )
//   // gsap.to(
//   //   subMenus[3],{
//   //     width: (100 - transitionValue['unSymetryEachMenu']) + '%',
//   //     height: (100 - transitionValue['unSymetryEachMenu']) + '%',
//   //     duration: transitionValue['duration'],
//   //     ease:'none'
//   //   }
//   // )




 
// }

// Border.prototype.getPadding = function(){
//   this.botMenuPaddingTop = parseFloat(window.getComputedStyle(MENU__).paddingTop);
//   this.botMenuPaddingLeft = parseFloat(window.getComputedStyle(MENU__).paddingLeft);
//   this.botMenuPaddingRight = parseFloat(window.getComputedStyle(MENU__).paddingRight);
//   this.botMenuPaddingBot = parseFloat(window.getComputedStyle(MENU__).paddingBottom);
//   this.botMenuPaddingWidth = this.botMenuPaddingLeft + this.botMenuPaddingRight;
//   this.botMenuPaddingHeight = this.botMenuPaddingTop + this.botMenuPaddingBot;

//   this.liPaddingTop = parseFloat(window.getComputedStyle(this.borders.elem).paddingTop);
//   this.liPaddingLeft = parseFloat(window.getComputedStyle(this.borders.elem).paddingLeft);
//   this.liPaddingRight = parseFloat(window.getComputedStyle(this.borders.elem).paddingRight);
//   this.liPaddingBot = parseFloat(window.getComputedStyle(this.borders.elem).paddingBottom);
//   this.liPaddingWidth = this.liPaddingLeft + this.liPaddingRight;
//   this.liPaddingHeight = this.liPaddingTop + this.liPaddingBot;

// }


// Border.prototype.subMenuChanging = function() {
//   this.getPadding();
  
//   if(innerWidth > 800){
//     this.subMenuChangingWidth = ((innerWidth * (transitionValue['unSymetryDemoMenu'] / 100) - this.botMenuPaddingWidth) * (transitionValue['unSymetryEachMenu'] / 100)) - this.liPaddingWidth;
//     this.subMenuChangingHeight = ((innerHeight - this.botMenuPaddingHeight) * (transitionValue['unSymetryEachMenu'] / 100))- this.liPaddingHeight ;
    
//   }else{
//     if(innerWidth > remToPx(transitionValue['masterMinWidth'])){
//       console.log('IF IS WORKING')
//       this.subMenuChangingWidth =(innerWidth - this.botMenuPaddingWidth ) * (transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingWidth ;
//       this.subMenuChangingHeight = (innerHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingHeight ;
//       console.log('innerWidth',innerWidth,'innerHeight',innerHeight);
//       console.log('innerHeight',innerHeight,'innerHeight - LOGO__.clientHeight',innerHeight - LOGO__.clientHeight,'innerHeight - LOGO__.clientHeight - demoVideoHeight',innerHeight - LOGO__.clientHeight - demoVideoHeight,'innerHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight',innerHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight,'(innerHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue[unSymetryEachMenu] / 100)', (innerHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue['unSymetryEachMenu'] / 100), 'this.liPaddingHeight',this.liPaddingHeight,'(innerHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue[unSymetryEachMenu] / 100) - this.liPaddingHeight', (innerHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingHeight )
//       console.log('this.subMenuChangingHeight',this.subMenuChangingHeight)
//     }else{
//       console.log('ELSE IS WORKING')
//       this.subMenuChangingWidth =(remToPx(transitionValue['masterMinWidth']) - this.botMenuPaddingWidth ) * (transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingWidth ;
//       this.subMenuChangingHeight = (MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingHeight ;
//       console.log('MASTER.clientHeight',MASTER.clientHeight,'MASTER.offsetHeight: ',MASTER.offsetHeight, 'MASTER.offsetHeight - LOGO__.clientHeight: ',MASTER.offsetHeight - LOGO__.clientHeight, 'MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight: ',MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight, 'MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight: ' ,MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight, '(MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue[unSymetryEachMenu] / 100): ', (MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue['unSymetryEachMenu'] / 100), 'MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue[unSymetryEachMenu] / 100) - this.liPaddingHeight: ',(MASTER.offsetHeight - LOGO__.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingHeight)
//     }
//   }

// }


//---- create rectangle border ------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

Border.prototype.createRectBorder = function() {
  
  this.svgCanvas.style.width = this.w + this.extraSVGspace + 'px';
  this.svgCanvas.style.height = this.h + this.extraSVGspace +'px';
  // -------------svg transform and translate is not working on Safari, so need to use top and left -------------
  // this.svgCanvas.setAttribute('transform', `translate( -${this.extraSVGspace/2}, 0)`);
  this.svgCanvas.style.left = `-${this.extraSVGspace/2}px`;
  this.svgCanvas.style.top = `-${this.extraSVGspace/2}px`;
  
  

  this.rect.setAttributeNS(null, 'x', this.x);
  this.rect.setAttributeNS(null, 'y', this.y);
  this.rect.setAttributeNS(null, 'rx', this.border);
  this.rect.setAttributeNS(null, 'ry', this.border);
  this.rect.style.width = this.w + 'px';
  this.rect.style.height = this.w + 'px';
  this.rect.setAttributeNS(null, 'fill', this.color);
  this.rect.setAttributeNS(null, 'stroke', this.strokeColor);
  this.rect.setAttribute('transform', `translate(${this.extraSVGspace/2},${this.extraSVGspace/2})`);
  // this.rect.style.left = this.extraSVGspace/2 + 'px';
  // this.rect.rect.style.top = this.extraSVGspace/2 + 'px';


  
  this.wavy1.setAttribute('transform', `translate(${this.extraSVGspace/2},${this.extraSVGspace/2})`);
  this.wavy2.setAttribute('transform', `translate(${this.extraSVGspace/2},${this.extraSVGspace/2})`);

}

Border.prototype.animRectBorder = function() {
  return new Promise((resolve,reject)=>{

  
//   f += dir;

//   this.borders.rect.parentElement.style.width = this.borders.elem.firstElementChild.clientWidth + this.extraSVGspace + 'px';
//   this.borders.rect.parentElement.style.height = this.borders.elem.firstElementChild.clientHeight + this.extraSVGspace + 'px';
//   this.borders.rect.style.width = this.borders.elem.firstElementChild.clientWidth +'px';
//   this.borders.rect.style.height = this.borders.elem.firstElementChild.clientHeight +'px';


//   if (biggeredElem != null) {
//     this.biggeredElemPath.parentElement.style.width = this.biggeredElemPath.parentElement.parentElement.clientWidth + this.extraSVGspace + 'px';
//     this.biggeredElemPath.parentElement.style.height = this.biggeredElemPath.parentElement.parentElement.clientHeight + this.extraSVGspace + 'px';
//     this.biggeredElemPath.style.width = this.biggeredElemPath.parentElement.parentElement.clientWidth +'px';
//     this.biggeredElemPath.style.height = this.biggeredElemPath.parentElement.parentElement.clientHeight +'px';
//   }
  
  

//   if (!(f % NF)) {
    
//     this.stopAni();

//     if (menuExpanded) {
    
//       this.w = this.subMenuChangingWidth;
//       this.h = this.subMenuChangingHeight;

//       this.borders.rect.parentElement.style.width = this.w + this.extraSVGspace + 'px';
//       this.borders.rect.parentElement.style.height = this.h + this.extraSVGspace + 'px';
  


//       this.borders.rect.style.width =  this.w;
//       this.borders.rect.style.height = this.h;



// //  //---------------------------------------------------
// //       let dataPoints = this.getDataPoints(this);

// //       let p0 = dataPoints.points2;
// //       let p = dataPoints.pointsTween2;
      
// //       console.log('p0',p0)
// //       console.log( `M ${p0[0].x} ${p0[0].y} , ${p0[1].x} ${p0[1].y} , ${p0[2].x} ${p0[2].y} , ${p0[3].x} ${p0[3].y} , ${p0[4].x} ${p0[4].y} , ${p0[5].x} ${p0[5].y} , ${p0[6].x} ${p0[6].y} , ${p0[7].x} ${p0[7].y}`)
// //       document.getElementById(this.borders.elem.id + 'BorderWavy1').setAttribute('d', `M ${p0[0].x} ${p0[0].y} , ${p0[1].x} ${p0[1].y} , ${p0[2].x} ${p0[2].y} , ${p0[3].x} ${p0[3].y} , ${p0[4].x} ${p0[4].y} , ${p0[5].x} ${p0[5].y} , ${p0[6].x} ${p0[6].y} , ${p0[7].x} ${p0[7].y}`)
// //       document.getElementById(this.borders.elem.id + 'BorderWavy2').setAttribute('d', `M ${p[0].x} ${p[0].y} , ${p[1].x} ${p[1].y} , ${p[2].x} ${p[2].y} , ${p[3].x} ${p[3].y} , ${p[4].x} ${p[4].y} , ${p[5].x} ${p[5].y} , ${p[6].x} ${p[6].y} , ${p[7].x} ${p[7].y}`)
// //  //---------------------------------------------------
 
     
 
//     }
    
//     f = 0;


    setTimeout(()=>{
      console.log('animRectBorder is working');
      resolve()
    },2000)
  // if (menuExpanded) {
    // resolve()
//     this.createWavyAnimation(() => {
//       eval(this.borders.elem.id + 'MenuController').addEventCB();
//       eval(this.borders.elem.id + 'MenuController').callAfterAnim(this.borders.elem);
//     });

  // } else {
    // reject()
//     eval(this.borders.elem.id + 'MenuController').addEventCB()
  // }


//     return
//   }

//   requestAni = requestAnimationFrame(() => this.animRectBorder(this));
  })
}


// Border.prototype.stopAni = function() {
//   cancelAnimationFrame(requestAni);
//   requestAni = null;
// }


// Border.prototype.smallerRestElemBorders = function(){
  // this.restElems = ISU.getRestElems(this.borders.elem);
  //   console.log(this.restElems)
//   this.restElems.forEach((restElem)=>{
//     document.getElementById(`${restElem.id}Border`).parentElement.parentElement.classList.add('menutransition');
//     document.getElementById(`${restElem.id}Border`).parentElement.classList.add('menutransition');
//     document.getElementById(`${restElem.id}Border`).classList.add('menutransition');
//     // document.querySelector(`#${restElem.id} .borders .borderCover`).style.display = 'none';
//   });


//   if(menuExpanded){
//     this.restElems.forEach((restElem)=>{
//       this.setBordersSizeFamily(restElem,'bordersSmallSize');

//     })
//   }else{
//     if(innerWidth < 800){
//     this.restElems.forEach((restElem)=>{
//         this.setBordersSizeFamily(restElem,'borderSize800');

//       })
//     }
//   }
  
 
//   setTimeout(() => {
//     this.restElems.forEach((elem)=>{
//       document.getElementById(`${elem.id}Border`).classList.remove('menutransition');
//       document.getElementById(`${elem.id}Border`).parentElement.classList.remove('menutransition');
//       document.getElementById(`${elem.id}Border`).parentElement.parentElement.classList.remove('menutransition');
//       // document.querySelector(`#${elem.id} .borders .borderCover`).style.display = 'initial';
//     });
//   }, transitionValue['duration'] * 1000);
// }

// Border.prototype.setBordersSizeFamily = function(elem, borderSize){
//   document.querySelector(`#${elem.id} .borders`).style.width = `var(--${borderSize})`;
//   document.querySelector(`#${elem.id} .borders`).style.height = `var(--${borderSize})`;

//   document.querySelector(`#${elem.id} .borders svg`).style.width = `calc(${transitionValue[borderSize]} + ${this.extraSVGspace}px`;
//   document.querySelector(`#${elem.id} .borders svg`).style.height = `calc(${transitionValue[borderSize]} + ${this.extraSVGspace}px`;
  

//   document.querySelectorAll(`#${elem.id} .borders svg rect`).forEach((rect)=>{
//     rect.style.width = `var(--${borderSize})`;
//     rect.style.height = `var(--${borderSize})`;
//   })
// }

// Border.prototype.smallerRestElemBordersElseIf = function(){

//     document.querySelector(`#${biggeredElem.id} .borders`).style.width = transitionValue['bordersSmallSize'];
//     document.querySelector(`#${biggeredElem.id} .borders`).style.height = transitionValue['bordersSmallSize'];


//     setTimeout(() => {
//     }, transitionValue['duration'] * 1000);

// }

// //---- create Border ----------------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------


// Border.prototype.getDataPoints = function() {

//   // let w = this.w + this.borders.radius * 2;
//   // let h = this.h + this.borders.radius * 2;
//   let w = this.w ;
//   let h = this.h ;


//   // this.x = this.borders.x - this.borders.radius;
//   // this.y = this.borders.y - this.borders.radius ;
//   this.x = this.borders.x;
//   this.y = this.borders.y;

//   let points = [];
//   let pointsTween = [];

//   if (this.borders.border > this.borders.w / 2) {
//     return this.borders.border = this.borders.w / 2 - 10;
//   }

//   let getPositions = function() {
//     return {
//       position0: {
//         x: this.x + this.borders.border,
//         y: this.y
//       },
//       position1: {
//         x: this.x + w - this.borders.border,
//         y: this.y
//       },
//       position2: {
//         x: this.x + w,
//         y: this.y + this.borders.border
//       },
//       position3: {
//         x: this.x + w,
//         y: this.y + h - this.borders.border
//       },
//       position4: {
//         x: this.x + w - this.borders.border,
//         y: this.y + h
//       },
//       position5: {
//         x: this.x + this.borders.border,
//         y: this.y + h
//       },
//       position6: {
//         x: this.x,
//         y: this.y + h - this.borders.border
//       },
//       position7: {
//         x: this.x,
//         y: this.y + this.borders.border
//       }
//     }
//   }


//   let positions = getPositions.call(this);

//   points1 = getMutipliedPoints(this, positions, 0);
//   points2 = getMutipliedPoints(this, positions, 1);

//   //--- get points for tween ---------------------------------------------------------------------------------

//   w = w + this.borders.radius * 2;
//   h = h + this.borders.radius * 2;

//   this.x = this.borders.x - this.borders.radius;
//   this.y = this.borders.y - this.borders.radius;

//   positions = getPositions.call(this);

//   pointsTween1 = getMutipliedPoints(this, positions, 0);
//   pointsTween2 = getMutipliedPoints(this, positions, 1);
  
//   return {
//     points1: points1,
//     points2: points2,
//     pointsTween1: pointsTween1,
//     pointsTween2: pointsTween2
//   }

//   function getMutipliedPoints(self, positions, plusNum) {
//     let slice = self.borders.multiply + plusNum;
//     let slicedLength = [];


//     Object.values(positions).forEach((value, i, arr) => {
 
//       if ((i % 2) == 0) {

//         let length = {
//           x: arr[i + 1].x - value.x,
//           y: arr[i + 1].y - value.y
//         }
//         //---smoodness of wavy animation---------

//         slicedLength.push({
//           x: value.x,
//           y: value.y
//         })

//         //----------------------------------------
//         for (let j = 1; j < slice + 1; j++) {
//           slicedLength.push({
//             x: value.x + (length.x * (j / slice)),
//             y: value.y + (length.y * (j / slice))
//           })
//         }

//       }
//     })

//     return slicedLength;
//   }

// };


// Border.prototype.updateSize = function() {


//   this.borders.radius = innerWidth > 800 ? 7 : 4;
//   this.borders.strokeWidth = innerWidth > 800 ? 8 : 5;
  


//     if (this.borders.elem == biggerElem) {
//       this.subMenuChanging();

//       let width = this.borders.elem.firstElementChild.clientWidth;
//       // let height = this.borders.elem.firstElementChild.offsetHeight;
//       let height = this.subMenuChangingHeight;
//       // console.log('this.borders.elem: ',this.borders.elem.firstElementChild,'this.borders.elem.firstElementChild.clientHeight: ',this.borders.elem.firstElementChild.getBoundingClientRect().height)
//       console.log('this.subMenuChangingHeight',this.subMenuChangingHeight)
//       console.log('width: ',width,'height: ',height)

//       this.borders.rect.parentElement.style.width = width + this.extraSVGspace + 'px'
//       this.borders.rect.parentElement.style.height = height + this.extraSVGspace + 'px'
//       this.borders.rect.style.width = width + 'px';
//       this.borders.rect.style.height = height + 'px';

//       this.w = width;
//       // this.h = height;
//       this.h = this.subMenuChangingHeight;
//       this.createWavyAnimation(() => {});

//     }else{
//       if(innerWidth > 1400){
//         this.setBordersSizeFamily(this.borders.elem,'borderSize1400');

//       }else if(innerWidth > 800){
//         this.setBordersSizeFamily(this.borders.elem,'bordersSize');

//       }else{
//         if(menuExpanded){
//           this.setBordersSizeFamily(this.borders.elem,'bordersSmallSize');
//         }else{
//           this.setBordersSizeFamily(this.borders.elem,'borderSize800');
//         }
//       }
//     }
  

// };


// //---- create Wavy Animation --------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------



Border.prototype.createWavyAnimation = function() {
  return new Promise((resolve,reject)=>{
    if(menuExpanded ==false){
      reject()
    }else{

 

//   if (!this.tl) {

//     this.tl = gsap.timeline({
//       onUpdate: update,
//       onUpdateParams: [this]

//     });
//     let dataPoints = this.getDataPoints(this);
  

//     let points1 = dataPoints.points1;
//     let points2 = dataPoints.points2;


//     let pointsTween1 = dataPoints.pointsTween1;
//     let pointsTween2 = dataPoints.pointsTween2;

//   } else {
//     this.tl.resume();


//     dataPoints = this.getDataPoints(this);

//     points1 = dataPoints.points1;
//     points2 = dataPoints.points2;


//     pointsTween1 = dataPoints.pointsTween1;
//     pointsTween2 = dataPoints.pointsTween2;
//   }


//   for (let i = 0; i < points1.length; i++) {

//     let duration = random(this.borders['speed'][0], this.borders['speed'][1]);



//     let tween1 = gsap.to(points1[i], {
//       duration: duration,
//       x: pointsTween1[i].x,
//       y: pointsTween1[i].y,
//       repeat: -1,
//       yoyo: true,
//       ease: Sine.easeInOut
//     });

//     let tween2 = gsap.to(points2[i], {
//       duration: duration,
//       x: pointsTween2[i].x,
//       y: pointsTween2[i].y,
//       repeat: -1,
//       yoyo: true,
//       ease: Sine.easeInOut
//     });
    


//     this.tl.add(tween1, -random(duration))
//     this.tl.add(tween2, -random(duration))
//   }

//   document.getElementById(this.borders.elem.id + 'BorderWavy1').setAttributeNS(null, 'stroke-width', this.borders.strokeWidth + this.borders.strokeWidthUnit);
//   document.getElementById(this.borders.elem.id + 'BorderWavy2').setAttributeNS(null, 'stroke-width', this.borders.strokeWidth + this.borders.strokeWidthUnit);

//   function update(self) {

//     document.getElementById(self.borders.elem.id + 'BorderWavy1').setAttribute('d', tweenCardinal(points1, true, 0.5))
//     document.getElementById(self.borders.elem.id + 'BorderWavy2').setAttribute('d', tweenCardinal(points2, true, 0.5))
//   }


//   function tweenCardinal(data, closed, tension) {

//     if (data.length < 1) return "M0 0";
//     if (tension == null) tension = 1;

//     var size = data.length - (closed ? 0 : 1);
//     var path = "M" + data[0].x + " " + data[0].y + " C";

//     for (var i = 0; i < size; i++) {

//       var p0, p1, p2, p3;

//       if (closed) {
//         p0 = data[(i - 1 + size) % size];
//         p1 = data[i];
//         p2 = data[(i + 1) % size];
//         p3 = data[(i + 2) % size];

//       } else {
//         p0 = i == 0 ? data[0] : data[i - 1];
//         p1 = data[i];
//         p2 = data[i + 1];
//         p3 = i == size - 1 ? p2 : data[i + 2];
//       }

//       var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
//       var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

//       var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
//       var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

//       path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
//     }

//     return closed ? path + "z" : path;
//   }

//   function random(min, max) {
//     if (max == null) {
//       max = min;
//       min = 0;
//     }
//     if (min > max) {
//       var tmp = min;
//       min = max;
//       max = tmp;
//     }
//     return min + (max - min) * Math.random();
//   }

//   console.log('done wavy animation')
    resolve();
    }

  })
};

// Border.prototype.stopTl = function() {
//   this.tl.pause(0);
// }



// //---- create Wavy Animation --------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------

// Border.prototype.hoveroverOn = function() {
//   // if(this.borders.elem != biggerElem){
//     // document.querySelector(`#${this.borders.elem.id} .borderCover`).classList.add('borderCoverWhite');
//     this.rect.setAttributeNS(null, 'stroke', `url(#SVGIvory)`);
//     document.querySelector(`#${this.id} .neon1`).classList.add(`${this.id}Neon1`);
//     document.querySelector(`#${this.id} .neon2`).classList.add(`${this.id}Neon2`);
//   // }
// };

// Border.prototype.hoveroverOff = function() {
//     // if(this.borders.elem != biggerElem){
//       // document.querySelector(`#${this.borders.elem.id} .borderCover`).classList.remove('borderCoverWhite');
//       this.borders.rect.setAttributeNS(null, 'stroke', this.borders.strokeColor);
//       document.querySelector(`#${this.borders.elem.id} .neon1`).classList.remove(`${this.borders.elem.id}Neon1`);
//       document.querySelector(`#${this.borders.elem.id} .neon2`).classList.remove(`${this.borders.elem.id}Neon2`);
//     // }
// };



//------------------extra function-----------------------






//---- get rgb color -------- 
// function getRGB(id){
//   let getRgb1= document.getElementById(`${id}BorderColor`).firstElementChild.attributes[1].value;
//   let getRgb2= document.getElementById(`${id}BorderColor`).lastElementChild.attributes[1].value;
//   let rgb = [];
//   let rgb1=[];
//   let rgb2=[]

//   getRgb1.replace(/(\d[\d\.]*)/g, function( x ) { var n = Number(x); if (x == n) { rgb1.push(x); }  })
//   getRgb2.replace(/(\d[\d\.]*)/g, function( x ) { var n = Number(x); if (x == n) { rgb2.push(x); }  })

//   rgb.push(rgb1);
//   rgb.push(rgb2);
  
//   return rgb;
// }




// let workBorder = new border('work');
// let skillBorder = new border('skill');
// let paintBorder = new border('paint');
// let infoBorder = new border('info');

// let runWorkBorder = new Border('work');
// let runSkillBorder = new Border('skill');
// let runPaintBorder = new Border('paint');
// let runInfoBorder = new Border('info');

