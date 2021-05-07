import TV from './transitionValue.js'
import * as THREE from '../gltf/scripts/three.module.js';
import {GLTFLoader} from '../gltf/scripts/GLTFLoader.js';
import {GUI} from '../gltf/scripts/dat.gui.module.js';

// const threeJSCanvas = document.getElementById('threeJSCanvas');
// const threejsBlocker = document.getElementById('threejsBlocker');
const vec = new THREE.Vector3();
const matchingActions = {work:'waveAction', skill:'walkAction', paint:'jumpAction', info: 'fallAction'};
  
  
let camera, renderer, scene, dirLight, pointLight, sky0, sky1, sky2, sky3;
let click=false;
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


export default function astronaut(){
  
  
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1,  30 );
  camera.position.set(0,0,5);
  camera.lookAt(new THREE.Vector3(0, 1, 0));


  renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference:"high-performance"});
  renderer.setSize( window.innerWidth, window.innerHeight );
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
 


  sky0 = getSky(16, '../assets/images/hdr/space_00.jpg');
  sky1 = getSky(16, '../assets/images/hdr/space_01.jpg');
  sky2 = getSky(16, '../assets/images/hdr/space_02.jpg');
  sky3 = getSky(16, '../assets/images/hdr/space_03.jpg');
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
  loader.load( '../assets/gltf/astronaut_v07.gltf', function ( gltf ) {
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

  window.addEventListener('mousemove',getCurrentMouse, false);

  guiCamera();
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

function getCurrentMouse(e){
  if(!click){
    mouseX = cameraSet.position.x + (( e.clientX - window.innerWidth / 2 ) * mouseMultiplier);
    mouseY = cameraSet.position.y + (( window.innerHeight /2 - e.clientY ) * mouseMultiplier);
  }
}


function animate(){
  requestAniThreeJS = requestAnimationFrame(animate);

  let delta = clock.getDelta();
  mixer.update( delta );

  if(click){
    camera.position.lerp(vec.set(cameraSet.position.x,cameraSet.position.y,cameraSet.position.z), 0.1);
    camera.quaternion.slerp( slerpRotation, 0.1 );
  }else {
    // camera.position.lerp(vec.set( mouseX , mouseY, camera.position.z), 0.1)
  }
  
  renderer.render( scene, camera);
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

//-----------set camera and renderer for minHeight and minWidth -------------//

function setRendererSize(){
  if(window.innerWidth > TV.masterMinWidth && window.innerHeight > TV.masterMinHeight){
    renderer.setSize( window.innerWidth, window.innerHeight );
  }else if(window.innerWidth > TV.masterMinWidth && window.innerHeight <= TV.masterMinHeight){
    renderer.setSize( document.body.clientWidth, TV.masterMinHeight );
  }else{
    renderer.setSize( TV.masterMinWidth, document.body.clientHeight );
  }
}

function setCameraAspect(){
  if(window.innerWidth > TV.masterMinWidth && window.innerHeight > TV.masterMinHeight){
    camera.aspect = window.innerWidth / window.innerHeight ;
  }else if(window.innerWidth > TV.masterMinWidth && window.innerHeight <= TV.masterMinHeight){
    camera.aspect = window.innerWidth / TV.masterMinHeight;
  }else{
    camera.aspect = TV.masterMinWidth / window.innerHeight;
  }
  
}


//-----------------------------------//
function getSky(size,path){
  let skyGeo = new THREE.SphereGeometry(size, 100,100);
  let skyMesh = new THREE.MeshBasicMaterial( {map:new THREE.TextureLoader().load(path), side:THREE.BackSide} );

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


function onWindowResize() {
  // renderer.setSize( window.innerWidth, window.innerHeight );
  setRendererSize();
  // camera.aspect = window.innerWidth / window.innerHeight;
  setCameraAspect();
  camera.updateProjectionMatrix();

  animate();
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
function stopAllActions(){
  for(let action in actions){
    actions[action].stop();
  }
}





//------------ call Astronaut ------------//




export function callAstronaut(elemId,biggeredElemId=null){
  click = true;

  if(biggeredElemId == null){
    // threejsBlocker.style.display = 'none';
    dirLight.intensity = 1;
    pointLight.intensity = 2;
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

      cameraSet.position.x = 5 + innerHeight/1400 ;
      cameraSet.position.y = 1.3;
      cameraSet.position.z = innerWidth/470 - 0.97
      
      cameraSet.rotation.x = 0;
      cameraSet.rotation.y = 1.7;
      cameraSet.rotation.z = -0.2;




  
  }else if (elemId == 'skill'){

      sky1.material.side = THREE.BackSide;

      dirLight.position.set(1.3, 4, -2);
      dirLight.color = {r: 0.74, g: 0.14, b: 1};
      pointLight.position.set(0.5, 3.3, 2);
      pointLight.color = {r: 1, g: 0.22, b: 0.23};

      cameraSet.position.x = 0.05 + innerWidth/1000 - innerHeight/2400;
      cameraSet.position.y = 1.67 ;
      cameraSet.position.z = 3.27;

      cameraSet.rotation.x = -0.25;
      cameraSet.rotation.y = -0.2;
      cameraSet.rotation.z = 0;

      
      
  }else if (elemId == 'paint') {

      sky2.material.side = THREE.BackSide;

      dirLight.position.set(5.55, 7.77, -6.3);
      dirLight.color = {r: 1, g: 0.66, b: 0.2};
      pointLight.position.set(-2.6, 3.6, 4.45);
      pointLight.color = {r: 0.18, g: 0.67, b: 0.6};

      
      cameraSet.position.x = 2.11- innerWidth/860 + innerHeight/1000; 
      cameraSet.position.y = innerWidth/2100 + 3.4;
      cameraSet.position.z = innerWidth/400 + 1.4;

      cameraSet.rotation.x = -1.2;
      cameraSet.rotation.y = 0.7;
      cameraSet.rotation.z = 0.7;

  }else{

      sky3.material.side = THREE.BackSide;

      dirLight.position.set(4.45, 5.46, 2.7);
      dirLight.color = {r: 1, g: 0.28, b: 0.83};
      pointLight.position.set(-3.9, 5.1, 6.2);
      pointLight.color = {r: 0.36, g: 0.82, b: 1};

      cameraSet.position.x = -2.5 + innerWidth/1225 - innerHeight/2000;
      cameraSet.position.y = 4.44 - innerWidth/2550;
      cameraSet.position.z = 4;

      cameraSet.rotation.x = -0.96;
      cameraSet.rotation.y = -0.65;
      cameraSet.rotation.z = -0.71;

  }

  let {x,y,z} = cameraSet.rotation;
  slerpRotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(x,y,z, 'YXZ'));
  click=true;
  onClick();

  // if(biggeredElemId != null){
      
  //     positionXdiff = (cameraSet.position.x - camera.position.x) / cameraChangeDuration;
  //     positionYdiff = (cameraSet.position.y - camera.position.y) / cameraChangeDuration;
  //     positionZdiff = (cameraSet.position.z - camera.position.z) / cameraChangeDuration;

  //     rotationXdiff = (cameraSet.rotation.x - camera.rotation.x) / cameraChangeDuration;
  //     rotationYdiff = (cameraSet.rotation.y - camera.rotation.y) / cameraChangeDuration;
  //     rotationZdiff = (ameraSet.rotation.z - camera.rotation.z) / cameraChangeDuration;
      
      

  //     cameraChange();
  // }else{
    // const vec = new THREE.Vector3();
    // camera.position.lerp(vec.set(cameraSet.position.x,cameraSet.position.y,cameraSet.position.z), 0.5)
    // camera.position.x = cameraSet.position.x
    // camera.position.y = cameraSet.position.y;
    // camera.position.z = cameraSet.position.z;
  //   camera.rotation.x = cameraSet.rotation.x;
  //   camera.rotation.y = cameraSet.rotation.y;
  //   camera.rotation.z = cameraSet.rotation.z;


  //   callClientX = cameraSet.position.x;
  //   callClientY = cameraSet.position.y;
  // }
  
}

export function pauseAstronaut(){

//   threejsBlocker.style.display = 'initial';

  sky0.material.side = 0;
  sky1.material.side = 0;
  sky2.material.side = 0;
  sky3.material.side = 0;

  dirLight.intensity = 0;
  pointLight.intensity = 0;

  stopAllActions();

}







