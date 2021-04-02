import _gsap from 'gsap';
import TV from './transitionValue.js'

const gsap = _gsap;

export function homeGsapSet(menuExtended,viewChanged){

  if(viewChanged){
    if(innerWidth > 800){
      if(menuExtended){
        gsap.set(master   , { maxWidth : 100                      + '%'});
        gsap.set(demo     , { width: (100 - TV.unSymetryDemoMenu) + '%'});
        gsap.set(demoVideo, { width: TV.unSymetryDemoVideoWidth   + '%'  , height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16 });
      }else{
        gsap.set(master   , { maxWidth : TV.masterMaxWidth    + 'px'});
        gsap.set(demo     , { width: TV.symetryDemoMenu       + '%'});
        gsap.set(demoVideo, { width: TV.symetryDemoVideoWidth + '%', height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16 })
      }
    }else{
      if(menuExtended){
        gsap.set(demo     ,{ width: 100 + '%' })
        gsap.set(demoVideo,{ width: TV.unSymetryDemoVideoWidth800 + '%' })
      }else{
        gsap.set(demo     ,{ width: 100 + '%'})
        gsap.set(demoVideo,{ width: TV.symetryDemoVideoWidth800 + '%' })
      }
    }
  }

  gsap.set(demoVideo, { height : demoVideo.clientWidth * (9/16)});
}

function utilityMenuIf(menuExtended){
  return new Promise ((resolve,reject)=>{
    homeGsapTransition(menuExtended);
    resolve();
  })
}

export function getDemoVideoHeight(menuExpanded){
  let demoVideoHeight; 

  if(window.innerWidth > 800){  
    if(menuExpanded){
      demoVideoHeight = ((window.innerWidth * (100 - TV.unSymetryDemoMenu) / 100) * TV.unSymetryDemoVideoWidth/100)  * (9/16);
    }else{
      // demoVideoHeight = demoVideo.clientWidth * (9/16);
    }
    
  }else{
    if(menuExpanded){
      // if(window.innerWidth > TV.masterMinWidth){
      //   demoVideoHeight = (window.innerWidth * TV.unSymetryDemoVideoWidth800 /100)  * (9/16);
      // }else{
      //   demoVideoHeight = (TV.masterMinWidth * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      // }
    }else{
      // if(window.innerWidth > ISU.transitionValue['masterMinWidth']){
      //   demoVideoHeight = (window.innerWidth * ISU.transitionValue['symetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      // }else{
      //   demoVideoHeight = (ISU.transitionValue['masterMinWidth'] * ISU.transitionValue['symetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
      // }
    }
  }
    return demoVideoHeight;
}

export function transformToUnSymetryEachMenu(demoVideoHeight, elem, order){
 
  const LI = elem.parentElement.parentElement;
  const svgFramePackage = elem.parentElement;
  let allMenusInOrder = [[order, svgFramePackage]];
  let j = 0;

  for (let i = 0; i < LI.childNodes.length; i++) {
    j = j + 1;
    if (LI.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (LI.childNodes[i].nodeType == 1) {
      if(j !== order){
        if(order %2 == j%2){
          allMenusInOrder.splice(1,0, [j, LI.childNodes[i]]);
         

        }else if(Math.ceil(order*0.5) == Math.ceil(j*0.5)){
          allMenusInOrder.splice(2,0, [j, LI.childNodes[i]]);
        
        }else{
          allMenusInOrder.splice(3,0, [j, LI.childNodes[i]]);
        }
      }
    }
  }
  
  
  allMenusInOrder.forEach((e)=>{
    e[1].classList.add('menutransition');
    if( e[1] === svgFramePackage ){
      e[1].firstElementChild.classList.add("menutransition");
    }
  })

  
  this.getExtendMenuSize(demoVideoHeight);


  let getValuesInOrder = 
    [{ width: TV.unSymetryEachMenu + '%', height: TV.unSymetryEachMenu + '%'}
    ,{ width: TV.unSymetryEachMenu + '%', height: (100 - TV.unSymetryEachMenu) + '%'}
    ,{ width: (100 - TV.unSymetryEachMenu) + '%', height: TV.unSymetryEachMenu + '%'}
    ,{ width: (100 - TV.unSymetryEachMenu) + '%', height: (100 - TV.unSymetryEachMenu) + '%'}];

  let reOrder=getValuesInOrder.concat();

  for(let i=0; i<getValuesInOrder.length; i++){
    let getOrder = allMenusInOrder[i][0]-1
    reOrder.splice(getOrder,1,getValuesInOrder[i]);
  }

  setTimeout(() => {
    allMenusInOrder.forEach((e)=>{
      e[1].classList.remove("menutransition")
      if (e[1] == elem) {
        e[1].firstElementChild.classList.remove("menutransition");
      }
    })
    elem.style.width = '100%';
    elem.style.height = '100%';
  }, TV.menuDuration * 1000 );

  var result = 
    { LI:[{ width: reOrder[0]['width'], height: reOrder[0]['height'] }, 
          { width: reOrder[1]['width'], height: reOrder[1]['height'] }, 
          { width: reOrder[2]['width'], height: reOrder[2]['height'] }, 
          { width: reOrder[3]['width'], height: reOrder[3]['height'] }], 
      svgFramePackage:{width: this.extendMenuSizeWidth, height: this.extendMenuSizeHeight}}
  

  return result
}


transformToUnSymetryEachMenu.prototype.getExtendMenuSize = function(demoVideoHeight) {
  this.getPadding();


  if(window.innerWidth > 800){
    this.extendMenuSizeWidth = ((document.body.clientWidth * ( TV.unSymetryDemoMenu / 100) - this.menuPaddingWidth) * ( TV.unSymetryEachMenu / 100)) - this.liPaddingWidth;
    this.extendMenuSizeHeight = getHeight.call(this, window.innerHeight > TV.masterMinHeight ? document.body.clientHeight : TV.masterMinHeight)


    function getHeight(totalHeight){
      return ((totalHeight - this.menuPaddingHeight) * ( TV.unSymetryEachMenu / 100))- this.liPaddingHeight;
    }

  }else{
    this.extendMenuSizeWidth = getWidth.call(this, window.innerWidth > TV.masterMinWidth ? document.body.clientWidth : TV.masterMinWidth );
    this.extendMenuSizeHeight = getHeight.call(this, window.innerHeight > TV.masterMinHeight ? document.body.clientHeight : TV.masterMinHeight)
   

    function getWidth(totalWidth){
      return (totalWidth - this.menuPaddingWidth ) * ( TV.unSymetryEachMenu / 100) - this.liPaddingWidth ;
    }
    function getHeight(totalHeight){
      return (totalHeight - logo.clientHeight - demoVideoHeight - this.menuPaddingHeight) * (TV.unSymetryEachMenu / 100) - this.liPaddingHeight ;
    }
  }

}

transformToUnSymetryEachMenu.prototype.getPadding = function(){
  this.menuPaddingTop = parseFloat(window.getComputedStyle(menu).paddingTop);
  this.menuPaddingLeft = parseFloat(window.getComputedStyle(menu).paddingLeft);
  this.menuPaddingRight = parseFloat(window.getComputedStyle(menu).paddingRight);
  this.menuPaddingBot = parseFloat(window.getComputedStyle(menu).paddingBottom);
  this.menuPaddingWidth = this.menuPaddingLeft + this.menuPaddingRight;
  this.menuPaddingHeight = this.menuPaddingTop + this.menuPaddingBot;

  this.liPaddingTop = parseFloat(window.getComputedStyle(this.elem).paddingTop);
  this.liPaddingLeft = parseFloat(window.getComputedStyle(this.elem).paddingLeft);
  this.liPaddingRight = parseFloat(window.getComputedStyle(this.elem).paddingRight);
  this.liPaddingBot = parseFloat(window.getComputedStyle(this.elem).paddingBottom);
  this.liPaddingWidth = this.liPaddingLeft + this.liPaddingRight;
  this.liPaddingHeight = this.liPaddingTop + this.liPaddingBot;

 
}


export function homeGsapTransition(menuExtended){
  
  if(innerWidth > 800){
    if(menuExtended){
      homeGsapTransitionToUnSymetry();
    }else{
      homeGsapTransitionToSymetry();
    }
  }
  else{
    if(menuExtended){
      homeGsapTransitionToUnSymetry800();
    }else{
      homeGsapTransitionToSymetry800();
    }
  }

}

function homeGsapTransitionToUnSymetry(){
  gsap.fromTo(
    master,{
      maxWidth: TV.masterMaxWidth,
      duration: 1
    },{
      maxWidth: 100 + "%"
    }
  )
  gsap.fromTo(
      demo,{
        width: TV.symetryDemoMenu + '%',
        duration: TV.menuDuration
      },{
        width: (100 - TV.unSymetryDemoMenu) + '%'
      }
  )
  gsap.fromTo(
      demoVideo,{
        width: TV.symetryDemoVideoWidth + '%',
        height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16,
        duration: TV.menuDuration
      },{
        width: TV.unSymetryDemoVideoWidth + '%',
        height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16
      }
    )
}

function homeGsapTransitionToSymetry(){
  gsap.fromTo(
    master,{
      maxWidth: 100 + "%",
      duration: 1
    },{
      maxWidth: TV.masterMaxWidth +'px'
    }
  )
  gsap.fromTo(
      demo,{
        width: (100 - TV.unSymetryDemoMenu) + '%',
        duration: TV.menuDuration
      },{
        width: TV.symetryDemoMenu + '%'
      }
  )
  // Unlike the homeGsapTransitionToUnSymetry( demoVideo have to translate with regualr maxWidth ),
  //   this homeGsapTransitionToSymetry have maxWidth, which translate to two way to get height for demovideo
  //   so I gave a condition for it.
  if(innerWidth < TV.masterMaxWidth){
      gsap.fromTo(
          demoVideo,{
            width: TV.unSymetryDemoVideoWidth + '%',
            height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16,
            duration: TV.menuDuration
          },{
            width: TV.symetryDemoVideoWidth + '%',
            height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16,
          }
        )
  }else{
      gsap.fromTo(
        demoVideo,{
          width: TV.unSymetryDemoVideoWidth + '%',
          height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16,
          duration: TV.menuDuration
        },{
          width: TV.symetryDemoVideoWidth + '%',
          height: TV.masterMaxWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16
        }
      )
    }
}

function homeGsapTransitionToUnSymetry800(){
  gsap.fromTo(
    demoVideo,{
      width: TV.symetryDemoVideoWidth800 + '%',
      height: innerWidth * TV.symetryDemoVideoWidth800/100 * 9/16
    },{
      width: TV.unSymetryDemoVideoWidth800 + '%',
      height: innerWidth * TV.unSymetryDemoVideoWidth800/100 * 9/16
    }
  )
}
function homeGsapTransitionToSymetry800(){
  gsap.fromTo(
    demoVideo,{
      width: TV.unSymetryDemoVideoWidth800 + '%',
      height: innerWidth * TV.unSymetryDemoVideoWidth800/100 * 9/16
    },{
      width: TV.symetryDemoVideoWidth800 + '%',
      height: innerWidth * TV.symetryDemoVideoWidth800/100 * 9/16
    }
  )
}
