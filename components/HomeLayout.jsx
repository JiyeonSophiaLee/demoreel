import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef} from "react"
// import gsap from 'gsap';
import TV, { convertToPix } from '../public/assets/js/transitionValue'
import useMenuSize from "../hooks/useMenuSize";
import { homeGsapSet, getDemoVideoHeight, utilityMenuIf} from '../public/assets/js/utilities.js'
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
  const [work_setLI_size, work_style, work_setAllSvgFrame, work_hookTest] = useMenuSize()
  const [skill_setLI_size, skill_style, skill_setAllSvgFrame, skill_hookTest] = useMenuSize()
  const [paint_setLI_size, paint_style, paint_setAllSvgFrame, paint_hookTest] = useMenuSize()
  const [info_setLI_size, info_style, info_setAllSvgFrame, info_hookTest] = useMenuSize()
  
  
  
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
    
    
    
    
    mobileMode = innerWidth <= 800 ? true : false; 
    widerMode = innerWidth >= 1400 ? true : false; 
    _mobileMode = mobileMode;
    _widerMode = widerMode;

    homeGsapSet(menuExtended, true);


    

  },[])

  useEffect(()=>{

    let updateResize = () =>{
      _mobileMode = innerWidth <= 800 ? true : false; 
      _widerMode = innerWidth >= 1400 ? true : false;




      homeGsapSet(menuExtended, mobileMode !== _mobileMode)

      if( menuExtended ){
        if( biggerElem === "work" ){ work_setAllSvgFrame(null,) }else{skill_setAllSvgFrame();paint_setAllSvgFrame();info_setAllSvgFrame();}
        if( biggerElem === "skill" ){skill_setAllSvgFrame(null,)}else{work_setAllSvgFrame(); paint_setAllSvgFrame();info_setAllSvgFrame();}
        if( biggerElem === "paint" ){paint_setAllSvgFrame(null,)}else{work_setAllSvgFrame(); skill_setAllSvgFrame();info_setAllSvgFrame();}
        if( biggerElem === "info" ){ info_setAllSvgFrame(null) }else{work_setAllSvgFrame(); skill_setAllSvgFrame();paint_setAllSvgFrame();}
      }else{
        // if(!mobileMode && !widerMode){
          // when menu's width in the between 800 and 1400, the unit of menu's size is "vw" which means menu's size have to be recalculated by window's width every window's resize. 
          if(widerMode !== _widerMode){
            console.log('if is working')
            work_setAllSvgFrame(true);
            // skill_setAllSvgFrame(true);
            // paint_setAllSvgFrame(true);
            // info_setAllSvgFrame(true);
          // }else {
            // work_setAllSvgFrame();
            // skill_setAllSvgFrame();
            // paint_setAllSvgFrame();
            // info_setAllSvgFrame();
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
  

  const extendMenu = useCallback((elem,svgFrameRef=null)=>{
   
    if(!activeClick){
      activeClick = true;

      if(menuExtended === false && svgFrameRef !== null){
        console.log('if')
        menuExtended = true;
        biggerElem = elem;
  
        demoVideoHeight = getDemoVideoHeight(menuExtended)
        console.log(demoVideoHeight)
  
  
  
        Promise.all([
          utilityMenuIf(menuExtended),
          logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
          // svgFrameRef.extendMenuIf(demoVideoHeight),
          setLI_size(unSymetryEachMenuTransform(demoVideoHeight, svgFrameRef)),
          test()
        ]).then(()=>{
          disableClick()
        })
        
        
  
  
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