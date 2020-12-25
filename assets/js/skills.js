import * as ISU from '/assets/js/InitialSetUp.js';

let halfCircleSize;
let halfCircleSizeEnd;
let halfBarHeight;

let halfCircleSizeNumb;
let halfCircleSizeEndNumb;
let halfBarHeightNumb;

setUnitSize();

const UNIT = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize').replace(/[0-9]/g, '');

// let select = s => document.querySelector(s);
// let selectAll = s => document.querySelectorAll(s);
// let rootFontSize = 16;
// let pxToRem = (px)=> px/rootFontSize; 
// let remToPx = (rem)=> rem * rootFontSize; 




function setUnitSize(){
  let screenSize;

  if(innerWidth >= 1400){
    screenSize = '1400';
    
  }else if(innerWidth > 800){
    screenSize = '';
  }else{
    screenSize = '800';
  }
  
  halfCircleSize = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize' + screenSize );
  halfCircleSizeEnd = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSizeEnd' + screenSize );
  halfBarHeight = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight' + screenSize);


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
  'Mari'              :{ 'name': 'Mari',              'width':70, 'color': ['#fcc021', '#000000'], 'date': 'from 2011'},
  'Mudbox'            :{ 'name':'Mudbox',             'width':90, 'color': ['#ea6741', '#791217'], 'date': 'from 2010'},
  'Photoshop'         :{ 'name':'Photoshop',          'width':85, 'color': ['#85bff9', '#2c286f'], 'date': 'from 2007'},
  'threeDCoat'        :{ 'name':`3D Coat`,            'width':75, 'color': ['#41919e', '#41919e'], 'date': 'from 2016'},
  'RezomUV'           :{ 'name':`Rezom UV`,           'width':60, 'color': ['#ef4000', '#b83808'], 'date': 'from 2014'},
  'AfterEffects'      :{ 'name':`After Effects`,      'width':60, 'color': ['#c88fff', '#312963'], 'date': 'from 2018'},
  'Nuke'              :{ 'name':'Nuke',               'width':70, 'color': ['#f9b41a', '#000000'], 'date': 'from 2011'},
  'Python'            :{ 'name':'Python',             'width':30, 'color': ['#3774a8',' #ffd647'], 'date': 'from 2019'},
  'HTML'              :{ 'name':'HTML',               'width':95, 'color': ['#d1382b', '#e93e30'], 'date': 'from 2019'},
  'Javascript'        :{ 'name':'Javascript',         'width':50, 'color': ['#efd93b', '#f5e695'], 'date': 'from 2019'},
  'CSS3'              :{ 'name':'CSS3',               'width':50, 'color': ['#29a5d1', '#208db8'], 'date': 'from 2019'}
}
const SkillsTLPath = 'assets/images/icons/';
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
  let skillGroup = document.createElement('li');
  // let gridLine = document.createElement('div');
  let n = 4;
  
  
  
  skillGroup.classList.add('skillGroup');
  // gridLine.classList.add('gridLine');
  ISU.SKILL_CONTENTS.appendChild(skillGroup);
  // SKILL_CONTENTS.appendChild(gridLine);
  ISU.SKILL_CONTENTS.style.display = 'none';

  
  for(let skill in skillList){

    function createStops(){
      skillList[skill]['color'].forEach((color,i)=>{
        let offset = `offset="${colorOffset[i]}"`;
        let stopColor = `stop-color="${RANDOM_COLOR[(n + i)%10]}"`;
        let stop = `<stop ${offset} ${stopColor}></stop>`;

        return stop;
      });
    }
    
    let group =
      `<div id="${skill}" class="skillGraph">
        <div class="skillContainer">
          <div class="skillImage">
            <div class="nameSize">
              <div class="nameContainer">
                <p>${skillList[skill]['name']}</p>
                <img src="${SkillsTLPath + `${skillList[skill]['name'].replace(/\s/g, '')}` + '.png'}"></img>
              </div>
            </div>
          </div>
          <div class="SkillsTLhadowParent">
            <div class="SkillsTLhadow" width="calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd} * 2 - ${halfBarHeight} * 2)"></div>
          </div>
          <svg class="skillBar">
            <defs> 
              <filter id="filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="cm"></feColorMatrix>
              </filter>
              <linearGradient id="${skill}Color" x1="0%" x2="100%" y1="0%" y2="0%">
                ${createStops()}
              </linearGradient>
            </defs>
            <rect class="barBG" width="100%" height="calc(${halfBarHeight}* 3)" x="0" y="calc(${halfCircleSize} - ${halfBarHeight} * 1.5 )" rx="${halfBarHeight}" ry="${halfBarHeight}"></rect>
            <g filter="url(#filter)">
              <rect class="bar" width="calc(${halfCircleSize} + ${halfCircleSizeEnd})" height="calc(${halfBarHeight}*2)" x="${halfCircleSize}" y="${ISU.remToPx(halfCircleSizeNumb - halfBarHeightNumb)}" fill="url(#${skill}Color)"></rect>
              <circle class="barStart1" cx="${halfCircleSize}" cy="${halfCircleSize}" r="${halfCircleSize}" fill="${RANDOM_COLOR[n%10]}"></circle>
              <circle class="barStart2" cx="${halfCircleSize}" cy="${halfCircleSize}" r="${halfCircleSize}" fill="${RANDOM_COLOR[n%10]}"></circle>
              <circle class="barEnd1" cx="calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd})" cy="${halfCircleSize}" r="${halfCircleSizeEnd}" fill="${RANDOM_COLOR[(n + 1) %10]}"></circle>
              <circle class="barEnd2" cx="calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd})" cy="${halfCircleSize}" r="${halfCircleSizeEnd}" fill="${RANDOM_COLOR[(n + 1) %10]}"></circle>
            </g>
            <text class="percent" transform="matrix(1,0,0,1,${ISU.remToPx(halfCircleSizeNumb*2 + halfCircleSizeEndNumb)},${ISU.remToPx(halfCircleSizeNumb)})" text-anchor="middle" alignment-baseline="middle">${skillList[skill]['width']+'%'}</text>
          </svg>
          <div class="skillInfo">
            <div>
              <div>
                  <div class="skillInfoName skillInfoText">${skillList[skill]['name']}</div>
                  <div class="skillinfoNameBG skillInfoBG" sytle="background:${RANDOM_COLOR[n%10]}"></div>
                </div>
                <div class="skillInfoDateContainer skillInfoContainer">
                  <div class="skillInfoDate skillInfoText">${skillList[skill]['date']}</div>
                  <div class="skillinfoDateBG skillInfoBG" sytle="background:${RANDOM_COLOR[(n+1)%10]}"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    
      n += 1;
      
      skillGroup.innerHTML += group;

    };
}

Skills.prototype.callSkills =function(){
  console.log('callskill is working')
  ISU.SKILL_CONTENTS.style.display = 'initial';

  // if(innerWidth > 800){
  //     skillListTL.forEach((tl)=>{
  //         tl.getCallGraphTL();
  //         tl.playCallGraphTL();            
  //     })
  // }else{
  //     skillListTL.forEach((tl)=>{
  //         tl.getCallGraphTL800();
  //         tl.playCallGraphTL800();            
  //     })
  // }
  
}


function SkillsTL(id){
  this.id = id;
  this.elem = document.getElementById(id);
  this.bar = ISU.select(`#${this.id} .bar`);
  // this.barEnd1 = ISU.select(`#${this.id} .barEnd1`);
  // this.percent = ISU.select(`#${this.id} .percent`);

    this.callGraphTL = gsap.timeline({paused:true});
    this.expandGraphTL = gsap.timeline({paused:true});
    this.callGraphTL800 = gsap.timeline({paused:true});
  

  // this.createSkillBars()


    // this.hoveroverOnHandler = this.hoveroverOn.bind(this);
//     this.hoveroverOffHandler = this.hoveroverOff.bind(this);

    // this.elem.addEventListener('mouseenter',this.hoveroverOnHandler);
//     this.elem.addEventListener('mouseleave',this.hoveroverOffHandler);

}



SkillsTL.prototype.setWidths = function(){
  let barClientWidth = ISU.select(`#skill svg`).clientWidth;
  this.barWidth = (barClientWidth - ( remToPx(halfCircleSizeNumb) * 2 + remToPx(halfCircleSizeEndNumb))) * SkillsTL[this.id]['width'] / 100 + remToPx(halfCircleSizeNumb);
//     this.barCircleEnd = this.barWidth + remToPx(halfCircleSizeNumb);
//     this.idParentWidth = select(`#${this.id}`).firstElementChild.clientWidth - remToPx(halfCircleSizeEndNumb);
    
//     // console.log(this.id, this.barWidth, this.barCircleEnd)
}

SkillsTL.prototype.getCallGraphTL = function(){
  this.setWidths();
  
  this.callGraphTL
    .fromTo(this.bar,{
            width: remToPx(halfCircleSizeNumb) + remToPx(halfCircleSizeEndNumb)
        },{
            width: this.barWidth,
            duration: 2.5,
            ease: "power2.inOut"
        },
        0
    )
//         .fromTo(this.barEnd1,{
//                 cx: remToPx(halfCircleSizeNumb)*2 + remToPx(halfCircleSizeEndNumb)
//             },
//             {
//                 cx: this.barCircleEnd,
//                 duration: 2.5,
//                 ease: "power2.inOut"
//             },
//             0
//         )
//         .fromTo(`#${this.id} .barEnd2`,{
//                 cx: remToPx(halfCircleSizeNumb)*2 + remToPx(halfCircleSizeEndNumb)
//             },
//             {
//                 cx: this.barCircleEnd,
//                 duration: 2.5,
//                 ease: "power2.inOut"
//             },
//             0
//         )
//         .fromTo(this.percent,{
//                 attr:{transform:`matrix(1,0,0,1,${remToPx(halfCircleSizeNumb*2 + halfCircleSizeEndNumb)},${remToPx(halfCircleSizeNumb)})`}
//             },{
//                 attr:{transform:`matrix(1,0,0,1,${this.barCircleEnd},${remToPx(halfCircleSizeNumb)})`},
//                 duration: 2.5,
//                 ease: "power2.inOut"   
//             },
//             0
//         )
//         .to(`#${this.id} .SkillsTLhadow`,
//             {
//                 width: this.barCircleEnd,
//                 duration: 2.5,
//                 ease: "power2.inOut"   
//             },
//             0
//         )
}
// SkillsTL.prototype.playCallGraphTL = function(){
//     this.callGraphTL.play();
// }
// SkillsTL.prototype.playCallGraphTL800 = function(){
//     this.callGraphTL800.play();
// }
// SkillsTL.prototype.playExpandGraphTL = function(){
//     this.expandGraphTL.play();
// }


// SkillsTL.prototype.reverseCallGraphTL = function(){
//     this.callGraphTL.reverse();
// }
// SkillsTL.prototype.reverseCallGraphTL800 = function(){
//     this.callGraphTL800.reverse();
// }
// SkillsTL.prototype.reverseExpandGraphTL = function(){
//     this.expandGraphTL.reverse();
// }




// SkillsTL.prototype.hoveroverOn = function(){
//     if(innerWidth > 800){
//         this.getExpandGraph();
//         this.playExpandGraphTL();
    
//         select(`#${this.id} .SkillsTLhadow`).classList.add('barShadowAni');
//     }
// }

// SkillsTL.prototype.hoveroverOff = function(){
//     if(innerWidth > 800){
//         this.reverseExpandGraphTL();

//         select(`#${this.id} .SkillsTLhadow`).classList.remove('barShadowAni');
//     }
// }

// SkillsTL.prototype.getExpandGraph = function(){


//     this.setWidths();

//     this.expandGraphTL
//         .to(
//             `#${this.id}Color stop:nth-child(1)`,
//             {
//                 stopColor:'#ffffff',
//                 duration:1
//             },
//             0
//         )
//         .to(
//             `#${this.id}Color stop:nth-child(2)`,
//             {
//                 stopColor:'#ffffff',
//                 duration:1
//             },
//             0
//         )
        




//         .to(
//             `#${this.id} .bar`,
//             {   
//                 scaleY:2.3,
//                 duration:1,
//                 transformOrigin:"center center",
//                 ease: "elastic.out(1, 0.3)"
//             },0
//         )
//         .fromTo(
//             `#${this.id} .bar`,
//             {
//                 width: this.barWidth
//             },
//             {   
//                 width: this.idParentWidth - remToPx(halfCircleSizeEndNumb),
//                 duration:1,
//                 ease: "bounce.out"
//             },0
//         )





//         .to(
//             `#${this.id} .barStart1`,
//             {
//                 attr:{fill:'#ffffff'},
//                 duration:1
//             },
//             0
//         )
//         .to(
//             `#${this.id} .barStart1`,
//             {
//                 scale:0.95,
//                 transformOrigin:"center center",
//                 duration:0.5,
//                 ease: "elastic.out(1, 0.3)"
//             },
//             0
//         )
//         .to(
//             `#${this.id} .barStart1`,
//             {
//                 scale:1,
//                 transformOrigin:"center center",
//                 duration:0.5,
//                 ease: "elastic.out(1, 0.3)"
//             },
//             0.5
//         )

//         .to(
//             `#${this.id} .barStart2`,
//             {
//                 attr:{fill:'#ffffff'},
//                 duration:1
//             },
//             0
//         )





//         .to(
//             `#${this.id} .barEnd1`,
//             {
//                 attr:{fill:'#ffffff'},
//                 duration:1
//             },
//             0
//         )
//         .fromTo(
//             `#${this.id} .barEnd1`,
//             {
//                 cx: this.barCircleEnd,
//             },
//             {
//                 cx: this.idParentWidth,
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )

//         .to(
//             `#${this.id} .barEnd2`,
//             {
//                 attr:{fill:'#ffffff'},
//                 duration:1
//             },
//             0
//         )
//         .fromTo(
//             `#${this.id} .barEnd2`,
//             {
//                 cx: this.barCircleEnd,
//             },
//             {
//                 cx: this.idParentWidth,
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )


        
//         .fromTo(
//             `#${this.id} .percent`,
//             {
//                 attr:{transform:`matrix(1,0,0,1,${this.barCircleEnd},${remToPx(halfCircleSizeNumb)})`},
//             },
//             {
//                 attr:{transform:`matrix(1,0,0,1,${this.idParentWidth},${remToPx(halfCircleSizeNumb)})`},
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )

        


//         .to(
//             `#${this.id} .SkillsTLhadow`,
//             {
//                 scaleY:2.5,
//                 duration:1,
//                 transformOrigin:"center center",
//                 ease: "elastic.out(1, 0.3)"
//             },
//             0
//         )
//         .fromTo(
//             `#${this.id} .SkillsTLhadow`,
//             {
//                 width: this.barCircleEnd
//             },
//             {
//                 width: this.idParentWidth,
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )


//         .to(
//             `#${this.id} .skillInfoBG`,
//             {
//                 scaleY:1,
//                 duration:0.3,
//                 stagger: 0.3,
//                 ease:"power2.inOut"
//             },
//             0
//         )
//         .to(
//             `#${this.id} .skillInfoBG`,
//             {
//                 scaleY:0,
//                 duration:0.3,
//                 stagger: 0.3,
//                 ease:"power2.inOut"
//             },
//             0.3
//         )
        
//         .to(
//             `#${this.id} .skillInfoText`,
//             {
//                 opacity:1,
//                 duration:0.1,
//                 stagger: 0.3,
//             },
//             0.3
//         )
// }

// SkillsTL.prototype.getCallGraphTL800 = function(){



//     this.setWidths();

//     this.callGraphTL800
//         .to(
//             `#${this.id} .bar`,
//             {   
//                 attr: {y:remToPx(halfCircleSizeNumb * 0.5 - halfBarHeightNumb)},
//                 height: remToPx(halfCircleSizeNumb*2 + halfBarHeightNumb*2),
//                 duration:1,
//                 transformOrigin:"center center",
//                 ease: "bounce.out"
//             },0
//         )
//         .fromTo(
//             `#${this.id} .bar`,
//             {
//                 width: this.barWidth
//             },
//             {   
//                 width: this.idParentWidth - remToPx(halfCircleSizeEndNumb),
//                 duration:1,
//                 ease: "bounce.out"
//             },0
//         )






//         .to(
//             `#${this.id} .barStart1`,
//             {
//                 scale:0.95,
//                 transformOrigin:"center center",
//                 duration:0.5,
//                 ease: "elastic.out(1, 0.3)"
//             },
//             0
//         )
//         .to(
//             `#${this.id} .barStart1`,
//             {
//                 scale:1,
//                 transformOrigin:"center center",
//                 duration:0.5,
//                 ease: "elastic.out(1, 0.3)"
//             },
//             0.5
//         )

//         .to(
//             `#${this.id}`,
//             {
//                 height: remToPx(halfCircleSizeNumb*3),
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )
//         .to(
//             `#${this.id} .barStart2`,
//             {
//                 cy: remToPx(halfCircleSizeNumb*2),
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )





//         .fromTo(
//             `#${this.id} .barEnd1`,
//             {
//                 cx: this.barCircleEnd
//             },
//             {
//                 cx: this.idParentWidth,
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )




//         .fromTo(
//             `#${this.id} .barEnd2`,
//             {
//                 cx: this.barCircleEnd,
//                 cy: remToPx(halfCircleSizeNumb*1)
//             },
//             {
//                 cx: this.idParentWidth,
//                 cy: remToPx(halfCircleSizeNumb*2),
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )



        
//         .fromTo(
//             `#${this.id} .percent`,
//             {
//                 attr:{transform:`matrix(1,0,0,1,${remToPx(halfCircleSizeNumb)},${remToPx(halfCircleSizeNumb)})`},
//             },
//             {
//                 attr:{transform:`matrix(1,0,0,1,${remToPx(halfCircleSizeNumb)},${remToPx(halfCircleSizeNumb *2.3)})`},
//                 duration:1,
//                 ease: "bounce.out"
//             },
//             0
//         )
//         // .fromTo(
//         //     `#${this.id} .percent`,
//         //     {
//         //         attr:{transform:`matrix(1,0,0,1,${this.barCircleEnd},${remToPx(halfCircleSizeNumb)})`},
//         //     },
//         //     {
//         //         attr:{transform:`matrix(1,0,0,1,${this.idParentWidth},${remToPx(halfCircleSizeNumb)})`},
//         //         duration:1,
//         //         ease: "bounce.out"
//         //     },
//         //     0
//         // )





//         .to(
//             `#${this.id} .skillInfo`,
//             {
//                 height: remToPx(halfCircleSizeNumb) * 3,
//                 duration:0.3,
//                 ease:"power2.inOut"
//             },
//             0
//         )
//         .to(
//             `#${this.id} .skillInfoBG`,
//             {
//                 scaleY:1,
//                 duration:0.3,
//                 ease:"power2.inOut"
//             },
//             0
//         )
//         .to(
//             `#${this.id} .skillInfoBG`,
//             {
//                 scaleY:0,
//                 duration:0.3,
//                 ease:"power2.inOut"
//             },
//             0.3
//         )
        
//         .to(
//             `#${this.id} .skillInfoText`,
//             {
//                 opacity:1,
//                 duration:0.1,
//                 stagger: 0.3,
//             },
//             0.3
//         )
// }




// SkillsTL.prototype.skillUpdate = function(){
//     setUnitSize()
//     this.setWidths();


//     if(innerWidth > 800){
//         select(`#${this.id}`).style.height =  '';
//     }else{
//         // console.log('else',select(`#${this.id}`),remToPx(halfCircleSizeNumb*3))
//         select(`#${this.id}`).style.height =  remToPx(halfCircleSizeNumb*3) +'px';
//     }





//     select(`#${this.id} .barStart1`).setAttributeNS(null,'cx',halfCircleSize);
//     select(`#${this.id} .barStart1`).setAttributeNS(null,'cy',halfCircleSize);
//     select(`#${this.id} .barStart1`).setAttributeNS(null,'r', halfCircleSize);




//     select(`#${this.id} .barStart2`).style.cx = halfCircleSize;
//     if(innerWidth > 800){
//         select(`#${this.id} .barStart2`).style.cy = halfCircleSize;
//     }else{
//         select(`#${this.id} .barStart2`).style.cy = remToPx(halfCircleSizeNumb*2);
//     }
//     select(`#${this.id} .barStart2`).setAttributeNS(null,'r', halfCircleSize);


    





//     if(innerWidth > 800){
//         select(`#${this.id} .barEnd1`).style.cx = this.barCircleEnd;
//     }else{
//         select(`#${this.id} .barEnd1`).style.cx = this.idParentWidth;
//     }
//     select(`#${this.id} .barEnd1`).style.cy = halfCircleSize;
//     select(`#${this.id} .barEnd1`).setAttributeNS(null,'r',halfCircleSizeEnd);




//     if(innerWidth > 800){
//         select(`#${this.id} .barEnd2`).style.cx = this.barCircleEnd;
//         select(`#${this.id} .barEnd2`).style.cy = halfCircleSize;
//     }else{
//         select(`#${this.id} .barEnd2`).style.cx = this.idParentWidth;
//         select(`#${this.id} .barEnd2`).style.cy = remToPx(halfCircleSizeNumb*2);
//     }
//     select(`#${this.id} .barEnd2`).setAttributeNS(null,'r',halfCircleSizeEnd);



  

//     if(innerWidth > 800){
//         select(`#${this.id} .bar`).style.width = this.barWidth;
//         select(`#${this.id} .bar`).setAttributeNS(null,'y',remToPx(halfCircleSizeNumb - halfBarHeightNumb));
//         select(`#${this.id} .bar`).style.height = `calc(${halfBarHeight}*2)`;
//     }else{
//         select(`#${this.id} .bar`).style.width = this.idParentWidth - remToPx(halfCircleSizeEndNumb);
//         select(`#${this.id} .bar`).setAttributeNS(null,'y',remToPx(halfCircleSizeNumb * 0.5 - halfBarHeightNumb));
//         select(`#${this.id} .bar`).style.height = remToPx(halfCircleSizeNumb*2 + halfBarHeightNumb*2);
//     }
//     select(`#${this.id} .bar`).setAttributeNS(null,'x',halfCircleSize);





//     select(`#${this.id} .barBG`).style.height = `calc(${halfBarHeight} * 3)`;
//     select(`#${this.id} .barBG`).setAttributeNS(null,'y',`calc( ${halfCircleSize} - ${halfBarHeight} * 1.5 )`);
    


    

        
//     if(innerWidth > 800){
//         select(`#${this.id} .percent`).setAttributeNS(null,'transform', `matrix(1,0,0,1,${this.barCircleEnd},${remToPx(halfCircleSizeNumb)})`);
//     }else{
//         select(`#${this.id} .percent`).setAttributeNS(null, 'transform',`matrix(1,0,0,1,${remToPx(halfCircleSizeNumb)},${remToPx(halfCircleSizeNumb *2.3)})`);
//     }



//     if(innerWidth > 800){
//         selectAll(`#${this.id} .skillInfoText`).forEach(text=>{
//             text.style.opacity = 0;
//         })
//     }else{
//         selectAll(`#${this.id} .skillInfoText`).forEach(text=>{
//             text.style.opacity = 1;
//         })
//     }



//     // selectAll(`#${this.id} .skillInfoBG`).forEach(bg=>{
//     //     bg.style.transform = scaleY(0);
//     // })





//     if (this.expandGraphTL){
//         this.expandGraphTL.clear();
//     }
//     if(this.expandGraphTL800){
//         this.expandGraphTL800.clear();
//     }
//     if(this.callGraphTL){
//         this.callGraphTL.clear();    
//     }
    
// }





// function stopSkills(){
//     SKILL_CONTENTS.style.display = 'none';
    
//     if(innerWidth > 800){
//         skillListTL.forEach((tl)=>{
//             tl.reverseCallGraphTL();
//         })
//     }else{
//         skillListTL.forEach((tl)=>{
//             tl.reverseCallGraphTL800();
//         })
//     }

// }




// function SkillsTLUpdate(){
//     // if(biggerElem == SKILL){
//         // setWidths
//         setUnitSize();
//         // console.log('half circle size',halfCircleSize)

//         skillListTL.forEach((tl)=>{
//             tl.skillUpdate();
//         })

//     // }
// }



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
const CSS3TL = new SkillsTL('CSS3');

export const skillListTL = [MayaTL,VrayTL,ArnoldTL,ZbrushTL,HoudiniTL,MarvelousDesignerTL,SubstancePainterTL,SubstanceDesignerTL,MariTL,MudboxTL,PhotoshopTL,threeDCoatTL,RezomUVTL,AfterEffectsTL,NukeTL,PythonTL,HTMLTL,JavascriptTL,CSS3TL]
