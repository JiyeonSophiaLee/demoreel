import { useState, useEffect, useRef } from "react";
import TV, { convertToPix } from '../public/assets/js/transitionValue';
import RunSvgFrame from "../public/assets/js/SvgFrame";

function useMenuSize(){
  const [LI_size,setLI_size] = useState({width:"50%", height:"50%"});
  const [svgFramePackageSize,setSvgFramePackageSize] = useState({width:"0px", height:"0px"})
  const [canvasSize, setCanvasSize] = useState({width:"0px", height:"0px", left:"0px", top:"0px", transform:"translate(0,0)"})
  const [svgFrameSize,setSvgFrameSize] = useState({width:"0px", height:"0px", x:"0px", y:"0px", rx:"0px", ry:"0px", fill:"none", transform:"translate(0,0)"})
  
  let svgFrameRef = useRef()
  let mobileMode, _mobileMode ;
  let widerMode, _widerMode ;
  let size;
  let menuPaddingHeight, menuPaddingWidth;
  let liPaddingHeight, liPaddingWidth;


  const hookTest = (word)=>{
    console.log(word)
  }

  const style =
    { style_LI: {style:{width:LI_size["width"], height:LI_size["height"]}}
    , style_svgFramePackage: {style:{width:svgFramePackageSize["width"], height:svgFramePackageSize["height"]}}
    , style_canvas: {style:{width:canvasSize["width"], height: canvasSize["height"], left: canvasSize["left"], top: canvasSize["top"]}}
    , style_svgFrame: {width:svgFrameSize["width"], height: svgFrameSize["height"], x: svgFrameSize["x"], y: svgFrameSize["y"], rx:svgFrameSize["rx"], ry:svgFrameSize["ry"], fill:svgFrameSize["fill"], transform:svgFrameSize["transform"] }};
    



  // function getPaddingSize(){
  //   if(innerWidth < 1400){
  //     menuPaddingHeight = TV.menuPadding
  //   }
  // }

  function getDefaultSvgFramePackageSize(){
    let size;
    if(innerWidth >= 1400){
      size = TV.svgFramePackageSize1400;
    }else if(innerWidth > 800){
      size = TV.svgFramePackageSize;
    }else{
      if(menuExpanded == false){
        size = TV.svgFramePackageSize800;
      }else{
        size = TV.svgFramePackageSizeSmallerSize;
      }
    }
    return size;
    
  }
  function setDefaultSvgFramePackageSize(){
    let size = getDefaultSvgFramePackageSize()
    setSvgFramePackageSize({width:size, height:size})
  }

  function createSvgFrame(expandMenuSize=null){
    let size = getDefaultSvgFramePackageSize();
    let sizeToPix = convertToPix(size);

    setSvgFramePackageSize({width:size, height:size})
    setSvgFrame(sizeToPix);
  }

  function setSvgFrame(size=null, expandMenuSize=null){
    let width, height;
    if(expandMenuSize){
      // this.getExpandMenuSize(demoVideoHeight);
      width = expandMenuSize['width'];
      height = expandMenuSize['height'];
    }else{
      width = size;
      height = size;
    }

    setCanvasSize({width: width + svgFrameRef.extraSVGspace + 'px', height : height + svgFrameRef.extraSVGspace + 'px', left: `-${svgFrameRef.extraSVGspace/2}px`, top: `-${svgFrameRef.extraSVGspace/2}px`});
    setSvgFrameSize({width: width + 'px', height: height + 'px', x: svgFrameRef['x'], y: svgFrameRef['y'], rx: svgFrameRef['border'], ry: svgFrameRef['border'], fill: svgFrameRef['fill'], transform: `translate(${svgFrameRef.extraSVGspace/2},${svgFrameRef.extraSVGspace/2})`});

  }



  useEffect(()=>{
    svgFrameRef = new RunSvgFrame(innerWidth,innerHeight);
    mobileMode = innerWidth <= 800 ? true : false; 
    widerMode = innerWidth <= 1400 ? true : false; 
    _mobileMode = mobileMode; 
    _widerMode = widerMode; 

    createSvgFrame();
  },[])
  useEffect(()=>{
    let updateResize = () =>{
      _mobileMode = innerWidth <= 800 ? true : false; 
      _widerMode = innerWidth <= 1400 ? true : false; 
    
    
      if(mobileMode !== _mobileMode){
        console.log('mobileMode = ',mobileMode)
        mobileMode = !mobileMode;
        svgFrameRef.setUpdateValues(innerWidth,innerHeight);
        setDefaultSvgFramePackageSize();
      }
      if(widerMode !== _widerMode){
        console.log('widerMode = ',widerMode)
        widerMode = !widerMode;
        svgFrameRef.setUpdateValues(innerWidth,innerHeight);
        setDefaultSvgFramePackageSize();
      }
    
      
    }

    window.addEventListener('resize',updateResize);
  },[])
    
  return [setLI_size, style, setSvgFrame, hookTest]
}

export default useMenuSize;