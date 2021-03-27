import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef} from "react"
// import gsap from 'gsap';
import TV from '../public/assets/js/transitionValue'
import { homeGsapSet, getDemoVideoHeight, utilityMenuIf, unSymetryEachMenuTransform } from '../public/assets/js/utilities.js'
// import  MainController  from '../public/assets/js/mainController.js'
// import RunSvgFrame from "../public/assets/js/SvgFrame";



export const ExtendMenuContext = createContext();
export const LogoDisplayContext = createContext();
// export const SvgFramePackageSizeContext = createContext();



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
// const SvgFramePackageSizeReducer = (state,action)=>{
//   {order1:{width:"50%",height:"50%"}, order2:{width:"50%",height:"50%"}, order3:{width:"50%",height:"50%"}, order4:{width:"50%",height:"50%"}}
// }


const HomeLayout = () =>{ 
  // console.log('---HomeLayout---')
  const [LI_size, setLI_size] = useState({order1:{width:"50%",height:"50%"}, order2:{width:"50%",height:"50%"}, order3:{width:"50%",height:"50%"}, order4:{width:"50%",height:"50%"}})
  const [svgFramePackageSize, setSvgFramePackageSize] = useState({order1:{width:"", height:""}, order2:{width:"", height:""}, order3:{width:"", height:""}, order4:{width:"", height:""}})
  let allElemsRef = useRef()
  
  let menuExtended = false;
  let biggerElem = null; 
  let biggeredElem = null;
  let demoVideoHeight;
  let activeClick = false;
  
  let mobileMode, _mobileMode ;

  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  // const [svgFrameVales, svgFrameValesDispatch] = useReducer(LI_size,{order1:{width:"50%",height:"50%"}, order2:{width:"50%",height:"50%"}, order3:{width:"50%",height:"50%"}, order4:{width:"50%",height:"50%"}})

  
  
  useEffect(()=>{
    allElemsRef = [work,skill,paint,info]
    let size = getDefaultSvgFramePackageSize();


    // console.log('HomeLayout -useEffect runs-')
    mobileMode = innerWidth <= 800 ? true : false; 
    homeGsapSet(menuExtended, false)
    setSvgFramePackageSize({order1:{width:size, height:size}, order2:{width:size, height:size}, order3:{width:size, height:size}, order4:{width:size, height:size}})
    // homeGsapTransition();
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
  

  function getDefaultSvgFramePackageSize(){
    let size;
    if(innerWidth >= 1400){
      size = TV.rectSize1400;
    }else if(innerWidth > 800){
      size = TV.rectSize;
    }else{
      if(menuExpanded == false){
        size = TV.rectSize800;
      }else{
        size = TV.rectSmallerSize;
      }
    }
    return size;
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
      // console.log(activeClick);
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
        console.log('svgFrameRef',svgFrameRef)

  
  
        Promise.all([
          utilityMenuIf(menuExtended),
          logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
          // svgFrameRef.extendMenuIf(demoVideoHeight),
          setLI_size(unSymetryEachMenuTransform(demoVideoHeight, svgFrameRef)),
          // svgFrameTest(demoVideoHeight,svgFrameRef),
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


  
  return(
    <div id = "master">
        <LogoDisplayContext.Provider  value={{logoDisplay:logoDisplay, logoDisplayDispatch:logoDisplayDispatch}}>
          <Demo />
        </LogoDisplayContext.Provider>
      <ExtendMenuContext.Provider value={extendMenu}>
        {/* <SvgFrameContext.Provider value={{svgFrameVales:svgFrameVales, svgFrameValesDispatch:svgFrameValesDispatch}}> */}
          <Menu LI_size={LI_size} svgFramePackageSize={svgFramePackageSize}/>
        {/* </SvgFrameContext.Provider> */}
      </ExtendMenuContext.Provider>
    </div>
  )
} 

export default memo(HomeLayout)