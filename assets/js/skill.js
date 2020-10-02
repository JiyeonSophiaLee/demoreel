const SKILL_CONTENTS = document.querySelector(`#skill .contents`);
let halfCircleSize = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize');
let halfCircleEndSize = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleEndSize');
// let circleUnit = halfCircleSize.replace(/[0-9]/g, '');
// let circleNumb = parseFloat(halfCircleSize);
let halfBarHeight = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight');


let select = s => document.querySelector(s);

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
    '3DCoat':{ 'name':`3D Coat`, 'width':75, 'color': ['#41919e', '#41919e']},
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

// window.addEventListener('resize', skillUpdateSize);

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
        let LI = document.createElement('LI');
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
        

        group.classList.add('skillGraph')
        group.id = (skills[skill]['name'].replace(/\s/g, ''));
        LI.classList.add('skillName');
        nameContainer.classList.add('nameContainer');
        nameSize.classList.add('nameSize');
        barContainer.classList.add('skillbarContainer');
        canvas.classList.add('skillBar');
        rect.classList.add('bar');
        barBG.classList.add('barBG');



        //------- set svg-----------
        // canvas.style.width = skills[skill]['width']+'%';
        // canvas.style.height = '5rem';

        skills[skill]['color'].forEach((color,i)=>{
            let stop = document.createElementNS(SVG_NAMESPACE_URI,'stop');
            stop.setAttribute('offset', colorOffset[i]);
            stop.setAttribute('stop-color', color);
            gradient.appendChild(stop);
        });

        gradient.id = (skills[skill]['name'].replace(/\s/g, '')+'Color');
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

        rect.style.width = skills[skill]['width']+'%';
        // rect.style.height = '5rem';
        rect.setAttributeNS(null,'x',0);
        // rect.setAttributeNS(null,'y',0);
        rect.setAttributeNS(null,'y',`calc( -${halfBarHeight} + ${halfCircleSize})`);
        // rect.setAttributeNS(null,'rx',halfBarHeight);
        // rect.setAttributeNS(null,'ry',halfBarHeight);
        rect.setAttributeNS(null,'fill', `url(#${skills[skill]['name'].replace(/\s/g, '')}Color)`);
        // rect.setAttribute('transform', `translate( 0, ${halfCircleSize})`);

        barBG.style.width = '100%';
        // barBG.style.height = '5rem';
        barBG.setAttributeNS(null,'x',0);
        // barBG.setAttributeNS(null,'y',0);
        barBG.setAttributeNS(null,'y',`calc( -${halfBarHeight} * 1.5 + ${halfCircleSize})`);
        barBG.setAttributeNS(null,'rx',halfBarHeight);
        barBG.setAttributeNS(null,'ry',halfBarHeight);
        // barBG.setAttributeNS(null,'fill', `url(#${skills[skill]['name'].replace(/\s/g, '')}Color)`);
        // barBG.setAttribute('transform', `translate( 0, ${halfCircleSize})`);

   
        circle.setAttributeNS(null,'cx',halfCircleSize);
        circle.setAttributeNS(null,'cy',halfCircleSize);
        circle.setAttributeNS(null,'r', halfCircleSize);
        circle.setAttributeNS(null,'fill', skills[skill]['color'][0]);

        barEnd.setAttributeNS(null,'cx',skills[skill]['width']+'%');
        barEnd.setAttributeNS(null,'cy',halfCircleSize);
        barEnd.setAttributeNS(null,'r', halfCircleEndSize);
        barEnd.setAttributeNS(null,'fill', skills[skill]['color'][1]);

        g.setAttribute('filter','url(#filter)');
        //--------------------------------


        // bar.style.width = skills[skill]['width']+'%';

        img.src = skillsPath + `${skill}` + '.png';
        // bar.style.background = skills[skill]['color'];


        p.appendChild(text);
        nameContainer.appendChild(p);
        nameContainer.appendChild(img);
        nameSize.appendChild(nameContainer);
        LI.appendChild(nameSize);
        
        filter.appendChild(feGaussianBlur);
        filter.appendChild(feColorMatrix);
        defs.appendChild(filter);
        defs.appendChild(gradient);
        canvas.appendChild(defs);
        canvas.appendChild(barBG);
        g.appendChild(rect);
        g.appendChild(circle);
        g.appendChild(barEnd);
        canvas.appendChild(g);
        barContainer.appendChild(canvas);
        group.appendChild(LI);
        group.appendChild(barContainer);
        skillGroup.appendChild(group);
    };
}


function callSkillsIf(elem){
    if(elem ===SKILL){

        setTimeout(() => {
            SKILL_CONTENTS.style.display = 'initial';
        }, transitionValue['duration'] * 1000);

    }
}

function callSkillsElseIf(elem){
    if(elem ===SKILL){

        setTimeout(() => {
            SKILL_CONTENTS.style.display = 'initial';
        }, transitionValue['duration'] * 1000);

    }else{
        SKILL_CONTENTS.style.display = 'none';
    }
}

function callSkillsElse(elem){
    if(elem ===SKILL){
        SKILL_CONTENTS.style.display = 'none';
    }
}

function skillUpdateSize(){
    if(biggerElem == SKILL){
        console.log('skill is working')
    }
}
