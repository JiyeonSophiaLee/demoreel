import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef} from "react"
// import gsap from 'gsap';
import TV from '../public/assets/js/transitionValue'
import { homeGsapSet, getDemoVideoHeight, utilityMenuIf} from '../public/assets/js/utilities.js'
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
  let allElemsRef = useRef()
  
  let menuExtended = false;
  let biggerElem = null; 
  let biggeredElem = null;
  let demoVideoHeight;
  
  let mobileMode, _mobileMode ;

  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  

  
  
  useEffect(()=>{
    // console.log('HomeLayout -useEffect runs-')
    mobileMode = innerWidth <= 800 ? true : false; 
    homeGsapSet(menuExtended)
    allElemsRef = [work,skill,paint,info]
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
  

  
  function addEvetnCB(){
    console.log('add');

  };
  function removeEventCB(){
    console.log('remove');
    allElemsRef.forEach((elem) => {
      // console.log(getEventListeners())
      // elem.removeEventListener('click',onClick)
    });
  };

  const extendMenu = useCallback((elem,svgFrameRef)=>{
    removeEventCB()

    if(menuExtended === false){
      menuExtended = true;
      biggerElem = elem;

      demoVideoHeight = getDemoVideoHeight(menuExtended)



      Promise.all([
        utilityMenuIf(menuExtended),
        logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
        svgFrameRef.extendMenuIf()
      ]).then(()=>{
        console.log(' finished')
      })
      
      


    }else if( biggerElem !== elem){
      biggeredElem = biggerElem;
      biggerElem = elem;

    
    
    }else{
      menuExtended = false;
      biggeredElem = null;
      biggerElem = null;

      demoVideoHeight = getDemoVideoHeight(menuExtended)
      console.log('demoVideoHeight: ',demoVideoHeight)

      Promise.all([
        utilityMenuIf(menuExtended),
        logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth  * (100 - TV.symetryDemoMenu) / 100 * TV.logoWidth / 100}),
      ]).then(()=>{
        console.log('Else finished')
      })

    }
  },[menuExtended]) 


  
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