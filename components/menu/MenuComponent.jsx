import { useContext, useRef, useEffect, memo, useState, useCallback} from 'react';
// import SvgFrame from './SvgFrame.jsx';
import TV, { convertToPix } from '../../public/assets/js/transitionValue';


import useMenuSize from "../../hooks/useMenuSize.jsx"

import { ExtendMenuContext } from '../HomeLayout.jsx';
// import { MenuSizeContext } from '../HomeLayout.jsx';


function MenuComponent (props){ 
    console.log('---MenuComponent---')
    // const extendMenuContext = useContext(ExtendMenuContext);

    const extendMenuContext = useContext(ExtendMenuContext)
    const refName = props.id + 'Ref';
    
    const workRef = useRef();
    const skillRef = useRef();
    const paintRef = useRef();
    const infoRef = useRef();
    const [ LI_size, svgFramePackSize, canvasSize, svgFrameSize, extendMenu ] = useMenuSize(props.id);
    
    

    useEffect(()=>{
      workRef.current = props.refs['workRef'];
      skillRef.current = props.refs['skillRef'];
      paintRef.current = props.refs['paintRef'];
      infoRef.current = props.refs['infoRef'];

    },[])




    function onClick(e){
      extendMenuContext();
      extendMenu(e.currentTarget, props.order, props.refs);
    }
    
  
    return(
      <li id={props.id} style={LI_size} > 
        <div className="svgFramePack" onClick={onClick} ref={props.refs[refName]} style={svgFramePackSize}>
            <div className="menuText">{props.id.toUpperCase()}</div>
            <div className="neon neon1"></div>
            <div className="neon neon2"></div>
 
            <svg style={canvasSize}>
              <defs>
                {props.ivory}
                <linearGradient id={`${props.id}SvgFrameStopColor`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="10%" stopColor={props.svgFrameStopColor1}></stop>
                  <stop offset="90%" stopColor={props.svgFrameStopColor2}></stop>
                </linearGradient>
              </defs>
              <path id={`${props.id}SvgWavy1`} className="wavyPath"  fill="none" stroke={props.strokeColor1}/>
              <path id={`${props.id}SvgWavy2`} className="wavyPath"  fill="none" stroke={props.strokeColor2}/>
              <rect id={`${props.id}SvgFrame`} stroke={`url(#${props.id}SvgFrameStopColor)`} {...svgFrameSize} />
            </svg>

        </div>
        <div className="contents">
            {props.contents}
        </div>
      </li>
    )
  }

  export default memo(MenuComponent)