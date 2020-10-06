let leftRight, upDown;
let widthBigger, widthSmaller, heightBigger, heightSmaller;



//set border size---------
setBordersSize(allElems);

function setBordersSize(elems){
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


function border(id) {
  this.elemId = id;
  this.elem = document.getElementById(id);
  this.id = id + 'Border';
  this.path = document.getElementById(this.id),
  this.x = 0;
  this.y = 0;
  this.w = document.getElementById(this.id).parentElement.parentElement.clientWidth;
  this.h = document.getElementById(this.id).parentElement.parentElement.clientHeight;
  this.border = 5;
  this.multiply = 4;
  this.scale = 1;
  this.radius = innerWidth > 800 ? 7 : 4;
  this.speed = [2, 3];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = `url(#${this.path.id}Color)`;
  this.strokeWidth = innerWidth > 800 ? 8 : 5;
  this.strokeWidthUnit = 'px';
  this.strokeLineCap = 'square'; //square, butt or round
  this.margin = 0;
}



const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';


let requestAni = null;
let f = 0;
let fSmaller = 0;
let dir = 1;
let NF = transitionValue.duration * 63;




function createBorderPath(borders) {

  this.borders = borders;
  this.elemParent = this.borders.elem.parentElement;


  this.x = this.borders.x;
  this.y = this.borders.y;
  this.w = this.borders.w;
  this.h = this.borders.h;

  this.extraSVGspace = this.borders.radius * 5 ;


  this.data;
  this.points = [];
  this.pointsTween = [];

  // this.padding;
  this.expanding = false;
  this.stop = false;


  this.subMenuChangingWidth, this.subMenuChangingHeight;
  this.topMenuSize;

 

  // if(innerWidth > 1400){
  //   this.setBordersSizeFamily(this.borders.elem,'borderSize1400');
  // }else if(innerWidth > 800){
  //   this.setBordersSizeFamily(this.borders.elem,'borderSize');
  // }else{
  //   this.setBordersSizeFamily(this.borders.elem,'borderSize800');
  // }

  //----call path-----

  this.createRectBorder(this);

  //-----------------

  this.updateSizeHandler = this.updateSize.bind(this);
  this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  this.hoveroverOffHandler = this.hoveroverOff.bind(this);



  window.addEventListener('resize', this.updateSizeHandler);
  this.borders.elem.firstElementChild.addEventListener('mouseover', this.hoveroverOnHandler);
  this.borders.elem.firstElementChild.addEventListener('mouseout', this.hoveroverOffHandler);

}



//---- expand Menu -------------------------------------------------------------------------

createBorderPath.prototype.expandMenuIf = function() {
  return new Promise((resolve,reject)=>{

    this.restElems = getRestElems(this.borders.elem);


    leftRight = this.getLeftRight(this);
    upDown = this.getUpDown(this);

    widthBigger = leftRight.widthBigger;
    widthSmaller = leftRight.widthSmaller;
    heightBigger = upDown.heightBigger;
    heightSmaller = upDown.heightSmaller;

    this.subMenuChangingWidth;
    this.subMenuChangingHeight;

    


    allElems.forEach((allElems) => {
      allElems.classList.add("menutransition")
      if (allElems == this.borders.elem) {
        allElems.firstElementChild.classList.add("menutransition");
      }
    })



    widthBigger.forEach((widthBigger) => widthBigger.style.width = transitionValue['menuMax'] + '%')
    widthSmaller.forEach((widthSmaller) => widthSmaller.style.width = (100 - transitionValue['menuMax']) + '%')
    heightBigger.forEach((heightBigger) => heightBigger.style.height = transitionValue['menuMax'] + '%')
    heightSmaller.forEach((heightSmaller) => heightSmaller.style.height = (100 - transitionValue['menuMax']) + '%')



    this.subMenuChanging();
    this.borders.elem.firstElementChild.style.width = this.subMenuChangingWidth + "px";
    this.borders.elem.firstElementChild.style.height = this.subMenuChangingHeight + "px";
    

    // document.querySelector(`#${this.borders.elem.id} .text`).classList.add = 'menutransition'
    // document.querySelector(`#${this.borders.elem.id} .text`).style.alignItems = 'flex-start'
    // document.querySelector(`#${this.borders.elem.id} .text`).style.alignItems = 'flex-start'


    
    this.borders.path.setAttributeNS(null, 'stroke', 'ivory');
    if(innerWidth<800){
      this.smallerRestElemBorders();
    }
    this.animRectBorder(this)





    setTimeout(() => {

      this.borders.elem.firstElementChild.style.width = '100%';
      this.borders.elem.firstElementChild.style.height = '100%';


      this.borders.elem.parentElement.classList.remove('menutransition');



      allElems.forEach((allElems) => {
        allElems.classList.remove("menutransition");
        if (allElems == this.borders.elem) {
          allElems.firstElementChild.classList.remove("menutransition");
        }

      })
      resolve()
    }, transitionValue.duration * 1000);

  
  })
  
};


createBorderPath.prototype.expandMenuElseIf = function() {
  return new Promise((resolve,reject)=>{

    leftRight = this.getLeftRight(this);
    upDown = this.getUpDown(this);
  
    widthBigger = leftRight.widthBigger;
    widthSmaller = leftRight.widthSmaller;
    heightBigger = upDown.heightBigger;
    heightSmaller = upDown.heightSmaller;
  
    this.subMenuChangingWidth;
    this.subMenuChangingHeight;
    
  
    allElems.forEach((allElem) => {
      allElem.classList.add("menutransition")
      if (allElem == this.borders.elem) {
        allElem.firstElementChild.classList.add("menutransition")
      }
    })

    


    this.smallMenuSize = this.borders.elem.firstElementChild.clientWidth;
    // this.biggeredElemPath = biggeredElem == null ? 1 : document.getElementById(biggeredElem.id + 'Border');
    this.biggeredElemPath = document.getElementById(biggeredElem.id + 'Border');



    allElems.forEach((allElem) => {
      allElem.classList.add("menutransition")
      if (allElem == this.borders.elem) {
        allElem.firstElementChild.classList.add("menutransition");
      }
    })


    widthBigger.forEach((widthBigger) => widthBigger.style.width = transitionValue['menuMax'] + '%')
    widthSmaller.forEach((widthSmaller) => widthSmaller.style.width = (100 - transitionValue['menuMax']) + '%')
    heightBigger.forEach((heightBigger) => heightBigger.style.height = transitionValue['menuMax'] + '%')
    heightSmaller.forEach((heightSmaller) => heightSmaller.style.height = (100 - transitionValue['menuMax']) + '%')



    this.subMenuChanging();
    this.borders.elem.firstElementChild.style.width = this.subMenuChangingWidth + "px";
    this.borders.elem.firstElementChild.style.height = this.subMenuChangingHeight + "px";
    

    biggeredElem.firstElementChild.classList.add("menutransition");
    // biggeredElem.firstElementChild.style.width = '';
    // biggeredElem.firstElementChild.style.height = '';
    setBordersSize(biggeredElem);
    document.querySelector(`#${biggeredElem.id} .borders .borderCover`).style.width = this.smallMenuSize + 'px';
    document.querySelector(`#${biggeredElem.id} .borders .borderCover`).style.height = this.smallMenuSize + 'px';








    this.borders.path.setAttributeNS(null, 'stroke', 'ivory');
    this.biggeredElemPath.setAttributeNS(null, 'stroke', eval(biggeredElem.id + 'Border').strokeColor);

    //--- stop biggredElem wavy animation ---------------------------------------------------------
    document.getElementById(biggeredElem.id + 'BorderWavy1').setAttribute('d', '');
    document.getElementById(biggeredElem.id + 'BorderWavy2').setAttribute('d', '');
    eval('run' + biggeredElem.id.charAt(0).toUpperCase() + biggeredElem.id.slice(1) + 'Border').stopTl()
    //-----------------------------------------------------------------------------------------------
    if(innerWidth<800){
      this.smallerRestElemBordersElseIf();
    }
    this.animRectBorder(this)



  
  
    setTimeout(() => {

      this.borders.elem.firstElementChild.style.width = '100%';
      this.borders.elem.firstElementChild.style.height = '100%';

      biggeredElem.firstElementChild.classList.remove("menutransition");


  
      allElems.forEach((allElems) => {
        allElems.classList.remove("menutransition");
        if (allElems == this.borders.elem) {
          allElems.firstElementChild.classList.remove("menutransition");
        }
  
      })
      resolve()
    }, transitionValue.duration * 1000);
  
    
  })
  
};
  
  
createBorderPath.prototype.expandMenuElse = function() {
  return new Promise((resolve,reject)=>{

    this.restElems = getRestElems(this.borders.elem);


    leftRight = this.getLeftRight(this);
    upDown = this.getUpDown(this);

    widthBigger = leftRight.widthBigger;
    widthSmaller = leftRight.widthSmaller;
    heightBigger = upDown.heightBigger;
    heightSmaller = upDown.heightSmaller;

    this.subMenuChangingWidth;
    this.subMenuChangingHeight;
    


    allElems.forEach((allElem) => {
      allElem.classList.add("menutransition");
      allElem.style.width = '';
      allElem.style.height = '';
      if (allElem == this.borders.elem) {
        allElem.firstElementChild.classList.add("menutransition");
      }
    })



    console.log(document.querySelector(`#${this.borders.elem.id} .borders .borderCover`))
      setBordersSize(this.borders.elem);
      if(innerWidth > 1400){
          document.querySelector(`#${this.borders.elem.id} .borders .borderCover`).style.width = 'var(--borderSize1400)';
          document.querySelector(`#${this.borders.elem.id} .borders .borderCover`).style.height = 'var(--borderSize1400)';
      }else if(innerWidth > 800){
          document.querySelector(`#${this.borders.elem.id} .borders .borderCover`).style.width = 'var(--bordersSize)';
          document.querySelector(`#${this.borders.elem.id} .borders .borderCover`).style.height = 'var(--bordersSize)';
      }else{
          document.querySelector(`#${this.borders.elem.id} .borders .borderCover`).style.width = 'var(--borderSize800)';
          document.querySelector(`#${this.borders.elem.id} .borders .borderCover`).style.height = 'var(--borderSize800)';
      }

      console.log(document.querySelector(`#${this.borders.elem.id} .borders .borderCover`))



      this.borders.path.setAttributeNS(null, 'stroke', this.borders.strokeColor);

      //--- stop this.elem wavy animation ---------------------------------------------------------
      document.getElementById(this.borders.elem.id + 'BorderWavy1').setAttribute('d', '');
      document.getElementById(this.borders.elem.id + 'BorderWavy2').setAttribute('d', '');
      this.stopTl()
      //-----------------------------------------------------------------------------------------------
      if(innerWidth<800){
        this.smallerRestElemBorders();
      }
      this.animRectBorder(this)






    setTimeout(() => {


      allElems.forEach((allElems) => {
        allElems.classList.remove("menutransition");
        if (allElems == this.borders.elem) {
          allElems.firstElementChild.classList.remove("menutransition");
        }

      })
      resolve()
    }, transitionValue.duration * 1000);

  
})

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


createBorderPath.prototype.getPadding = function(){
  this.botMenuPaddingTop = parseFloat(window.getComputedStyle(BOTTOM_MENU).paddingTop);
  this.botMenuPaddingLeft = parseFloat(window.getComputedStyle(BOTTOM_MENU).paddingLeft);
  this.botMenuPaddingRight = parseFloat(window.getComputedStyle(BOTTOM_MENU).paddingRight);
  this.botMenuPaddingBot = parseFloat(window.getComputedStyle(BOTTOM_MENU).paddingBottom);
  this.botMenuPaddingWidth = this.botMenuPaddingLeft + this.botMenuPaddingRight;
  this.botMenuPaddingHeight = this.botMenuPaddingTop + this.botMenuPaddingBot;

  this.liPaddingTop = parseFloat(window.getComputedStyle(this.borders.elem).paddingTop);
  this.liPaddingLeft = parseFloat(window.getComputedStyle(this.borders.elem).paddingLeft);
  this.liPaddingRight = parseFloat(window.getComputedStyle(this.borders.elem).paddingRight);
  this.liPaddingBot = parseFloat(window.getComputedStyle(this.borders.elem).paddingBottom);
  this.liPaddingWidth = this.liPaddingLeft + this.liPaddingRight;
  this.liPaddingHeight = this.liPaddingTop + this.liPaddingBot;
}


createBorderPath.prototype.subMenuChanging = function() {
  this.getPadding();
  let innerWidthTest;

  if(innerWidth > 800){
    this.subMenuChangingWidth = (innerWidth * (transitionValue['max'] / 100) - this.botMenuPaddingWidth) * (transitionValue['menuMax'] / 100) - this.liPaddingWidth ;
    this.subMenuChangingHeight = (BOTTOM_MENU.parentElement.clientHeight - this.botMenuPaddingHeight) * (transitionValue['menuMax'] / 100) - this.liPaddingHeight;

  }else{
    this.subMenuChangingWidth =(BOTTOM_MENU.parentElement.clientWidth - this.botMenuPaddingWidth ) * (transitionValue['menuMax'] / 100) - this.liPaddingWidth ;
    this.subMenuChangingHeight = (BOTTOM_MENU.parentElement.clientHeight - demoVideoHeight - this.botMenuPaddingHeight) * (transitionValue['menuMax'] / 100) - this.liPaddingHeight ;
  }

}


//---- create rectangle border ------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

createBorderPath.prototype.createRectBorder = function() {
  
  // this.borders.path.parentElement.style.width = this.borders.w + this.borders.radius * 2 + 'px';
  // this.borders.path.parentElement.style.height = this.borders.h + this.borders.radius * 2 + 'px';
  this.borders.path.parentElement.style.width = this.borders.w + this.extraSVGspace + 'px';
  this.borders.path.parentElement.style.height = this.borders.h + this.extraSVGspace +'px';
  // this.borders.path.parentElement.style.top = `-${this.borders.radius}px`;
  this.borders.path.parentElement.setAttribute('transform', `translate( -${this.extraSVGspace/2}, 0)`);
  // this.borders.path.parentElement.style.left = `-${this.extraSVGspace/2}px`;
  // this.borders.path.parentElement.style.top = `-${this.extraSVGspace/2}px`;
  // this.borders.path.setAttribute('transform', `translate(-${this.borders.radius},0)`);


  this.borders.path.setAttributeNS(null, 'x', this.x);
  this.borders.path.setAttributeNS(null, 'y', this.y);
  this.borders.path.setAttributeNS(null, 'rx', this.borders.border);
  this.borders.path.setAttributeNS(null, 'ry', this.borders.border);
  this.borders.path.style.width = this.w + 'px';
  this.borders.path.style.height = this.w + 'px';
  // this.borders.path.setAttributeNS(null, 'width', this.w);
  // this.borders.path.setAttributeNS(null, 'height', this.h);
  this.borders.path.setAttributeNS(null, 'fill', this.borders.color);
  this.borders.path.setAttributeNS(null, 'stroke', this.borders.strokeColor);
  this.borders.path.setAttribute('transform', `translate(${this.extraSVGspace/2},${this.extraSVGspace/2})`);

  
  // document.querySelector(`#${this.borders.elem.id} .borderCover`).style.opacity = '0';
  document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttributeNS(null, 'x', this.x);
  document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttributeNS(null, 'y', this.y);
  document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttributeNS(null, 'rx', this.borders.border);
  document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttributeNS(null, 'ry', this.borders.border);
  document.querySelector(`#${this.borders.elem.id} .borderCover`).style.width = this.w + 'px';
  document.querySelector(`#${this.borders.elem.id} .borderCover`).style.height = this.w + 'px';
  // document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttributeNS(null, 'width', 'var(--bordersWidth)');
  // document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttributeNS(null, 'height', 'var(--bordersHeight)');
  document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttributeNS(null, 'fill', this.borders.color);
  document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttributeNS(null, 'stroke', 'white');
  document.querySelector(`#${this.borders.elem.id} .borderCover`).setAttribute('transform', `translate(${this.extraSVGspace/2},${this.extraSVGspace/2})`);





  document.getElementById(this.borders.elem.id + 'BorderWavy1').setAttribute('transform', `translate(${this.extraSVGspace/2},${this.extraSVGspace/2})`);
  document.getElementById(this.borders.elem.id + 'BorderWavy2').setAttribute('transform', `translate(${this.extraSVGspace/2},${this.extraSVGspace/2})`);


  // this.borders.path.setAttributeNS('transform', 'translate(20,0)');

  // this.borders.path.setAttributeNS(null, 'stroke-width', this.borders.strokeWidth + this.borders.strokeWidthUnit);

}

createBorderPath.prototype.animRectBorder = function() {
  f += dir;

  this.borders.path.parentElement.style.width = this.borders.elem.firstElementChild.clientWidth + this.extraSVGspace + 'px';
  this.borders.path.parentElement.style.height = this.borders.elem.firstElementChild.clientHeight + this.extraSVGspace + 'px';
  this.borders.path.style.width = this.borders.elem.firstElementChild.clientWidth +'px';
  this.borders.path.style.height = this.borders.elem.firstElementChild.clientHeight +'px';
  document.querySelectorAll(`#${this.borders.elem.id} .neon`).forEach((neon)=>{
    neon.style.width = this.borders.elem.firstElementChild.clientWidth +'px';
    neon.style.height = this.borders.elem.firstElementChild.clientHeight +'px';
  })


  if (biggeredElem != null) {
    this.biggeredElemPath.parentElement.style.width = this.biggeredElemPath.parentElement.parentElement.clientWidth + this.extraSVGspace + 'px';
    this.biggeredElemPath.parentElement.style.height = this.biggeredElemPath.parentElement.parentElement.clientHeight + this.extraSVGspace + 'px';
    this.biggeredElemPath.style.width = this.biggeredElemPath.parentElement.parentElement.clientWidth +'px';
    this.biggeredElemPath.style.height = this.biggeredElemPath.parentElement.parentElement.clientHeight +'px';
  }
  
  

  if (!(f % NF)) {
    
    this.stopAni();

    if (menuExpanded) {

      this.w = this.subMenuChangingWidth;
      this.h = this.subMenuChangingHeight;


      this.borders.path.parentElement.style.width = this.w + this.extraSVGspace + 'px';
      this.borders.path.parentElement.style.height = this.h + this.extraSVGspace + 'px';
  
      this.borders.path.setAttributeNS(null, 'width', this.w);
      this.borders.path.setAttributeNS(null, 'height', this.h);

 
    }
    document.querySelectorAll(`#${this.borders.elem.id} .neon`).forEach((neon)=>{
      neon.style.width = 'inherit';
      neon.style.height = 'inherit';
    })
    if (biggeredElem != null) {
      this.biggeredElemPath.parentElement.style.width = this.smallMenuSize + this.extraSVGspace + 'px';
      this.biggeredElemPath.parentElement.style.height = this.smallMenuSize + this.extraSVGspace + 'px';
      this.biggeredElemPath.setAttribute('width', this.smallMenuSize);
      this.biggeredElemPath.setAttribute('height', this.smallMenuSize);
      

    }
    f = 0;



    if (menuExpanded) {

      this.createWavyAnimation(() => {
        eval(this.borders.elem.id + 'MenuController').removeEventCB();
        eval(this.borders.elem.id + 'MenuController').callAfterAnim(this.borders.elem);
      });

    } else {
      eval(this.borders.elem.id + 'MenuController').removeEventCB()
    }


    return
  }

  requestAni = requestAnimationFrame(() => this.animRectBorder(this));

}


createBorderPath.prototype.stopAni = function() {
  cancelAnimationFrame(requestAni);
  requestAni = null;
}


createBorderPath.prototype.smallerRestElemBorders = function(){

  this.restElems.forEach((restElem)=>{
    document.getElementById(`${restElem.id}Border`).parentElement.parentElement.classList.add('menutransition');
    document.getElementById(`${restElem.id}Border`).parentElement.classList.add('menutransition');
    document.getElementById(`${restElem.id}Border`).classList.add('menutransition');
    document.querySelector(`#${restElem.id} .borders .borderCover`).style.display = 'none';
  });


  if(menuExpanded){
    this.restElems.forEach((restElem)=>{
      this.setBordersSizeFamily(restElem,'bordersSmallSize');

    })
  }else{
    this.restElems.forEach((restElem)=>{
      console.log('else is working')
      this.setBordersSizeFamily(restElem,'borderSize800');

      document.querySelector(`#${this.borders.elem.id} .borders .borderCover`).style.width = 'var(--borderSize800)';
      document.querySelector(`#${this.borders.elem.id} .borders .borderCover`).style.height = 'var(--borderSize800)';
    })
  }
  
 
  setTimeout(() => {
    this.restElems.forEach((elem)=>{
      document.getElementById(`${elem.id}Border`).classList.remove('menutransition');
      document.getElementById(`${elem.id}Border`).parentElement.classList.remove('menutransition');
      document.getElementById(`${elem.id}Border`).parentElement.parentElement.classList.remove('menutransition');
      document.querySelector(`#${elem.id} .borders .borderCover`).style.display = 'initial';
    });
  }, transitionValue['duration'] * 1000);
}

createBorderPath.prototype.setBordersSizeFamily = function(elem, borderSize){
  document.querySelector(`#${elem.id} .borders`).style.width = `var(--${borderSize})`;
  document.querySelector(`#${elem.id} .borders`).style.height = `var(--${borderSize})`;

  document.querySelector(`#${elem.id} .borders svg`).style.width = `calc(${transitionValue[borderSize]} + ${this.extraSVGspace}px`;
  document.querySelector(`#${elem.id} .borders svg`).style.height = `calc(${transitionValue[borderSize]} + ${this.extraSVGspace}px`;
  

  document.querySelectorAll(`#${elem.id} .borders svg rect`).forEach((rect)=>{
    rect.style.width = `var(--${borderSize})`;
    rect.style.height = `var(--${borderSize})`;
  })
}

createBorderPath.prototype.smallerRestElemBordersElseIf = function(){
  document.querySelector(`#${biggerElem.id} .borders .borderCover`).classList.remove('borderCoverWhite');


    document.querySelector(`#${biggeredElem.id} .borders`).style.width = transitionValue['bordersSmallSize'];
    document.querySelector(`#${biggeredElem.id} .borders`).style.height = transitionValue['bordersSmallSize'];


    setTimeout(() => {
    }, transitionValue['duration'] * 1000);

}

//---- create Border ----------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


createBorderPath.prototype.getDataPoints = function() {

  let w = this.w + this.borders.radius * 2;
  let h = this.h + this.borders.radius * 2;


  this.x = this.borders.x - this.borders.radius;
  this.y = this.borders.y - this.borders.radius ;
  // this.x = this.x - this.borders.radius/2;
  // this.y = this.y - this.borders.radius/2;

  let points = [];
  let pointsTween = [];

  if (this.borders.border > this.borders.w / 2) {
    return this.borders.border = this.borders.w / 2 - 10;
  }

  let getPositions = function() {
    return {
      position0: {
        x: this.x + this.borders.border,
        y: this.y
      },
      position1: {
        x: this.x + w - this.borders.border,
        y: this.y
      },
      position2: {
        x: this.x + w,
        y: this.y + this.borders.border
      },
      position3: {
        x: this.x + w,
        y: this.y + h - this.borders.border
      },
      position4: {
        x: this.x + w - this.borders.border,
        y: this.y + h
      },
      position5: {
        x: this.x + this.borders.border,
        y: this.y + h
      },
      position6: {
        x: this.x,
        y: this.y + h - this.borders.border
      },
      position7: {
        x: this.x,
        y: this.y + this.borders.border
      }
    }
  }


  let positions = getPositions.call(this);

  points1 = getMutipliedPoints(this, positions, 0);
  points2 = getMutipliedPoints(this, positions, 1);

  //--- get points for tween ---------------------------------------------------------------------------------

  w = this.w - this.borders.radius * 2;
  h = this.h - this.borders.radius * 2;

  this.x = this.borders.x + this.borders.radius;
  this.y = this.borders.y + this.borders.radius;


  positions = getPositions.call(this);
  pointsTween1 = getMutipliedPoints(this, positions, 0);
  pointsTween2 = getMutipliedPoints(this, positions, 1);


  return {
    points1: points1,
    points2: points2,
    pointsTween1: pointsTween1,
    pointsTween2: pointsTween2
  }

  function getMutipliedPoints(self, positions, plusNum) {
    let slice = self.borders.multiply + plusNum;
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


createBorderPath.prototype.updateSize = function() {


  this.borders.radius = innerWidth > 800 ? 7 : 4;
  this.borders.strokeWidth = innerWidth > 800 ? 8 : 5;
  


    if (this.borders.elem == biggerElem) {

      this.borders.path.parentElement.style.width = this.borders.elem.firstElementChild.clientWidth + this.extraSVGspace + 'px'
      this.borders.path.parentElement.style.height = this.borders.elem.firstElementChild.clientHeight + this.extraSVGspace + 'px'
      this.borders.path.style.width = this.borders.elem.firstElementChild.clientWidth;
      this.borders.path.style.height = this.borders.elem.firstElementChild.clientHeight;

      this.w = this.borders.elem.firstElementChild.clientWidth;
      this.h = this.borders.elem.firstElementChild.clientHeight;
      this.createWavyAnimation(() => {});

    }else{
      if(innerWidth > 1400){
        this.setBordersSizeFamily(this.borders.elem,'borderSize1400');

      }else if(innerWidth > 800){
        this.setBordersSizeFamily(this.borders.elem,'bordersSize');

      }else{
        if(menuExpanded){
          this.setBordersSizeFamily(this.borders.elem,'bordersSmallSize');
        }else{
          this.setBordersSizeFamily(this.borders.elem,'borderSize800');
        }
      }
    }
  

};


//---- create Wavy Animation --------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------



createBorderPath.prototype.createWavyAnimation = function(callback) {


  if (!this.tl) {

    this.tl = gsap.timeline({
      onUpdate: update,
      onUpdateParams: [this]

    });
    let dataPoints = this.getDataPoints(this);
  

    let points1 = dataPoints.points1;
    let points2 = dataPoints.points2;


    let pointsTween1 = dataPoints.pointsTween1;
    let pointsTween2 = dataPoints.pointsTween2;

  } else {
    this.tl.resume();


    dataPoints = this.getDataPoints(this);

    points1 = dataPoints.points1;
    points2 = dataPoints.points2;


    pointsTween1 = dataPoints.pointsTween1;
    pointsTween2 = dataPoints.pointsTween2;
  }


  for (let i = 0; i < points1.length; i++) {

    let duration = random(this.borders['speed'][0], this.borders['speed'][1]);



    let tween1 = gsap.to(points1[i], {
      duration: duration,
      x: pointsTween1[i].x,
      y: pointsTween1[i].y,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut
    });

    let tween2 = gsap.to(points2[i], {
      duration: duration,
      x: pointsTween2[i].x,
      y: pointsTween2[i].y,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut
    });


    this.tl.add(tween1, -random(duration))
    this.tl.add(tween2, -random(duration))
  }

  document.getElementById(this.borders.elem.id + 'BorderWavy1').setAttributeNS(null, 'stroke-width', this.borders.strokeWidth + this.borders.strokeWidthUnit);
  document.getElementById(this.borders.elem.id + 'BorderWavy2').setAttributeNS(null, 'stroke-width', this.borders.strokeWidth + this.borders.strokeWidthUnit);

  function update(self) {

    document.getElementById(self.borders.elem.id + 'BorderWavy1').setAttribute('d', tweenCardinal(points1, true, 0.5))
    document.getElementById(self.borders.elem.id + 'BorderWavy2').setAttribute('d', tweenCardinal(points2, true, 0.1))
  }


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
  callback()
};

createBorderPath.prototype.stopTl = function() {

  this.tl.pause(0);
}



//---- create Wavy Animation --------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

createBorderPath.prototype.hoveroverOn = function() {
  if(this.borders.elem != biggerElem){
    document.querySelector(`#${this.borders.elem.id} .borderCover`).classList.add('borderCoverWhite');
    document.querySelector(`#${this.borders.elem.id} .neon1`).classList.add(`${this.borders.elem.id}Neon1`);
    document.querySelector(`#${this.borders.elem.id} .neon2`).classList.add(`${this.borders.elem.id}Neon2`);
  }
};

createBorderPath.prototype.hoveroverOff = function() {
    if(this.borders.elem != biggerElem){
      document.querySelector(`#${this.borders.elem.id} .borderCover`).classList.remove('borderCoverWhite');
      document.querySelector(`#${this.borders.elem.id} .neon1`).classList.remove(`${this.borders.elem.id}Neon1`);
      document.querySelector(`#${this.borders.elem.id} .neon2`).classList.remove(`${this.borders.elem.id}Neon2`);
    }
};



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




let workBorder = new border('work');
let skillBorder = new border('skill');
let paintBorder = new border('paint');
let infoBorder = new border('info');

let runWorkBorder = new createBorderPath(workBorder);
let runSkillBorder = new createBorderPath(skillBorder);
let runPaintBorder = new createBorderPath(paintBorder);
let runInfoBorder = new createBorderPath(infoBorder);

