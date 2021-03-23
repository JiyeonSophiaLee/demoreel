import _gsap from 'gsap';
import TV from './transitionValue.js'

const gsap = _gsap;

export function homeGsapSet(menuExtended){

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

    gsap.set(demoVideo, { height : demoVideo.clientWidth * (9/16)});
  }
}
export function utilityMenuIf(menuExtended){
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


function homeGsapTransition(menuExtended){
  
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
