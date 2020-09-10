const workContent = document.querySelector('#work .contents');

const tablePath = '/assets/images/projects/table_scene_thumbnails/';
const tableName =  'table_scene_thumbnail_'
const tableExtension = '.jpg'
const tableSceneMain = '01';
const tableSceneSub = ['02','03','04','05','06'];




function projectThumbnail(path, projectName, extension ,main, sub){
    this.path = path;
    this.projectName = projectName;
    this.extension = extension;
    this.main = main;
    this.sub = sub;
}
projectThumbnail.prototype.createImage = function(){
    let div = document.createElement('div');
    // div.style.display = 'none';


    let img = document.createElement('img');
    img.src = this.path + this.projectName + this.main + this.extension;
    

    div.classList.add('projects');
    img.classList.add('mainContent');

    workContent.appendChild(div);
    div.appendChild(img);


    
    this.sub.forEach(sub => {
        let img = document.createElement('img');
        img.src = this.path + this.projectName + sub + this.extension;

        img.classList.add('subContent');
        div.appendChild(img);
    });


}


const tableScene = new projectThumbnail(tablePath,tableName,tableExtension,tableSceneMain, tableSceneSub);

const workThumbnails = [tableScene];




// function createProject(name,thumbnailArray){
//     let div = document.createElement('div');
//     div.classList.add('projects');
//     div.style.visibility = 'hidden'

//     eval(name +'Content').appendChild(div);
//     // workContent.appendChild(div);
//     // div.appendChild(img);

//     thumbnailArray.forEach(()=>{
//         let imgs = thumbnailArray.createImage();
        
//         imgs.forEach((img)=>{
//             div.appendChild(img);
//         })
//     })
// }


// createProject('work',workThumbnails);



workThumbnails.forEach((projects)=>{
    projects.createImage()
});




function callThumbnailIf (elem){

    
        // setTimeout(() => {
        //     document.querySelector(`#${elem.id} .contents .projects`).style.display = 'initial';
        // }, transitionValue.duration * 1000);
        
    
}
function callThumbnailElseIf (elem){

    // document.querySelector(`#${biggeredElem.id} .contents .projects`).style.display = 'none';
  
        // setTimeout(() => {
        //     document.querySelector(`#${elem.id} .contents .projects`).style.display = 'initial';
        // }, transitionValue.duration * 1000);
        
    
}


function callThumbnailElse (elem){

    document.querySelector(`#${elem.id} .contents .projects`).style.display = 'none';
  
        // setTimeout(() => {
        //     document.querySelector(`#${biggerElem.id} .contents .projects`).style.display = 'initial';
        // }, transitionValue.duration * 1000);
        
    
}



