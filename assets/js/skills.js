import * as ISU from '/assets/js/InitialSetUp.js';

let halfCircleSize;
let halfCircleSizeEnd;
let halfBarHeight;

let halfCircleSizeNumb;
let halfCircleSizeEndNumb;
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
          <div class="skillShadowParent">
            <div class="skillShadow" width="calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd} * 2 - ${halfBarHeight} * 2)"></div>
          </div>
          <svg class="skillBar">
            <defs> 
              <filter id="filter">
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
              <circle class="barHead2" cx="${halfCircleSize}" cy="${halfCircleSize}" r="${halfCircleSize}" fill="${RANDOM_COLOR[n%10]}"></circle>
              <circle class="barTail1" cx="calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd})" cy="${halfCircleSize}" r="${halfCircleSizeEnd}" fill="${RANDOM_COLOR[(n + 1) %10]}"></circle>
              <circle class="barTail2" cx="calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd})" cy="${halfCircleSize}" r="${halfCircleSizeEnd}" fill="${RANDOM_COLOR[(n + 1) %10]}"></circle>
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

  skillListTL.forEach((tl)=>{
    tl.setDefaultValues()
  })
}

Skills.prototype.callSkills =function(){
  console.log('callskill is working')
  ISU.SKILL_CONTENTS.style.display = 'initial';

  if(innerWidth > 800){
    skillListTL.forEach((tl)=>{
      tl.getCallGraphTL();
      // tl.playCallGraphTL();          
    })
  }else{
      skillListTL.forEach((tl)=>{
          tl.getCallGraphTL800();
  //         tl.playCallGraphTL800();            
      })
  }
  
}


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
  this.barTail2 = ISU.select(`#${this.id} .barTail2`);
  this.percent = ISU.select(`#${this.id} .percent`);
  this.skillShadow = ISU.select(`#${this.id} .skillShadow`);
  this.skillInfo = ISU.select(`#${this.id} .skillInfo`);
  this.skillInfoBG = ISU.select(`#${this.id} .skillInfoBG`);
  this.skillInfoText = ISU.select(`#${this.id} .skillInfoText`);
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
  
  this.barEachWidth = (svgWidth - ( ISU.remToPx(halfCircleSizeNumb) + ISU.remToPx(halfCircleSizeEndNumb))) * skillList[this.id]['width'] / 100 + ISU.remToPx(halfCircleSizeNumb);
  this.barCircleEachEnd = this.barEachWidth + ISU.remToPx(halfCircleSizeNumb);
  this.barFullWidth = this.elem.firstElementChild.clientWidth - ISU.remToPx(halfCircleSizeEndNumb);
  console.log('setWidths is working')
}

SkillsTL.prototype.getCallGraphTL = function(){
  this.setWidths();

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
            cx: this.barTail_startPosition_cx
        },{
            cx: this.barCircleEachEnd,
            duration: ISU.transitionValue['skillTLDuration'],
            ease: ISU.transitionValue['skillTLEase']
        },0
    )
    // .fromTo(this.barTail2,{
    //         cx: this.barTail_startPosition_cx
    //     },{
    //         cx: this.barCircleEachEnd,
    //         duration: ISU.transitionValue['skillTLDuration'],
    //         ease: ISU.transitionValue['skillTLEase']
    //     },0
    // )
    .fromTo(this.percent,{
            attr:{transform:`matrix(1,0,0,1,${this.barTail_startPosition_cx},${ISU.remToPx(halfCircleSizeNumb)})`}
        },{
            attr:{transform:`matrix(1,0,0,1,${this.barCircleEachEnd},${ISU.remToPx(halfCircleSizeNumb)})`},
            duration: ISU.transitionValue['skillTLDuration'],
            ease: ISU.transitionValue['skillTLEase']
        },0
    )
    // .to(this.skillShadow,
    //     {
    //         width: this.barCircleEachEnd,
    //         duration: ISU.transitionValue['skillTLDuration'],
    //         ease: ISU.transitionValue['skillTLEase']
    //     },
    //     0
    // )
  this.callGraphTL.play();
    // this.playCallGraphTL();
}

SkillsTL.prototype.setWidths800 = function(){
  this.barFullWidth = this.elem.firstElementChild.clientWidth - ISU.remToPx(halfCircleSizeEndNumb);
    
}
SkillsTL.prototype.getCallGraphTL800 = function(){
  this.setWidths800();


  this.callGraphTL800
    .to(this.elem,
      {
        height: ISU.remToPx(halfCircleSizeNumb*3),
        duration: ISU.transitionValue['skillTLDuration800'],
        ease: ISU.transitionValue['skillTLEase800']
      },0
    )
    .to(this.bar,
      {   
        attr: {y:ISU.remToPx(halfCircleSizeNumb * 0.5 - halfBarHeightNumb)},
        height: ISU.remToPx(halfCircleSizeNumb*2 + halfBarHeightNumb*2),
        duration: ISU.transitionValue['skillTLDuration800'],
        // transformOrigin:"center center",
        ease: ISU.transitionValue['skillTLEase800']
      },0
    )
    .to(this.bar,
      {   
        width: this.barFullWidth - ISU.remToPx(halfCircleSizeEndNumb),
        duration: ISU.transitionValue['skillTLDuration800'],
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
    .to(this.barHead2,
      {
        cy: ISU.remToPx(halfCircleSizeNumb*2),
        duration: ISU.transitionValue['skillTLDuration800'],
        ease: ISU.transitionValue['skillTLEase800']
      },
      0
    )


    .fromTo(this.barTail1,
        {
          cx: this.barTail_startPosition_cx
        },{
            cx: this.barFullWidth,
            duration: ISU.transitionValue['skillTLDuration800'],
            ease: ISU.transitionValue['skillTLEase800']
        },0
    )
    .fromTo(this.barTail2,
      {
        cx: this.barTail_startPosition_cx,
        cy: ISU.remToPx(halfCircleSizeNumb*1)
      },{
        cx: this.barFullWidth,
        cy: ISU.remToPx(halfCircleSizeNumb*2),
        duration: ISU.transitionValue['skillTLDuration800'],
        ease: ISU.transitionValue['skillTLEase800']
      },0
    )

    
    .fromTo(this.percent,
      {
          attr:{transform:`matrix(1,0,0,1,${ISU.remToPx(halfCircleSizeNumb)},${ISU.remToPx(halfCircleSizeNumb)})`},
      },{
          attr:{transform:`matrix(1,0,0,1,${ISU.remToPx(halfCircleSizeNumb)},${ISU.remToPx(halfCircleSizeNumb *2.3)})`},
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
    //     {
    //         scaleY:1,
    //         duration:0.3,
    //         ease: ISU.transitionValue['skillTLEase']
    //     },0
    // )
    // .to(this.skillInfoBG,
    //     {
    //         scaleY:0,
    //         duration:0.3,
    //         ease: ISU.transitionValue['skillTLEase']
    //     },0.3
    // )
    // .to(this.skillInfoText,
    //     {
    //         opacity:1,
    //         duration:0.1,
    //         stagger: 0.3,
    //     },
    //     0.3
    // )


  this.callGraphTL800.play();
}

// SkillsTL.prototype.playCallGraphTL = function(){
//   console.log('---play----')
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




SkillsTL.prototype.hoveroverOn = function(){
  if(innerWidth > 800){
//         this.playExpandGraphTL();
    // this.setWidths();
    this.getExpandGraph();
    this.expandGraphTL.play();
//         select(`#${this.id} .skillShadow`).classList.add('barShadowAni');
  }
}

SkillsTL.prototype.hoveroverOff = function(){
  if(innerWidth > 800){
//         this.reverseExpandGraphTL();
    this.expandGraphTL.reverse();
//         select(`#${this.id} .skillShadow`).classList.remove('barShadowAni');
  }
}

SkillsTL.prototype.getExpandGraph = function(){
  this.setWidths();
  

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
        cx: this.barCircleEachEnd,
      },{
        cx: this.barFullWidth,
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

        

//----check this later
//         .to(
//             `#${this.id} .skillShadow`,
//             {
//                 scaleY:2.5,
//                 duration:1,
//                 transformOrigin:"center center",
//                 ease: "elastic.out(1, 0.3)"
//             },
//             0
//         )
//         .fromTo(
//             `#${this.id} .skillShadow`,
//             {
//                 width: this.barCircleEachEnd
//             },
//             {
//                 width: this.barFullWidth,
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

}





// SkillsTL.prototype.skillUpdate = function(){
//     setUnitSize()
//     this.setWidths();


//     if(innerWidth > 800){
//         select(`#${this.id}`).style.height =  '';
//     }else{
//         // console.log('else',select(`#${this.id}`),remToPx(halfCircleSizeNumb*3))
//         select(`#${this.id}`).style.height =  remToPx(halfCircleSizeNumb*3) +'px';
//     }





//     select(`#${this.id} .barCiircle_Head1`).setAttributeNS(null,'cx',halfCircleSize);
//     select(`#${this.id} .barCiircle_Head1`).setAttributeNS(null,'cy',halfCircleSize);
//     select(`#${this.id} .barCiircle_Head1`).setAttributeNS(null,'r', halfCircleSize);




//     select(`#${this.id} .barCiircle_Head2`).style.cx = halfCircleSize;
//     if(innerWidth > 800){
//         select(`#${this.id} .barCiircle_Head2`).style.cy = halfCircleSize;
//     }else{
//         select(`#${this.id} .barCiircle_Head2`).style.cy = remToPx(halfCircleSizeNumb*2);
//     }
//     select(`#${this.id} .barCiircle_Head2`).setAttributeNS(null,'r', halfCircleSize);


    





//     if(innerWidth > 800){
//         select(`#${this.id} .barTail1`).style.cx = this.barCircleEachEnd;
//     }else{
//         select(`#${this.id} .barTail1`).style.cx = this.barFullWidth;
//     }
//     select(`#${this.id} .barTail1`).style.cy = halfCircleSize;
//     select(`#${this.id} .barTail1`).setAttributeNS(null,'r',halfCircleSizeEnd);




//     if(innerWidth > 800){
//         select(`#${this.id} .barTail2`).style.cx = this.barCircleEachEnd;
//         select(`#${this.id} .barTail2`).style.cy = halfCircleSize;
//     }else{
//         select(`#${this.id} .barTail2`).style.cx = this.barFullWidth;
//         select(`#${this.id} .barTail2`).style.cy = remToPx(halfCircleSizeNumb*2);
//     }
//     select(`#${this.id} .barTail2`).setAttributeNS(null,'r',halfCircleSizeEnd);



  

//     if(innerWidth > 800){
//         select(`#${this.id} .bar`).style.width = this.barEachWidth;
//         select(`#${this.id} .bar`).setAttributeNS(null,'y',remToPx(halfCircleSizeNumb - halfBarHeightNumb));
//         select(`#${this.id} .bar`).style.height = `calc(${halfBarHeight}*2)`;
//     }else{
//         select(`#${this.id} .bar`).style.width = this.barFullWidth - remToPx(halfCircleSizeEndNumb);
//         select(`#${this.id} .bar`).setAttributeNS(null,'y',remToPx(halfCircleSizeNumb * 0.5 - halfBarHeightNumb));
//         select(`#${this.id} .bar`).style.height = remToPx(halfCircleSizeNumb*2 + halfBarHeightNumb*2);
//     }
//     select(`#${this.id} .bar`).setAttributeNS(null,'x',halfCircleSize);





//     select(`#${this.id} .barBG`).style.height = `calc(${halfBarHeight} * 3)`;
//     select(`#${this.id} .barBG`).setAttributeNS(null,'y',`calc( ${halfCircleSize} - ${halfBarHeight} * 1.5 )`);
    


    

        
//     if(innerWidth > 800){
//         select(`#${this.id} .percent`).setAttributeNS(null,'transform', `matrix(1,0,0,1,${this.barCircleEachEnd},${remToPx(halfCircleSizeNumb)})`);
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
