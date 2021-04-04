import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef} from "react"
// import gsap from 'gsap';
import TV, { convertToPix } from '../public/assets/js/transitionValue'
import useMenuSize from "../hooks/useMenuSize";
import { homeGsapSet, getDemoVideoHeight, homeGsapTransition, transformToUnSymetryEachMenu} from '../public/assets/js/utilities.js'
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
  const [work_setLI_size, work_setsvgFramePackSize, work_setAnim, work_style, work_changeHeirachySvgFramePack, work_hookTest] = useMenuSize();
  const [skill_setLI_size, skill_setsvgFramePackSize, skill_setAnim, skill_style, skill_changeHeirachySvgFramePack, skill_hookTest] = useMenuSize();
  const [paint_setLI_size, paint_setsvgFramePackSize, paint_setAnim, paint_style,  paint_changeHeirachySvgFramePack, paint_hookTest] = useMenuSize();
  const [info_setLI_size, info_setsvgFramePackSize, info_setAnim, info_style, info_changeHeirachySvgFramePack, info_hookTest] = useMenuSize();

  // const [svgFrameValues, setSvgFrameValues] = useState({ svgValues:"none", set:"none"});
  const [svgFrameValues, setSvgFrameValues] = useState({x:0, y:0, border:5, multiply:3, scale:1, speed:[2,3], fill:'none', radius:undefined, wavyPath:undefined, extraSpace:undefined, _menuExtended: false});
  const extendingRequestAnimRef = useRef();
  
  // let svgFrameRef = useRef();

  let menuExtended = false;
  let biggerElem = null; 
  let biggeredElem = null;
  let demoVideoHeight;
  let activeClick = false;
  
  let mobileMode, _mobileMode ;
  let widerMode, _widerMode ;
  let svgFramePackSize;
  
  
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
        setSvgFrameValues({...svgFrameValues, _menuExtended: true})
      }else{
          
      }
      if(mobileMode !== _mobileMode || widerMode !== _widerMode ){
        console.log('view is changing');
        updateSvgFrameValues();
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
      console.log(' it is called!!');
      if(menuExtended){
        switch(biggerElem){
          case "work":
            work_changeHeirachySvgFramePack(null,);
            break;
          case "skill":
            skill_changeHeirachySvgFramePack(null,);
            break;
          case "paint":
            paint_changeHeirachySvgFramePack(null,);
            break;
          case "info":
            info_changeHeirachySvgFramePack(null);
        }
      }else{
        work_changeHeirachySvgFramePack(svgFrameValues);
        skill_changeHeirachySvgFramePack(svgFrameValues);
        paint_changeHeirachySvgFramePack(svgFrameValues);
        info_changeHeirachySvgFramePack(svgFrameValues);
      }
    }
  },[svgFrameValues])

  function updateHeirachySvgFramePack(){
    
  }
  
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
  function callToUnSymetryEachMenu(demoVideoHeight, elem, order, svgFrameRef){
    return new Promise((resolve, reject)=>{

      let size = transformToUnSymetryEachMenu(demoVideoHeight, elem, order);
      let f = 0;
      let dir = 1;
      const NF = TV['menuDuration'] * 63;
      console.log("NF", NF)
      
      size.LI.forEach((obj)=>{
        eval(obj['elemId'] + "_setLI_size")({width:obj.width, height:obj.height});
      })
      eval(elem.parentElement.id + "_changeHeirachySvgFramePack")(svgFrameValues, size['svgFramePackage']);
      console.log('this is working')
  
      function anim(){
        f += dir;
        console.log('f: ',f)
        eval(elem.parentElement.id + "_setAnim")(svgFrameRef.clientWidth, svgFrameRef.clientHeight, svgFrameValues.extraSpace)

        extendingRequestAnimRef.current = requestAnimationFrame(anim)
        if(!(f % NF)){
          console.log('=======finished=======')
          cancelAnimationFrame(extendingRequestAnimRef.current)
        }
      }
      anim();
    })
  }

  const extendMenu = useCallback((elem,order=0, svgFrameRef)=>{
    console.log('clicked')
    if(!activeClick){
      activeClick = true;

      if(menuExtended === false){
        console.log('if')
        menuExtended = true;
        biggerElem = elem;
  
        demoVideoHeight = getDemoVideoHeight(menuExtended);
        console.log('elem',elem)
        
        
  
        Promise.all([
          homeGsapTransition(menuExtended),
          logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
          // svgFrameRef.extendMenuIf(demoVideoHeight),
          callToUnSymetryEachMenu(demoVideoHeight, elem, order, svgFrameRef)
          // test()
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

 
  
  return(
    <div id = "master" >
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