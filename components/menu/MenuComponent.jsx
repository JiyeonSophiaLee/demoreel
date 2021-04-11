import { useContext, useRef, useEffect, memo, useMemo} from 'react';
import SvgFrame from './SvgFrame.jsx';

import { ExtendMenuContext } from '../HomeLayout.jsx';
import { MenuSizeContext } from '../HomeLayout.jsx';


function MenuComponent (props){
    console.log('---MenuComponent---')
    // const extendMenuContext = useContext(ExtendMenuContext);
    const menuSizeContext = useContext(MenuSizeContext);
    const svgFrameRef = useRef()
  

  
    function onClick(e){
      // extendMenuContext(e.currentTarget,props.order, svgFrameRef);
    }
    
  
    return useMemo(()=>{
      return <MenuComponentRender values={props.values} menuSizeContext={menuSizeContext} onClick={onClick} svgFrameRef={svgFrameRef}></MenuComponentRender>
    },[menuSizeContext[props.values.id+"_styleLI"],menuSizeContext[props.values.id+"_styleSvgFramePack"] ])
  }
  function MenuComponentRender(props){
    console.log('---------MenuComponentRender---------')
    return(
        <li id={props.values.id} style = {props.menuSizeContext[props.values.id+"_styleLI"]} > 
                <div className="svgFramePack" onClick={props.onClick} ref={props.svgFrameRef} style = { props.menuSizeContext[props.values.id+"_styleSvgFramePack"].style_svgFramePack}>
                    <div className="menuText">{props.values.id.toUpperCase()}</div>
                    <div className="neon neon1"></div>
                    <div className="neon neon2"></div>
                    <SvgFrame 
                      id={props.values.id} 
                      ivory={props.values.ivory}
                      svgFrameStopColor1={props.values.svgFrameStopColor1}
                      svgFrameStopColor2={props.values.svgFrameStopColor2}
                      strokeColor1={props.values.strokeColor1}
                      strokeColor2={props.values.strokeColor2}
                      styleContext={{canvas:props.menuSizeContext[props.values.id+"_styleSvgFramePack"].style_canvas, svgFrame:props.menuSizeContext[props.values.id+"_styleSvgFramePack"].style_svgFrame}}
                    />
                </div>
                <div className="contents">
                    {props.values.contents}
                </div>
              </li>
        // <div></div>
    )
  }

  export default memo(MenuComponent)