import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, useContext } from 'react/cjs/react.development';
import skillList, {colorOffset, RANDOM_COLOR, startRandomColor} from '../../../public/assets/js/skills.js';
import TV, { convertToPix } from '../../../public/assets/js/transitionValue.js';
import { ClickContext } from '../../HomeLayout.jsx';

function SkillContent(){
  const clickContext = useContext(ClickContext);
  const [skillHalfSize,setSkillHalfSize] = useState({circle:0,circleEnd:0,barHeight:0, pxCircle:0, pxCircleEnd:0, pxBarHeight:0});

  const getStops = useCallback((skill,j)=>{
    console.log('check if it working again')
    let stops = skill['color'].map((color,i)=>{
      let offset = colorOffset[i];
      let stopColor = RANDOM_COLOR[(startRandomColor + i +j)%10];
      let stop = <stop key={skill.path+i}offset={offset} stopColor={stopColor}></stop>;
      return stop;
    });
    return stops;
  },[])

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
    setUnitSize()
  },[])

  return(
    <div className="skillRoot">
       {skillList.map((skill,j)=>{
          const skillName = skill.name.replace(/\s/g, '');
          return (
            <div id={skillName} className="skillTrunk" key={skill.path}>
              <div className="skillBranch">
                <div className="skillImage">
                  <div>
                    <p>{skill.name}</p>
                    <div className="image">
                      <Image layout="responsive" width={skill.size} height={skill.size} src={skill.path} alt={skill.name+" icon"}/>
                    </div>
                  </div>
                </div>
                <svg className="skillGraph">
                  <defs> 
                    <filter id="filter" colorInterpolationFilters="sRGB">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"></feGaussianBlur>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="cm"></feColorMatrix>
                    </filter>
                    <linearGradient id={skillName+"Color"} x1="0%" x2="100%" y1="0%" y2="0%">
                      {getStops(skill,j)}
                    </linearGradient>
                  </defs>
                  <rect className="barBG" width="100%" height={`calc(${skillHalfSize.barHeight}* 3)`} x="0" y={`calc(${skillHalfSize.circle} - ${skillHalfSize.barHeight} * 1.5 )`} rx={skillHalfSize.barHeight} ry={skillHalfSize.barHeight}></rect>
                  <g filter="url(#filter)">
                    <rect className="bar" width={`calc(${skillHalfSize.circle} + ${skillHalfSize.circle})`} height={`calc(${skillHalfSize.barHeight}*2)`} x={skillHalfSize.circle} y={skillHalfSize.pxCircle - skillHalfSize.pxBarHeight} fill={`url(#${skillName}Color)`}></rect>
                    <circle className="barHead1" cx={skillHalfSize.circle} cy={skillHalfSize.circle} r={skillHalfSize.circle} fill={RANDOM_COLOR[(startRandomColor+j)%10]}></circle>
                    <circle className="barHead2" cx={skillHalfSize.circle} cy={skillHalfSize.circle} r={skillHalfSize.circle} fill={RANDOM_COLOR[(startRandomColor+j)%10]}></circle>
                    <circle className="barTail1" cx={`calc(${skillHalfSize.circle} * 2 + ${skillHalfSize.circle})`} cy={skillHalfSize.circle} r={skillHalfSize.circleEnd} fill={RANDOM_COLOR[(startRandomColor+j + 1) %10]}></circle>
                    <circle className="barTail2" cx={`calc(${skillHalfSize.circle} * 2 + ${skillHalfSize.circle})`} cy={skillHalfSize.circle} r={skillHalfSize.circleEnd} fill={RANDOM_COLOR[(startRandomColor+j + 1) %10]}></circle>
                  </g>
                  <text className="percent" transform={`matrix(1,0,0,1,${skillHalfSize.pxCircle*3},${skillHalfSize.pxCircle})`} textAnchor="middle" alignmentBaseline="middle">{skill.percent+"%"}</text>
                </svg>
                <div className="skillInfo">
                  <div>
                    <div>
                      <div className="skillInfo_Name _skillInfo">
                        <div className="skillInfoName skillInfoText">{skill.name}</div>
                        <div className="skillinfoNameBG skillInfoBG" style={{background:RANDOM_COLOR[startRandomColor%10]}}></div>
                      </div>
                      <div className="skillInfo_Date _skillInfo">
                        <div className="skillInfoDate skillInfoText">{skill.date}</div>
                        <div className="skillinfoDateBG skillInfoBG" style={{background:RANDOM_COLOR[(startRandomColor+1)%10]}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
     </div>
    
  )
}

export default SkillContent;