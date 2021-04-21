import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef, useMemo} from "react"
// import gsap from 'gsap';
import TV, { convertToPix } from '../public/assets/js/transitionValue'
import useMenuSize from "../hooks/useMenuSize";
import { homeGsapSet, getDemoVideoHeight, homeGsapTransition, transformToUnSymetryEachMenu, tweenCardinal, getDataPoints, random, addCSSmenutransition} from '../public/assets/js/utilities.js'
import {gsap, Sine} from 'gsap';


export const ExtendMenuContext = createContext();
export const LogoDisplayContext = createContext();
export const MenuSizeContext = createContext();
export const DisableClickContext = createContext();



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
const disableClickReducer = (state, action)=>{
  switch(action){
    case "enable":
      false; break;
    case "disable":
      true;  break;
    default:
      state;
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
  
  // const [wavyAnimTL,setWavyAnimTL] = useState(null);
  // const wavyAnimTL = useRef(null);
  const biggerElem = useRef(null);
  const biggeredElem = useRef(null);
  const menuExtended = useRef(false);

  const demoRef = useRef(null);
  const logoRef = useRef(null);

  const mobileMode = useRef(null);
  const _mobileMode = useRef(null);
  const widerMode = useRef(null);
  const _widerMode = useRef(null);

  const wavyPointsRef = useRef();

  
  const menuValues = useRef([{id:"work",  order:1, stopColor:["#ff3b29","#ff8c34"], strokeColor:["#ff3b29","#ff8c34"]},
                            {id:"skill", order:2, stopColor:["#cd4dff","#ff4179"], strokeColor:["#cd4dff","#ff4179"]},
                            {id:"paint", order:3, stopColor:["#ffa934","#30ab98"], strokeColor:["#ffa934","#30ab98"]},
                            {id:"info",   order:4, stopColor:["#ff6ee2","#5cd3ff"], strokeColor:["#ff6ee2","#5cd3ff"]}
                          ]);
  const allElems = useRef();                      
  

  let demoVideoHeight;
  // let mobileMode, _mobileMode;
  // let widerMode, _widerMode;
  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});
  const [disableClick, disableClickDispatch] = useReducer(logoDisplayReducer,'disable');
  

  

  useEffect(()=>{
  //   console.log('working')
  //   work_hookTest('custom hook is testing')
  //   skill_hookTest('what is wrong with you?')
    
    mobileMode.current = innerWidth <= 800 ? true : false; 
    widerMode.current = innerWidth >= 1400 ? true : false; 
    _mobileMode.current = mobileMode.current;
    _widerMode.current = widerMode.current;

    allElems.current = menuValues.current.map((elem)=>{
      return document.getElementById(elem.id);
    })
  
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
        menuValues.current.forEach((elem)=>{
          if(biggerElem.current.parentElement.id !== elem.id){
            eval(elem.id + "_changeHierarchySvgFramePack")(svgFrameValues);
          }
        })
      }else{
        console.log('else', menuValues.current.length)
        menuValues.current.forEach((elem)=>{
          eval(elem.id + "_changeHierarchySvgFramePack")(svgFrameValues);
        });
      }
    }
  },[svgFrameValues])

    useEffect(()=>{

      let updateResize = () =>{
        _mobileMode.current = innerWidth <= 800 ? true : false; 
        _widerMode.current = innerWidth >= 1400 ? true : false;

        homeGsapSet(menuExtended.current, mobileMode.current !== _mobileMode.current)

        if( menuExtended.current ) {
          console.log('resize is working')
          remainExtendingMenu();
          createWavyAnimation(biggerElem.current.parentElement.id, {width:biggerElem.current.clientWidth, height:biggerElem.current.clientHeight})
        }
        // if( menuExtended.current ) {console.log('<<<<<<<<<<');work_changeHierarchySvgFramePack(svgFrameValues,{width:"100%",height:"100%"});}

        if(mobileMode.current !== _mobileMode.current || widerMode.current !== _widerMode.current ){
          console.log('view is changing');
          updateSvgFrameValues();
        }

        
        if(mobileMode.current !== _mobileMode.current){
          console.log('changed')
          mobileMode.current = !mobileMode.current;
        }
        if(widerMode.current !== _widerMode.current){
          console.log('changed')
          widerMode.current = !widerMode.current;
        }
    }
      window.addEventListener('resize',updateResize);
      return ()=>{
        window.removeEventListener('resize',updateResize);
      }
    },[svgFrameValues])

  function remainExtendingMenu(){
    const rect = document.getElementById(biggerElem.current.parentElement.id+"SvgFrame");

    rect.setAttributeNS(null, "width" , biggerElem.current.clientWidth);
    rect.setAttributeNS(null, "height", biggerElem.current.clientHeight);
  }
  

 


  
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
      const rect = document.getElementById(elemParentId+"SvgFrame");
      
      let f = 0;
      let dir = 1;
      

      addCSSmenutransition(null, ...allElems.current);
      addCSSmenutransition(null, biggerElem.current);

      extendingSize.LI.forEach((obj)=>{
        eval(obj['elemId'] + "_setLI_size")({width:obj.width, height:obj.height});
      })
      eval(elemParentId + "_changeHierarchySvgFramePack")(svgFrameValues, extendingSize['svgFramePackage']);

      if(innerWidth < 800 ){
        const size = TV.svgFrameDefaultSizeSmallerSize;
        const childElems = allElems.current.map((e)=>e.firstElementChild);

        addCSSmenutransition(elemParentId, ...childElems);
        setSvgFrameValues({...svgFrameValues, svgFrameDefault:{width:size, height:size}})
        
        menuValues.current.forEach((elem)=>{
          if(biggerElem.current.parentElement.id !== elem.id){
            const rect = document.getElementById(elem.id+"SvgFrame");
            rect.setAttributeNS(null, "width" , size);
            rect.setAttributeNS(null, "height", size);
          }
        })
      }           
      

      function anim(){
        f += dir;
        rect.setAttributeNS(null, "width" , biggerElem.current.clientWidth);
        rect.setAttributeNS(null, "height", biggerElem.current.clientHeight);


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
      // let wavyAnimationTL = null;
     
      const wavyPath1 = document.getElementById(id + 'SvgWavy1');
      const wavyPath2 = document.getElementById(id + 'SvgWavy2');
      

      if(window.innerWidth > 800){
        let dataPoints, points1, points2, pointsTween1, pointsTween2;


        console.log('createWavyAnimation is working');
        

        if(svgFrameValues.wavyPath > extendingSize['width'] / 2){
          return setSvgFrameValues({...svgFrameValues, wavyPath: extendingSize['width']/2})
        }
      
        
        if (wavyAnimTL.current === null) {
          wavyAnimTL.current = gsap.timeline({
            onUpdate: update
          });
        } else {
          wavyAnimTL.current.resume();
        }
  
        
        
        dataPoints = getDataPoints(extendingSize, svgFrameValues, svgFrameValuesImmutable.current);

      
        wavyPointsRef.current = {points1 : dataPoints.points1, points2 : dataPoints.points2};

        pointsTween1 = dataPoints.pointsTween1;
        pointsTween2 = dataPoints.pointsTween2;


        for (let i = 0; i < wavyPointsRef.current.points1.length; i++) {
          let duration = random(svgFrameValuesImmutable.current["speed"][0], svgFrameValuesImmutable.current["speed"][1]);
  
          let tween1 = gsap.to(wavyPointsRef.current.points1[i], {
            duration: duration,
            x: pointsTween1[i].x,
            y: pointsTween1[i].y,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
          });
    
          let tween2 = gsap.to(wavyPointsRef.current.points2[i], {
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
          wavyPath1.setAttribute('d', tweenCardinal(wavyPointsRef.current.points1, true, 1));
          wavyPath2.setAttribute('d', tweenCardinal(wavyPointsRef.current.points2, true, 1));
        }
      
        return wavyAnimTL.current
      
      }else{
        if(wavyAnimTL!==null){
          if(!wavyAnimTL.current.paused()){
            wavyAnimTL.current = wavyAnimTL.current.pause()
            wavyPath1.setAttribute('d', "");
            wavyPath2.setAttribute('d', "");
          }
        }
      }
      resolve();
    })
  },[svgFrameValues,wavyAnimTL]);

  const extendMenu = useCallback((elem, order=0, textRef, contentRef)=>{
    const elemParentId = elem.parentElement.id;

  //   if(!activeClick){
  //     activeClick = true;

      if(menuExtended.current === false){
        console.log('if')
        menuExtended.current = true;
        biggerElem.current = elem;
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
          createWavyAnimation(elemParentId, extendingSize['svgFramePackage']);
          textRef.style.display = 'none';
          contentRef.style.display ='initial';
          contentRef.style.zIndex =3;
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
                  <DisableClickContext.Provider  value={{disableClick, disableClickDispatch}}>
                    <HomeLayoutRender refs={{demoRef, logoRef}} menuValues={menuValues.current} values={svgFrameValuesImmutable.current}/>
                  </DisableClickContext.Provider>
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


