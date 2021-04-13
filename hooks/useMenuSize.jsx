import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import TV, { convertToPix } from '../public/assets/js/transitionValue';
import RunSvgFrame from "../public/assets/js/SvgFrame";



function useMenuSize(id){
  const [LI_size,setLI_size] = useState({width:"50%", height:"50%"});
  const [svgFramePackSize,setsvgFramePackSize] = useState({width:"0px", height:"0px"})
  const [canvasSize, setCanvasSize] = useState({width:"0px", height:"0px", left:"0px", top:"0px", transform:"translate(0,0)"})
  const [svgFrameSize,setSvgFrameSize] = useState({width:"0px", height:"0px", x:"0px", y:"0px", rx:"0px", ry:"0px", fill:"none", transform:"translate(0,0)"})
  const [wavyPath,setWavyPath] = useState({transform:"translate(0,0)"})


  

  useEffect(()=>{
    // // svgFrameRef = new RunSvgFrame(innerWidth,innerHeight);
    // let mobileMode = innerWidth <= 800 ? true : false; 
    // let widerMode = innerWidth <= 1400 ? true : false; 
    // let _mobileMode = mobileMode; 
    // let _widerMode = widerMode; 

    
    let menuPaddingHeight, menuPaddingWidth;
    let liPaddingHeight, liPaddingWidth;

 
  },[])


  const hookTest = (word)=>{
    console.log(word)
  }

  const styleLI =  useMemo(() => ({width:LI_size["width"], height:LI_size["height"]} ),[LI_size["width"]])
  const styleSvgFramePack = useMemo(()=>({
    style_svgFramePack: {width:svgFramePackSize["width"], height:svgFramePackSize["height"]},
    style_canvas: {width:canvasSize["width"], height: canvasSize["height"], left: canvasSize["left"], top: canvasSize["top"]},
    style_svgFrame: {width:svgFrameSize["width"], height: svgFrameSize["height"], transform:svgFrameSize["transform"] },
    wavyPath: wavyPath
  }),[canvasSize["width"]])
    


  const getDefaultsvgFrameDefaultSize = useCallback((menuExtended=false)=>{
    let size;
    if(innerWidth >= 1400){
      size = TV.svgFrameDefaultSize1400;
    }else if(innerWidth > 800){
      size = TV.svgFrameDefaultSize;
    }else{
      if(menuExtended == false){
        size = TV.svgFrameDefaultSize800;
      }else{
        size = TV.svgFrameDefaultSizeSmallerSize;
      }
    }
    return size;
    
  },[])


  const changeHierarchySvgFramePack= useCallback((svgFrameValues, extendMenuSize='none',test=false)=>{
    if(test)console.log('????????????')
    // if(!onAnim){
      let size = extendMenuSize==='none' ? svgFrameValues['svgFrameDefault'] : extendMenuSize;
      console.log('size', size)
      setsvgFramePackSize({width:size['width'], height:size['height']});
      // setCanvasSize({width: `calc( 100% + ${svgFrameValues.extraSpace }px)` ,
      //                 height : `calc( 100% + ${svgFrameValues.extraSpace }px)`,
      //                 left: `-${svgFrameValues.extraSpace/2}px`,
      //                 top: `-${svgFrameValues.extraSpace/2}px`});
      // setSvgFrameSize({width: `calc( 100% - ${svgFrameValues.extraSpace }px)`  , 
      //                 height: `calc( 100% - ${svgFrameValues.extraSpace }px)`,
      //                 transform: `translate(${svgFrameValues.extraSpace/2},${svgFrameValues.extraSpace/2})`
      //                });
    // }else{
    //   setCanvasSize({ width: `calc( 100% + ${svgFrameValues.extraSpace }px)`, 
    //                   height: `calc( 100% + ${svgFrameValues.extraSpace }px)`, 
    //                   left: `-${svgFrameValues["extraSpace"]/2}px` ,
    //                   top: `-${svgFrameValues["extraSpace"]/2}px`})
    //   setSvgFrameSize({width: extendMenuSize['width'] + "px", 
    //                   height: extendMenuSize + "px",
    //                   transform: `translate(${svgFrameValues["extraSpace"]/2},${svgFrameValues["extraSpace"]/2})`})
    //   setWavyPath( {transform:`translate(${svgFrameValues.extraSpace/2},${svgFrameValues.extraSpace/2})`})
      
    // }
    
  },[])
//   setCanvasSize({width: `calc( ${size} + ${svgFrameValues.extraSpace }px)` ,
              //   height : `calc( ${size} + ${svgFrameValues.extraSpace }px)` ,
              //   left: `-${svgFrameValues.extraSpace/2}px` ,
              //   top: `-${svgFrameValues.extraSpace/2}px`});
  // setSvgFrameSize({width: size , 
                  //   height: size ,
                  //   x: svgFrameValues['x'],
                  //   y: svgFrameValues['y'],
                  //   rx: svgFrameValues['border'],
                  //   ry: svgFrameValues['border'],
                  //   fill: svgFrameValues['fill'],
                  //   transform: `translate(${svgFrameValues.extraSpace/2},${svgFrameValues.extraSpace/2})`
  // });
  // setWavyPath( {transform: `translate(${svgFrameValues.extraSpace/2},${svgFrameValues.extraSpace/2})`})

  useEffect(()=>{
    // let updateResize = () =>{
    //   _mobileMode = innerWidth <= 800 ? true : false; 
    //   _widerMode = innerWidth <= 1400 ? true : false; 
    
    
    //   if(mobileMode !== _mobileMode){
    //     console.log('mobileMode = ',mobileMode)
    //     mobileMode = !mobileMode;
    //     svgFrameRef.setUpdateValues(innerWidth,innerHeight);
    //     // setDefaultsvgFramePackSize();
    //   }
    //   if(widerMode !== _widerMode){
    //     console.log('widerMode = ',widerMode)
    //     widerMode = !widerMode;
    //     svgFrameRef.setUpdateValues(innerWidth,innerHeight);
    //     // setDefaultsvgFramePackSize();
    //   }
    
      
    // }

    // // window.addEventListener('resize',updateResize);
  },[])
    
  return [setLI_size, setsvgFramePackSize, styleLI, styleSvgFramePack, changeHierarchySvgFramePack, hookTest]
}

export default useMenuSize;