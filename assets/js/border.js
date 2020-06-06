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
  this.multiply = 3;
  this.scale = 1;
  this.radius = 10;
  this.speed = [2, 3];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = `url(#${this.path.id}Color)`;
  this.strokeWidth = 4;
  this.strokeWidthUnit = 'px';
  this.strokeLineCap = 'square'; //square, butt or round
  this.margin = 0;
  this.extraBorderSpace = 5;
}




const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';

// let transitionValue = new transitionValue;

let requestAni = null;
let f = 0;
let fSmaller = 0;
let dir = 1;
let NF = transitionValue.duration * 63;




function createBorderPath(borders) {

  this.borders = borders
  this.elemParent = this.borders.elem.parentElement;


  this.x = this.borders.x + this.borders.strokeWidth / 2 + this.borders.radius;
  this.y = this.borders.y + this.borders.strokeWidth / 2 + this.borders.radius;
  this.w = this.borders.w - this.borders.strokeWidth;
  this.h = this.borders.h - this.borders.strokeWidth;

  this.data;
  this.points = [];
  this.pointsTween = [];

  this.padding = parseFloat(window.getComputedStyle(this.borders.elem).paddingTop) * 2;
  this.expanding = false;
  this.stop = false;


  this.subMenuChangingWidth, this.subMenuChangingHeight;
  this.topMenuSize;



  //----call path-----

  this.createRectBorder(this)

  //-----------------

  this.updateSizeHandler = this.updateSize.bind(this);
  this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  this.hoveroverOffHandler = this.hoveroverOff.bind(this);



  window.addEventListener('resize', this.updateSizeHandler);
  this.borders.elem.firstElementChild.addEventListener('mouseover', this.hoveroverOnHandler);
  this.borders.elem.firstElementChild.addEventListener('mouseout', this.hoveroverOffHandler);

}



//---- expand Menu -------------------------------------------------------------------------

createBorderPath.prototype.expandMenu = function(allElems) {

  let leftRight = this.getLeftRight(this);
  let upDown = this.getUpDown(this);

  let widthBigger = leftRight.widthBigger;
  let widthSmaller = leftRight.widthSmaller;
  let heightBigger = upDown.heightBigger;
  let heightSmaller = upDown.heightSmaller;

  


  allElems.forEach((allElems) => {
    allElems.classList.add("menutransition")
    if (allElems == this.borders.elem) {
      allElems.firstElementChild.classList.add("menutransition")
    }
  })


  if (menuExpanded && biggeredElem == null) {

    this.getTopMenuSize()
    TOP_MENU.classList.add('menutransition');
    TOP_MENU.style.height = this.topMenuSize + 'px';
    

    MENU__.classList.add('menutransition')
    DEMO__.classList.add('menutransition')
    MENU__.style.width = transitionValue['max'] + '%';
    DEMO__.style.width = ( 100 - transitionValue['max']) + '%';
    

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
    this.animRectBorder(() => {})



    setTimeout(() => {

      MENU__.classList.remove('menutransition')
      DEMO__.classList.remove('menutransition')
      this.borders.elem.firstElementChild.style.width = '100%'
      this.borders.elem.firstElementChild.style.height = '100%'


      this.borders.elem.parentElement.classList.remove('menutransition')

    }, transitionValue.duration * 1000);


  } else if (biggerElem == this.borders.elem) {

    this.smallMenuSize = this.borders.elem.firstElementChild.clientWidth;
    // this.biggeredElemPath = biggeredElem == null ? 1 : document.getElementById(biggeredElem.id + 'Border');
    this.biggeredElemPath = document.getElementById(biggeredElem.id + 'Border');



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



    this.subMenuChanging()
    this.borders.elem.firstElementChild.style.width = this.subMenuChangingWidth + "px";
    this.borders.elem.firstElementChild.style.height = this.subMenuChangingHeight + "px";
    

    biggeredElem.firstElementChild.classList.add("menutransition");
    biggeredElem.firstElementChild.style.width = '';
    biggeredElem.firstElementChild.style.height = '';




    // document.querySelector(`#${biggeredElem.id} .text`).style.alignItems = 'center'


    this.borders.path.setAttributeNS(null, 'stroke', 'ivory');
    this.biggeredElemPath.setAttributeNS(null, 'stroke', eval(biggeredElem.id + 'Border').strokeColor);

    //--- stop biggredElem wavy animation ---------------------------------------------------------
    document.getElementById(biggeredElem.id + 'BorderWavy1').setAttribute('d', '');
    document.getElementById(biggeredElem.id + 'BorderWavy2').setAttribute('d', '');
    eval('run' + biggeredElem.id.charAt(0).toUpperCase() + biggeredElem.id.slice(1) + 'Border').stopTl()
    //-----------------------------------------------------------------------------------------------
    this.animRectBorder(this)


    setTimeout(() => {

      this.borders.elem.firstElementChild.style.width = '100%'
      this.borders.elem.firstElementChild.style.height = '100%'

      biggeredElem.firstElementChild.classList.remove("menutransition");

    }, transitionValue.duration * 1000);

  } else {


    this.borders.elem.parentElement.classList.add('menutransition')
    allElems.forEach((allElems) => {
      allElems.classList.add("menutransition")
      allElems.style.width = '';
      allElems.style.height = '';
    })

    TOP_MENU.classList.add('menutransition');
    TOP_MENU.style.height = '';

    MENU__.classList.add('menutransition')
    DEMO__.classList.add('menutransition')
    MENU__.style.width = transitionValue['min'] + '%';
    DEMO__.style.width = ( 100 - transitionValue['min']) + '%';



    this.borders.elem.firstElementChild.style.width = '';
    this.borders.elem.firstElementChild.style.height = '';



    this.borders.path.setAttributeNS(null, 'stroke', this.borders.strokeColor);

    //--- stop this.elem wavy animation ---------------------------------------------------------
    document.getElementById(this.borders.elem.id + 'BorderWavy1').setAttribute('d', '');
    document.getElementById(this.borders.elem.id + 'BorderWavy2').setAttribute('d', '');
    this.stopTl()
    //-----------------------------------------------------------------------------------------------

    this.animRectBorder(this)


  }

  setTimeout(() => {
    TOP_MENU.classList.remove('menutransition');

    MENU__.classList.remove('menutransition')
    DEMO__.classList.remove('menutransition')

    allElems.forEach((allElems) => {
      allElems.classList.remove("menutransition");
      if (allElems == this.borders.elem) {
        allElems.firstElementChild.classList.remove("menutransition");
      }

    })

  }, transitionValue.duration * 1000);



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

createBorderPath.prototype.getTopMenuSize = function(){
  let topMenuFontSize = parseFloat(getComputedStyle(this.elemParent.parentElement.firstElementChild).fontSize);
  let topMenuPadding = parseFloat(getComputedStyle(this.elemParent.parentElement.firstElementChild).paddingTop);

  this.topMenuSize = topMenuFontSize + topMenuPadding*2;
}

createBorderPath.prototype.subMenuChanging = function() {
  this.subMenuChangingWidth = MENU__.parentElement.clientWidth * ((transitionValue['max'] / 100) * (transitionValue['menuMax'] / 100)) - this.padding;
  this.getTopMenuSize()
  this.subMenuChangingHeight = (MENU__.parentElement.clientHeight - this.topMenuSize) * (transitionValue['menuMax'] / 100) - this.padding;
}


//---- create rectangle border ------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

createBorderPath.prototype.createRectBorder = function() {

  this.borders.path.parentElement.style.width = this.borders.w + this.borders.radius * 2 + 'px';
  this.borders.path.parentElement.style.height = this.borders.h + this.borders.radius * 2 + 'px';
  this.borders.path.parentElement.style.top = `-${this.borders.radius}px`;
  this.borders.path.parentElement.style.left = `-${this.borders.radius}px`;


  this.borders.path.setAttributeNS(null, 'x', this.x)
  this.borders.path.setAttributeNS(null, 'y', this.y)
  this.borders.path.setAttributeNS(null, 'rx', this.borders.border)
  this.borders.path.setAttributeNS(null, 'ry', this.borders.border)
  this.borders.path.setAttributeNS(null, 'width', this.w)
  this.borders.path.setAttributeNS(null, 'height', this.h)
  this.borders.path.setAttributeNS(null, 'fill', this.borders.color);
  this.borders.path.setAttributeNS(null, 'stroke', this.borders.strokeColor);
  this.borders.path.setAttributeNS(null, 'stroke-width', this.borders.strokeWidth);

}

createBorderPath.prototype.animRectBorder = function() {
  f += dir;

  this.borders.path.parentElement.style.width = this.borders.elem.firstElementChild.clientWidth + this.borders.radius * 2 + 'px';
  this.borders.path.parentElement.style.height = this.borders.elem.firstElementChild.clientHeight + this.borders.radius * 2 + 'px';
  this.borders.path.setAttributeNS(null, 'width', this.borders.elem.firstElementChild.clientWidth - this.borders.strokeWidth);
  this.borders.path.setAttributeNS(null, 'height', this.borders.elem.firstElementChild.clientHeight - this.borders.strokeWidth);



  if (biggeredElem != null) {
    this.biggeredElemPath.parentElement.style.width = this.biggeredElemPath.parentElement.parentElement.clientWidth + this.borders.radius * 2 + 'px';
    this.biggeredElemPath.parentElement.style.height = this.biggeredElemPath.parentElement.parentElement.clientHeight + this.borders.radius * 2 + 'px';
    this.biggeredElemPath.setAttributeNS(null, 'width', this.biggeredElemPath.parentElement.parentElement.clientWidth - this.borders.strokeWidth);
    this.biggeredElemPath.setAttributeNS(null, 'height', this.biggeredElemPath.parentElement.parentElement.clientHeight - this.borders.strokeWidth);
  }

  if (!(f % NF)) {

    this.stopAni();

    if (menuExpanded) {
      this.w = this.subMenuChangingWidth - this.borders.strokeWidth;
      this.h = this.subMenuChangingHeight - this.borders.strokeWidth;
      

      this.borders.path.parentElement.style.width = this.w + this.borders.radius * 2 + 'px';
      this.borders.path.parentElement.style.height = this.h + +this.borders.radius * 2 + 'px';
      this.borders.path.setAttributeNS(null, 'width', this.w);
      this.borders.path.setAttributeNS(null, 'height', this.h);
    }

    if (biggeredElem != null) {
      
      this.biggeredElemPath.parentElement.style.width = '';
      this.biggeredElemPath.parentElement.style.height = '';
      this.biggeredElemPath.setAttribute('width', this.smallMenuSize - this.borders.strokeWidth);
      this.biggeredElemPath.setAttribute('height', this.smallMenuSize - this.borders.strokeWidth);
    }
    f = 0;



    if (menuExpanded) {
      this.createWavyAnimation(() => {
        eval(this.borders.elem.id + 'MenuController').removeEventCB();
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

//---- create Border ----------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


createBorderPath.prototype.getDataPoints = function() {

  let w = this.w + this.borders.radius;
  let h = this.h + this.borders.radius;


  this.x = this.borders.x + this.borders.strokeWidth / 2 + this.borders.radius - this.borders.radius / 2;
  this.y = this.borders.y + this.borders.strokeWidth / 2 + this.borders.radius - this.borders.radius / 2;
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

  w = this.w - this.borders.radius;
  h = this.h - this.borders.radius;

  this.x = this.x + this.borders.radius;
  this.y = this.y + this.borders.radius;


  positions = getPositions.call(this);
  pointsTween1 = getMutipliedPoints(this, positions, 0)
  pointsTween2 = getMutipliedPoints(this, positions, 1)

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


  this.borders.path.parentElement.style.width = this.borders.elem.firstElementChild.clientWidth + this.borders.radius * 2 + 'px'
  this.borders.path.parentElement.style.height = this.borders.elem.firstElementChild.clientHeight + this.borders.radius * 2 + 'px'
  this.borders.path.setAttributeNS(null, 'width', this.borders.elem.firstElementChild.clientWidth - this.borders.strokeWidth);
  this.borders.path.setAttributeNS(null, 'height', this.borders.elem.firstElementChild.clientHeight - this.borders.strokeWidth);


  if (menuExpanded) {
    if (this.borders.elem == biggerElem) {
      this.w = this.borders.elem.firstElementChild.clientWidth - this.borders.strokeWidth;
      this.h = this.borders.elem.firstElementChild.clientHeight - this.borders.strokeWidth;
      this.createWavyAnimation(() => {});
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

  document.getElementById(this.borders.elem.id + 'BorderWavy1').setAttributeNS(null, 'stroke-width', this.borders.strokeWidth * 1.3 + this.borders.strokeWidthUnit);
  document.getElementById(this.borders.elem.id + 'BorderWavy2').setAttributeNS(null, 'stroke-width', this.borders.strokeWidth * 1.3 + this.borders.strokeWidthUnit);

  function update(self) {

    document.getElementById(self.borders.elem.id + 'BorderWavy1').setAttribute('d', tweenCardinal(points1, true, 0.5))
    document.getElementById(self.borders.elem.id + 'BorderWavy2').setAttribute('d', tweenCardinal(points2, true, 0.5))
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
  if (menuExpanded == false) {
    this.borders.path.setAttributeNS(null, 'stroke', 'ivory');
  }

}
createBorderPath.prototype.hoveroverOff = function() {
  if (menuExpanded == false) {
    this.borders.path.setAttributeNS(null, 'stroke', 'url(#' + this.borders.path.id + 'Color)');
  }
}






let workBorder = new border('work');
let skillBorder = new border('skill');
let paintBorder = new border('paint');
let infoBorder = new border('info');

let runWorkBorder = new createBorderPath(workBorder);
let runSkillBorder = new createBorderPath(skillBorder);
let runPaintBorder = new createBorderPath(paintBorder);
let runInfoBorder = new createBorderPath(infoBorder);