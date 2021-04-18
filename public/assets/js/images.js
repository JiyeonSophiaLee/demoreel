
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

const paint01 = new SetProperty("/assets/images/paintings/painting01/painting01_" , ["01.jpg"]                                     , 0 , {width:1024, height:893}  , "First painting on computer"          , 'https://www.artstation.com/artwork/KD3eR');
const paint02 = new SetProperty("/assets/images/paintings/painting02/painting02_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {width:2048, height:2048} , "Oil painting texture"                , 'https://www.artstation.com/artwork/Km68B');
const paint03 = new SetProperty("/assets/images/paintings/painting03/painting03_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {width:1024, height:1024} , "Cup cake painting"                   );
const paint04 = new SetProperty("/assets/images/paintings/painting04/painting04_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {width:1300, height:2048} , "Dark theme painting"                 );
const paint05 = new SetProperty("/assets/images/paintings/painting05/painting05_" , ["01.jpg","02.jpg"]                            , 0 , {width:1920, height:2500} , "Black and white panting"             );
const paint06 = new SetProperty("/assets/images/paintings/painting06/painting06_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {width:4448, height:6496} , "Combination of paintings like a map" );

export const paintImages = [paint01, paint02, paint03, paint04, paint05, paint06]



