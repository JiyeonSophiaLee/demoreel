// import variable from '../styles/variableCss.module.scss';
// import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useState, useEffect, createContext, useRef, useReducer, memo, useMemo } from "react";
import { useContext } from "react/cjs/react.development";
// import TV from '../public/assets/js/transitionValue';
import { ExtendMenuContext, LogoDisplayContext } from './HomeLayout.jsx'
// import { homeGsapSet } from '../public/assets/js/utilities.js'





function Demo(props){
  console.log('---DEMO---')
  const demoRef = useRef(null);
  const logoRef = useRef(null);
  const demoVideoRef = useRef(null);
  const logoDisplayContext = useContext(LogoDisplayContext);
 
  const extendMenuContext = useContext(ExtendMenuContext);
  let mobileMode, _mobileMode;
  let checkLogoHigher, _checkLogoHigher; 
  
  
  useEffect(()=>{
    mobileMode = innerWidth <= 800 ? true : false;
    checkLogoHigher = innerWidth > 800 && demoRef.current.clientHeight/3 > logoRef.current.clientWidth*4.5/6 ? true : false;
    _checkLogoHigher = checkLogoHigher;
    logoDisplayContext.logoDisplayDispatch({ demoClientHeight:demoRef.current.clientHeight, logoClientWidth: logoRef.current.clientWidth })
    props.refs.demoRef.current = demoRef.current;
    props.refs.logoRef.current = logoRef.current;
   


    const updateResize = () =>{
      // console.log('demoRef: ',demoRef.current.clientHeight, "demo: ",demo.clientHeight)
      _mobileMode = innerWidth <= 800 ? true : false; 
      if(mobileMode !==_mobileMode ){
        mobileMode = _mobileMode;
        // mobileMode = innerWidth <= 800 ? true : false;
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

  return useMemo(()=>{
    return <DemoRender demoRef={demoRef} logoRef={logoRef} demoVideoRef={demoVideoRef} onClick={onClick} context={logoDisplayContext}></DemoRender>
  },[logoDisplayContext.logoDisplay.logo_heigher, logoDisplayContext.logoDisplay.logo_wider])
}

function DemoRender(props){
  console.log('----------DemoRender-----------');
  useEffect(()=>{
    // props.refs.demoRef.current = props.demoRef;
    // props.refs.logoRef.current = props.demoRef;
  },[])

  return (
    <section id="demo"    ref={props.demoRef}> 
      <header id="logo" ref={props.logoRef} onClick={props.onClick}> 

          <img id="logo_heigher" src="/assets/images/logo/logo_heigher.svg"  style={{display: props.context.logoDisplay.logo_heigher}}/>
          <img id="logo_wider"   src="/assets/images/logo/logo_wider.svg"    style={{display: props.context.logoDisplay.logo_wider}}   />

      </header>
      <header id="demoVideo" ref={props.demoVideoRef}>
          <iframe src="https://player.vimeo.com/video/553396949?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
          <div id="demoVideoBgCSSAnim"></div>
      </header> 
      <div id="demoSVG" className="blurSVG"></div>
      {/* <iframe src="https://player.vimeo.com/video/553396949?badge=0&amp;autoplay=1&amp;color=ffffff&amp;player_id=0&amp;app_id=58479&amp;portrait=0&amp;muted=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="3D Demoreel by Jiyeon Lee (Sophia)"></iframe> */}
    </section>
  )
}
export default Demo