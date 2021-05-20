import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, useContext } from 'react/cjs/react.development';
import skillList, {colorOffset, RANDOM_COLOR, startRandomColor, hasTouchScreen} from '../../../public/assets/js/skills.js';
import TV, { convertToPix } from '../../../public/assets/js/transitionValue.js';
import { ClickAfterContext } from '../../HomeLayout.jsx';
import {gsap} from 'gsap';
import useSkillList from '../../../hooks/useSkillList.jsx'

function SkillContent(){
  const clickAfterContext = useContext(ClickAfterContext);
  // const skillList = useSkillList()


  const [skillHalfSize,setSkillHalfSize] = useState({circle:0,circleEnd:0,barHeight:0, pxCircle:0, pxCircleEnd:0, pxBarHeight:0});
  const skillTL = useRef({});
  const skillTL800 = useRef({});
  const skillListTL = useRef({});
  const touchScreen = useRef();

  const setUnitSize = useCallback(()=>{
    let screenSize;
    if   (innerWidth >= 1400) screenSize = '1400';
    else if(innerWidth > 800) screenSize = '';
    else                      screenSize = '800';

    let circle = TV["halfCircleSize"+screenSize];
    let circleEnd = TV["halfCircleSizeEnd"+screenSize];
    let barHeight = TV["halfBarHeight"+screenSize];

    setSkillHalfSize({circle:circle, circleEnd:circleEnd, barHeight:barHeight, pxCircle:convertToPix(circle), pxCircleEnd:convertToPix(circleEnd), pxBarHeight:convertToPix(barHeight)})
  },[])

  useEffect(()=>{
    setUnitSize();
    skillList.map((skill,j)=>{
    //   skillTL.current[skill.name.replace(/\s/g, '')]=gsap.timeline({paused:true});
    //   skillTL800.current[skill.name.replace(/\s/g, '')]=gsap.timeline({paused:true});
      skillListTL.current=gsap.timeline({paused:true});
    })
    touchScreen.current = hasTouchScreen();
  },[])
  // useEffect(()=>{
  //   skillList.map((skill,j)=>{
  //     skillTL.current[skill.name.replace(/\s/g, '')]=gsap.timeline({paused:true});
  //     skillTL800.current[skill.name.replace(/\s/g, '')]=gsap.timeline({paused:true});
  //     skillListTL.current=gsap.timeline({paused:true});
  //   })
  //   touchScreen.current = hasTouchScreen();
  //     if(innerWidth > 800) skillListTL.current.forEach((tl)=>{ tl.getCallGraphTL();})
  //     else{
  //       skillListTL.forEach((tl)=>{
  //         tl.getCallGraphTL800();           
  //       })
  //     }
  //   }
  // },[clickContext])
  useEffect(()=>{
    console.log('clickAfterContext is on', clickAfterContext)
  },[clickAfterContext])
 

  return(
    <div className="skillRoot" >
       {skillList.map((skill,j)=>{
          return (
            useSkillList(skill,j,skillHalfSize,clickAfterContext)
          )
        })}
     </div>
    
  )
}

export default SkillContent;