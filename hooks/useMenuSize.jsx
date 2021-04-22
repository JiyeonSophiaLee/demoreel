import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import TV, { convertToPix } from '../public/assets/js/transitionValue';
import RunSvgFrame from "../public/assets/js/SvgFrame";



function useMenuSize(id){
  const [LI_size,setLI_size] = useState({width:"50%", height:"50%"});
  const [svgFramePackSize,setsvgFramePackSize] = useState({width:"0px", height:"0px"})
  const [canvasSize, setCanvasSize] = useState({width:"0px", height:"0px", left:"0px", top:"0px", transform:"translate(0,0)"})
  const [svgFrameSize,setSvgFrameSize] = useState({style:{width:"0px", height:"0px", strokeWidth:"0px"}, transform:"translate(0,0)"})
  const [wavyPath,setWavyPath] = useState({strokeWidth:"0px"})


  



  const hookTest = (word)=>{
    console.log(word)
  }

  const styleLI =  useMemo(() => (LI_size ),[LI_size["width"]])
  const styleSvgFramePack = useMemo(()=>({
    style_svgFramePack: svgFramePackSize,
    style_canvas: canvasSize,
    style_svgFrame: svgFrameSize,
    style_wavy: wavyPath,
  }),[svgFramePackSize['width'], canvasSize["width"], svgFrameSize["width"]])
   


  const changeHierarchySvgFramePack= useCallback((svgFrameValues, extendMenuSize='none')=>{

      let size = extendMenuSize==='none' ? svgFrameValues['svgFrameDefault'] : extendMenuSize;

      setsvgFramePackSize({width:size['width'], height:size['height']});
      if(wavyPath["strokeWidth"] !== svgFrameValues["strokeWidth"]){
        setCanvasSize({width: `calc( 100% + ${svgFrameValues.extraSpace }px)` ,
                        height : `calc( 100% + ${svgFrameValues.extraSpace }px)`, 
                        left: `-${svgFrameValues.extraSpace/2}px`,
                        top: `-${svgFrameValues.extraSpace/2}px`});
        setSvgFrameSize({style:{width: `calc( 100% - ${svgFrameValues.extraSpace }px)` , 
                                height: `calc( 100% - ${svgFrameValues.extraSpace }px)`,
                                strokeWidth: svgFrameValues["strokeWidth"].rect},
                        transform:`translate(${svgFrameValues.extraSpace/2},${svgFrameValues.extraSpace/2})`
                       });
        setWavyPath({strokeWidth: svgFrameValues["strokeWidth"].wavy})
      }
                     
  },[])


    
  return [setLI_size, setsvgFramePackSize, styleLI, styleSvgFramePack, changeHierarchySvgFramePack, hookTest]
}

export default useMenuSize;