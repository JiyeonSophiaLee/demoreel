// console.log('skills.js is working');
import * as ISU from '/assets/js/InitialSetUp.js';
import _Maya from  '/assets/images/icons/Maya.png';
import _Vray from  '/assets/images/icons/Vray.png';
import _Arnold from  '/assets/images/icons/Arnold.png';
import _Zbrush from  '/assets/images/icons/Zbrush.png';
import _Houdini from  '/assets/images/icons/Houdini.png';
import _MarvelousDesigner from  '/assets/images/icons/MarvelousDesigner.png';
import _SubstancePainter from  '/assets/images/icons/SubstancePainter.png';
import _SubstanceDesigner from  '/assets/images/icons/SubstanceDesigner.png';
import _Mari from  '/assets/images/icons/Mari.png';
import _Mudbox from  '/assets/images/icons/Mudbox.png';
import _Photoshop from  '/assets/images/icons/Photoshop.png';
import _threeDCoat from  '/assets/images/icons/threeDCoat.png';
import _RezomUV from  '/assets/images/icons/RezomUV.png';
import _AfterEffects from  '/assets/images/icons/AfterEffects.png';
import _Nuke from  '/assets/images/icons/Nuke.png';
import _Python from  '/assets/images/icons/Python.png';
import _HTML from  '/assets/images/icons/HTML.png';
import _Javascript from  '/assets/images/icons/Javascript.png';
import _CSS3 from  '/assets/images/icons/CSS3.png';
import _ThreeJS from  '/assets/images/icons/ThreeJS.png';
import _GreenSock from  '/assets/images/icons/GreenSock.png';


const Maya = _Maya;
const Vray = _Vray;
const Arnold = _Arnold;
const Zbrush = _Zbrush;
const Houdini = _Houdini;
const MarvelousDesigner = _MarvelousDesigner;
const SubstancePainter = _SubstancePainter;
const SubstanceDesigner = _SubstanceDesigner;
const Mudbox = _Mudbox;
const Mari = _Mari;
const Photoshop = _Photoshop;
const threeDCoat = _threeDCoat;
const RezomUV = _RezomUV;
const AfterEffects = _AfterEffects;
const Nuke = _Nuke;
const Python = _Python;
const HTML = _HTML;
const Javascript = _Javascript;
const ThreeJS = _ThreeJS;
const GreenSock = _GreenSock;
const CSS3 = _CSS3;


const HalfCircleSize = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize');
const HalfCircleSizeEnd = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSizeEnd');
const HalfBarHeight = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight');

const HalfCircleSize1400 = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize1400');
const HalfCircleSizeEnd1400 = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSizeEnd1400');
const HalfBarHeight1400 = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight1400');

const HalfCircleSize800 = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize800');
const HalfCircleSizeEnd800 = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSizeEnd800');
const HalfBarHeight800 = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight800');

let halfCircleSize;
let halfCircleSizeNumb;

let halfCircleSizeEnd;
let halfCircleSizeEndNumb;

let halfBarHeight;
let halfBarHeightNumb;

setUnitSize();

const UNIT = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize').replace(/[0-9]/g, '');




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

  halfCircleSizeNumb = parseFloat(halfCircleSize);
  halfCircleSizeEndNumb = parseFloat(halfCircleSizeEnd);
  halfBarHeightNumb = parseFloat(halfBarHeight);
  
}


const skillList = {
  'Maya'              :{ 'name':'Maya',               'width':80, 'color': ['#92c6cc', '#106768'], 'date': 'from 2007'},
  'Vray'              :{ 'name':'Vray',               'width':82, 'color': ['#fba547', '#8fb6e2'], 'date': 'from 2014'},
  'Arnold'            :{ 'name':'Arnold',             'width':85, 'color': ['#8dc9d2', '#1f6571'], 'date': 'from 2017'},
  'Zbrush'            :{ 'name':'Zbrush',             'width':60, 'color': ['#464646', '#242424'], 'date': 'from 2015'},
  'Houdini'           :{ 'name':'Houdini',            'width':15, 'color': ['#fece5f', '#f05023'], 'date': 'from 2018'},
  'MarvelousDesigner' :{ 'name':`Marvelous Designer`, 'width':20, 'color': ['#ffea1e', '#0a0a0a'], 'date': 'from 2014'},
  'SubstancePainter'  :{ 'name':`Substance Painter`,  'width':40, 'color': ['#e2212f', '#e2212f'], 'date': 'from 2015'},
  'SubstanceDesigner' :{ 'name':`Substance Designer`, 'width':30, 'color': ['#ef4c25', '#ef4c25'], 'date': 'from 2016'},
  'Mari'              :{ 'name':'Mari',               'width':70, 'color': ['#fcc021', '#000000'], 'date': 'from 2011'},
  'Mudbox'            :{ 'name':'Mudbox',             'width':90, 'color': ['#ea6741', '#791217'], 'date': 'from 2010'},
  'Photoshop'         :{ 'name':'Photoshop',          'width':85, 'color': ['#85bff9', '#2c286f'], 'date': 'from 2007'},
  'threeDCoat'        :{ 'name':`3D Coat`,            'width':75, 'color': ['#41919e', '#41919e'], 'date': 'from 2016'},
  'RezomUV'           :{ 'name':`Rezom UV`,           'width':60, 'color': ['#ef4000', '#b83808'], 'date': 'from 2014'},
  'AfterEffects'      :{ 'name':`After Effects`,      'width':60, 'color': ['#c88fff', '#312963'], 'date': 'from 2018'},
  'Nuke'              :{ 'name':'Nuke',               'width':70, 'color': ['#f9b41a', '#000000'], 'date': 'from 2011'},
  'HTML'              :{ 'name':'HTML',               'width':95, 'color': ['#d1382b', '#e93e30'], 'date': 'from 2019'},
  'CSS3'              :{ 'name':'CSS3',               'width':80, 'color': ['#29a5d1', '#208db8'], 'date': 'from 2019'},
  'Javascript'        :{ 'name':'Javascript',         'width':70, 'color': ['#efd93b', '#f5e695'], 'date': 'from 2019'},
  'ThreeJS'           :{ 'name':'ThreeJS',            'width':75, 'color': ['#efd93b', '#f5e695'], 'date': 'from 2019'},
  'GreenSock'         :{ 'name':'Green Sock',         'width':75, 'color': ['#efd93b', '#f5e695'], 'date': 'from 2019'},
  'Python'            :{ 'name':'Python',             'width':45, 'color': ['#3774a8',' #ffd647'], 'date': 'from 2019'}
}
// const SkillsTLPath = '/assets/images/icons/';
const colorOffset = ['10%','90%'];
// const RANDOM_COLOR = ['#628ba7','#dadbe0','#b1b4e1','#8f9ca0','#001f44','#fe9ac3','#fde6c7','#ffaeaa','#fe5f7c','#ffb582','#30d9e7','#00bcad','#00a295','#007bc8','#006ebe'];
const RANDOM_COLOR = ['#dc6c6c','#dc6cae','#dc6cc8','#816cdc','#6ca1dc','#6cdccb','#6cdc6f','#b1dc6c','#dccd6c','#dc9e6c'];


// createSkillSet();
// window.addEventListener('resize', SkillsTLUpdate);

export default function Skills(id,skillListTL){
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
  

  // this.createSkillBars()


  // this.hoveroverOnHandler = this.hoveroverOn.bind(this);
  // this.hoveroverOffHandler = this.hoveroverOff.bind(this);

  // this.elem.addEventListener('mouseenter',this.hoveroverOnHandler);
  // this.elem.addEventListener('mouseleave',this.hoveroverOffHandler);

}
SkillsTL.prototype.setDefaultValues = function(){
  this.elem = document.getElementById(this.id);
  this.bar = ISU.select(`#${this.id} .bar`);
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

  this.elem.addEventListener('mouseenter',this.hoveroverOnHandler);
  this.elem.addEventListener('mouseleave',this.hoveroverOffHandler);

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
  this.bar.setAttributeNS(null,'y', ISU.remToPx(halfCircleSizeNumb - halfBarHeightNumb)+'px');
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




//---------Hover Over--------------//




SkillsTL.prototype.hoveroverOn = function(){
  if(innerWidth > 800){
//         this.playExpandGraphTL();
    // this.setWidths();
    this.getExpandGraph();
    this.expandGraphTL.play();
  }
}

SkillsTL.prototype.hoveroverOff = function(){
  if(innerWidth > 800){
//         this.reverseExpandGraphTL();
    this.expandGraphTL.reverse();
    // this.expandGraphTL.clear();
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
    // select(`#${this.id} .barBG`).style.height = `calc(${halfBarHeight} * 3)`;
    // select(`#${this.id} .barBG`).setAttributeNS(null,'y',`calc( ${halfCircleSize} - ${halfBarHeight} * 1.5 )`);
    
        
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




const MayaTL = new SkillsTL('Maya');
const VrayTL = new SkillsTL('Vray');
const ArnoldTL = new SkillsTL('Arnold');
const ZbrushTL = new SkillsTL('Zbrush');
const HoudiniTL = new SkillsTL('Houdini');
const MarvelousDesignerTL = new SkillsTL('MarvelousDesigner');
const SubstancePainterTL = new SkillsTL('SubstancePainter');
const SubstanceDesignerTL = new SkillsTL('SubstanceDesigner');
const MariTL = new SkillsTL('Mari')
const MudboxTL = new SkillsTL('Mudbox');
const PhotoshopTL = new SkillsTL('Photoshop');
const threeDCoatTL = new SkillsTL('threeDCoat');
const RezomUVTL = new SkillsTL('RezomUV');
const AfterEffectsTL = new SkillsTL('AfterEffects');
const NukeTL = new SkillsTL('Nuke');
const PythonTL = new SkillsTL('Python');
const HTMLTL = new SkillsTL('HTML');
const JavascriptTL = new SkillsTL('Javascript');
const ThreeJSTL = new SkillsTL('ThreeJS');
const GreenSockTL = new SkillsTL('GreenSock');
const CSS3TL = new SkillsTL('CSS3');

export const skillListTL = [MayaTL,VrayTL,ArnoldTL,ZbrushTL,HoudiniTL,MarvelousDesignerTL,SubstancePainterTL,SubstanceDesignerTL,MariTL,MudboxTL,PhotoshopTL,threeDCoatTL,RezomUVTL,AfterEffectsTL,NukeTL,PythonTL,HTMLTL,JavascriptTL,ThreeJSTL,GreenSockTL,CSS3TL]
