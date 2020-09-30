const SKILL_CONTENTS = document.querySelector(`#skill .contents`);

const skills = {
    'Maya':{'name':'Maya','width':80},
    'Vray':{'name':'Vray','width':82},
    'Arnold':{'name':'Arnold','width':85},
    'Zbrush':{'name':'Zbrush','width':60},
    'Houdini':{'name':'Houdini','width':15},
    'MarvelousDesigner':{'name':`Marvelous Designer`,'width':20},
    'SubstancePainter':{'name':`Substance Painter`,'width':40},
    'SubstanceDesigner':{'name':`Substance Designer`,'width':30},
    'Mari':{'name':'Mari','width':70},
    'Mudbox':{'name':'Mudbox','width':90},
    'Photoshop':{'name':'Photoshop','width':85},
    '3DCoat':{'name':`3D Coat`,'width':75},
    'RezomUV':{'name':`Rezom UV`,'width':60},
    'AfterEffects':{'name':`After Effects`,'width':60},
    'Nuke':{'name':'Nuke','width':70},
    'Python':{'name':'Python','width':30},
    'HTML':{'name':'HTML','width':95},
    'Javascript':{'name':'Javascript','width':50},
    'CSS3':{'name':'CSS3','width':50}
}

createSkillBar();



function createSkillBar(){
    let skillGroup = document.createElement('li');

    skillGroup.classList.add('skillGroup');
    SKILL_CONTENTS.appendChild(skillGroup);
    SKILL_CONTENTS.style.display = 'none';


    for(skill in skills){
        let group = document.createElement('div');
        let LI = document.createElement('LI');
        let p = document.createElement('p');
        let text = document.createTextNode(skills[skill]['name']);
        let barContainder = document.createElement('div');
        let barBlender = document.createElement('div');
        let barGroup = document.createElement('div');
        let bar = document.createElement('div');
        

        group.classList.add('skillGraph')
        group.classList.add(skills[skill]['name'].replace(/\s/g, ''));
        LI.classList.add('skillName');
        barContainder.classList.add('skillBarContainder');
        barBlender.classList.add('barBlender');
        barGroup.classList.add('barGroup');
        bar.classList.add('skillBar');

        bar.style.width = skills[skill]['width']+'%';


        p.appendChild(text);
        LI.appendChild(p);
        barGroup.appendChild(bar);
        barBlender.appendChild(barGroup);
        barContainder.appendChild(barBlender);
        group.appendChild(LI);
        group.appendChild(barContainder);
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