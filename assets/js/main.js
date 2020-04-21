const menu = document.getElementById('menu');
const work = document.getElementById('work');
const skill = document.getElementById('skill');
const body = document.getElementById('body');

let biggerElem;


function transitionValue(menuId) {
  this.elem = document.getElementById(menuId)
  this.parent = this.elem.parentElement;
  this.min = 50;
  this.max = 65;
  this.duration = 1;
  this.flexBasis = 65;

  this.expandMenuHandler = this.expandMenu.bind(this);

  this.elem.addEventListener('click', this.expandMenuHandler);

};




transitionValue.prototype.expandMenu = function() {

  let padding = parseFloat(window.getComputedStyle(this.elem).paddingTop) * 2;

  // let restElems = this.getRestElems(this);
  let allElems = this.getAllElems(this);
  let widthBigger = this.getLeftRight(this).widthBigger;
  let widthSmaller = this.getLeftRight(this).widthSmaller;
  let heightBigger = this.getUpDown(this).heightBigger;
  let heightSmaller = this.getUpDown(this).heightSmaller;

  this.elem.removeEventListener('click', this.expandMenuHandler)

  this.elem.firstElementChild.classList.add('menutransition');


  if (this.parent.clientWidth == this.parent.parentElement.clientWidth / 2) {

    this.parent.style.width = this.max + '%';

    for (let i = 0; i < allElems.length; i++) {
      allElems[i].classList.add("menutransition")
    }


    for (let i = 0; i < widthBigger.length; i++) {
      widthBigger[i].style.flex = this.flexBasis + '%'
    }
    for (let i = 0; i < widthSmaller.length; i++) {
      widthSmaller[i].style.flex = (100 - this.flexBasis) + '%'
    }
    for (let i = 0; i < heightBigger.length; i++) {
      heightBigger[i].style.height = this.flexBasis + '%'
    }
    for (let i = 0; i < heightSmaller.length; i++) {
      heightSmaller[i].style.height = (100 - this.flexBasis) + '%'
    }

    this.elem.firstElementChild.style.width = this.parent.parentElement.clientWidth * ((this.max / 100) * (this.flexBasis / 100)) - padding + "px";
    this.elem.firstElementChild.style.height = this.parent.parentElement.clientHeight * (this.flexBasis / 100) - padding + "px";

    biggerElem = this.elem;

  } else if (biggerElem != this.elem) {

    for (let i = 0; i < allElems.length; i++) {
      allElems[i].classList.add("menutransition")
    }

    for (let i = 0; i < widthBigger.length; i++) {
      widthBigger[i].style.flex = this.flexBasis + '%';
    }
    for (let i = 0; i < widthSmaller.length; i++) {
      widthSmaller[i].style.flex = (100 - this.flexBasis) + '%';
    }
    for (let i = 0; i < heightBigger.length; i++) {
      heightBigger[i].style.height = this.flexBasis + '%';
    }
    for (let i = 0; i < heightSmaller.length; i++) {
      heightSmaller[i].style.height = (100 - this.flexBasis) + '%';
    }

    for (let i = 0; i < allElems.length; i++) {
      allElems[i].firstElementChild.classList.add("menutransition")
      allElems[i].firstElementChild.style.width = '';
      allElems[i].firstElementChild.style.height = '';
    }

    this.elem.firstElementChild.style.width = this.parent.parentElement.clientWidth * ((this.max / 100) * (this.flexBasis / 100)) - padding + "px";
    this.elem.firstElementChild.style.height = this.parent.parentElement.clientHeight * (this.flexBasis / 100) - padding + "px";

    biggerElem = this.elem;


  } else {
    console.log('else is working')

    this.parent.style.width = this.min + '%';

    for (let i = 0; i < allElems.length; i++) {
      allElems[i].classList.add("menutransition")
      allElems[i].style.flex = '';
      allElems[i].style.height = '';
    }
    this.elem.firstElementChild.style.width = '';
    this.elem.firstElementChild.style.height = '';


  }


  setTimeout(() => {
    this.elem.firstElementChild.classList.remove('menutransition');

    for (let i = 0; i < allElems.length; i++) {
      allElems[i].classList.remove("menutransition")
    }

    this.elem.addEventListener('click', this.expandMenuHandler)
  }, this.duration * 1000);

};

transitionValue.prototype.getLeftRight = function() {

  let firstNum = this.getFirstNum(this);
  let widthBigger = [];
  let widthSmaller = [];




  let j = 0;
  if (firstNum % 2 != 0) {
    j = j + 1
  }
  for (let i = 0; i < this.parent.childNodes.length; i++) {
    j = j + 1;
    if (this.parent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }

    if (this.parent.childNodes[i].nodeType == 1) {
      if (j % 2 == 0) {
        widthBigger.push(this.parent.childNodes[i]);
      } else {
        widthSmaller.push(this.parent.childNodes[i]);
      }
    }
  }

  return {
    widthBigger: widthBigger,
    widthSmaller: widthSmaller
  }
}

transitionValue.prototype.getUpDown = function() {


  let firstNum = this.getFirstNum(this);
  let up = [];
  let down = [];

  let heightBigger = [];
  let heightSmaller = [];

  let j = 0;
  for (let i = 0; i < this.parent.childNodes.length; i++) {

    j = j + 1;
    if (this.parent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (this.parent.childNodes[i].nodeType == 1) {

      if (j < 3) {
        up.push(this.parent.childNodes[i]);

      } else {
        down.push(this.parent.childNodes[i]);
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

transitionValue.prototype.getFirstNum = function() {

  let j = 0;
  for (let i = 0; i < this.parent.childNodes.length; i++) {
    j = j + 1;
    if (this.parent.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (this.parent.childNodes[i] === this.elem) {

      return j;
    }
  }
}

// transitionValue.prototype.getRestElems = function(){
//   let restElems = [];

//   for(let i=0; i<this.parent.childNodes.length; i++){
//     if(this.parent.childNodes[i].nodeType == 1 && this.parent.childNodes[i] != this.elem){
//       restElems.push(this.parent.childNodes[i]);
//     }
//   }

//   return restElems;
// }

transitionValue.prototype.getAllElems = function() {
  let allElems = [];

  for (let i = 0; i < this.parent.childNodes.length; i++) {
    if (this.parent.childNodes[i].nodeType == 1) {
      allElems.push(this.parent.childNodes[i]);
    }
  }

  return allElems;
}

// function subMenuFlexPosition(subMenu) {

//   if (workTransitionValue.standard == false) {
//     subMenu.style.justifyContent = 'center';
//     subMenu.firstElementChild.style.alignSelf = 'center';
//   } else {
//     if (subMenu.parentElement.firstElementChild) {
//       subMenu.style.justifyContent = 'flex-end';
//       subMenu.firstElementChild.style.alignSelf = 'flex-end';
//     } else if (subMenu.parentElement.firstElementChild.nextElementSibling) {
//       subMenu.style.justifyContent = 'flex-start';
//       subMenu.firstElementChild.style.alignSelf = 'flex-end';
//     } else if (subMenu.parentElement.firstElementChild.nextElementSibling.nextElementSibling) {
//       subMenu.style.justifyContent = 'flex-end';
//       subMenu.firstElementChild.style.alignSelf = 'flex-start';
//     } else {
//       subMenu.style.justifyContent = 'flex-start';
//       subMenu.firstElementChild.style.alignSelf = 'flex-start';
//     }

//   }


// }


let workTransitionValue = new transitionValue('work');
let skillTransitionValue = new transitionValue('skill');
let paintTransitionValue = new transitionValue('paint');
let infoTransitionValue = new transitionValue('info');


// work.addEventListener('click',callWorkTransitionValue);
// work.addEventListener('click',callSubMenuFlexPosition);
// work.addEventListener('click',()=>{console.log('workTransitionValue',workTransitionValue.standard)})