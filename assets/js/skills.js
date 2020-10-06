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


let barClientWidth, barWidth, barCircleEnd;


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
window.addEventListener('resize', skillUpdateSize);

// console.log(skills[skill]['name'])

// console.log(select(skills[skill]['name']))
// console.log(document.querySelector(`#${skills[skill]['name']}`))


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
        let barContainer = document.createElement('div');
        let canvas = document.createElementNS(SVG_NAMESPACE_URI,'svg');
        let defs = document.createElementNS(SVG_NAMESPACE_URI,'defs');
        let gradient = document.createElementNS(SVG_NAMESPACE_URI,'linearGradient');
        let filter = document.createElementNS(SVG_NAMESPACE_URI,'filter');
        let feGaussianBlur = document.createElementNS(SVG_NAMESPACE_URI,'feGaussianBlur');
        let feColorMatrix = document.createElementNS(SVG_NAMESPACE_URI,'feColorMatrix');
        let g = document.createElementNS(SVG_NAMESPACE_URI,'g');
        let rect = document.createElementNS(SVG_NAMESPACE_URI,'rect');
        let barBG = document.createElementNS(SVG_NAMESPACE_URI,'rect');
        let circle = document.createElementNS(SVG_NAMESPACE_URI,'circle');
        let barEnd = document.createElementNS(SVG_NAMESPACE_URI,'circle');
        let percent = document.createElementNS(SVG_NAMESPACE_URI,'text');
        let percentText = document.createTextNode(skills[skill]['width']+'%');
        

        group.classList.add('skillGraph')
        group.id = skill;
        skillName.classList.add('skillName');
        nameContainer.classList.add('nameContainer');
        nameSize.classList.add('nameSize');
        barContainer.classList.add('skillbarContainer');
        canvas.classList.add('skillBar');
        rect.classList.add('bar');
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

        

        // rect.setAttributeNS(null,'width',`calc(${HALF_CIRCLE_SIZE} + ${HALF_CIRCLE_SIZE_END})`);
        rect.setAttributeNS(null,'x',HALF_CIRCLE_SIZE);
        rect.setAttributeNS(null,'y',`calc( -${HALF_BAR_HEIGHT} + ${HALF_CIRCLE_SIZE})`);
        rect.setAttributeNS(null,'fill', `url(#${skills[skill]['name'].replace(/\s/g, '')}Color)`);


        barBG.style.width = '100%';
        barBG.setAttributeNS(null,'x',0);
        barBG.setAttributeNS(null,'y',`calc( -${HALF_BAR_HEIGHT} * 1.5 + ${HALF_CIRCLE_SIZE})`);
        barBG.setAttributeNS(null,'rx',HALF_BAR_HEIGHT);
        barBG.setAttributeNS(null,'ry',HALF_BAR_HEIGHT);

   
        circle.setAttributeNS(null,'cx',HALF_CIRCLE_SIZE);
        circle.setAttributeNS(null,'cy',HALF_CIRCLE_SIZE);
        circle.setAttributeNS(null,'r', HALF_CIRCLE_SIZE);
        circle.setAttributeNS(null,'fill', skills[skill]['color'][0]);

        // barEnd.setAttributeNS(null,'cx',`calc(${HALF_CIRCLE_SIZE} * 2 + ${HALF_CIRCLE_SIZE_END})`);
        barEnd.setAttributeNS(null,'cy',HALF_CIRCLE_SIZE);
        barEnd.setAttributeNS(null,'r', HALF_CIRCLE_SIZE_END);
        barEnd.setAttributeNS(null,'fill', skills[skill]['color'][1]);

        // percent.setAttribute('x',HALF_CIRCLE_SIZE_NUMB*2 + HALF_CIRCLE_SIZE_END_NUMB + UNIT);
        // percent.setAttribute('y',HALF_CIRCLE_SIZE_NUMB + HALF_BAR_HEIGHT_NUMB + UNIT);
        percent.setAttribute('text-anchor','middle');

        
        g.setAttribute('filter','url(#filter)');
        //--------------------------------


        // bar.style.width = skills[skill]['width']+'%';

        img.src = skillsPath + `${skills[skill]['name'].replace(/\s/g, '')}` + '.png';
        // bar.style.background = skills[skill]['color'];
        

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
        g.appendChild(circle);
        g.appendChild(barEnd);
        canvas.appendChild(defs);
        canvas.appendChild(barBG);
        canvas.appendChild(g);
        canvas.appendChild(percent);
        barContainer.appendChild(canvas);
        group.appendChild(skillName);
        group.appendChild(barContainer);
        skillGroup.appendChild(group);
      
    };
}

function callSkills(elem){
    if(elem ===SKILL){
        SKILL_CONTENTS.style.display = 'initial';

        setTimeout(() => {
            for(skill in skills){

                setBarWidth();
                

                gsap.fromTo(
                    `#${skill} .bar`,
                    {
                        width:`calc(${HALF_CIRCLE_SIZE} + ${HALF_CIRCLE_SIZE_END})`
                    },
                    {
                        width: barWidth,
                        duration: 2,
                        ease:'power2.out'
                    }
                )
                gsap.fromTo(
                    `#${skill} .barEnd`,
                    {
                        cx:`calc(${HALF_CIRCLE_SIZE} * 2 + ${HALF_CIRCLE_SIZE_END})`
                    },
                    {
                        cx: barCircleEnd,
                        duration: 2,
                        ease:'power2.out'
                    }
                )
                gsap.fromTo(
                    `#${skill} .percent`,
                    {
                        // attr:{transform:"matrix(1, 0, 0, 1, 100, 100)"}
                        attr:{transform:`matrix(1,0,0,1,${remToPx(HALF_CIRCLE_SIZE_NUMB*2 + HALF_CIRCLE_SIZE_END_NUMB)},${remToPx(HALF_CIRCLE_SIZE_NUMB + HALF_BAR_HEIGHT_NUMB )})`}
                        // x:HALF_CIRCLE_SIZE_NUMB*2 + HALF_CIRCLE_SIZE_END_NUMB + UNIT
                    },
                    {
                        // attr:{transform:"matrix(1, 0, 0, 1, 100, 100)"},
                        attr:{transform:`matrix(1,0,0,1,${barCircleEnd},${remToPx(HALF_CIRCLE_SIZE_NUMB + HALF_BAR_HEIGHT_NUMB )})`},
                        // x: barCircleEnd,
                        duration: 2,
                        ease:'power2.out'
                    }
                ) 
            }
            
        }, 0);
    }
}
function stopSkills(){
    // if(biggeredElem ===SKILL){
        SKILL_CONTENTS.style.display = 'none';
}


function setBarWidth(){
    barClientWidth = select(`#${skill} .bar`).parentElement.parentElement.clientWidth;
    barWidth = (barClientWidth - ( remToPx(HALF_CIRCLE_SIZE_NUMB) * 2 + remToPx(HALF_CIRCLE_SIZE_END_NUMB))) * skills[skill]['width'] / 100 + remToPx(HALF_CIRCLE_SIZE_NUMB);
    barCircleEnd = barWidth + remToPx(HALF_CIRCLE_SIZE_NUMB);
}


function skillUpdateSize(){
    if(biggerElem == SKILL){
        for(skill in skills){
            
            setBarWidth();
            
            select(`#${skill} .bar`).style.width = barWidth;
            select(`#${skill} .barEnd`).style.cx = barCircleEnd;
            // select(`#${skill} .percent`).setAttributeNS(null,'x', barCircleEnd);
            select(`#${skill} .percent`).setAttributeNS(null,'transform', `matrix(1,0,0,1,${barCircleEnd},${remToPx(HALF_CIRCLE_SIZE_NUMB + HALF_BAR_HEIGHT_NUMB )})`);
        }
    }
}
