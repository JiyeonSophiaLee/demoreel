import * as ISU from '/assets/js/InitialSetUp.js';

function SetProperty(path,name,extension,main,sub,artstation=null){
  this.path = path;
  this.name = name;
  this.extension = extension;
  this.main = main;
  this.sub = sub;
  this.artstation = artstation;
}

//------------work thumbnails------------//

const table      = new SetProperty('assets/images/projects/table_scene_thumbnails/'     , 'table_scene_thumbnails'     , '.jpg' , '_01', ['_02','_03','_04','_05','_06','_07'],       'https://www.artstation.com/artwork/Q2roZ');
const chandelier = new SetProperty('assets/images/projects/chandelier_scene_thumbnails/', 'chandelier_scene_thumbnails', '.jpg' , '_01', ['_02','_03','_04','_05','_06','_07'],       'https://www.artstation.com/artwork/Q2roZ');
const sunrise    = new SetProperty('assets/images/projects/sunrise_scene_thumbnails/'   , 'sunrise_scene_thumbnails'   , '.jpg' , '_02', ['_01','_03','_04','_05'],                   'https://www.artstation.com/artwork/lVYmZO');
const woman      = new SetProperty('assets/images/projects/woman_scene_thumbnails/'     , 'woman_scene_thumbnails'     , '.jpg' , '_03', ['_01','_02','_04','_05','_06','_07','_08'], 'https://www.artstation.com/artwork/xzJvV1');
const wishingBox = new SetProperty('assets/images/projects/wishingBox_thumbnails/'      , 'wishingBox_thumbnails'      , '.jpg' , '_03', ['_01','_02','_04','_05','_06']);
const giant      = new SetProperty('assets/images/projects/giant_thumbnails/'           , 'giant_thumbnails'           , '.jpg' , '_01', ['_02','_03','_04','_05','_06','_07']);

export const workThumbnails = [table, chandelier, sunrise, woman, wishingBox, giant];

//------------paint thumbnails------------//

const paint01 = new SetProperty('assets/images/paintings/painting01/', 'painting01', '.jpg', '_01', []                       , 'https://www.artstation.com/artwork/KD3eR');
const paint02 = new SetProperty('assets/images/paintings/painting02/', 'painting02', '.jpg', '_01', ['_02','_03','_04','_05'], 'https://www.artstation.com/artwork/Km68B');
const paint03 = new SetProperty('assets/images/paintings/painting03/', 'painting03', '.jpg', '_01', ['_02','_03','_04','_05']);
const paint04 = new SetProperty('assets/images/paintings/painting04/', 'painting04', '.jpg', '_01', ['_02','_03','_04','_05']);
const paint05 = new SetProperty('assets/images/paintings/painting05/', 'painting05', '.jpg', '_01', ['_02']);
const paint06 = new SetProperty('assets/images/paintings/painting06/', 'painting06', '.jpg', '_01', ['_02','_03','_04','_05']);

export const paintThumbnails = [paint01, paint02, paint03, paint04, paint05, paint06]





//------------Thumbnails constructor------------//

export default function Thumbnails(id,projects){
  this.id = id;
  this.projects = projects;
  // // this.path = projects.reduce((prev,cur)=>{ prev.push(cur.path); return prev},[]);
  // // this.name = projects.reduce((prev,cur)=>{ prev.push(cur.name); return prev},[]);
  // // this.extension = projects.reduce((prev,cur)=>{ prev.push(cur.extension); return prev},[]);
  // // this.main = projects.reduce((prev,cur)=>{ prev.push(cur.main); return prev},[]);
  // // this.sub = projects.reduce((prev,cur)=>{ prev.push(cur.sub); return prev},[]);
  // // this.artstation = projects.reduce((prev,cur)=>{ prev.push(cur.artstation); return prev},[]);

  this.createThumbnails();
}


// -------------------- expand Menu  --------------------//

Thumbnails.prototype.callThumbnail = function(){
  // if(innerWidth < 1400){
  //   ISU.select(`#${this.id} .contents .groupedImages`).style.display = 'initial';
  // }else{
    ISU.select(`#${this.id} .contents .alinedImages`).style.display = 'initial';
  // }
}
Thumbnails.prototype.stopThumbnail = function(){

    ISU.select(`#${this.id} .contents .alinedImages`).style.display = 'none';

  //if(innerWidth < 1400){
  //    document.querySelector(`#${biggeredElem.id} .contents .groupedImages`).style.display = 'none';
  //}else{
  //}
}


// -------------------- create Thumbnail  --------------------//

Thumbnails.prototype.createThumbnails = function(){
  let content = document.querySelector(`#${this.id} .contents`);
  let groupedImages = document.createElement('div');
  let alinedImages = document.createElement('div');
  let alinedImagesChild = document.createElement('div');

  groupedImages.classList.add('groupedImages');
  alinedImages.classList.add('alinedImages');
  alinedImagesChild.classList.add('alinedImagesChild');
  
  groupedImages.style.display = 'none';
  alinedImages.style.display = 'none'
  
  alinedImages.appendChild(alinedImagesChild);
  content.appendChild(alinedImages);
  content.appendChild(groupedImages);


  // this.projects.forEach((project)=>{
  //   let groupedImgs = this.createGroupedImages(project);
  //   groupedImages.appendChild(groupedImgs);
  // })
  // console.log('this.id: ', this.id)
  // console.log('this.projects: ',this.projects)
  this.projects.forEach(project=>{
    let alinedImgs = this.createAlinedImages(project);

    alinedImgs.forEach((img)=>{
      alinedImagesChild.appendChild(img)
    })
  })
}
Thumbnails.prototype.createGroupedImages = function(project){
    let div = document.createElement('div');
    let img = document.createElement('img');

    img.src = project.path + project.name + project.main + project.extension;
    img.addEventListener('click',(e)=>{ e.stopPropagation() });

    div.classList.add('projects');
    img.classList.add('mainContent');


    if(project.artstation !=null){
        let a = document.createElement('a');
        a.href= project.artstation;
        a.setAttribute('target','_blank');

        a.classList.add('a');
        a.classList.add('mainContent');

        a.appendChild(img);
        div.appendChild(a);

    }else{
        div.appendChild(img);
    }

    project.sub.forEach(sub => {
        let img = document.createElement('img');
        img.src = project.path + project.name + sub + project.extension;
        img.addEventListener('click',(e)=>{ e.stopPropagation() });

        img.classList.add('subContent');

        if(this.artstation !=null){

            let a = document.createElement('a');
            a.href= project.artstation;
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
Thumbnails.prototype.createAlinedImages = function(project){
  let imgs = [];

  let img = document.createElement('img');
  img.src = project.path + project.name + project.main + project.extension;
  img.classList.add('mainContent');
  img.addEventListener('click',(e)=>{ e.stopPropagation() });

  if(project.artstation !=null){
    let a = document.createElement('a');
    a.href= project.artstation;
    a.setAttribute('target','_blank');
    
    a.classList.add('a');
    a.classList.add('mainContent');

    a.appendChild(img);
    imgs.push(a);

  }else{
    imgs.push(img);
  };

  project.sub.forEach(sub=>{
    let img = document.createElement('img');
    img.src = project.path + project.name + sub + project.extension;
    img.classList.add('subContent');
    img.addEventListener('click',(e)=>{ e.stopPropagation() });

    if(project.artstation !=null){

        let a = document.createElement('a');
        a.href= project.artstation;
        a.setAttribute('target','_blank');
        
        a.classList.add('a');

        a.appendChild(img);
        imgs.push(a);

    }else{
        imgs.push(img);
    };

  });
  return imgs
};






export const ThumbnailReszie = function(biggerElem){
  if(biggerElem === ISU.WORK || biggerElem === ISU.PAINT){
    if(innerWidth < 1400){
      document.querySelector(`#${biggerElem.id} .contents .groupedImages`).style.display = 'initial';
      document.querySelector(`#${biggerElem.id} .contents .alinedImages`).style.display = 'none';
    }else{
      document.querySelector(`#${biggerElem.id} .contents .groupedImages`).style.display = 'none';
      document.querySelector(`#${biggerElem.id} .contents .alinedImages`).style.display = 'initial';
    }
  }
}

























