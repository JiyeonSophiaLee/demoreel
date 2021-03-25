// import variable from '../styles/variableCss.module.scss';
// import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useState, useEffect, createContext, useRef, useReducer, memo } from "react";
import { useContext } from "react/cjs/react.development";
// import TV from '../public/assets/js/transitionValue';
import { ExtendMenuContext, LogoDisplayContext } from './HomeLayout.jsx'
// import { homeGsapSet } from '../public/assets/js/utilities.js'





function Demo(){
  // console.log('---DEMO---')
  const demoRef = useRef(null);
  const logoRef = useRef(null);
  const demoVieoRef = useRef(null);
  const logoDisplayContext = useContext(LogoDisplayContext);
  const extendMenuContext = useContext(ExtendMenuContext);
  let mobileMode, _mobileMode;
  let checkLogoHigher, _checkLogoHigher = false;


  useEffect(()=>{
    mobileMode = innerWidth <= 800 ? true : false;
    checkLogoHigher = innerWidth > 800 && demoRef.current.clientHeight/3 > logoRef.current.clientWidth*4.5/6 ? true : false;
    _checkLogoHigher = checkLogoHigher;
    logoDisplayContext.logoDisplayDispatch({ demoClientHeight:demoRef.current.clientHeight, logoClientWidth: logoRef.current.clientWidth })



    let updateResize = () =>{
      // console.log('demoRef: ',demoRef.current.clientHeight, "demo: ",demo.clientHeight)
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
      // getDemoVideHeight();  
    }

    window.addEventListener('resize',updateResize)
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])  

    
  function onClick(){
    extendMenuContext('logo')
  }


  //------------------------------------------------------//


  return (
    <section id="demo"    ref={demoRef}> 
            <header id="logo" ref={logoRef} onClick={onClick}> 
            {/* <h1>{JSON.stringify(logo_display)}</h1> */}

                <img id="logo_heigher" src="/assets/images/logo/logo_heigher.svg"  style={{display: logoDisplayContext.logoDisplay.logo_heigher}}/>
                <img id="logo_wider"   src="/assets/images/logo/logo_wider.svg"    style={{display: logoDisplayContext.logoDisplay.logo_wider}} />
    
            </header>
          <header id="demoVideo" ref={demoVieoRef}>
              <iframe src="https://player.vimeo.com/video/374348394?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              <div id="demoVideoBgCSSAnim"></div>
          </header>
          <div id="demoSVG" className="blurSVG"></div>

      </section>
  )
}
export default memo(Demo)