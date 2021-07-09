import TV from './transitionValue.js'
import * as THREE from '../gltf/scripts/three.module.js';
import {GLTFLoader} from '../gltf/scripts/GLTFLoader.js';
import { createElement } from 'react';
import { XRRay } from 'three';
// import {GUI} from '../gltf/scripts/dat.gui.module.js';


// const threeJSCanvas = document.getElementById('threeJSCanvas');
// const threejsBlocker = document.getElementById('threejsBlocker');
  // console.log(GUI)
const prefix = process.env.NEXT_PUBLIC_PREFIX || "..";
// const gui = new GUI();

const textureLoader = new THREE.TextureLoader();
let gltfOn = true;

const vec = new THREE.Vector3();
const matchingActions = {work:'waveAction', skill:'walkAction', paint:'jumpAction', info: 'fallAction'};
const cameraAnim = {
  work: {
    position: {px: 5.07, py: 0, pz:2.958}, 
    rotation:{rx:0.42, ry:1.48, rz:-0.56}, 
    aspectPosition:{
      wider:{widerPx:-0.924, widerPy:0.527, widerPz:1.066}, 
      heigher:{heigherPx:-3.648, heigherPy:0, heigherPz:1.919}},
    quaternion:new THREE.Quaternion(-0.03430356804291318, 0.6763339681475928, -0.06450864208842944, 0.7329626619720564) 
  },
  skill: {
    position: {px: -1.408, py: 0.634, pz:3.451}, 
    rotation:{rx:-0.03, ry:-0.634, rz:0.016}, 
    aspectPosition:{
      wider:{widerPx:0.627, widerPy:0.14, widerPz:0 }, 
      heigher:{heigherPx:2.924, heigherPy:0, heigherPz:-4.176}},
    quaternion:new THREE.Quaternion(-0.016745064547591056, -0.31155838625785837, 0.01227589923402993, 0.9500001458229848) 
  },
  paint: {
    position: {px: 1.408 , py: 4.225, pz: 4.648}, 
    rotation:{rx:-0.563, ry:0.775, rz:0.211}, 
    aspectPosition:{
      wider:{widerPx:-1.626, widerPy:0.152, widerPz:0.903}, 
      heigher:{heigherPx:-2.805, heigherPy:0, heigherPz:0}},
    quaternion:new THREE.Quaternion(-0.21754441907307373, 0.38806776009190797, -0.010729566484482617, 0.89552371030055) 
  },
  info: {
    position: {px: -0.704, py: 4.085, pz:4.93}, 
    rotation:{rx:-0.636, ry:-0.402, rz:-0.283}, 
    aspectPosition:{
      wider:{widerPx:1.211, widerPy:0, widerPz:0.568}, 
      heigher:{heigherPx:-0.774, heigherPy:-1.859, heigherPz:0.466}},
    quaternion:new THREE.Quaternion(-0.27656611768985595, -0.2309512827764813, -0.06946063850614559, 0.9302407791685854) 
  },
}
  
let camera, renderer, scene, dirLight, pointLight, sky0, sky1, sky2, sky3, menuClicked, menuElemId;
let size = {width:0, height:0}
let skyTextures=[];
let click =false;

var model, skeleton, mixer, actions, fallAction, jumpAction, walkAction, waveAction ;

let mouseX = 0;
let mouseY = 0;
let callClientX = 0;
let callClientY = 0;
const mouseMultiplier = 0.001;
// const threeJSVignette = document.getElementById('threeJSVignette');



const cameraChangeDuration = 60;
let cameraMoveframe = 0;
var requestAniThreeJS, cameraChangeAni = null;
let cameraSet  = {position:{x:0,y:0,z:0}, rotation:{x:0,y:0,z:0}};
let slerpRotation = {};
let lerpingAni = false;
let positionXdiff, positionYdiff, positionZdiff, rotationXdiff, rotationYdiff, rotationZdiff;


var clock = new THREE.Clock();



//------------------------------------------
THREE.TextureLoader.prototype.load = function(url, onLoad, onProgress, onError)
{
    var texture = new THREE.Texture();
    var loader = new THREE.ImageLoader(this.manager);
    loader.setCrossOrigin(this.crossOrigin);
    loader.setPath(this.path);
    var image = loader.load(url, function(image)
    {
        texture.image = image;
        // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
        var isJPEG = url.search( /\.jpe?g($|\?)/i ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;
        texture.format = isJPEG ? THREE.RGBFormat : THREE.RGBAFormat;
        texture.needsUpdate = true;
        if(onLoad !== undefined)
        {
            onLoad( texture );
        }
    }, onProgress, onError);

    // add this function to the texture
    texture.abort = function()
    {
        if(image && typeof image.hasAttribute === 'function')
        {
            image.src = '';
        }
    };
    return texture;
};
//--------------------------------------------------

export default function astronaut(){
  const pixelRatio = Math.min(window.devicePixelRatio,2);
  size = {width: innerWidth * pixelRatio | 0, height:innerHeight * pixelRatio | 0}
  
  camera = new THREE.PerspectiveCamera( 75, size.width / size.height, 1,  30 );
  camera.position.set(0,0,5);
  // getCameraPosition(cameraAnim.work);
  // camera.lookAt(new THREE.Vector3(0, 1, 0));

  // window.camera = camera;
  // customGui(camera.position, 'x', '-20', '20', cameraAnim['paint'].position.px, 'camera position x: ' ,'300px')
  // customGui(camera.position, 'y', '-20', '20', cameraAnim['paint'].position.py, 'camera position y: ' ,'300px')
  // customGui(camera.position, 'z', '-20', '20', cameraAnim['paint'].position.pz, 'camera position z: ' ,'300px')
  // customGui(camera.rotation, 'x', '-20', '20', cameraAnim['paint'].rotation.rx, 'camera rotation x: ' ,'300px')
  // customGui(camera.rotation, 'y', '-20', '20', cameraAnim['paint'].rotation.ry, 'camera rotation y: ' ,'300px')
  // customGui(camera.rotation, 'z', '-20', '20', cameraAnim['paint'].rotation.rz, 'camera rotation z: ' ,'300px')
// console.log(camera.quaternion)

 

  renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference:"high-performance"});
  renderer.setSize( size.width , size.height );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.physicallyCorrectLights;
  document.getElementById('threeJSCanvas').appendChild( renderer.domElement );


    

  pointLight = new THREE.PointLight('rgb(220,51,35)', 1 ,20);
  pointLight.intensity = 1;
  pointLight.position.set(-1,3,2,4);
  dirLight = new THREE.DirectionalLight('rgb(43,174,212)', 1,20);
  dirLight.intensity = 1;
  dirLight.position.set(1.5,4,-2);
  dirLight.target.position.x = -3;
  dirLight.castShadow = true;
  dirLight.shadow.bias = -0.001;
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 40;
 


  // sky0 = getSky(16, prefix + '/assets/images/hdr/bigSize.jpg');
  // sky1 = getSky(16, prefix + '/assets/images/hdr/bigSize.jpg');
  // sky2 = getSky(16, prefix + '/assets/images/hdr/bigSize.jpg');
  // sky3 = getSky(16, prefix + '/assets/images/hdr/bigSize.jpg');
  sky0 = getSky(20, prefix + '/assets/images/hdr/space_00.jpg');
  sky1 = getSky(20, prefix + '/assets/images/hdr/space_01.jpg');
  sky2 = getSky(20, prefix + '/assets/images/hdr/space_02.jpg');
  sky3 = getSky(20, prefix + '/assets/images/hdr/space_03.jpg');
  let ground = getSphere(5);
  ground.position.y = -ground.geometry.parameters.radius;


  scene = new THREE.Scene();
  scene.add(sky0);
  scene.add(sky1);
  scene.add(sky2);
  scene.add(sky3);
  scene.add(pointLight);
  scene.add(dirLight);
  scene.add(ground);


  let loader = new GLTFLoader();
  loader.load( prefix + '/assets/gltf/astronaut_v07.gltf', function ( gltf ) {
    model = gltf.scene;
    scene.add(model);
    

    model.traverse( function ( child ) {
      if ( child.isMesh ) {
        child.castShadow = true;
        if(child.material.map) child.material.map.anisotropy = 16;
      }
    } );

    skeleton = new THREE.SkeletonHelper(model);
    skeleton.visible = false;
    scene.add(skeleton);

    mixer = new THREE.AnimationMixer( model );
    fallAction = mixer.clipAction( gltf.animations[ 0 ] ).stop();
    jumpAction = mixer.clipAction( gltf.animations[ 1 ] ).stop();
    walkAction = mixer.clipAction( gltf.animations[ 2 ] ).stop();
    waveAction = mixer.clipAction( gltf.animations[ 3 ] ).stop();
    actions = {'waveAction':waveAction, 'walkAction':walkAction, 'fallAction':fallAction, 'jumpAction':jumpAction };
    
    animate();
  });

  // window.addEventListener('mousemove',getCurrentMouse, false);
  window.addEventListener( 'resize', onWindowResize, false );

  // guiCamera();


  // const cameraFolder = gui.addFolder('camera');
  
  // cameraFolder.add(camera.position, 'x')
  //   .min(500)
  //   .max(500)
}
function customGui(object, axis, min, max, value, name,width){
  const div = document.createElement('div');
  const input = document.createElement('input');
  const p = document.createElement('p');
  const span = document.createElement('span');
  
  div.style.margin = '5px';
  div.style.color='white';

  input.type='range';
  input.min = min;
  input.max = max;
  input.value = value;
  input.step = 0.001;
  input.style.width = width;

  span.innerHTML =value;
  
  p.innerHTML = name;
  
  p.appendChild(span);
  div.appendChild(input)
  div.appendChild(p);

  if(document.getElementById('gui')){
    const gui = document.getElementById('gui')
    gui.appendChild(div)
  }else{
    const gui = document.createElement('div');
    gui.style.position = 'fixed';
    gui.style.top = '0';
    gui.style.left = '0';
    gui.id = 'gui'
    gui.style.margin = '5px';

    gui.appendChild(div)

    document.body.appendChild(gui)
  }

  input.oninput = function() {
    span.innerHTML = this.value;
    object[axis] = this.value
  }
}


function guiCamera(){
  const gui = new GUI();
  const position =  gui.addFolder('position');
  const rotation =  gui.addFolder('rotation');
  position.add(camera.position,'x', -10, 10);
  position.add(camera.position,'y', -10, 10);
  position.add(camera.position,'z', -10, 10);
  rotation.add(camera.rotation,'x', -10, 10);
  rotation.add(camera.rotation,'y', -10, 10);
  rotation.add(camera.rotation,'z', -10, 10);
}

function onWindowResize() {
  const pixelRatio = Math.min(window.devicePixelRatio,2);
  const {x,y,z} = getCameraPosition(cameraAnim[menuElemId]);

  
  size = {width: innerWidth * pixelRatio | 0, height:innerHeight * pixelRatio | 0}

  renderer.setSize(size.width, size.height);

  camera.aspect = size.width/size.height;
  camera.updateProjectionMatrix();

  cameraSet.position = {x,y,z};
  mouseX = x;
  mouseY = y;
  
}

function getCameraPosition(defaultValue){
  const {px,py,pz} = defaultValue.position;
  // const {rx,ry,rz} = defaultValue.rotation;
  const {widerPx,widerPy,widerPz} = defaultValue.aspectPosition.wider;
  const {heigherPx,heigherPy,heigherPz} = defaultValue.aspectPosition.heigher;
  const screenAspect = size.width / size.height - 1;
  let x,y,z;
  

  if( screenAspect > 0){
    x = px + ( screenAspect * widerPx);
    y = py + ( screenAspect * widerPy);
    z = pz + ( screenAspect * widerPz);

  }else{
    x + ( screenAspect * heigherPx); 
    y + ( screenAspect * heigherPy);
    z + ( screenAspect * heigherPz);
    
  }
  camera.position.set(x , y ,z);
  // camera.rotation.set(rx ,ry ,rz);

  return {x,y,z}
}



var lastMove = Date.now();

function getCurrentMouse(e){
  if(!click){
    if (Date.now() - lastMove < 30) { 
      return;
    } else {
      lastMove = Date.now();
    }

    mouseX = cameraSet.position.x + (( e.clientX - window.innerWidth / 2 ) * mouseMultiplier);
    mouseY = cameraSet.position.y + (( window.innerHeight /2 - e.clientY ) * mouseMultiplier);
    
  }
}


function animate(){
  
  requestAniThreeJS = requestAnimationFrame(animate);

  let delta = clock.getDelta();
  mixer.update( delta );

  // console.log('click',click)
  if(click){
    // console.log('cameraSet.position.x',cameraSet.position.x)
    camera.position.lerp(vec.set(cameraSet.position.x,cameraSet.position.y,cameraSet.position.z), 0.1);
    camera.quaternion.slerp( slerpRotation, 0.1 );
  }else {
    if(menuClicked){
      camera.position.lerp(vec.set( mouseX , mouseY, camera.position.z), 0.1)
    }
  }
  
  renderer.render( scene, camera);

  if(!gltfOn){
    cancelAnimationFrame(requestAniThreeJS)
  }
}

function onClick(){
  lerpingAni = requestAnimationFrame(onClick);

  if(parseFloat(cameraSet.position.x.toFixed(2)) === parseFloat(camera.position.x.toFixed(2))){
    
    mouseX = cameraSet.position.x;
    mouseY = cameraSet.position.y;
    click = false;
    cancelAnimationFrame(lerpingAni);
  }
}



//-----------------------------------//
function getSky(size,path){
  let skyGeo = new THREE.SphereGeometry(size, 100,100);
  let textureLoad = textureLoader.load(path)
  let skyMesh = new THREE.MeshBasicMaterial( {map: textureLoad, side:THREE.BackSide} );
  // let skyMesh = new THREE.MeshBasicMaterial( {map:new THREE.TextureLoader().load(path), side:THREE.BackSide} );
  skyTextures.push(textureLoad);

  let sky = new THREE.Mesh(skyGeo,skyMesh);
  sky.rotation.y = 10 ;

  return sky;
}
function getSphere(size) {
	let geometry = new THREE.SphereGeometry(size, 25,25);
	let material = new THREE.MeshPhongMaterial({
    color: 'rgb(100,100,100)',
    shininess: 10
	});
	let mesh = new THREE.Mesh(
		geometry,
		material 
    );
    
    mesh.receiveShadow = true;

	return mesh;
}


//------------ function for crossing actions ------------//

function executeCrossFade( startAction, endAction, duration ) {

    setWeight( endAction, 1 );
    endAction.time = 0;

    startAction.crossFadeTo( endAction, duration, true );
}
function setWeight( action, weight ) {

    action.enabled = true;
    action.setEffectiveTimeScale( 1 );
    action.setEffectiveWeight( weight );

}



//------------ call Astronaut ------------//




export function callAstronaut(elemId,biggeredElemId=null){
  console.log('called')
  menuElemId = elemId;

  if(biggeredElemId == null){
    // document.getElementById("threeJSCover").style.display = 'none';
    dirLight.intensity = 1;
    pointLight.intensity = 1;
  }else{
    executeCrossFade(actions[matchingActions[biggeredElemId]],actions[matchingActions[elemId]],1.0);
  }
  actions[matchingActions[elemId]].play();


    sky0.material.side = THREE.FrontSide;
    sky1.material.side = THREE.FrontSide;
    sky2.material.side = THREE.FrontSide;
    sky3.material.side = THREE.FrontSide;


  if(elemId == 'work'){

      sky0.material.side = THREE.BackSide;

      dirLight.position.set(0.4, 6, -2.7);
      dirLight.color = {r: 0.8, g: 0.45, b: 0.17};
      pointLight.position.set(1.3, 1.6, 2.6);
      pointLight.color = {r: 1, g: 0.2, b: 0.14};

  }else if (elemId == 'skill'){

      sky1.material.side = THREE.BackSide;

      dirLight.position.set(1.3, 4, -2);
      dirLight.color = {r: 0.74, g: 0.14, b: 1};
      pointLight.position.set(0.5, 3.3, 2);
      pointLight.color = {r: 1, g: 0.22, b: 0.23};

  }else if (elemId == 'paint') {

      sky2.material.side = THREE.BackSide;

      dirLight.position.set(5.55, 7.77, -6.3);
      dirLight.color = {r: 1, g: 0.66, b: 0.2};
      pointLight.position.set(-2.6, 3.6, 4.45);
      pointLight.color = {r: 0.18, g: 0.67, b: 0.6};

  }else{

      sky3.material.side = THREE.BackSide;

      dirLight.position.set(4.45, 5.46, 2.7);
      dirLight.color = {r: 1, g: 0.28, b: 0.83};
      pointLight.position.set(-3.9, 5.1, 6.2);
      pointLight.color = {r: 0.36, g: 0.82, b: 1};

  }
  // customGui(camera.position, 'x', '-20', '20', cameraAnim[elemId].position.px, 'camera position x' ,'300px')
  // customGui(camera.position, 'y', '-20', '20', cameraAnim[elemId].position.py, 'camera position y' ,'300px')
  // customGui(camera.position, 'z', '-20', '20', cameraAnim[elemId].position.pz, 'camera position z' ,'300px')
  // customGui(camera.rotation, 'x', '-20', '20', cameraAnim[elemId].position.rx, 'camera rotation x' ,'300px')
  // customGui(camera.rotation, 'y', '-20', '20', cameraAnim[elemId].position.ry, 'camera rotation y' ,'300px')
  // customGui(camera.rotation, 'z', '-20', '20', cameraAnim[elemId].position.rz, 'camera rotation z' ,'300px')

  cameraSet.position = {x: cameraAnim[elemId].position.px, y: cameraAnim[elemId].position.py, z: cameraAnim[elemId].position.pz} ;
  cameraSet.rotation = {x: cameraAnim[elemId].rotation.rx, y: cameraAnim[elemId].rotation.ry, z: cameraAnim[elemId].rotation.rz} ;
  const {x,y,z} = cameraSet.rotation;
  // slerpRotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(x,y,z, 'YXZ'));
  // quaternion= new THREE.Quaternion();
  // slerpRotation = quaternion.setFromAxisAngle( new THREE.Vector3( cameraSet.position.x, cameraSet.position.y, cameraSet.position.z ), Math.PI / 2);
  
  // slerpRotation = new THREE.Quaternion(-0.019951101172801276, 0.663749734595996, 0.017716275344874636, 0.7474786799458846);
  slerpRotation = cameraAnim[elemId].quaternion;
  // console.log(x,y,z)
  // console.log(cameraAnim[elemId].rotation)
  click=true;
  menuClicked = true;
  // window.camera =camera
  onClick();
}

export function pauseAstronaut(){
  menuClicked = false;

  document.getElementById("threeJSCover").style.display = 'initial';

  sky0.material.side = THREE.FrontSide;
  sky1.material.side = THREE.FrontSide;
  sky2.material.side = THREE.FrontSide;
  sky3.material.side = THREE.FrontSide;

  dirLight.intensity = 0;
  pointLight.intensity = 0;

  for(let action in actions){
    actions[action].stop();
  }
}

export function removeScene(){

  gltfOn = false;
  skyTextures.forEach((texture)=>{
    texture.abort(); 
  })
  if(scene){
    while(scene.children.length > 0){ 
      scene.remove(scene.children[0]); 
    }
  }
}

export function checkActions(){
  const checkedActions = actions && true;
  if(!checkedActions) removeScene()
  return checkedActions ;
}
