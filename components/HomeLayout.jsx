import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef} from "react"
// import gsap from 'gsap';
import TV from '../public/assets/js/transitionValue'
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
  const [work_setLI_size, work_setCanvasSize, work_setSvgFrameSize, work_style, work_setDefaultSvgFramePackageSize , work_hookTest] = useMenuSize()
  const [skill_setLI_size, skill_setCanvasSize, skill_setSvgFrameSize, skill_style, skill_setDefaultSvgFramePackageSize, skill_hookTest] = useMenuSize()
  const [paint_setLI_size, paint_setCanvasSize, paint_setSvgFrameSize, paint_style, paint_setDefaultSvgFramePackageSize, paint_hookTest] = useMenuSize()
  const [info_setLI_size, info_setCanvasSize, info_setSvgFrameSize, info_style, info_setDefaultSvgFramePackageSize, info_hookTest] = useMenuSize()
  
  
  let svgFrame = useRef();

  // let allElemsRef = useRef()
  
  
  let menuExtended = false;
  let biggerElem = null; 
  let biggeredElem = null;
  let demoVideoHeight;
  let activeClick = false;
  
  let mobileMode, _mobileMode ;

  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  

  
  
  useEffect(()=>{
    console.log('working')
    work_hookTest('custom hook is testing')
    skill_hookTest('what is wrong with you?')
    // allElemsRef = [work,skill,paint,info];
    svgFrame = new RunSvgFrame(innerWidth,innerHeight)
    
    
    
    
    mobileMode = innerWidth <= 800 ? true : false; 
    homeGsapSet(menuExtended, false);


    work_setDefaultSvgFramePackageSize();
    skill_setDefaultSvgFramePackageSize();
    paint_setDefaultSvgFramePackageSize();
    info_setDefaultSvgFramePackageSize();


  },[])

  useEffect(()=>{
    let updateResize = () =>{
      // console.log('HomeLayout -reszies run-')
      _mobileMode = innerWidth <= 800 ? true : false; 

      homeGsapSet(menuExtended, mobileMode === _mobileMode ? true : false);
      
      if(mobileMode !== _mobileMode){
        console.log('changed')
        mobileMode = !mobileMode;
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