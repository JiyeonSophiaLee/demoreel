import SvgFrame from './SvgFrame';

let menuExtended = false;

export default function MainController(id,order){
  this.id = id;
  this.order = order;
  this.elem = eval(id);
  this.svgFrame = this.svgFrame(this.id);


  
  // console.log(menuExtended)

  // this.clickEvent = ()=>{
  //   this.extendMenu();
    
  // }
  // this.elem.addEventListener('click',this.clickEvent,false);
}

// MainController.prototype.svgFrame = (id) => new SvgFrame(id);

MainController.prototype.extendMenu = function(){
  
  if(menuExtended === false){
    menuExtended = true;
    biggerElem = elem;

    demoVideoHeight = getDemoVideoHeight(menuExtended)



    Promise.all([
      utilityMenuIf(menuExtended),
      logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
      svgFrameRef.extendMenuIf()
    ]).then(()=>{
      console.log(' finished')
    })
    
    


  }else if( biggerElem !== elem){
    biggeredElem = biggerElem;
    biggerElem = elem;

  
  
  }else{
    menuExtended = false;
    biggeredElem = null;
    biggerElem = null;

    demoVideoHeight = getDemoVideoHeight(menuExtended)
    console.log('demoVideoHeight: ',demoVideoHeight)

    Promise.all([
      utilityMenuIf(menuExtended),
      logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth  * (100 - TV.symetryDemoMenu) / 100 * TV.logoWidth / 100}),
    ]).then(()=>{
      console.log('Else finished')
    })
  }
}