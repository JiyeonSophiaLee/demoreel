const menu = document.getElementById('menu');
const work = document.getElementById('work');
const skill = document.getElementById('skill');
const body = document.getElementById('body');




function transitionValue() {
  // this.elem = document.getElementById(menuId)
  // this.parent = this.elem.parentElement;
  this.min = 50;
  this.max = 65;
  this.duration = 1;
  this.flexBasis = 65;

  

};






// transitionValue.prototype.getRestElems = function(){
//   let restElems = [];

//   for(let i=0; i<this.parent.childNodes.length; i++){
//     if(this.parent.childNodes[i].nodeType == 1 && this.parent.childNodes[i] != this.elem){
//       restElems.push(this.parent.childNodes[i]);
//     }
//   }

//   return restElems;
// }



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


// let workTransitionValue = new transitionValue('work');
// let skillTransitionValue = new transitionValue('skill');
// let paintTransitionValue = new transitionValue('paint');
// let infoTransitionValue = new transitionValue('info');


// work.addEventListener('click',callWorkTransitionValue);
// work.addEventListener('click',callSubMenuFlexPosition);
// work.addEventListener('click',()=>{console.log('workTransitionValue',workTransitionValue.standard)})