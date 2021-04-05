import { useState, useEffect, useRef, useMemo } from "react";
import TV, { convertToPix } from '../public/assets/js/transitionValue';
import RunSvgFrame from "../public/assets/js/SvgFrame";



function useMenuSize(){
  const [LI_size,setLI_size] = useState({width:"50%", height:"50%"});
  const [svgFramePackSize,setsvgFramePackSize] = useState({width:"0px", height:"0px"})
  const [canvasSize, setCanvasSize] = useState({width:"0px", height:"0px", left:"0px", top:"0px", transform:"translate(0,0)"})
  const [svgFrameSize,setSvgFrameSize] = useState({width:"0px", height:"0px", x:"0px", y:"0px", rx:"0px", ry:"0px", fill:"none", transform:"translate(0,0)"})
  
  // const [heirachysvgFramePack, setHeirachysvgFramePack ] = useState({width: "0", height: "0", widthToPix:"0", heightToPix:"0", svgFrameRef:"none"});

  // let svgFrameRef = useRef()
  let mobileMode, _mobileMode ;
  let widerMode, _widerMode ;

  let menuPaddingHeight, menuPaddingWidth;
  let liPaddingHeight, liPaddingWidth;
  


  const hookTest = (word)=>{
    console.log(word)
  }

  const style =
    { style_LI: {style:{width:LI_size["width"], height:LI_size["height"]}}
    , style_svgFramePack: {style:{width:svgFramePackSize["width"], height:svgFramePackSize["height"]}}
    , style_canvas: {style:{width:canvasSize["width"], height: canvasSize["height"], left: canvasSize["left"], top: canvasSize["top"]}}
    , style_svgFrame: {width:svgFrameSize["width"], height: svgFrameSize["height"], x: svgFrameSize["x"], y: svgFrameSize["y"], rx:svgFrameSize["rx"], ry:svgFrameSize["ry"], fill:svgFrameSize["fill"], transform:svgFrameSize["transform"] }};
    



  // function getPaddingSize(){
  //   if(innerWidth < 1400){
  //     menuPaddingHeight = TV.menuPadding
  //   }
  // }

  function getDefaultsvgFramePackSize(menuExtended=false){
    let size;
    if(innerWidth >= 1400){
      size = TV.svgFramePackSize1400;
    }else if(innerWidth > 800){
      size = TV.svgFramePackSize;
    }else{
      if(menuExtended == false){
        size = TV.svgFramePackSize800;
      }else{
        size = TV.svgFramePackSizeSmallerSize;
      }
    }
    return size;
    
  }


  function changeHeirachysvgFramePack(svgFrameValues,extendMenuSize=false,onAnim=false,widthRef=null,heightRef=null){  
    if(svgFrameValues.extraSpace === undefined) {
      console.log('undefined?', svgFrameValues)
      return;
    }
    console.log('it is called')
    // console.log('viewChanged = ',svgFrameValues )
    let size = getDefaultsvgFramePackSize();

      console.log('initiate is working?')
      
    if(!extendMenuSize){
      console.log('if')
      // setHeirachysvgFramePack({width:defaultsvgFramePackSize, height:defaultsvgFramePackSize, widthToPix:extendMenuSize['width'] ,heightToPix:extendMenuSize['height'], svgFrameValues})
      // console.log('svgFrameValues.svgFrameValues.extraSpace=  ',svgFrameValues,'mobileMode_: ',mobileMode)
      setsvgFramePackSize({width:size, height:size});
      setCanvasSize({width: `calc( ${size} + ${svgFrameValues.extraSpace }px)` ,
                      height : `calc( ${size} + ${svgFrameValues.extraSpace }px)` ,
                      left: `-${svgFrameValues.extraSpace/2}px` ,
                      top: `-${svgFrameValues.extraSpace/2}px`});
      setSvgFrameSize({width: size , 
                      height: size ,
                      x: svgFrameValues['x'],
                      y: svgFrameValues['y'],
                      rx: svgFrameValues['border'],
                      ry: svgFrameValues['border'],
                      fill: svgFrameValues['fill'],
                      transform: `translate(${svgFrameValues.extraSpace/2},${svgFrameValues.extraSpace/2})`
                  });
    }else{
      console.log('else')
      if(!onAnim){
        console.log('extendMenuSize[width]',extendMenuSize['width'])
        setsvgFramePackSize({width:extendMenuSize['width'], height:extendMenuSize['height']});
      }
      setCanvasSize({ width: widthRef + svgFrameValues["extraSpace"] + "px", 
                      height: heightRef + svgFrameValues["extraSpace"] + "px", 
                      left: `-${svgFrameValues["extraSpace"]/2}px` ,
                      top: `-${svgFrameValues["extraSpace"]/2}px`})
      setSvgFrameSize({width:widthRef + "px", 
              height:heightRef + "px", 
              x: svgFrameValues['x'],
              y: svgFrameValues['y'],
              rx: svgFrameValues['border'],
              ry: svgFrameValues['border'],
              fill: svgFrameValues['fill'],
              transform: `translate(${svgFrameValues["extraSpace"]/2},${svgFrameValues["extraSpace"]/2})`})

      
    }
    
  }


  useEffect(()=>{
    // svgFrameRef = new RunSvgFrame(innerWidth,innerHeight);
    mobileMode = innerWidth <= 800 ? true : false; 
    widerMode = innerWidth <= 1400 ? true : false; 
    _mobileMode = mobileMode; 
    _widerMode = widerMode; 

  
  },[])
  useEffect(()=>{
    let updateResize = () =>{
      _mobileMode = innerWidth <= 800 ? true : false; 
      _widerMode = innerWidth <= 1400 ? true : false; 
    
    
      if(mobileMode !== _mobileMode){
        console.log('mobileMode = ',mobileMode)
        mobileMode = !mobileMode;
        svgFrameRef.setUpdateValues(innerWidth,innerHeight);
        // setDefaultsvgFramePackSize();
      }
      if(widerMode !== _widerMode){
        console.log('widerMode = ',widerMode)
        widerMode = !widerMode;
        svgFrameRef.setUpdateValues(innerWidth,innerHeight);
        // setDefaultsvgFramePackSize();
      }
    
      
    }

    // window.addEventListener('resize',updateResize);
  },[])
    
  return [setLI_size, setsvgFramePackSize, style, changeHeirachysvgFramePack, hookTest]
}

export default useMenuSize;