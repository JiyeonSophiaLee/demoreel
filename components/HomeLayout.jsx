import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef, useMemo} from "react"
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
  // console.log('logoDisplay reducer is working')
  if(innerWidth != undefined){
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
 
}

const HomeLayout = () =>{ 
  console.log('---HomeLayout---')
  const [work_setLI_size, work_setsvgFramePackSize, work_styleLI, work_styleSvgFramePack, work_changeHierarchySvgFramePack, work_hookTest] = useMenuSize();
  const [skill_setLI_size, skill_setsvgFramePackSize, skill_styleLI, skill_styleSvgFramePack, skill_changeHierarchySvgFramePack, skill_hookTest] = useMenuSize();
  const [paint_setLI_size, paint_setsvgFramePackSize, paint_styleLI, paint_styleSvgFramePack,  paint_changeHierarchySvgFramePack, paint_hookTest] = useMenuSize();
  const [info_setLI_size, info_setsvgFramePackSize, info_styleLI, info_styleSvgFramePack, info_changeHierarchySvgFramePack, info_hookTest] = useMenuSize();

  // const [svgFrameValues, setSvgFrameValues] = useState({ svgValues:"none", set:"none"});
  const [svgFrameValues, setSvgFrameValues] = useState({x:0, y:0, border:5, multiply:3, scale:1, speed:[2,3], fill:'none', radius:undefined, wavyPath:undefined, extraSpace:undefined, _menuExtended: false});
  // let _svgFrameValues = {x:0, y:0, border:5, multiply:3, scale:1, speed:[2,3], fill:'none', radius:undefined, wavyPath:undefined, extraSpace:undefined, _menuExtended: false};
  // const svgFrameValuesRef = useRef({radius:undefined, wavyPath:undefined, extraSpace:undefined, _menuExtended: false});
  const extendingRequestAnimRef = useRef();
  const biggerElem = useRef(null);
  const biggeredElem = useRef(null);
  
  const menuNames = useRef(['work', 'skill', 'paint', 'info']);
  
  // let svgFrameRef = useRef();

  const menuExtended = useRef(false) ;
  const demoVideoHeight = useRef()
  const activeClick = useRef(false) ;
  const onAnim = useRef(false) 
  const mobileMode = useRef();
  const _mobileMode = useRef();
  const widerMode = useRef();
  const _widerMode = useRef();
  const svgFramePackSize = useRef()
  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  

  
  
  useEffect(()=>{
  //   console.log('working')
  //   work_hookTest('custom hook is testing')
  //   skill_hookTest('what is wrong with you?')
  //   // svgFrameRef.current = new RunSvgFrame(innerWidth,innerHeight);
    
    mobileMode.current = innerWidth <= 800 ? true : false; 
    widerMode.current = innerWidth >= 1400 ? true : false; 
    _mobileMode.current = mobileMode;
    _widerMode.current = widerMode;
  
    homeGsapSet(menuExtended.current, true);
    updateSvgFrameValues();
  },[])

  const updateSvgFrameValues = useCallback(()=>{
    let _radius = innerWidth > 800 ? ( innerWidth > 1400 ? 9 : 7 ) : 5;
    let _wavyPath = Math.abs((innerWidth - innerWidth )) * 0.01 + 25;
    setSvgFrameValues({ ...svgFrameValues,
                      radius: _radius,
                      wavyPath: _wavyPath,
                      extraSpace: _radius * 5})     
    // _svgFrameValues = {..._svgFrameValues,
    //                   radius: _radius,
    //                   wavyPath: _wavyPath,
    //                   extraSpace: _radius * 5}
  },[])
  useEffect(()=>{
    if(svgFrameValues.radius !== undefined){
      if(menuExtended.current){
        console.log('menuExtended: ',menuExtended.current)
        menuNames.current.forEach(()=>{
        //   if(biggerElem.current.parentElement.id === menuNames[i]){
        //     eval(biggerElem.current.parentElement.id + "_changeHierarchySvgFramePack")(svgFrameValues, "100%");
        //   }else{
        //     eval(menuNames[i] + "_changeHierarchySvgFramePack")(svgFrameValues);
        //   }
        })
      }else{
        console.log('else', menuNames.current.length)
        menuNames.current.forEach((elemId)=>{
          eval(elemId + "_changeHierarchySvgFramePack")(svgFrameValues);
        });
      }
    }
  },[svgFrameValues])

    useEffect(()=>{

      let updateResize = () =>{
        _mobileMode.current = innerWidth <= 800 ? true : false; 
        _widerMode.current = innerWidth >= 1400 ? true : false;

        homeGsapSet(menuExtended.current, mobileMode !== _mobileMode)

    //     if( menuExtended ){
    //       // remainExtendingMenu();
    //     }else{
            
    //     }
        if(mobileMode.current !== _mobileMode.current || widerMode.current !== _widerMode.current ){
          console.log('view is changing');
          updateSvgFrameValues();
        }

        
    //     if(mobileMode !== _mobileMode){
    //       console.log('changed')
    //       mobileMode = !mobileMode;
    //     }
    //     if(widerMode !== _widerMode){
    //       console.log('changed')
    //       widerMode = !widerMode;
    //     }
    }
      window.addEventListener('resize',updateResize);
      return ()=>{
        window.removeEventListener('resize',updateResize);
      }
    },[])

  // function remainExtendingMenu(){
  //   let widthRef = biggerElem.current.parentElement.clientWidth;
  //   let heightRef = biggerElem.current.parentElement.clientHeight;
  //   console.log('widthRef', widthRef, 'heightRef', heightRef);

  //   eval( biggerElem.current.parentElement.id + "_changeHierarchySvgFramePack")(svgFrameValues, {width:widthRef, height: heightRef}, onAnim, widthRef, heightRef)
  // }
  

 


  
  // function test(){
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(() => {
  //       console.log('finish');
  //       resolve();
  //     }, 1000);
  //   })
  // }
  // function disableClick(){
  //   return new Promise((resolve, reject)=>{
  //     activeClick = false;
  //     console.log(activeClick);
  //     resolve();
  //   })
  // }
  // function callToUnSymetryEachMenu(demoVideoHeight, elem, order, svgFrameRef){
  //   return new Promise((resolve, reject)=>{

  //     let size = transformToUnSymetryEachMenu(demoVideoHeight, elem, order);
  //     let f = 0;
  //     let dir = 1;

      
  //     const NF = TV['menuDuration'] * 63;
      
  //     size.LI.forEach((obj)=>{
  //       eval(obj['elemId'] + "_setLI_size")({width:obj.width, height:obj.height});
  //     })
      
  //     console.log(elem.parentElement.id)

  //     function anim(){
  //       f += dir;
  //       onAnim = true;
  //       console.log('f',f)
  //       // eval(elem.parentElement.id + "_changeHierarchySvgFramePack")(_svgFrameValues, size['svgFramePackage'], onAnim, f, svgFrameRef.current.clientWidth, svgFrameRef.current.clientHeight);
  //       work_changeHierarchySvgFramePack(_svgFrameValues, size['svgFramePackage'], onAnim, f, svgFrameRef.current.clientWidth, svgFrameRef.current.clientHeight);
        
  
  //       extendingRequestAnimRef.current = requestAnimationFrame(anim);

  //       if(!(f % NF)){
  //         console.log('=======finished=======')
  //         onAnim = false;
          
  //         // eval(elem.parentElement.id + "_changeHierarchySvgFramePack")(_svgFrameValues, "100%", onAnim)



  //         cancelAnimationFrame(extendingRequestAnimRef.current);
  //       }
  //     }
  //     anim();
  //   })
  // }

  const extendMenu = useCallback((elem,order=0, svgFrameRef)=>{
    console.log('clicked')
  //   if(!activeClick){
  //     activeClick = true;

  //     if(menuExtended === false){
  //       console.log('if')
  //       menuExtended = true;
  //       biggerElem.current = elem;
  
  //       demoVideoHeight = getDemoVideoHeight(menuExtended);
  //       console.log('svgFrameRef',svgFrameRef)
        
        
  
  //       Promise.all([
  //         homeGsapTransition(menuExtended),
  //         logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
  //         // svgFrameRef.extendMenuIf(demoVideoHeight),
  //         callToUnSymetryEachMenu(demoVideoHeight, elem, order, svgFrameRef)
  //         // test()
  //       ]).then(()=>{
  //         // disableClick()
  //       })
        
        
  
  
  //     }else if( biggerElem !== elem && svgFrameRef !== null){
  //       console.log('else if')
  //       biggeredElem = biggerElem;
  //       biggerElem = elem;
  
      
      
  //     }else{
  //       if( menuExtended ){
  //         menuExtended = false;
  //         biggeredElem = null;
  //         biggerElem = null;
    
  //         demoVideoHeight = getDemoVideoHeight(menuExtended)
  //         console.log('svgFrameValues====> ',svgFrameValues)
    
  //         Promise.all([
  //           utilityMenuIf(menuExtended),
  //           logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth  * (100 - TV.symetryDemoMenu) / 100 * TV.logoWidth / 100}),
  //           test()
  //         ]).then(()=>{
  //           disableClick()
  //         })
  //       }
      
  
  //     }
  //   }
  },[]) 

 
   return useMemo(()=>{
    return <div id = "master" >
            <ExtendMenuContext.Provider value={extendMenu}>
              <LogoDisplayContext.Provider  value={{logoDisplay, logoDisplayDispatch}}>
                <Demo/>
              </LogoDisplayContext.Provider>
              <MenuSizeContext.Provider  value={{work_styleLI, skill_styleLI, paint_styleLI, info_styleLI, work_styleSvgFramePack, skill_styleSvgFramePack, paint_styleSvgFramePack, info_styleSvgFramePack}}>
                <Menu menuNames={menuNames.current} />
              </MenuSizeContext.Provider>
            </ExtendMenuContext.Provider>
    </div>
  },[logoDisplay, work_styleLI, work_styleSvgFramePack]);
} 

export default HomeLayout