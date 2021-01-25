import * as ISU from '/assets/js/InitialSetUp.js';
import * as THI from '/assets/js/thumbnail_Images.js';



function SetProperty(array,main,artstation=null){
  this.array = array;
  this.main = main;
  this.artstation = artstation;
}

//------------work thumbnails------------//

const table      = new SetProperty(THI.table_scene      , 0 , 'https://www.artstation.com/artwork/Q2roZ');
const chandelier = new SetProperty(THI.chandelier_scene , 0 , 'https://www.artstation.com/artwork/Q2roZ');
const sunrise    = new SetProperty(THI.sunrise_scene    , 1 , 'https://www.artstation.com/artwork/lVYmZO');
const woman      = new SetProperty(THI.woman_scene      , 2 , 'https://www.artstation.com/artwork/xzJvV1');
const wishingBox = new SetProperty(THI.wishingBox       , 2 );
const giant      = new SetProperty(THI.giant            , 0 );

export const workThumbnails = [table, chandelier, sunrise, woman, wishingBox, giant];

//------------paint thumbnails------------//

const paint01 = new SetProperty(THI.painting01 , 0 , 'https://www.artstation.com/artwork/KD3eR');
const paint02 = new SetProperty(THI.painting02 , 0 , 'https://www.artstation.com/artwork/Km68B');
const paint03 = new SetProperty(THI.painting03 , 0 );
const paint04 = new SetProperty(THI.painting04 , 0 );
const paint05 = new SetProperty(THI.painting05 , 0 );
const paint06 = new SetProperty(THI.painting06 , 0 );

export const paintThumbnails = [paint01, paint02, paint03, paint04, paint05, paint06]





//------------Thumbnails constructor------------//

export default function Thumbnails(id,projects){
  this.id = id;
  this.projects = projects;

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
  img.src = project.array[project.main]; 
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


  project.array.forEach((array, i)=>{
    if( i != project.main){
      let img = document.createElement('img');
      img.src = project.array[i];
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
    }
  });
  return imgs
};





Thumbnails.prototype.updateResize = function(){
  // if(biggerElem === this.elem){
  //   // if(innerWidth < 1400){
  //   //   document.querySelector(`#${biggerElem.id} .contents .groupedImages`).style.display = 'initial';
  //   //   document.querySelector(`#${biggerElem.id} .contents .alinedImages`).style.display = 'none';
  //   // }else{
  //   //   document.querySelector(`#${biggerElem.id} .contents .groupedImages`).style.display = 'none';
  //   //   document.querySelector(`#${biggerElem.id} .contents .alinedImages`).style.display = 'initial';
  //   // }
  // }
}

