// import variable from '../styles/variableCss.module.scss';
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useState, useEffect, createContext, useRef, useReducer } from "react";
import TV from '../public/assets/js/transitionValue';



const logoDisplayReducer = (state,action)=>{
  switch(action.type){
    case 'initial':
      state = { logo_heigher: "initial", logo_wider:"none"}
      return state
    case 'none':
      state = { logo_heigher: "none", logo_wider:"initial"}
      return state
    default:
      return state
  }
} 



export default function Demo(){
  
  // const [logoDisplay,setLogoDisplay] = useState({logo_heigher:'none',logo_wider:'none'});
  const [demoVideo_height, setDemovideo_height] = useState(0);
  const demoRef = useRef(null);
  const logoRef = useRef(null);
  const demoVieoRef = useRef(null);

  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  

  useEffect(()=>{
    switchLogos();
    getDemoVideHeight();

    let updateResize = () =>{
      switchLogos();
      getDemoVideHeight();  
    }

    window.addEventListener('resize',updateResize)
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])  

    
  //--------------------functions-------------------------//
  function switchLogos(){
    if(innerWidth > 800){
      if(innerWidth > innerHeight){
        if(demoRef.current.clientHeight/3 < logoRef.current.clientWidth*4/6){
          logoDisplayDispatch({ type: "none" });
        }else{
          logoDisplayDispatch({ type: "initial"});
        }
      }else{
        logoDisplayDispatch({ type: "initial"});
      }
    }else{
      logoDisplayDispatch({ type: "none" });
    }
  }


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
              <img id="logo_heigher" src="/assets/images/logo/logo_heigher.svg"  style={{display: logoDisplay.logo_heigher}}/>
              <img id="logo_wider"   src="/assets/images/logo/logo_wider.svg"    style={{display: logoDisplay.logo_wider}} />
          </header>
        <header id="demoVideo" ref={demoVieoRef} style={{height: demoVideo_height}}>
            <iframe src="https://player.vimeo.com/video/374348394?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            <div id="demoVideoBgCSSAnim"></div>
        </header>
        <div id="demoSVG" className="blurSVG"></div>

    </section>
  )
}

function test(){
  console.log('test is working')
}