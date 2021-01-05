import * as THREE from '/assets/THREE_js/script/three.module.js';
import {GLTFLoader} from '/assets/THREE_js/script/GLTFLoader.js';
// import {RGBELoader} from '/assets/THREE_js/script/RGBELoader.js';
// import {RoughnessMipmapper} from '/assets/THREE_js/script/RoughnessMipmapper.js';
// import {OrbitControls} from '/assets/THREE_js/script/OrbitControls.js';
// import Stats from '/assets/THREE_js/script/stats.module.js';
// import {GUI} from '/assets/THREE_js/script/dat.gui.module.js'






// animate();



export default function Astronaut() {
    // container = document.createElement( 'div' );
  this.threeJSCanvas = document.getElementById('threeJSCanvas');
    // document.body.appendChild( container );
    
//     // stats = new Stats();
//     // container.appendChild(stats.domElement);

  this.mouseX = 0;
  this.mouseY = 0;
    
  this.renderer = new THREE.WebGLRenderer( { antialias: false} );
  this.threeJSCanvas.appendChild( this.renderer.domElement );
  this.renderer.setPixelRatio( window.devicePixelRatio );
  this.renderer.setSize( window.innerWidth, window.innerHeight )
  this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  this.renderer.toneMappingExposure = 1;
  this.renderer.outputEncoding = THREE.sRGBEncoding;
    // renderer.domElement.style.width = renderer.domElement.width*0.8 +'px';
    // renderer.domElement.style.height = renderer.domElement.height*0.8 +'px';
   this.renderer.shadowMap.enabled = true;

    
  this.camera = new THREE.PerspectiveCamera( 75, document.innerWidth / window.innerHeight, 0.25, 100 );
  // if(innerHeight < document.body.scrollHeight){
  //     camera = new THREE.PerspectiveCamera( 75, document.body.clientWidth / document.body.scrollHeight, 0.25, 100 );
  // }else{
  //     camera = new THREE.PerspectiveCamera( 75, document.body.clientWidth / window.innerHeight, 0.25, 100 );
  // }

  this.camera.position.set(1,2,3);
  this.camera.lookAt(new THREE.Vector3(0, 1, 0));

    
  
  // scene.add(new THREE.AxesHelper(5));

    

  // const sky0Geo = new THREE.SphereGeometry(7, 25,25);
  // const sky0Mesh = new THREE.MeshBasicMaterial( {map:new THREE.TextureLoader().load('/assets/images/hdr/shutterstock_1168717975.jpg'), side:THREE.DoubleSide} );

  this.sky0 = this.getSky(16,'/assets/images/hdr/space_00.png');
  this.sky1 = this.getSky(16,'/assets/images/hdr/space_01.png');
  this.sky2 = this.getSky(16,'/assets/images/hdr/space_02.png');
  this.sky3 = this.getSky(16,'/assets/images/hdr/space_03.png');
 
  this.scene = new THREE.Scene();
  this.scene.add(this.sky0);
  this.scene.add(this.sky1);
  this.scene.add(this.sky2);
  this.scene.add(this.sky3);

    


  // let textureLoader = new THREE.TextureLoader()
  // let sky = textureLoader.load('/assets/images/hdr/shutterstock_1168717975.jpg',()=>{
  // });

  // this.scene.background =new THREE.WebGLRenderTargetCube(512, 512).fromEquirectangularTexture(this.renderer,sky);


    

  this.pointLight = new THREE.PointLight('rgb(220,51,35)', 1 ,20);
  this.pointLight.position.set(-1,3,2,4);
  // this.pointLight.intensity = 0;
  this.dirLight = new THREE.DirectionalLight('rgb(43,174,212)', 1,20);
  this.dirLight.position.set(1.5,4,-2);
  this.dirLight.target.position.x = -3;
  this.dirLight.castShadow = true;
  this.dirLight.shadow.bias = -0.001;
  this.dirLight.shadow.mapSize.width = 1024;
  this.dirLight.shadow.mapSize.height = 1024;
  this.dirLight.shadow.camera.near = 0.1;
  this.dirLight.shadow.camera.far = 40;
  // dirLight.intensity = 0;
 
    
  this.scene.add(this.pointLight);
  this.scene.add(this.dirLight);
    
  const dirLightHelper = new THREE.DirectionalLightHelper(this.dirLight);
  const pointLightHelper = new THREE.PointLightHelper(this.pointLight);
  // scene.add(dirLightHelper);
  // scene.add(pointLightHelper);
  // updateLight(dirLight,dirLightHelper);
  // updateLight(pointLight,pointLightHelper);


    

    

    // use of RoughnessMipmapper is optional
    // var roughnessMipmapper = new RoughnessMipmapper( renderer );
    let scene = this.scene;
    let model,skeleton,mixer,fallAction,jumpAction,walkAction,waveAction,actions;

  //   let loader = new GLTFLoader().setPath( '/assets/THREE_js/' );
  //   loader.load( 'astronaut_v06.gltf', function ( gltf ) {
  //     model = gltf.scene;
  //     scene.add(model);


  //     model.traverse( function ( child ) {
  //       if ( child.isMesh ) {
  //         // if(Object.isMesh) 
  //         // Object.castShadow = true;

  //         child.castShadow = true;
  //         // child.receiveShadow = true;
  //         // const newMaterial = new THREE.MeshPhongMaterial();
  //         // child.material.type = 'MeshPhongMaterial';
  //         // child.material = newMaterial

          


  //         // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
  //         // roughnessMipmapper.generateMipmaps( child.material );
  //         if(child.material.map) child.material.map.anisotropy = 16;

  //       }
          

  //     } );

  //     skeleton = new THREE.SkeletonHelper(model);
  //     skeleton.visible = false;
  //     scene.add(skeleton);

  //     mixer = new THREE.AnimationMixer( model );
  //     fallAction = mixer.clipAction( gltf.animations[ 0 ] ).play();
  //     jumpAction = mixer.clipAction( gltf.animations[ 1 ] ).play();
  //     walkAction = mixer.clipAction( gltf.animations[ 2 ] ).play();
  //     waveAction = mixer.clipAction( gltf.animations[ 3 ] ).play();
  //     actions = {'waveAction':waveAction, 'walkAction':walkAction, 'fallAction':fallAction, 'jumpAction':jumpAction };



     
  //     // roughnessMipmapper.dispose();

  // });
  
  // this.model = model;
  // this.scene = scene;
  // this.skeleton = skeleton;
  // this.mixer = mixer;
  // this.fallAction = fallAction;
  // this.jumpAction = jumpAction;
  // this.walkAction = walkAction;
  // this.waveAction = waveAction;
  // this.actions = actions;
  // console.log('this.actions=> ',this.actions)

  // stopAllActions();

//     let ground = getSphere(5);
//     ground.position.y = -ground.geometry.parameters.radius;

//     // ground.rotation.x = -Math.PI/2;
//     scene.add(ground);
    

//     // let box = getBox(2,2,2);
//     // box.position.y = box.geometry.parameters.height/2;
//     // scene.add(box);
    

//      // let ground = getPlane(1000);
//     // ground.rotation.x = -Math.PI/2;
//     // scene.add(ground);





//     window.addEventListener('mousemove',getMouseMove, false);
//     window.addEventListener( 'resize', onWindowResize, false );

    

    
    
   

//     controls = new THREE.OrbitControls( camera, renderer.domElement );
//     controls.addEventListener( 'change', animate ); // use if there is no animation loop
//     controls.minDistance = 2;
//     controls.maxDistance = 30;
//     controls.target.set( 0, 0, - 0.2 );
//     // controls.update();
    



//     class ColorGUIHelper{
//         constructor(object, prop){
//             this.object = object;
//             this.prop = prop;
//         }
//         get value(){
//             return `#${this.object[this.prop].getHexString()}`;
//         }
//         set value(hexString){
//             this.object[this.prop].set(hexString);
//         }
//     }
//     class MinMaxGUIHelper {
//         constructor(obj, minProp, maxProp, minDif){
//             this.obj = obj;
//             this.minProp = minProp;
//             this.maxProp = maxProp;
//             this.minDif = minDif;
//         }
//         get min(){
//             return this.obj[this.minProp];
//         }
//         set min(v){
//             this.obj[this.minProp] = v;
//             this.obj[this.maxProp] = Math.max(this.obj[this.maxProp], v + this.minDif);
//         }
//         get max(){
//             return this.obj[this.maxProp];
//         }
//         set max(v){
//             this.obj[this.maxProp] = v;
//             this.min = this.min;
//         }
//     }



//     // const gui = new dat.GUI();
    
//     // gui.addColor(new ColorGUIHelper(dirLight,'color'),'value').name('color');
//     // gui.add(dirLight,'intensity', 0, 2, 0.01);
//     // makeXYZGUI(gui,dirLight.position,'position',()=>{updateLight(dirLight,dirLightHelper)});
//     // makeXYZGUI(gui,dirLight.target.position,'target',()=>{updateLight(dirLight,dirLightHelper)});


//     // const pointLightFolder = gui.addFolder('pointLight');

//     // pointLightFolder.addColor(new ColorGUIHelper(pointLight,'color'),'value').name('color');
//     // pointLightFolder.add(pointLight,'intensity', 0, 2, 0.01);
//     // pointLightFolder.add(pointLight,'distance', 0, 40).onChange(()=>{updateLight(pointLightHelper,pointLightHelper)});
//     // pointLightFolder.open();
//     // makeXYZGUI(gui, pointLight.position, 'pointPosition', ()=>{updateLight(pointLight,pointLightHelper)});
    

//     // const cameraFolder = gui.addFolder('camera');

//     // cameraFolder.add(camera,'fov', 1,180).onChange(updateCamera);
//     // const minMaxGUIHelper = new MinMaxGUIHelper(camera,'near','far',0.1);
//     // cameraFolder.add(minMaxGUIHelper, 'min', 0.1, 50, 0.1).name('near').onChange(updateCamera);
//     // cameraFolder.add(minMaxGUIHelper, 'max', 0.1, 50, 0.1).name('far').onChange(updateCamera);
//     // makeXYZGUI(gui,camera.position,'cameraPosition',updateCamera);
//     // makeXYZGUI(gui,camera.rotation,'cameraRotation',updateCamera);
//     // cameraFolder.open();

//     // gui.close()
   


    
}

Astronaut.prototype.animate = function(){
  function runRequestAniThreeJS(){
    this.requestAniThreeJS = requestAnimationFrame( ()=>runRequestAniThreeJS.call(this));
  
  //     var delta = clock.getDelta();
  //     mixer.update( delta );
    
  //     // controls.update();
  //     // stats.update();
  //     updateCameraMouse();
   
    this.renderer.render( this.scene, this.camera);
  }
  runRequestAniThreeJS.call(this);

}
Astronaut.prototype.getSky = function(size,path){
    let skyGeo = new THREE.SphereGeometry(size, 25,25);
    let skyMesh = new THREE.MeshBasicMaterial( {map:new THREE.TextureLoader().load(path), side:0} );

    let sky = new THREE.Mesh(skyGeo,skyMesh);
    sky.rotation.y = 1;

    return sky;
}

// function onWindowResize() {
//     if(innerHeight < body.scrollHeight){
//         camera.aspect = body.clientWidth / body.scrollHeight;
//     }else{
//         camera.aspect = body.clientWidth / window.innerHeight;
//     }
//     camera.updateProjectionMatrix();

//     if(innerHeight < body.scrollHeight){
//         renderer.setSize( body.clientWidth, body.scrollHeight );
//     }else{
//         renderer.setSize( body.clientWidth, window.innerHeight );
//     }

    
//     // animate();
// }

// function getMouseMove(event){
//     mouseX = (event.clientX - window.innerWidth /2 );
//     mouseY = (event.clientY - window.innerHeight /2 );
// }

// function updateCameraMouse(){
//     // const timer = 0.0001*Date.now();
//     if(cameraChangeAni == null){
//         camera.position.x = ( mouseX * mouseMultiplier) + callClientX ;
//         camera.position.y = ( mouseY * mouseMultiplier) + callClientY ;
//     }
// }
// //





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


// function getSphere(size) {
// 	var geometry = new THREE.SphereGeometry(size, 25,25);
// 	var material = new THREE.MeshPhongMaterial({
// 		color: 'rgb(255,255,255)'
// 	});
// 	var mesh = new THREE.Mesh(
// 		geometry,
// 		material 
//     );
    
//     mesh.receiveShadow = true;

// 	return mesh;
// }



// function pauseAllActions(){
//     for(action in actions){
//         actions[action].pause = true;
//     }
// }
// function stopAllActions(){
//     for(action in actions){
//         actions[action].stop();
//     }
// }

// function executeCrossFade( startAction, endAction, duration ) {


//     setWeight( endAction, 1 );
//     endAction.time = 0;


//     startAction.crossFadeTo( endAction, duration, true );

// }
// function setWeight( action, weight ) {

//     action.enabled = true;
//     action.setEffectiveTimeScale( 1 );
//     action.setEffectiveWeight( weight );

// }

// // function cameraChange(){

// // }





// //---- call three js --------------------------------------------------//










// function callThreeJS(elem){

//     // if(innerHeight < body.scrollHeight){
//     //     camera.aspect = body.clientWidth / body.scrollHeight;
//     // }else{
//     //     camera.aspect = body.clientWidth / window.innerHeight;
//     // }
//     // camera.updateProjectionMatrix();

//     // if(innerHeight < body.scrollHeight){
//     //     renderer.setSize( body.clientWidth, body.scrollHeight );
//     // }else{
//     //     renderer.setSize( body.clientWidth, window.innerHeight );
//     // }


//     pointLight.intensity = 1.5;
//     dirLight.intensity = 1;
//     THREEJS_BlOCKER.style.visibility = 'hidden'

    
//     sky0.material.side = 0;
//     sky1.material.side = 0;
//     sky2.material.side = 0;
//     sky3.material.side = 0;


//     const matchingActions = {'work':'waveAction', 'skill':'walkAction', 'paint':'jumpAction', 'info': 'fallAction'};
    
   


//     if(biggeredElem != null){
//         executeCrossFade(actions[matchingActions[biggeredElem.id]],actions[matchingActions[elem.id]],1.0);
//     }
//     actions[matchingActions[elem.id]].play();
 


//     if(elem.id == 'work'){

//         // sky0.geometry.scale(-1);
//         sky0.material.side = 1;

//         dirLight.position.set(0.4, 6, -2.7);
//         dirLight.color = {r: 0.8, g: 0.45, b: 0.17};
//         pointLight.position.set(1.3, 1.6, 2.6);
//         pointLight.color = {r: 1, g: 0.2, b: 0.14};

//         cameraPositionX = 5 + innerHeight/1400 ;
//         cameraPositionY = 1.3;
//         cameraPositionZ = innerWidth/470 - 0.97
        
//         cameraRotationX = 0;
//         cameraRotationY = 1.7;
//         cameraRotationZ = -0.2;




    
//     }else if (elem.id == 'skill'){

//         // if(biggeredElem != null){
//         //     executeCrossFade(actions[matchingActions[biggeredElem.id]],actions[matchingActions[elem.id]],1.0);
//         // }

//         // actions[matchingActions[elem.id]].play();

//         sky1.material.side = 1;

//         dirLight.position.set(1.3, 4, -2);
//         dirLight.color = {r: 0.74, g: 0.14, b: 1};
//         pointLight.position.set(-2.2, 3, 2);
//         pointLight.color = {r: 1, g: 0.22, b: 0.23};

//         // cameraPositionX = 1;
//         // cameraPositionX = -0.2;
//         cameraPositionX = -0.97 + innerWidth/1000 - innerHeight/2400;
//         cameraPositionY = 1.67 ;
//         cameraPositionZ = 3.27;

//         cameraRotationX = -0.25;
//         cameraRotationY = -0.2;
//         cameraRotationZ = 0;



        
        
//     }else if (elem.id == 'paint') {
      
  
//         sky2.material.side = 1;

//         dirLight.position.set(5.55, 7.77, -6.3);
//         dirLight.color = {r: 1, g: 0.66, b: 0.2};
//         pointLight.position.set(-2.6, 3.6, 4.45);
//         pointLight.color = {r: 0.18, g: 0.67, b: 0.6};

//         // cameraPositionX = 0;
//         // cameraPositionY = 5;
//         // cameraPositionZ = 9;

//         // cameraPositionX = 2.7;
//         // cameraPositionY = 4;
//         // cameraPositionZ = 4;
        
//         cameraPositionX = 4.11- innerWidth/860 + innerHeight/1000; 
//         cameraPositionY = innerWidth/2100 + 3.4;
//         cameraPositionZ = innerWidth/400 + 1.4;



//         cameraRotationX = -1.2;
//         cameraRotationY = 0.9;
//         cameraRotationZ = 01;

//     }else{
        
//         sky3.material.side = 1;

//         dirLight.position.set(4.45, 5.46, 2.7);
//         dirLight.color = {r: 1, g: 0.28, b: 0.83};
//         pointLight.position.set(-3.9, 5.1, 6.2);
//         pointLight.color = {r: 0.36, g: 0.82, b: 1};

//         // cameraPositionX = -0.8;
//         // cameraPositionY = 2.46;
//         // cameraPositionZ = 3.5;

//         // cameraPositionX = -2.15;
//         // cameraPositionY = 3.25;
//         // cameraPositionZ = 3.8;

//         cameraPositionX = -2.5 + innerWidth/1225 - innerHeight/2000;
//         cameraPositionY = 4.44 - innerWidth/2550;
//         cameraPositionZ = 4;

//         cameraRotationX = -0.96;
//         cameraRotationY = -0.65;
//         cameraRotationZ = -0.71;

//     }

    


//     if(biggeredElem != null){
       
//         positionXdiff = (cameraPositionX - camera.position.x) / cameraChangeDuration;
//         positionYdiff = (cameraPositionY - camera.position.y) / cameraChangeDuration;
//         positionZdiff = (cameraPositionZ - camera.position.z) / cameraChangeDuration;

//         rotationXdiff = (cameraRotationX - camera.rotation.x) / cameraChangeDuration;
//         rotationYdiff = (cameraRotationY - camera.rotation.y) / cameraChangeDuration;
//         rotationZdiff = (cameraRotationZ - camera.rotation.z) / cameraChangeDuration;
        
        
  
//         cameraChange();
//     }else{

//         camera.position.x = cameraPositionX;
//         camera.position.y = cameraPositionY;
//         camera.position.z = cameraPositionZ;

//         camera.rotation.x = cameraRotationX;
//         camera.rotation.y = cameraRotationY;
//         camera.rotation.z = cameraRotationZ;


//         callClientX = cameraPositionX;
//         callClientY = cameraPositionY;
//     }
    
    





//     // let getVignetteSize = biggerElem.getBoundingClientRect();
//     // let vignetteRadius = innerWidth * 0.1;



//     // console.log(getVignetteSize)
//     // threeJSVignette.style.background = `linear-gradient(to right, rgba(0,0,0,0.8) ${getVignetteSize.x }px, red ${getVignetteSize.x }px, red ${getVignetteSize.x + getVignetteSize.width }px, rgba(0,0,0,0.6) ${getVignetteSize.x + getVignetteSize.width}px)`;
    
//     // gsap.fromTo(
//     //     threeJSVignette,{
//     //         background:`linear-gradient(to right, rgba(0,0,0,0.8), transparent ${getVignetteSize.x}px, transparent ${getVignetteSize.x + getVignetteSize.width}px,  rgba(0,0,0,0.6)), linear-gradient(to bottom, rgba(0,0,0,0.6), transparent ${getVignetteSize.y }px, transparent ${getVignetteSize.y + getVignetteSize.height }px,  rgba(0,0,0,0.8))`
//     //     },{
//     //         background:`linear-gradient(to right, rgba(0,0,0,0.8), transparent ${getVignetteSize.x - vignetteRadius}px, transparent ${getVignetteSize.x + getVignetteSize.width + vignetteRadius * 2}px,  rgba(0,0,0,0.6)), linear-gradient(to bottom, rgba(0,0,0,0.6), transparent ${getVignetteSize.y - vignetteRadius}px, transparent ${getVignetteSize.y + getVignetteSize.height + vignetteRadius *2}px,  rgba(0,0,0,0.8))`,
//     //         duration:1,
//     //         yoyo:true,
//     //         repeat:-1
//     //     }
//     // )


//     // }else{
//     //     console.log('No it has not',elem,elem.classList)


// // }, 3000);
// }

// function deleteThreeJs(){

//     THREEJS_BlOCKER.style.visibility = 'visible'

//     sky0.material.side = 0;
//     sky1.material.side = 0;
//     sky2.material.side = 0;
//     sky3.material.side = 0;

//     dirLight.intensity = 0;
//     pointLight.intensity = 0;

//     stopAllActions();

// }



// function cameraChange(){
//     cameraMoveframe += 1;
//     cameraChangeAni = requestAnimationFrame(cameraChange);


//     camera.position.x += positionXdiff;
//     camera.position.y += positionYdiff;
//     camera.position.z += positionZdiff;

//     camera.rotation.x += rotationXdiff;
//     camera.rotation.y += rotationYdiff;
//     camera.rotation.z += rotationZdiff;


//     if(!(cameraMoveframe % cameraChangeDuration)){
//         cancelAnimationFrame(cameraChangeAni);
//         cameraChangeAni= null;
//         cameraMoveframe= 0;

//         // console.log(mouseX)
//         callClientX = cameraPositionX - (mouseX * mouseMultiplier);
//         callClientY = cameraPositionY - (mouseY * mouseMultiplier);  
//         return
//     }
// }



