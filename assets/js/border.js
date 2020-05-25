function border(id) {
  this.elemId = id;
  this.elem = document.getElementById(id);
  this.id = id + 'Border';
  this.path = document.getElementById(this.id),
  this.x = 0;
  this.y = 0;
  this.w = document.getElementById(this.id).parentElement.parentElement.clientWidth;
  this.h = document.getElementById(this.id).parentElement.parentElement.clientHeight;
  this.border = 10;
  this.multiply = 1;
  this.scale = 1;
  this.radius = 20;
  this.speed = [1, 3];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = 'url(#' + this.path.id + 'Color)';
  this.strokeWidth = 4;
  this.strokeWidthUnit = 'px';
  this.strokeLineCap = 'square'; //square, butt or round
  this.transitionValue = new transitionValue;
  this.margin = 0;
  this.extraBorderSpace = 5;
}





const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';


let requestAni = null;
let f = 0;
let fSmaller = 0;
let dir = 1;
// let NF = this.borders.transitionValue.duration * 60;




function createBorderPath(borders) {

  this.borders = borders
  this.elemParent = this.borders.elem.parentElement;


  this.x = borders.x + borders.strokeWidth/2;
  this.y = borders.y + borders.strokeWidth/2;
  this.w = borders.w - borders.strokeWidth;
  this.h = borders.h - borders.strokeWidth;
  
  // this.allElems = this.getAllElems(this);
  // this.restElems = getRestElems(this.borders.elem);

  this.data;
  this.points = [];
  this.pointsTween = [];

  this.padding = parseFloat(window.getComputedStyle(this.borders.elem).paddingTop) * 2;
  this.expanding = false;
  this.stop = false;


  this.subMenuChangingWidth,this.subMenuChangingHeight;


  this.resize = false;

  //----call path-----

  // this.getPath(this);
  // this.createStroke(this);
  this.createRectBorder(this)

  //-----------------
  
// this.animRectBorderHandler = this.animRectBorder.bind(this);
  // this.expandMenuHandler = this.expandMenu.bind(this);
  // this.updateSizeHandler = this.updateSize.bind(this);
  // this.creatWavyAnimationHandler = this.createWavyAnimation.bind(this);
  // this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  // this.hoveroverOffHandler = this.hoveroverOff.bind(this);

  // this.callClickEvent = () => {

  //   this.borders.elem.removeEventListener('click', this.callClickEvent);
  //   this.restElemsEventListener('remove', 'callClickEvent')


  //   this.expandMenu(this);
  //   // this.createWavyAnimation(this);


  //   setTimeout(() => {
  //     this.borders.elem.addEventListener('click', this.callClickEvent);
  //     this.restElemsEventListener('add', 'callClickEvent')
  //   }, this.borders.transitionValue.duration * 1000 + 400);

  // }

  // window.addEventListener('resize', this.updateSizeHandler);
  // this.borders.elem.addEventListener('click', this.callClickEvent);


  // this.borders.elem.firstElementChild.addEventListener('mouseover', this.hoveroverOnHandler);
  // this.borders.elem.firstElementChild.addEventListener('mouseout', this.hoveroverOffHandler);



}

// createBorderPath.prototype.restElemsEventListener = function(listener, handler) {
  
//   for (let i = 0; i < this.restElems.length; i++) {
//     let id = this.restElems[i].id.charAt(0).toUpperCase() + this.restElems[i].id.slice(1);
//     let runBorderId = eval('run' + id + 'Border');
    
//     if (listener == 'add') {

//       this.restElems[i].addEventListener('click', runBorderId[handler]);
//     } else {

//       this.restElems[i].removeEventListener('click', runBorderId[handler]);
//     }
//   }
// }


//---- expand Menu -------------------------------------------------------------------------

createBorderPath.prototype.expandMenuIf = function(allElems) {
  
  let widthBigger = this.getLeftRight(this).widthBigger;
  let widthSmaller = this.getLeftRight(this).widthSmaller;
  let heightBigger = this.getUpDown(this).heightBigger;
  let heightSmaller = this.getUpDown(this).heightSmaller;

  
  // this.borders.elem.firstElementChild.classList.add('menutransition');

  // if (menuExpanded == false) {

  //   menuExpanded = true;
  //   biggerElem = this.borders.elem;
  this.borders.elem.parentElement.classList.add('menutransition')
  allElems.forEach((allElems)=> {
    allElems.classList.add("menutransition")
    if(allElems==this.borders.elem){
      allElems.firstElementChild.classList.add("menutransition")
    }
  })
  

  
  
  this.elemParent.style.width = this.borders.transitionValue['max'] + '%';
  
  widthBigger.forEach((widthBigger)=> widthBigger.style.width = this.borders.transitionValue['width'] + '%' )
  widthSmaller.forEach((widthSmaller)=> widthSmaller.style.width = (100 - this.borders.transitionValue['width']) + '%' )
  heightBigger.forEach((heightBigger)=> heightBigger.style.height = this.borders.transitionValue['width'] + '%' )
  heightSmaller.forEach((heightSmaller)=> heightSmaller.style.height = (100 - this.borders.transitionValue['width']) + '%')



  this.subMenuChanging();
  this.borders.elem.firstElementChild.style.width = this.subMenuChangingWidth + "px";
  this.borders.elem.firstElementChild.style.height = this.subMenuChangingHeight + "px";


  // document.querySelector(`#${this.borders.elem.id} .text`).classList.add = 'menutransition'
  // document.querySelector(`#${this.borders.elem.id} .text`).style.alignItems = 'flex-start'
  // document.querySelector(`#${this.borders.elem.id} .text`).style.alignItems = 'flex-start'


  this.borders.path.setAttributeNS(null, 'stroke', 'ivory');
  this.animRectBorderBigger(this)
  
  


  setTimeout(() => {
    
    this.borders.elem.firstElementChild.style.width = '100%'
    this.borders.elem.firstElementChild.style.height = '100%'


    this.borders.elem.parentElement.classList.remove('menutransition')
    allElems.forEach((allElems)=> {
      allElems.classList.remove("menutransition")
      if(allElems==this.borders.elem){
        allElems.firstElementChild.classList.remove("menutransition")
      }

    })
  }, this.borders.transitionValue.duration * 1000);

  //   for (let i = 0; i < document.getElementsByClassName('text').length; i++) {
  //     if (document.getElementsByClassName('text')[i].innerHTML == this.borders.familyElem.id.toUpperCase()) {
  //       document.getElementsByClassName('text')[i].style.visibility = 'hidden'
  //     }
  //   }
  
  //   document.getElementById('demoSVG').style.filter = 'none'
  
  
    // setTimeout(() => {
    
  
    //   // document.getElementById('demoSVG').style.filter = 'blur(4.5px)'
    // }, this.borders.transitionValue.duration * 1000 + 100)
}


createBorderPath.prototype.expandMenuElseIf = function(allElems) {
  this.smallMenuSize = this.borders.elem.firstElementChild.clientWidth;


  let widthBigger = this.getLeftRight(this).widthBigger;
  let widthSmaller = this.getLeftRight(this).widthSmaller;
  let heightBigger = this.getUpDown(this).heightBigger;
  let heightSmaller = this.getUpDown(this).heightSmaller;


  allElems.forEach((allElems)=> {
    allElems.classList.add("menutransition")
    if(allElems==this.borders.elem){
      allElems.firstElementChild.classList.add("menutransition");
    }
  })

  // document.getElementById('work').firstElementChild.classList.add("menutransition");
  // biggeredElem.firstElementChild.classList.add("menutransition")

  

  widthBigger.forEach((widthBigger)=> widthBigger.style.width = this.borders.transitionValue['width'] + '%' )
  widthSmaller.forEach((widthSmaller)=> widthSmaller.style.width = (100 - this.borders.transitionValue['width']) + '%' )
  heightBigger.forEach((heightBigger)=> heightBigger.style.height = this.borders.transitionValue['width'] + '%' )
  heightSmaller.forEach((heightSmaller)=> heightSmaller.style.height = (100 - this.borders.transitionValue['width']) + '%')
  

  
  
  
  
  this.subMenuChanging()
  this.borders.elem.firstElementChild.style.width = this.subMenuChangingWidth + "px";
  this.borders.elem.firstElementChild.style.height = this.subMenuChangingHeight + "px";
  
  // biggeredElem.firstElementChild.style.width = this.smallMenuSize + 'px';
  // biggeredElem.firstElementChild.style.height = this.smallMenuSize + 'px';
  biggeredElem.firstElementChild.classList.add("menutransition");
  biggeredElem.firstElementChild.style.width = '';
  biggeredElem.firstElementChild.style.height = '';



  // biggeredElem.firstElementChild.firstElementChild.classList.add("menutransition");
  
  // biggeredElem.firstElementChild.firstElementChild.style.width = this.smallMenuSize+'px';
  // biggeredElem.firstElementChild.firstElementChild.style.height = this.smallMenuSize+'px';


  // document.querySelector(`#${biggeredElem.id} .text`).style.alignItems = 'center'




  this.borders.path.setAttributeNS(null, 'stroke', 'ivory');
  
  this.animRectBorderBigger(this)
  // this.animRectBorderSmaller(this)



  //   for (let i = 0; i < document.getElementsByClassName('text').length; i++) {
  //     if (document.getElementsByClassName('text')[i].innerHTML == biggerElem.id.toUpperCase()) {
  //       document.getElementsByClassName('text')[i].style.visibility = 'hidden';
  //     }
  //   }
  
setTimeout(() => {
    // biggeredElem.firstElementChild.style.width = '';
    // biggeredElem.firstElementChild.style.height = '';
    
  allElems.forEach((allElems)=> {
    allElems.classList.remove("menutransition")
    biggeredElem.firstElementChild.classList.remove("menutransition");
    if(allElems==this.borders.elem){
      allElems.firstElementChild.classList.remove("menutransition")
      biggeredElem.firstElementChild.classList.remove("menutransition")
    }
  })

}, this.borders.transitionValue.duration * 1000);
//--------------------------------------------------------------------------------------------------------
  //   setTimeout(() => {
  //     this.borders.elem.firstElementChild.style.width = '100%';
  //     this.borders.elem.firstElementChild.style.height = '100%';

  //     for (let i = 0; i < document.getElementsByClassName('text').length; i++) {
  //       if (document.getElementsByClassName('text')[i].innerHTML == biggeredElem.id.toUpperCase()) {
  //         document.getElementsByClassName('text')[i].style.visibility = 'visible'
  //       }
  //     }

  //   }, this.borders.transitionValue.duration * 1000 + 100)

  // } else {

  //   menuExpanded = false;
  //   biggeredElem = 'none';
  //   biggerElem = 'none';

  //   this.elemParent.style.width = this.borders.transitionValue['min'] + '%';

  //   for (let i = 0; i < this.allElems.length; i++) {
  //     this.allElems[i].classList.add("menutransition")
  //     this.allElems[i].style.flex = '';
  //     this.allElems[i].style.height = '';
  //   }
  //   this.borders.elem.firstElementChild.style.width = '';
  //   this.borders.elem.firstElementChild.style.height = '';


  //   this.borders.elem.parentElement.style.width = 'inherit';
  //   this.borders.elem.parentElement.style.height = 'inherit';


  //   document.getElementById('demoSVG').style.filter = 'none'

  //   setTimeout(() => {

  //     for (let i = 0; i < document.getElementsByClassName('text').length; i++) {
  //       if (document.getElementsByClassName('text')[i].innerHTML == this.borders.familyElem.id.toUpperCase()) {
  //         document.getElementsByClassName('text')[i].style.visibility = 'visible'
  //       }
  //     }
  //     document.getElementById('demoSVG').style.filter = 'blur(4.5px)'
  //   }, this.borders.transitionValue.duration * 1000);

  // }

  // setTimeout(() => {

  //   for (let i = 0; i < this.allElems.length; i++) {
  //     this.allElems[i].firstElementChild.classList.remove('menutransition');
  //   }
  //   for (let i = 0; i < this.allElems.length; i++) {
  //     this.allElems[i].classList.remove("menutransition")

  //   }

  // }, this.borders.transitionValue.duration * 1000);



  // if (biggeredElem.id == 'work') {
  //   runWorkBorder.creatWavyAnimationHandler();

  // } else if (biggeredElem.id == 'skill') {
  //   runSkillBorder.creatWavyAnimationHandler();

  // } else if (biggeredElem.id == 'paint') {
  //   runPaintBorder.creatWavyAnimationHandler();

  // } else if (biggeredElem.id == 'info') {
  //   runInfoBorder.creatWavyAnimationHandler();

  // }

};

createBorderPath.prototype.getLeftRight = function() {

  let firstNum = this.getFirstNum(this);
  let widthBigger = [];
  let widthSmaller = [];

  let j = 0;
  if (firstNum % 2 != 0) {
    j = j + 1
  }
  for (let i = 0; i < this.elemParent.childNodes.length; i++) {
    j = j + 1;
    if (this.elemParent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }

    if (this.elemParent.childNodes[i].nodeType == 1) {
      if (j % 2 == 0) {
        widthBigger.push(this.elemParent.childNodes[i]);
      } else {
        widthSmaller.push(this.elemParent.childNodes[i]);
      }
    }
  }

  return {
    widthBigger: widthBigger,
    widthSmaller: widthSmaller
  }
}

createBorderPath.prototype.getUpDown = function() {

  let firstNum = this.getFirstNum(this);
  let up = [];
  let down = [];

  let heightBigger = [];
  let heightSmaller = [];

  let j = 0;
  for (let i = 0; i < this.elemParent.childNodes.length; i++) {

    j = j + 1;
    if (this.elemParent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (this.elemParent.childNodes[i].nodeType == 1) {

      if (j < 3) {
        up.push(this.elemParent.childNodes[i]);

      } else {
        down.push(this.elemParent.childNodes[i]);
      }
    }
  }


  if (firstNum < 3) {
    heightBigger = up;
    heightSmaller = down;
  } else {
    heightBigger = down;
    heightSmaller = up;
  }

  return {
    heightBigger: heightBigger,
    heightSmaller: heightSmaller
  }
}

createBorderPath.prototype.getFirstNum = function() {

  let j = 0;
  for (let i = 0; i < this.elemParent.childNodes.length; i++) {
    j = j + 1;
    if (this.elemParent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (this.elemParent.childNodes[i] === this.borders.elem) {

      return j;
    }
  }
}
createBorderPath.prototype.subMenuChanging = function(){
  this.subMenuChangingWidth = this.elemParent.parentElement.clientWidth * ((this.borders.transitionValue['max'] / 100) * (this.borders.transitionValue['width'] / 100)) - this.padding;
  this.subMenuChangingHeight =  this.elemParent.parentElement.clientHeight * (this.borders.transitionValue['width'] / 100) - this.padding
}
// createBorderPath.prototype.getAllElems = function() {
//   let allElems = [];

//   for (let i = 0; i < this.elemParent.childNodes.length; i++) {
//     if (this.elemParent.childNodes[i].nodeType == 1) {
//       allElems.push(this.elemParent.childNodes[i]);
//     }
//   }

//   return allElems;
// }


//---- create rectangle border ------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

createBorderPath.prototype.createRectBorder = function(){

  this.borders.path.setAttributeNS(null, 'x' , this.x)
  this.borders.path.setAttributeNS(null, 'y' , this.y)
  this.borders.path.setAttributeNS(null, 'rx' , this.borders.border)
  this.borders.path.setAttributeNS(null, 'ry' , this.borders.border)
  this.borders.path.setAttributeNS(null, 'width' , this.w)
  this.borders.path.setAttributeNS(null, 'height' , this.h)
  this.borders.path.setAttributeNS(null, 'fill', this.borders.color);
  this.borders.path.setAttributeNS(null, 'stroke', this.borders.strokeColor);
  this.borders.path.setAttributeNS(null, 'stroke-width', this.borders.strokeWidth);

}

createBorderPath.prototype.animRectBorderBigger = function(){
  f += dir;
  let NF = this.borders.transitionValue.duration * 60 + 3;
  
  let biggeredElemPath = document.getElementById(biggeredElem.id + 'Border');
  
  
  // let goalWidth = this.borders.elem.firstElementChild.clientWidth - this.borders.strokeWidth
  // let goalHeight = this.borders.elem.firstElementChild.clientHeight - this.borders.strokeWidth
  // let widthUnit = goalWidth / NF;
  // let currentWidth = this.borders.path.parentElement.parentElement.clientWidth;
  
  
  this.borders.path.setAttribute('width',this.borders.elem.firstElementChild.clientWidth - this.borders.strokeWidth);
  this.borders.path.setAttribute('height',this.borders.elem.firstElementChild.clientHeight - this.borders.strokeWidth);
  


  if(biggeredElem != 'none'){
    biggeredElemPath.parentElement.style.width =  biggeredElemPath.parentElement.parentElement.clientWidth + 'px';
    biggeredElemPath.parentElement.style.height = biggeredElemPath.parentElement.parentElement.clientHeight + 'px';
    biggeredElemPath.setAttribute('width', biggeredElemPath.parentElement.clientWidth - this.borders.strokeWidth);
    biggeredElemPath.setAttribute('height', biggeredElemPath.parentElement.clientHeight - this.borders.strokeWidth);
  }

  if(!(f%NF)){
    this.stopAni();
    this.borders.path.setAttribute('width',this.subMenuChangingWidth-this.borders.strokeWidth);
    this.borders.path.setAttribute('height',this.subMenuChangingHeight-this.borders.strokeWidth);
    

    biggeredElemPath.parentElement.style.width = '';
    biggeredElemPath.parentElement.style.height = '';
    biggeredElemPath.setAttribute('width', this.smallMenuSize - this.borders.strokeWidth);
    biggeredElemPath.setAttribute('height', this.smallMenuSize - this.borders.strokeWidth);
    f = 0;
    return
  }

  requestAni = requestAnimationFrame(()=>this.animRectBorderBigger(this));
  
}


createBorderPath.prototype.stopAni = function() {
  cancelAnimationFrame(requestAni);
  requestAni = null;
}
//---- create Border ----------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


// createBorderPath.prototype.getDataPoints = function() {

//   let h = this.h ;
//   let w = this.w ;

//   let points = [];
//   let pointsTween = [];

//   let borders = this.borders

//   if (this.borders.border > w / 2) {
//     return this.borders.border = w / 2 - 10;
//   }

//   //----setup svg size---------------------------------------------

//   this.borders.elem.parentElement.style.width = this.borders.elem.parentElement.parentElement.clientWidth + 'px';
//   this.borders.elem.parentElement.style.height = this.borders.elem.parentElement.parentElement.clientHeight + 'px';

//   //---------------------------------------------------------------

//   let getPositions = function() {
//     return {
//       position0: {
//         x: this.x + borders.border,
//         y: this.y
//       },
//       position1: {
//         x: this.x + w - borders.border,
//         y: this.y
//       },
//       position2: {
//         x: this.x + w,
//         y: this.y + borders.border
//       },
//       position3: {
//         x: this.x + w,
//         y: this.y + h - borders.border
//       },
//       position4: {
//         x: this.x + w - borders.border,
//         y: this.y + h
//       },
//       position5: {
//         x: this.x + borders.border,
//         y: this.y + h
//       },
//       position6: {
//         x: this.x,
//         y: this.y + h - borders.border
//       },
//       position7: {
//         x: this.x,
//         y: this.y + borders.border
//       }
//     }
//   }


//   let positions = getPositions.call(this);




//   //----svg path-------------------------




//   function getLine(positions, num) {

//     let line = " ";
//     let points = [];

//     if (borders.multiply <= 1) {

//       line += "L" + positions['position' + num].x + " " + positions['position' + num].y;

//       points.push({
//         x: positions['position' + num].x,
//         y: positions['position' + num].y
//       });

//     } else {

//       let slice = borders.multiply;

//       let length = {
//         x: positions['position' + num].x - positionMinus(num).x,
//         y: positions['position' + num].y - positionMinus(num).y
//       }

//       for (let j = slice; j > 0; j--) {

//         line += "L";

//         line += positionMinus(num).x + length.x / j + " ";
//         line += positionMinus(num).y + length.y / j + " ";

//         points.push({
//           x: positionMinus(num).x + length.x / j,
//           y: positionMinus(num).y + length.y / j
//         })

//       }

//     }

//     return {
//       line: line,
//       points: points
//     }

//   }

//   function getCardinal(positions, num) {

//     let r = borders.border;
//     let cardinal = " ";
//     let points = [];

//     let x1, y1, x2, y2;


//     if (positions['position' + num].x - positionPlus(num).x == 0) {

//       x1 = positions['position' + num].x - positionMinus(num).x > 0 ? positionMinus(num).x + r / 2 : positionMinus(num).x - r / 2;
//       y1 = positionMinus(num).y;

//       x2 = positions['position' + num].x;
//       y2 = positions['position' + num].y - positionMinus(num).y > 0 ? positions['position' + num].y - r / 2 : positions['position' + num].y + r / 2;

//     } else {

//       x1 = positionMinus(num).x;
//       y1 = positions['position' + num].y - positionMinus(num).y > 0 ? positionMinus(num).y + r / 2 : positionMinus(num).y - r / 2;

//       x2 = positions['position' + num].x - positionMinus(num).x > 0 ? positions['position' + num].x - r / 2 : positions['position' + num].x + r / 2;
//       y2 = positions['position' + num].y;

//     }

//     cardinal += "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + positions['position' + num].x + " " + positions['position' + num].y;

//     points.push({
//       x: positions['position' + num].x,
//       y: positions['position' + num].y
//     });

//     return {
//       cardinal: cardinal,
//       points: points
//     };
//   }




//   //---get positions of an object------------------------------------------------------------------------------------------------------------  




//   function positionMinus(num) {
//     function getMinus(num) {
//       let getMinus = (num - 1 + Object.keys(positions).length) % Object.keys(positions).length;

//       return getMinus;
//     }

//     return positions['position' + getMinus(num)];
//   }

//   function positionPlus(num) {
//     function getPlus(num) {
//       let getPlus = (num + 1 + Object.keys(positions).length) % Object.keys(positions).length;

//       return getPlus;
//     }

//     return positions['position' + getPlus(num)];
//   }




//   //-------Scale & Margin   //  svg size for Extra Border Space----------------------------------------------------------------------------------------------------------------------------------------




//   let oldW = w;
//   let oldH = h;

//   w = w * borders.scale - borders.margin * 2;
//   h = h * borders.scale - borders.margin * 2;

//   this.borders.elem.parentElement.style.width = this.borders.elem.parentElement.clientWidth + this.borders.extraBorderSpace * 2 + 'px';
//   this.borders.elem.parentElement.style.height = this.borders.elem.parentElement.clientHeight + this.borders.extraBorderSpace * 2 + 'px';

//   this.borders.elem.parentElement.style.top = '-' + (this.borders.extraBorderSpace) + 'px'
//   this.borders.elem.parentElement.style.left = '-' + (this.borders.extraBorderSpace) + 'px'

//   positions = getPositions.call(this);



//   for (let i = 0; Object.keys(positions).length > i; i++) {
//     positions['position' + i].x = positions['position' + i].x - (w - oldW) / 2 + (this.borders.extraBorderSpace);
//     positions['position' + i].y = positions['position' + i].y - (h - oldH) / 2 + (this.borders.extraBorderSpace);
//   }




//   //----------------------------------
//   data = "M" + positions['position' + 0].x + " " + positions['position' + 0].y + getLine(positions, 1).line + getCardinal(positions, 2).cardinal + getLine(positions, 3).line + getCardinal(positions, 4).cardinal + getLine(positions, 5).line + getCardinal(positions, 6).cardinal + getLine(positions, 7).line + getCardinal(positions, 0).cardinal;

//   pushPoints(getCardinal, 0);
//   pushPoints(getLine, 1);
//   pushPoints(getCardinal, 2);
//   pushPoints(getLine, 3);
//   pushPoints(getCardinal, 4);
//   pushPoints(getLine, 5);
//   pushPoints(getCardinal, 6);
//   pushPoints(getLine, 7);

//   getTweenPoints.call(this)


//   function pushPoints(curve, num) {
//     for (let i = 0; i < curve(positions, num).points.length; i++) {
//       points.push(curve(positions, num).points[i]);
//     }
//   }

//   function getTweenPoints() {
//     let radius = this.borders.radius;

//     let newOldW = w;
//     let newOldH = h;

//     w = w - radius * 2;
//     h = h - radius * 2;

//     positions = getPositions.call(this);

//     for (let i = 0; Object.keys(positions).length > i; i++) {
//       positions['position' + i].x = positions['position' + i].x - (newOldW - oldW) / 2 + (this.borders.extraBorderSpace ) + radius;
//       positions['position' + i].y = positions['position' + i].y - (newOldH - oldH) / 2 + (this.borders.extraBorderSpace ) + radius;
//     }

//     pushPointsTween(getCardinal, 0);
//     pushPointsTween(getLine, 1);
//     pushPointsTween(getCardinal, 2);
//     pushPointsTween(getLine, 3);
//     pushPointsTween(getCardinal, 4);
//     pushPointsTween(getLine, 5);
//     pushPointsTween(getCardinal, 6);
//     pushPointsTween(getLine, 7);


//     function pushPointsTween(curve, num) {
//       for (let i = 0; i < curve(positions, num).points.length; i++) {
//         pointsTween.push(curve(positions, num).points[i]);
//       }
//     }

//   }

//   return {
//     data: data,
//     points: points,
//     pointsTween: pointsTween
//   }

// };

// createBorderPath.prototype.getPath = function() {

//   let dataPoints = this.getDataPoints(this);

//   this.data = dataPoints.data;
//   this.points = dataPoints.points;
//   this.pointsTween = dataPoints.pointsTween;


//   this.borders.path.setAttribute("d", dataPoints.data);
//   this.borders.path.setAttributeNS(null, 'fill', this.borders.color);

// };

// createBorderPath.prototype.createStroke = function() {

//   if (this.borders.stroke === true) {
//     this.borders.path.setAttributeNS(null, 'stroke', this.borders.strokeColor);
//     this.borders.path.setAttributeNS(null, 'stroke-width', this.borders.strokeWidth + this.borders.strokeWidthUnit);
//   }
// }

// createBorderPath.prototype.updateSize = function() {


//   this.resize = true;
//   document.getElementById('demoSVG').style.filter = 'none'

  

//   if (menuExpanded == false) {

//     this.w = this.borders.elem.parentElement.parentElement.clientWidth;
//     this.h = this.borders.elem.parentElement.parentElement.clientHeight;

//     this.getPath.call(this);

//   } else {

//     this.w = this.borders.elem.parentElement.parentElement.clientWidth;
//     this.h = this.borders.elem.parentElement.parentElement.clientHeight;

//     this.getPath.call(this);


//     if (this.borders.familyElem.id == biggerElem.id) {

//       document.getElementById(this.borders.elem.id + 'Extra1').setAttribute("stroke-width", '0px');
//       document.getElementById(this.borders.elem.id + 'Extra2').setAttribute("stroke-width", '0px');

//       this.createWavyAnimation(this)
//     }

//   }

  
//   setTimeout(() => {
//     document.getElementById('demoSVG').style.filter = 'blur(4.5px)'
//     this.resize = false;
//   }, 1);

// };


// //---- create Wavy Animation --------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------

// createBorderPath.prototype.createWavyAnimation = function() {

//   let animating = false;

//   let newPoints1 = [];
//   let newPointsTween1 = [];
//   let newPoints2 = [];
//   let newPointsTween2 = [];

//   let strokeColor = this.borders.strokeColor;


//   if (this.resize == false) {
//     this.expanding = this.expanding == false ? this.expanding = true : this.expanding = false;
//     this.stop = stop == true ? stop = false : stop = false;
//   }

//   let tl = gsap.timeline({
//     onUpdate: update,
//     onUpdateParams: [this]
//   });
//   tl.to(this.borders.path, {
//     duration: this.borders.transitionValue.duration + 0.1,
//     x: 0,
//     y: 0
//   });


//   if (this.expanding == true) {

//     this.borders.path.setAttributeNS(null, 'stroke', 'ivory');

//     setTimeout(() => {
//       //------- get new Points for extraBorderSpace ---------------
//       let originalW = this.w;
//       let originalH = this.h;
//       let originalXY = this.points;

//       this.w = this.w - this.borders.extraBorderSpace;
//       this.h = this.h - this.borders.extraBorderSpace;

//       this.getDataPoints(this)

//       for (let i = 0; i < this.points.length; i++) {
//         let x = this.points[i].x + this.borders.extraBorderSpace / 2;
//         let y = this.points[i].y + this.borders.extraBorderSpace / 2;

//         newPoints1.push({
//           x: x,
//           y: y
//         });
//         newPoints2.push({
//           x: x,
//           y: y
//         });
//       }

//       //------- get new PointsTween for extraBorderSpace ------------------------------------------------------

//       this.w = originalW + this.borders.extraBorderSpace;
//       this.h = originalH + this.borders.extraBorderSpace;

//       this.getDataPoints(this)

//       for (let i = 0; i < this.points.length; i++) {
//         let x = originalXY[i].x - this.borders.extraBorderSpace / 2;
//         let y = originalXY[i].y - this.borders.extraBorderSpace / 2;

//         newPointsTween1.push({
//           x: x,
//           y: y
//         });
//         newPointsTween2.push({
//           x: x,
//           y: y
//         });
//       }


//       for (let i = 0; i < this.points.length; i++) {


//         let duration = random(this.borders['speed'][0], this.borders['speed'][1]);


//         //   // let tween = gsap.to(this.points[i], {
//         //   //   duration: duration,
//         //   //   x: this.pointsTween[i].x,
//         //   //   y: this.pointsTween[i].y,
//         //   //   repeat: -1,
//         //   //   yoyo: true,
//         //   //   ease: Sine.easeInOut
//         //   // });

//         let tween1 = gsap.to(newPoints1[i], {
//           duration: duration,
//           x: newPointsTween1[i].x,
//           y: newPointsTween1[i].y,
//           repeat: -1,
//           yoyo: true,
//           ease: Sine.easeInOut
//         });

//         let tween2 = gsap.to(newPoints2[i], {
//           duration: duration,
//           x: newPointsTween2[i].x,
//           y: newPointsTween2[i].y,
//           repeat: -1,
//           yoyo: true,
//           ease: Sine.easeInOut
//         });

//         //   // tl.add(tween, -random(duration));
//         tl.add(tween1, -random(duration))
//         tl.add(tween2, -random(duration))
//       }
//       animating = true;

//       if (this.expanding) {
//         document.getElementById(this.borders.elem.id + 'Extra1').setAttributeNS(null, 'stroke-width', this.borders.strokeWidth * 1.5 + this.borders.strokeWidthUnit);
//         document.getElementById(this.borders.elem.id + 'Extra2').setAttributeNS(null, 'stroke-width', this.borders.strokeWidth + this.borders.strokeWidthUnit);
//       }
//     }, this.borders.transitionValue.duration * 1000 + 300);

//   } else {
    
//     this.borders.path.setAttributeNS(null, 'stroke', strokeColor);

//     document.getElementById(this.borders.elem.id + 'Extra1').setAttributeNS(null, 'stroke-width', 0 + this.borders.strokeWidthUnit);
//     document.getElementById(this.borders.elem.id + 'Extra2').setAttributeNS(null, 'stroke-width', 0 + this.borders.strokeWidthUnit);

//     setTimeout(() => {
//       this.stop = true;
//       animating = false;


//     }, this.borders.transitionValue.duration * 1000 + 300)
//   }

//   function update(self) {

//     if (animating == true && self.expanding == true) {

//       document.getElementById(self.borders.elem.id + 'Extra1').setAttribute('d', tweenCardinal(newPoints1, true, 0.2))
//       document.getElementById(self.borders.elem.id + 'Extra2').setAttribute('d', tweenCardinal(newPoints2, true, 0.2))


//     } else {

//       self.path.setAttribute("d", self.data),

//         self.w = parseFloat(window.getComputedStyle(self.path.parentElement.parentElement).width),
//         self.h = parseFloat(window.getComputedStyle(self.path.parentElement.parentElement).height),

//         self.getPath(self)
//     }
//     if (self.stop) {

//       tl.pause()
//     }
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

// };

// createBorderPath.prototype.getAllElems = function() {
//   let allElems = [];

//   for (let i = 0; i < this.elemParent.childNodes.length; i++) {
//     if (this.elemParent.childNodes[i].nodeType == 1) {
//       allElems.push(this.elemParent.childNodes[i]);
//     }
//   }

//   return allElems;
// }

// //---- Hoverover -------------------------------------------------------------------------


// createBorderPath.prototype.hoveroverOn = function() {

//   // this.borders.path.setAttributeNS(null, 'filter', 'url(#glow)');
//   if (this.expanding == false) {
//     this.borders.path.setAttributeNS(null, 'stroke', 'ivory');
//   }

// }
// createBorderPath.prototype.hoveroverOff = function() {

//   // this.borders.path.setAttributeNS(null, 'filter', 'none');
//   if (this.expanding == false) {
//     this.borders.path.setAttributeNS(null, 'stroke', 'url(#' + this.borders.elem.id + 'Color)');
//   }
// }

//-----   finish creating border   >>>-----------------------------------------------------------------



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



// function getRestElems (elem) {
//   let restElems = [];

//   for (let i = 0; i < elem.parentElement.childNodes.length; i++) {
//     if (elem.parentElement.childNodes[i].nodeType == 1 && elem.parentElement.childNodes[i] != elem) {
//       restElems.push(elem.parentElement.childNodes[i]);
//     }
//   }

//   return restElems;
// }


let workBorder = new border('work');
let skillBorder = new border('skill');
let paintBorder = new border('paint');
let infoBorder = new border('info');

let runWorkBorder = new createBorderPath(workBorder);
let runSkillBorder = new createBorderPath(skillBorder);
let runPaintBorder = new createBorderPath(paintBorder);
let runInfoBorder = new createBorderPath(infoBorder);