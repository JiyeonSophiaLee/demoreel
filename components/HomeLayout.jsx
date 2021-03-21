import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback} from "react"
// import gsap from 'gsap';
import TV from '../public/assets/js/transitionValue'
import { homeGsapSet, utilityMenuIf} from '../public/assets/js/utilities.js'
// import { workSvgFrame, skillSvgFrame, paintSvgFrame, infoSvgFrame } from "../public/assets/js/SvgFrame";



export const ExtendMenuContext = createContext();
export const LogoDisplayContext = createContext();




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
  // console.log('---HomeLayout---')
  
  let menuExtended = false;
  let biggerElem = null; 
  let biggeredElem = null;
  
  let mobileMode, _mobileMode ;

  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  

  
  
  useEffect(()=>{
    // console.log('HomeLayout -useEffect runs-')
    mobileMode = innerWidth <= 800 ? true : false; 
    
    // homeGsapTransition();
  },[])

  useEffect(()=>{
    let updateResize = () =>{
      // console.log('HomeLayout -reszies run-')
      _mobileMode = innerWidth <= 800 ? true : false; 



      if(mobileMode !== _mobileMode){
        console.log('changed')
        mobileMode = !mobileMode;
        homeGsapSet(menuExtended);
      }
    }
    window.addEventListener('resize',updateResize);
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])

  
  

  const extendMenu = useCallback((elem)=>{
    // console.log('clicked extendMenu-->')
    if(menuExtended === false){
      menuExtended = true;
      biggerElem = elem;



      extendMenuIf();

    }else if( biggerElem !== elem){
      biggeredElem = biggerElem;
      biggerElem = elem;

    
    
    }else{
      menuExtended = false;
      biggeredElem = null;
      biggerElem = null;

      extendMenuElse();
    }
  },[menuExtended]) 

  function test(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        
        console.log('end')
        resolve();
      }, 1000);
    })
  }
  function extendMenuIf(){
    // console.log("HomeLayout -ExtendMenuIf runs-")
    Promise.all([
      utilityMenuIf(menuExtended),
      logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100})
    ]).then(()=>{
      test()
    })
    if(innerWidth > 800){
      // logoDisplayDispatch({demoClientHeight:})
    }
  }
  function extendMenuElse(){
    // console.log("HomeLayout -ExtendMenuElse runs-")
    utilityMenuIf(menuExtended);
    logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth  * (100 - TV.symetryDemoMenu) / 100 * TV.logoWidth / 100})
  }


  return(
    <div id = "master">
      <ExtendMenuContext.Provider value={extendMenu}>
        <LogoDisplayContext.Provider  value={{logoDisplay:logoDisplay, logoDisplayDispatch:logoDisplayDispatch}}>
          <Demo />
          <Menu/>
        </LogoDisplayContext.Provider>
      </ExtendMenuContext.Provider>
    </div>
  )
} 

export default memo(HomeLayout)