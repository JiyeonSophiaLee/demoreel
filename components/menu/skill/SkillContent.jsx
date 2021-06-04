import { useCallback, useEffect, useRef, useState, useContext, useMemo } from "react";
import skillList, { colorOffset, RANDOM_COLOR, startRandomColor, hasTouchScreen } from "../../../public/assets/js/skills.js";
import { ClickAfterContext } from "../../HomeLayout.jsx";
import { gsap } from "gsap";
import useSkillList from "../../../hooks/useSkillList.jsx";

function SkillContent() {
  console.log("--------SkillContent----------");
  const clickAfterContext = useContext(ClickAfterContext);
  

  // return useMemo(() => {
    return (
      <div className="skillRoot">
        {skillList.map((skill, j) => {
          return useSkillList(
            skill,
            j,
            clickAfterContext
          );
        })}
      </div>
    ); 
  // }, [clickAfterContext]);
}


export default SkillContent;
