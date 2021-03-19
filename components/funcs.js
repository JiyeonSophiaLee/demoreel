import _gsap from 'gsap';
import TV from '../public/assets/js/transitionValue'

const gsap = _gsap;

export function homeGsapSet(_menuExtended){
  if(innerWidth > 800){
    if(_menuExtended){
      gsap.set("#master"   , { maxWidth : 100 + '%'                     });
      gsap.set("#demo"     , { width: (100 - TV.unSymetryDemoMenu) + '%'});
      gsap.set("#demoVideo", { width: TV.unSymetryDemoVideoWidth + '%', height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16 });
    }else{
      gsap.set("#master"   , { maxWidth : TV.masterMaxWidth + 'px'    });
      gsap.set("#demo"     , { width: TV.symetryDemoMenu + '%'           });
      gsap.set("#demoVideo", { width: TV.symetryDemoVideoWidth + '%', height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16 })
    }
  }else{
    if(_menuExtended){
      gsap.set('#demo'     ,{ width: 100 + '%' })
      gsap.set('#demoVideo',{ width: TV.unSymetryDemoVideoWidth800 + '%' })
    }else{
      gsap.set('#demo'     ,{ width: 100 + '%'})
      gsap.set('#demoVideo',{ width: TV.symetryDemoVideoWidth800 + '%' })
    }
  }
}

export function homeGsapTransition(_menuExtended){
  
  if(innerWidth > 800){
    if(_menuExtended){
      homeGsapTransitionToUnSymetry();
    }else{
      homeGsapTransitionToSymetry();
    }
  }
  else{
    // demoMenuTransformTL800
    //   .fromTo(
    //     '#demoVideo',{
    //       width: TV.symetryDemoVideoWidth800 + '%',
    //       height: innerWidth * TV.symetryDemoVideoWidth800/100 * 9/16
    //     },{
    //       width: TV.unSymetryDemoVideoWidth800 + '%',
    //       height: innerWidth * TV.unSymetryDemoVideoWidth800/100 * 9/16
    //     },0
    //   )

  }

}

function homeGsapTransitionToUnSymetry(){
  gsap.fromTo(
    '#master',{
      maxWidth: TV.masterMaxWidth,
      duration: 1
    },{
      maxWidth: 100 + "%"
    }
  )
  gsap.fromTo(
      '#demo',{
        width: TV.symetryDemoMenu + '%',
        duration: TV.menuDuration
      },{
        width: (100 - TV.unSymetryDemoMenu) + '%'
      }
  )
  gsap.fromTo(
      '#demoVideo',{
        width: TV.symetryDemoVideoWidth + '%',
        height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16,
        duration: TV.menuDuration
      },{
        width: TV.unSymetryDemoVideoWidth + '%',
        height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16
      }
    )
}

export function homeGsapTransitionToSymetry(){
  gsap.fromTo(
    '#master',{
      maxWidth: 100 + "%",
      duration: 1
    },{
      maxWidth: TV.masterMaxWidth +'px'
    }
  )
  gsap.fromTo(
      '#demo',{
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
          '#demoVideo',{
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
        '#demoVideo',{
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