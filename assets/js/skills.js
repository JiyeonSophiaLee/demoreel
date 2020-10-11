const SKILL_CONTENTS = document.querySelector(`#skill .contents`);
const HALF_CIRCLE_SIZE = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize');
const HALF_CIRCLE_SIZE_END = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSizeEnd');
const HALF_BAR_HEIGHT = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight');

const UNIT = HALF_CIRCLE_SIZE.replace(/[0-9]/g, '');

const HALF_CIRCLE_SIZE_NUMB = parseFloat(HALF_CIRCLE_SIZE);
const HALF_CIRCLE_SIZE_END_NUMB = parseFloat(HALF_CIRCLE_SIZE_END);
const HALF_BAR_HEIGHT_NUMB = parseFloat(HALF_BAR_HEIGHT);


let select = s => document.querySelector(s);
let selectAll = s => document.querySelectorAll(s);
let rootFontSize = 16;
let pxToRem = (px)=> px/rootFontSize; 
let remToPx = (rem)=> rem * rootFontSize; 


// let MayaCallTL, VrayCallTL, ArnoldCallTL, ZbrushCallTL, HoudiniCallTL, MarvelousDesignerCallTL, SubstancePainterCallTL, SubstanceDesignerCallTL, MariCallTL, MudboxCallTL, PhotoshopCallTL, threeDCoatCallTL, RezomUVCallTL, AfterEffectsCallTL, NukeCallTL, PythonCallTL, HTMLCallTL, JavascriptCallTL, CSS3CallTL;


const skills = {
    'Maya':{ 'name':'Maya', 'width':80, 'color': ['#92c6cc', '#106768']},
    'Vray':{ 'name':'Vray', 'width':82, 'color':['#fba547', '#8fb6e2']},
    'Arnold':{ 'name':'Arnold', 'width':85, 'color':['#8dc9d2', '#1f6571']},
    'Zbrush':{ 'name':'Zbrush', 'width':60, 'color': ['#464646', '#242424']},
    'Houdini':{ 'name':'Houdini', 'width':15, 'color': ['#fece5f', '#f05023']},
    'MarvelousDesigner':{ 'name':`Marvelous Designer`, 'width':20, 'color': ['#ffea1e', '#0a0a0a']},
    'SubstancePainter':{ 'name':`Substance Painter`, 'width':40, 'color': ['#e2212f', '#e2212f']},
    'SubstanceDesigner':{ 'name':`Substance Designer`, 'width':30, 'color': ['#ef4c25', '#ef4c25']},
    'Mari':{ 'name': 'Mari','width':70, 'color': ['#fcc021', '#000000']},
    'Mudbox':{ 'name':'Mudbox', 'width':90, 'color': ['#ea6741', '#791217']},
    'Photoshop':{ 'name':'Photoshop', 'width':85, 'color': ['#85bff9', '#2c286f']},
    'threeDCoat':{ 'name':`3D Coat`, 'width':75, 'color': ['#41919e', '#41919e']},
    'RezomUV':{ 'name':`Rezom UV`, 'width':60, 'color': ['#ef4000', '#b83808']},
    'AfterEffects':{ 'name':`After Effects`, 'width':60, 'color': ['#c88fff', '#312963']},
    'Nuke':{ 'name':'Nuke', 'width':70, 'color': ['#f9b41a', '#000000']},
    'Python':{ 'name':'Python', 'width':30, 'color': ['#3774a8',' #ffd647']},
    'HTML':{ 'name':'HTML', 'width':95, 'color': ['#d1382b', '#e93e30']},
    'Javascript':{ 'name':'Javascript', 'width':50, 'color': ['#efd93b', '#f5e695']},
    'CSS3':{ 'name':'CSS3', 'width':50, 'color': ['#29a5d1', '#208db8']}
}
const skillsPath = 'assets/images/icons/';
const colorOffset = ['10%','90%']



createSkillBar();
window.addEventListener('resize', skillsUpdate);



// for(skill in skills){
//     let target = select(`#${skill} .skillContainer`);

//     target.addEventListener('mouseover',()=>{
       
//         gsap.to(
//             `#${target.parentElement.id}Color stop:nth-child(1)`,
//             {
//                 stopColor:'#ffffff',
//                 duration:3
//             }
//         )
//         gsap.to(
//             `#${target.parentElement.id}Color stop:nth-child(2)`,
//             {
//                 stopColor:'#ffffff',
//                 duration:3
//             }
//         )
//         gsap.fromTo(
//             `#${target.parentElement.id} .bar`,
//             {
//                 height:`calc(${HALF_BAR_HEIGHT}*2)`
//             },
//             {
//               height:`calc(${HALF_CIRCLE_SIZE_END})`,
//                 duration: 3
//             }
//         )
//         gsap.to(
//             `#${target.parentElement.id} .barStart`,
//             {
//                 attr:{fill:'#ffffff'},
//                 duration:3
//             }
//         )
//         gsap.to(
//             `#${target.parentElement.id} .barEnd`,
//             {
//                 attr:{fill:'#ffffff'},
//                 duration:3
//             }
//         ) 
//     })
//     target.addEventListener('mouseout',()=>{
//         gsap.to(
//             `#${target.parentElement.id}Color stop:nth-child(1)`,
//             {
//                 stopColor:skills[target.parentElement.id]['color'][0],
//                 duration:3
//             }
//         )
//         // gsap.to(
//         //     `#${target.parentElement.id}Color stop:nth-child(2)`,
//         //     {
//         //         stopColor:skills[target.parentElement.id]['color'][1],
//         //         duration:3
//         //     }
//         // )
//         gsap.fromTo(
//             `#${target.parentElement.id} .bar`,
//             {
//                 height:`calc(${HALF_CIRCLE_SIZE_END})`
//             },
//             {
//                 height:`calc(${HALF_BAR_HEIGHT}*2)`,
//                 duration:3
//             }
//         )
//         // gsap.to(
//         //     `#${target.parentElement.id} .barStart`,
//         //     {
//         //         attr:{fill:skills[target.parentElement.id]['color'][0]},
//         //         duration:3
//         //     }
//         // ) 
//         // gsap.to(
//         //     `#${target.parentElement.id} .barEnd`,
//         //     {
//         //         attr:{fill: skills[target.parentElement.id]['color'][1]},
//         //         duration:3
//         //     }
//         // ) 
//     })
// }


function createSkillBar(){
    let skillGroup = document.createElement('li');

    skillGroup.classList.add('skillGroup');
    SKILL_CONTENTS.appendChild(skillGroup);
    SKILL_CONTENTS.style.display = 'none';


    for(skill in skills){
        let group = document.createElement('div');
        let skillName = document.createElement('div');
        let nameContainer = document.createElement('div')
        let p = document.createElement('p');
        let img = document.createElement('img');
        let nameSize = document.createElement('div');
        let text = document.createTextNode(skills[skill]['name']);
        let skillShadowParent = document.createElement('div');
        let skillShadow = document.createElement('div');
        let skillContainer = document.createElement('div');
        let canvas = document.createElementNS(SVG_NAMESPACE_URI,'svg');
        let defs = document.createElementNS(SVG_NAMESPACE_URI,'defs');
        let gradient = document.createElementNS(SVG_NAMESPACE_URI,'linearGradient');
        let filter = document.createElementNS(SVG_NAMESPACE_URI,'filter');
        let feGaussianBlur = document.createElementNS(SVG_NAMESPACE_URI,'feGaussianBlur');
        let feColorMatrix = document.createElementNS(SVG_NAMESPACE_URI,'feColorMatrix');
        let g = document.createElementNS(SVG_NAMESPACE_URI,'g');
        let rect = document.createElementNS(SVG_NAMESPACE_URI,'rect');
        let barBG = document.createElementNS(SVG_NAMESPACE_URI,'rect');
        let barStart = document.createElementNS(SVG_NAMESPACE_URI,'circle');
        let barEnd = document.createElementNS(SVG_NAMESPACE_URI,'circle');
        let percent = document.createElementNS(SVG_NAMESPACE_URI,'text');
        let percentText = document.createTextNode(skills[skill]['width']+'%');



        // this.skillsHoverOnHandler = this.skillsHoverOn.bind(this);
        // this.skillsHoverOffHandler = this.skillsHoverOff.bind(this);
        // this.skillHandlerObject = select(`#${skill} .skillContainer`);

        // this.skillHandlerObject.addEventListener('mouseover',this.skillsHoverOnHandler);
        // this.skillHandlerObject.addEventListener('mouseout',this.skillsHoverOffHandler);




        group.classList.add('skillGraph')
        group.id = skill;
        skillName.classList.add('skillName');
        skillShadowParent.classList.add('skillShadowParent');
        skillShadow.classList.add('skillShadow');
        nameContainer.classList.add('nameContainer');
        nameSize.classList.add('nameSize');
        skillContainer.classList.add('skillContainer');
        canvas.classList.add('skillBar');
        rect.classList.add('bar');
        barStart.classList.add('barStart');
        barEnd.classList.add('barEnd');
        barBG.classList.add('barBG');
        percent.classList.add('percent');



        //------- set svg-----------
        // canvas.style.width = skills[skill]['width']+'%';
        // canvas.style.height = '5rem';
        // canvas.style.marginLeft = HALF_CIRCLE_SIZE_NUMB * 2 + UNIT;

        skills[skill]['color'].forEach((color,i)=>{
            let stop = document.createElementNS(SVG_NAMESPACE_URI,'stop');
            stop.setAttribute('offset', colorOffset[i]);
            stop.setAttribute('stop-color', color);
            gradient.appendChild(stop);
        });

        gradient.id = (`${skill}Color`);
        // gradient.id = (`${skills[skill]['name'].replace(/\s/g, '')}Color`);
        gradient.setAttribute('x1','0%');
        gradient.setAttribute('x2','100%');
        gradient.setAttribute('y1','0%');
        gradient.setAttribute('y1','0%');

        feGaussianBlur.setAttribute('in','SourceGraphic');
        feGaussianBlur.setAttribute('stdDeviation','7');
        feGaussianBlur.setAttribute('result','blur');
        feColorMatrix.setAttribute('in','blur');
        feColorMatrix.setAttribute('mode','matrix');
        feColorMatrix.setAttribute('values','1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9');
        feColorMatrix.setAttribute('result','cm');

        filter.id = 'filter';

        

        // rect.setAttributeNS(null,'width',`calc(${25}rem)`);
        rect.setAttributeNS(null,'width',`calc(${HALF_CIRCLE_SIZE} + ${HALF_CIRCLE_SIZE_END})`);
        rect.setAttributeNS(null,'height',`calc(${HALF_BAR_HEIGHT}*2)`);
        rect.setAttributeNS(null,'x',HALF_CIRCLE_SIZE);
        rect.setAttributeNS(null,'y',`${HALF_CIRCLE_SIZE}`);
        rect.setAttributeNS(null,'transform',`translate(0,${-remToPx(HALF_BAR_HEIGHT_NUMB)})`);
        rect.setAttributeNS(null,'fill', `url(#${skill}Color)`);


        barBG.style.width = '100%';
        barBG.setAttributeNS(null,'x',0);
        barBG.setAttributeNS(null,'y',`calc( ${HALF_CIRCLE_SIZE} - ${HALF_BAR_HEIGHT} * 1.5 )`);
        barBG.setAttributeNS(null,'rx',HALF_BAR_HEIGHT);
        barBG.setAttributeNS(null,'ry',HALF_BAR_HEIGHT);

   
        barStart.setAttributeNS(null,'cx',HALF_CIRCLE_SIZE);
        barStart.setAttributeNS(null,'cy',HALF_CIRCLE_SIZE);
        barStart.setAttributeNS(null,'r', HALF_CIRCLE_SIZE);
        barStart.setAttributeNS(null,'fill', skills[skill]['color'][0]);


        barEnd.setAttributeNS(null,'cx',`calc(${HALF_CIRCLE_SIZE} * 2 + ${HALF_CIRCLE_SIZE_END})`);
        barEnd.setAttributeNS(null,'cy',HALF_CIRCLE_SIZE);
        barEnd.setAttributeNS(null,'r', HALF_CIRCLE_SIZE_END);
        barEnd.setAttributeNS(null,'fill', skills[skill]['color'][1]);

        // percent.setAttribute('x',HALF_CIRCLE_SIZE_NUMB*2 + HALF_CIRCLE_SIZE_END_NUMB + UNIT);
        // percent.setAttribute('y',HALF_CIRCLE_SIZE_NUMB + HALF_BAR_HEIGHT_NUMB + UNIT);
        percent.setAttribute('transform',`matrix(1,0,0,1,${remToPx(HALF_CIRCLE_SIZE_NUMB*2 + HALF_CIRCLE_SIZE_END_NUMB)},${remToPx(HALF_CIRCLE_SIZE_NUMB + HALF_BAR_HEIGHT_NUMB )})`);
        percent.setAttribute('text-anchor','middle');

        
        g.setAttribute('filter','url(#filter)');
        //--------------------------------
        
        // bar.style.width = skills[skill]['width']+'%';

        img.src = skillsPath + `${skills[skill]['name'].replace(/\s/g, '')}` + '.png';
        // bar.style.background = skills[skill]['color'];
        skillShadowParent.style.width = skills[skill]['width'] - 10 +'%';
        

        p.appendChild(text);
        nameContainer.appendChild(p);
        nameContainer.appendChild(img);
        nameSize.appendChild(nameContainer);
        skillName.appendChild(nameSize);
        
        filter.appendChild(feGaussianBlur);
        filter.appendChild(feColorMatrix);
        defs.appendChild(filter);
        defs.appendChild(gradient);
        percent.appendChild(percentText);
        g.appendChild(rect);
        g.appendChild(barStart);
        g.appendChild(barEnd);
        canvas.appendChild(defs);
        canvas.appendChild(barBG);
        canvas.appendChild(g);
        canvas.appendChild(percent);
        skillContainer.appendChild(skillName);
        skillShadowParent.appendChild(skillShadow);
        skillContainer.appendChild(skillShadowParent);
        skillContainer.appendChild(canvas);
        group.appendChild(skillContainer);
        skillGroup.appendChild(group);
      
    };
}

function getSkillTL(id){
    this.id = id;
    this.elem = select(`#${id}`);
    this.bar = select(`#${this.id} .bar`);
    this.barEnd = select(`#${this.id} .barEnd`);
    this.percent = select(`#${this.id} .percent`);

    this.callGraphTL = gsap.timeline({paused:true});
    this.expandGraphTL = gsap.timeline({paused:true});



    this.hoveroverOnHandler = this.hoveroverOn.bind(this);
    this.hoveroverOffHandler = this.hoveroverOff.bind(this);

    this.elem.addEventListener('mouseenter',this.hoveroverOnHandler);
    this.elem.addEventListener('mouseleave',this.hoveroverOffHandler);

}

getSkillTL.prototype.setBarWidth = function(){
    let barClientWidth = select(`#skill .bar`).parentElement.parentElement.clientWidth;
    this.barWidth = (barClientWidth - ( remToPx(HALF_CIRCLE_SIZE_NUMB) * 2 + remToPx(HALF_CIRCLE_SIZE_END_NUMB))) * skills[this.id]['width'] / 100 + remToPx(HALF_CIRCLE_SIZE_NUMB);
    this.barCircleEnd = this.barWidth + remToPx(HALF_CIRCLE_SIZE_NUMB);
    // console.log(this.id, this.barWidth, this.barCircleEnd)
}

getSkillTL.prototype.getCallGraphTL = function(){
    this.barWidth;
    this.barCircleEnd;

    this.setBarWidth();
    console.log(this.id, this.barWidth, this.barCircleEnd)

    this.callGraphTL
        .to(this.bar,
            {
                width: this.barWidth,
                duration: 2.5,
                ease: "power2.inOut"
            },
            0
        )
        .to(this.barEnd,
            {
                cx: this.barCircleEnd,
                duration: 2.5,
                ease: "power2.inOut"
            },
            0
        )
        .to(this.percent,
            {
                attr:{transform:`matrix(1,0,0,1,${this.barCircleEnd},${remToPx(HALF_CIRCLE_SIZE_NUMB + HALF_BAR_HEIGHT_NUMB )})`},
                duration: 2.5,
                ease: "power2.inOut"   
            },
            0
        )
}
getSkillTL.prototype.playCallGraphTL = function(){
    this.callGraphTL.play();
}
getSkillTL.prototype.playExpandGraphTL = function(){
    this.expandGraphTL.play();
}


getSkillTL.prototype.reverseCallGraphTL = function(){
    this.callGraphTL.reverse();
}
getSkillTL.prototype.reverseExpandGraphTL = function(){
    this.expandGraphTL.reverse();
}


getSkillTL.prototype.update = function(){
    console.log('update is working')
}

getSkillTL.prototype.hoveroverOn = function(){
    this.getExpandGraph();
    this.playExpandGraphTL();

    select(`#${this.id} .skillShadow`).classList.add('barShadowAni');
    select(`#${this.id} .skillShadow`).style.height = (HALF_CIRCLE_SIZE_END_NUMB -0.5 )* 2 +'rem';  
}

getSkillTL.prototype.hoveroverOff = function(){
    this.reverseExpandGraphTL();

    select(`#${this.id} .skillShadow`).classList.remove('barShadowAni');
}

getSkillTL.prototype.getExpandGraph = function(){
    
    this.expandGraphTL
        .to(
            `#${this.id}Color stop:nth-child(1)`,
            {
                stopColor:'#ffffff',
                duration:1
            },
            0
         )
        .to(
            `#${this.id}Color stop:nth-child(2)`,
            {
                stopColor:'#ffffff',
                duration:1
            },
            0
        )
        // .to(
        //     `#${this.id} .bar`,
        //     {   
        //         y: - remToPx(HALF_CIRCLE_SIZE_END_NUMB -0.5 ),
        //         height: (HALF_CIRCLE_SIZE_END_NUMB -0.5 )* 2 +'rem',
        //         duration:1,
        //         ease:"elastic.out(1, 0.3)"
        //     },
        //     0
        // )
        .to(
            `#${this.id} .bar`,
            {
                scaleY:2.5,
                duration:1,
                transformOrigin:"center center"
            },0
        )
        .to(
            `#${this.id} .barStart`,
            {
                attr:{fill:'#ffffff'},
                duration:1
            },
            0
        )
        .to(
            `#${this.id} .barEnd`,
            {
                attr:{fill:'#ffffff'},
                duration:1
            },
            0
        )
}


function callSkills(elem){
    // if(elem ===SKILL){
        SKILL_CONTENTS.style.display = 'initial';
      

            MayaTL.getCallGraphTL();
            VrayTL.getCallGraphTL();
            ArnoldTL.getCallGraphTL();
            ZbrushTL.getCallGraphTL();
            HoudiniTL.getCallGraphTL();
            MarvelousDesignerTL.getCallGraphTL();
            SubstancePainterTL.getCallGraphTL();
            SubstanceDesignerTL.getCallGraphTL();
            MariTL.getCallGraphTL();
            MudboxTL.getCallGraphTL();
            PhotoshopTL.getCallGraphTL();
            threeDCoatTL.getCallGraphTL();
            RezomUVTL.getCallGraphTL();
            AfterEffectsTL.getCallGraphTL();
            NukeTL.getCallGraphTL();
            PythonTL.getCallGraphTL();
            HTMLTL.getCallGraphTL();
            JavascriptTL.getCallGraphTL();
            CSS3TL.getCallGraphTL();

            MayaTL.playCallGraphTL();
            VrayTL.playCallGraphTL();
            ArnoldTL.playCallGraphTL();
            ZbrushTL.playCallGraphTL();
            HoudiniTL.playCallGraphTL();
            MarvelousDesignerTL.playCallGraphTL();
            SubstancePainterTL.playCallGraphTL();
            SubstanceDesignerTL.playCallGraphTL();
            MariTL.playCallGraphTL();
            MudboxTL.playCallGraphTL();
            PhotoshopTL.playCallGraphTL();
            threeDCoatTL.playCallGraphTL();
            RezomUVTL.playCallGraphTL();
            AfterEffectsTL.playCallGraphTL();
            NukeTL.playCallGraphTL();
            PythonTL.playCallGraphTL();
            HTMLTL.playCallGraphTL();
            JavascriptTL.playCallGraphTL();
            CSS3TL.playCallGraphTL();
                
}


function stopSkills(){
    SKILL_CONTENTS.style.display = 'none';
    
    MayaTL.reverseCallGraphTL();
    MayaTL.reverseCallGraphTL();
    VrayTL.reverseCallGraphTL();
    ArnoldTL.reverseCallGraphTL();
    ZbrushTL.reverseCallGraphTL();
    HoudiniTL.reverseCallGraphTL();
    MarvelousDesignerTL.reverseCallGraphTL();
    SubstancePainterTL.reverseCallGraphTL();
    SubstanceDesignerTL.reverseCallGraphTL();
    MudboxTL.reverseCallGraphTL();
    PhotoshopTL.reverseCallGraphTL();
    threeDCoatTL.reverseCallGraphTL();
    RezomUVTL.reverseCallGraphTL();
    AfterEffectsTL.reverseCallGraphTL();
    NukeTL.reverseCallGraphTL();
    PythonTL.reverseCallGraphTL();
    HTMLTL.reverseCallGraphTL();
    JavascriptTL.reverseCallGraphTL();
    CSS3TL.reverseCallGraphTL();

}




function skillsUpdate(){
    if(biggerElem == SKILL){
        for(skill in skills){
            
            // setBarWidth();
            
            // select(`#${skill} .bar`).style.width = barWidth;
            // select(`#${skill} .barEnd`).style.cx = barCircleEnd;
            // // select(`#${skill} .percent`).setAttributeNS(null,'x', barCircleEnd);
            // select(`#${skill} .percent`).setAttributeNS(null,'transform', `matrix(1,0,0,1,${barCircleEnd},${remToPx(HALF_CIRCLE_SIZE_NUMB + HALF_BAR_HEIGHT_NUMB )})`);
        }
    }
}



let MayaTL = new getSkillTL('Maya');
let VrayTL = new getSkillTL('Vray');
let ArnoldTL = new getSkillTL('Arnold');
let ZbrushTL = new getSkillTL('Zbrush');
let HoudiniTL = new getSkillTL('Houdini');
let MarvelousDesignerTL = new getSkillTL('MarvelousDesigner');
let SubstancePainterTL = new getSkillTL('SubstancePainter');
let SubstanceDesignerTL = new getSkillTL('SubstanceDesigner');
let MariTL = new getSkillTL('Mari')
let MudboxTL = new getSkillTL('Mudbox');
let PhotoshopTL = new getSkillTL('Photoshop');
let threeDCoatTL = new getSkillTL('threeDCoat');
let RezomUVTL = new getSkillTL('RezomUV');
let AfterEffectsTL = new getSkillTL('AfterEffects');
let NukeTL = new getSkillTL('Nuke');
let PythonTL = new getSkillTL('Python');
let HTMLTL = new getSkillTL('HTML');
let JavascriptTL = new getSkillTL('Javascript');
let CSS3TL = new getSkillTL('CSS3');
