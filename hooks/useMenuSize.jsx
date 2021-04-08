import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import TV, { convertToPix } from '../public/assets/js/transitionValue';
import { getDemoVideoHeight, homeGsapTransition, transformToUnSymetryEachMenu} from '../public/assets/js/utilities.js'



function useMenuSize(id){
  const [LI_size,setLI_size] = useState({width:"50%", height:"50%"});
  const [svgFramePackSize,setsvgFramePackSize] = useState({width:"0px", height:"0px"})
  const [canvasSize, setCanvasSize] = useState({width:"0px", height:"0px", left:"0px", top:"0px", transform:"translate(0,0)"})
  const [svgFrameSize,setSvgFrameSize] = useState({width:"0px", height:"0px", x:"0px", y:"0px", rx:"0px", ry:"0px", fill:"none", transform:"translate(0,0)"})
  
  const [svgFrameValues, setSvgFrameValues] = useState({x:0, y:0, border:5, multiply:3, scale:1, speed:[2,3], fill:'none', radius:undefined, wavyPath:undefined, extraSpace:undefined});
  const [test, setTest] = useState(false)
  const [go, setgo] = useState([1,2,3,4])
    
  let mobileMode, _mobileMode ;
  let widerMode, _widerMode ;
  let onAnim = false;
  let menuExtended =false;
  let extendMenuSize = 'none';


  useEffect(()=>{
    mobileMode = innerWidth <= 800 ? true : false; 
    widerMode = innerWidth >= 1400 ? true : false; 
    _mobileMode = mobileMode;
    _widerMode = widerMode;

    
    updateSvgFrameValues();
  },[])
  
    
  const updateSvgFrameValues = useCallback(()=>{
    console.log('updateSvgFrameVales is working')
    let _radius = innerWidth > 800 ? ( innerWidth > 1400 ? 9 : 7 ) : 5;
    let _wavyPath = Math.abs((innerWidth - innerWidth )) * 0.01 + 25;
    setSvgFrameValues({ ...svgFrameValues,
                      radius: _radius,
                      wavyPath: _wavyPath,
                      extraSpace: _radius * 5})
  },[svgFrameValues])
 
  useEffect(()=>{
    if(svgFrameValues.radius !== undefined){

      if(!onAnim){
        
        let size = getDefaultsvgFramePackSize();
      //   // setHeirachysvgFramePack({width:defaultsvgFramePackSize, height:defaultsvgFramePackSize, widthToPix:extendMenuSize['width'] ,heightToPix:extendMenuSize['height'], svgFrameValues})
      //   // console.log('svgFrameValues.svgFrameValues.extraSpace=  ',svgFrameValues,'mobileMode_: ',mobileMode)
        setsvgFramePackSize({width:size, height:size});
        setCanvasSize({width: `calc( ${size} + ${svgFrameValues["extraSpace"] }px)` ,
                        height : `calc( ${size} + ${svgFrameValues["extraSpace"] }px)` ,
                        left: `-${svgFrameValues["extraSpace"]/2}px` ,
                        top: `-${svgFrameValues["extraSpace"]/2}px`});
        setSvgFrameSize({width: size , 
                        height: size ,
                        x: svgFrameValues['x'],
                        y: svgFrameValues['y'],
                        rx: svgFrameValues['border'],
                        ry: svgFrameValues['border'],
                        fill: svgFrameValues['fill'],
                        transform: `translate(${svgFrameValues["extraSpace"]/2},${svgFrameValues["extraSpace"]/2})`
                    });
      }else{

      }
    }
  },[svgFrameValues])


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

    
  useEffect(()=>{

    let updateResize = () =>{
      _mobileMode = innerWidth <= 800 ? true : false; 
      _widerMode = innerWidth >= 1400 ? true : false;

      if(mobileMode !== _mobileMode || widerMode !== _widerMode ){
        console.log('view is changing',id);
         
        updateSvgFrameValues();
      }else{

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
    setGo()
  },[test])

  const callToUnSymetryEachMenu = useCallback((demoVideoHeight, elem, order, refs)=>{
    return new Promise((resolve, reject)=>{

      let size = transformToUnSymetryEachMenu(demoVideoHeight, elem, order);
      let f = 0;
      let dir = 1;

      
      const NF = TV['menuDuration'] * 63;
     

      // console.log('size= ',size)
      // Object.keys(refs).forEach(()=>{

      // })
      // size.LI.forEach((obj)=>{
      //   eval(obj['elemId'] + "_setLI_size")({width:obj.width, height:obj.height});
      // })
      
  //     console.log(elem.parentElement.id)

  //     function anim(){
  //       f += dir;
  //       onAnim = true;
  //       console.log('f',f)
  //       // eval(elem.parentElement.id + "_changeHeirachySvgFramePack")(_svgFrameValues, size['svgFramePackage'], onAnim, f, svgFrameRef.current.clientWidth, svgFrameRef.current.clientHeight);
  //       work_changeHeirachySvgFramePack(_svgFrameValues, size['svgFramePackage'], onAnim, f, svgFrameRef.current.clientWidth, svgFrameRef.current.clientHeight);
        
  
  //       extendingRequestAnimRef.current = requestAnimationFrame(anim);

  //       if(!(f % NF)){
  //         console.log('=======finished=======')
  //         onAnim = false;
          
  //         // eval(elem.parentElement.id + "_changeHeirachySvgFramePack")(_svgFrameValues, "100%", onAnim)



  //         cancelAnimationFrame(extendingRequestAnimRef.current);
  //       }
  //     }
  //     anim();
    })
  },[svgFrameValues])

  const extendMenu = useCallback((elem, order, refs)=>{
    console.log('clicked',elem)
    let demoVideoHeight;
  //   if(!activeClick){
  //     activeClick = true;

      if(menuExtended === false){
  //       console.log('if')
        menuExtended = true;
  //       biggerElem.current = elem;
  
        demoVideoHeight = getDemoVideoHeight(menuExtended);
        
        
  
        Promise.all([
          homeGsapTransition(menuExtended),
          // logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
          // svgFrameRef.extendMenuIf(demoVideoHeight),
          callToUnSymetryEachMenu(demoVideoHeight, elem, order, refs)
          // test()
        ]).then(()=>{
          // disableClick()
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
    
          Promise.all([
            utilityMenuIf(menuExtended),
            logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth  * (100 - TV.symetryDemoMenu) / 100 * TV.logoWidth / 100}),
            test()
          ]).then(()=>{
            disableClick()
          })
        }
      
  
      }
  //   }
  },[menuExtended]) 

  return [ LI_size, svgFramePackSize, canvasSize, svgFrameSize, extendMenu ]
}














//----------------------------------------//
function oldUseMenuSize(id){
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
    { LI: {style:{width:LI_size["width"], height:LI_size["height"]}}
    , svgFramePack: {style:{width:svgFramePackSize["width"], height:svgFramePackSize["height"]}}
    , canvas: {style:{width:canvasSize["width"], height: canvasSize["height"], left: canvasSize["left"], top: canvasSize["top"]}}
    , svgFrame: {width:svgFrameSize["width"], height: svgFrameSize["height"], x: svgFrameSize["x"], y: svgFrameSize["y"], rx:svgFrameSize["rx"], ry:svgFrameSize["ry"], fill:svgFrameSize["fill"], transform:svgFrameSize["transform"] }};
    



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


  function changeHeirachysvgFramePack(svgFrameValues, extendMenuSize='none', onAnim=false, frame=1, widthRef=null, heightRef=null){  
    if(svgFrameValues.extraSpace === undefined) {
      console.log('undefined?', svgFrameValues)
      return;
    }
    console.log('it is called')
    // console.log('viewChanged = ',svgFrameValues )
    
    console.log('--------------',id)
    
    if(!onAnim){
      console.log('if')
      let size = extendMenuSize==='none' ? getDefaultsvgFramePackSize() : extendMenuSize;
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
      if(frame===1){
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
    
  return [ style ]
}


export default useMenuSize;