import TV from './transitionValue.js'
import * as THREE from '../gltf/scripts/three.module.js';
import {GLTFLoader} from '../gltf/scripts/GLTFLoader.js';

// const threeJSCanvas = document.getElementById('threeJSCanvas');
// const threejsBlocker = document.getElementById('threejsBlocker');
const vec = new THREE.Vector3();
const matchingActions = {'work':'waveAction', 'skill':'walkAction', 'paint':'jumpAction', 'info': 'fallAction'};
  
  
var container, controls;
let camera, renderer, scene, dirLight, pointLight;
let click=false;
var model, skeleton, mixer, actions, fallAction, jumpAction, walkAction, waveAction ,stats;

let mouseX = 0;
let mouseY = 0;
let callClientX = 0;
let callClientY = 0;
const mouseMultiplier = 0.001;
// const threeJSVignette = document.getElementById('threeJSVignette');



const cameraChangeDuration = 60;
let cameraMoveframe = 0;
var requestAniThreeJS, cameraChangeAni = null;
let cameraPositionX, cameraPositionY, cameraPositionZ, cameraRotationX, cameraRotationY, cameraRotationZ;
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
  pointLight.position.set(-1,3,2,4);
  // pointLight.intensity = 0;
  dirLight = new THREE.DirectionalLight('rgb(43,174,212)', 1,20);
  dirLight.position.set(1.5,4,-2);
  dirLight.target.position.x = -3;
  dirLight.castShadow = true;
  dirLight.shadow.bias = -0.001;
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 40;
 


  let sky0 = getSky(16, '../assets/images/hdr/space_00.jpg');
  let sky1 = getSky(16, '../assets/images/hdr/space_01.jpg');
  let sky2 = getSky(16, '../assets/images/hdr/space_02.jpg');
  let sky3 = getSky(16, '../assets/images/hdr/space_03.jpg');
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

  
}


// Astronaut();



export function astronautss() {

    
  
  setRendererSize();
  
  
    
  
  setCameraAspect();
    
  

  window.addEventListener('mousemove',getMouseMove, false);
  window.addEventListener( 'resize', onWindowResize, false );

  
    
}


function animate(){
  requestAniThreeJS = requestAnimationFrame(animate);

  let delta = clock.getDelta();
  mixer.update( delta );

  if(click) camera.position.lerp(vec.set(cameraPositionX,cameraPositionY,cameraPositionZ), 0.1)
  
  // controls.update();
  // stats.update();
  // updateCameraMouse();
  renderer.render( scene, camera);
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

function getMouseMove(event){
  mouseX = (event.clientX - window.innerWidth /2 );
  mouseY = (event.clientY - window.innerHeight /2 );
}

function updateCameraMouse(){
  // //   // const timer = 0.0001*Date.now();
  if(cameraChangeAni == null){
    camera.position.x = ( mouseX * mouseMultiplier) + callClientX ;
    camera.position.y = ( mouseY * mouseMultiplier) + callClientY ;
  }
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
function cameraChange(){
  cameraMoveframe += 1;
  cameraChangeAni = requestAnimationFrame(cameraChange);


  camera.position.x += positionXdiff;
  camera.position.y += positionYdiff;
  camera.position.z += positionZdiff;

  camera.rotation.x += rotationXdiff;
  camera.rotation.y += rotationYdiff;
  camera.rotation.z += rotationZdiff;


  if(!(cameraMoveframe % cameraChangeDuration)){
    cancelAnimationFrame(cameraChangeAni);
    cameraChangeAni= null;
    cameraMoveframe= 0;

    // console.log(mouseX)
    callClientX = cameraPositionX - (mouseX * mouseMultiplier);
    callClientY = cameraPositionY - (mouseY * mouseMultiplier);  
    return
  }
}

function stopAllActions(){
  for(let action in actions){
    actions[action].stop();
  }
}





//------------ call Astronaut ------------//




export function callAstronaut(elemId,biggeredElem=null){
  click = true;

  // if(biggeredElem == null){
  //   // threejsBlocker.style.display = 'none';
  //   dirLight.intensity = 1;
  // }else{
  //   executeCrossFade(actions[matchingActions[biggeredElem.id]],actions[matchingActions[elem.id]],1.0);
  // }
  // actions[matchingActions[elem.id]].play();


  //   sky0.material.side = 0;
  //   sky1.material.side = 0;
  //   sky2.material.side = 0;
  //   sky3.material.side = 0;


  if(elemId == 'work'){
    // pointLight.intensity = 2;

    //   sky0.material.side = 1;

    //   dirLight.position.set(0.4, 6, -2.7);
    //   dirLight.color = {r: 0.8, g: 0.45, b: 0.17};
    //   pointLight.position.set(1.3, 1.6, 2.6);
    //   pointLight.color = {r: 1, g: 0.2, b: 0.14};

      cameraPositionX = 5 + innerHeight/1400 ;
      cameraPositionY = 1.3;
      cameraPositionZ = innerWidth/470 - 0.97
      
      // cameraRotationX = 0;
      // cameraRotationY = 1.7;
      // cameraRotationZ = -0.2;




  
  }else if (elemId == 'skill'){
      // pointLight.intensity = 2;

      // sky1.material.side = 1;

      // dirLight.position.set(1.3, 4, -2);
      // dirLight.color = {r: 0.74, g: 0.14, b: 1};
      // pointLight.position.set(0.5, 3.3, 2);
      // pointLight.color = {r: 1, g: 0.22, b: 0.23};

      cameraPositionX = 0.05 + innerWidth/1000 - innerHeight/2400;
      cameraPositionY = 1.67 ;
      cameraPositionZ = 3.27;

      // cameraRotationX = -0.25;
      // cameraRotationY = -0.2;
      // cameraRotationZ = 0;

      
      
  }else if (elemId == 'paint') {
      // pointLight.intensity = 2;

      // sky2.material.side = 1;

      // dirLight.position.set(5.55, 7.77, -6.3);
      // dirLight.color = {r: 1, g: 0.66, b: 0.2};
      // pointLight.position.set(-2.6, 3.6, 4.45);
      // pointLight.color = {r: 0.18, g: 0.67, b: 0.6};

      
      cameraPositionX = 4.11- innerWidth/860 + innerHeight/1000; 
      cameraPositionY = innerWidth/2100 + 3.4;
      cameraPositionZ = innerWidth/400 + 1.4;



      // cameraRotationX = -1.2;
      // cameraRotationY = 0.9;
      // cameraRotationZ = 1;

  }else{
      // pointLight.intensity = 1.5;

      // sky3.material.side = 1;

      // dirLight.position.set(4.45, 5.46, 2.7);
      // dirLight.color = {r: 1, g: 0.28, b: 0.83};
      // pointLight.position.set(-3.9, 5.1, 6.2);
      // pointLight.color = {r: 0.36, g: 0.82, b: 1};

      cameraPositionX = -2.5 + innerWidth/1225 - innerHeight/2000;
      cameraPositionY = 4.44 - innerWidth/2550;
      cameraPositionZ = 4;

      // cameraRotationX = -0.96;
      // cameraRotationY = -0.65;
      // cameraRotationZ = -0.71;

  }

  


  // if(biggeredElem != null){
      
  //     positionXdiff = (cameraPositionX - camera.position.x) / cameraChangeDuration;
  //     positionYdiff = (cameraPositionY - camera.position.y) / cameraChangeDuration;
  //     positionZdiff = (cameraPositionZ - camera.position.z) / cameraChangeDuration;

  //     rotationXdiff = (cameraRotationX - camera.rotation.x) / cameraChangeDuration;
  //     rotationYdiff = (cameraRotationY - camera.rotation.y) / cameraChangeDuration;
  //     rotationZdiff = (cameraRotationZ - camera.rotation.z) / cameraChangeDuration;
      
      

  //     cameraChange();
  // }else{
    // const vec = new THREE.Vector3();
    // camera.position.lerp(vec.set(cameraPositionX,cameraPositionY,cameraPositionZ), 0.5)
    // camera.position.x = cameraPositionX;
    // camera.position.y = cameraPositionY;
    // camera.position.z = cameraPositionZ;
  //   camera.rotation.x = cameraRotationX;
  //   camera.rotation.y = cameraRotationY;
  //   camera.rotation.z = cameraRotationZ;


  //   callClientX = cameraPositionX;
  //   callClientY = cameraPositionY;
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







