const DEMO__ = document.getElementById('demo');
const DEMO_VIDEO = document.getElementById('demoVideo');
const DEMO_SVG = document.getElementById('demoSVG');
const MENU__ = document.getElementById('menu')
const TOP_MENU = document.getElementById('topMenu')
// const BOTTOM_MENU = document.getElementById('bottomMenu')

let menuExpanded = false;
let biggerElem = null
let biggeredElem = null

function getTransitionValue() {
  this.min = 50;
  this.max = 65;
  this.duration = 1;
  this.menuMax = 65;
  this.menuMin = 50;
};

let transitionValue = new getTransitionValue();

let resizeFinish;

DEMO_VIDEO.style.height = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16) +'px';


window.addEventListener('resize',()=>{
  DEMO_SVG.classList.remove('blurSVG')
  DEMO_VIDEO.style.height = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16) +'px';
  
  clearTimeout(resizeFinish);
  resizeFinish = setTimeout(() => {
    DEMO_SVG.classList.add('blurSVG')
  }, 200);
  
})





function menuController(id){
  this.elem = document.getElementById(id);
  this.allElems = this.getAllElems(this)
  this.restElems = this.getRestElems(this);

  this.expandMenuHandler = this.expandMenu.bind(this);

  this.callClickEvent = () =>{
      
        this.elem.removeEventListener('click', this.callClickEvent);
        this.restElemsEventListener('remove', 'callClickEvent');

        this.expandMenu();
    
  }

  this.elem.addEventListener('click',this.callClickEvent);
}

menuController.prototype.removeEventCB = function(){
  console.log('add')
  this.elem.addEventListener('click', this.callClickEvent)
  this.restElemsEventListener('add', 'callClickEvent')
}

menuController.prototype.expandMenu = function(){
  if (menuExpanded == false){
    menuExpanded = true;
    biggerElem = this.elem;
    


  }else if(biggerElem != this.elem){
    biggeredElem = biggerElem;
    biggerElem = this.elem;


  }else{
    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;
  }
    this.allElems.forEach((elem,i)=>{
      if(this.allElems[i]==this.elem){
        eval('run' + elem.id.charAt(0).toUpperCase() + elem.id.slice(1) + 'Border').expandMenu(this.allElems)
        eval(elem.id + 'MenuUtilities').expandMenu()
      }
    })
  
}

menuController.prototype.getAllElems = function() {
  let allElems = [];
  
  for (let i = 0; i < this.elem.parentElement.childNodes.length; i++) {
    if (this.elem.parentElement.childNodes[i].nodeType == 1) {
      allElems.push(this.elem.parentElement.childNodes[i]);
    }
  }
  
  return allElems;
}

menuController.prototype.getRestElems =function() {
  let restElems = [];
  
  for (let i = 0; i < this.elem.parentElement.childNodes.length; i++) {
    if (this.elem.parentElement.childNodes[i].nodeType == 1 && this.elem.parentElement.childNodes[i] != this.elem) {
      restElems.push(this.elem.parentElement.childNodes[i]);
    }
  }
  
  return restElems;
}

menuController.prototype.restElemsEventListener = function(listener, handler) {
  
  for (let i = 0; i < this.restElems.length; i++) {
    let controllerId = eval(this.restElems[i].id+'MenuController')

    if (listener == 'add') {
      this.restElems[i].addEventListener('click', controllerId[handler]);
    } else {
      this.restElems[i].removeEventListener('click', controllerId[handler]);
    }
  }
}






//--- menu Utiliti controller------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------







function menuUtilities(id){
  
  this.elem = document.getElementById(id);
  

}


menuUtilities.prototype.expandMenu = function(){
  
  if (menuExpanded && biggeredElem == null) {
    
    DEMO_SVG.classList.remove('blurSVG');

    DEMO_VIDEO.classList.add('menutransition');
    DEMO_VIDEO.style.height = (DEMO__.parentElement.clientWidth * ((100-transitionValue.max) / 100) * 0.7) * (9/16) +'px';
  
  setTimeout(() => {
    DEMO_SVG.classList.add('blurSVG');
    DEMO_VIDEO.classList.remove('menutransition');
  }, transitionValue.duration * 1000);

  }else if(biggerElem == this.elem) {
    
  
  }else{
  
    DEMO_SVG.classList.remove('blurSVG');

    DEMO_VIDEO.classList.add('menutransition');
    DEMO_VIDEO.style.height = (DEMO__.parentElement.clientWidth * ((transitionValue.min) / 100) * 0.7) * (9/16) +'px';

  setTimeout(() => {
    DEMO_SVG.classList.add('blurSVG');
    DEMO_VIDEO.classList.remove('menutransition');
  }, transitionValue.duration * 1000);
  }

}


//---- general Function ------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------



// DEMO_VIDEO.addEventListener('click',()=>{console.log('this is working');DEMO_VIDEO.style.height = parseFloat(window.getComputedStyle(DEMO_VIDEO).width) * (9/16) +'px';})

let workMenuUtilities = new menuUtilities('work');
let skillMenuUtilities = new menuUtilities('skill');
let paintMenuUtilities = new menuUtilities('paint');
let infoMenuUtilities = new menuUtilities('info');


let workMenuController = new menuController('work');
let skillMenuController = new menuController('skill');
let paintMenuController = new menuController('paint');
let infoMenuController = new menuController('info');
