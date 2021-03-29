import { useState } from "react"
import TV from '../public/assets/js/transitionValue'

function useMenuSize(){
  const [LI_size,setLI_size] = useState({width:"50%", height:"50%"});
  const [svgFramePackageSize,setSvgFramePackageSize] = useState({width:"", height:""})
  const [canvasSize, setCanvasSize] = useState({width:"", height:"", left:"", top:""})
  const [svgFrameSize,setSvgFrameSize] = useState({width:"", height:"", left:"", top:""})

  const hookTest = (word)=>{
    console.log(word)
  }

  const style =
    { style_LI: {style:{width:LI_size["width"], height:LI_size["height"]}}
    , style_svgFramePackage: {style:{width:svgFramePackageSize["width"], height:svgFramePackageSize["height"]}}
    , style_canvas: {style:{width:canvasSize["width"], height: canvasSize["height"], left: canvasSize["left"], top: canvasSize["top"]}}
    , style_svgFrame: {style:{width:svgFrameSize["width"], height: svgFrameSize["height"], left: svgFrameSize["left"], top: svgFrameSize["top"]}}};
    


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
    
  return [setLI_size, setCanvasSize, setSvgFrameSize, style, setDefaultSvgFramePackageSize, hookTest]
}

export default useMenuSize;