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

    const menuExtended = useRef(false)

    const svgFrameRef = useRef();
    const noen1Ref = useRef(null);
    const noen2Ref = useRef(null);
    const stopColor1Ref = useRef(null);
    const stopColor2Ref = useRef(null);

    const neonOnTL = useRef();
    useEffect(()=>{
      neonOnTL.current = Gsap.timeline({paused:true}).fromTo(stopColor1Ref.current,{
                                                        stopColor: props.values.stopColor[0]
                                                      },{
                                                        stopColor: 'rgb(254,246,222)',
                                                        duration:0.6,
                                                        ease: "Sine.inOut"
                                                      },0)
                                                      .fromTo(stopColor2Ref.current,{
                                                        stopColor: props.values.stopColor[1]
                                                      },{
                                                        stopColor: 'rgb(254,246,222)',
                                                        duration:0.6,
                                                        ease: "Sine.inOut"
                                                      },0)
    },[])
                                                             
    const mouseEnterHandler = useCallback(()=>{
        console.log('on')
        neonOnTL.current.play();
        noen1Ref.current.classList.add(`${props.values.id}Neon1`)
        noen2Ref.current.classList.add(`${props.values.id}Neon2`)
    },[])
    const mouseLeaveHandler = useCallback(()=>{
      console.log('off')
      if(!menuExtended.current){
      neonOnTL.current.reverse();
        noen1Ref.current.classList.remove(`${props.values.id}Neon1`)
        noen2Ref.current.classList.remove(`${props.values.id}Neon2`)
      }
    },[menuExtended])

    const onClick = useCallback((e)=>{
      extendMenuContext(e.currentTarget, props.values.order, svgFrameRef);
      menuExtended.current = true;
    },[])
    
  
    return useMemo(()=>{
      return <MenuComponentRender refs={{noen1Ref, noen2Ref, stopColor1Ref, stopColor2Ref}} values={props.values} menuSizeContext={menuSizeContext} onClick={onClick} svgFrameRef={svgFrameRef} handler={{mouseEnterHandler, mouseLeaveHandler}}></MenuComponentRender>
    },[menuSizeContext[props.values.id+"_styleLI"],menuSizeContext[props.values.id+"_styleSvgFramePack"].style_svgFramePack ])
  }


  function MenuComponentRender(props){
    console.log('---------MenuComponentRender---------')
                               
      
    return(
        <li id={props.values.id} style = {props.menuSizeContext[props.values.id+"_styleLI"]} > 
                <div className="svgFramePack" onClick={props.onClick} ref={props.svgFrameRef} onMouseEnter={props.handler.mouseEnterHandler} onMouseLeave={props.handler.mouseLeaveHandler} style = { props.menuSizeContext[props.values.id+"_styleSvgFramePack"].style_svgFramePack}>
                    <div className="menuText">{props.values.id.toUpperCase()}</div>
                    <div className="neon neon1" ref={props.refs.noen1Ref}></div>
                    <div className="neon neon2" ref={props.refs.noen2Ref}></div>
                    <SvgFrame 
                      id={props.values.id} 
                      ivory={props.values.ivory}
                      stopColor={[props.values.stopColor[0], props.values.stopColor[1]]}
                      strokeColor={[props.values.strokeColor[0],props.values.strokeColor[1]]}
                      styleContext={props.menuSizeContext[props.values.id+"_styleSvgFramePack"] }
                      svgFrameValuesImmutable = {props.values.svgFrameValuesImmutable}
                      stopColorRefs ={[props.refs.stopColor1Ref, props.refs.stopColor2Ref]}
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