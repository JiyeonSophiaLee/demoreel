import { useContext, memo} from 'react';

import { MenuSizeContext } from '../HomeLayout.jsx';



function SvgFrame(props){
  console.log('-------SvgFrame----------')
    // const canvas = props.styleContext['canvas'];
    // const svgFrame = props.styleContext['svgFrame'];
    // const menuSizeContext = useContext(MenuSizeContext);
  
    return(
      <svg style = {props.styleContext.style_canvas} xmlns="http://www.w3.org/2000/svg">
        <defs>
          {props.ivory}
          <linearGradient id={`${props.id}SvgFrameStopColor`} x1="0%" y1="0%" x2="100%" y2="100%" color-interpolation-filters="sRGB" >
            <stop offset="10%" stopColor={props.stopColor[0]}></stop>
            <stop offset="90%" stopColor={props.stopColor[1]}></stop>
          </linearGradient>
        </defs>
        <path id={`${props.id}SvgWavy1`} className="wavyPath"  fill="none" stroke={props.strokeColor[0]} transform={props.styleContext.style_svgFrame['transform']} />
        <path id={`${props.id}SvgWavy2`} className="wavyPath"  fill="none" stroke={props.strokeColor[1]} transform={props.styleContext.style_svgFrame['transform']} {...props.styleContext.style_wavyPath}/>
        <rect id={`${props.id}SvgFrame`} stroke={`url(#${props.id}SvgFrameStopColor)`} {...props.styleContext.style_svgFrame} {...props.svgFrameValuesImmutable} />
      </svg>
      // <div></div>
    )
}

export default SvgFrame;
