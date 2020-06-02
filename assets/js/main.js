// let work = document.getElementById('work')
// let skill = document.getElementById('skill')
// let paint = document.getElementById('paint')
// let info = document.getElementById('info')

let demo = document.getElementById('demo')
let demoVideo = document.getElementById('demoVideo');
let demoSVG = document.getElementById('demoSVG');
let demoContainer = document.getElementById('demoContainer')

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

demoVideo.style.height = parseFloat(window.getComputedStyle(demoVideo).width) * (9/16) +'px';


window.addEventListener('resize',()=>{
  demoSVG.classList.remove('blurSVG')
  demoVideo.style.height = parseFloat(window.getComputedStyle(demoVideo).width) * (9/16) +'px';
  
  clearTimeout(resizeFinish);
  resizeFinish = setTimeout(() => {
    demoSVG.classList.add('blurSVG')
  }, 200);
  
})





function menuController(id){
  this.elem = document.getElementById(id);
  this.allElems = this.getAllElems(this)
  this.restElems = this.getRestElems(this);
  // this.path = document.getElementById(this.elem.id+'Border')
  // transitionValue = new transitionValue()


  this.expandMenuHandler = this.expandMenu.bind(this);
  // this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  // this.hoveroverOffHandler = this.hoveroverOff.bind(this);

  this.callClickEvent = () =>{

    // callbackAddEvent(this,() =>{
      
        this.elem.removeEventListener('click', this.callClickEvent);
        this.restElemsEventListener('remove', 'callClickEvent');

        // this.callCB(()=>this.expandMenuCB(()=>this.removeEventCB()))
        // this.expandMenuCB(()=>{this.removeEventCB(this)})
        this.expandMenu();
        
     
    // })
    
  }

  this.elem.addEventListener('click',this.callClickEvent);
  // this.elem.firstElementChild.addEventListener('mouseover', this.hoveroverOnHandler);
  // this.elem.firstElementChild.addEventListener('mouseout', this.hoveroverOffHandler);
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
    

    this.allElems.forEach((elem,i)=>{
      if(this.allElems[i]==this.elem){
        eval('run' + elem.id.charAt(0).toUpperCase() + elem.id.slice(1) + 'Border').expandMenu(this.allElems)
        eval(elem.id + 'MenuUtilities').expandMenu()
      }
    })
    // runWorkBorder.animRectBorder(transitionValue)
    // workMenuUtilities.test(this.restElems)

  }else if(biggerElem != this.elem){
    biggeredElem = biggerElem;
    biggerElem = this.elem;

    this.allElems.forEach((elem,i)=>{
      if(this.allElems[i]==this.elem){
        eval('run' + elem.id.charAt(0).toUpperCase() + elem.id.slice(1) + 'Border').expandMenu(this.allElems)
        
        // eval(elem.id + 'MenuUtilities').expandMenuElseIf()
      }
    })

  }else{
    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;

    this.allElems.forEach((elem,i)=>{
      if(this.allElems[i]==this.elem){
        eval('run' + elem.id.charAt(0).toUpperCase() + elem.id.slice(1) + 'Border').expandMenu(this.allElems)
        
        // eval(elem.id + 'MenuUtilities').expandMenuElse()
      }
    })
  }
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
  
  document.getElementById('demoSVG').classList.remove('blurSVG');

  // demoVideo.classList.add('menutransition');

  if (menuExpanded && biggeredElem == null) {
    // demoVideo.classList.add('menutransition');
    demoVideo.style.height = demo.parentElement.clientWidth * (transitionValue.min * 100) * parseFloat(window.getComputedStyle(demoVideo).width) * (9/16) +'px';
    // demoVideo.style.height =  demoSize.height * (parseFloat(window.getComputedStyle(demoVideo).maxWidth) / 100)  * (9/16)  +'px';

  //   setTimeout(() => {
  //     demoVideo.classList.remove('menutransition');
  //   }, transitionValue.duration * 1000);

  // }else if(biggerElemController != this.elem){
  
  //   biggeredElemController = biggerElemController;
  //   biggerElemController = this.elem;
    
    
  
  // }else{
  


  //   demoVideo.classList.add('menutransition');
    
  //   demoVideo.style.height =  (( demoVideo.parentElement.clientWidth / (100 - transitionValue.max ) * 100 ) * ( transitionValue.min / 100 )) * (parseFloat(window.getComputedStyle(demoVideo).maxWidth) / 100)  * (9/16)  +'px';

  //   setTimeout(() => {
  //     demoVideo.classList.remove('menutransition');
  //   }, transitionValue.duration * 1000);

  }
  setTimeout(() => {
    demoSVG.classList.add('blurSVG');
  }, transitionValue.duration * 1000);
}


//---- general Function ------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------



// demoVideo.addEventListener('click',()=>{console.log('this is working');demoVideo.style.height = parseFloat(window.getComputedStyle(demoVideo).width) * (9/16) +'px';})

let workMenuUtilities = new menuUtilities('work');
let skillMenuUtilities = new menuUtilities('skill');
let paintMenuUtilities = new menuUtilities('paint');
let infoMenuUtilities = new menuUtilities('info');


let workMenuController = new menuController('work');
let skillMenuController = new menuController('skill');
let paintMenuController = new menuController('paint');
let infoMenuController = new menuController('info');
