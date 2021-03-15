import Demo from './Demo'
import Menu from './Menu'
import {createContext, useEffect, useState} from "react"
import gsap from 'gsap';
import TV from '../public/assets/js/transitionValue'


export const ExtendMenuContext = createContext();


// const demoMenuTransformTL = gsap.timeline({paused:true, duration: TV.menuDuration,ease: "power1.inOut"});
// const demoMenuTransformTL800 = gsap.timeline({paused:true, duration: TV.menuDuration,ease: "power1.inOut"});



const HomeLayout = () =>{ 
  const [menuExtended,setMenuExtended] = useState(false);
  const [biggerElem,setBiggerElem] =useState(null);
  const [biggeredElem,setBiggeredElem] =useState(null);
  let _menuExtended = menuExtended;
  let mobileMode, _mobileMode ;
  
  
  useEffect(()=>{
    mobileMode = innerWidth < 800 ? true : false; 
    // homeGsapTransition();
  },[])

  useEffect(()=>{
    let updateResize = () =>{
      _mobileMode = innerWidth < 800 ? true : false; 



      if(mobileMode !== _mobileMode){
        console.log('changed')
        mobileMode = innerWidth < 800 ? true : false;
        homeGsapSet(_menuExtended);
      }
    }
    window.addEventListener('resize',updateResize);
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])


  function extendMenu(elem){
    if(menuExtended === false){
      setMenuExtended(!menuExtended);
      _menuExtended = true;
      setBiggerElem(elem);


      extendMenuIf();

    }else if( biggerElem !== elem){
      setBiggeredElem(biggerElem);
      setBiggerElem(elem);
    
    }else{
      setMenuExtended(!menuExtended);
      _menuExtended = false;
      setBiggeredElem(null);
      setBiggerElem(null);

      extendMenuElse();
    }

    function extendMenuIf(){
      homeGsapTransition(_menuExtended);

    }
    function extendMenuElse(){
      homeGsapTransition(_menuExtended);
    }
  
  }

  return(
    <div id = "master">
      <ExtendMenuContext.Provider value={extendMenu}>
        <Demo/>
        <Menu/>
      </ExtendMenuContext.Provider>
    </div>
  )
} 

export default HomeLayout


function homeGsapSet(_menuExtended){
  if(innerWidth > 800){
    if(_menuExtended){
      gsap.set("#master"   , { maxWidth : 100 + '%'                     });
      gsap.set("#demo"     , { width: (100 - TV.unSymetryDemoMenu) + '%'});
      gsap.set("#demoVideo", { width: TV.unSymetryDemoVideoWidth + '%', height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16 });
    }else{
      gsap.set("#master"   , { maxWidth : TV.masterMaxWidth + 'px'    });
      gsap.set("#demo"     , { width: symetryDemoMenu + '%'           });
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
function homeGsapTransition(_menuExtended){
  
  if(innerWidth > 800){
    if(_menuExtended){
      homeGsapTransitionToUnSymetry();
    }else{
      homeGsapTransitionToSymetry();
    }
    
    //   demoMenuTransformTL
    //     .fromTo(
    //       '#master',{
    //         maxWidth: TV.masterMaxWidth
    //       },{
    //         maxWidth: '100%'
    //       },0
    //     )
    //     .fromTo(
    //       '#demo',{
    //         width: TV.symetryDemoMenu + '%'
    //       },{
    //         width: (100 - TV.unSymetryDemoMenu) + '%'
    //       },0
    //     )
    //         if(innerWidth < TV.masterMaxWidth){
    //           demoMenuTransformTL.add(gsap.fromTo(
    //             '#demoVideo',{
    //               width: TV.symetryDemoVideoWidth + '%',
    //               height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16
    //             },{
    //               width: TV.unSymetryDemoVideoWidth + '%',
    //               height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16
    //             }
    //           ),0)
    //         }else{
    //           demoMenuTransformTL.add(gsap.fromTo(
    //             '#demoVideo',{
    //               width: TV.symetryDemoVideoWidth + '%',
    //               height: innerWidth * TV.symetryDemoMenu/100 * TV.symetryDemoVideoWidth/100 * 9/16
    //             },{
    //               width: TV.unSymetryDemoVideoWidth + '%',
    //               height: innerWidth * (100-TV.unSymetryDemoMenu)/100 * TV.unSymetryDemoVideoWidth/100 * 9/16
    //             }
    //           ),0)
    //         }
    // if(_menuExtended){

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

function homeGsapTransitionToSymetry(){
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