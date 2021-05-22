import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, useContext, useMemo } from 'react/cjs/react.development';
import skillList, {colorOffset, RANDOM_COLOR, startRandomColor, hasTouchScreen} from '../../../public/assets/js/skills.js';
import TV, { convertToPix } from '../../../public/assets/js/transitionValue.js';
import { ClickAfterContext } from '../../HomeLayout.jsx';
import {gsap} from 'gsap';
import useSkillList from '../../../hooks/useSkillList.jsx'

function SkillContent(){
  console.log('--------SkillContent----------')
  const clickAfterContext = useContext(ClickAfterContext);
  const [skillHalfSize,setSkillHalfSize] = useState({circle:0,circleEnd:0,barHeight:0, pxCircle:0, pxCircleEnd:0, pxBarHeight:0});
  const mode = useRef({mobileMode:null, _mobileMode:null, widerMode:null, _widerMode:null});

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
    mode.current.mobileMode = innerWidth <= 800 ? true : false; 
    mode.current.widerMode = innerWidth >= 1400 ? true : false; 
    mode.current._mobileMode = mode.current.mobileMode;
    mode.current._widerMode = mode.current.widerMode;
  },[])
  useEffect(()=>{
    const updateResize = () =>{
      mode.current._mobileMode = innerWidth <= 800 ? true : false; 
      mode.current._widerMode = innerWidth >= 1400 ? true : false;
      if(mode.current.mobileMode !== mode.current._mobileMode){
        mode.current.mobileMode = !mode.current.mobileMode;
        setUnitSize();
      }
      if(mode.current.widerMode !== mode.current._widerMode){
        mode.current.widerMode = !mode.current.widerMode;
        setUnitSize();
      }
    }
    window.addEventListener('resize',updateResize);
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])

  return useMemo(()=>{
    return <SkillContentRender vals={{skillHalfSize, clickAfterContext}}/>
  },[clickAfterContext, skillHalfSize])
}

function SkillContentRender(props){
  console.log('------------SkillContentRender--------------')
  return(
    <div className="skillRoot" >
      {skillList.map((skill,j)=>{
        return (
          useSkillList(skill,j,props.vals.skillHalfSize, props.vals.clickAfterContext)
        )
      })}
  </div>
  )
}

export default SkillContent;