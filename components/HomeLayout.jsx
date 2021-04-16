import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef, useMemo} from "react"
// import gsap from 'gsap';
import TV, { convertToPix } from '../public/assets/js/transitionValue'
import useMenuSize from "../hooks/useMenuSize";
import { homeGsapSet, getDemoVideoHeight, homeGsapTransition, transformToUnSymetryEachMenu, tweenCardinal, getDataPoints, random} from '../public/assets/js/utilities.js'
import {gsap, Sine} from 'Gsap';



export const ExtendMenuContext = createContext();
export const LogoDisplayContext = createContext();
export const MenuSizeContext = createContext();
const Gsap = gsap;



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
  const [work_setLI_size, work_setsvgFramePackSize, work_styleLI, work_styleSvgFramePack, work_changeHierarchySvgFramePack, work_hookTest] = useMenuSize('work');
  const [skill_setLI_size, skill_setsvgFramePackSize, skill_styleLI, skill_styleSvgFramePack, skill_changeHierarchySvgFramePack, skill_hookTest] = useMenuSize('skill');
  const [paint_setLI_size, paint_setsvgFramePackSize, paint_styleLI, paint_styleSvgFramePack,  paint_changeHierarchySvgFramePack, paint_hookTest] = useMenuSize('paint');
  const [info_setLI_size, info_setsvgFramePackSize, info_styleLI, info_styleSvgFramePack, info_changeHierarchySvgFramePack, info_hookTest] = useMenuSize('info');

  // const [svgFrameValues, setSvgFrameValues] = useState({ svgValues:"none", set:"none"});
  const [svgFrameValues, setSvgFrameValues] = useState({svgFrameDefault:undefined, radius:undefined, wavyPath:undefined, extraSpace:undefined, strokeWidth:{rect:'0px',wavy:'0px'}});
  const svgFrameValuesImmutable = useRef({x:0, y:0, rx:5, ry:5, multiply:3, scale:1, speed:[2,3], fill:'none'})
  // let _svgFrameValues = {x:0, y:0, border:5, multiply:3, scale:1, speed:[2,3], fill:'none', radius:undefined, wavyPath:undefined, extraSpace:undefined, _menuExtended.current: false};
  // const svgFrameValuesRef = useRef({radius:undefined, wavyPath:undefined, extraSpace:undefined, _menuExtended.current: false});
  const extendingRequestAnimRef = useRef();
  const wavyAnimTL = useRef(null);
  const biggerElem = useRef(null);
  const biggerElemRect = useRef(null);
  const biggeredElem = useRef(null);
  const menuExtended = useRef(false);

  const demoRef = useRef(null);
  const logoRef = useRef(null);
  
  const menuValues = useRef([{id:"work",  order:1, svgFrameStopColor1:"#ff3b29", svgFrameStopColor2:"#ff8c34", strokeColor1:"#ff3b29", strokeColor2:"#ff8c34"},
                            {id:"skill", order:2, svgFrameStopColor1:"#cd4dff", svgFrameStopColor2:"#ff4179", strokeColor1:"#cd4dff", strokeColor2:"#ff4179"},
                            {id:"paint", order:3, svgFrameStopColor1:"#ffa934", svgFrameStopColor2:"#30ab98", strokeColor1:"#ffa934", strokeColor2:"#30ab98"},
                            {id:"info",   order:4, svgFrameStopColor1:"#ff6ee2", svgFrameStopColor2:"#5cd3ff", strokeColor1:"#ff6ee2", strokeColor2:"#5cd3ff"}
                          ]);
  
  let demoVideoHeight;
  let mobileMode, _mobileMode;
  let widerMode, _widerMode;
  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  

  
  useEffect(()=>{
    console.log(wavyAnimTL)
  },[wavyAnimTL])
  useEffect(()=>{
  //   console.log('working')
  //   work_hookTest('custom hook is testing')
  //   skill_hookTest('what is wrong with you?')
    

    mobileMode = innerWidth <= 800 ? true : false; 
    widerMode = innerWidth >= 1400 ? true : false; 
    _mobileMode = mobileMode;
    _widerMode = widerMode;
  
    homeGsapSet(menuExtended.current, true);
    updateSvgFrameValues();
  },[])


  const updateSvgFrameValues = useCallback(()=>{
    console.log('updateSvgFrameValues is calling')
    let _radius = innerWidth > 800 ? ( innerWidth > 1400 ? 9 : 7 ) : 5;
    let _wavyPath = Math.abs((innerWidth - innerWidth )) * 0.01 + 25;
    let _strokeWidth =  innerWidth > 800 ? ( innerWidth > 1400 ? {rect:"0.5rem",wavy:"0.7rem"} : {rect:"0.5vw",wavy:"1vw"} ) : {rect:"0.3rem",wavy:"0.5rem"};
    let _svgFrameDefault;
    
    if(innerWidth > 1400){
      _svgFrameDefault = TV.svgFrameDefaultSize1400;
    }else if(innerWidth > 800){
      _svgFrameDefault = TV.svgFrameDefaultSize;
    }else{
      if(menuExtended.current == false){
        _svgFrameDefault = TV.svgFrameDefaultSize800;
      }else{
        _svgFrameDefault = TV.svgFrameDefaultSizeSmallerSize;
      }
    }

    setSvgFrameValues({ ...svgFrameValues,
                      svgFrameDefault: {width:_svgFrameDefault,  height:_svgFrameDefault},
                      radius: _radius,
                      wavyPath: _wavyPath,
                      extraSpace: _radius * 5,
                      strokeWidth: _strokeWidth})     
  },[])

  useEffect(()=>{
    if(svgFrameValues.radius !== undefined){
      if(menuExtended.current){
        console.log('menuExtended.current: ',menuExtended.current)
        menuValues.current.forEach((value)=>{
          if(biggerElem.current.parentElement.id === value.id){
            eval(biggerElem.current.parentElement.id + "_changeHierarchySvgFramePack")(svgFrameValues, {width:"100%", height:"100%"});
          }else{
            eval(value.id + "_changeHierarchySvgFramePack")(svgFrameValues);
          }
        })
      }else{
        console.log('else', menuValues.current.length)
        menuValues.current.forEach((value)=>{
          eval(value['id'] + "_changeHierarchySvgFramePack")(svgFrameValues);
        });
      }
    }
  },[svgFrameValues])

    useEffect(()=>{

      const updateResize = () =>{
        _mobileMode = innerWidth <= 800 ? true : false; 
        _widerMode = innerWidth >= 1400 ? true : false;

        homeGsapSet(menuExtended.current, mobileMode !== _mobileMode)

        if( menuExtended.current ) {
          biggerElemRect.current.setAttributeNS(null, "width" , biggerElem.current.clientWidth);
          biggerElemRect.current.setAttributeNS(null, "height", biggerElem.current.clientHeight);
        }
        // if( menuExtended.current ) {console.log('<<<<<<<<<<');work_changeHierarchySvgFramePack(svgFrameValues,{width:"100%",height:"100%"});}

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
   

  // function remainExtendingMenu(){
  //   menuValues.current.forEach((value, i)=>{
  //     if(biggerElem.current.parentElement.id === menuValues[i].id){
  //       eval(biggerElem.current.parentElement.id + "_changeHierarchySvgFramePack")(svgFrameValues, "100%");
  //     }else{
  //       eval(menuValues[i] + "_changeHierarchySvgFramePack")(svgFrameValues);
  //     }
  //   })
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

    
  const callToUnSymetryEachMenu = useCallback((extendingSize, elemParentId)=>{
    return new Promise((resolve, reject)=>{  
      const NF = TV['menuDuration']*60;
      
      let f = 0;
      let dir = 1;
      
      extendingSize.LI.forEach((obj)=>{
        eval(obj['elemId'] + "_setLI_size")({width:obj.width, height:obj.height});
      })
      eval(elemParentId + "_changeHierarchySvgFramePack")(svgFrameValues, extendingSize['svgFramePackage']);


      function anim(){
        f += dir;
        console.log('f',f)
        biggerElemRect.current.setAttributeNS(null, "width" , biggerElem.current.clientWidth);
        biggerElemRect.current.setAttributeNS(null, "height", biggerElem.current.clientHeight);

        extendingRequestAnimRef.current = requestAnimationFrame(anim);

        if(!(f % NF)){
          console.log("=======finished=======");
          // onAnim = false;
          eval(elemParentId + "_changeHierarchySvgFramePack")(svgFrameValues, {width:"100%",height:"100%"});
          cancelAnimationFrame(extendingRequestAnimRef.current);
          resolve();
        }
      }
      anim();
    })
  },[svgFrameValues])

  function test(){
    console.log('test is working!!')
  }
  
   const createWavyAnimation = useCallback((id, extendingSize)=>{
    return new Promise((resolve,reject)=>{
      if(window.innerWidth > 800){
        console.log('createWavyAnimation is working');
        let dataPoints, points1, points2, pointsTween1, pointsTween2;
        const wavyPath1 = document.getElementById(id + 'SvgWavy1');
        const wavyPath2 = document.getElementById(id + 'SvgWavy2');

        if(svgFrameValues.wavyPath > extendingSize['svgFramePackage'] / 2){
          return setSvgFrameValues({...svgFrameValues, w: extendingSize['svgFramePackage']/2})
        }
      
        
        if (wavyAnimTL.current === null) {
          wavyAnimTL.current = Gsap.timeline({
            onUpdate: update
          });
        } else {
          wavyAnimTL.current.resume();
        }

        dataPoints = getDataPoints(extendingSize, svgFrameValues);

      
        points1 = dataPoints.points1;
        points2 = dataPoints.points2;
    
        pointsTween1 = dataPoints.pointsTween1;
        pointsTween2 = dataPoints.pointsTween2;
        
    
        for (let i = 0; i < points1.length; i++) {
          let duration = random(svgFrameValues["speed"][0], svgFrameValues["speed"][1]);
    
    
          let tween1 = Gsap.to(points1[i], {
            duration: duration,
            x: pointsTween1[i].x,
            y: pointsTween1[i].y,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
          });
    
          let tween2 = Gsap.to(points2[i], {
            duration: duration,
            x: pointsTween2[i].x,
            y: pointsTween2[i].y,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
          });
          
    
          wavyAnimTL.current.add(tween1, -random(duration))
          wavyAnimTL.current.add(tween2, -random(duration))
        }
        

        function update() {
          wavyPath1.setAttribute('d', tweenCardinal(points1, true, 1));
          wavyPath2.setAttribute('d', tweenCardinal(points2, true, 1));
        }
    
  
        console.log('done wavy animation');
        }
      resolve();
    })
  },[svgFrameValues]);

  const extendMenu = useCallback((elem, order=0)=>{
    const elemParentId = elem.parentElement.id;

  //   if(!activeClick){
  //     activeClick = true;

      if(menuExtended.current === false){
        console.log('if')
        menuExtended.current = true;
        biggerElem.current = elem;
        biggerElemRect.current = document.getElementById(elemParentId+"SvgFrame");
        console.log('menuExtended.current turn to true')
  
        demoVideoHeight = getDemoVideoHeight(menuExtended.current);
        let extendingSize = transformToUnSymetryEachMenu(demoVideoHeight, elem, order);


        
        

        Promise.all([
          homeGsapTransition(menuExtended.current),
          logoDisplayDispatch({ demoClientHeight: demoRef.current.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
          document.getElementById(elemParentId + 'SvgFrame').setAttributeNS(null, 'stroke', 'url(#SvgIvory)'),
          // svgFrameRef.extendMenuIf(demoVideoHeight),
          callToUnSymetryEachMenu(extendingSize, elemParentId)
          // test()
        ]).then(()=>{
          // createWavyAnimation(elemParentId, extendingSize['svgFramePackage'])
          // disableClick()
        })
        
        
  
  
      }else if( biggerElem !== elem && svgFrameRef !== null){
  //       console.log('else if')
  //       biggeredElem = biggerElem;
  //       biggerElem = elem;
  
      
      
      }else{
  //       if( menuExtended.current ){
  //         menuExtended.current = false;
  //         biggeredElem = null;
  //         biggerElem = null;
    
  //         demoVideoHeight = getDemoVideoHeight(menuExtended.current)
  //         console.log('svgFrameValues====> ',svgFrameValues)
    
  //         Promise.all([
  //           utilityMenuIf(menuExtended.current),
  //           logoDisplayDispatch({ demoClientHeight: demo.clientHeight, logoClientWidth: innerWidth  * (100 - TV.symetryDemoMenu) / 100 * TV.logoWidth / 100}),
  //           test()
  //         ]).then(()=>{
  //           disableClick()
  //         })
  //       }
      
  
  //     }
    }
  },[svgFrameValues]) 

 
   return useMemo(()=>{
    return <div id = "master" >
            <ExtendMenuContext.Provider value={extendMenu}>
              <LogoDisplayContext.Provider  value={{logoDisplay, logoDisplayDispatch}}> 
                <MenuSizeContext.Provider  value={{work_styleLI, skill_styleLI, paint_styleLI, info_styleLI, work_styleSvgFramePack, skill_styleSvgFramePack, paint_styleSvgFramePack, info_styleSvgFramePack}}>
                  <HomeLayoutRender refs={{demoRef, logoRef}} menuValues={menuValues.current} values={svgFrameValuesImmutable.current}/>
                </MenuSizeContext.Provider>
              </LogoDisplayContext.Provider>
            </ExtendMenuContext.Provider>
    </div>
  },[logoDisplay, work_styleLI, work_styleSvgFramePack, skill_styleSvgFramePack, paint_styleSvgFramePack, info_styleSvgFramePack]);
} 
function HomeLayoutRender(props){
  console.log('--------------HomeLayoutRender-----------------')
  return (
    <>
      <Demo refs={props.refs}/>
      <Menu menuValues={props.menuValues} values={props.values}/>
    </>
  )
}
export default HomeLayout