let workImgs=[];

const tablePath = 'assets/images/projects/table_scene_thumbnails/';
const tableName =  'table_scene_thumbnails'
const tableExtension = '.jpg'
const tableSceneMain = '_01';
const tableSceneSub = ['_02','_03','_04','_05','_06','_07'];

const chandelierPath = 'assets/images/projects/chandelier_scene_thumbnails/';
const chandelierName =  'chandelier_scene_thumbnails'
const chandelierExtension = '.jpg'
const chandelierSceneMain = '_01';
const chandelierSceneSub = ['_02','_03','_04','_05','_06','_07'];

const sunrisePath = 'assets/images/projects/sunrise_scene_thumbnails/';
const sunriseName =  'sunrise_scene_thumbnails'
const sunriseExtension = '.jpg'
const sunriseSceneMain = '_02';
const sunriseSceneSub = ['_01','_03','_04','_05'];

const womanPath = 'assets/images/projects/woman_scene_thumbnails/';
const womanName =  'woman_scene_thumbnails'
const womanExtension = '.jpg'
const womanSceneMain = '_03';
const womanSceneSub = ['_01','_02','_04','_05','_06','_07','_08'];

const wishingBoxPath = 'assets/images/projects/wishingBox_thumbnails/';
const wishingBoxName =  'wishingBox_thumbnails'
const wishingBoxExtension = '.jpg'
const wishingBoxSceneMain = '_03';
const wishingBoxSceneSub = ['_01','_02','_04','_05','_06'];

const giantPath = 'assets/images/projects/giant_thumbnails/';
const giantBoxName =  'giant_thumbnails'
const giantExtension = '.jpg'
const giantSceneMain = '_01';
const giantSceneSub = ['_02','_03','_04','_05','_06','_07'];





const tableScene = new projectThumbnail(tablePath,tableName,tableExtension,tableSceneMain,tableSceneSub);
const chandelierScene = new projectThumbnail(chandelierPath,chandelierName,chandelierExtension,chandelierSceneMain,chandelierSceneSub);
const sunriseScene = new projectThumbnail(sunrisePath,sunriseName,sunriseExtension,sunriseSceneMain,sunriseSceneSub);
const womanScene = new projectThumbnail(womanPath,womanName,womanExtension,womanSceneMain,womanSceneSub);
const wishingBoxScene = new projectThumbnail(wishingBoxPath,wishingBoxName,wishingBoxExtension,wishingBoxSceneMain,wishingBoxSceneSub);
const giantScene = new projectThumbnail(giantPath,giantBoxName,giantExtension,giantSceneMain,giantSceneSub);


const workThumbnails = [tableScene,chandelierScene,sunriseScene,womanScene,wishingBoxScene,giantScene];








function projectThumbnail(path, projectName, extension ,main, sub){
    this.path = path;
    this.projectName = projectName;
    this.extension = extension;
    this.main = main;
    this.sub = sub;
}
projectThumbnail.prototype.createProjectImage = function(){
    let div = document.createElement('div');

    let img = document.createElement('img');
    img.src = this.path + this.projectName + this.main + this.extension;
    

    div.classList.add('projects');
    img.classList.add('mainContent');

    div.appendChild(img);

    this.sub.forEach(sub => {
        let img = document.createElement('img');
        img.src = this.path + this.projectName + sub + this.extension;

        img.classList.add('subContent');
        div.appendChild(img);
    });
    return div;
};
projectThumbnail.prototype.createLineingImage = function(){
    let imgs = {mainContent:[], subContent:[]};
    let mainImg = this.path + this.projectName + this.main + this.extension;

    imgs.mainContent.push(mainImg);

    this.sub.forEach(sub=>{
        let subImg = this.path + this.projectName + sub + this.extension;

        imgs.subContent.push(subImg);
    });
    return imgs
}









createProjectGroup('work');
window.addEventListener('resize',()=>{
    if(biggerElem.id=='work'){
        workSwitchProjectLine();
    }
})









function createProjectGroup(name){
    let content = document.querySelector(`#${name} .contents`);
    let thumbnails = eval(name + 'Thumbnails');
    let groupProjects = document.createElement('div');
    let groupIneImags = document.createElement('div');
    let lineImgs = document.createElement('div');

    groupProjects.classList.add('groupProjects');
    groupIneImags.classList.add('groupIneImags');
    lineImgs.classList.add('lineImgs');
    
    groupProjects.style.display = 'none';
    groupIneImags.style.display = 'none'
    
    content.appendChild(groupProjects);
    content.appendChild(groupIneImags);
    groupIneImags.appendChild(lineImgs);

    thumbnails.forEach(project=>{
        let div = project.createProjectImage();
        groupProjects.appendChild(div);
    })
    thumbnails.forEach(project=>{
        let div = project.createLineingImage();
        let img = document.createElement('img');
        
        img.src = div['mainContent'];
        img.classList.add('mainContent');
        lineImgs.appendChild(img);

        div['subContent'].forEach(function(test, i){
            let img = document.createElement('img');
        
            img.src = div['subContent'][i];
            img.classList.add('subContent');
            lineImgs.appendChild(img);
        })
    })
}











function callThumbnailIf (elem){

    setTimeout(() => {
        if(innerWidth < 1400){
            document.querySelector(`#${elem.id} .contents .groupProjects`).style.display = 'initial';
        }else{
            document.querySelector(`#${elem.id} .contents .groupIneImags`).style.display = 'initial';
        }
    }, transitionValue.duration * 1000);
        
    
}
function callThumbnailElseIf (elem){

    if(innerWidth < 1400){
        document.querySelector(`#${biggeredElem.id} .contents .groupProjects`).style.display = 'none';
    }else{
        document.querySelector(`#${biggeredElem.id} .contents .groupIneImags`).style.display = 'none';
    }

    
    setTimeout(() => {
        if(innerWidth < 1400){
            document.querySelector(`#${elem.id} .contents .groupProjects`).style.display = 'initial';
        }else{
            document.querySelector(`#${elem.id} .contents .groupIneImags`).style.display = 'initial';
        }
    }, transitionValue.duration * 1000);
        
    
}

function callThumbnailElse (elem){

    if(innerWidth<  1400){
        document.querySelector(`#${elem.id} .contents .groupProjects`).style.display = 'none';
    }else{
        document.querySelector(`#${elem.id} .contents .groupIneImags`).style.display = 'none';
    }

        
    
}

function workSwitchProjectLine(){
    if(innerWidth < 1400){
        document.querySelector(`#work .contents .groupProjects`).style.display = 'initial';
        document.querySelector(`#work .contents .groupIneImags`).style.display = 'none';
    }else{
        document.querySelector(`#work .contents .groupProjects`).style.display = 'none';
        document.querySelector(`#work .contents .groupIneImags`).style.display = 'initial';
    }
}


