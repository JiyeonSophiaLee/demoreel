import TV, { convertToPix } from './transitionValue.js'

const HalfCircleSize = TV.halfCircleSize;
const HalfCircleSizeEnd = TV.halfCircleSizeEnd;
const HalfBarHeight = TV.halfBarHeight;

const HalfCircleSize1400 = TV.halfCircleSize1400;
const HalfCircleSizeEnd1400 = TV.halfCircleSizeEnd1400;
const HalfBarHeight1400 = TV.halfBarHeight1400;

const HalfCircleSize800 = TV.halfCircleSize800;
const HalfCircleSizeEnd800 = TV.halfCircleSizeEnd800;
const HalfBarHeight800 = TV.halfBarHeight800;

let halfCircleSize;
// let halfCircleSizeNumb;

let halfCircleSizeEnd;
// let halfCircleSizeEndNumb;

let halfBarHeight;
// let halfBarHeightNumb;

// const UNIT = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize').replace(/[0-9]/g, '');




export function hasTouchScreen(){
  let touchScreen;
  if ("maxTouchPoints" in navigator) {
      touchScreen = navigator.maxTouchPoints > 0;
  } else if ("msMaxTouchPoints" in navigator) {
      touchScreen = navigator.msMaxTouchPoints > 0;
  } else {
      let mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
          touchScreen = !!mQ.matches;
      } else if ('orientation' in window) {
          touchScreen = true; // deprecated, but good fallback
      } else {
          // Only as a last resort, fall back to user agent sniffing
          let UA = navigator.userAgent;
          touchScreen = (
              /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
              /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
          );
      }
  }
  return touchScreen
}



// setUnitSize();


function setUnitSize(){
  let screenSize;

  if(innerWidth >= 1400){
    screenSize = '1400';
    
  }else if(innerWidth > 800){
    screenSize = '';
  }else{
    screenSize = '800';
  }
  
  halfCircleSize = eval('HalfCircleSize'+screenSize)
  halfCircleSizeEnd = eval('HalfCircleSizeEnd'+screenSize)
  halfBarHeight = eval('HalfBarHeight'+screenSize)

  // halfCircleSizeNumb = parseFloat(halfCircleSize);
  // halfCircleSizeEndNumb = parseFloat(halfCircleSizeEnd);
  // halfBarHeightNumb = parseFloat(halfBarHeight);
  
}
function SetProperty(name, path, percent, color, date, size){
  this.name = name;
  this.path = path;
  this.percent = percent;
  this.color = color;
  this.date = date;
  this.size = size;
}
const Maya              = new SetProperty('Maya'              ,'/assets/images/icons/Maya.png'             , 80, ['#92c6cc', '#106768'], 'from 2007', 500 );
const Vray              = new SetProperty('Vray'              ,'/assets/images/icons/Vray.png'             , 82, ['#fba547', '#8fb6e2'], 'from 2014', 512 );
const Arnold            = new SetProperty('Arnold'            ,'/assets/images/icons/Arnold.png'           , 85, ['#8dc9d2', '#1f6571'], 'from 2017', 400 );
const Zbrush            = new SetProperty('Zbrush'            ,'/assets/images/icons/Zbrush.png'           , 60, ['#464646', '#242424'], 'from 2015', 3737);
const Houdini           = new SetProperty('Houdini'           ,'/assets/images/icons/Houdini.png'          , 15, ['#fece5f', '#f05023'], 'from 2018', 309 );
const MarvelousDesigner = new SetProperty('Marvelous Designer','/assets/images/icons/MarvelousDesigner.png', 20, ['#ffea1e', '#0a0a0a'], 'from 2014', 256 );
const SubstancePainter  = new SetProperty('Substance Painter' ,'/assets/images/icons/SubstancePainter.png' , 40, ['#e2212f', '#e2212f'], 'from 2015', 648 );
const SubstanceDesigner = new SetProperty('Substance Designer','/assets/images/icons/SubstanceDesigner.png', 30, ['#ef4c25', '#ef4c25'], 'from 2016', 648 );
const Mari              = new SetProperty('Mari'              ,'/assets/images/icons/Mari.png'             , 70, ['#fcc021', '#000000'], 'from 2011', 500 );
const Mudbox            = new SetProperty('Mudbox'            ,'/assets/images/icons/Mudbox.png'           , 90, ['#ea6741', '#791217'], 'from 2010', 256 );
const Photoshop         = new SetProperty('Photoshop'         ,'/assets/images/icons/Photoshop.png'        , 85, ['#85bff9', '#2c286f'], 'from 2007', 271 );
const threeDCoat        = new SetProperty('3D Coat'           ,'/assets/images/icons/threeDCoat.png'       , 75, ['#41919e', '#41919e'], 'from 2016', 1540);
const RezomUV           = new SetProperty('Rezom UV'          ,'/assets/images/icons/RezomUV.png'          , 60, ['#ef4000', '#b83808'], 'from 2014', 1000);
const AfterEffects      = new SetProperty('After Effects'     ,'/assets/images/icons/AfterEffects.png'     , 60, ['#c88fff', '#312963'], 'from 2018', 512 );
const Nuke              = new SetProperty('Nuke'              ,'/assets/images/icons/Nuke.png'             , 70, ['#f9b41a', '#000000'], 'from 2011', 526 );
const HTML              = new SetProperty('HTML'              ,'/assets/images/icons/HTML.png'             , 95, ['#d1382b', '#e93e30'], 'from 2019', 256 );
const CSS3              = new SetProperty('CSS3'              ,'/assets/images/icons/CSS3.png'             , 80, ['#29a5d1', '#208db8'], 'from 2019', 526 );
const Javascript        = new SetProperty('Javascript'        ,'/assets/images/icons/Javascript.png'       , 70, ['#efd93b', '#f5e695'], 'from 2019', 288 );
const ThreeJS           = new SetProperty('ThreeJS'           ,'/assets/images/icons/ThreeJS.png'          , 75, ['#efd93b', '#f5e695'], 'from 2019', 1034);
const GreenSock         = new SetProperty('Green Sock'        ,'/assets/images/icons/GreenSock.png'        , 75, ['#efd93b', '#f5e695'], 'from 2019', 1483);
const Python            = new SetProperty('Python'            ,'/assets/images/icons/Python.png'           , 45, ['#3774a8', '#ffd647'], 'from 2019', 360 );

const skillList = [Maya,Vray,Arnold,Zbrush,Houdini,MarvelousDesigner,SubstancePainter,SubstanceDesigner,Mari,Mudbox,Photoshop,threeDCoat,RezomUV,AfterEffects,Nuke,HTML,CSS3,Javascript,ThreeJS,GreenSock,Python]
export default skillList;

// const SkillsTLPath = '/assets/images/icons/';
export const colorOffset = ['10%','90%'];
// const RANDOM_COLOR = ['#628ba7','#dadbe0','#b1b4e1','#8f9ca0','#001f44','#fe9ac3','#fde6c7','#ffaeaa','#fe5f7c','#ffb582','#30d9e7','#00bcad','#00a295','#007bc8','#006ebe'];
export const RANDOM_COLOR = ['#dc6c6c','#dc6cae','#dc6cc8','#816cdc','#6ca1dc','#6cdccb','#6cdc6f','#b1dc6c','#dccd6c','#dc9e6c'];
export const startRandomColor = 4;

// createSkillSet();
// window.addEventListener('resize', SkillsTLUpdate);

export function Skills(id,skillListTL){
  this.id = id;
  this.skillListTL = skillListTL;

 
  this.createSkillSet();
}
Skills.prototype.createSkillSet = function(){
  let skillPack = document.createElement('li');
  // let gridLine = document.createElement('div');
  let n = 4;
  
  
  
  skillPack.classList.add('skillPack');
  // gridLine.classList.add('gridLine');
  ISU.SKILL_CONTENTS.appendChild(skillPack);
  // SKILL_CONTENTS.appendChild(gridLine);
  ISU.SKILL_CONTENTS.style.display = 'none';


  for(let skill in skillList){
    function getStops(){
      let stops =' ';
      
      skillList[skill]['color'].forEach((color,i)=>{
        let offset = `offset="${colorOffset[i]}"`;
        let stopColor = `stop-color="${RANDOM_COLOR[(n + i)%10]}"`;
        let stop = `<stop ${offset} ${stopColor}></stop>`;

        stops += stop;
      });
      return stops;
    }
    let stops = getStops();
    
    
    let group =
      `<div id="${skill}" class="_skill">
        <div class="_skillChild">
          <div class="skillImage">
            <div>
                <p>${skillList[skill]['name']}</p>
                <img src="${eval(skill)}"></img>

            </div>
          </div>
          <svg class="skillGraph">
            <defs> 
              <filter id="filter" color-interpolation-filters="sRGB">
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="cm"></feColorMatrix>
              </filter>
              <linearGradient id="${skill}Color" x1="0%" x2="100%" y1="0%" y2="0%">
                ${stops}
              </linearGradient>
            </defs>
            <rect class="barBG" width="100%" height="calc(${halfBarHeight}* 3)" x="0" y="calc(${halfCircleSize} - ${halfBarHeight} * 1.5 )" rx="${halfBarHeight}" ry="${halfBarHeight}"></rect>
            <g filter="url(#filter)">
              <rect class="bar" width="calc(${halfCircleSize} + ${halfCircleSizeEnd})" height="calc(${halfBarHeight}*2)" x="${halfCircleSize}" y="${ISU.remToPx(halfCircleSizeNumb - halfBarHeightNumb)}" fill="url(#${skill}Color)"></rect>
              <circle class="barHead1" cx="${halfCircleSize}" cy="${halfCircleSize}" r="${halfCircleSize}" fill="${RANDOM_COLOR[n%10]}"></circle>
              <circle class="barHead2" cx="${HalfCircleSize800}" cy="${HalfCircleSize800}" r="${HalfCircleSize800}" fill="${RANDOM_COLOR[n%10]}"></circle>
              <circle class="barTail1" cx="calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd})" cy="${halfCircleSize}" r="${halfCircleSizeEnd}" fill="${RANDOM_COLOR[(n + 1) %10]}"></circle>
              <circle class="barTail2" cx="calc(${HalfCircleSize800} * 2 + ${HalfCircleSizeEnd800})" cy="${HalfCircleSize800}" r="${HalfCircleSizeEnd800}" fill="${RANDOM_COLOR[(n + 1) %10]}"></circle>
            </g>
            <text class="percent" transform="matrix(1,0,0,1,${ISU.remToPx(halfCircleSizeNumb*2 + halfCircleSizeEndNumb)},${ISU.remToPx(halfCircleSizeNumb)})" text-anchor="middle" alignment-baseline="middle">${skillList[skill]['width']+'%'}</text>
          </svg>
          <div class="skillInfo">
            <div>
              <div>
                <div class="skillInfo_Name _skillInfo">
                  <div class="skillInfoName skillInfoText">${skillList[skill]['name']}</div>
                  <div class="skillinfoNameBG skillInfoBG" style="background:${RANDOM_COLOR[n%10]}"></div>
                </div>
                <div class="skillInfo_Date _skillInfo">
                  <div class="skillInfoDate skillInfoText">${skillList[skill]['date']}</div>
                  <div class="skillinfoDateBG skillInfoBG" style="background:${RANDOM_COLOR[(n+1)%10]}"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    
      n += 1;
      
      skillPack.innerHTML += group;
    };

  skillListTL.forEach((tl)=>{
    tl.setDefaultValues()
  })
}



//---------Even Listener--------------//

Skills.prototype.callSkills = function(){
  ISU.SKILL_CONTENTS.style.display = 'initial';

  if(innerWidth > 800){
    skillListTL.forEach((tl)=>{
      tl.getCallGraphTL();          
    })
  }else{
    skillListTL.forEach((tl)=>{
      tl.getCallGraphTL800();           
    })
  }
}
Skills.prototype.stopSkills = function(){
  ISU.SKILL_CONTENTS.style.display = 'none';
  
  if(window.innerWidth > 800){
    skillListTL.forEach((tl)=>{
        tl.callGraphTL.reverse();
    })
  }else{
    skillListTL.forEach((tl)=>{
      tl.callGraphTL800.reverse();
    })
  }

}
Skills.prototype.updateResize = function(){
  // if(biggerElem == ISU.SKILL){
    skillListTL.forEach((tl)=>{
        tl.updateResize();
    });
  // }
}















//-----------------------------------------------//
//-------------------Skills TL-------------------//







function SkillsTL(id){
  this.id = id;
  this.elem = document.getElementById(id)

  this.barTail_startPosition_cx = ISU.remToPx(halfCircleSizeNumb)*2 + ISU.remToPx(halfCircleSizeEndNumb);


  this.callGraphTL = gsap.timeline({paused:true});
  this.callGraphTL800 = gsap.timeline({paused:true});
  this.expandGraphTL = gsap.timeline({paused:true});
  

  this.clickOn = false;

  // this.createSkillBars()


}


SkillsTL.prototype.setDefaultValues = function(){
  this.elem = document.getElementById(this.id);
  this.bar = ISU.select(`#${this.id} .bar`);
  this.barBG = ISU.select(`#${this.id} .barBG`);
  this.barHead1 = ISU.select(`#${this.id} .barHead1`);
  this.barHead2 = ISU.select(`#${this.id} .barHead2`);
  this.barTail1 = ISU.select(`#${this.id} .barTail1`);
  this.barTail2 = ISU.select(`#${this.id} .barTail2`)
  this.percent = ISU.select(`#${this.id} .percent`);
  this.skillInfo = ISU.select(`#${this.id} .skillInfo`);
  this.skillInfoBG = ISU.selectAll(`#${this.id} .skillInfoBG`);
  this.skillInfoText = ISU.selectAll(`#${this.id} .skillInfoText`);
  this.skillColor1 = [ISU.select(`#${this.id}Color stop:nth-child(1)`)];
  this.skillColor2 = [ISU.select(`#${this.id}Color stop:nth-child(2)`)];
  this.skillColor1.push(window.getComputedStyle(this.skillColor1[0]).stopColor)
  this.skillColor2.push(window.getComputedStyle(this.skillColor2[0]).stopColor)


  this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  this.hoveroverOffHandler = this.hoveroverOff.bind(this);
  this.clickHandler = this.click.bind(this);
  


  if(!hasTouchScreen){
    this.elem.addEventListener('mouseenter',this.hoveroverOnHandler);
    this.elem.addEventListener('mouseleave',this.hoveroverOffHandler);
  }else{
    this.elem.addEventListener('click',this.clickHandler);
  }
    
  // this.setWidths();
  // this.getExpandGraph();
}



SkillsTL.prototype.setWidths = function(){
  let svgWidth = ISU.select(`#skill .contents svg`).clientWidth;


  // console.log(skillList[this.id])
  this.barEachWidth = (svgWidth - ( ISU.remToPx(halfCircleSizeNumb) + ISU.remToPx(halfCircleSizeEndNumb))) * skillList[this.id]['width'] / 100;
  this.barCircleEachEnd = this.barEachWidth + ISU.remToPx(halfCircleSizeNumb);
  this.barFullWidth = svgWidth - ISU.remToPx(halfCircleSizeEndNumb);
}

SkillsTL.prototype.getCallGraphTL = function(){
  this.setWidths();
  setUnitSize();
  
  this.bar.style.height = `calc(${halfBarHeight}*2)`;
  this.bar.setAttributeNS(null,'y', ISU.remToPx(halfCircleSizeNumb - halfBarHeightNumb) +'px');
  this.barBG.setAttributeNS(null,'height', ISU.remToPx(halfBarHeightNumb * 3 )+'px');
  this.barBG.setAttributeNS(null,'y', ISU.remToPx(halfCircleSizeNumb - halfBarHeightNumb *1.5 ) +'px');
  this.barHead1.setAttributeNS(null,'cx',halfCircleSize);
  this.barHead1.setAttributeNS(null,'cy',halfCircleSize);
  this.barHead1.setAttributeNS(null,'r', halfCircleSize);
  // this.barTail1.setAttributeNS(null,'cx', this.barFullWidth);
  this.barTail1.setAttributeNS(null,'cy', halfCircleSize);
  this.barTail1.setAttributeNS(null,'r', halfCircleSizeEnd);


  this.callGraphTL.clear();
  this.callGraphTL
    .fromTo(this.bar,{
        width: ISU.remToPx(halfCircleSizeNumb) + ISU.remToPx(halfCircleSizeEndNumb)
      },{
        width: this.barEachWidth,
        duration: ISU.transitionValue['skillTLDuration'],
        ease: ISU.transitionValue['skillTLEase']
      },0
    )
    .fromTo(this.barTail1,{
        attr: {cx: this.barTail_startPosition_cx}
      },{
        attr:  {cx: this.barCircleEachEnd},
        duration: ISU.transitionValue['skillTLDuration'],
        ease: ISU.transitionValue['skillTLEase']
      },0
    )
    .fromTo(this.percent,{
        attr:{transform:`matrix(1,0,0,1,${this.barTail_startPosition_cx},${ISU.remToPx(halfCircleSizeNumb)})`}
      },{
        attr:{transform:`matrix(1,0,0,1,${this.barCircleEachEnd},${ISU.remToPx(halfCircleSizeNumb)})`},
        duration: ISU.transitionValue['skillTLDuration'],
        ease: ISU.transitionValue['skillTLEase']
      },0
    )
  this.callGraphTL.play();
    // this.playCallGraphTL();
}

SkillsTL.prototype.setWidths800 = function(){
  this.barFullWidth = ISU.select(`#skill .contents svg`).clientWidth - ISU.remToPx(halfCircleSizeEndNumb);
}

SkillsTL.prototype.getCallGraphTL800 = function(){
  this.setWidths800();
  setUnitSize();


  this.bar.setAttributeNS(null,'y', ISU.remToPx(halfCircleSizeNumb - halfBarHeightNumb)+'px');
  this.barHead1.setAttributeNS(null,'cx',halfCircleSize);
  this.barHead1.setAttributeNS(null,'cy',halfCircleSize);
  this.barHead1.setAttributeNS(null,'r', halfCircleSize);
  // this.barTail1.setAttributeNS(null, 'cx', this.barFullWidth);
  // this.barTail1.setAttributeNS(null,'cy', halfCircleSize);
  // this.barTail1.setAttributeNS(null,'r', halfCircleSizeEnd);


  this.callGraphTL800.clear();
  this.callGraphTL800
    .fromTo(this.elem,{
      height: ISU.remToPx(halfCircleSizeNumb*2)
      },{
        height: ISU.remToPx(halfCircleSizeNumb*3),
        duration: ISU.transitionValue['skillTLDuration800'],
        ease: ISU.transitionValue['skillTLEase800']
      },0
    )
    .fromTo(this.bar,{
        height: ISU.remToPx(halfCircleSizeNumb)
      },{
        height: ISU.remToPx(halfCircleSizeNumb*2 + halfBarHeightNumb*2),
        duration: ISU.transitionValue['skillTLDuration800'],
        ease: ISU.transitionValue['skillTLEase800']
      },0
    )
    .to(this.bar,
      {   
        attr: {y:ISU.remToPx(halfCircleSizeNumb * 0.5 - halfBarHeightNumb)},
        width: this.barFullWidth - ISU.remToPx(halfCircleSizeNumb),
        duration: ISU.transitionValue['skillTLDuration800'],
        // transformOrigin:"center center",
        ease: ISU.transitionValue['skillTLEase800']
      },0
    )

    .to(this.barHead1,
      {
        scale:0.95,
        // transformOrigin:"center center", 
        duration:0.5,
        ease: "elastic.out(1, 0.3)"
      },0
    )
    .to(this.barHead1,
      {
        scale:1,
        // transformOrigin:"center center",
        duration:0.5,
        ease: "elastic.out(1, 0.3)"
      },
      0.5
    )
    .fromTo(this.barHead2,{
        attr: {cy: ISU.remToPx(halfCircleSizeNumb)},
      },{
        attr: {cy: ISU.remToPx(halfCircleSizeNumb*2)},
        duration: ISU.transitionValue['skillTLDuration800'],
        ease: ISU.transitionValue['skillTLEase800']
      },
      0
    )


    .fromTo(this.barTail1,
        {
          attr: {cx: this.barTail_startPosition_cx}
        },{
          attr: {cx: this.barFullWidth},
          duration: ISU.transitionValue['skillTLDuration800'],
          ease: ISU.transitionValue['skillTLEase800']
        },0
    )
    .fromTo(this.barTail2,
      {
        attr:{cx: this.barTail_startPosition_cx,
              cy: ISU.remToPx(halfCircleSizeNumb*1)}
      },{
        attr:{cx: this.barFullWidth,
              cy: ISU.remToPx(halfCircleSizeNumb*2)},
        duration: ISU.transitionValue['skillTLDuration800'],
        ease: ISU.transitionValue['skillTLEase800']
      },0
    )

    
    .fromTo(this.percent,
      {
          attr:{transform:`matrix(1,0,0,1,${ISU.remToPx(halfCircleSizeNumb)},${ISU.remToPx(halfCircleSizeNumb)})`},
      },{
          attr:{transform:`matrix(1,0,0,1,${ISU.remToPx(halfCircleSizeNumb)},${ISU.remToPx(halfCircleSizeNumb * 2.35)})`},
          duration: ISU.transitionValue['skillTLDuration800'],
          ease: ISU.transitionValue['skillTLEase800']
      },0
    )

//------------this is needed to check it later----------------
    // // .to(this.skillInfo,
    // //     {
    // //         height: ISU.remToPx(halfCircleSizeNumb) * 3,
    // //         duration:0.3,
    // //         ease:"power2.inOut"
    // //     },
    // //     0
    // // )
    // .to(this.skillInfoBG,
    // {
    //   background: 'rgb(254,246,222)',
    //   scaleY:1,
    //   duration:0.3,
    //   ease: ISU.transitionValue['skillTLEase'],
    //   stagger: 0.3,
    // },0
    // )
    // .to(this.skillInfoBG,
    //   {
    //     background: 'rgb(254,246,222)',
    //     scaleY:0,
    //     duration:0.3,
    //     ease: ISU.transitionValue['skillTLEase'],
    //     stagger: 0.3,
    //   },0.3
    // )
    .to(this.skillInfoText,
      {
        opacity:1,
        duration:0.1,
        stagger: 0.3,
      },0.3
    )


  this.callGraphTL800.play();
}


SkillsTL.prototype.getExpandGraph = function(){
  this.setWidths();

  // this.expandGraphTL.clear();
  this.expandGraphTL
    .fromTo(this.skillColor1[0],{
        stopColor: this.skillColor1[1]
      },{
        stopColor:'#ffffff',
        duration:1,
        ease:"power2.inOut"
      },0
    )
    .fromTo(this.skillColor2[0],{
        stopColor: this.skillColor2[1]
      },{
        stopColor:'#ffffff',
        duration:1,
        ease:"power2.inOut"
      },0
    )


    .to(this.bar,{   
        scaleY:2.3,
        duration:1,
        transformOrigin:"center center",
        ease: "elastic.out(1, 0.3)"
      },0
    )
    .fromTo(this.bar,{
        width: this.barEachWidth
      },{   
        width: this.barFullWidth - ISU.remToPx(halfCircleSizeEndNumb),
        duration:1,
        ease: "bounce.out"
      },0
    )


    .fromTo(this.barHead1,{
        attr:{fill:this.skillColor1[1]}
      },{
        attr:{fill:'#ffffff'},
        duration:1,
        ease: "power2.inOut"
      },0
    )
    .to(this.barHead1,
      {
        scale:0.95,
        transformOrigin:"center center",
        duration:0.5,
        ease: "elastic.out(1, 0.3)"
      },
      0
    )
    .to(this.barHead1,
      {
        scale:1,
        transformOrigin:"center center",
        duration:0.5,
        ease: "elastic.out(1, 0.3)"
    }, 0.5
    )


    .fromTo(this.barTail1,{
       attr:{fill:this.skillColor2[1]}
      },{
        attr:{fill:'#ffffff'},
        duration:1,
        ease: "power2.inOut"
      },0
    )
    .fromTo(this.barTail1,{
        attr:{cx: this.barCircleEachEnd},
      },{
        attr:{cx: this.barFullWidth},
        duration:1,
        ease: "bounce.out"
      },0
    )

        
    .fromTo(this.percent,
      {
        attr:{transform:`matrix(1,0,0,1,${this.barCircleEachEnd},${ISU.remToPx(halfCircleSizeNumb)})`},
      },{
        attr:{transform:`matrix(1,0,0,1,${this.barFullWidth},${ISU.remToPx(halfCircleSizeNumb)})`},
        duration:1,
        ease: "bounce.out"
      },
      0
    )



    .to(this.skillInfoBG,
      {
        scaleY:1,
        duration:0.3,
        stagger: 0.3,
        ease:"power2.inOut"
      },0
    )
    .to(this.skillInfoBG,
      {
        scaleY:0,
        duration:0.3,
        stagger: 0.3,
        ease:"power2.inOut"
      },0.3
    )
    .to(this.skillInfoText,
      {
        opacity:1,
        duration:0.1,
        stagger: 0.3,
      },0.3
   )

}




//---------Click Event--------------//

SkillsTL.prototype.click = function(){

  this.elem.parentElement.addEventListener('click',(e)=>{ e.stopPropagation() });

  if(innerWidth > 800){

    if(this.clickOn != true){
      this.clickOn = true;

      this.getExpandGraph();
      this.expandGraphTL.play();
    }else{
      this.clickOn = false;

      this.expandGraphTL.reverse();
    }
  }

}

//---------Hover Over--------------//




SkillsTL.prototype.hoveroverOn = function(){
  if(innerWidth > 800){

    // if(this.clickOn != true){
    //   this.clickOn = true;
      
      this.getExpandGraph();
      this.expandGraphTL.play();
    // }
  }
}

SkillsTL.prototype.hoveroverOff = function(){
  if(innerWidth > 800){
    // this.clickOn = false;

    this.expandGraphTL.reverse();

  }
}




//---------updateResize--------------//





SkillsTL.prototype.updateResize = function(){
  setUnitSize();
  this.setWidths();

  this.elem.style.height =  '';

  
  if(innerWidth > 800){
    this.bar.style.width = this.barEachWidth +'px';
    this.bar.setAttributeNS(null,'y', ISU.remToPx(halfCircleSizeNumb - halfBarHeightNumb));
    this.bar.style.height = `calc(${halfBarHeight}*2)`;
  }else{
    this.bar.style.width = this.barFullWidth - ISU.remToPx(halfCircleSizeEndNumb) + 'px';
    this.bar.setAttributeNS(null,'y', ISU.remToPx(halfCircleSizeNumb * 0.5 - halfBarHeightNumb));
    this.bar.style.height = ISU.remToPx(halfCircleSizeNumb*2 + halfBarHeightNumb*2) + 'px';
  }
  this.bar.setAttributeNS(null,'x',halfCircleSize);

  
  this.barHead1.setAttributeNS(null,'cx',halfCircleSize);
  this.barHead1.setAttributeNS(null,'cy',halfCircleSize);
  this.barHead1.setAttributeNS(null,'r', halfCircleSize);

  if(innerWidth > 800){
    this.barHead2.setAttributeNS(null,'cx',halfCircleSize);
    this.barHead2.setAttributeNS(null,'cy',ISU.remToPx(halfCircleSizeNumb*2));
    this.barHead2.setAttributeNS(null,'r', halfCircleSize);
  }


  if(innerWidth > 800){
    this.barTail1.setAttributeNS(null,'cx',this.barCircleEachEnd);
  }else{
    this.barTail1.setAttributeNS(null,'cx',this.barFullWidth);
  }
  this.barTail1.setAttributeNS(null,'cy', halfCircleSize);
  this.barTail1.setAttributeNS(null,'r', halfCircleSizeEnd);

  if(innerWidth <= 800){
    this.barTail2.setAttributeNS(null,'cx', this.barFullWidth);
    this.barTail2.setAttributeNS(null, 'cy', ISU.remToPx(halfCircleSizeNumb*2));
    this.barTail2.setAttributeNS(null,'r', halfCircleSizeEnd);
  }





//------check this later----------//
  this.barBG.setAttributeNS(null,'height', ISU.remToPx(halfBarHeightNumb * 3 )+'px');
  this.barBG.setAttributeNS(null,'y', ISU.remToPx(halfCircleSizeNumb - halfBarHeightNumb * 1.5 ) +'px');
    
        
  if(innerWidth > 800){
    this.percent.setAttributeNS(null,'transform', `matrix(1,0,0,1,${this.barCircleEachEnd},${ISU.remToPx(halfCircleSizeNumb)})`);
  }else{
    this.percent.setAttributeNS(null, 'transform',`matrix(1,0,0,1,${ISU.remToPx(halfCircleSizeNumb)},${ISU.remToPx(halfCircleSizeNumb * 2.35)})`);
  }



  if(innerWidth > 800){
    this.skillInfoText.forEach(text=>{
      text.style.opacity = 0;
    })
  }else{
    this.skillInfoText.forEach(text=>{
      text.style.opacity = 1;
    })
  }



//     // selectAll(`#${this.id} .skillInfoBG`).forEach(bg=>{
//     //     bg.style.transform = scaleY(0);
//     // })




SkillsTL.prototype.getExpandGraph = function(){
  this.setWidths();

  // this.expandGraphTL.clear();
  this.expandGraphTL
    .fromTo(this.skillColor1[0],{
        stopColor: this.skillColor1[1]
      },{
        stopColor:'#ffffff',
        duration:1,
        ease:"power1.out"
      },0
    )
    .fromTo(this.skillColor2[0],{
        stopColor: this.skillColor2[1]
      },{
        stopColor:'#ffffff',
        duration:1,
        ease:"power1.out"
      },0
    )


    .to(this.bar,{   
        scaleY:2.3,
        duration:1,
        transformOrigin:"center center",
        ease: "elastic.out(1, 0.3)"
      },0
    )
    .fromTo(this.bar,{
        width: this.barEachWidth
      },{   
        width: this.barFullWidth - ISU.remToPx(halfCircleSizeEndNumb),
        duration:1,
        ease: "bounce.out"
      },0
    )


    .to(this.barHead1,
      {
        attr:{fill:'#ffffff'},
        duration:1,
        ease: "bounce.out"
      },0
    )
    .to(this.barHead1,
      {
        scale:0.95,
        transformOrigin:"center center",
        duration:0.5,
        ease: "elastic.out(1, 0.3)"
      },
      0
    )
    .to(this.barHead1,
      {
        scale:1,
        transformOrigin:"center center",
        duration:0.5,
        ease: "elastic.out(1, 0.3)"
    }, 0.5
    )


    .to(this.barTail1,
      {
        attr:{fill:'#ffffff'},
        duration:1
      },0
    )
    .fromTo(this.barTail1,{
        attr:{cx: this.barCircleEachEnd},
      },{
        attr:{cx: this.barFullWidth},
        duration:1,
        ease: "bounce.out"
      },0
    )

        
    .fromTo(this.percent,
        {
            attr:{transform:`matrix(1,0,0,1,${this.barCircleEachEnd},${ISU.remToPx(halfCircleSizeNumb)})`},
        },
        {
            attr:{transform:`matrix(1,0,0,1,${this.barFullWidth},${ISU.remToPx(halfCircleSizeNumb)})`},
            duration:1,
            ease: "bounce.out"
        },
        0
    )



    .to(this.skillInfoBG,
      {
        scaleY:1,
        duration:0.3,
        stagger: 0.3,
        ease:"power2.inOut"
      },0
    )
    .to(this.skillInfoBG,
      {
        scaleY:0,
        duration:0.3,
        stagger: 0.3,
        ease:"power2.inOut"
      },0.3
    )
    .to(this.skillInfoText,
      {
        opacity:1,
        duration:0.1,
        stagger: 0.3,
      },0.3
   )

}


  if(!this.callGraphTL){
    this.callGraphTL.clear();
  };
  if(!this.callGraphTL800){
    this.callGraphTL800.clear();
  };
  if(this.expandGraphTL){
    this.expandGraphTL.clear();
  };
  if(this.expandGraphTL800){
    this.expandGraphTL800.clear();
  };
    
}




//------------------------------------//




// const MayaTL = new SkillsTL('Maya');
// const VrayTL = new SkillsTL('Vray');
// const ArnoldTL = new SkillsTL('Arnold');
// const ZbrushTL = new SkillsTL('Zbrush');
// const HoudiniTL = new SkillsTL('Houdini');
// const MarvelousDesignerTL = new SkillsTL('MarvelousDesigner');
// const SubstancePainterTL = new SkillsTL('SubstancePainter');
// const SubstanceDesignerTL = new SkillsTL('SubstanceDesigner');
// const MariTL = new SkillsTL('Mari')
// const MudboxTL = new SkillsTL('Mudbox');
// const PhotoshopTL = new SkillsTL('Photoshop');
// const threeDCoatTL = new SkillsTL('threeDCoat');
// const RezomUVTL = new SkillsTL('RezomUV');
// const AfterEffectsTL = new SkillsTL('AfterEffects');
// const NukeTL = new SkillsTL('Nuke');
// const PythonTL = new SkillsTL('Python');
// const HTMLTL = new SkillsTL('HTML');
// const JavascriptTL = new SkillsTL('Javascript');
// const ThreeJSTL = new SkillsTL('ThreeJS');
// const GreenSockTL = new SkillsTL('GreenSock');
// const CSS3TL = new SkillsTL('CSS3');

// export const skillListTL = [MayaTL,VrayTL,ArnoldTL,ZbrushTL,HoudiniTL,MarvelousDesignerTL,SubstancePainterTL,SubstanceDesignerTL,MariTL,MudboxTL,PhotoshopTL,threeDCoatTL,RezomUVTL,AfterEffectsTL,NukeTL,PythonTL,HTMLTL,JavascriptTL,ThreeJSTL,GreenSockTL,CSS3TL]
