
import { useContext, useRef, useEffect, useCallback, useMemo} from "react";
import gsap from "gsap";
import SvgFrame from "./SvgFrame.jsx";

import { ExtendMenuContext, ClickContext, ClickAfterContext } from "../../HomeLayout.jsx";

function SvgFramePack(props) {
  const extendMenuContext = useContext(ExtendMenuContext);
  const clickContext = useContext(ClickContext);
  // console.log("-------SvgFramePack----------");

  const svgFrameRef = useRef();
  const noen1Ref = useRef(null);
  const noen2Ref = useRef(null);
  const stopColor1Ref = useRef(null);
  const stopColor2Ref = useRef(null);
  const textRef = useRef();
  const contentRef = useRef();
  const neonOnTL = useRef();

  useEffect(() => {
    neonOnTL.current = gsap
      .timeline({ paused: true })
      .fromTo(
        stopColor1Ref.current,
        {
          stopColor: props.vals.stopColor[0],
        },
        {
          stopColor: "rgb(254,246,222)",
          duration: 0.6,
          ease: "Sine.inOut",
        },
        0
      )
      .fromTo(
        stopColor2Ref.current,
        {
          stopColor: props.vals.stopColor[1],
        },
        {
          stopColor: "rgb(254,246,222)",
          duration: 0.6,
          ease: "Sine.inOut",
        },
        0
      );
  }, []);

  const mouseEnterHandler = useCallback(() => {
    neonOnTL.current.play();
    noen1Ref.current.classList.add(`${props.vals.id}Neon1`);
    noen2Ref.current.classList.add(`${props.vals.id}Neon2`);
  }, []);

  //if svgFrame div is not included in this component and put in into SvgFramePackRender,
  //  'enableClickContenxt' didn't affect to the svgFrame div.
  //  if put 'enableClickcontext' as a dependency, it worked, but it rerendered all its children, which is svgFrame
  //  so, I just bring the div in here.
  //  I thought I put it into MenuComponentRender, but now, I just kept it in here.
  const mouseLeaveHandler = useCallback(() => {
    if (clickContext.bigger !== props.vals.id) {
      neonOnTL.current.reverse();
      noen1Ref.current.classList.remove(`${props.vals.id}Neon1`);
      noen2Ref.current.classList.remove(`${props.vals.id}Neon2`);
    }
  }, [clickContext]);

  useEffect(() => {
    //this is for "click off event".
    if (clickContext.biggered === props.vals.id || !clickContext.on) {
      neonOnTL.current.reverse();
      noen1Ref.current.classList.remove(`${props.vals.id}Neon1`);
      noen2Ref.current.classList.remove(`${props.vals.id}Neon2`);
    }
  }, [clickContext]);

  const onClick = (e) => {
    extendMenuContext( e.currentTarget, props.vals.order, textRef.current, contentRef.current, [noen1Ref.current, noen2Ref.current] );
  };

  return useMemo(() => {
    return (
      <>
        <div
          className="svgFramePack"
          onClick={onClick}
          ref={svgFrameRef}
          style={ props.vals.menuSizeContext[props.vals.id + "_styleSvgFramePack"].style_svgFramePack}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <SvgFramePackRender
            vals={{
              ...props.vals,
              refs: { noen1Ref, noen2Ref, stopColor1Ref, stopColor2Ref, textRef},
              menuSizeContext: props.vals.menuSizeContext,
              svgFrameRef: svgFrameRef,
            }}
          />
        </div>
        <div className="contents" ref={contentRef} onClick={onClick}>
          <ContentRender vals={{ id: props.vals.id, contents: props.vals.contents }} />
        </div>
      </>
    );
  }, [ props.vals.menuSizeContext[props.vals.id + "_styleSvgFramePack"].style_svgFramePack , clickContext]);
}

function SvgFramePackRender(props) {
  // console.log("-------SvgFramePackRender----------");
  return (
    <>
      <div className="menuText" ref={props.vals.refs.textRef}>
        {props.vals.id.toUpperCase()}
      </div>
      <div className="neon neon1" ref={props.vals.refs.noen1Ref}></div>
      <div className="neon neon2" ref={props.vals.refs.noen2Ref}></div>
      <SvgFrame
        vals={{
          id: props.vals.id,
          stopColor: props.vals.stopColor,
          strokeColor: props.vals.strokeColor,
          ivory: props.vals.ivory,
          menuSizeContext: props.vals.menuSizeContext[props.vals.id + "_styleSvgFramePack"],
          svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable,
          refs: { stopColor1Ref: props.vals.refs.stopColor1Ref, stopColor2Ref: props.vals.refs.stopColor2Ref}
        }}
      />
    </>
  );
}
function ContentRender(props) {
  
  const clickAfterContext = useContext(ClickAfterContext);
  // console.log("----------ContentRender----------------");

  return useMemo(() => {
    return <>{clickAfterContext === props.vals.id && props.vals.contents}</>;
  }, [clickAfterContext]);
}
export default SvgFramePack;