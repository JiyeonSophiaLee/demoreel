import { useContext, memo} from 'react';

import { MenuSizeContext } from '../HomeLayout.jsx';



function SvgFrame(props){
  console.log('-------SvgFrame----------')
    return(
      <svg style = {props.menuSizeContext.style_canvas}>
        <defs>
          {props.values.ivory}
          <linearGradient id={`${props.values.id}SvgFrameStopColor`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10%" stopColor={props.values.stopColor[0]} ref={props.refs.stopColor1Ref}></stop>
            <stop offset="90%" stopColor={props.values.stopColor[1]} ref={props.refs.stopColor2Ref}></stop>
          </linearGradient>
        </defs>
        <path id={`${props.values.id}SvgWavy1`} className="wavyPath"  fill="none" stroke={props.values.strokeColor[0]} transform={props.menuSizeContext.style_svgFrame['transform']} {...props.menuSizeContext.style_wavy}/>
        <path id={`${props.values.id}SvgWavy2`} className="wavyPath"  fill="none" stroke={props.values.strokeColor[1]} transform={props.menuSizeContext.style_svgFrame['transform']} {...props.menuSizeContext.style_wavy}/>
        <rect id={`${props.values.id}SvgFrame`} stroke={`url(#${props.values.id}SvgFrameStopColor)`} {...props.menuSizeContext.style_svgFrame} {...props.values.svgFrameValuesImmutable} />
      </svg>
      // <div></div>
    )
}

export default SvgFrame;
