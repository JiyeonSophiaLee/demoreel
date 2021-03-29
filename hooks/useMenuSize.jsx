import { useState, useEffect, useRef } from "react";
import TV from '../public/assets/js/transitionValue';
import RunSvgFrame from "../public/assets/js/SvgFrame";

function useMenuSize(){
  const [LI_size,setLI_size] = useState({width:"50%", height:"50%"});
  const [svgFramePackageSize,setSvgFramePackageSize] = useState({width:"", height:""})
  const [canvasSize, setCanvasSize] = useState({width:"", height:"", left:"", top:""})
  const [svgFrameSize,setSvgFrameSize] = useState({width:"", height:"", x:"", y:"", rx:"", ry:"", fill:"", stroke:"", transform:""})
  
  let svgFrame = useRef()



  const hookTest = (word)=>{
    console.log(word)
  }

  const style =
    { style_LI: {style:{width:LI_size["width"], height:LI_size["height"]}}
    , style_svgFramePackage: {style:{width:svgFramePackageSize["width"], height:svgFramePackageSize["height"]}}
    , style_canvas: {style:{width:canvasSize["width"], height: canvasSize["height"], left: canvasSize["left"], top: canvasSize["top"]}}
    , style_svgFrame: {width:svgFrameSize["width"], height: svgFrameSize["height"], x: svgFrameSize["x"], y: svgFrameSize["y"], rx:svgFrameSize["rx"], ry:svgFrameSize["ry"], fill:svgFrameSize["fill"], transform:svgFrameSize["transform"] }};
    


  function setDefaultSvgFramePackageSize(){
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
    setSvgFramePackageSize({width:size, height:size})
  }

  function createSvgFrame(elemParent, extraSVGspace, expandMenuSize=null){
    getSvgFrameSize(elemParent, extraSVGspace);
  }

  function getSvgFrameSize(elemParent, extraSVGspace, expandMenuSize=null){
    let width, height;
    if(!expandMenuSize){
      // this.getExpandMenuSize(demoVideoHeight);
      width = expandMenuSize['width'];
      height = expandMenuSize['height'];
    }else{
      width = elemParent.clientWidth;
      height = width;
    }

    setCanvasSize({width: + extraSVGspace + 'px', height : height + extraSVGspace + 'px'});
    setSvgFrameSize({width: width + 'px', height: height + 'px'});

  }



  useEffect(()=>{
    svgFrame = new RunSvgFrame(innerWidth,innerHeight);

    setDefaultSvgFramePackageSize();
  },[])
 
    
  return [setLI_size, setCanvasSize, setSvgFrameSize, style, setDefaultSvgFramePackageSize, hookTest]
}

export default useMenuSize;