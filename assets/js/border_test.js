function border(id) {
  this.familyid = id;
  this.familyElem = document.getElementById(id);
  this.id = id + 'Border';
  this.elem = document.getElementById(this.id),
    this.x = 0;
  this.y = 0;
  this.w = document.getElementById('workBorder').parentElement.clientWidth;
  this.h = document.getElementById('workBorder').parentElement.clientHeight;
  this.border = 10;
  this.multiply = 3;
  this.scale = 1;
  this.radius = 5;
  this.speed = [1, 5];
  this.color = 'none';
  this.stroke = true;
  this.strokeColor = 'red';
  this.strokeWidth = 5;
  this.strokeWidthUnit = 'px';
  this.strokeLineCap = 'square'; //square, butt or round
  this.transitionValue = new transitionValue;
}

let biggerElem = 'none';
let biggeredElem = 'none';
let menuExpanded = false;


const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';




function createBorderPath(borders) {

  this.borders = borders;
  this.familyElem = this.borders.familyElem;
  this.familyParent = this.familyElem.parentElement;
  this.transitionValue = this.borders.transitionValue;
  this.path = borders.elem;


  this.x = borders.x + borders.strokeWidth / 2;
  this.y = borders.y + borders.strokeWidth / 2;
  this.h = borders.h;
  this.w = borders.w;
  this.border = borders.border;
  this.scale = borders.scale;
  this.allElems = this.getAllElems(this);
  this.restElems = this.getRestElems(this);

  this.data;
  this.points = [];
  this.pointsTween = [];

  this.padding = parseFloat(window.getComputedStyle(this.borders.elem.parentElement.parentElement.parentElement).paddingTop) * 2;
  this.expanding = false;
  this.stop = false;

  this.resize = false;

  //----call path-----

  this.getPath(this);

  //-----------------


  this.expandMenuHandler = this.expandMenu.bind(this);
  this.updateSizeHandler = this.updateSize.bind(this);
  this.creatWavyAnimationHandler = this.createWavyAnimation.bind(this);

  this.callClickEvent = () => {
    this.familyElem.removeEventListener('click', this.callClickEvent);
    this.restElemsEventListener('remove', 'callClickEvent')


    this.expandMenu(this);
    this.createWavyAnimation(this)

    setTimeout(() => {
      this.familyElem.addEventListener('click', this.callClickEvent);
      this.restElemsEventListener('add', 'callClickEvent')
    }, this.transitionValue.duration * 1000 + 200);

  }

  window.addEventListener('resize', this.updateSizeHandler);
  this.familyElem.addEventListener('click', this.callClickEvent);


}


createBorderPath.prototype.restElemsEventListener = function(listener, handler) {
  let id = this.restElems[0].id.charAt(0).toUpperCase() + this.restElems[0].id.slice(1);
  let runBorderId = eval('run' + id + 'Border');

  for (let i = 0; i < this.restElems.length; i++) {

    if (listener == 'add') {

      this.restElems[i].addEventListener('click', runBorderId[handler]);
    } else {

      this.restElems[i].removeEventListener('click', runBorderId[handler]);
    }
  }
}



createBorderPath.prototype.expandMenu = function() {

  let widthBigger = this.getLeftRight(this).widthBigger;
  let widthSmaller = this.getLeftRight(this).widthSmaller;
  let heightBigger = this.getUpDown(this).heightBigger;
  let heightSmaller = this.getUpDown(this).heightSmaller;

  this.familyElem.firstElementChild.classList.add('menutransition');

  if (menuExpanded == false) {

    menuExpanded = true;

    this.familyParent.style.width = this.borders.transitionValue['max'] + '%';

    for (let i = 0; i < this.allElems.length; i++) {
      this.allElems[i].classList.add("menutransition")
    }


    for (let i = 0; i < widthBigger.length; i++) {
      widthBigger[i].style.width = this.transitionValue['flexBasis'] + '%'
    }
    for (let i = 0; i < widthSmaller.length; i++) {
      widthSmaller[i].style.width = (100 - this.transitionValue['flexBasis']) + '%'
    }
    for (let i = 0; i < heightBigger.length; i++) {
      heightBigger[i].style.height = this.transitionValue['flexBasis'] + '%'
    }
    for (let i = 0; i < heightSmaller.length; i++) {
      heightSmaller[i].style.height = (100 - this.transitionValue['flexBasis']) + '%'
    }

    this.familyElem.firstElementChild.style.width = this.familyParent.parentElement.clientWidth * ((this.transitionValue['max'] / 100) * (this.transitionValue['flexBasis'] / 100)) - this.padding + "px";
    this.familyElem.firstElementChild.style.height = this.familyParent.parentElement.clientHeight * (this.transitionValue['flexBasis'] / 100) - this.padding + "px";

    biggerElem = this.familyElem;

    setTimeout(() => {
      this.familyElem.firstElementChild.style.width = '100%'
      this.familyElem.firstElementChild.style.height = '100%'
    }, this.borders.transitionValue.duration * 1000)

  } else if (biggerElem != this.familyElem) {

    for (let i = 0; i < this.allElems.length; i++) {
      this.allElems[i].classList.add("menutransition")
    }

    for (let i = 0; i < widthBigger.length; i++) {
      widthBigger[i].style.width = this.transitionValue['flexBasis'] + '%';
    }
    for (let i = 0; i < widthSmaller.length; i++) {
      widthSmaller[i].style.width = (100 - this.transitionValue['flexBasis']) + '%';
    }
    for (let i = 0; i < heightBigger.length; i++) {
      heightBigger[i].style.height = this.transitionValue['flexBasis'] + '%';
    }
    for (let i = 0; i < heightSmaller.length; i++) {
      heightSmaller[i].style.height = (100 - this.transitionValue['flexBasis']) + '%';
    }

    for (let i = 0; i < this.allElems.length; i++) {
      this.allElems[i].firstElementChild.classList.add("menutransition")
      this.allElems[i].firstElementChild.style.width = '';
      this.allElems[i].firstElementChild.style.height = '';
    }

    this.familyElem.firstElementChild.style.width = this.familyParent.parentElement.clientWidth * ((this.transitionValue['max'] / 100) * (this.transitionValue['flexBasis'] / 100)) - this.padding + "px";
    this.familyElem.firstElementChild.style.height = this.familyParent.parentElement.clientHeight * (this.transitionValue['flexBasis'] / 100) - this.padding + "px";

    biggeredElem = biggerElem;
    biggerElem = this.familyElem;

    setTimeout(() => {
      this.familyElem.firstElementChild.style.width = '100%'
      this.familyElem.firstElementChild.style.height = '100%'
    }, this.borders.transitionValue.duration * 1000)

  } else {

    menuExpanded = false;
    this.familyParent.style.width = this.transitionValue['min'] + '%';

    for (let i = 0; i < this.allElems.length; i++) {
      this.allElems[i].classList.add("menutransition")
      this.allElems[i].style.flex = '';
      this.allElems[i].style.height = '';
    }
    this.familyElem.firstElementChild.style.width = '';
    this.familyElem.firstElementChild.style.height = '';
    biggeredElem = 'none';
    biggerElem = 'none';
  }

  setTimeout(() => {

    for (let i = 0; i < this.allElems.length; i++) {
      this.allElems[i].firstElementChild.classList.remove('menutransition');
    }
    for (let i = 0; i < this.allElems.length; i++) {
      this.allElems[i].classList.remove("menutransition")

    }

  }, this.transitionValue.duration * 1000);



  if (biggeredElem.id == 'work') {
    runWorkBorder.creatWavyAnimationHandler();

  } else if (biggeredElem.id == 'skill') {
    runSkillBorder.creatWavyAnimationHandler();

  } else if (biggeredElem.id == 'paint') {
    runPaintBorder.creatWavyAnimationHandler();

  } else if (biggeredElem.id == 'skill') {
    runInfoBorder.creatWavyAnimationHandler();

  }
};

createBorderPath.prototype.getLeftRight = function() {

  let firstNum = this.getFirstNum(this);
  let widthBigger = [];
  let widthSmaller = [];

  let j = 0;
  if (firstNum % 2 != 0) {
    j = j + 1
  }
  for (let i = 0; i < this.familyParent.childNodes.length; i++) {
    j = j + 1;
    if (this.familyParent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }

    if (this.familyParent.childNodes[i].nodeType == 1) {
      if (j % 2 == 0) {
        widthBigger.push(this.familyParent.childNodes[i]);
      } else {
        widthSmaller.push(this.familyParent.childNodes[i]);
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
  for (let i = 0; i < this.familyParent.childNodes.length; i++) {

    j = j + 1;
    if (this.familyParent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (this.familyParent.childNodes[i].nodeType == 1) {

      if (j < 3) {
        up.push(this.familyParent.childNodes[i]);

      } else {
        down.push(this.familyParent.childNodes[i]);
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
  for (let i = 0; i < this.familyParent.childNodes.length; i++) {
    j = j + 1;
    if (this.familyParent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (this.familyParent.childNodes[i] === this.familyElem) {

      return j;
    }
  }
}

createBorderPath.prototype.getAllElems = function() {
  let allElems = [];

  for (let i = 0; i < this.familyParent.childNodes.length; i++) {
    if (this.familyParent.childNodes[i].nodeType == 1) {
      allElems.push(this.familyParent.childNodes[i]);
    }
  }

  return allElems;
}

createBorderPath.prototype.getRestElems = function() {
  let restElems = [];

  for (let i = 0; i < this.familyParent.childNodes.length; i++) {
    if (this.familyParent.childNodes[i].nodeType == 1 && this.familyParent.childNodes[i] != this.familyElem) {
      restElems.push(this.familyParent.childNodes[i]);
    }
  }

  return restElems;
}

//----expandMenu-------------------------------------------------------------------------


createBorderPath.prototype.getDataPoints = function() {

  let h = this.h - this.borders.strokeWidth;
  let w = this.w - this.borders.strokeWidth;

  let points = [];
  let pointsTween = [];

  let borders = this.borders

  if (this.border > w / 2) {
    return this.border = w / 2 - 10;
  }

  let getPositions = function() {
    return {
      position0: {
        x: this.x + borders.border,
        y: this.y
      },
      position1: {
        x: this.x + w - borders.border,
        y: this.y
      },
      position2: {
        x: this.x + w,
        y: this.y + borders.border
      },
      position3: {
        x: this.x + w,
        y: this.y + h - borders.border
      },
      position4: {
        x: this.x + w - borders.border,
        y: this.y + h
      },
      position5: {
        x: this.x + borders.border,
        y: this.y + h
      },
      position6: {
        x: this.x,
        y: this.y + h - borders.border
      },
      position7: {
        x: this.x,
        y: this.y + borders.border
      }
    }
  }


  let positions = getPositions.call(this);




  //----svg path-------------------------




  function getLine(positions, num) {

    let line = " ";
    let points = [];

    if (borders.multiply <= 1) {

      line += "L" + positions['position' + num].x + " " + positions['position' + num].y;

      points.push({
        x: positions['position' + num].x,
        y: positions['position' + num].y
      });

    } else {

      let slice = borders.multiply;

      let length = {
        x: positions['position' + num].x - positionMinus(num).x,
        y: positions['position' + num].y - positionMinus(num).y
      }

      for (let j = slice; j > 0; j--) {

        line += "L";

        line += positionMinus(num).x + length.x / j + " ";
        line += positionMinus(num).y + length.y / j + " ";

        points.push({
          x: positionMinus(num).x + length.x / j,
          y: positionMinus(num).y + length.y / j
        })

      }

    }

    return {
      line: line,
      points: points
    }

  }



  function getCardinal(positions, num) {

    let r = borders.border;
    let cardinal = " ";
    let points = [];

    let x1, y1, x2, y2;


    if (positions['position' + num].x - positionPlus(num).x == 0) {

      x1 = positions['position' + num].x - positionMinus(num).x > 0 ? positionMinus(num).x + r / 2 : positionMinus(num).x - r / 2;
      y1 = positionMinus(num).y;

      x2 = positions['position' + num].x;
      y2 = positions['position' + num].y - positionMinus(num).y > 0 ? positions['position' + num].y - r / 2 : positions['position' + num].y + r / 2;

    } else {

      x1 = positionMinus(num).x;
      y1 = positions['position' + num].y - positionMinus(num).y > 0 ? positionMinus(num).y + r / 2 : positionMinus(num).y - r / 2;

      x2 = positions['position' + num].x - positionMinus(num).x > 0 ? positions['position' + num].x - r / 2 : positions['position' + num].x + r / 2;
      y2 = positions['position' + num].y;

    }

    cardinal += "C" + x1 + " " + y1 + " " + x2 + " " + y2 + " " + positions['position' + num].x + " " + positions['position' + num].y;

    points.push({
      x: positions['position' + num].x,
      y: positions['position' + num].y
    });

    return {
      cardinal: cardinal,
      points: points
    };
  }




  //---get positions of an object------------------------------------------------------------------------------------------------------------  




  function positionMinus(num) {
    function getMinus(num) {
      let getMinus = (num - 1 + Object.keys(positions).length) % Object.keys(positions).length;

      return getMinus;
    }

    return positions['position' + getMinus(num)];
  }

  function positionPlus(num) {
    function getPlus(num) {
      let getPlus = (num + 1 + Object.keys(positions).length) % Object.keys(positions).length;

      return getPlus;
    }

    return positions['position' + getPlus(num)];
  }




  //-------Scale----------------------------------------------------------------------------------------------------------------------------------------




  let oldW = w;
  let oldH = h;

  w = w * borders.scale;
  h = h * borders.scale;


  positions = getPositions.call(this);


  for (let i = 0; Object.keys(positions).length > i; i++) {
    positions['position' + i].x = positions['position' + i].x - (w - oldW) / 2;
    positions['position' + i].y = positions['position' + i].y - (h - oldH) / 2;
  }


  //----------------------------------




  data = "M" + positions['position' + 0].x + " " + positions['position' + 0].y + getLine(positions, 1).line + getCardinal(positions, 2).cardinal + getLine(positions, 3).line + getCardinal(positions, 4).cardinal + getLine(positions, 5).line + getCardinal(positions, 6).cardinal + getLine(positions, 7).line + getCardinal(positions, 0).cardinal;

  pushPoints(getCardinal, 0);
  pushPoints(getLine, 1);
  pushPoints(getCardinal, 2);
  pushPoints(getLine, 3);
  pushPoints(getCardinal, 4);
  pushPoints(getLine, 5);
  pushPoints(getCardinal, 6);
  pushPoints(getLine, 7);

  getTweenPoints.call(this)


  function pushPoints(curve, num) {
    for (let i = 0; i < curve(positions, num).points.length; i++) {
      points.push(curve(positions, num).points[i]);
    }
  }

  function getTweenPoints() {
    let radius = this.borders.radius;

    w = w - radius * 2;
    h = h - radius * 2;

    positions = getPositions.call(this);

    for (let i = 0; Object.keys(positions).length > i; i++) {
      positions['position' + i].x = positions['position' + i].x + radius;
      positions['position' + i].y = positions['position' + i].y + radius;
    }

    pushPointsTween(getCardinal, 0);
    pushPointsTween(getLine, 1);
    pushPointsTween(getCardinal, 2);
    pushPointsTween(getLine, 3);
    pushPointsTween(getCardinal, 4);
    pushPointsTween(getLine, 5);
    pushPointsTween(getCardinal, 6);
    pushPointsTween(getLine, 7);


    function pushPointsTween(curve, num) {
      for (let i = 0; i < curve(positions, num).points.length; i++) {
        pointsTween.push(curve(positions, num).points[i]);
      }
    }

  }

  return {
    data: data,
    points: points,
    pointsTween: pointsTween
  }

};

createBorderPath.prototype.getPath = function() {

  let dataPoints = this.getDataPoints(this);

  this.data = dataPoints.data;
  this.points = dataPoints.points;
  this.pointsTween = dataPoints.pointsTween;


  this.path.setAttribute("d", dataPoints.data);
  this.path.setAttributeNS(null, 'fill', this.borders.color);




  //---Stroke--------------------------------------------------------------------



  if (this.borders.stroke === true) {
    this.path.setAttributeNS(null, 'stroke', this.borders.strokeColor);
    this.path.setAttributeNS(null, 'stroke-width', this.borders.strokeWidth + this.borders.strokeWidthUnit);
  }

};

createBorderPath.prototype.updateSize = function() {

  this.resize = true;

  if (menuExpanded == false) {

    this.w = this.borders.elem.parentElement.clientWidth;
    this.h = this.borders.elem.parentElement.clientHeight;

    this.getPath.call(this);

  } else {

    this.w = this.borders.elem.parentElement.parentElement.clientWidth;
    this.h = this.borders.elem.parentElement.parentElement.clientHeight;

    this.getPath.call(this);

    if (this.borders.familyElem.id == biggerElem.id) {

      this.createWavyAnimation(this)
    }
  }
  setTimeout(() => {
    this.resize = false;
  }, 1);
};

createBorderPath.prototype.createWavyAnimation = function() {

  let animating = false;
  if (this.resize == false) {
    this.expanding = this.expanding == false ? this.expanding = true : this.expanding = false;
    this.stop = stop == true ? stop = false : stop = false;
  }


  let tl = gsap.timeline({
    onUpdate: update,
    onUpdateParams: [this]
  });

  tl.to(this.path, {
    duration: this.borders.transitionValue.duration + 0.1,
    x: 0,
    y: 0
  });



  if (this.expanding == true) {
    setTimeout(() => {
      for (let i = 0; i < this.points.length; i++) {

        let duration = random(this.borders['speed'][0], this.borders['speed'][1]);

        let tween = gsap.to(this.points[i], {
          duration: duration,
          x: this.pointsTween[i].x,
          y: this.pointsTween[i].y,
          repeat: -1,
          yoyo: true,
          ease: Sine.easeInOut
        });

        tl.add(tween, -random(duration));

      }
      animating = true;


    }, this.borders.transitionValue.duration * 1000 + 100);

  } else {
    setTimeout(() => {
      this.stop = true;


      animating = false;
    }, this.borders.transitionValue.duration * 1000)
  }

  function update(self) {

    if (animating == true && self.expanding == true) {

      self.path.setAttribute("d", tweenCardinal(self.points, true, 0.3))


    } else {

      self.path.setAttribute("d", self.data),

        self.w = parseFloat(window.getComputedStyle(self.path.parentElement.parentElement).width),
        self.h = parseFloat(window.getComputedStyle(self.path.parentElement.parentElement).height),

        self.getPath(self)

    }
    if (self.stop) {

      tl.pause()
    }
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
};

createBorderPath.prototype.getAllElems = function() {
  let allElems = [];

  for (let i = 0; i < this.familyParent.childNodes.length; i++) {
    if (this.familyParent.childNodes[i].nodeType == 1) {
      allElems.push(this.familyParent.childNodes[i]);
    }
  }

  return allElems;
}



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




let workBorder = new border('work');
let skillBorder = new border('skill');
// let paintBorder = new border('paint');
// let infoBorder = new border('info');

let runWorkBorder = new createBorderPath(workBorder);
let runSkillBorder = new createBorderPath(skillBorder);


// let runPaintBorder = new createBorderPath(paintBorder);
// let runInfoBorder = new createBorderPath(infoBorder);