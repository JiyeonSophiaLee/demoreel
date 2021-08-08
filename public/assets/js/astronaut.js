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
    vector: {px: 7.746, py: 0, pz:4.507}, 
    quaternion: {rx:0.03766647457536178, ry:0.5936171536593342, rz:0.00174983039443663, rw: 0.8038637009269947}, 
    aspectPosition:{
      wider:{widerPx:-1.472, widerPy:0, widerPz:1.115}, 
      heigher:{heigherPx:-7.906, heigherPy:0, heigherPz:-0.282}}
  },
  skill: {
    vector: {px: -1.972, py: 2.957, pz:6.338}, 
    quaternion:{rx:-0.1900915455206743, ry:-0.2189346562329466, rz:-0.023391416956847752, rw:0.9567578911273604}, 
    aspectPosition:{
      wider:{widerPx:0.708, widerPy:0, widerPz:-0.311 }, 
      heigher:{heigherPx:2.312, heigherPy:-4.446, heigherPz:-6.420}}
  },
  paint: {
    vector: {px: 4.7587 , py: 4.1322, pz: 8.1648}, 
    quaternion:{rx:-0.16256115424362622, ry:0.41343002640843424, rz:-0.023046249619345094, rw: 0.8956106044333019}, 
    aspectPosition:{
      wider:{widerPx:-2.015, widerPy:0.1412, widerPz:2.8169}, 
      heigher:{heigherPx:-10.991, heigherPy:-7.2113, heigherPz:-5.792}}
  },
  info: {
    vector: {px: -2.314, py: 6.338, pz:7.1074}, 
    quaternion:{rx:-0.3071622504323486, ry:-0.23802664306761356, rz:-0.05892623608662928, rw: 0.9195229022704985}, 
    aspectPosition:{
      wider:{widerPx:1.0304, widerPy:-0.796, widerPz:-0.5528}, 
      heigher:{heigherPx:4.333, heigherPy:-10.7382, heigherPz:-9.6107}} 
  },
}
  
let camera, renderer, scene, dirLight, pointLight, sky0, sky1, sky2, sky3, menuClicked, menuElemId;
let size = {width:0, height:0}
let skyTextures=[];
let click =false;

var model, skeleton, mixer, actions, fallAction, jumpAction, walkAction, waveAction ;

let mouseX = 0;
let mouseY = 0;
let mouseZ = 0;
let callClientX = 0;
let callClientY = 0;
const mouseMultiplier = 0.001;
// const threeJSVignette = document.getElementById('threeJSVignette');



const cameraChangeDuration = 60;
let cameraMoveframe = 0;
var requestAniThreeJS, cameraChangeAni = null;
let cameraSet  = {vector:{x:0,y:0,z:0}, quaternion:{x:0,y:0,z:0,w:0}};
let slerpRotation, lerpPosition;
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
  // const pixelRatio = Math.min(window.devicePixelRatio,2);
  size = {width: innerWidth , height:innerHeight }
  
  camera = new THREE.PerspectiveCamera( 45, size.width / size.height, 1,  40 );
  // getCameraPosition(cameraAnim.info);
  // camera.position.copy(new THREE.Vector3(cameraAnim.work.vector));
  // camera.quaternion.copy(new THREE.Quaternion(cameraAnim.work.quaternion));
  camera.position.set(0,0,5);
  camera.lookAt (new THREE.Vector3(0, 1, 0));


  //   customGui(camera.position, 'x', '-20', '20', camera.position.x, 'camera position x: ' ,'300px')
  //   customGui(camera.position, 'y', '-20', '20', camera.position.y, 'camera position y: ' ,'300px')
  //   customGui(camera.position, 'z', '-20', '20', camera.position.z, 'camera position z: ' ,'300px')
  //   customGui(camera.rotation, 'x', '-20', '20', camera.rotation.x, 'camera rotation x: ' ,'300px')
  //   customGui(camera.rotation, 'y', '-20', '20', camera.rotation.y, 'camera rotation y: ' ,'300px')
  //   customGui(camera.rotation, 'z', '-20', '20', camera.rotation.z, 'camera rotation z: ' ,'300px')


  // window.camera = camera
// console.log(camera)

 

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
  pointLight.intensity = 0;
  pointLight.position.set(-1,3,2,4);
  dirLight = new THREE.DirectionalLight('rgb(43,174,212)', 1,20);
  dirLight.intensity = 0;
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
  sky0 = getSky(20, prefix + '/assets/images/hdr/space_00_darker.jpg');
  sky1 = getSky(20, prefix + '/assets/images/hdr/space_01_darker.jpg');
  sky2 = getSky(20, prefix + '/assets/images/hdr/space_02_darker.jpg');
  sky3 = getSky(20, prefix + '/assets/images/hdr/space_03_darker.jpg');
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

  
  const particleGeometry = new THREE.BufferGeometry();
  const particleTexture = textureLoader.load('/assets/images/alphas/star.jpg')
  const particleMaterial = new THREE.PointsMaterial({
    size:0.2, 
    sizeAttenuation: true, 
    alphaMap:particleTexture, 
    color:'white',
    depthWrite: false,
    transparent: true});  
  particleMaterial.depthWrite = false;

  const count = 300;
  const positions = new Float32Array(count*3);

  for(let i=0; i<count*3; i++){
    positions[i] = (Math.random()-0.5)*20;
  }
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions,3));

  const particles = new THREE.Points(particleGeometry,particleMaterial);
  scene.add(particles);



  window.addEventListener('mousemove',getCurrentMouse, false);
  window.addEventListener( 'resize', onWindowResize, false );

  // guiCamera();

}

function customGui(object, axis, min, max, value, name, width){
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
  input.step = 0.0001;
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
    object[axis] = this.value;
  }
}

// function guiCamera(){
//   const gui = new GUI();
//   const position =  gui.addFolder('position');
//   const rotation =  gui.addFolder('rotation');
//   position.add(camera.position,'x', -10, 10);
//   position.add(camera.position,'y', -10, 10);
//   position.add(camera.position,'z', -10, 10);
//   rotation.add(camera.rotation,'x', -10, 10);
//   rotation.add(camera.rotation,'y', -10, 10);
//   rotation.add(camera.rotation,'z', -10, 10);
// }

function getCameraPosition(defaultValue){
  let {px,py,pz} = defaultValue.vector;
  const {rx,ry,rz,rw} = defaultValue.quaternion;
  const {widerPx,widerPy,widerPz} = defaultValue.aspectPosition.wider;
  const {heigherPx,heigherPy,heigherPz} = defaultValue.aspectPosition.heigher;
  const screenAspect = size.width / size.height - 1;
  // let x,y,z;

  if( screenAspect > 0){
    px = px + ( screenAspect * widerPx);
    py = py + ( screenAspect * widerPy);
    pz = pz + ( screenAspect * widerPz);

  }else{
    px = px + ( screenAspect * heigherPx); 
    py = py + ( screenAspect * heigherPy);
    pz = pz + ( screenAspect * heigherPz);
  }
  // camera.position.copy(new THREE.Vector3(px, py, pz));
  // camera.quaternion.copy(new THREE.Quaternion(rx, ry, rz, rw));
  
  return {px,py,pz,rx,ry,rz,rw};
}


function onWindowResize() {
  const {px,py,pz} = getCameraPosition(cameraAnim[menuElemId]);

  
  size = {width: innerWidth , height:innerHeight }

  renderer.setSize(size.width, size.height);

  camera.aspect = size.width/size.height;
  camera.updateProjectionMatrix();

  cameraSet.vector = {x:px,y:py,z:pz};
  mouseX = px;
  mouseY = py;
  mouseZ = pz;
  
}




var lastMove = Date.now();

function getCurrentMouse(e){
  if(!click){
    if (Date.now() - lastMove < 30) { 
      return;
    } else {
      lastMove = Date.now();
    }

    mouseX = cameraSet.vector.x + (( e.clientX - window.innerWidth / 2 ) * mouseMultiplier);
    mouseY = cameraSet.vector.y + (( window.innerHeight /2 - e.clientY ) * mouseMultiplier);
    
  }
}


function animate(){
  
  requestAniThreeJS = requestAnimationFrame(animate);

  let delta = clock.getDelta();
  mixer.update( delta );

  if(click){
    camera.position.lerp( lerpPosition, 0.1);
    camera.quaternion.slerp( slerpRotation , 0.1 );
  }else {
    if(menuClicked){
      camera.position.lerp(vec.set( mouseX , mouseY, mouseZ), 0.1)
    }
  }
  
  renderer.render( scene, camera);

  if(!gltfOn){
    cancelAnimationFrame(requestAniThreeJS)
  }
}

function onClick(){
  lerpingAni = requestAnimationFrame(onClick);

  if(parseFloat(cameraSet.vector.x.toFixed(2)) === parseFloat(camera.position.x.toFixed(2))){
    
    mouseX = cameraSet.vector.x;
    mouseY = cameraSet.vector.y;
    mouseZ = cameraSet.vector.z;
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
    if(document.getElementById("threeJSCover")) document.getElementById("threeJSCover").style.display = 'none';
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
  



  const {px,py,pz,rx,ry,rz,rw} = getCameraPosition(cameraAnim[elemId]);
  cameraSet.vector = {x:px, y: py, z: pz} ;
  cameraSet.quaternion = {x: rx, y: ry, z: rz, w: rw} ;

  lerpPosition = new THREE.Vector3(px, py, pz);
  slerpRotation = new THREE.Quaternion(rx, ry,rz,rw);

  click=true;
  menuClicked = true;
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
