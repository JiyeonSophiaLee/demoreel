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
  let allMenusInOrder = [svgFramePackage];
  let j = 0;
  let size = getExtendMenuSize(demoVideoHeight, elem);

  for (let i = 0; i < LI.childNodes.length; i++) {
    j = j + 1;
    if (LI.childNodes[i].nodeType != 1) {
      j = j - 1;
    }
    if (LI.childNodes[i].nodeType == 1) {
      if(j !== order){
        if(order %2 == j%2){
          allMenusInOrder.splice(1,0, LI.childNodes[i]);
         

        }else if(Math.ceil(order*0.5) == Math.ceil(j*0.5)){
          allMenusInOrder.splice(2,0, LI.childNodes[i]);
        
        }else{
          allMenusInOrder.splice(3,0, LI.childNodes[i]);
        }
      }
    }
  }
  
  
  allMenusInOrder.forEach((e)=>{
    e.classList.add('menutransition');
    if( e === svgFramePackage ){
      e.firstElementChild.classList.add("menutransition");
    }
  })

  
  
  console.log('allMenusInOrder: ',allMenusInOrder)

  let getValuesInOrder = 
    [{ elemId: allMenusInOrder[0].id, width: TV.unSymetryEachMenu + '%', height: TV.unSymetryEachMenu + '%'}
    ,{ elemId: allMenusInOrder[1].id, width: TV.unSymetryEachMenu + '%', height: (100 - TV.unSymetryEachMenu) + '%'}
    ,{ elemId: allMenusInOrder[2].id, width: (100 - TV.unSymetryEachMenu) + '%', height: TV.unSymetryEachMenu + '%'}
    ,{ elemId: allMenusInOrder[3].id, width: (100 - TV.unSymetryEachMenu) + '%', height: (100 - TV.unSymetryEachMenu) + '%'}];

  // let reOrder=getValuesInOrder.concat();

  // for(let i=0; i<getValuesInOrder.length; i++){
  //   let getOrder = allMenusInOrder[i][0]-1
  //   reOrder.splice(getOrder,1,getValuesInOrder[i]);
  // }
  console.log('getValuesInOrder= ', getValuesInOrder)

  setTimeout(() => {
    allMenusInOrder.forEach((e)=>{
      e.classList.remove("menutransition")
      if (e == svgFramePackage) {
        e.firstElementChild.classList.remove("menutransition");
      }
    })
    elem.style.width = '100%';
    elem.style.height = '100%';
  }, TV.menuDuration * 1000 );

  var result = 
    { LI: getValuesInOrder, 
      svgFramePackage:{width: size["extendMenuSizeWidth"], height: size["extendMenuSizeHeight"]}}
  

  return result
}

function getExtendMenuSize (demoVideoHeight, elem) {
  console.log('hello this is working')
  let extendMenuSizeWidth, extendMenuSizeHeight;
  let padding = getPadding(elem); 
  


  if(window.innerWidth > 800){
    extendMenuSizeWidth = ((document.body.clientWidth * ( TV.unSymetryDemoMenu / 100) - padding["menuPaddingWidth"]) * ( TV.unSymetryEachMenu / 100)) - padding["liPaddingWidth"];
    extendMenuSizeHeight = getHeight.call(this, window.innerHeight > TV.masterMinHeight ? document.body.clientHeight : TV.masterMinHeight)


    function getHeight(totalHeight){
      return ((totalHeight - padding["menuPaddingHeight"]) * ( TV.unSymetryEachMenu / 100)) - padding["liPaddingHeight"];
    }

  }else{
    extendMenuSizeWidth = getWidth.call(this, window.innerWidth > TV.masterMinWidth ? document.body.clientWidth : TV.masterMinWidth );
    extendMenuSizeHeight = getHeight.call(this, window.innerHeight > TV.masterMinHeight ? document.body.clientHeight : TV.masterMinHeight)
   

    function getWidth(totalWidth){
      return (totalWidth - padding["menuPaddingWidth"] ) * ( TV.unSymetryEachMenu / 100) - padding["liPaddingWidth"] ;
    }
    function getHeight(totalHeight){
      return (totalHeight - logo.clientHeight - demoVideoHeight - padding["menuPaddingHeight"]) * (TV.unSymetryEachMenu / 100) - padding["liPaddingHeight"] ;
    }
  }

  return {extendMenuSizeWidth, extendMenuSizeHeight}

}

function getPadding (elem){
  let menuPaddingTop = parseFloat(window.getComputedStyle(menu).paddingTop);
  let menuPaddingLeft = parseFloat(window.getComputedStyle(menu).paddingLeft);
  let menuPaddingRight = parseFloat(window.getComputedStyle(menu).paddingRight);
  let menuPaddingBot = parseFloat(window.getComputedStyle(menu).paddingBottom);
  let menuPaddingWidth = menuPaddingLeft + menuPaddingRight;
  let menuPaddingHeight = menuPaddingTop + menuPaddingBot;

  let liPaddingTop = parseFloat(window.getComputedStyle(elem).paddingTop);
  let liPaddingLeft = parseFloat(window.getComputedStyle(elem).paddingLeft);
  let liPaddingRight = parseFloat(window.getComputedStyle(elem).paddingRight);
  let liPaddingBot = parseFloat(window.getComputedStyle(elem).paddingBottom);
  let liPaddingWidth = liPaddingLeft + liPaddingRight;
  let liPaddingHeight = liPaddingTop + liPaddingBot;

  return {menuPaddingWidth, menuPaddingHeight, liPaddingWidth, liPaddingHeight}
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
