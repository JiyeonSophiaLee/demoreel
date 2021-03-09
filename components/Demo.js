// import variable from '../styles/variableCss.module.scss';
import React, { useState, useEffect } from "react";



// const Image = ()=>{
//   // const [size, setSize] = useState(0);
//   const [size, setSize] = useWindowSize();


//   useEffect(() => {
//     const handleResize =()=>{
//       setSize([window.innerWidth,window.innerHeight]);
//     }
//     window.addEventListener('resize',handleResize);
//     return()=>{
//       window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   return size;
// };

// function componentDidMount() {
//   // const _window = window;
//   console.log('window.innerHeight',process.browser);
// }
// componentDidMount()

export default function Demo(){
  
  // if (typeof window !== 'undefined') {
  //   const [size,setSize] = useState([ window.innerHeight, window.innerWidth]);
  // }
  

  const [logoDisplay,setLogoDisplay] = useState({logo_heigher:'none',logo_wider:'none'});
  const demoRef = React.useRef(null);
  const logoRef = React.useRef(null);



  function switchLogos(){
    console.log('switchLogos run')
    if(innerWidth > 800){
      if(innerWidth > innerHeight){
        if(demoRef.current.clientHeight/3 < logoRef.current.clientWidth*4/6){
          setLogoDisplay({logo_heigher: 'none', logo_wider : 'initial'})
        }else{
          setLogoDisplay({logo_heigher: 'initial', logo_wider : 'none'})
        }
      }else{
        setLogoDisplay({logo_heigher: 'initial', logo_wider : 'none'})
      }
    }else{
      setLogoDisplay({logo_heigher: 'none', logo_wider : 'initial'})
    }
  }

  useEffect(()=>{
    switchLogos();

    window.addEventListener('resize',()=>{
      switchLogos();
    })
  },[])  
  




  return (
    <section id="demo"    ref={demoRef}> 
        <header id="logo" ref={logoRef}> 
        {/* <h1>{JSON.stringify(logo_display)}</h1> */}
            <img id="logo_heigher" src="/assets/images/logo/logo_heigher.svg"  style={{display: logoDisplay.logo_heigher}}/>
            <img id="logo_wider"   src="/assets/images/logo/logo_wider.svg"    style={{display: logoDisplay.logo_wider}} />
        </header>
        <header id="demoVideo">
            <iframe src="https://player.vimeo.com/video/374348394?autoplay=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            <div id="demoVideoBgCSSAnim"></div>
        </header>
        <div id="demoSVG" className="blurSVG"></div>

    </section>
  )
}

const logoHeigherStyle = {

}