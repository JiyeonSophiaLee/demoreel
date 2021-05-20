import skillList, {colorOffset, RANDOM_COLOR, startRandomColor, hasTouchScreen} from '../public/assets/js/skills.js';
import Image from 'next/image';
import { useCallback, useState, useEffect, useRef } from 'react/cjs/react.development';
import {gsap} from 'gsap';
import TV from '../public/assets/js/transitionValue'

function useSkillList(skill ,j, skillHalfSize, clickAfterContext){
  const callGraphTL = useRef();
  const callGraphTL800 = useRef();
  const expandGraphTL = useRef();
  const touchScreen = useRef();

  const rootRef = useRef();
  const svgRef = useRef();
  const barRef = useRef();
  const barHead1Ref = useRef();
  const barHead2Ref = useRef();
  const barTail1Ref = useRef();
  const barTail2Ref = useRef();
  const percentRef = useRef();
  const textNameRef = useRef();
  const textDateRef = useRef();
  const textNameBgRef = useRef();
  const textDateBgRef = useRef();
  const skillColor1Ref = useRef();
  const skillColor2Ref = useRef();


  // const elemRefs = useRef();

  const getStops = useCallback((skill,j)=>{
      let stops = skill['color'].map((color,i)=>{
      let offset = colorOffset[i];
      let stopColor = RANDOM_COLOR[(startRandomColor + i +j)%10];
      let stop = <stop key={skill.path+i}offset={offset} stopColor={stopColor} ref={eval("skillColor"+(i+1)+"Ref")}></stop>;
      return stop;
    });
    return stops;
  },[])
  // useEffect(()=>{
  //   console.log('skillColor1Ref: ',skillColor1Ref.current)
  // },[])
  
  const onMouseEnter = useCallback((e)=>{
    if(!touchScreen.current){
      const svgWidth = svgRef.current.clientWidth;
      const color1 = RANDOM_COLOR[(startRandomColor + 0 +j)%10];
      const color2 = RANDOM_COLOR[(startRandomColor + 1 +j)%10];
      const barEndPosition = ( svgWidth - skillHalfSize.pxCircle - skillHalfSize.pxCircleEnd) * skill.percent / 100;

        console.log('skillHalfSize.pxCircle',skillHalfSize,skillHalfSize.pxCircle)
      expandGraphTL.current
        .fromTo(skillColor1Ref.current,{
            stopColor: color1
          },{
            stopColor:'#ffffff',
            duration:1,
            ease:"power2.inOut"
          },0
        )
        .fromTo(skillColor2Ref.current,{
            stopColor: color2
          },{
            stopColor:'#ffffff',
            duration:1,
            ease:"power2.inOut"
          },0
        )

        .to(barRef.current,{   
            scaleY:2.3,
            duration:1,
            transformOrigin:"center center",
            ease: "elastic.out(1, 0.3)"
          },0
        )
        .fromTo(barRef.current,{
            width: barEndPosition
          },{   
            width: svgWidth - skillHalfSize.pxCircleEnd*2,
            duration:1,
            ease: "bounce.out"
          },0
        )

        .fromTo(barHead1Ref.current,{
            attr:{fill:color1}
          },{
            attr:{fill:'#ffffff'},
            duration:1,
            ease: "power2.inOut"
          },0
        )
        .to(barHead1Ref.current,
          {
            scale:0.95,
            transformOrigin:"center center",
            duration:0.5,
            ease: "elastic.out(1, 0.3)"
          },
          0
        )
        .to(barHead1Ref.current,
          {
            scale:1,
            transformOrigin:"center center",
            duration:0.5,
            ease: "elastic.out(1, 0.3)"
          },0.5
        )

        .fromTo(barTail1Ref.current,{
          attr:{fill:color2}
          },{
            attr:{fill:'#ffffff'},
            duration:1,
            ease: "power2.inOut"
          },0
        )
        .fromTo(barTail1Ref.current,{
            attr:{cx: barEndPosition + skillHalfSize.pxCircle},
          },{
            attr:{cx: svgWidth - skillHalfSize.pxCircleEnd},
            duration:1,
            ease: "bounce.out"
          },0
        )

        .fromTo(percentRef.current,
          {
            attr:{transform:`matrix(1,0,0,1,${barEndPosition + skillHalfSize.pxCircle},${skillHalfSize.pxCircle})`},
          },{
            attr:{transform:`matrix(1,0,0,1,${svgWidth - skillHalfSize.pxCircleEnd},${skillHalfSize.pxCircle})`},
            duration:1,
            ease: "bounce.out"
          },
          0
        )

        .to([textNameBgRef.current, textDateBgRef.current],
          {
            scaleY:1,
            duration:0.3,
            stagger: 0.3,
            ease:"power2.inOut"
          },0
        )
        .to([textNameBgRef.current, textDateBgRef.current],
          {
            scaleY:0,
            duration:0.3,
            stagger: 0.3,
            ease:"power2.inOut"
          },0.3
        )
        .to([textNameRef.current, textDateRef.current],
          {
            opacity:1,
            duration:0.1,
            stagger: 0.3,
          },0.3
      )
      expandGraphTL.current.play();
    }
  },[skillHalfSize])
  const onMouseLeave = useCallback((e)=>{
    if(!touchScreen.current) expandGraphTL.current.reverse()
  },[])
  const updateResize = useCallback(()=>{
    const svgWidth = svgRef.current.clientWidth;
    const barEndPosition = ( svgWidth - skillHalfSize.pxCircle - skillHalfSize.pxCircleEnd ) * skill.percent / 100;

    rootRef.current.style.height = '';

    console.log('skillHalfSize',skillHalfSize)
    // if(innerWidth > 800){
      // rootRef.current.style.width = barEndPosition +'px';
    //   rootRef.current.setAttributeNS(null,'y', skillHalfSize.pxCircle - skillHalfSize.pxBarHeight);
    //   rootRef.current.style.height = `calc(${skillHalfSize.barHeight}*2)`;
    // }else{
    //   rootRef.current.style.width = svgWidth - skillHalfSize.pxCircleEnd*2 + 'px';
    //   rootRef.current.setAttributeNS(null,'y', skillHalfSize.pxCircle * 0.5 - skillHalfSize.pxBarHeight);
    //   rootRef.current.style.height = skillHalfSize.pxCircle*2 + skillHalfSize.pxBarHeight*2 + 'px';
    // }
    // rootRef.current.setAttributeNS(null,'x',skillHalfSize.pxCircle);

    
    // barHead1Ref.current.setAttributeNS(null,'cx',skillHalfSize.pxCircle);
    // barHead1Ref.current.setAttributeNS(null,'cy',skillHalfSize.pxCircle);
    // barHead1Ref.current.setAttributeNS(null,'r', skillHalfSize.pxCircle);

    // if(innerWidth > 800){
    //   barHead2Ref.current.setAttributeNS(null,'cx',skillHalfSize.pxCircle);
    //   barHead2Ref.current.setAttributeNS(null,'cy',skillHalfSize.pxCircle*2);
    //   barHead2Ref.current.setAttributeNS(null,'r', skillHalfSize.pxCircle);
    // }


    // if(innerWidth > 800){
    //   barTail1Ref.current.setAttributeNS(null,'cx',barEndPosition + skillHalfSize.pxCircle);
    // }else{
    //   barTail1Ref.current.setAttributeNS(null,'cx',svgWidth - skillHalfSize.pxCircleEnd);
    // }
    // barTail1Ref.current.setAttributeNS(null,'cy', skillHalfSize.pxCircle);
    // barTail1Ref.current.setAttributeNS(null,'r', skillHalfSize.pxCircleEnd);

    // if(innerWidth <= 800){
    //   barTail2Ref.current.setAttributeNS(null,'cx', svgWidth - skillHalfSize.pxCircleEnd);
    //   barTail2Ref.current.setAttributeNS(null, 'cy', skillHalfSize.pxCircle*2);
    //   barTail2Ref.current.setAttributeNS(null,'r', skillHalfSize.pxCircleEnd);
    // }
  },[skillHalfSize])

  useEffect(()=>{
    callGraphTL.current = gsap.timeline({paused:true});
    callGraphTL800.current = gsap.timeline({paused:true});
    expandGraphTL.current = gsap.timeline({paused:true});
    touchScreen.current = hasTouchScreen();
    window.addEventListener('resize',updateResize);
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])

  useEffect(()=>{
    if(clickAfterContext === "skill"){
      if(innerWidth>800){
        const svgLength = svgRef.current.clientWidth - skillHalfSize.pxCircle - skillHalfSize.pxCircleEnd;
        const startPosition = skillHalfSize.pxCircle*2 + skillHalfSize.pxCircleEnd;
        const barEndPosition = svgLength * skill.percent / 100;
        
        callGraphTL.current
          .fromTo(barRef.current,{
              width: skillHalfSize.pxCircle + skillHalfSize.pxCircleEnd
            },{
              width: barEndPosition,
              duration: TV.skillTLDuration,
              ease: TV.skillTLEase
            },0
          )
          .fromTo(barTail1Ref.current,{
              attr: {cx: startPosition}
            },{
              attr:  {cx: barEndPosition + skillHalfSize.pxCircleEnd},
              duration: TV.skillTLDuration,
              ease: TV.skillTLEase
            },0
          )
          .fromTo(percentRef.current,{
              attr:{transform:`matrix(1,0,0,1,${startPosition},${skillHalfSize.pxCircle})`}
            },{
              attr:{transform:`matrix(1,0,0,1,${barEndPosition + skillHalfSize.pxCircleEnd},${skillHalfSize.pxCircle})`},
              duration: TV.skillTLDuration,
              ease: TV.skillTLEase
            },0
          )
        callGraphTL.current.play();
      }else{
        const startPosition = skillHalfSize.pxCircle*2 + skillHalfSize.pxCircleEnd;
        const fullpercent = svgRef.current.clientWidth - skillHalfSize.pxCircleEnd;
        
        callGraphTL800.current
          .fromTo(rootRef.current,{
              height: skillHalfSize.pxCircle*2
            },{
              height: skillHalfSize.pxCircle*3,
              duration: TV.skillTLDuration800,
              ease: TV.skillTLEase800
            },0
          )
          .fromTo(barRef.current,{
              height: skillHalfSize.pxCircle
            },{
              height: skillHalfSize.pxCircle*2 + skillHalfSize.pxBarHeight*2,
              duration: TV.skillTLDuration800,
              ease: TV.skillTLEase800
            },0
          )
          .to(barRef.current,{   
              attr: {y:skillHalfSize.pxCircle * 0.5 - skillHalfSize.pxBarHeight},
              width: fullpercent - skillHalfSize.pxCircle,
              duration: TV.skillTLDuration800,
              // transformOrigin:"center center",
              ease: TV.skillTLEase800
            },0
          )

          .to(barHead1Ref.current,{
              scale:0.95,
              // transformOrigin:"center center", 
              duration:0.5,
              ease: "elastic.out(1, 0.3)"
            },0
          )
          .to(barHead1Ref.current,{
              scale:1,
              // transformOrigin:"center center",
              duration:0.5,
              ease: "elastic.out(1, 0.3)"
            },
            0.5
          )
          .fromTo(barHead2Ref.current,{
              attr: {cy: skillHalfSize.pxCircle},
            },{
              attr: {cy: skillHalfSize.pxCircle*2},
              duration: TV.skillTLDuration800,
              ease: TV.skillTLEase800
            },
            0
          )

          .fromTo(barTail1Ref.current,{
                attr: {cx: startPosition}
              },{
                attr: {cx: fullpercent},
                duration: TV.skillTLDuration800,
                ease: TV.skillTLEase800
              },0
          )
          .fromTo(barTail2Ref.current,{
              attr:{cx: startPosition,
                    cy: skillHalfSize.pxCircle*1}
            },{
              attr:{cx: fullpercent,
                    cy: skillHalfSize.pxCircle*2},
              duration: TV.skillTLDuration800,
              ease: TV.skillTLEase800
            },0
          )

          .fromTo(percentRef.current,{
                attr:{transform:`matrix(1,0,0,1,${skillHalfSize.pxCircle},${skillHalfSize.pxCircle})`},
            },{
                attr:{transform:`matrix(1,0,0,1,${skillHalfSize.pxCircle},${skillHalfSize.pxCircle * 2.35})`},
                duration: TV.skillTLDuration800,
                ease: TV.skillTLEase800
            },0
          )

          .to([textNameBgRef.current, textDateBgRef.current],
            {
              scaleY:1,
              duration:0.3,
              stagger: 0.3,
              ease:"power2.inOut"
            },0
          )
          .to([textNameBgRef.current, textDateBgRef.current],
            {
              scaleY:0,
              duration:0.3,
              stagger: 0.3,
              ease:"power2.inOut"
            },0.3
          )
          .to([textNameRef.current, textDateRef.current],{
              opacity:1,
              duration:0.1,
              stagger: 0.3,
            },0.3
          )
          callGraphTL800.current.play();
      }
    }
  },[skillHalfSize,clickAfterContext])

  const skillName = skill.name.replace(/\s/g, '');
  const htmlOutput =
     <div id={skillName} className="skillTrunk" key={skill.path} ref={rootRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="skillBranch">
          <div className="skillImage">
            <div>
              <p>{skill.name}</p>
              <div className="image">
                <Image layout="responsive" width={skill.size} height={skill.size} src={skill.path} alt={skill.name+" icon"}/>
              </div>
            </div>
          </div>
          <svg className="skillGraph" ref={svgRef}>
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
              <rect className="bar" ref={barRef} width={`calc(${skillHalfSize.circle} + ${skillHalfSize.circle})`} height={`calc(${skillHalfSize.barHeight}*2)`} x={skillHalfSize.circle} y={skillHalfSize.pxCircle - skillHalfSize.pxBarHeight} fill={`url(#${skillName}Color)`}></rect>
              <circle className="barHead1" ref={barHead1Ref} cx={skillHalfSize.circle} cy={skillHalfSize.circle} r={skillHalfSize.circle} fill={RANDOM_COLOR[(startRandomColor+j)%10]}></circle>
              <circle className="barHead2" ref={barHead2Ref} cx={skillHalfSize.circle} cy={skillHalfSize.circle} r={skillHalfSize.circle} fill={RANDOM_COLOR[(startRandomColor+j)%10]}></circle>
              <circle className="barTail1" ref={barTail1Ref} cx={`calc(${skillHalfSize.circle} * 2 + ${skillHalfSize.circle})`} cy={skillHalfSize.circle} r={skillHalfSize.circleEnd} fill={RANDOM_COLOR[(startRandomColor+j + 1) %10]}></circle>
              <circle className="barTail2" ref={barTail2Ref} cx={`calc(${skillHalfSize.circle} * 2 + ${skillHalfSize.circle})`} cy={skillHalfSize.circle} r={skillHalfSize.circleEnd} fill={RANDOM_COLOR[(startRandomColor+j + 1) %10]}></circle>
            </g>
            <text ref={percentRef} className="percent" transform={`matrix(1,0,0,1,${skillHalfSize.pxCircle*3},${skillHalfSize.pxCircle})`} textAnchor="middle" alignmentBaseline="middle">{skill.percent+"%"}</text>
          </svg>
          <div className="skillInfo">
            <div>
              <div>
                <div className="skillInfo_Name _skillInfo">
                  <div className="skillInfoName skillInfoText" ref={textNameRef}>{skill.name}</div>
                  <div className="skillinfoNameBG skillInfoBG" ref={textNameBgRef} style={{background:RANDOM_COLOR[startRandomColor%10]}}></div>
                </div>
                <div className="skillInfo_Date _skillInfo">
                  <div className="skillInfoDate skillInfoText" ref={textDateRef}>{skill.date}</div>
                  <div className="skillinfoDateBG skillInfoBG" ref={textDateBgRef} style={{background:RANDOM_COLOR[(startRandomColor+1)%10]}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
  
  return htmlOutput
  
}
export default useSkillList