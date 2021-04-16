import { useContext, useRef, useEffect, memo, useMemo, useCallback} from 'react';
import SvgFrame from './SvgFrame.jsx';
import {gsap, sine} from 'Gsap';
const Gsap = gsap;

import { ExtendMenuContext } from '../HomeLayout.jsx';
import { MenuSizeContext } from '../HomeLayout.jsx';
import { useState } from 'react/cjs/react.development';


function MenuComponent (props){
    console.log('---MenuComponent---')
  
    const extendMenuContext = useContext(ExtendMenuContext);
    const menuSizeContext = useContext(MenuSizeContext);
    const svgFrameRef = useRef()
  


    function onClick(e){
      extendMenuContext(e.currentTarget, props.values.order, svgFrameRef);
    }
    
  
    return useMemo(()=>{
      return <MenuComponentRender values={props.values} menuSizeContext={menuSizeContext} onClick={onClick} svgFrameRef={svgFrameRef}></MenuComponentRender>
    },[menuSizeContext[props.values.id+"_styleLI"],menuSizeContext[props.values.id+"_styleSvgFramePack"].style_svgFramePack ])
  }


  function MenuComponentRender(props){
    console.log('---------MenuComponentRender---------',props.values.svgFrameStopColor1, props.values.svgFrameStopColor2)
    const stopColor = useRef({stop1:props.values.svgFrameStopColor1, stop2:props.values.svgFrameStopColor2})
    const noen1Ref = useRef(null)
    const noen2Ref = useRef(null)
  
    const neonOnTL = useState( Gsap.timeline({paused:false}).fromTo(stopColor.current,{
                                                            stop1: props.values.svgFrameStopColor1,
                                                            stop2: props.values.svgFrameStopColor2
                                                          },{
                                                            stop1: 'rgb(254,246,222)',
                                                            stop2: 'rgb(254,246,222)',
                                                            duration:0.6,
                                                            ease: "Sine.inOut"
                                                          },0)
                                                          );
                                                          
    const mouseEnterHandler = useCallback(()=>{
      console.log('on',neonOnTL)
      // neonOnTL.current.play();
      console.log(neonOnTL)
      // noen1Ref.classList.add(`${props.values.id}Neon1`)
      // noen1Ref.classList.add(`${props.values.id}Neon1`)
    },[])
    const mouseLeaveHandler = useCallback(()=>{
      console.log('off')
      // neonOnTL.reverse();
    },[])


    return(
        <li id={props.values.id} style = {props.menuSizeContext[props.values.id+"_styleLI"]} > 
                <div className="svgFramePack" onClick={props.onClick} ref={props.svgFrameRef} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} style = { props.menuSizeContext[props.values.id+"_styleSvgFramePack"].style_svgFramePack}>
                    <div className="menuText">{props.values.id.toUpperCase()}</div>
                    <div className="neon neon1" ref={noen1Ref}></div>
                    <div className="neon neon2" ref={noen2Ref}></div>
                    <SvgFrame 
                      id={props.values.id} 
                      ivory={props.values.ivory}
                      svgFrameStopColor1={stopColor.current.stop1}
                      svgFrameStopColor2={stopColor.current.stop2}
                      strokeColor1={props.values.strokeColor1}
                      strokeColor2={props.values.strokeColor2}
                      styleContext={props.menuSizeContext[props.values.id+"_styleSvgFramePack"] }
                      svgFrameValuesImmutable = {props.values.svgFrameValuesImmutable}
                    />
                </div>
                <div className="contents">
                    {props.values.contents}
                </div>
              </li>
        // <div></div>
    )
  }

  export default MenuComponent