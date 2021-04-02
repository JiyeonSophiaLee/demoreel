import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef} from "react"
// import gsap from 'gsap';
import TV, { convertToPix } from '../public/assets/js/transitionValue'
import useMenuSize from "../hooks/useMenuSize";
import { homeGsapSet, getDemoVideoHeight, homeGsapTransition} from '../public/assets/js/utilities.js'
// import  MainController  from '../public/assets/js/mainController.js'
import RunSvgFrame from "../public/assets/js/SvgFrame";



export const ExtendMenuContext = createContext();
export const LogoDisplayContext = createContext();
export const MenuSizeContext = createContext();




const logoDisplayReducer = (state,action)=>{
  
  if(innerWidth > 800){
    if(innerWidth > innerHeight){
      if(action.demoClientHeight/3 < action.logoClientWidth*4.5/6){
        state = { logo_heigher: "none", logo_wider:"initial"}
        return state
      }else{
        state = { logo_heigher: "initial", logo_wider:"none"}
      return state
      }
    }else{
      state = { logo_heigher: "initial", logo_wider:"none"}
      return state
    }
  }else{
    state = { logo_heigher: "none", logo_wider:"initial"}
    return state
  }
}


const HomeLayout = () =>{ 
  console.log('---HomeLayout---')
  const [work_setLI_size, work_style, work_changeHeirachySvgFramePackage, work_hookTest] = useMenuSize();
  const [skill_setLI_size, skill_style, skill_changeHeirachySvgFramePackage, skill_hookTest] = useMenuSize();
  const [paint_setLI_size, paint_style, paint_changeHeirachySvgFramePackage, paint_hookTest] = useMenuSize();
  const [info_setLI_size, info_style, info_changeHeirachySvgFramePackage, info_hookTest] = useMenuSize();

  // const [svgFrameValues, setSvgFrameValues] = useState({ svgValues:"none", set:"none"});
  const [svgFrameValues, setSvgFrameValues] = useState({x:0, y:0, border:5, multiply:3, scale:1, speed:[2,3], fill:'none', radius:undefined, wavyPath:undefined, extraSpace:undefined});
  
  
  // let svgFrameRef = useRef();

  let menuExtended = false;
  let biggerElem = null; 
  let biggeredElem = null;
  let demoVideoHeight;
  let activeClick = false;
  
  let mobileMode, _mobileMode ;
  let widerMode, _widerMode ;
  let svgFramePackageSize;
  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  

  
  
  useEffect(()=>{
    console.log('working')
    work_hookTest('custom hook is testing')
    skill_hookTest('what is wrong with you?')
    // svgFrameRef.current = new RunSvgFrame(innerWidth,innerHeight);
    
    
    
    mobileMode = innerWidth <= 800 ? true : false; 
    widerMode = innerWidth >= 1400 ? true : false; 
    _mobileMode = mobileMode;
    _widerMode = widerMode;
    
    homeGsapSet(menuExtended, true);
    updateSvgFrameValues();

    

  },[])

  function updateSvgFrameValues(){
    console.log('updateSvgFrameValues is working')
    let _radius = innerWidth > 800 ? ( innerWidth > 1400 ? 9 : 7 ) : 5;
    let _wavyPath = Math.abs((innerWidth - innerWidth )) * 0.01 + 25;
    setSvgFrameValues({...svgFrameValues
                  , radius: _radius
                  , wavyPath: _wavyPath
                  , extraSpace: _radius * 5})
  }

  useEffect(()=>{

    let updateResize = () =>{
      _mobileMode = innerWidth <= 800 ? true : false; 
      _widerMode = innerWidth >= 1400 ? true : false;

      homeGsapSet(menuExtended, mobileMode !== _mobileMode)

      if( menuExtended ){
        if( biggerElem === "work" ){ work_changeHeirachySvgFramePackage(null,) }else{skill_changeHeirachySvgFramePackage();paint_changeHeirachySvgFramePackage();info_changeHeirachySvgFramePackage();}
        if( biggerElem === "skill" ){skill_changeHeirachySvgFramePackage(null,)}else{work_changeHeirachySvgFramePackage(); paint_changeHeirachySvgFramePackage();info_changeHeirachySvgFramePackage();}
        if( biggerElem === "paint" ){paint_changeHeirachySvgFramePackage(null,)}else{work_changeHeirachySvgFramePackage(); skill_changeHeirachySvgFramePackage();info_changeHeirachySvgFramePackage();}
        if( biggerElem === "info" ){ info_changeHeirachySvgFramePackage(null) }else{work_changeHeirachySvgFramePackage(); skill_changeHeirachySvgFramePackage();paint_changeHeirachySvgFramePackage();}
      }else{
        // if(!mobileMode && !widerMode){
          // when menu's width in the between 800 and 1400, the unit of menu's size is "vw" which means menu's size have to be recalculated by window's width every window's resize. 
          
          if(mobileMode !== _mobileMode || widerMode !== _widerMode ){
            console.log('view is changing')
            updateSvgFrameValues();
          // }else {
            // work_changeHeirachySvgFramePackage();
            // skill_changeHeirachySvgFramePackage();
            // paint_changeHeirachySvgFramePackage();
            // info_changeHeirachySvgFramePackage();
          // }

        }
      }

       
      if(mobileMode !== _mobileMode){
        console.log('changed')
        mobileMode = !mobileMode;
      }
      if(widerMode !== _widerMode){
        console.log('changed')
        widerMode = !widerMode;
      }
   

     

    }
    window.addEventListener('resize',updateResize);
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])
  
  useEffect(()=>{
    if(svgFrameValues.radius !== undefined){
      console.log(' it is called!!')
      work_changeHeirachySvgFramePackage(svgFrameValues);
      skill_changeHeirachySvgFramePackage(svgFrameValues);
      paint_changeHeirachySvgFramePackage(svgFrameValues);
      info_changeHeirachySvgFramePackage(svgFrameValues);
    }
  },[svgFrameValues])
  
  function test(){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        console.log('finish');
        resolve();
      }, 1000);
    })
  }
  function disableClick(){
    return new Promise((resolve, reject)=>{
      activeClick = false;
      console.log(activeClick);
      resolve();
    })
  }
  

  const extendMenu = useCallback((elem,order=0)=>{
    console.log('clicked')
    if(!activeClick){
      activeClick = true;

      if(menuExtended === false){
        console.log('if')
        menuExtended = true;
        biggerElem = elem;
  
        demoVideoHeight = getDemoVideoHeight(menuExtended)
        console.log(demoVideoHeight)
        console.log('elem - ',elem)
  
  
        // Promise.all([
        //   homeGsapTransition(menuExtended),
        //   logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
        //   // svgFrameRef.extendMenuIf(demoVideoHeight),
        //   setLI_size(unSymetryEachMenuTransform(demoVideoHeight, elem, order)),
        //   test()
        // ]).then(()=>{
        //   disableClick()
        // })
        
        
  
  
      }else if( biggerElem !== elem && svgFrameRef !== null){
        console.log('else if')
        biggeredElem = biggerElem;
        biggerElem = elem;
  
      
      
      }else{
        if( menuExtended ){
          menuExtended = false;
          biggeredElem = null;
          biggerElem = null;
    
          demoVideoHeight = getDemoVideoHeight(menuExtended)
          console.log('demoVideoHeight: ',demoVideoHeight)
    
          Promise.all([
            utilityMenuIf(menuExtended),
            logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth  * (100 - TV.symetryDemoMenu) / 100 * TV.logoWidth / 100}),
            test()
          ]).then(()=>{
            disableClick()
          })
        }
      
  
      }
    }
  },[menuExtended]) 

  const onClick = ()=>{
    work_hookTest('custom hook is testing')
  }

  
  return(
    <div id = "master" onClick={onClick}>
      <ExtendMenuContext.Provider value={extendMenu}>
        <LogoDisplayContext.Provider  value={{logoDisplay, logoDisplayDispatch}}>
          <Demo/>
        </LogoDisplayContext.Provider>
        <MenuSizeContext.Provider  value={{work_style, skill_style, paint_style, info_style}}>
          <Menu/>
        </MenuSizeContext.Provider>
      </ExtendMenuContext.Provider>
    </div>
  )
} 

export default memo(HomeLayout)