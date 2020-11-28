const tablePath = 'assets/images/projects/table_scene_thumbnails/';
const tableName =  'table_scene_thumbnails'
const tableExtension = '.jpg'
const tableSceneMain = '_01';
const tableSceneSub = ['_02','_03','_04','_05','_06','_07'];
const tableArtstation = 'https://www.artstation.com/artwork/Q2roZ'

const chandelierPath = 'assets/images/projects/chandelier_scene_thumbnails/';
const chandelierName =  'chandelier_scene_thumbnails'
const chandelierExtension = '.jpg'
const chandelierSceneMain = '_01';
const chandelierSceneSub = ['_02','_03','_04','_05','_06','_07'];
const chandelierArtstation = 'https://www.artstation.com/artwork/Q2roZ'

const sunrisePath = 'assets/images/projects/sunrise_scene_thumbnails/';
const sunriseName =  'sunrise_scene_thumbnails'
const sunriseExtension = '.jpg'
const sunriseSceneMain = '_02';
const sunriseSceneSub = ['_01','_03','_04','_05'];
const sunriseArstation = 'https://www.artstation.com/artwork/lVYmZO'

const womanPath = 'assets/images/projects/woman_scene_thumbnails/';
const womanName =  'woman_scene_thumbnails'
const womanExtension = '.jpg'
const womanSceneMain = '_03';
const womanSceneSub = ['_01','_02','_04','_05','_06','_07','_08'];
const womanaScceneArstation = 'https://www.artstation.com/artwork/xzJvV1'

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





const tableScene = new projectThumbnail(tablePath,tableName,tableExtension,tableSceneMain,tableSceneSub,tableArtstation);
const chandelierScene = new projectThumbnail(chandelierPath,chandelierName,chandelierExtension,chandelierSceneMain,chandelierSceneSub,chandelierArtstation);
const sunriseScene = new projectThumbnail(sunrisePath,sunriseName,sunriseExtension,sunriseSceneMain,sunriseSceneSub,sunriseArstation);
const womanScene = new projectThumbnail(womanPath,womanName,womanExtension,womanSceneMain,womanSceneSub,womanaScceneArstation);
const wishingBoxScene = new projectThumbnail(wishingBoxPath,wishingBoxName,wishingBoxExtension,wishingBoxSceneMain,wishingBoxSceneSub);
const giantScene = new projectThumbnail(giantPath,giantBoxName,giantExtension,giantSceneMain,giantSceneSub);


const workThumbnails = [tableScene,chandelierScene,sunriseScene,womanScene,wishingBoxScene,giantScene];






const painting01Path = 'assets/images/paintings/painting01/';
const painting01Name =  'painting01'
const painting01Extension = '.jpg'
const painting01SceneMain = '_01';
const painting01SceneSub = [];
const painting01Artstation = 'https://www.artstation.com/artwork/KD3eR';

const painting02Path = 'assets/images/paintings/painting02/';
const painting02Name =  'painting02'
const painting02Extension = '.jpg'
const painting02SceneMain = '_01';
const painting02SceneSub = ['_02','_03','_04','_05'];
const painting02Artstation = 'https://www.artstation.com/artwork/Km68B';

const painting03Path = 'assets/images/paintings/painting03/';
const painting03Name =  'painting03'
const painting03Extension = '.jpg'
const painting03SceneMain = '_01';
const painting03SceneSub = ['_02','_03','_04','_05'];

const painting04Path = 'assets/images/paintings/painting04/';
const painting04Name =  'painting04'
const painting04Extension = '.jpg'
const painting04SceneMain = '_01';
const painting04SceneSub = ['_02','_03','_04','_05'];

const painting05Path = 'assets/images/paintings/painting05/';
const painting05Name =  'painting05'
const painting05Extension = '.jpg'
const painting05SceneMain = '_01';
const painting05SceneSub = ['_02'];

const painting06Path = 'assets/images/paintings/painting06/';
const painting06Name =  'painting06'
const painting06Extension = '.jpg'
const painting06SceneMain = '_01';
const painting06SceneSub = ['_02','_03','_04','_05'];




const painting01 = new projectThumbnail(painting01Path,painting01Name,painting01Extension,painting01SceneMain,painting01SceneSub,painting01Artstation);
const painting02 = new projectThumbnail(painting02Path,painting02Name,painting02Extension,painting02SceneMain,painting02SceneSub,painting02Artstation);
const painting03 = new projectThumbnail(painting03Path,painting03Name,painting03Extension,painting03SceneMain,painting03SceneSub);
const painting04 = new projectThumbnail(painting04Path,painting04Name,painting04Extension,painting04SceneMain,painting04SceneSub);
const painting05 = new projectThumbnail(painting05Path,painting05Name,painting05Extension,painting05SceneMain,painting05SceneSub);
const painting06 = new projectThumbnail(painting06Path,painting06Name,painting06Extension,painting06SceneMain,painting06SceneSub);


const paintThumbnails = [painting01,painting02,painting03,painting04,painting05,painting06];






function projectThumbnail(path, projectName, extension ,main, sub, artstation = null){
    this.path = path;
    this.projectName = projectName;
    this.extension = extension;
    this.main = main;
    this.sub = sub;
    this.artstation = artstation;
}
projectThumbnail.prototype.createProjectImage = function(){
    let div = document.createElement('div');

    let img = document.createElement('img');
    img.src = this.path + this.projectName + this.main + this.extension;
    img.addEventListener('click',(e)=>{ e.stopPropagation() });

    div.classList.add('projects');
    img.classList.add('mainContent');



    if(this.artstation !=null){
        
        let a = document.createElement('a');
        a.href= this.artstation;
        a.setAttribute('target','_blank');

        a.classList.add('a');
        a.classList.add('mainContent');

        a.appendChild(img);
        div.appendChild(a);

    }else{
        div.appendChild(img);
    }

    this.sub.forEach(sub => {
        let img = document.createElement('img');
        img.src = this.path + this.projectName + sub + this.extension;
        img.addEventListener('click',(e)=>{ e.stopPropagation() });

        img.classList.add('subContent');

        if(this.artstation !=null){

            let a = document.createElement('a');
            a.href= this.artstation;
            a.setAttribute('target','_blank');
            
            a.classList.add('a');

            a.appendChild(img)
            div.appendChild(a);
    
        }else{
            div.appendChild(img);
        }
    });
    return div;
};
projectThumbnail.prototype.createLineingImage = function(){
    let imgs = [];

    let img = document.createElement('img');
    img.src = this.path + this.projectName + this.main + this.extension;
    img.classList.add('mainContent');
    img.addEventListener('click',(e)=>{ e.stopPropagation() });

    if(this.artstation !=null){

        let a = document.createElement('a');
        a.href= this.artstation;
        a.setAttribute('target','_blank');
        
        a.classList.add('a');
        a.classList.add('mainContent');

        a.appendChild(img);
        imgs.push(a);

    }else{
        imgs.push(img);
    };

    this.sub.forEach(sub=>{
        let img = document.createElement('img');
        img.src = this.path + this.projectName + sub + this.extension;
        img.classList.add('subContent');
        img.addEventListener('click',(e)=>{ e.stopPropagation() });

        if(this.artstation !=null){

            let a = document.createElement('a');
            a.href= this.artstation;
            a.setAttribute('target','_blank');
            
            a.classList.add('a');
    
            a.appendChild(img);
            imgs.push(a);
    
        }else{
            imgs.push(img);
        };

    });
    return imgs
}









createProjectGroup('work');
createProjectGroup('paint');

window.addEventListener('resize',()=>{
    if(biggerElem === WORK || biggerElem === PAINT){
        workSwitchProjectLine();
    }
})







///untill

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

        // console.log(div)
        div.forEach((img)=>{
            lineImgs.appendChild(img)
        })
    })
}






function workSwitchProjectLine(){
    if(biggerElem === WORK || biggerElem === PAINT )
        if(innerWidth < 1400){
            document.querySelector(`#${biggerElem.id} .contents .groupProjects`).style.display = 'initial';
            document.querySelector(`#${biggerElem.id} .contents .groupIneImags`).style.display = 'none';
        }else{
            document.querySelector(`#${biggerElem.id} .contents .groupProjects`).style.display = 'none';
            document.querySelector(`#${biggerElem.id} .contents .groupIneImags`).style.display = 'initial';
        }
}





function callThumbnailIf (elem){
    if(elem === WORK || elem === PAINT){
        setTimeout(() => {
            if(innerWidth < 1400){
                document.querySelector(`#${elem.id} .contents .groupProjects`).style.display = 'initial';
            }else{
                document.querySelector(`#${elem.id} .contents .groupIneImags`).style.display = 'initial';
            }
        }, transitionValue.duration * 1000);
    }
        
    
}
function callThumbnailElseIf (elem){

    if(elem === WORK || elem === PAINT){

        biggredElemWorkPaint()
        
        setTimeout(() => {
            if(innerWidth < 1400){
                document.querySelector(`#${elem.id} .contents .groupProjects`).style.display = 'initial';
            }else{
                document.querySelector(`#${elem.id} .contents .groupIneImags`).style.display = 'initial';
            }
        }, transitionValue.duration * 1000);
        
    }else{
        biggredElemWorkPaint();
    }
    



    
    function biggredElemWorkPaint(){
        if(biggeredElem === WORK || biggeredElem === PAINT){
            if(innerWidth < 1400){
                document.querySelector(`#${biggeredElem.id} .contents .groupProjects`).style.display = 'none';
            }else{
                document.querySelector(`#${biggeredElem.id} .contents .groupIneImags`).style.display = 'none';
            }
        }
    }   
}

function callThumbnailElse (elem){
    if(elem === WORK || elem === PAINT){
        if(innerWidth<  1400){
            document.querySelector(`#${elem.id} .contents .groupProjects`).style.display = 'none';
        }else{
            document.querySelector(`#${elem.id} .contents .groupIneImags`).style.display = 'none';
        }
    }


}

