import { memo, useMemo, useRef } from "react";

// import MenuComponent from "./menu/MenuComponent.jsx";
// import SvgIvory from "./menu/SvgIvory.jsx";
// import WorkContent from "./menu/work/WorkContent.jsx";
// import PaintContent from "./menu/paint/PaintContent.jsx";
// import InfoContent from "./menu/info/InfoContent.jsx";
// import SkillContent from "./menu/skill/SkillContent.jsx";

// import { SvgFrameContext } from './HomeLayout.jsx';

function Menu(props) {
  console.log("----------Menu-----------");
  return useMemo(() => {
    return <MenuRender vals={props.vals}></MenuRender>;
  }, []);
}

function MenuRender(props) {
  console.log("----------MenuRender----------");
  return (
    <section id="menu">
      {/* <MenuComponent
        vals={{
          id: props.vals.menuValues[0].id,
          order: props.vals.menuValues[0].order,
          stopColor: props.vals.menuValues[0]["stopColor"],
          strokeColor: props.vals.menuValues[0]["strokeColor"],
          svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable,
          ivory: <SvgIvory />,
          contents: <WorkContent />,
        }}
      />
      <MenuComponent
        vals={{
          id: props.vals.menuValues[1].id,
          order: props.vals.menuValues[1].order,
          stopColor: props.vals.menuValues[1]["stopColor"],
          strokeColor: props.vals.menuValues[1]["strokeColor"],
          svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable,
          contents: <SkillContent />,
        }}
      />
      <MenuComponent
        vals={{
          id: props.vals.menuValues[2].id,
          order: props.vals.menuValues[2].order,
          stopColor: props.vals.menuValues[2]["stopColor"],
          strokeColor: props.vals.menuValues[2]["strokeColor"],
          svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable,
          contents: <PaintContent />,
        }}
      />
      <MenuComponent
        vals={{
          id: props.vals.menuValues[3].id,
          order: props.vals.menuValues[3].order,
          stopColor: props.vals.menuValues[3]["stopColor"],
          strokeColor: props.vals.menuValues[3]["strokeColor"],
          svgFrameValuesImmutable: props.vals.svgFrameValuesImmutable,
          contents: <InfoContent />,
        }}
      /> */}
    </section>
  );
}

export default Menu;
