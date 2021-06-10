
//------------SetProperty------------//


function SetProperty(src,fileName,files,main,size,alt,skills,artstation=null){
  this.src = src;
  this.fileName = fileName;
  this.files = files;
  this.main = main;
  this.size = size;
  this.alt = alt;
  this.skills = skills;
  this.artstation = artstation;
}
//------------videos------------//

const astronautSrc = <iframe width="560" height="315" src="https://www.youtube.com/embed/NH--5uqu4Zg"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

//------------work thumbnails------------//

const safer            = new SetProperty("/assets/images/projects/safer/"           , "safer_"           , ["01.jpg","02.jpg"]                                                       , 0 , {width:1920, height:1080}, "Freelance work for 3D safe"                                           , ['Maya','Arnold','Zbrush','Nuke'] );
const astronautRigging = new SetProperty(astronautSrc                               , null               ,  null                                                                     , 0 , null                     , null                                                                   , ['Maya','Blender','GLTF','ThreeJS','Javascript']);
const table            = new SetProperty("/assets/images/projects/table_scene/"     , "table_scene_"     , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg"]          , 0 , {width:1920, height:1080}, "3D rendering of still lifes for personal project"                     , ['Maya','Arnold','Zbrush','Houdini','Substance Painder','Marvelous Designer','Substance Designer','Mudbox','Photoshop','3D Coat','Rezom UV','After Effects','Nuke'], 'https://www.artstation.com/artwork/Q2roZ');
const chandelier       = new SetProperty("/assets/images/projects/chandelier_scene/", "chandelier_scene_", ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg"]          , 0 , {width:1920, height:1080}, "3D rendering of chandelier for personal project"                      , ['Maya','Vray','Arnold','Zbrush','Substance Painder','Photoshop','3D Coat','Rezom UV','After Effects','Nuke']                                                    , 'https://www.artstation.com/artwork/Q2roZ');
const sunrise          = new SetProperty("/assets/images/projects/sunrise_scene/"   , "sunrise_scene_"   , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]                            , 1 , {width:1920, height:1080}, "3D rendering of carpet with the sun from window for personal project" , ['Maya','Arnold','Zbrush','Substance Painder','Photoshop','3D Coat','Rezom UV','After Effects','Nuke']                                                           , 'https://www.artstation.com/artwork/lVYmZO');
const woman            = new SetProperty("/assets/images/projects/woman_scene/"     , "woman_scene_"     , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg"] , 2 , {width:1920, height:1080}, "3D rendering of a woman for personal project"                         , ['Maya','Arnold','Zbrush','Houdini','Substance Painder','Mary','Marvelous Designer','Photoshop','3D Coat','Rezom UV','After Effects','Nuke']                      , 'https://www.artstation.com/artwork/xzJvV1');
const wishingBox       = new SetProperty("/assets/images/projects/wishingBox/"      , "wishingBox_"      , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"]                   , 2 , {width:1920, height:1080}, "3D animation called WishtingBox"                                      , ['Maya','Vray','Zbrush','Houdini','Substance Painder','Photoshop','3D Coat','Nuke']);
const giant            = new SetProperty("/assets/images/projects/giant/"           , "giant_"           , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg"]          , 0 , {width:1920, height:1080}, "3D animation for Giant team"                                          , ['Maya','Vray','Zbrush','Houdini','Substance Painder','Photoshop','3D Coat','Nuke']);

export const workImages = [safer, astronautRigging, table, chandelier, sunrise, woman, wishingBox, giant];

//------------paint thumbnails------------//

const paint01 = new SetProperty("/assets/images/paintings/painting01/", "painting01_" , ["01.jpg"]                                     , 0 , {width:1024, height:893}  , "First painting on computer"          ,["Corel Painter"], 'https://www.artstation.com/artwork/KD3eR');
const paint02 = new SetProperty("/assets/images/paintings/painting02/", "painting02_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {width:2048, height:2048} , "Oil painting texture"                ,["Corel Painter"], 'https://www.artstation.com/artwork/Km68B');
const paint03 = new SetProperty("/assets/images/paintings/painting03/", "painting03_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {width:1024, height:1024} , "Cup cake painting"                   ,["Corel Painter"] );
const paint04 = new SetProperty("/assets/images/paintings/painting04/", "painting04_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {width:1300, height:2048} , "Dark theme painting"                 ,["Corel Painter"] );
const paint05 = new SetProperty("/assets/images/paintings/painting05/", "painting05_" , ["01.jpg","02.jpg"]                            , 0 , {width:1920, height:2500} , "Black and white panting"             ,["Corel Painter"] );
const paint06 = new SetProperty("/assets/images/paintings/painting06/", "painting06_" , ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] , 0 , {width:4448, height:6496} , "Combination of paintings like a map" ,["Corel Painter"] );

export const paintImages = [paint01, paint02, paint03, paint04, paint05, paint06]



