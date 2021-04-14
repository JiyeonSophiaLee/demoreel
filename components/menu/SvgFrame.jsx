import { useContext, memo} from 'react';

import { MenuSizeContext } from '../HomeLayout.jsx';



function SvgFrame(props){
  console.log('-------SvgFrame----------')
    // const canvas = props.styleContext['canvas'];
    // const svgFrame = props.styleContext['svgFrame'];
    // const menuSizeContext = useContext(MenuSizeContext);
  
    return(
      <svg style = {props.styleContext.style_canvas}>
        <defs>
          {props.ivory}
          <linearGradient id={`${props.id}SvgFrameStopColor`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10%" stopColor={props.svgFrameStopColor1}></stop>
            <stop offset="90%" stopColor={props.svgFrameStopColor2}></stop>
          </linearGradient>
        </defs>
        <path id={`${props.id}SvgWavy1`} className="wavyPath"  fill="none" stroke={props.strokeColor1} transform={props.styleContext.style_svgFrame['transform']}/>
        <path id={`${props.id}SvgWavy2`} className="wavyPath"  fill="none" stroke={props.strokeColor2} transform={props.styleContext.style_svgFrame['transform']}/>
        <rect id={`${props.id}SvgFrame`} stroke={`url(#${props.id}SvgFrameStopColor)`} {...props.styleContext.style_svgFrame} {...props.svgFrameValuesImmutable} />
      </svg>
      // <div></div>
    )
}

export default SvgFrame;
