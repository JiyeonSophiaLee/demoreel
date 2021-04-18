// console.log('thumbnail.js is working');
// import * as ISU from '/assets/js/InitialSetUp.js';
// import * as THI from './thumbnail_LoadingImages.js';

"3D animation called WishtingBox"



//------------SetProperty------------//


function SetProperty(src,fileNames,main,size,alt,artstation=null){
  this.src = src;
  this.fileNames = fileNames;
  this.main = main;
  this.size = size;
  this.alt = alt;
  this.artstation = artstation;
}
//------------videos------------//

const astronautSrc = <iframe width="560" height="315" src="https://www.youtube.com/embed/NH--5uqu4Zg"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

//------------work thumbnails------------//

const astronautRigging = new SetProperty(astronautSrc                                                ,  null                                                                     , 0 , null                     , null                                              );
const table            = new SetProperty("/assets/images/projects/table_scene/table_scene_"          , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg"]          , 0 , {width:1920, height:1080}, "3D rendering of still lifes"                     , 'https://www.artstation.com/artwork/Q2roZ');
const chandelier       = new SetProperty("/assets/images/projects/chandelier_scene/chandelier_scene_", ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg"]          , 0 , {width:1920, height:1080}, "3D rendering of chandelier"                      , 'https://www.artstation.com/artwork/Q2roZ');
const sunrise          = new SetProperty("/assets/images/projects/sunrise_scene/sunrise_scene_"      , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]                            , 1 , {width:1920, height:1080}, "3D rendering of carpet with the sun from window" , 'https://www.artstation.com/artwork/lVYmZO');
const woman            = new SetProperty("/assets/images/projects/woman_scene/woman_scene_"          , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg"] , 2 , {width:1920, height:1080}, "3D rendering of a woman"                         , 'https://www.artstation.com/artwork/xzJvV1');
const wishingBox       = new SetProperty("/assets/images/projects/wishingBox/wishingBox_"            , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"]                   , 2 , {width:1920, height:1080}, "3D animation called WishtingBox");
const giant            = new SetProperty("/assets/images/projects/giant/giant_"                      , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg"]          , 0 , {width:1920, height:1080}, "3D animation for Giant team");

export const workImages = [astronautRigging, table, chandelier, sunrise, woman, wishingBox, giant];

//------------paint thumbnails------------//

const paint01 = new SetProperty("/assets/images/paintings/painting01/painting01_" , ["01.jpg"]                                     , 0 , {widith:1024, height:893}  , "First painting on computer"          , 'https://www.artstation.com/artwork/KD3eR');
const paint02 = new SetProperty("/assets/images/paintings/painting02/painting02_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {widith:2048, height:2048} , "Oil painting texture"                , 'https://www.artstation.com/artwork/Km68B');
const paint03 = new SetProperty("/assets/images/paintings/painting03/painting03_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {widith:1024, height:1024} , "Cup cake painting"                   );
const paint04 = new SetProperty("/assets/images/paintings/painting04/painting04_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {widith:1300, height:2048} , "Dark theme painting"                 );
const paint05 = new SetProperty("/assets/images/paintings/painting05/painting05_" , ["01.jpg","02.jpg"]                            , 0 , {widith:1920, height:2500} , "Black and white panting"             );
const paint06 = new SetProperty("/assets/images/paintings/painting06/painting06_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {widith:4448, height:6496} , "Combination of paintings like a map" );

export const paintThumbnails = [paint01, paint02, paint03, paint04, paint05, paint06]





// //------------Thumbnails constructor------------//

// export default function Thumbnails(id,projects){
//   this.id = id;
//   this.projects = projects;

//   this.createThumbnails();
// }


// // -------------------- expand Menu  --------------------//

// Thumbnails.prototype.callThumbnail = function(){
//   // if(innerWidth < 1400){
//   //   ISU.select(`#${this.id} .contents .groupedImages`).style.display = 'initial';
//   // }else{
//     ISU.select(`#${this.id} .contents .alinedImages`).style.display = 'initial';
//   // }
// }
// Thumbnails.prototype.stopThumbnail = function(){

//     ISU.select(`#${this.id} .contents .alinedImages`).style.display = 'none';

//   //if(innerWidth < 1400){
//   //    document.querySelector(`#${biggeredElem.id} .contents .groupedImages`).style.display = 'none';
//   //}else{
//   //}
// }


// // -------------------- create Thumbnail  --------------------//

// Thumbnails.prototype.createThumbnails = function(){
//   let content = document.querySelector(`#${this.id} .contents`);
//   let groupedImages = document.createElement('div');
//   let alinedImages = document.createElement('div');
//   let alinedImagesChild = document.createElement('div');

//   groupedImages.classList.add('groupedImages');
//   alinedImages.classList.add('alinedImages');
//   alinedImagesChild.classList.add('alinedImagesChild');
  
//   groupedImages.style.display = 'none';
//   alinedImages.style.display = 'none'
  
//   alinedImages.appendChild(alinedImagesChild);
//   content.appendChild(alinedImages);
//   content.appendChild(groupedImages);


//   // this.projects.forEach((project)=>{
//   //   let groupedImgs = this.createGroupedImages(project);
//   //   groupedImages.appendChild(groupedImgs);
//   // })
//   // console.log('this.id: ', this.id)
//   // console.log('this.projects: ',this.projects)



//   this.projects.forEach(project=>{
//     let alinedImgs = this.createAlinedImages(project);

//     alinedImgs.forEach((img)=>{
//       alinedImagesChild.appendChild(img)
//     })
//   })
// }
// // Thumbnails.prototype.createGroupedImages = function(project){
// //     let div = document.createElement('div');
// //     let img = document.createElement('img');

// //     img.src = project.path + project.name + project.main + project.extension;
// //     img.addEventListener('click',(e)=>{ e.stopPropagation() });

// //     div.classList.add('projects');
// //     img.classList.add('mainContent');


// //     if(project.artstation !=null){
// //         let a = document.createElement('a');
// //         a.href= project.artstation;
// //         a.setAttribute('target','_blank');

// //         a.classList.add('a');
// //         a.classList.add('mainContent');

// //         a.appendChild(img);
// //         div.appendChild(a);

// //     }else{
// //         div.appendChild(img);
// //     }

// //     project.sub.forEach(sub => {
// //         let img = document.createElement('img');
// //         img.src = project.path + project.name + sub + project.extension;
// //         img.addEventListener('click',(e)=>{ e.stopPropagation() });

// //         img.classList.add('subContent');

// //         if(this.artstation !=null){

// //             let a = document.createElement('a');
// //             a.href= project.artstation;
// //             a.setAttribute('target','_blank');
            
// //             a.classList.add('a');

// //             a.appendChild(img)
// //             div.appendChild(a);
    
// //         }else{
// //             div.appendChild(img);
// //         }
// //     });
    
// //     return div;
// // };
// Thumbnails.prototype.createAlinedImages = function(project){
//   let files = [];
//   let file;

//   if (project.array[project.main].slice(1,7) == 'iframe'){
//     file = document.createElement('div');
//     file.innerHTML = project.array[project.main];
//   }else{
//     file = document.createElement('img');
//     file.src = project.array[project.main]; 
//   }
//     file.addEventListener('click',(e)=>{ e.stopPropagation() });


//   if(project.artstation !=null){
//     let a = document.createElement('a');
//     a.href= project.artstation;
//     a.setAttribute('target','_blank');
    
 
//     a.classList.add('mainContent');
//     a.classList.add('content');

//     a.appendChild(file);
//     files.push(a);
  
//   }else{
//     // let div = document.createElement('div');

//     file.classList.add('mainContent');
//     file.classList.add('content');
    
//     // div.appendChild(file)
//     // files.push(div);
//     files.push(file);
//   };



//   project.array.forEach((array, i)=>{
//     if( i != project.main){
//       let file;

//         if(project.array[project.main].slice(1,7) == 'iframe'){
//           file = document.createElement('div');
//           file.innerHTML = array;
//         }else{
//           file = document.createElement('img');
//           file.src = project.array[i];
//         }
//         file.addEventListener('click',(e)=>{ e.stopPropagation() });

        
//         if(project.artstation !=null){
//           let a = document.createElement('a');
//           a.href= project.artstation;
//           a.setAttribute('target','_blank');
          
//           a.classList.add('subContent');
//           a.classList.add('content');

//           a.appendChild(file);
//           files.push(a);

//         }else{
//           // let div = document.createElement('div');

//           file.classList.add('subContent');
//           file.classList.add('content');
//           // div.appendChild(file)
//           // files.push(div);
//           files.push(file);
//         };
      
       
//     }
//   });

  
//   return files
// };





// Thumbnails.prototype.updateResize = function(){
//   // if(biggerElem === this.elem){
//   //   // if(innerWidth < 1400){
//   //   //   document.querySelector(`#${biggerElem.id} .contents .groupedImages`).style.display = 'initial';
//   //   //   document.querySelector(`#${biggerElem.id} .contents .alinedImages`).style.display = 'none';
//   //   // }else{
//   //   //   document.querySelector(`#${biggerElem.id} .contents .groupedImages`).style.display = 'none';
//   //   //   document.querySelector(`#${biggerElem.id} .contents .alinedImages`).style.display = 'initial';
//   //   // }
//   // }
// }

