import Demo from './Demo.jsx'
import Menu from './Menu.jsx'
// import Astronaut from './Astronaut.jsx'
import {createContext, useEffect, useState, useContext, useReducer, memo, useCallback, useRef, useMemo} from "react"
// import gsap from 'gsap';
import TV, { convertToPix } from '../public/assets/js/transitionValue'
import useMenuSize from "../hooks/useMenuSize";
import { homeGsapSet, getDemoVideoHeight, homeGsapTransition, getValuesToUnSymetryEachMenu, tweenCardinal, getDataPoints, random, addCSSmenutransition} from '../public/assets/js/utilities.js'
import astronaut,{callAstronaut} from '../public/assets/js/astronaut.js'
import {gsap, Sine} from 'gsap';


export const ExtendMenuContext = createContext();
export const LogoDisplayContext = createContext();
export const MenuSizeContext = createContext();
export const ClickContext = createContext();
export const ClickAfterContext = createContext();



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

  const [clickContext,setClickContext] = useState({on:false, bigger:null, biggered:null});
  const [clickAfterContext,setClickAfterContext] = useState(null);
  const clickRef = useRef({onAnim:false, active:true, menuExtended:false, biggerElemParentId:null, biggerElem:null, biggerElemRect:null, biggerNeonRefs:[], biggeredElem:null, biggeredElemParentId:null, biggeredElemRect:null, wavyPath:[]});

  const extendingRequestAnimRef = useRef(null);
  const wavyAnim = useRef({TL:null, points:null});

  const demoRef = useRef(null);
  const logoRef = useRef(null);

  const mobileMode = useRef(null);
  const _mobileMode = useRef(null);
  const widerMode = useRef(null);
  const _widerMode = useRef(null);

  // const wavyAnim.current.points useRef();

  


  const menuValues = useRef([{id:"work",  order:1, stopColor: ["rgb(220, 51, 35)","rgb(212, 116, 43)"], strokeColor:["#ff3b29", "#ff8c34"]},
                            {id:"skill", order:2, stopColor: ["rgb(168, 63, 209)","rgb(192, 49, 91)"], strokeColor:["#cd4dff", "#ff4179"]},
                            {id:"paint", order:3, stopColor: ["rgb(225, 149, 46)","rgb(48, 171, 152)"], strokeColor:["#ffa934", "#30ab98"]},
                            {id:"info",   order:4, stopColor: ["rgb(200, 86, 177)","rgb(75, 173, 209)"], strokeColor:["#ff6ee2", "#5cd3ff"]}
                          ]);
  const allElems = useRef();                      
  
  let demoVideoHeight;
  // let mobileMode, _mobileMode;
  // let widerMode, _widerMode;
  
  
  const [logoDisplay, logoDisplayDispatch] = useReducer(logoDisplayReducer,{logo_heigher:'none', logo_wider:'none'});

  

  

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

    // astronaut();
    homeGsapSet(clickRef.current.menuExtended, true);
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
      if(clickRef.current.menuExtended == false){
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
      if(clickRef.current.menuExtended){
        menuValues.current.forEach((elem)=>{
          if(clickRef.current.biggerElemParentId !== elem.id){
            eval(elem.id + "_changeHierarchySvgFramePack")(svgFrameValues);
          }
        })
      }else{
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

      
      homeGsapSet(clickRef.current.menuExtended, mobileMode.current !== _mobileMode.current)

      if( clickRef.current.menuExtended ) {
        console.log('resize is working')
        remainExtendingMenu();
        createWavyAnimation({width:clickRef.current.biggerElem.clientWidth, height:clickRef.current.biggerElem.clientHeight})
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

  const remainExtendingMenu = useCallback(()=>{
    // const rect = document.getElementById(biggerElem.current.parentElement.id+"SvgFrame");

    clickRef.current.biggerElemRect.setAttributeNS(null, "width" , clickRef.current.biggerElem.clientWidth);
    clickRef.current.biggerElemRect.setAttributeNS(null, "height", clickRef.current.biggerElem.clientHeight);
  },[])


  
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

  // -----   the reason I put svgFrameValue as an argument, not just using svgFrameValue as a Ref,
  // ----- is I don't want to rerender all this functions whenever svgFrameValues changes.
  const transformAllEachMenus = useCallback((_svgFrameValues, extendingSize, elemParentId)=>{
    return new Promise((resolve, reject)=>{  
      const NF = TV['menuDuration']*60;
      
      let f = 0;
      let dir = 1;

      addCSSmenutransition(null, ...allElems.current);
      extendingSize.LI.forEach((obj)=>{
        eval(obj['elemId'] + "_setLI_size")({width:obj.width, height:obj.height});
      })
  
      if(clickRef.current.biggerElem !== null){
        addCSSmenutransition(null, clickRef.current.biggerElem);
        eval(elemParentId + "_changeHierarchySvgFramePack")(_svgFrameValues, extendingSize['svgFramePackage']);
      }

      if(clickRef.current.biggeredElemParentId !== null){
        addCSSmenutransition(null, clickRef.current.biggeredElem);
        eval(clickRef.current.biggeredElemParentId + "_changeHierarchySvgFramePack")(_svgFrameValues,{width:_svgFrameValues.svgFrameDefault.width, height:_svgFrameValues.svgFrameDefault.height})
      }



      if(innerWidth < 800 ){
        const size = clickRef.current.biggerElem !== null ? TV.svgFrameDefaultSizeSmallerSize : _svgFrameValues['svgFrameDefault'];
        const childElems = allElems.current.map((e)=>e.firstElementChild);

        addCSSmenutransition(elemParentId, ...childElems);
        
        menuValues.current.forEach((elem)=>{
          if(clickRef.current.biggerElemParentId !== elem.id){
            const rect = document.getElementById(elem.id+"SvgFrame");

            eval(elem.id + "_changeHierarchySvgFramePack")(_svgFrameValues,{width:size, height:size});
            
            rect.setAttributeNS(null, "width" , size);
            rect.setAttributeNS(null, "height", size);
          }
        })
      }           


      function anim(){
        f += dir;
        if(clickRef.current.biggerElem !== null){
          clickRef.current.biggerElemRect.setAttributeNS(null, "width" , clickRef.current.biggerElem.clientWidth);
          clickRef.current.biggerElemRect.setAttributeNS(null, "height", clickRef.current.biggerElem.clientHeight);
        }

        if(clickRef.current.biggeredElemParentId !== null){
          clickRef.current.biggeredElemRect.setAttributeNS(null, "width" , clickRef.current.biggeredElem.clientWidth);
          clickRef.current.biggeredElemRect.setAttributeNS(null, "width" , clickRef.current.biggeredElem.clientWidth);
        }
        extendingRequestAnimRef.current = requestAnimationFrame(anim);

        if(!(f % NF)){
          console.log("=======finished=======");
          // onAnim = false;
          if(clickRef.current.biggerElem !== null) eval(elemParentId + "_changeHierarchySvgFramePack")(_svgFrameValues, {width:"100%",height:"100%"});
          else eval(elemParentId + "_changeHierarchySvgFramePack")(_svgFrameValues, {width: _svgFrameValues['svgFrameDefault'],height: _svgFrameValues['svgFrameDefault']});

          cancelAnimationFrame(extendingRequestAnimRef.current);
          console.log('resolve?')
          resolve();
        }
      }
      anim();
    })
  },[])
  

  
  const createWavyAnimation = useCallback((extendingSize)=>{
    console.log('createWavyAnimation is working');
    return new Promise((resolve,reject)=>{

      if(window.innerWidth > 800){
        let dataPoints, pointsTween1, pointsTween2;

        if(svgFrameValues.wavyPath > extendingSize['width'] / 2){
          return setSvgFrameValues({...svgFrameValues, wavyPath: extendingSize['width']/2})
        }
      
        
        if (wavyAnim.current.TL === null) {
          wavyAnim.current.TL = gsap.timeline({
            onUpdate: update
          });
        } else {
          wavyAnim.current.TL.resume();
        }
  
        dataPoints = getDataPoints(extendingSize, svgFrameValues, svgFrameValuesImmutable.current);
      
        wavyAnim.current.points = {points1 : dataPoints.points1, points2 : dataPoints.points2};

        pointsTween1 = dataPoints.pointsTween1;
        pointsTween2 = dataPoints.pointsTween2;

        for (let i = 0; i < wavyAnim.current.points.points1.length; i++) {
          let duration = random(svgFrameValuesImmutable.current["speed"][0], svgFrameValuesImmutable.current["speed"][1]);
  
          let tween1 = gsap.to(wavyAnim.current.points.points1[i], {
            duration: duration,
            x: pointsTween1[i].x,
            y: pointsTween1[i].y,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
          });
    
          let tween2 = gsap.to(wavyAnim.current.points.points2[i], {
            duration: duration,
            x: pointsTween2[i].x,
            y: pointsTween2[i].y,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
          });

          wavyAnim.current.TL.add(tween1, -random(duration))
          wavyAnim.current.TL.add(tween2, -random(duration))

        }
        
        function update() {
          clickRef.current.wavyPath[0].setAttribute('d', tweenCardinal(wavyAnim.current.points.points1, true, 1));
          clickRef.current.wavyPath[1].setAttribute('d', tweenCardinal(wavyAnim.current.points.points2, true, 1));
        }
      
        return wavyAnim.current.TL
      
      }else{
        if(wavyAnim.current.TL !== null){
          if(!wavyAnim.current.TL.paused()){
            wavyAnim.current.TL = wavyAnim.current.TL.pause()
            clickRef.current.wavyPath[0].setAttribute('d', "");
            clickRef.current.wavyPath[1].setAttribute('d', "");
          }
        }
      }
      resolve();
    })
  },[svgFrameValues]);

  // useEffect(()=>{setClickAfterContext('skill');},[])

  const extendMenu = useCallback((elem, order=0, textRef, contentRef, neonRefs)=>{
    console.log('elem', elem)
    const elemParentId = elem.parentElement.id;

    if(clickRef.current.onAnim===true){
      return;
    }else{
      if( clickRef.current.menuExtended=== false){
        
        clickRef.current.onAnim=true;
        setClickContext({on:true, bigger:elemParentId , biggered:null})
        clickRef.current.menuExtended=true;
        clickRef.current.biggerElemParentId=elemParentId; 
        clickRef.current.biggerElem=elem;
        clickRef.current.biggerElemRect=document.getElementById(elemParentId+"SvgFrame"),
        clickRef.current.wavyPath= [document.getElementById(elemParentId + 'SvgWavy1'), document.getElementById(elemParentId + 'SvgWavy2')];
        clickRef.current.textRef = textRef;
        clickRef.current.contentRef = contentRef;
        clickRef.current.biggerNeonRefs = neonRefs;

    
      

        demoVideoHeight = getDemoVideoHeight(clickRef.current.menuExtended);
        let extendingSize = getValuesToUnSymetryEachMenu(demoVideoHeight, elem, order);
        console.log('extendingSize',extendingSize)

        Promise.all([
          homeGsapTransition(clickRef.current.menuExtended),
          logoDisplayDispatch({ demoClientHeight: demoRef.current.clientHeight, logoClientWidth: innerWidth * (100 - TV.unSymetryDemoMenu) / 100 * TV.logoWidth / 100}),
          clickRef.current.biggerElemRect.setAttributeNS(null, 'stroke', 'url(#SvgIvory)'),
          // svgFrameRef.extendMenuIf(demoVideoHeight),
          transformAllEachMenus(svgFrameValues, extendingSize, elemParentId),
          // callAstronaut(elemParentId)
          // // test()
        ]).then(()=>{
          createWavyAnimation(extendingSize['svgFramePackage']);
          textRef.style.display = 'none';
          contentRef.style.display ='initial';
          contentRef.style.zIndex =3;
          setClickAfterContext(elemParentId);
          // disableClick()
        }).then(()=>{
          clickRef.current.onAnim =false;
        })
        
        
  
  
      }else if( clickRef.current.biggerElemParentId !== elemParentId){
        console.log('else if');
        const biggeredWavyPath = clickRef.current.wavyPath;
        const biggeredText = clickRef.current.textRef;
        const biggeredContentRef = clickRef.current.contentRef;
        const biggeredNeonRefs = clickRef.current.biggerNeonRefs;

        clickRef.current.onAnim=true;
        setClickContext({on:true, bigger:elemParentId , biggered:clickRef.current.biggerElemParentId});
        clickRef.current.biggeredElem = clickRef.current.biggerElem;
        clickRef.current.biggeredElemParentId = clickRef.current.biggerElemParentId;
        clickRef.current.biggeredElemRect= clickRef.current.biggerElemRect;
        clickRef.current.biggerElem = elem;
        clickRef.current.biggerElemParentId = elemParentId; 
        clickRef.current.biggerElem = elem;
        clickRef.current.biggerElemRect = document.getElementById(elemParentId+"SvgFrame");
        clickRef.current.wavyPath = [document.getElementById(elemParentId + 'SvgWavy1'), document.getElementById(elemParentId + 'SvgWavy2')]
        clickRef.current.textRef = textRef;
        clickRef.current.contentRef = contentRef;
        clickRef.current.biggerNeonRefs = neonRefs;

        
  
        demoVideoHeight = getDemoVideoHeight(clickRef.current.menuExtended);
        let extendingSize = getValuesToUnSymetryEachMenu(demoVideoHeight, elem, order);


        wavyAnim.current.TL.pause(0);
        
        Promise.all([
          biggeredWavyPath[0].setAttribute('d',''),
          biggeredWavyPath[1].setAttribute('d',''),
          clickRef.current.biggeredElemRect.setAttributeNS(null, 'stroke', `url(#${clickRef.current.biggeredElemParentId}SvgFrameStopColor)`),
          clickRef.current.biggerElemRect.setAttributeNS(null, 'stroke', 'url(#SvgIvory)'),
          transformAllEachMenus(svgFrameValues, extendingSize, elemParentId),
          biggeredText.style.display = 'initial',
          biggeredContentRef.style.display = 'none',
          biggeredContentRef.style.zIndex = -1,
          biggeredNeonRefs[0].style.visibility = 'hidden',
          biggeredNeonRefs[1].style.visibility = 'hidden',
          // callAstronaut(elemParentId)
          // // test()
        ]).then(()=>{
          createWavyAnimation(extendingSize['svgFramePackage']);
          textRef.style.display = 'none';
          contentRef.style.display ='initial';
          contentRef.style.zIndex =3;
          biggeredNeonRefs[0].style.visibility = 'visible';
          biggeredNeonRefs[1].style.visibility = 'visible';
          setClickAfterContext(elemParentId);
        }).then(()=>{
          clickRef.current.onAnim =false;
        })
        
      }else{
        console.log('else');
        const biggeredWavyPath = clickRef.current.wavyPath;
        const biggeredText = clickRef.current.textRef;
        const biggeredContentRef = clickRef.current.contentRef;
        const biggeredNeonRefs = clickRef.current.biggerNeonRefs;

        clickRef.current.onAnim=true;
        setClickContext({on:false, bigger:null , biggered:null});
        clickRef.current.biggeredElem = clickRef.current.biggerElem;
        clickRef.current.biggeredElemParentId = clickRef.current.biggerElemParentId;
        clickRef.current.biggeredElemRect= clickRef.current.biggerElemRect;
        clickRef.current.biggerElem = null;
        clickRef.current.menuExtended = false;


        let extendingSize = {LI:[{elemId:"work", width:"50%", height:"50%"},
                                 {elemId:"skill", width:"50%", height:"50%"},
                                 {elemId:"paint", width:"50%", height:"50%"},
                                 {elemId:"info", width:"50%", height:"50%"}]};


        wavyAnim.current.TL.pause(0);
        
        Promise.all([
          homeGsapTransition(clickRef.current.menuExtended),
          logoDisplayDispatch({ demoClientHeight: demoRef.current.clientHeight, logoClientWidth: innerWidth * (100 - TV.symetryDemoMenu) / 100 * TV.logoWidth / 100}),
          biggeredWavyPath[0].setAttribute('d',''),
          biggeredWavyPath[1].setAttribute('d',''),
          clickRef.current.biggeredElemRect.setAttributeNS(null, 'stroke', `url(#${clickRef.current.biggeredElemParentId}SvgFrameStopColor)`),
          transformAllEachMenus(svgFrameValues, extendingSize, elemParentId),
          biggeredText.style.display = 'initial',
          biggeredContentRef.style.display = 'none',
          biggeredContentRef.style.zIndex = -1,
          biggeredNeonRefs[0].style.visibility = 'hidden',
          biggeredNeonRefs[1].style.visibility = 'hidden',
          // callAstronaut(elemParentId)
        ]).then(()=>{
          clickRef.current = {onAnim:false, active:true, menuExtended:false, biggerElemParentId:null, biggerElem:null, biggerElemRect:null, biggerNeonRefs:[], biggeredElem:null, biggeredElemParentId:null, biggeredElemRect:null, wavyPath:[]};
        })
    }

      
    }
  },[svgFrameValues ]) 

 
   return useMemo(()=>{
    return <div id = "master" >
            <ExtendMenuContext.Provider value={extendMenu}>
              <LogoDisplayContext.Provider  value={{logoDisplay, logoDisplayDispatch}}> 
                <MenuSizeContext.Provider  value={{work_styleLI, skill_styleLI, paint_styleLI, info_styleLI, work_styleSvgFramePack, skill_styleSvgFramePack, paint_styleSvgFramePack, info_styleSvgFramePack}}>
                  <ClickContext.Provider value = {clickContext}>
                    <ClickAfterContext.Provider value = {clickAfterContext}>
                      <HomeLayoutRender vals={{refs:{demoRef, logoRef}, menuValues:menuValues.current, svgFrameValuesImmutable:svgFrameValuesImmutable.current, clickContext:clickContext}}/>
                    </ClickAfterContext.Provider>
                  </ClickContext.Provider>
                </MenuSizeContext.Provider>
              </LogoDisplayContext.Provider>
            </ExtendMenuContext.Provider>
    </div>
  },[logoDisplay, work_styleLI, work_styleSvgFramePack, skill_styleSvgFramePack, paint_styleSvgFramePack, info_styleSvgFramePack, clickContext, clickAfterContext]);
} 

function HomeLayoutRender(props){
  console.log('--------------HomeLayoutRender-----------------')
  return (
    <>
      <Demo refs={props.vals.refs}/>
      <Menu vals={{menuValues:props.vals.menuValues, 
                   svgFrameValuesImmutable:props.vals.svgFrameValuesImmutable}}/>
                   <div id="threeJSCanvas"></div>
      {/* <Astronaut vals={{astronautActions: props.vals.refs.astronautActions, cameraRef:props.vals.refs.cameraRef}}/> */}
    </>
  )
}
export default HomeLayout


