// let work = document.getElementById('work')
// let skill = document.getElementById('skill')
// let paint = document.getElementById('paint')
// let info = document.getElementById('info')

let demoVideo = document.getElementById('demoVideo');

let menuExpanded = false;
let biggerElem = null
let biggeredElem = null



// demoVideo.style.height = parseFloat(window.getComputedStyle(demoVideo).width) * (9/16) +'px';


function getTransitionValue() {
  this.min = 50;
  this.max = 65;
  this.duration = 1;
  this.width = 65;
};

let transitionValue = new getTransitionValue();




let resizeFinish;

// let menuSize = { width : innerWidth * transitionValue.max / 100 , height : innerHeight};
// let demoSize = { width : innerWidth - menuSize.width , height : innerHeight};
// let biggerElemSize = { width : menuSize.width * transitionValue.max / 100 , height : menuSize.height * transitionValue.max / 100};
// let smallerElemSize = { width : menuSize.width - biggerElemSize.width , height : menuSize.height - biggerElemSize.height};

// function setSize(){
//   menuSize = { width : innerWidth * transitionValue.max / 100 , height : innerHeight};
//   demoSize = { width : innerWidth - menuSize.width , height : innerHeight};
//   biggerElemSize = { width : menuSize.width * transitionValue.max / 100 , height : menuSize.height * transitionValue.max / 100};
//   smallerElemSize = { width : menuSize.width - biggerElemSize.width , height : menuSize.height - biggerElemSize.height};
// }
window.addEventListener('resize',()=>{

  // demoVideo.style.height = parseFloat(window.getComputedStyle(demoVideo).width) * (9/16) +'px';
  
  // clearTimeout(resizeFinish);
  // resizeFinish = setTimeout(() => setSize(), 150);
})





function menuController(id){
  this.elem = document.getElementById(id);
  this.allElems = this.getAllElems(this)
  this.restElems = this.getRestElems(this);
  // transitionValue = new transitionValue()



  // runWorkBorder.createRectBorder();

  this.expandMenuHandler = this.expandMenu.bind(this);

  this.callClickEvent = () =>{

    callbackAddEvent(this,() =>{
      
        this.elem.removeEventListener('click', this.callClickEvent);
        this.restElemsEventListener('remove', 'callClickEvent');

        this.expandMenu(this);
        
     
    })
    
  }

  
  function callbackAddEvent(self,callback){
    callback();
    
    setTimeout(() => {
      self.elem.addEventListener('click', self.callClickEvent);
      ('calling event listener')
      self.restElemsEventListener('add', 'callClickEvent');
      
    }, transitionValue.duration * 1000);
  }



  this.elem.addEventListener('click',this.callClickEvent);
}

menuController.prototype.expandMenu = function(){

  if (menuExpanded == false){
    menuExpanded = true;
    biggerElem = this.elem;
    

    this.allElems.forEach((elem,i)=>{
      if(this.allElems[i]==this.elem){
        eval('run' + elem.id.charAt(0).toUpperCase() + elem.id.slice(1) + 'Border').expandMenuIf(this.allElems)
        eval(elem.id + 'MenuUtilities').expandMenuIf()
      }
    })
    // runWorkBorder.animRectBorder(transitionValue)
    // workMenuUtilities.test(this.restElems)

  }else if(biggerElem != this.elem){
    biggeredElem = biggerElem;
    biggerElem = this.elem;

    this.allElems.forEach((elem,i)=>{
      if(this.allElems[i]==this.elem){
        eval('run' + elem.id.charAt(0).toUpperCase() + elem.id.slice(1) + 'Border').expandMenuElseIf(this.allElems)
        // eval(elem.id + 'MenuUtilities').expandMenuElseIf()
      }
    })

  }else{

    this.allElems.forEach((elem,i)=>{
      if(this.allElems[i]==this.elem){
        eval('run' + elem.id.charAt(0).toUpperCase() + elem.id.slice(1) + 'Border').expandMenuElse(this.allElems)
        // eval(elem.id + 'MenuUtilities').expandMenuElse()
      }
    })

    menuExpanded =false;
    biggerElem = null;
    biggeredElem = null;


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

function menuUtilities(id){
  
  this.elem = document.getElementById(id);
  // transitionValue = new transitionValue;
  // this.restElems = getRestElems(this.elem);

  // // handeler ----------------------------------------------------------------

  // this.resizeHandler = this.resize.bind(this);
  // this.expandMenuHandler = this.expandMenu.bind(this);




  // this.callClickEvent = () =>{
    
  //   this.elem.removeEventListener('click', this.callClickEvent);
  //   this.restElemsEventListener('remove', 'callClickEvent')



  //   this.expandMenu(this)



  //   setTimeout(() => {
  //     this.elem.addEventListener('click', this.callClickEvent);
  //     this.restElemsEventListener('add', 'callClickEvent')
  //   }, transitionValue.duration *1000 +250);
  // }


  // window.addEventListener('resize',this.resizeHandler);
  // this.elem.addEventListener('click',this.callClickEvent);

}


// menuUtilities.prototype.restElemsEventListener = function(listener, handler) {
//   for (let i = 0; i < this.restElems.length; i++) {
//     let controllerId = eval(this.restElems[i].id+'Controller')

//     if (listener == 'add') {
//       this.restElems[i].addEventListener('click', controllerId[handler]);
//     } else {
//       this.restElems[i].removeEventListener('click', controllerId[handler]);
//     }
//   }
// }

// menuUtilities.prototype.test = function(restElems){
//   console.log(restElems)
// }

menuUtilities.prototype.expandMenuIf = function(){
  
    // demoVideo.classList.add('menutransition');
    
    // demoVideo.style.height =  demoSize.height * (parseFloat(window.getComputedStyle(demoVideo).maxWidth) / 100)  * (9/16)  +'px';

  //   setTimeout(() => {
  //     demoVideo.classList.remove('menutransition');
  //   }, transitionValue.duration * 1000);

  // }else if(biggerElemController != this.elem){
  
  //   biggeredElemController = biggerElemController;
  //   biggerElemController = this.elem;
    
    
  
  // }else{
  
  //   menuExpandedController = false;
  //   biggerElemController = 'none';
  //   biggeredElemController = 'none';
    


  //   demoVideo.classList.add('menutransition');
    
  //   demoVideo.style.height =  (( demoVideo.parentElement.clientWidth / (100 - transitionValue.max ) * 100 ) * ( transitionValue.min / 100 )) * (parseFloat(window.getComputedStyle(demoVideo).maxWidth) / 100)  * (9/16)  +'px';

  //   setTimeout(() => {
  //     demoVideo.classList.remove('menutransition');
  //   }, transitionValue.duration * 1000);

  // }
  
}


//---- general Function ------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

// function getAllElems(elem) {
//   let allElems = [];

//   for (let i = 0; i < elem.parentElement.childNodes.length; i++) {
//     if (elem.parentElement.childNodes[i].nodeType == 1) {
//       allElems.push(elem.parentElement.childNodes[i]);
//     }
//   }

//   return allElems;
// }

// function getRestElems (elem) {
//   let restElems = [];

//   for (let i = 0; i < elem.parentElement.childNodes.length; i++) {
//     if (elem.parentElement.childNodes[i].nodeType == 1 && elem.parentElement.childNodes[i] != elem) {
//       restElems.push(elem.parentElement.childNodes[i]);
//     }
//   }

//   return restElems;
// }



// demoVideo.addEventListener('click',()=>{console.log('this is working');demoVideo.style.height = parseFloat(window.getComputedStyle(demoVideo).width) * (9/16) +'px';})

let workMenuUtilities = new menuUtilities('work');
let skillMenuUtilities = new menuUtilities('skill');
let paintMenuUtilities = new menuUtilities('paint');
let infoMenuUtilities = new menuUtilities('info');


let workMenuController = new menuController('work');
let skillMenuController = new menuController('skill');
let paintMenuController = new menuController('paint');
let infoMenuController = new menuController('info');
