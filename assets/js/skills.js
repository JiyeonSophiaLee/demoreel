const SKILL_CONTENTS = document.querySelector(`#skill .contents`);
let halfCircleSize;
let halfCircleSizeEnd;
let halfBarHeight;

let halfCircleSizeNumb;
let halfCircleSizeEndNumb;
let halfBarHeightNumb;

setUnitSize();

const UNIT = halfCircleSize.replace(/[0-9]/g, '');

let select = s => document.querySelector(s);
let selectAll = s => document.querySelectorAll(s);
let rootFontSize = 16;
let pxToRem = (px)=> px/rootFontSize; 
let remToPx = (rem)=> rem * rootFontSize; 




function setUnitSize(){

    if(innerWidth >= 1400){
        halfCircleSize = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize1400');
        halfCircleSizeEnd = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSizeEnd1400');
        halfBarHeight = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight1400');


        halfCircleSizeNumb = parseFloat(halfCircleSize);
        halfCircleSizeEndNumb = parseFloat(halfCircleSizeEnd);
        halfBarHeightNumb = parseFloat(halfBarHeight);


    }else if(innerWidth > 800){
        halfCircleSize = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize');
        halfCircleSizeEnd = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSizeEnd');
        halfBarHeight = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight');


        halfCircleSizeNumb = parseFloat(halfCircleSize);
        halfCircleSizeEndNumb = parseFloat(halfCircleSizeEnd);
        halfBarHeightNumb = parseFloat(halfBarHeight);


    }else{
        halfCircleSize = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSize800');
        halfCircleSizeEnd = getComputedStyle(document.documentElement).getPropertyValue('--halfCircleSizeEnd800');
        halfBarHeight = getComputedStyle(document.documentElement).getPropertyValue('--halfBarHeight800');


        halfCircleSizeNumb = parseFloat(halfCircleSize);
        halfCircleSizeEndNumb = parseFloat(halfCircleSizeEnd);
        halfBarHeightNumb = parseFloat(halfBarHeight);
    }
}


const skills = {
    'Maya':{ 'name':'Maya', 'width':80, 'color': ['#92c6cc', '#106768'], 'date': 'from 2007'},
    'Vray':{ 'name':'Vray', 'width':82, 'color':['#fba547', '#8fb6e2'], 'date': 'from 2014'},
    'Arnold':{ 'name':'Arnold', 'width':85, 'color':['#8dc9d2', '#1f6571'], 'date': 'from 2017'},
    'Zbrush':{ 'name':'Zbrush', 'width':60, 'color': ['#464646', '#242424'], 'date': 'from 2015'},
    'Houdini':{ 'name':'Houdini', 'width':15, 'color': ['#fece5f', '#f05023'], 'date': 'from 2018'},
    'MarvelousDesigner':{ 'name':`Marvelous Designer`, 'width':20, 'color': ['#ffea1e', '#0a0a0a'], 'date': 'from 2014'},
    'SubstancePainter':{ 'name':`Substance Painter`, 'width':40, 'color': ['#e2212f', '#e2212f'], 'date': 'from 2015'},
    'SubstanceDesigner':{ 'name':`Substance Designer`, 'width':30, 'color': ['#ef4c25', '#ef4c25'], 'date': 'from 2016'},
    'Mari':{ 'name': 'Mari','width':70, 'color': ['#fcc021', '#000000'], 'date': 'from 2011'},
    'Mudbox':{ 'name':'Mudbox', 'width':90, 'color': ['#ea6741', '#791217'], 'date': 'from 2010'},
    'Photoshop':{ 'name':'Photoshop', 'width':85, 'color': ['#85bff9', '#2c286f'], 'date': 'from 2007'},
    'threeDCoat':{ 'name':`3D Coat`, 'width':75, 'color': ['#41919e', '#41919e'], 'date': 'from 2016'},
    'RezomUV':{ 'name':`Rezom UV`, 'width':60, 'color': ['#ef4000', '#b83808'], 'date': 'from 2014'},
    'AfterEffects':{ 'name':`After Effects`, 'width':60, 'color': ['#c88fff', '#312963'], 'date': 'from 2018'},
    'Nuke':{ 'name':'Nuke', 'width':70, 'color': ['#f9b41a', '#000000'], 'date': 'from 2011'},
    'Python':{ 'name':'Python', 'width':30, 'color': ['#3774a8',' #ffd647'], 'date': 'from 2019'},
    'HTML':{ 'name':'HTML', 'width':95, 'color': ['#d1382b', '#e93e30'], 'date': 'from 2019'},
    'Javascript':{ 'name':'Javascript', 'width':50, 'color': ['#efd93b', '#f5e695'], 'date': 'from 2019'},
    'CSS3':{ 'name':'CSS3', 'width':50, 'color': ['#29a5d1', '#208db8'], 'date': 'from 2019'}
}
const skillsPath = 'assets/images/icons/';
const colorOffset = ['10%','90%'];
// const RANDOM_COLOR = ['#628ba7','#dadbe0','#b1b4e1','#8f9ca0','#001f44','#fe9ac3','#fde6c7','#ffaeaa','#fe5f7c','#ffb582','#30d9e7','#00bcad','#00a295','#007bc8','#006ebe'];
const RANDOM_COLOR = ['#dc6c6c','#dc6cae','#dc6cc8','#816cdc','#6ca1dc','#6cdccb','#6cdc6f','#b1dc6c','#dccd6c','#dc9e6c'];


createSkillBar();
window.addEventListener('resize', skillsUpdate);





function createSkillBar(){
    let skillGroup = document.createElement('li');
    // let gridLine = document.createElement('div');
    let n = 4;



    skillGroup.classList.add('skillGroup');
    // gridLine.classList.add('gridLine');
    SKILL_CONTENTS.appendChild(skillGroup);
    // SKILL_CONTENTS.appendChild(gridLine);
    SKILL_CONTENTS.style.display = 'none';


    for(skill in skills){


        let group = document.createElement('div');
        let skillImage = document.createElement('div');
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
        let barStart1 = document.createElementNS(SVG_NAMESPACE_URI,'circle');
        let barEnd = document.createElementNS(SVG_NAMESPACE_URI,'circle');
        let barEnd1 = document.createElementNS(SVG_NAMESPACE_URI,'circle');
        let percent = document.createElementNS(SVG_NAMESPACE_URI,'text');
        let percentText = document.createTextNode(skills[skill]['width']+'%');

        let skillInfo = document.createElement('div');
        let skillInfoGroup = document.createElement('div');
        let skillInfoGroupParent = document.createElement('div');
        let skillInfoNameContainer = document.createElement('div');
        let skillInfoName = document.createElement('div');
        let skillInfoNameText = document.createTextNode(skills[skill]['name']);
        let skillinfoNameBG = document.createElement('div');

        let skillInfoDateContainer = document.createElement('div');
        let skillInfoDate = document.createElement('div');
        let skillInfoDateText = document.createTextNode(skills[skill]['date']);
        let skillinfoDateBG = document.createElement('div');







        group.classList.add('skillGraph')
        group.id = skill;
        skillImage.classList.add('skillImage');
        skillShadowParent.classList.add('skillShadowParent');
        skillShadow.classList.add('skillShadow');
        nameContainer.classList.add('nameContainer');
        nameSize.classList.add('nameSize');
        skillContainer.classList.add('skillContainer');
        canvas.classList.add('skillBar');
        rect.classList.add('bar');
        barStart.classList.add('barStart');
        barStart1.classList.add('barStart1');
        barEnd.classList.add('barEnd');
        barEnd1.classList.add('barEnd1');
        barBG.classList.add('barBG');
        percent.classList.add('percent');
        skillInfo.classList.add('skillInfo');
        skillinfoNameBG.classList.add('skillinfoNameBG');
        skillinfoNameBG.classList.add('skillInfoBG');
        skillInfoName.classList.add('skillInfoName');
        skillInfoName.classList.add('skillInfoText');
        skillinfoDateBG.classList.add('skillinfoDateBG');
        skillinfoDateBG.classList.add('skillInfoBG');
        skillInfoDate.classList.add('skillInfoDate');
        skillInfoDate.classList.add('skillInfoText');
        skillInfoNameContainer.classList.add('skillInfoNameContainer');
        skillInfoDateContainer.classList.add('skillInfoDateContainer')
        skillInfoNameContainer.classList.add('skillInfoContainer');
        skillInfoDateContainer.classList.add('skillInfoContainer')



        //------- set svg-----------

        // skills[skill]['color'].forEach((color,i)=>{
        //     let stop = document.createElementNS(SVG_NAMESPACE_URI,'stop');
        //     stop.setAttribute('offset', colorOffset[i]);
        //     stop.setAttribute('stop-color', color);
        //     gradient.appendChild(stop);
        // });

        // pickRadomColor.forEach((color,i)=>{
        //     let stop = document.createElementNS(SVG_NAMESPACE_URI,'stop');
        //     stop.setAttribute('offset', colorOffset[i]);
        //     stop.setAttribute('stop-color', color);
        //     gradient.appendChild(stop);
        // });
        skills[skill]['color'].forEach((color,i)=>{
            let stop = document.createElementNS(SVG_NAMESPACE_URI,'stop');
            stop.setAttribute('offset', colorOffset[i]);
            stop.setAttribute('stop-color', RANDOM_COLOR[(n + i)%10]);
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
    //----------------------------------------
        

        rect.setAttributeNS(null,'width',`calc(${halfCircleSize} + ${halfCircleSizeEnd})`);
        rect.setAttributeNS(null,'height',`calc(${halfBarHeight}*2)`);
        rect.setAttributeNS(null,'x',halfCircleSize);
        rect.setAttributeNS(null,'y',halfCircleSize);
        rect.setAttributeNS(null,'transform',`translate(0,${-remToPx(halfBarHeightNumb)})`);
        rect.setAttributeNS(null,'fill', `url(#${skill}Color)`);


        barBG.style.width = '100%';
        barBG.style.height = `calc(${halfBarHeight} * 3)`;
        barBG.setAttributeNS(null,'x',0);
        barBG.setAttributeNS(null,'y',`calc( ${halfCircleSize} - ${halfBarHeight} * 1.5 )`);
        barBG.setAttributeNS(null,'rx',halfBarHeight);
        barBG.setAttributeNS(null,'ry',halfBarHeight);

   
        barStart.setAttributeNS(null,'cx',halfCircleSize);
        barStart.setAttributeNS(null,'cy',halfCircleSize);
        barStart.setAttributeNS(null,'r', halfCircleSize);
        barStart.setAttributeNS(null,'fill', RANDOM_COLOR[n%10]);
        
        barStart1.setAttributeNS(null,'cx',halfCircleSize);
        barStart1.setAttributeNS(null,'cy',halfCircleSize);
        barStart1.setAttributeNS(null,'r', halfCircleSize);
        barStart1.setAttributeNS(null,'fill', RANDOM_COLOR[n%10]);


        barEnd.setAttributeNS(null,'cx',`calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd})`);
        barEnd.setAttributeNS(null,'cy',halfCircleSize);
        barEnd.setAttributeNS(null,'r', halfCircleSizeEnd);
        barEnd.setAttributeNS(null,'fill', RANDOM_COLOR[(n + 1) %10]);

        barEnd1.setAttributeNS(null,'cx',`calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd})`);
        barEnd1.setAttributeNS(null,'cy',halfCircleSize);
        barEnd1.setAttributeNS(null,'r', halfCircleSizeEnd);
        barEnd1.setAttributeNS(null,'fill', RANDOM_COLOR[(n + 1) %10]);

        percent.setAttribute('transform',`matrix(1,0,0,1,${remToPx(halfCircleSizeNumb*2 + halfCircleSizeEndNumb)},${remToPx(halfCircleSizeNumb)})`);
        percent.setAttribute('text-anchor','middle');
        percent.setAttribute('alignment-baseline','middle');

        
        g.setAttribute('filter','url(#filter)');
        //--------------------------------
        

        img.src = skillsPath + `${skills[skill]['name'].replace(/\s/g, '')}` + '.png';
        skillShadow.style.width = `calc(${halfCircleSize} * 2 + ${halfCircleSizeEnd} * 2 - ${halfBarHeight} * 2)`;
        skillinfoNameBG.style.background = RANDOM_COLOR[n%10];
        skillinfoDateBG.style.background = RANDOM_COLOR[(n+1)%10];
        

        p.appendChild(text);
        nameContainer.appendChild(p);
        nameContainer.appendChild(img);
        nameSize.appendChild(nameContainer);
        skillImage.appendChild(nameSize);

        
        filter.appendChild(feGaussianBlur);
        filter.appendChild(feColorMatrix);
        defs.appendChild(filter);
        defs.appendChild(gradient);
        percent.appendChild(percentText);
        g.appendChild(rect);
        g.appendChild(barStart);
        g.appendChild(barStart1);
        g.appendChild(barEnd);
        g.appendChild(barEnd1);
        canvas.appendChild(defs);
        canvas.appendChild(barBG);
        canvas.appendChild(g);
        canvas.appendChild(percent);
        skillContainer.appendChild(skillImage);
        skillShadowParent.appendChild(skillShadow);
        skillContainer.appendChild(skillShadowParent);
        skillContainer.appendChild(canvas);

        skillInfoName.appendChild(skillInfoNameText);
        skillInfoNameContainer.appendChild(skillInfoName);
        skillInfoNameContainer.appendChild(skillinfoNameBG);
        
        skillInfoDate.appendChild(skillInfoDateText);
        skillInfoDateContainer.appendChild(skillInfoDate);
        skillInfoDateContainer.appendChild(skillinfoDateBG);
        
        skillInfoGroup.appendChild(skillInfoNameContainer);
        skillInfoGroup.appendChild(skillInfoDateContainer);
        skillInfoGroupParent.appendChild(skillInfoGroup);
        skillInfo.appendChild(skillInfoGroupParent);
        skillContainer.appendChild(skillInfo);

        

        group.appendChild(skillContainer);
        skillGroup.appendChild(group);


      


        n += 1;
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
    this.callGraphTL800 = gsap.timeline({paused:true});



    this.hoveroverOnHandler = this.hoveroverOn.bind(this);
    this.hoveroverOffHandler = this.hoveroverOff.bind(this);

    this.elem.addEventListener('mouseenter',this.hoveroverOnHandler);
    this.elem.addEventListener('mouseleave',this.hoveroverOffHandler);

}


getSkillTL.prototype.setBarWidth = function(){
    let barClientWidth = select(`#skill .bar`).parentElement.parentElement.clientWidth;
    this.barWidth = (barClientWidth - ( remToPx(halfCircleSizeNumb) * 2 + remToPx(halfCircleSizeEndNumb))) * skills[this.id]['width'] / 100 + remToPx(halfCircleSizeNumb);
    this.barCircleEnd = this.barWidth + remToPx(halfCircleSizeNumb);
    
    // console.log(this.id, this.barWidth, this.barCircleEnd)
}

getSkillTL.prototype.getCallGraphTL = function(){

    this.barWidth;
    this.barCircleEnd;

    this.setBarWidth();
    

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
        .to(`#${this.id} .barEnd1`,
            {
                cx: this.barCircleEnd,
                duration: 2.5,
                ease: "power2.inOut"
            },
            0
        )
        .to(this.percent,
            {
                attr:{transform:`matrix(1,0,0,1,${this.barCircleEnd},${remToPx(halfCircleSizeNumb)})`},
                duration: 2.5,
                ease: "power2.inOut"   
            },
            0
        )
        .to(`#${this.id} .skillShadow`,
            {
                width: this.barCircleEnd,
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




getSkillTL.prototype.hoveroverOn = function(){
    if(innerWidth > 800){
        this.getExpandGraph();
        this.playExpandGraphTL();
    
        select(`#${this.id} .skillShadow`).classList.add('barShadowAni');
    }
}

getSkillTL.prototype.hoveroverOff = function(){
    if(innerWidth > 800){
        this.reverseExpandGraphTL();

        select(`#${this.id} .skillShadow`).classList.remove('barShadowAni');
    }
}

getSkillTL.prototype.getExpandGraph = function(){
    this.idParentWidth = select(`#${this.id}`).firstElementChild.clientWidth - remToPx(halfCircleSizeEndNumb);


    this.setBarWidth();

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
        




        .to(
            `#${this.id} .bar`,
            {   
                scaleY:2.3,
                duration:1,
                transformOrigin:"center center",
                ease: "elastic.out(1, 0.3)"
            },0
        )
        .fromTo(
            `#${this.id} .bar`,
            {
                width: this.barWidth
            },
            {   
                width: this.idParentWidth - remToPx(halfCircleSizeEndNumb),
                duration:1,
                ease: "bounce.out"
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
            `#${this.id} .barStart`,
            {
                scale:0.95,
                transformOrigin:"center center",
                duration:0.5,
                ease: "elastic.out(1, 0.3)"
            },
            0
        )
        .to(
            `#${this.id} .barStart`,
            {
                scale:1,
                transformOrigin:"center center",
                duration:0.5,
                ease: "elastic.out(1, 0.3)"
            },
            0.5
        )

        .to(
            `#${this.id} .barStart1`,
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
        .fromTo(
            `#${this.id} .barEnd`,
            {
                cx: this.barCircleEnd,
            },
            {
                cx: this.idParentWidth,
                duration:1,
                ease: "bounce.out"
            },
            0
        )

        .to(
            `#${this.id} .barEnd1`,
            {
                attr:{fill:'#ffffff'},
                duration:1
            },
            0
        )
        .fromTo(
            `#${this.id} .barEnd1`,
            {
                cx: this.barCircleEnd,
            },
            {
                cx: this.idParentWidth,
                duration:1,
                ease: "bounce.out"
            },
            0
        )


        
        .fromTo(
            `#${this.id} .percent`,
            {
                attr:{transform:`matrix(1,0,0,1,${this.barCircleEnd},${remToPx(halfCircleSizeNumb)})`},
            },
            {
                attr:{transform:`matrix(1,0,0,1,${this.idParentWidth},${remToPx(halfCircleSizeNumb)})`},
                duration:1,
                ease: "bounce.out"
            },
            0
        )

        


        .to(
            `#${this.id} .skillShadow`,
            {
                scaleY:2.5,
                duration:1,
                transformOrigin:"center center",
                ease: "elastic.out(1, 0.3)"
            },
            0
        )
        .fromTo(
            `#${this.id} .skillShadow`,
            {
                width: this.barCircleEnd
            },
            {
                width: this.idParentWidth,
                duration:1,
                ease: "bounce.out"
            },
            0
        )


        .to(
            `#${this.id} .skillInfoBG`,
            {
                scaleY:1,
                duration:0.3,
                stagger: 0.3,
                ease:"power2.inOut"
            },
            0
        )
        .to(
            `#${this.id} .skillInfoBG`,
            {
                scaleY:0,
                duration:0.3,
                stagger: 0.3,
                ease:"power2.inOut"
            },
            0.3
        )
        
        .to(
            `#${this.id} .skillInfoText`,
            {
                opacity:1,
                duration:0.1,
                stagger: 0.3,
            },
            0.3
        )
}

getSkillTL.prototype.getExpandGraph800 = function(){
    this.idParentWidth = select(`#${this.id}`).firstElementChild.clientWidth - remToPx(halfCircleSizeEndNumb);


    this.setBarWidth();

    this.expandGraphTL
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
        




        .to(
            `#${this.id} .bar`,
            {   
                scaleY:2.3,
                height: remToPx(halfCircleSizeNumb),
                duration:1,
                transformOrigin:"center center",
                ease: "bounce.out"
            },0
        )
        .fromTo(
            `#${this.id} .bar`,
            {
                width: this.barWidth
            },
            {   
                width: this.idParentWidth - remToPx(halfCircleSizeEndNumb),
                duration:1,
                ease: "bounce.out"
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
            `#${this.id} .barStart`,
            {
                scale:0.95,
                transformOrigin:"center center",
                duration:0.5,
                ease: "elastic.out(1, 0.3)"
            },
            0
        )
        .to(
            `#${this.id} .barStart`,
            {
                scale:1,
                transformOrigin:"center center",
                duration:0.5,
                ease: "elastic.out(1, 0.3)"
            },
            0.5
        )

        .to(
            `#${this.id}`,
            {
                height: remToPx(halfCircleSizeNumb*3),
                duration:1,
                ease: "bounce.out"
            },
            0
        )
        .to(
            `#${this.id} .barStart1`,
            {
                attr:{fill:'#ffffff'},
                duration:1
            },
            0
        )
        .to(
            `#${this.id} .barStart1`,
            {
                cy: remToPx(halfCircleSizeNumb*2),
                duration:1,
                ease: "bounce.out"
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
        .fromTo(
            `#${this.id} .barEnd`,
            {
                cx: this.barCircleEnd
            },
            {
                cx: this.idParentWidth,
                duration:1,
                ease: "bounce.out"
            },
            0
        )



        .to(
            `#${this.id} .barEnd1`,
            {
                attr:{fill:'#ffffff'},
                duration:1
            },
            0
        )
        .fromTo(
            `#${this.id} .barEnd1`,
            {
                cx: this.barCircleEnd,
                cy: remToPx(halfCircleSizeNumb*1)
            },
            {
                cx: this.idParentWidth,
                cy: remToPx(halfCircleSizeNumb*2),
                duration:1,
                ease: "bounce.out"
            },
            0
        )



        
        .fromTo(
            `#${this.id} .percent`,
            {
                attr:{transform:`matrix(1,0,0,1,${this.barCircleEnd},${remToPx(halfCircleSizeNumb)})`},
            },
            {
                attr:{transform:`matrix(1,0,0,1,${this.idParentWidth},${remToPx(halfCircleSizeNumb)})`},
                duration:1,
                ease: "bounce.out"
            },
            0
        )

        


        .to(
            `#${this.id} .skillShadow`,
            {
                scaleY:2,
                duration:1,
                transformOrigin:"center center"
            },
            0
        )
        .fromTo(
            `#${this.id} .skillShadow`,
            {
                width: this.barCircleEnd
            },
            {
                width: this.idParentWidth,
                duration:1,
                ease: "bounce.out"
            },
            0
        )


        .to(
            `#${this.id} .skillInfo`,
            {
                height: remToPx(halfCircleSizeNumb) * 3,
                duration:0.3,
                ease:"power2.inOut"
            },
            0
        )
        .to(
            `#${this.id} .skillInfoBG`,
            {
                scaleY:1,
                duration:0.3,
                ease:"power2.inOut"
            },
            0
        )
        .to(
            `#${this.id} .skillInfoBG`,
            {
                scaleY:0,
                duration:0.3,
                ease:"power2.inOut"
            },
            0.3
        )
        
        .to(
            `#${this.id} .skillInfoText`,
            {
                opacity:1,
                duration:0.1,
                stagger: 0.3,
            },
            0.3
        )
}



        

getSkillTL.prototype.skillUpdate = function(){
    this.setBarWidth();
    // this.getExpandGraph();


    select(`#${this.id} .bar`).style.width = this.barWidth;
    select(`#${this.id} .barEnd`).style.cx = this.barCircleEnd;
    select(`#${this.id} .barEnd1`).style.cx = this.barCircleEnd;
    select(`#${this.id} .percent`).setAttributeNS(null,'transform', `matrix(1,0,0,1,${this.barCircleEnd},${remToPx(halfCircleSizeNumb)})`);
    

    select(`#${this.id} .barStart`).setAttributeNS(null,'cx',halfCircleSize);
    select(`#${this.id} .barStart`).setAttributeNS(null,'cy',halfCircleSize);
    select(`#${this.id} .barStart`).setAttributeNS(null,'r', halfCircleSize);

    select(`#${this.id} .barStart1`).setAttributeNS(null,'cx',halfCircleSize);
    select(`#${this.id} .barStart1`).setAttributeNS(null,'cy',halfCircleSize);
    select(`#${this.id} .barStart1`).setAttributeNS(null,'r', halfCircleSize);


    select(`#${this.id} .barEnd`).setAttributeNS(null,'cy',halfCircleSize);
    select(`#${this.id} .barEnd`).setAttributeNS(null,'r',halfCircleSizeEnd);

    select(`#${this.id} .barEnd1`).setAttributeNS(null,'cy',halfCircleSize);
    select(`#${this.id} .barEnd1`).setAttributeNS(null,'r',halfCircleSizeEnd);



    select(`#${this.id} .bar`).style.height = `calc(${halfBarHeight}*2)`;
    select(`#${this.id} .bar`).setAttributeNS(null,'x',halfCircleSize);
    select(`#${this.id} .bar`).setAttributeNS(null,'y',halfCircleSize);
    select(`#${this.id} .bar`).setAttributeNS(null,'transform',`translate(0,${-remToPx(halfBarHeightNumb)})`);


    select(`#${this.id} .barBG`).style.height = `calc(${halfBarHeight} * 3)`;;
    select(`#${this.id} .barBG`).setAttributeNS(null,'y',`calc( ${halfCircleSize} - ${halfBarHeight} * 1.5 )`);


    this.expandGraphTL.clear();
    this.callGraphTL.clear();
}

function callSkills(elem){
    // if(elem ===SKILL){
        SKILL_CONTENTS.style.display = 'initial';
      
        TLarray.forEach((tl)=>{
            tl.getCallGraphTL();
            tl.playCallGraphTL();
            
        })
          
}


function stopSkills(){
    SKILL_CONTENTS.style.display = 'none';
    
    TLarray.forEach((tl)=>{
        tl.reverseCallGraphTL();
    })
      
    // MayaTL.reverseCallGraphTL();
    // VrayTL.reverseCallGraphTL();
    // ArnoldTL.reverseCallGraphTL();
    // ZbrushTL.reverseCallGraphTL();
    // HoudiniTL.reverseCallGraphTL();
    // MarvelousDesignerTL.reverseCallGraphTL();
    // SubstancePainterTL.reverseCallGraphTL();
    // SubstanceDesignerTL.reverseCallGraphTL();
    // MudboxTL.reverseCallGraphTL();
    // PhotoshopTL.reverseCallGraphTL();
    // threeDCoatTL.reverseCallGraphTL();
    // RezomUVTL.reverseCallGraphTL();
    // AfterEffectsTL.reverseCallGraphTL();
    // NukeTL.reverseCallGraphTL();
    // PythonTL.reverseCallGraphTL();
    // HTMLTL.reverseCallGraphTL();
    // JavascriptTL.reverseCallGraphTL();
    // CSS3TL.reverseCallGraphTL();

}




function skillsUpdate(){
    if(biggerElem == SKILL){
        // setBarWidth
        setUnitSize();
        // console.log('half circle size',halfCircleSize)

        TLarray.forEach((tl)=>{
            tl.skillUpdate();
        })

    }
}



const MayaTL = new getSkillTL('Maya');
const VrayTL = new getSkillTL('Vray');
const ArnoldTL = new getSkillTL('Arnold');
const ZbrushTL = new getSkillTL('Zbrush');
const HoudiniTL = new getSkillTL('Houdini');
const MarvelousDesignerTL = new getSkillTL('MarvelousDesigner');
const SubstancePainterTL = new getSkillTL('SubstancePainter');
const SubstanceDesignerTL = new getSkillTL('SubstanceDesigner');
const MariTL = new getSkillTL('Mari')
const MudboxTL = new getSkillTL('Mudbox');
const PhotoshopTL = new getSkillTL('Photoshop');
const threeDCoatTL = new getSkillTL('threeDCoat');
const RezomUVTL = new getSkillTL('RezomUV');
const AfterEffectsTL = new getSkillTL('AfterEffects');
const NukeTL = new getSkillTL('Nuke');
const PythonTL = new getSkillTL('Python');
const HTMLTL = new getSkillTL('HTML');
const JavascriptTL = new getSkillTL('Javascript');
const CSS3TL = new getSkillTL('CSS3');

const TLarray = [MayaTL,VrayTL,ArnoldTL,ZbrushTL,HoudiniTL,MarvelousDesignerTL,SubstancePainterTL,SubstanceDesignerTL,MariTL,MudboxTL,PhotoshopTL,threeDCoatTL,RezomUVTL,AfterEffectsTL,NukeTL,PythonTL,HTMLTL,JavascriptTL,CSS3TL]
