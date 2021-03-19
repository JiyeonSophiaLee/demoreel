// import variable from '../styles/variableCss.module.scss';
// import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useState, useEffect, createContext, useRef, useReducer, memo } from "react";
import { useContext } from "react/cjs/react.development";
// import TV from '../public/assets/js/transitionValue';
import { LogoDisplayContext } from './HomeLayout'





function Demo(){
  console.log('---DEMO---')
  const [demoVideo_height, setDemovideo_height] = useState(0);
  const demoRef = useRef(null);
  const logoRef = useRef(null);
  const demoVieoRef = useRef(null);
  const logoDisplayContext = useContext(LogoDisplayContext);
  let mobileMode, _mobileMode;
  let checkLogoHigher, _checkLogoHigher = false;


  useEffect(()=>{
    mobileMode = innerWidth <= 800 ? true : false;
    checkLogoHigher = innerWidth > 800 && demoRef.current.clientHeight/3 > logoRef.current.clientWidth*4.5/6 ? true : false;
    _checkLogoHigher = checkLogoHigher;
    logoDisplayContext.logoDisplayDispatch({ demoClientHeight:demoRef.current.clientHeight, logoClientWidth: logoRef.current.clientWidth })

    getDemoVideHeight();

    let updateResize = () =>{
      _mobileMode = innerWidth <= 800 ? true : false; 
      if(mobileMode !==_mobileMode ){
        mobileMode = innerWidth <= 800 ? true : false;
        logoDisplayContext.logoDisplayDispatch({ demoClientHeight:demoRef.current.clientHeight, logoClientWidth: logoRef.current.clientWidth })
      }
      if( innerWidth > 800 ){
        _checkLogoHigher = demoRef.current.clientHeight/3 > logoRef.current.clientWidth*4.5/6 ? true : false;
        if(checkLogoHigher !== _checkLogoHigher){
          checkLogoHigher = !checkLogoHigher;
          logoDisplayContext.logoDisplayDispatch({ demoClientHeight:demoRef.current.clientHeight, logoClientWidth: logoRef.current.clientWidth })
        }
      }
      getDemoVideHeight();  
    }

    window.addEventListener('resize',updateResize)
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])  

    

  function getDemoVideHeight(){
    setDemovideo_height( demoVieoRef.current.clientWidth * (9/16));
    // if(innerWidth > 800){
    //   if(menuExpanded === 'true'){
    //     console.log(menuExpanded)
    //     // console.log(((innerWidth * (100- TV.unSymetryDemoMenu) / 100) * TV.unSymetryDemoVideoWidth/100)  * 9/16 )
    //     // setDemovideo_height( ((innerWidth * (100- TV.unSymetryDemoMenu) / 100) * TV.unSymetryDemoVideoWidth/100)  * 9/16 )
    //     // demoVideoHeight = ((window.innerWidth * (100-ISU.transitionValue['unSymetryDemoMenu']) / 100) * ISU.transitionValue['unSymetryDemoVideoWidth']/100)  * (9/16);
    //   }else{
    //     setDemovideo_height( demoVieoRef.current.clientWidth * (9/16));
    //   }
    // }else{
    //   if(menuExpanded === 'true'){
    //   //   if(window.innerWidth > ISU.transitionValue['masterMinWidth']){
    //   //     demoVideoHeight = (window.innerWidth * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
    //   //   }else{masterMinWidth
    //   //     demoVideoHeight = (ISU.transitionValue[''] * ISU.transitionValue['unSymetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
    //   //   }
    //   }else{
    //   //   if(window.innerWidth > ISU.transitionValue['masterMinWidth']){
    //   //     demoVideoHeight = (window.innerWidth * ISU.transitionValue['symetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
    //   //   }else{
    //   //     demoVideoHeight = (ISU.transitionValue['masterMinWidth'] * ISU.transitionValue['symetryDemoVideoWidthMediaQuery'] /100)  * (9/16);
    //   //   }
    //   }
    // };
  };


  //------------------------------------------------------//


  return (
    <section id="demo"    ref={demoRef}> 
            <header id="logo" ref={logoRef}> 
            {/* <h1>{JSON.stringify(logo_display)}</h1> */}

                <img id="logo_heigher" src="/assets/images/logo/logo_heigher.svg"  style={{display: logoDisplayContext.logoDisplay.logo_heigher}}/>
                <img id="logo_wider"   src="/assets/images/logo/logo_wider.svg"    style={{display: logoDisplayContext.logoDisplay.logo_wider}} />
    
            </header>
          <header id="demoVideo" ref={demoVieoRef} style={{height: demoVideo_height}}>
              <iframe src="https://player.vimeo.com/video/374348394?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              <div id="demoVideoBgCSSAnim"></div>
          </header>
          <div id="demoSVG" className="blurSVG"></div>

      </section>
  )
}
export default memo(Demo)