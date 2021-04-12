import { memo, useMemo, useRef } from 'react';


import MenuComponent from './menu/MenuComponent.jsx';
import SvgIvory from './menu/SvgIvory.jsx'
import InfoContent from './menu/info/InfoContent.jsx'


// import { SvgFrameContext } from './HomeLayout.jsx';

function Menu(props){
  console.log('----------Menu-----------')
  return useMemo(()=>{
    return <MenuRender menuValues={props.menuValues}></MenuRender>
  },[])
}


function MenuRender(props){
  console.log('----------MenuRender----------')
  return (
    <section id = "menu">
      <MenuComponent  values = {{id:props.menuValues[0].id, order:props.menuValues[0].order, svgFrameStopColor1:props.menuValues[0]["svgFrameStopColor1"], svgFrameStopColor2:props.menuValues[0]["svgFrameStopColor2"], strokeColor1:props.menuValues[0]["strokeColor1"], strokeColor2:props.menuValues[0]["strokeColor2"], ivory:<SvgIvory/> }}/>
      <MenuComponent values = {{id:props.menuValues[1].id, order:props.menuValues[1].order, svgFrameStopColor1:props.menuValues[1]["svgFrameStopColor1"], svgFrameStopColor2:props.menuValues[1]["svgFrameStopColor2"], strokeColor1:props.menuValues[1]["strokeColor1"], strokeColor2:props.menuValues[1]["strokeColor2"] }}/>
      <MenuComponent values = {{id:props.menuValues[2].id, order:props.menuValues[2].order, svgFrameStopColor1:props.menuValues[2]["svgFrameStopColor1"], svgFrameStopColor2:props.menuValues[2]["svgFrameStopColor2"], strokeColor1:props.menuValues[2]["strokeColor1"], strokeColor2:props.menuValues[2]["strokeColor2"] }}/>
      <MenuComponent values = {{id:props.menuValues[3].id, order:props.menuValues[3].order, svgFrameStopColor1:props.menuValues[3]["svgFrameStopColor1"], svgFrameStopColor2:props.menuValues[3]["svgFrameStopColor2"], strokeColor1:props.menuValues[3]["strokeColor1"], strokeColor2:props.menuValues[3]["strokeColor2"], contents:<InfoContent/>}}/>
    </section>
    )
}

export default Menu