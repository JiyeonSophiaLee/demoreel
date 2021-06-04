import skillList, {colorOffset, RANDOM_COLOR, startRandomColor, hasTouchScreen} from '../public/assets/js/skills.js';
import { useCallback, useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap';
import TV, { convertToPix } from "../public/assets/js/transitionValue.js";



const prefix = process.env.NEXT_PUBLIC_PREFIX || "";
const skillCondition = ()=>{
      return  'innerWidth>800 || touchScreen.current ';
}




function useSkillList(skill ,j, clickAfterContext){
  console.log('-----------useSkillList---------------')
  // const [skillHalfSize,setSkillHalfSize] = useState({ circle: 0, circleEnd: 0, barHeight: 0, pxCircle: 0, pxCircleEnd: 0, pxBarHeight: 0});
  const skillHalfSize = useRef({ circle: 0, circleEnd: 0, barHeight: 0, pxCircle: 0, pxCircleEnd: 0, pxBarHeight: 0});
  const mode = useRef({ mobileMode: null, _mobileMode: null, widerMode: null, _widerMode: null});

  const callGraphTL = useRef();
  const callGraphTL800 = useRef();
  const expandGraphTL = useRef();
  const touchScreen = useRef();

  const rootRef = useRef();
  const svgRef = useRef();
  const barRef = useRef();
  const barBGRef = useRef();
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



  const setUnitSize = useCallback(() => {
    let screenSize;
    if (innerWidth >= 1400) screenSize = "1400";
    else if (innerWidth > 800) screenSize = "";
    else screenSize = "800";

    let circle = TV["halfCircleSize" + screenSize];
    let circleEnd = TV["halfCircleSizeEnd" + screenSize];
    let barHeight = TV["halfBarHeight" + screenSize];
    let pxCircle = convertToPix(circle);
    let pxCircleEnd = convertToPix(circleEnd);
    let pxBarHeight =convertToPix(barHeight);

    skillHalfSize.current = {
      circle: circle,
      circleEnd: circleEnd,
      barHeight: barHeight,
      pxCircle: pxCircle,
      pxCircleEnd: pxCircleEnd,
      pxBarHeight: pxBarHeight,
    };
    // return [ circle, circleEnd, barHeight, pxCircle, pxCircleEnd, pxBarHeight]

  }, []);


  useEffect(() => {
    // let [ circle, circleEnd, barHeight, pxCircle, pxCircleEnd, pxBarHeight] = 
    setUnitSize();
    
    mode.current.mobileMode = innerWidth <= 800 ? true : false;
    mode.current.widerMode = innerWidth >= 1400 ? true : false;
    mode.current._mobileMode = mode.current.mobileMode;
    mode.current._widerMode = mode.current.widerMode;

    callGraphTL.current = gsap.timeline({paused:true});
    callGraphTL800.current = gsap.timeline({paused:true});
    expandGraphTL.current = gsap.timeline({paused:true});
    touchScreen.current = hasTouchScreen();

    callGraph();

  }, []);


  useEffect(() => {
    const updateResize = () => {
      mode.current._mobileMode = innerWidth <= 800 ? true : false;
      mode.current._widerMode = innerWidth >= 1400 ? true : false;
      if (mode.current.mobileMode !== mode.current._mobileMode) {
        mode.current.mobileMode = !mode.current.mobileMode;
        setUnitSize();
      }
      if (mode.current.widerMode !== mode.current._widerMode) {
        mode.current.widerMode = !mode.current.widerMode;
        setUnitSize();
      }
    };
    window.addEventListener("resize", updateResize);
    return () => {
      window.removeEventListener("resize", updateResize);
    };
  }, []);

  

  useEffect(()=>{
    const updateResize=()=>{
  
        const svgWidth = svgRef.current.clientWidth;
        const svgLength = svgWidth - skillHalfSize.current.pxCircle*2 - skillHalfSize.current.pxCircleEnd*2;
        const barEndPosition = (svgLength * skill.percent / 100) + skillHalfSize.current.pxCircle + skillHalfSize.current.pxCircleEnd ;
    
        rootRef.current.style.height = '';
  


        barRef.current.setAttributeNS(null,'x',skillHalfSize.current.pxCircle);
        barBGRef.current.setAttributeNS(null,'y',`calc(${skillHalfSize.current.circle} - ${skillHalfSize.current.barHeight} * 1.5 )`);
        barBGRef.current.setAttributeNS(null,'rx',skillHalfSize.current.barHeight);
        barBGRef.current.setAttributeNS(null,'ry',skillHalfSize.current.barHeight);
    
        barHead1Ref.current.setAttributeNS(null,'cx',skillHalfSize.current.pxCircle);
        barHead1Ref.current.setAttributeNS(null,'cy',skillHalfSize.current.pxCircle);
        barHead1Ref.current.setAttributeNS(null,'r', skillHalfSize.current.pxCircle);

        barTail1Ref.current.setAttributeNS(null,'cy', skillHalfSize.current.pxCircle);
        barTail1Ref.current.setAttributeNS(null,'r', skillHalfSize.current.pxCircleEnd);

        if(eval(skillCondition())){
          barHead2Ref.current.style.display = 'none';
          barTail2Ref.current.style.display = 'none';

          barRef.current.style.width = barEndPosition +'px';
          barRef.current.setAttributeNS(null,'y', skillHalfSize.current.pxCircle - skillHalfSize.current.pxBarHeight);
          barRef.current.style.height = `calc(${skillHalfSize.current.barHeight}*2)`;
          
          barTail1Ref.current.setAttributeNS(null,'cx',barEndPosition + skillHalfSize.current.pxCircle);

          percentRef.current.setAttributeNS(null,'transform', `matrix(1,0,0,1,${barEndPosition + skillHalfSize.current.pxCircle},${skillHalfSize.current.pxCircle})`);
          [textNameRef,textDateRef].forEach(text=>{
            text.current.style.opacity = 0;
          })

        }else{
          barHead2Ref.current.style.display = 'initial';
          barTail2Ref.current.style.display = 'initial';

          barRef.current.style.width = svgWidth - skillHalfSize.current.pxCircleEnd*2 + 'px';
          barRef.current.setAttributeNS(null,'y', skillHalfSize.current.pxCircle * 0.5 - skillHalfSize.current.pxBarHeight);
          barRef.current.style.height = skillHalfSize.current.pxCircle*2 + skillHalfSize.current.pxBarHeight*2 + 'px';
        
          barHead2Ref.current.setAttributeNS(null,'cx',skillHalfSize.current.pxCircle);
          barHead2Ref.current.setAttributeNS(null,'cy',skillHalfSize.current.pxCircle*2);
          barHead2Ref.current.setAttributeNS(null,'r', skillHalfSize.current.pxCircle);

          barTail1Ref.current.setAttributeNS(null,'cx',svgWidth - skillHalfSize.current.pxCircleEnd);

          barTail2Ref.current.setAttributeNS(null,'cx', svgWidth - skillHalfSize.current.pxCircleEnd);
          barTail2Ref.current.setAttributeNS(null, 'cy', skillHalfSize.current.pxCircle*2);
          barTail2Ref.current.setAttributeNS(null,'r', skillHalfSize.current.pxCircleEnd);

          
          percentRef.current.setAttributeNS(null, 'transform',`matrix(1,0,0,1,${skillHalfSize.current.pxCircle},${skillHalfSize.current.pxCircle * 2.35})`);
          [textNameRef,textDateRef].forEach(text=>{
            text.current.style.opacity = 1;
          })
        }
       
        if(callGraphTL.current !== null){
          callGraphTL.current.clear();
          callGraphTL800.current.clear();
          expandGraphTL.current.clear();
        }
      // }
        // if(innerWidth > 800){
        //   gsap.set(barRef.current,{
        //     width: barEndPosition +'px',
        //     height: `calc(${skillHalfSize.current.barHeight}*2)`,
        //     attr: {y:skillHalfSize.current.pxCircle - skillHalfSize.current.pxBarHeight}
        //   })
        // }else{
        //   gsap.set(barRef.current,{
        //     width: svgWidth - skillHalfSize.current.pxCircleEnd*2 + 'px',
        //     height: skillHalfSize.current.pxCircle*2 + skillHalfSize.current.pxBarHeight*2 + 'px',
        //     attr: {y:skillHalfSize.current.pxCircle * 0.5 - skillHalfSize.current.pxBarHeight}
        //   })
        // }
        // gsap.set(barRef.current,{
        //   attr: {x:skillHalfSize.current.pxCircle}
        // })
        // gsap.set(barHead1Ref.current,{
        //   attr: {cx: skillHalfSize.current.pxCircle, cy: skillHalfSize.current.pxCircle, r: skillHalfSize.current.pxCircle}
        // })
    
        // if(innerWidth > 800){
        //   gsap.set(barHead2Ref.current,{
        //     attr: {cx: skillHalfSize.current.pxCircle, cy: skillHalfSize.current.pxCircle*2, r: skillHalfSize.current.pxCircle}
        //   })
        // }
    
    
        // if(innerWidth > 800){
        //   gsap.set(barTail1Ref.current,{
        //     attr: {cx: barEndPosition + skillHalfSize.current.pxCircle}
        //   })
        // }else{
        //   gsap.set(barTail1Ref.current,{
        //     attr: {cx: svgWidth - skillHalfSize.current.pxCircleEnd}
        //   })
        // }
        // gsap.set(barTail1Ref.current,{
        //   attr: {cy: skillHalfSize.current.pxCircle, r: skillHalfSize.current.pxCircleEnd}
        // })
    
        // if(innerWidth <= 800){
        //   gsap.set(barTail2Ref.current,{
        //     attr: {cx: svgWidth - skillHalfSize.current.pxCircleEnd, cy: skillHalfSize.current.pxCircle*2, r: skillHalfSize.current.pxCircleEnd}
        //   })
        // }
  
        
        // if(innerWidth > 800){
        //   gsap.set(percentRef.current,{
        //     transform: `matrix(1,0,0,1,${barEndPosition + skillHalfSize.current.pxCircle},${skillHalfSize.current.pxCircle})`
        //   })
        //   gsap.set([textNameRef.current,textDateRef.current],{
        //     opacity: 0
        //   })
        // }else{
        //   gsap.set(percentRef.current,{
        //     transform: `matrix(1,0,0,1,${skillHalfSize.current.pxCircle},${skillHalfSize.current.pxCircle * 2.35})`
        //   })
        //   gsap.set([textNameRef.current,textDateRef.current],{
        //     opacity: 1
        //   })
        // }
        if(callGraphTL.current !== null) callGraphTL.current.clear();
        if(callGraphTL800.current !== null) callGraphTL800.current.clear();
        if(expandGraphTL.current !== null)  expandGraphTL.current.clear();
        
      }
      
    window.addEventListener('resize',updateResize);
    return ()=>{
      window.removeEventListener('resize',updateResize);
    }
  },[])

  const callGraph = useCallback(()=>{
    // console.log('skillHalfSize', skillHalfSize)
    // if(clickAfterContext === "skill"){
 

      barRef.current.style.width = skillHalfSize.current.pxCircle + skillHalfSize.current.pxCircleEnd;
      barRef.current.style.height = `calc(${skillHalfSize.current.barHeight}*2)`;
      barRef.current.setAttributeNS(null, 'x', skillHalfSize.current.pxCircle);
      barRef.current.setAttributeNS(null, 'y', skillHalfSize.current.pxCircle - skillHalfSize.current.pxBarHeight);
      barBGRef.current.style.height = `calc(${skillHalfSize.current.barHeight}* 3)`;
      barBGRef.current.setAttributeNS(null,'x',0);
      barBGRef.current.setAttributeNS(null,'y',`calc(${skillHalfSize.current.circle} - ${skillHalfSize.current.barHeight} * 1.5 )`);
      barBGRef.current.setAttributeNS(null,'rx',skillHalfSize.current.barHeight);
      barBGRef.current.setAttributeNS(null,'ry',skillHalfSize.current.barHeight);
      barHead1Ref.current.setAttributeNS(null,'cx',skillHalfSize.current.circle);
      barHead1Ref.current.setAttributeNS(null,'cy',skillHalfSize.current.circle);
      barHead1Ref.current.setAttributeNS(null,'r',skillHalfSize.current.circle);
      barHead2Ref.current.setAttributeNS(null,'cx',skillHalfSize.current.circle);
      barHead2Ref.current.setAttributeNS(null,'r',skillHalfSize.current.circle);
      barTail1Ref.current.setAttributeNS(null,'cy',skillHalfSize.current.circle);
      barTail1Ref.current.setAttributeNS(null,'r',skillHalfSize.current.circleEnd);
      barTail2Ref.current.setAttributeNS(null,'r',skillHalfSize.current.circleEnd);
      percentRef.current.setAttributeNS(null,'transform',`matrix(1,0,0,1,${skillHalfSize.current.pxCircle*3},${skillHalfSize.current.pxCircle})`);


      if(eval(skillCondition())){
        const svgLength = svgRef.current.clientWidth - skillHalfSize.current.pxCircle*2 - skillHalfSize.current.pxCircleEnd*2;
        const tailStartPosition = skillHalfSize.current.pxCircle*2 + skillHalfSize.current.pxCircleEnd;
        const barEndPosition = (svgLength * skill.percent / 100) + skillHalfSize.current.pxCircle + skillHalfSize.current.pxCircleEnd ;

        barHead2Ref.current.style.display = 'none';
        barTail2Ref.current.style.display = 'none';
        
        callGraphTL.current
          .to(barRef.current,{
              width: barEndPosition,
              duration: TV.skillTLDuration,
              ease: TV.skillTLEase
            },0
          )
          .fromTo(barTail1Ref.current,{
              attr: {cx: tailStartPosition}
            },{
              attr:  {cx: barEndPosition + skillHalfSize.current.pxCircleEnd},
              duration: TV.skillTLDuration,
              ease: TV.skillTLEase
            },0
          )
          .fromTo(percentRef.current,{
              attr:{transform:`matrix(1,0,0,1,${tailStartPosition},${skillHalfSize.current.pxCircle})`}
            },{
              attr:{transform:`matrix(1,0,0,1,${barEndPosition + skillHalfSize.current.pxCircleEnd},${skillHalfSize.current.pxCircle})`},
              duration: TV.skillTLDuration,
              ease: TV.skillTLEase
            },0
          )
        callGraphTL.current.play();
      }else{
        const tailStartPosition = skillHalfSize.current.pxCircle*2 + skillHalfSize.current.pxCircleEnd;
        const fullpercent = svgRef.current.clientWidth - skillHalfSize.current.pxCircleEnd;

        barHead2Ref.current.style.display = 'initial';
        barTail2Ref.current.style.display = 'initial';
        
        callGraphTL800.current
          .fromTo(rootRef.current,{
              height: skillHalfSize.current.pxCircle*2
            },{
              height: skillHalfSize.current.pxCircle*3,
              duration: TV.skillTLDuration800,
              ease: TV.skillTLEase800
            },0
          )
          .fromTo(barRef.current,{
              height: skillHalfSize.current.pxCircle
            },{
              height: skillHalfSize.current.pxCircle*2 + skillHalfSize.current.pxBarHeight*2,
              duration: TV.skillTLDuration800,
              ease: TV.skillTLEase800
            },0
          )
          .to(barRef.current,{   
              attr: {y:skillHalfSize.current.pxCircle * 0.5 - skillHalfSize.current.pxBarHeight},
              width: fullpercent - skillHalfSize.current.pxCircle,
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
              attr: {cy: skillHalfSize.current.pxCircle},
            },{
              attr: {cy: skillHalfSize.current.pxCircle*2},
              duration: TV.skillTLDuration800,
              ease: TV.skillTLEase800
            },
            0
          )

          .fromTo(barTail1Ref.current,{
                attr: {cx: tailStartPosition}
              },{
                attr: {cx: fullpercent},
                duration: TV.skillTLDuration800,
                ease: TV.skillTLEase800
              },0
          )
          .fromTo(barTail2Ref.current,{
              attr:{cx: tailStartPosition,
                    cy: skillHalfSize.current.pxCircle*1}
            },{
              attr:{cx: fullpercent,
                    cy: skillHalfSize.current.pxCircle*2},
              duration: TV.skillTLDuration800,
              ease: TV.skillTLEase800
            },0
          )

          .fromTo(percentRef.current,{
                attr:{transform:`matrix(1,0,0,1,${skillHalfSize.current.pxCircle},${skillHalfSize.current.pxCircle})`},
            },{
                attr:{transform:`matrix(1,0,0,1,${skillHalfSize.current.pxCircle},${skillHalfSize.current.pxCircle * 2.35})`},
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
    // }
  },[])
  



  const getStops = useCallback((skill,j)=>{
      let stops = skill['color'].map((color,i)=>{
      let offset = colorOffset[i];
      let stopColor = RANDOM_COLOR[(startRandomColor + i +j)%10];
      let stop = <stop key={skill.path+i}offset={offset} stopColor={stopColor} ref={eval("skillColor"+(i+1)+"Ref")}></stop>;
      return stop;
    });
    return stops;
  },[])

  const onMouseEnter = useCallback((e)=>{
    if(eval(skillCondition())){
    //   if(innerWidth>800){

        const svgWidth = svgRef.current.clientWidth;
        const color1 = RANDOM_COLOR[(startRandomColor + 0 +j)%10];
        const color2 = RANDOM_COLOR[(startRandomColor + 1 +j)%10];
        const svgLength = svgWidth - skillHalfSize.current.pxCircle*2 - skillHalfSize.current.pxCircleEnd*2;
        const barEndPosition = (svgLength * skill.percent / 100) + skillHalfSize.current.pxCircle + skillHalfSize.current.pxCircleEnd ;
   
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
              width: svgWidth - skillHalfSize.current.pxCircleEnd*2,
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
              attr:{cx: barEndPosition + skillHalfSize.current.pxCircle},
            },{
              attr:{cx: svgWidth - skillHalfSize.current.pxCircleEnd},
              duration:1,
              ease: "bounce.out"
            },0
          )
  
          .fromTo(percentRef.current,
            {
              attr:{transform:`matrix(1,0,0,1,${barEndPosition + skillHalfSize.current.pxCircle},${skillHalfSize.current.pxCircle})`},
            },{
              attr:{transform:`matrix(1,0,0,1,${svgWidth - skillHalfSize.current.pxCircleEnd},${skillHalfSize.current.pxCircle})`},
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
    // }
  },[])
  const onMouseLeave = useCallback((e)=>{
    if(eval(skillCondition())) expandGraphTL.current.reverse()
  },[])


  const skillName = skill.name.replace(/\s/g, '');
  const htmlOutput =
     <div id={skillName} className="skillTrunk" key={skill.path} ref={rootRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="skillBranch">
          <div className="skillImage">
            <div>
              <p>{skill.name}</p>
              <img className="image" src={prefix + skill.path} alt={skill.name+" icon"}/>
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
            {/* <rect className="barBG" width="100%" height={`calc(${skillHalfSize.barHeight}* 3)`} x="0" y={`calc(${skillHalfSize.circle} - ${skillHalfSize.barHeight} * 1.5 )`} rx={skillHalfSize.barHeight} ry={skillHalfSize.barHeight}></rect>
            <g filter="url(#filter)">
              <rect className="bar" ref={barRef} width={`calc(${skillHalfSize.circle} + ${skillHalfSize.circle})`} height={`calc(${skillHalfSize.barHeight}*2)`} x={skillHalfSize.circle} y={skillHalfSize.pxCircle - skillHalfSize.pxBarHeight} fill={`url(#${skillName}Color)`}></rect>
              <circle className="barHead1" ref={barHead1Ref} cx={skillHalfSize.circle} cy={skillHalfSize.circle} r={skillHalfSize.circle} fill={RANDOM_COLOR[(startRandomColor+j)%10]}></circle>
              <circle className="barHead2" ref={barHead2Ref} cx={skillHalfSize.circle} cy={skillHalfSize.circle} r={skillHalfSize.circle} fill={RANDOM_COLOR[(startRandomColor+j)%10]}></circle>
              <circle className="barTail1" ref={barTail1Ref} cx={`calc(${skillHalfSize.circle} * 2 + ${skillHalfSize.circle})`} cy={skillHalfSize.circle} r={skillHalfSize.circleEnd} fill={RANDOM_COLOR[(startRandomColor+j + 1) %10]}></circle>
              <circle className="barTail2" ref={barTail2Ref} cx={`calc(${skillHalfSize.circle} * 2 + ${skillHalfSize.circle})`} cy={skillHalfSize.circle} r={skillHalfSize.circleEnd} fill={RANDOM_COLOR[(startRandomColor+j + 1) %10]}></circle>
            </g>
            <text ref={percentRef} className="percent" transform={`matrix(1,0,0,1,${skillHalfSize.pxCircle*3},${skillHalfSize.pxCircle})`} textAnchor="middle" alignmentBaseline="middle">{skill.percent+"%"}</text> */}
            <rect className="barBG" ref={barBGRef} width="100%"></rect>
            <g filter="url(#filter)">
              <rect className="bar" ref={barRef} fill={`url(#${skillName}Color)`}></rect>
              <circle className="barHead1" ref={barHead1Ref} fill={RANDOM_COLOR[(startRandomColor+j)%10]}></circle>
              <circle className="barHead2" ref={barHead2Ref} fill={RANDOM_COLOR[(startRandomColor+j)%10]}></circle>
              <circle className="barTail1" ref={barTail1Ref} fill={RANDOM_COLOR[(startRandomColor+j + 1) %10]}></circle>
              <circle className="barTail2" ref={barTail2Ref} fill={RANDOM_COLOR[(startRandomColor+j + 1) %10]}></circle>
            </g>
            <text ref={percentRef} className="percent" textAnchor="middle" alignmentBaseline="middle">{skill.percent+"%"}</text>
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