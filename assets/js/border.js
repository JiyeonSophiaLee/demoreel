// console.log('border.js is working');
import * as ISU from '/assets/js/InitialSetUp.js';
// import gsap from '/assets/scripts/gsap-core.js';
// import { CSSPlugin } from "/assets/scripts/CSSPlugin.js";
// import { CSSRulePlugin } from "/assets/scripts/CSSRulePlugin.js";
// gsap.registerPlugin(CSSPlugin, CSSRulePlugin);


const demoMenuTransformTL = gsap.timeline({paused:true, duration: ISU.transitionValue['duration'],ease: "power1.inOut"});
demoMenuTransformTL.isRun = false;




export function SetDefaultRectSize(elem, menuExpanded=false){

  if(innerWidth >= 1400){
      ISU.select(`#${elem.id} .rectPack`).style.width = 'var(--rectSize1400)';
      ISU.select(`#${elem.id} .rectPack`).style.height = 'var(--rectSize1400)';
  }else if(innerWidth > 800){
      ISU.select(`#${elem.id} .rectPack`).style.width = 'var(--rectSize)';
      ISU.select(`#${elem.id} .rectPack`).style.height = 'var(--rectSize)';
  }else{
    if(menuExpanded == false){
      ISU.select(`#${elem.id} .rectPack`).style.width = 'var(--rectSize800)';
      ISU.select(`#${elem.id} .rectPack`).style.height = 'var(--rectSize800)';
    }else{
      ISU.select(`#${elem.id} .rectPack`).style.width = 'var(--rectSmallerSize)';
      ISU.select(`#${elem.id} .rectPack`).style.height = 'var(--rectSmallerSize)';
    }
  }
}
//------------------------



const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';


let requestAni = null;
let f = 0;
let dir = 1;
let NF = ISU.transitionValue['duration'] * 63;




export default function Rect(id) {
  this.id = id;
  this.elem = document.getElementById(id);
  this.rectId = id + 'Rect';
  this.rect = document.getElementById(this.rectId);
  this.svgCanvas = this.rect.parentElement;
  this.wavy1 = document.getElementById(id + 'RectWavy1');
  this.wavy2 = document.getElementById(id + 'RectWavy2');
  this.x = 0;
  this.y = 0;
  this.w = this.svgCanvas.parentElement.clientWidth;
  this.h = this.svgCanvas.parentElement.clientHeight;
  this.border = 5;
  this.borderWavyPath;
  this.multiply = 3;
  this.scale = 1;
  this.radius;
  this.speed = [2, 3];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = `url(#${this.rectId}Color)`;
  //--------------stroke width is controlled by css--------------//
  // this.strokeWidth = window.innerWidth > 800 ? 8 : 5;
  // this.strokeWidthUnit = 'px';
  this.strokeLineCap = 'square'; //square, butt or round
  this.margin = 0;
  this.setUpdateValues();

  // this.variableX = this.x;
  // this.variableY = this.y;
  // this.variableW = this.w;
  // this.variableH = this.h;
  this.wavyAnimTLRunning = false;
  this.restElems = ISU.getRestElems(this.elem);

  
  this.rectColor1 = [ISU.select(`#${this.id}RectColor stop:nth-child(1)`)];
  this.rectColor2 = [ISU.select(`#${this.id}RectColor stop:nth-child(2)`)];
  this.rectColor1.push(window.getComputedStyle(this.rectColor1[0]).stopColor);
  this.rectColor2.push(window.getComputedStyle(this.rectColor2[0]).stopColor);


  this.neonOnTL = gsap.timeline({paused:true})
  this.neonOnTL
    .fromTo(this.rectColor1[0],{
      stopColor: this.rectColor1[1]
    },{
      stopColor: 'rgb(254,246,222)',
      duration:0.6,
      ease: "Sine.inOut"
    },0)
    .fromTo(this.rectColor2[0],{
      stopColor: this.rectColor2[1]
    },{
      stopColor: 'rgb(254,246,222)',
      duration:0.6,
      ease: "Sine.inOut"
    },0)

  //----this.extraSVGspace is for gsap wiggling on wave path. even if there is this.radius, wiggling curve is go over the svg canvas with cardinal curve method---- 
  this.extraSVGspace = this.radius * 5 ;


  this.data;
  this.points = [];
  this.pointsTween = [];


  // this.expanding = false;
  // this.stop = false;


  this.getExpandMenuSizeWidth, this.getExpandMenuSizeHeight;
  // this.topMenuSize;



  //----call path-----

  this.createRect();

  //-----------------

  // this.updateResizeHandler = this.updateResize.bind(this);
  // this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  // this.hoveroverOffHandler = this.hoveroverOff.bind(this);



  // window.addEventListener('resize', this.updateResizeHandler);
  // this.elem.firstElementChild.addEventListener('mouseover', this.hoveroverOnHandler);
  // this.elem.firstElementChild.addEventListener('mouseout', this.hoveroverOffHandler);

}



// -------------------- expand Menu  --------------------//

Rect.prototype.expandMenuIf = function(demoVideoHeight,menuExpanded) {
  return new Promise((resolve,reject)=>{
    // this.demoVideoHeight = demoVideoHeight;
    
   
    
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
        demoMenuTransformTL.isRun = true;
        
    }
    this.unSymetryEachMenuTransform(demoVideoHeight);

   
    this.rect.setAttributeNS(null, 'stroke', 'url(#SVGIvory)');

    if(innerWidth <= 800){
      this.restElems.forEach((elem)=>{
        ISU.select(`#${elem.id} .rectPack`).classList.add('menutransition');
        ISU.select(`#${elem.id} .rectPack svg`).classList.add('menutransition');
        ISU.select(`#${elem.id} .rectPack svg rect`).classList.add('menutransition');

        SetDefaultRectSize(elem,menuExpanded);
                
        ISU.select(`#${elem.id} .rectPack svg`).style.width = `calc(var(--rectSmallerSize) + ${this.extraSVGspace}px`;
        ISU.select(`#${elem.id} .rectPack svg`).style.height = `calc(var(--rectSmallerSize) + ${this.extraSVGspace}px`;
        ISU.select(`#${elem.id} .rectPack svg rect`).style.width = 'var(--rectSmallerSize)';
        ISU.select(`#${elem.id} .rectPack svg rect`).style.height = 'var(--rectSmallerSize)';

        setTimeout(() => {
          ISU.select(`#${elem.id} .rectPack`).classList.remove('menutransition');
          ISU.select(`#${elem.id} .rectPack svg`).classList.remove('menutransition');
          ISU.select(`#${elem.id} .rectPack svg rect`).classList.remove('menutransition');
        }, ISU.transitionValue['duration'] * 1000);
      })
    }
    
    resolve();
  })
  
};
Rect.prototype.expandMenuElseIf = function(demoVideoHeight, biggeredElem, menuExpanded) {
  return new Promise((resolve,reject)=>{
    this.smallMenuSize = this.elem.firstElementChild.clientWidth;
    this.biggeredElemRect = document.getElementById(biggeredElem.id + 'Rect');

    this.unSymetryEachMenuTransform(demoVideoHeight);




    this.rect.setAttributeNS(null, 'stroke', 'url(#SVGIvory)');
   
    //--- stop biggredElem wavy animation ---------------------------------------------------------
    document.getElementById(biggeredElem.id + 'RectWavy1').setAttribute('d', '');
    document.getElementById(biggeredElem.id + 'RectWavy2').setAttribute('d', '');

    //-----------------------------------------------------------------------------------------------

    ISU.select(`#${biggeredElem.id} .rectPack`).classList.add("menutransition");
    ISU.select(`#${biggeredElem.id} .rectPack`).style.width = this.smallMenuSize + 'px';
    ISU.select(`#${biggeredElem.id} .rectPack`).style.height = this.smallMenuSize + 'px';

  
    setTimeout(() => {
      biggeredElem.firstElementChild.classList.remove("menutransition");
      ISU.select(`#${biggeredElem.id} .rectPack`).classList.remove("menutransition");
    }, ISU.transitionValue['duration'] * 1000);

    resolve();
    
  })
  
};

  
Rect.prototype.expandMenuElse = function() {
  return new Promise((resolve,reject)=>{
    if(innerWidth > 800){
      
      if(demoMenuTransformTL.isRun == true){
        console.log('------If expandMenu--------')
        demoMenuTransformTL.reverse();
        demoMenuTransformTL.isRun = false;
      }else{
        console.log('---------Else expandMenu---------',ISU.DEMO__)
        gsap.to(
          ISU.MASTER,{
            maxWidth: ISU.transitionValue['masterMaxWidth'],
            duration: ISU.transitionValue['duration'],
            ease: "power1.inOut"
          }
        )
        gsap.to(
          ISU.DEMO__,{
            width: ISU.transitionValue['symetryDemoMenu'] + '%',
            duration: ISU.transitionValue['duration'],
            ease: "power1.inOut"
          }
        )
      }
    }
    this.symetryEachMenuTransform();
    
    
    SetDefaultRectSize(this.elem);


    //--- stop this.elem wavy animation ---------------------------------------------------------
    document.getElementById(this.id + 'RectWavy1').setAttribute('d', '');
    document.getElementById(this.id + 'RectWavy2').setAttribute('d', '');
    // this.stopTl()
    //-----------------------------------------------------------------------------------------------
    
    if(innerWidth<800){

      this.restElems.forEach((elem)=>{
        ISU.select(`#${elem.id} .rectPack`).classList.add('menutransition');
        ISU.select(`#${elem.id} .rectPack svg rect`).classList.add('menutransition');

        SetDefaultRectSize(elem);
          
        ISU.select(`#${elem.id} .rectPack svg`).style.width = `calc(var(--rectSize800) + ${this.extraSVGspace}px`;
        ISU.select(`#${elem.id} .rectPack svg`).style.height = `calc(var(--rectSize800) + ${this.extraSVGspace}px`;
        ISU.select(`#${elem.id} .rectPack svg rect`).style.width = 'var(--rectSize800)';
        ISU.select(`#${elem.id} .rectPack svg rect`).style.height = 'var(--rectSize800)';

        setTimeout(() => {
          ISU.select(`#${elem.id} .rectPack`).classList.remove('menutransition');
          ISU.select(`#${elem.id} .rectPack svg rect`).classList.remove('menutransition');
        }, ISU.transitionValue['duration'] * 1000);
      });
    }

    resolve();
  })

};
Rect.prototype.setUpdateValues = function(){
  this.borderWavyPath = Math.abs((window.innerWidth - window.innerHeight )) * 0.01 + 25;
  this.radius = window.innerWidth > 800 ? ( window.innerWidth > 1400 ? 9 : 7 ) : 5;
}


Rect.prototype.getFirstNum = function() {
  let j = 0;

  for (let i = 0; i < this.elem.parentElement.childNodes.length; i++) {
    j = j + 1;
    if (this.elem.parentElement.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (this.elem.parentElement.childNodes[i] === this.elem) {
      return j;
    }
  }
}

Rect.prototype.unSymetryEachMenuTransform = function(demoVideoHeight){
  let firstNum = this.getFirstNum();
  let allMenusInOrder = [this.elem];
  let j = 0;
  

  for (let i = 0; i < this.elem.parentElement.childNodes.length; i++) {
    j = j + 1;
    if (this.elem.parentElement.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (this.elem.parentElement.childNodes[i].nodeType == 1) {
      if(j != firstNum){
        if(firstNum %2 == j%2){
          allMenusInOrder.splice(1,0, this.elem.parentElement.childNodes[i]);
         

        }else if(Math.ceil(firstNum*0.5) == Math.ceil(j*0.5)){
          allMenusInOrder.splice(2,0, this.elem.parentElement.childNodes[i]);
        
        }else{
          allMenusInOrder.splice(3,0, this.elem.parentElement.childNodes[i]);
        }
      }
    }
  }




  ISU.allElems.forEach((elem) => {
    elem.classList.add("menutransition")
    if (elem == this.elem) {
      elem.firstElementChild.classList.add("menutransition");
    }
  })


  this.getExpandMenuSize(demoVideoHeight);

  
  allMenusInOrder[0].style.width = ISU.transitionValue['unSymetryEachMenu'] + '%';
  allMenusInOrder[0].style.height = ISU.transitionValue['unSymetryEachMenu'] + '%';
  
    this.elem.firstElementChild.style.width = this.getExpandMenuSizeWidth + "px";
    this.elem.firstElementChild.style.height = this.getExpandMenuSizeHeight + "px";
   
  allMenusInOrder[1].style.width = ISU.transitionValue['unSymetryEachMenu'] + '%';
  allMenusInOrder[1].style.height = (100 - ISU.transitionValue['unSymetryEachMenu']) + '%';

  allMenusInOrder[2].style.width = (100 - ISU.transitionValue['unSymetryEachMenu']) + '%';
  allMenusInOrder[2].style.height = ISU.transitionValue['unSymetryEachMenu'] + '%';

  allMenusInOrder[3].style.width = (100 - ISU.transitionValue['unSymetryEachMenu']) + '%';
  allMenusInOrder[3].style.height = (100 - ISU.transitionValue['unSymetryEachMenu']) + '%';

  setTimeout(() => {
    ISU.allElems.forEach((elem) => {
      elem.classList.remove("menutransition")
      if (elem == this.elem) {
        elem.firstElementChild.classList.remove("menutransition");
      }
    })

    this.elem.firstElementChild.style.width = '100%';
    this.elem.firstElementChild.style.height = '100%';

  }, ISU.transitionValue['duration'] * 1000 );

}
Rect.prototype.symetryEachMenuTransform = function(){
  
  ISU.allElems.forEach((elem) => {
    elem.classList.add("menutransition");
    elem.style.width = '';
    elem.style.height = '';
    
    if (elem == this.elem) {
      elem.firstElementChild.classList.add("menutransition");
    }
  });

  setTimeout(() => {
    ISU.allElems.forEach((elem) => {
      elem.classList.remove("menutransition");
      if (elem == this.elem) {
        elem.firstElementChild.classList.remove("menutransition");
      }
    });
  }, ISU.transitionValue['duration'] * 1000);
}

Rect.prototype.getPadding = function(){
  this.menuPaddingTop = parseFloat(window.getComputedStyle(ISU.MENU__).paddingTop);
  this.menuPaddingLeft = parseFloat(window.getComputedStyle(ISU.MENU__).paddingLeft);
  this.menuPaddingRight = parseFloat(window.getComputedStyle(ISU.MENU__).paddingRight);
  this.menuPaddingBot = parseFloat(window.getComputedStyle(ISU.MENU__).paddingBottom);
  this.menuPaddingWidth = this.menuPaddingLeft + this.menuPaddingRight;
  this.menuPaddingHeight = this.menuPaddingTop + this.menuPaddingBot;

  this.liPaddingTop = parseFloat(window.getComputedStyle(this.elem).paddingTop);
  this.liPaddingLeft = parseFloat(window.getComputedStyle(this.elem).paddingLeft);
  this.liPaddingRight = parseFloat(window.getComputedStyle(this.elem).paddingRight);
  this.liPaddingBot = parseFloat(window.getComputedStyle(this.elem).paddingBottom);
  this.liPaddingWidth = this.liPaddingLeft + this.liPaddingRight;
  this.liPaddingHeight = this.liPaddingTop + this.liPaddingBot;

}


Rect.prototype.getExpandMenuSize = function(demoVideoHeight) {
  this.getPadding();
  
  if(window.innerWidth > 800){
    this.getExpandMenuSizeWidth = ((document.body.clientWidth * (ISU.transitionValue['unSymetryDemoMenu'] / 100) - this.menuPaddingWidth) * (ISU.transitionValue['unSymetryEachMenu'] / 100)) - this.liPaddingWidth;
    if(window.innerHeight > ISU.transitionValue['masterMinHeight']){
      this.getExpandMenuSizeHeight = ((document.body.clientHeight - this.menuPaddingHeight) * (ISU.transitionValue['unSymetryEachMenu'] / 100))- this.liPaddingHeight;
    }else{
      this.getExpandMenuSizeHeight = ((ISU.transitionValue['masterMinHeight'] - this.menuPaddingHeight) * (ISU.transitionValue['unSymetryEachMenu'] / 100))- this.liPaddingHeight;
    }
  }else{
    if(window.innerWidth > ISU.remToPx(ISU.transitionValue['masterMinWidth'])){
      this.getExpandMenuSizeWidth =(document.body.clientWidth - this.menuPaddingWidth ) * (ISU.transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingWidth ;
    }else{
      this.getExpandMenuSizeWidth =(ISU.remToPx(ISU.transitionValue['masterMinWidth']) - this.menuPaddingWidth ) * (ISU.transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingWidth ;
    }
    if(window.innerHeight > ISU.transitionValue['masterMinHeight']){
      this.getExpandMenuSizeHeight = (document.body.clientHeight - ISU.LOGO__.clientHeight - demoVideoHeight - this.menuPaddingHeight) * (ISU.transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingHeight ;
    }else{
      this.getExpandMenuSizeHeight = (ISU.transitionValue['masterMinHeight'] - ISU.LOGO__.clientHeight - demoVideoHeight - this.menuPaddingHeight) * (ISU.transitionValue['unSymetryEachMenu'] / 100) - this.liPaddingHeight ;
    }

  }

}






//------------ create rectangle rect ------------//
//-----------------------------------------------------------------------------------------------

Rect.prototype.createRect = function(){
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
Rect.prototype.animRect = function( menuExpanded, biggeredElem=null) {
  return new Promise((resolve,reject)=>{
    
    function runAnimRect(){
      f += dir;

      this.svgCanvas.style.width = this.elem.firstElementChild.clientWidth + this.extraSVGspace + 'px';
      this.svgCanvas.style.height = this.elem.firstElementChild.clientHeight + this.extraSVGspace + 'px';
      this.rect.style.width = this.elem.firstElementChild.clientWidth +'px';
      this.rect.style.height = this.elem.firstElementChild.clientHeight +'px';
      
      if (biggeredElem != null) {
        this.biggeredElemRect.parentElement.style.width = this.biggeredElemRect.parentElement.parentElement.clientWidth + this.extraSVGspace + 'px';
        this.biggeredElemRect.parentElement.style.height = this.biggeredElemRect.parentElement.parentElement.clientHeight + this.extraSVGspace + 'px';
        this.biggeredElemRect.style.width = this.biggeredElemRect.parentElement.parentElement.clientWidth +'px';
        this.biggeredElemRect.style.height = this.biggeredElemRect.parentElement.parentElement.clientHeight +'px';
      }
    
      requestAni = requestAnimationFrame(()=>runAnimRect.call(this));
  

      if (!(f % NF)) {
        cancelAnimationFrame(requestAni);
        requestAni = null;
        f = 0;
        
        if (menuExpanded) {
          this.svgCanvas.style.width = this.getExpandMenuSizeWidth + this.extraSVGspace + 'px';
          this.svgCanvas.style.height = this.getExpandMenuSizeHeight + this.extraSVGspace + 'px';
      
          this.rect.style.width =  this.getExpandMenuSizeWidth;
          this.rect.style.height = this.getExpandMenuSizeHeight;
        }
        resolve();

      }
    }
    runAnimRect.call(this);
  
  })
}







//------------ create Rect ------------//
//-----------------------------------------------------------------------------------------------


Rect.prototype.getDataPoints = function() {
  // let w = this.w + this.radius * 2;
  // let h = this.h + this.radius * 2;
  // let w = this.w ;
  // let h = this.h ;
  let w = this.getExpandMenuSizeWidth ;
  let h = this.getExpandMenuSizeHeight ;

  // this.x = this.x - this.radius;
  // this.y = this.y - this.radius ;
  let x = this.x;
  let y = this.y;

  let points1 = [];
  let points2 = [];
  let pointsTween1 = [];
  let pointsTween2 = [];

  if (this.borderWavyPath > this.w / 2) {
    return this.borderWavyPath = this.w / 2;
  }

  let getPositions = function() {
    return {
      position0: {
        x: x + this.borderWavyPath,
        y: y
      },
      position1: {
        x: x + w - this.borderWavyPath,
        y: y
      },
      position2: {
        x: x + w,
        y: y + this.borderWavyPath
      },
      position3: {
        x: x + w,
        y: y + h - this.borderWavyPath
      },
      position4: {
        x: x + w - this.borderWavyPath,
        y: y + h
      },
      position5: {
        x: x + this.borderWavyPath,
        y: y + h
      },
      position6: {
        x: x,
        y: y + h - this.borderWavyPath
      },
      position7: {
        x: x,
        y: y + this.borderWavyPath
      }
    }
  }


  let positions = getPositions.call(this);
  
  points1 = getMutipliedPoints(this.multiply, positions, 0);
  points2 = getMutipliedPoints(this.multiply, positions, 1);

  //--- get points for tween ---------------------------------------------------------------------------------

  w = w + (this.radius * 2);
  h = h + (this.radius * 2);

  x = x - this.radius;
  y = y - this.radius;

  let positionsTween = getPositions.call(this);

  pointsTween1 = getMutipliedPoints(this.multiply, positionsTween, 0);
  pointsTween2 = getMutipliedPoints(this.multiply, positionsTween, 1);
  
  return {
    points1: points1,
    points2: points2,
    pointsTween1: pointsTween1,
    pointsTween2: pointsTween2
  }

  function getMutipliedPoints(multiply, positions, plusNum) {
    let slice = multiply + plusNum;
    let slicedLength = [];

    Object.values(positions).forEach((value, i, arr) => {
      if ((i % 2) == 0) {

        let length = {
          x: arr[i + 1].x - value.x,
          y: arr[i + 1].y - value.y
        }
        //---smoodness of wavy animation---------

        slicedLength.push({
          x: value.x,
          y: value.y
        })

        //----------------------------------------
        for (let j = 1; j < slice + 1; j++) {
          slicedLength.push({
            x: value.x + (length.x * (j / slice)),
            y: value.y + (length.y * (j / slice))
          })
        }
      }
    })
    return slicedLength;
  }

};




//------------ create Wavy Animation ------------//
// //-----------------------------------------------------------------------------------------------



Rect.prototype.createWavyAnimation = function() {
  return new Promise((resolve,reject)=>{
    if(window.innerWidth > 800){
      console.log('createWavyAnimation is working');
      // let dataPoints, points1, points2, pointsTween1, pointsTween2;
      
      
      if (!this.wavyAnimTL) {
        this.wavyAnimTL = gsap.timeline({
          onUpdate: update,
          onUpdateParams: [this]
        });
  
      } else {
        this.wavyAnimTL.resume();
        
      }
      this.dataPoints = this.getDataPoints(this);
      
      this.points1 = this.dataPoints.points1;
      this.points2 = this.dataPoints.points2;
  
      this.pointsTween1 = this.dataPoints.pointsTween1;
      this.pointsTween2 = this.dataPoints.pointsTween2;
      
  
      for (let i = 0; i < this.points1.length; i++) {
        let duration = random(this.speed[0], this.speed[1]);
  
  
        let tween1 = gsap.to(this.points1[i], {
          duration: duration,
          x: this.pointsTween1[i].x,
          y: this.pointsTween1[i].y,
          repeat: -1,
          yoyo: true,
          ease: Sine.easeInOut
        });
  
        let tween2 = gsap.to(this.points2[i], {
          duration: duration,
          x: this.pointsTween2[i].x,
          y: this.pointsTween2[i].y,
          repeat: -1,
          yoyo: true,
          ease: Sine.easeInOut
        });
        
  
        this.wavyAnimTL.add(tween1, -random(duration))
        this.wavyAnimTL.add(tween2, -random(duration))
      }
      

      // document.getElementById(this.id + 'RectWavy1').setAttributeNS(null, 'stroke-width', this.strokeWidthWavyPath );
      // document.getElementById(this.id + 'RectWavy2').setAttributeNS(null, 'stroke-width', this.strokeWidthWavyPath + this.strokeWidthUnit);

      function update(self) {
        document.getElementById(self.id + 'RectWavy1').setAttribute('d', tweenCardinal(self.points1, true, 1));
        document.getElementById(self.id + 'RectWavy2').setAttribute('d', tweenCardinal(self.points2, true, 1));
      }
  
      this.wavyAnimTLRunning = true;
      

      function tweenCardinal(data, closed, tension) {
  
        if (data.length < 1) return "M0 0";
        if (tension == null) tension = 1;
  
        var size = data.length - (closed ? 0 : 1);
        var path = "M" + data[0].x + " " + data[0].y + " C";
  
        for (var i = 0; i < size; i++) {
  
          var p0, p1, p2, p3;
  
          if (closed) {
            p0 = data[(i - 1 + size) % size];
            p1 = data[i];
            p2 = data[(i + 1) % size];
            p3 = data[(i + 2) % size];
  
          } else {
            p0 = i == 0 ? data[0] : data[i - 1];
            p1 = data[i];
            p2 = data[i + 1];
            p3 = i == size - 1 ? p2 : data[i + 2];
          }
  
          var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
          var y1 = p1.y + (p2.y - p0.y) / 6 * tension;
  
          var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
          var y2 = p2.y - (p3.y - p1.y) / 6 * tension;
  
          path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
        }
  
        return closed ? path + "z" : path;
      }
  
      function random(min, max) {
        if (max == null) {
          max = min;
          min = 0;
        }
        if (min > max) {
          var tmp = min;
          min = max;
          max = tmp;
        }
        return min + (max - min) * Math.random();
      }
  
      console.log('done wavy animation')
        
    // }
  
    
      }
    resolve();
  })
};

Rect.prototype.stopWavyAnim = function() {
  console.log('stopWavyAnimTl is working')
  if(window.innerWidth > 800){
    this.wavyAnimTL.pause(0);
    this.wavyAnimTLRunning = false;
  }
  
  this.neonOnTL.reverse();
  this.rect.style.stroke=this.strokeColor;

}


//------------ event function ------------//

Rect.prototype.hoveroverOn = function(biggerElem) {
  if(this.elem != biggerElem){
    // document.querySelector(`#${this.elem.id} .rectCover`).classList.add('rectCoverWhite');

    this.neonOnTL.play();
    document.querySelector(`#${this.id} .neon1`).classList.add(`${this.id}Neon1`);
    document.querySelector(`#${this.id} .neon2`).classList.add(`${this.id}Neon2`);
  }
};

Rect.prototype.hoveroverOff = function(biggerElem) {
  if(this.elem != biggerElem){
    // document.querySelector(`#${this.elem.id} .rectCover`).classList.remove('rectCoverWhite');

    
    this.neonOnTL.reverse();
    document.querySelector(`#${this.id} .neon1`).classList.remove(`${this.id}Neon1`);
    document.querySelector(`#${this.id} .neon2`).classList.remove(`${this.id}Neon2`);
  }
};


Rect.prototype.updateResize = function(biggerElem,menuExpanded,demoVideoHeight) {
  
  this.setUpdateValues();
  
  if(menuExpanded && this.elem == biggerElem){
    if(innerWidth <= 800 && this.wavyAnimTLRunning){
      this.wavyAnimTL.pause(0);
      document.getElementById(this.id + 'RectWavy1').setAttribute('d', '');
      document.getElementById(this.id + 'RectWavy2').setAttribute('d', '');
    }else{
      this.getExpandMenuSize(demoVideoHeight);
      this.createWavyAnimation();
    }
  }
  

  if(this.elem != biggerElem){
    SetDefaultRectSize(this.elem,menuExpanded);
  }


  let width, height;
  if(menuExpanded && this.elem == biggerElem){
    this.getExpandMenuSize(demoVideoHeight);
    width = this.getExpandMenuSizeWidth;
    height = this.getExpandMenuSizeHeight;
  }else{
    width = this.svgCanvas.parentElement.clientWidth;
    height = this.svgCanvas.parentElement.clientHeight;
  }

  this.svgCanvas.style.width = width + this.extraSVGspace + 'px'
  this.svgCanvas.style.height = height + this.extraSVGspace + 'px'
  this.rect.style.width = width + 'px';
  this.rect.style.height = height + 'px';

};
