import { useContext, memo } from "react";

import { MenuSizeContext } from "../HomeLayout.jsx";

function SvgFrame(props) {
  console.log("-------SvgFrame----------");
  return (
    <svg style={props.vals.menuSizeContext.style_canvas}>
      <defs>
        {props.vals.ivory}
        <linearGradient id={`${props.vals.id}SvgFrameStopColor`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="10%" stopColor={props.vals.stopColor[0]} ref={props.vals.refs.stopColor1Ref}></stop>
          <stop offset="90%" stopColor={props.vals.stopColor[1]} ref={props.vals.refs.stopColor2Ref}></stop>
        </linearGradient>
      </defs>
      <path
       id={`${props.vals.id}SvgWavy1`}
       className="wavyPath"
       fill="none"
       stroke={props.vals.strokeColor[0]}
       transform={props.vals.menuSizeContext.style_svgFrame["transform"]}
       {...props.vals.menuSizeContext.style_wavy}
      />
      <path
        id={`${props.vals.id}SvgWavy2`}
        className="wavyPath"
        fill="none"
        stroke={props.vals.strokeColor[1]}
        transform={props.vals.menuSizeContext.style_svgFrame["transform"]}
        {...props.vals.menuSizeContext.style_wavy}
      />
      <rect
        id={`${props.vals.id}SvgFrame`}
        stroke={`url(#${props.vals.id}SvgFrameStopColor)`}
        {...props.vals.menuSizeContext.style_svgFrame}
        {...props.vals.svgFrameValuesImmutable}
      />
    </svg>
    // <div></div>
  );
}

export default SvgFrame;
