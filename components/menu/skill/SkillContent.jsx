import { memo } from "react";
import skillList from "../../../public/assets/js/skills.js";
import useSkillList from "../../../hooks/useSkillList.jsx";

function SkillContent() {
  // console.log("--------SkillContent----------");
  

  // return useMemo(() => {
    return (
      <div className="skillRoot">
        {skillList.map((skill, j) => {
          return useSkillList(
            skill,
            j
          );
        })}
      </div>
    ); 
  // }, [clickAfterContext]);
}


export default memo(SkillContent);
