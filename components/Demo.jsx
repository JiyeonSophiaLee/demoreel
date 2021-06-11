import { useEffect, useRef, useMemo, useContext, useCallback} from "react";
import { ExtendMenuContext, LogoDisplayContext } from "./HomeLayout.jsx";
import { HiOutlineMail } from "react-icons/hi";
import { FaArtstation } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

const prefix = process.env.NEXT_PUBLIC_PREFIX || "";

function Demo(props) {
  // console.log("---DEMO---");
  const demoRef = useRef(null);
  const logoRef = useRef(null);
  const demoVideoRef = useRef(null);
  const logoDisplayContext = useContext(LogoDisplayContext);
  const extendMenuContext = useContext(ExtendMenuContext);
  const mode =  useRef({ mobileMode: null, _mobileMode: null, checkLogoHigher: null, _checkLogoHigher: null});


  useEffect(() => {
    mode.current.mobileMode = innerWidth <= 800 ? true : false;
    mode.current.checkLogoHigher = innerWidth > 800 && demoRef.current.clientHeight / 3 > (logoRef.current.clientWidth * 4.5) / 6 ? true : false;
    mode.current._mobileMode = mode.current.mobileMode;
    mode.current._checkLogoHigher = mode.current.checkLogoHigher;

    logoDisplayContext.logoDisplayDispatch({ demoClientHeight: demoRef.current.clientHeight, logoClientWidth: logoRef.current.clientWidth });
    props.refs.demoRef.current = demoRef.current;
    props.refs.logoRef.current = logoRef.current;
  }, []);

  useEffect(()=>{
    const updateResize = () => {
      mode.current._mobileMode = innerWidth <= 800 ? true : false;

      if (mode.current.mobileMode !== mode.current._mobileMode) {
        mode.current.mobileMode = !mode.current.mobileMode;
        logoDisplayContext.logoDisplayDispatch({ demoClientHeight: demoRef.current.clientHeight, logoClientWidth: logoRef.current.clientWidth });
      }
      if (innerWidth > 800) {
        mode.current._checkLogoHigher = demoRef.current.clientHeight / 3 > (logoRef.current.clientWidth * 4.5) / 6 ? true : false;
        
        if (mode.current.checkLogoHigher !== mode.current._checkLogoHigher) {
          mode.current.checkLogoHigher = !mode.current.checkLogoHigher;
          logoDisplayContext.logoDisplayDispatch({ demoClientHeight: demoRef.current.clientHeight, logoClientWidth: logoRef.current.clientWidth });
        }
      }
    };

    window.addEventListener("resize", updateResize);
    return () => {
      window.removeEventListener("resize", updateResize);
    };
  }, []);

  function onClick() {
    extendMenuContext("logo");
  }

  //------------------------------------------------------//

  return useMemo(() => {
    return (
      // <div></div>
      <DemoRender demoRef={demoRef} logoRef={logoRef} demoVideoRef={demoVideoRef} onClick={onClick} context={logoDisplayContext}></DemoRender>
    );
  }, [ logoDisplayContext.logoDisplay.logo_heigher, logoDisplayContext.logoDisplay.logo_wider, extendMenuContext]);
}

function DemoRender(props) {
  // console.log("----------DemoRender-----------");
  const onClickIcon = useCallback((e)=>{
    e.stopPropagation();
    url && window.open(url);
  },[])
  return (
    <section id="demo" ref={props.demoRef}>
      <header id="logo" ref={props.logoRef} onClick={props.onClick}>
         <img id="logo_heigher" src={prefix+"/assets/images/logo/logo_heigher.svg"} style={{ display: props.context.logoDisplay.logo_heigher }} />
         <img id="logo_wider" src={prefix+"/assets/images/logo/logo_wider.svg"} style={{ display: props.context.logoDisplay.logo_wider }}/>
      </header>
      <header id="demoVideo" ref={props.demoVideoRef}>
         <iframe src="https://player.vimeo.com/video/553396949?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
         <div id="demoVideoBgCSSAnim"></div>
       </header>
      <header id="demoIcons">
        <div> <HiOutlineMail className="icon" /> <a href="mailto:jiyeon.sophia.lee@gmail.com" title="email" onClick={onClickIcon}/> </div>
        <div> <GrLinkedin className="icon" /> <a href="https://www.linkedin.com/in/jiyeon-lee-873397111/" title="_blank" onClick={onClickIcon}/> </div>
        <div> <GoMarkGithub className="icon" /> <a href="https://github.com/JiyeonSophiaLee" target="_blank" onClick={onClickIcon}/></div>
        <div> <FaArtstation className="icon" /> <a href="https://www.artstation.com/jiyeon_sophia" title="_blank" onClick={onClickIcon}/> </div>
      </header>
      <div id="demoSVG" className="blurSVG"></div>
     </section>
  );
}
export default Demo;
