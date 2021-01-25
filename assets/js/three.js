import * as THREE from '/assets/THREE_js/script/three.module.js';
import {GLTFLoader} from '/assets/THREE_js/script/GLTFLoader.js';
// import {RGBELoader} from '/assets/THREE_js/script/RGBELoader.js';
// import {RoughnessMipmapper} from '/assets/THREE_js/script/RoughnessMipmapper.js';
// import {OrbitControls} from '/assets/THREE_js/script/OrbitControls.js';
// import Stats from '/assets/THREE_js/script/stats.module.js';
import {GUI} from '/assets/THREE_js/script/dat.gui.module.js'
import astronautGLTF from '/assets/THREE_js/astronaut_v06.gltf';
import _sky00 from '/assets/images/hdr/space_00.jpg';
import _sky01 from '/assets/images/hdr/space_01.jpg';
import _sky02 from '/assets/images/hdr/space_02.jpg';
import _sky03 from '/assets/images/hdr/space_03.jpg';


const threeJSCanvas = document.getElementById('threeJSCanvas');
const threejsBlocker = document.getElementById('threejsBlocker');
const matchingActions = {'work':'waveAction', 'skill':'walkAction', 'paint':'jumpAction', 'info': 'fallAction'};
  
  
var container, controls;
var camera, scene, renderer, hemiLight, dirLight, pointLight, sky0, sky1, sky2, sky3;
var model, skeleton, mixer, actions, fallAction, jumpAction, walkAction, waveAction ,stats;

let mouseX = 0;
let mouseY = 0;
let callClientX = 0;
let callClientY = 0;
const mouseMultiplier = 0.001;
const threeJSVignette = document.getElementById('threeJSVignette');



const cameraChangeDuration = 60;
let cameraMoveframe = 0;
var requestAniThreeJS, cameraChangeAni = null;
let cameraPositionX, cameraPositionY, cameraPositionZ, cameraRotationX, cameraRotationY, cameraRotationZ;
let positionXdiff, positionYdiff, positionZdiff, rotationXdiff, rotationYdiff, rotationZdiff;


var clock = new THREE.Clock();





Astronaut();



function Astronaut() {

    
  renderer = new THREE.WebGLRenderer( { antialias: false} );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;
    // renderer.domElement.style.width = renderer.domElement.width*0.8 +'px';
    // renderer.domElement.style.height = renderer.domElement.height*0.8 +'px';
  renderer.shadowMap.enabled = true;
  threeJSCanvas.appendChild( renderer.domElement );
  // renderer.setClearColor ('#1e1e1e', 1)

    
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.25, 100 );
  camera.position.set(0,0,5);
  camera.lookAt(new THREE.Vector3(0, 1, 0));

    
  
//   // scene.add(new THREE.AxesHelper(5));


  sky0 = getSky(16, _sky00);
  sky1 = getSky(16, _sky01);
  sky2 = getSky(16, _sky02);
  sky3 = getSky(16, _sky03);
 
  scene = new THREE.Scene();
  scene.add(sky0);
  scene.add(sky1);
  scene.add(sky2);
  scene.add(sky3);

  

    

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
  // dirLight.intensity = 0;
 
    
  scene.add(pointLight);
  scene.add(dirLight);
    



    

  // use of RoughnessMipmapper is optional
  // var roughnessMipmapper = new RoughnessMipmapper( renderer );

  //let loader = new GLTFLoader().setPath( '/assets/THREE_js/' );
  let loader = new GLTFLoader();
  loader.load( astronautGLTF, function ( gltf ) {
    model = gltf.scene;
    scene.add(model);


    model.traverse( function ( child ) {
      if ( child.isMesh ) {
        // Object.castShadow = true;

        child.castShadow = true;
        // child.receiveShadow = true;
        // const newMaterial = new THREE.MeshPhongMaterial();
        // child.material.type = 'MeshPhongMaterial';
        // child.material = newMaterial

        


        // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
        // roughnessMipmapper.generateMipmaps( child.material );
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

    animate()

    
    // roughnessMipmapper.dispose();

  });

// stopAllActions();

  let ground = getSphere(5);
  ground.position.y = -ground.geometry.parameters.radius;

  scene.add(ground);
  





  window.addEventListener('mousemove',getMouseMove, false);
  window.addEventListener( 'resize', onWindowResize, false );

  

  
  
  

//     controls = new THREE.OrbitControls( camera, renderer.domElement );
//     controls.addEventListener( 'change', animate ); // use if there is no animation loop
//     controls.minDistance = 2;
//     controls.maxDistance = 30;
//     controls.target.set( 0, 0, - 0.2 );
//     // controls.update();
    


// const dirLightHelper = new THREE.DirectionalLightHelper(dirLight);
// const pointLightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(dirLightHelper);
// scene.add(pointLightHelper);

  // updateLight(dirLight,dirLightHelper);
  // updateLight(pointLight,pointLightHelper);
    // class ColorGUIHelper{
    //     constructor(object, prop){
    //         this.object = object;
    //         this.prop = prop;
    //     }
    //     get value(){
    //         return `#${this.object[this.prop].getHexString()}`;
    //     }
    //     set value(hexString){
    //         this.object[this.prop].set(hexString);
    //     }
    // }
    // class MinMaxGUIHelper {
    //     constructor(obj, minProp, maxProp, minDif){
    //         this.obj = obj;
    //         this.minProp = minProp;
    //         this.maxProp = maxProp;
    //         this.minDif = minDif;
    //     }
    //     get min(){
    //         return this.obj[this.minProp];
    //     }
    //     set min(v){
    //         this.obj[this.minProp] = v;
    //         this.obj[this.maxProp] = Math.max(this.obj[this.maxProp], v + this.minDif);
    //     }
    //     get max(){
    //         return this.obj[this.maxProp];
    //     }
    //     set max(v){
    //         this.obj[this.maxProp] = v;
    //         this.min = this.min;
    //     }
    // }



    // const gui = new GUI();
    
    // gui.addColor(new ColorGUIHelper(dirLight,'color'),'value').name('color');
    // gui.add(dirLight,'intensity', 0, 2, 0.01);
    // makeXYZGUI(gui,dirLight.position,'position',()=>{updateLight(dirLight,dirLightHelper)});
    // makeXYZGUI(gui,dirLight.target.position,'target',()=>{updateLight(dirLight,dirLightHelper)});


    // const pointLightFolder = gui.addFolder('pointLight');

    // pointLightFolder.addColor(new ColorGUIHelper(pointLight,'color'),'value').name('color');
    // pointLightFolder.add(pointLight,'intensity', 0, 2, 0.01);
    // pointLightFolder.add(pointLight,'distance', 0, 40).onChange(()=>{updateLight(pointLightHelper,pointLightHelper)});
    // pointLightFolder.open();
    // makeXYZGUI(gui, pointLight.position, 'pointPosition', ()=>{updateLight(pointLight,pointLightHelper)});
    

    // const cameraFolder = gui.addFolder('camera');

    // cameraFolder.add(camera,'fov', 1,180).onChange(updateCamera);
    // const minMaxGUIHelper = new MinMaxGUIHelper(camera,'near','far',0.1);
    // cameraFolder.add(minMaxGUIHelper, 'min', 0.1, 50, 0.1).name('near').onChange(updateCamera);
    // cameraFolder.add(minMaxGUIHelper, 'max', 0.1, 50, 0.1).name('far').onChange(updateCamera);
    // makeXYZGUI(gui,camera.position,'cameraPosition',updateCamera);
    // makeXYZGUI(gui,camera.rotation,'cameraRotation',updateCamera);
    // cameraFolder.open();

    // gui.close();
   
    
}
function animate(){
  requestAniThreeJS = requestAnimationFrame(animate);

  let delta = clock.getDelta();
  mixer.update( delta );

  // controls.update();
  // stats.update();
  updateCameraMouse();
  renderer.render( scene, camera);
}


function getSky(size,path){
  let skyGeo = new THREE.SphereGeometry(size, 100,100);
  let skyMesh = new THREE.MeshBasicMaterial( {map:new THREE.TextureLoader().load(path), side:0} );

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
  renderer.setSize( window.innerWidth, window.innerHeight );

  camera.aspect = window.innerWidth / window.innerHeight;
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


// function makeXYZGUI(gui, vector3, name, onChangeFn){
//     const folder = gui.addFolder(name);
//     folder.add(vector3, 'x', -10,10).onChange(onChangeFn);
//     folder.add(vector3, 'y', 0,10).onChange(onChangeFn);
//     folder.add(vector3, 'z', -10,10).onChange(onChangeFn);
//     folder.open();
// }

// function updateLight(light,helper){
    
//     if(light.type == "DirectionalLight") light.target.updateMatrixWorld();
//     helper.update();
// }

// function updateCamera(){
//     camera.updateProjectionMatrix();
// }





// function getPlane(size){
//     var geometry = new THREE.PlaneGeometry(size, size);

//     // var textureLoader = new THREE.TextureLoader();

// 	var material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
// 	var mesh = new THREE.Mesh(
// 		geometry,
// 		material 
// 	);
// 	mesh.receiveShadow = true;
	

// 	return mesh;
// }

// function getBox(w, h, d) {
// 	var geometry = new THREE.BoxGeometry(w, h, d);
// 	var material = new THREE.MeshPhongMaterial({
// 		color: 'rgb(120,120,120)'
// 	});
// 	var mesh = new THREE.Mesh(
// 		geometry,
// 		material 
// 	);
// 	mesh.castShadow = true;
// 	mesh.receiveShadow = true;

// 	return mesh;
// }






// function pauseAllActions(){
//     for(action in actions){
//         actions[action].pause = true;
//     }
// }











//------------ call Astronaut ------------//




export function callAstronaut(elem,biggeredElem){

  if(biggeredElem == null){
    threejsBlocker.style.display = 'none';
    dirLight.intensity = 1;
  }else{
    executeCrossFade(actions[matchingActions[biggeredElem.id]],actions[matchingActions[elem.id]],1.0);
  }
  actions[matchingActions[elem.id]].play();


    sky0.material.side = 0;
    sky1.material.side = 0;
    sky2.material.side = 0;
    sky3.material.side = 0;


  if(elem.id == 'work'){
    pointLight.intensity = 2;

      sky0.material.side = 1;

      dirLight.position.set(0.4, 6, -2.7);
      dirLight.color = {r: 0.8, g: 0.45, b: 0.17};
      pointLight.position.set(1.3, 1.6, 2.6);
      pointLight.color = {r: 1, g: 0.2, b: 0.14};

      cameraPositionX = 5 + innerHeight/1400 ;
      cameraPositionY = 1.3;
      cameraPositionZ = innerWidth/470 - 0.97
      
      cameraRotationX = 0;
      cameraRotationY = 1.7;
      cameraRotationZ = -0.2;




  
  }else if (elem.id == 'skill'){
      pointLight.intensity = 2;

      sky1.material.side = 1;

      dirLight.position.set(1.3, 4, -2);
      dirLight.color = {r: 0.74, g: 0.14, b: 1};
      pointLight.position.set(0.5, 3.3, 2);
      pointLight.color = {r: 1, g: 0.22, b: 0.23};

      cameraPositionX = 0.05 + innerWidth/1000 - innerHeight/2400;
      cameraPositionY = 1.67 ;
      cameraPositionZ = 3.27;

      cameraRotationX = -0.25;
      cameraRotationY = -0.2;
      cameraRotationZ = 0;

    camera.position

      
      
  }else if (elem.id == 'paint') {
      pointLight.intensity = 2;

      sky2.material.side = 1;

      dirLight.position.set(5.55, 7.77, -6.3);
      dirLight.color = {r: 1, g: 0.66, b: 0.2};
      pointLight.position.set(-2.6, 3.6, 4.45);
      pointLight.color = {r: 0.18, g: 0.67, b: 0.6};

      
      cameraPositionX = 4.11- innerWidth/860 + innerHeight/1000; 
      cameraPositionY = innerWidth/2100 + 3.4;
      cameraPositionZ = innerWidth/400 + 1.4;



      cameraRotationX = -1.2;
      cameraRotationY = 0.9;
      cameraRotationZ = 1;

  }else{
      pointLight.intensity = 1.5;

      sky3.material.side = 1;

      dirLight.position.set(4.45, 5.46, 2.7);
      dirLight.color = {r: 1, g: 0.28, b: 0.83};
      pointLight.position.set(-3.9, 5.1, 6.2);
      pointLight.color = {r: 0.36, g: 0.82, b: 1};

      cameraPositionX = -2.5 + innerWidth/1225 - innerHeight/2000;
      cameraPositionY = 4.44 - innerWidth/2550;
      cameraPositionZ = 4;

      cameraRotationX = -0.96;
      cameraRotationY = -0.65;
      cameraRotationZ = -0.71;

  }

  


  if(biggeredElem != null){
      
      positionXdiff = (cameraPositionX - camera.position.x) / cameraChangeDuration;
      positionYdiff = (cameraPositionY - camera.position.y) / cameraChangeDuration;
      positionZdiff = (cameraPositionZ - camera.position.z) / cameraChangeDuration;

      rotationXdiff = (cameraRotationX - camera.rotation.x) / cameraChangeDuration;
      rotationYdiff = (cameraRotationY - camera.rotation.y) / cameraChangeDuration;
      rotationZdiff = (cameraRotationZ - camera.rotation.z) / cameraChangeDuration;
      
      

      cameraChange();
  }else{
    camera.position.x = cameraPositionX;
    camera.position.y = cameraPositionY;
    camera.position.z = cameraPositionZ;

    camera.rotation.x = cameraRotationX;
    camera.rotation.y = cameraRotationY;
    camera.rotation.z = cameraRotationZ;


    callClientX = cameraPositionX;
    callClientY = cameraPositionY;
  }
  
}

export function pauseAstronaut(){
  console.log('-----pauseAstronaut-----')

  threejsBlocker.style.display = 'initial';

  sky0.material.side = 0;
  sky1.material.side = 0;
  sky2.material.side = 0;
  sky3.material.side = 0;

  dirLight.intensity = 0;
  pointLight.intensity = 0;

  stopAllActions();

}







