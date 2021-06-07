import { useContext, useMemo} from "react";
import SvgFramePack from "./svg/SvgFramePack.jsx";

import { MenuSizeContext } from "../HomeLayout.jsx";

function MenuComponent(props) {
  // console.log("---MenuComponent---");

  const menuSizeContext = useContext(MenuSizeContext);

  return useMemo(() => {
    // return <MenuComponentRender refs={{noen1Ref, noen2Ref, stopColor1Ref, stopColor2Ref, textRef, contentRef}} values={props.values} menuSizeContext={menuSizeContext} onClick={onClick} svgFrameRef={svgFrameRef} handlers={{mouseEnterHandler, mouseLeaveHandler}}></MenuComponentRender>
    return (
      <MenuComponentRender
        vals={{ ...props.vals, menuSizeContext: menuSizeContext }}
      ></MenuComponentRender>
    );
  }, [ menuSizeContext[props.vals.id + "_styleLI"], menuSizeContext[props.vals.id + "_styleSvgFramePack"].style_svgFramePack ]);
}

function MenuComponentRender(props) {
  console.log("---------MenuComponentRender---------");

  return (
    <li id={props.vals.id} style={props.vals.menuSizeContext[props.vals.id + "_styleLI"]}>
      <SvgFramePack vals={props.vals} />
    </li>
  );
}

export default MenuComponent;
