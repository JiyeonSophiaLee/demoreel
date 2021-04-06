import { useContext, useRef, useEffect, memo} from 'react';
import SvgFrame from './SvgFrame.jsx';

import { ExtendMenuContext } from '../HomeLayout.jsx';
import { MenuSizeContext } from '../HomeLayout.jsx';


function MenuComponent (props){
    console.log('---MenuComponent---')
    const extendMenuContext = useContext(ExtendMenuContext);
    const menuSizeContext = useContext(MenuSizeContext);
    const svgFrameRef = useRef()
    
  
    useEffect(()=>{
    },[])
  
  
  
    function onClick(e){
      extendMenuContext(e.currentTarget,props.order, svgFrameRef);
    }
    
  
    return(
      <li id={props.id} {...menuSizeContext[props.id+"_style"].style_LI} > 
        <div className="svgFramePack" onClick={onClick} ref={svgFrameRef} {...menuSizeContext[props.id+"_style"].style_svgFramePack}>
            <div className="menuText">{props.id.toUpperCase()}</div>
            <div className="neon neon1"></div>
            <div className="neon neon2"></div>
            <SvgFrame 
              id={props.id} 
              ivory={props.ivory}
              svgFrameStopColor1={props.svgFrameStopColor1}
              svgFrameStopColor2={props.svgFrameStopColor2}
              strokeColor1={props.strokeColor1}
              strokeColor2={props.strokeColor2}
              // styleContext={{canvas:menuSizeContext[props.id+"_style"].style_canvas, svgFrame:menuSizeContext[props.id+"_style"].style_svgFrame}}
            />
        </div>
        <div className="contents">
            {props.contents}
        </div>
      </li>
    )
  }

  export default memo(MenuComponent)