import { memo } from 'react';


import MenuComponent from './menu/MenuComponent.jsx';
import SvgIvory from './menu/SvgIvory.jsx'
import InfoContent from './menu/info/InfoContent.jsx'


// import { SvgFrameContext } from './HomeLayout.jsx';

function Menu(props){
  console.log('---MENU---')

  // console.log('props= ',props)
  
  return (
    <section id = "menu">
      <MenuComponent refs={props.refs} id="work"  order={1} svgFrameStopColor1="#ff3b29" svgFrameStopColor2="#ff8c34" strokeColor1="#ff3b29" strokeColor2="#ff8c34" ivory={<SvgIvory/> }/>
      <MenuComponent refs={props.refs} id="skill" order={2} svgFrameStopColor1="#cd4dff" svgFrameStopColor2="#ff4179" strokeColor1="#cd4dff" strokeColor2="#ff4179"/>
      <MenuComponent refs={props.refs} id="paint" order={3} svgFrameStopColor1="#ffa934" svgFrameStopColor2="#30ab98" strokeColor1="#ffa934" strokeColor2="#30ab98"/>
      <MenuComponent refs={props.refs} id="info"  order={4} svgFrameStopColor1="#ff6ee2" svgFrameStopColor2="#5cd3ff" strokeColor1="#ff6ee2" strokeColor2="#5cd3ff" contents={<InfoContent/>} />
    </section>
  )
}
export default memo(Menu)

