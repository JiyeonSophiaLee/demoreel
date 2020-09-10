import * as THREE from '/assets/THREE_js/script/three.module.js';
import {GLTFLoader} from '/assets/THREE_js/script/GLTFLoader.js';
// import {RGBELoader} from '/assets/THREE_js/script/RGBELoader.js';
import {RoughnessMipmapper} from '/assets/THREE_js/script/RoughnessMipmapper.js';
import {OrbitControls} from '/assets/THREE_js/script/OrbitControls.js';
import Stats from '/assets/THREE_js/script/stats.module.js';
import {GUI} from '/assets/THREE_js/script/dat.gui.module.js'


var container, controls;
var camera, scene, renderer, hemiLight, dirLight, pointLight, sky1;
var cameraPositionX, cameraPositionY, cameraPositionZ;
var model, skeleton, mixer, actions, walkAction ,stats;
var mouseX, mouseY;

var clock = new THREE.Clock();

        
init();
animate();





function init() {

    // container = document.createElement( 'div' );
    container = document.getElementById( 'threeJS' );
    document.body.appendChild( container );
    
    stats = new Stats();
    container.appendChild(stats.dom);

    mouseX = 0;
    mouseY = 0;
    
    
    renderer = new THREE.WebGLRenderer( { antialias: false} );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    // renderer.domElement.style.width = renderer.domElement.width*0.8 +'px';
    // renderer.domElement.style.height = renderer.domElement.height*0.8 +'px';
    renderer.shadowMap.enabled = true;

    container.appendChild( renderer.domElement );


    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.25, 100 );
    cameraPositionX = 1;
    cameraPositionY = 2;
    cameraPositionZ = 3;
    camera.position.set(cameraPositionX,cameraPositionY,cameraPositionZ);
    camera.lookAt(new THREE.Vector3(0, 1, 0));

    
    scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(5));

    

    const sky1Geo = new THREE.SphereGeometry(7, 25,25);
    const sky1Mesh = new THREE.MeshBasicMaterial( {map:new THREE.TextureLoader().load('/assets/images/hdr/shutterstock_1168717975.jpg'), side:THREE.DoubleSide} );

    sky1 = new THREE.Mesh(sky1Geo,sky1Mesh);


    scene.add(sky1);

    


//     let textureLoader = new THREE.TextureLoader()
//     let sky = textureLoader.load('/assets/images/hdr/shutterstock_1168717975.jpg',()=>{
//     });

//     scene.background =new THREE.WebGLRenderTargetCube(512, 512).fromEquirectangularTexture(renderer,sky);


    

    
    pointLight = new THREE.PointLight('rgb(220,51,35)', 1 ,20);
    pointLight.position.set(-1,3,2,4);
    pointLight.intensity = 0;
    dirLight = new THREE.DirectionalLight('rgb(43,174,212)', 1,20);
    dirLight.position.set(1.5,4,-2);
    dirLight.target.position.x = -3;
    dirLight.castShadow = true;
    dirLight.shadow.bias = -0.001;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;
    dirLight.intensity = 0;
    
    
    scene.add(pointLight);
    scene.add(dirLight);
    
    const dirLightHelper = new THREE.DirectionalLightHelper(dirLight);
    const pointLightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(dirLightHelper);
    scene.add(pointLightHelper);
    updateLight(dirLight,dirLightHelper);
    updateLight(pointLight,pointLightHelper);


    

    

    // use of RoughnessMipmapper is optional
    var roughnessMipmapper = new RoughnessMipmapper( renderer );

    var loader = new GLTFLoader().setPath( 'assets/THREE_js/' );
    loader.load( 'astronaut_v04_walking_reduce.gltf', function ( gltf ) {

        model = gltf.scene;
        scene.add(model)

        gltf.scene.traverse( function ( child ) {



            if ( child.isMesh ) {
                
                
                // if(Object.isMesh) 
                // Object.castShadow = true;

                child.castShadow = true;
                // child.receiveShadow = true;
                // const newMaterial = new THREE.MeshPhongMaterial();
                // child.material.type = 'MeshPhongMaterial';
                // child.material = newMaterial

                
    

                // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
                roughnessMipmapper.generateMipmaps( child.material );
                if(child.material.map) child.material.map.anisotropy = 16;

            }
            

        } );

        skeleton = new THREE.SkeletonHelper(model);
        skeleton.visible = false;
        scene.add(skeleton);

        mixer = new THREE.AnimationMixer( model );
        walkAction = mixer.clipAction( gltf.animations[ 0 ] ).play();
        actions = [walkAction];


        pauseAllActions();

        roughnessMipmapper.dispose();

       

    } );

    let ground = getSphere(5);
    ground.position.y = -ground.geometry.parameters.radius;

    // ground.rotation.x = -Math.PI/2;
    scene.add(ground);
    

    // let box = getBox(2,2,2);
    // box.position.y = box.geometry.parameters.height/2;
    // scene.add(box);
    

     // let ground = getPlane(1000);
    // ground.rotation.x = -Math.PI/2;
    // scene.add(ground);


    // class ColorGUIHelper{
    //     constructor(object,prop){
    //         this.object = object;
    //         this.prop = prop;
    //     }
    //     get value(){
    //         return `#${this.object[this.prop].getHexString()}`;
    //     }
    //     set value(){
    //         this.obejct[this.prop].set(hexString);
    //     }
    // };




    window.addEventListener('mousemove',getMouseMove, false);
    window.addEventListener( 'resize', onWindowResize, false );

    

    WORK.addEventListener('click',()=>{callThreeJS(WORK)});
    SKILL.addEventListener('click',()=>{callThreeJS(SKILL)});
    PAINT.addEventListener('click',()=>{callThreeJS(PAINT)});
    INFO.addEventListener('click',()=>{callThreeJS(INFO)});

    
    
   

    controls = new OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', animate ); // use if there is no animation loop
    controls.minDistance = 2;
    controls.maxDistance = 30;
    controls.target.set( 0, 0, - 0.2 );
    // controls.update();
    



    class ColorGUIHelper{
        constructor(object, prop){
            this.object = object;
            this.prop = prop;
        }
        get value(){
            return `#${this.object[this.prop].getHexString()}`;
        }
        set value(hexString){
            this.object[this.prop].set(hexString);
        }
    }
    class MinMaxGUIHelper {
        constructor(obj, minProp, maxProp, minDif){
            this.obj = obj;
            this.minProp = minProp;
            this.maxProp = maxProp;
            this.minDif = minDif;
        }
        get min(){
            return this.obj[this.minProp];
        }
        set min(v){
            this.obj[this.minProp] = v;
            this.obj[this.maxProp] = Math.max(this.obj[this.maxProp], v + this.minDif);
        }
        get max(){
            return this.obj[this.maxProp];
        }
        set max(v){
            this.obj[this.maxProp] = v;
            this.min = this.min;
        }
    }


    const gui = new GUI();
    
    gui.addColor(new ColorGUIHelper(dirLight,'color'),'value').name('color');
    gui.add(dirLight,'intensity', 0, 2, 0.01);
    makeXYZGUI(gui,dirLight.position,'position',()=>{updateLight(dirLight,dirLightHelper)});
    makeXYZGUI(gui,dirLight.target.position,'target',()=>{updateLight(dirLight,dirLightHelper)});


    const pointLightFolder = gui.addFolder('pointLight');

    pointLightFolder.addColor(new ColorGUIHelper(pointLight,'color'),'value').name('color');
    pointLightFolder.add(pointLight,'intensity', 0, 2, 0.01);
    pointLightFolder.add(pointLight,'distance', 0, 40).onChange(()=>{updateLight(pointLightHelper,pointLightHelper)});
    pointLightFolder.open();
    makeXYZGUI(gui, pointLight.position, 'pointPosition', ()=>{updateLight(pointLight,pointLightHelper)});
    

    const cameraFolder = gui.addFolder('camera');

    cameraFolder.add(camera,'fov', 1,180).onChange(updateCamera);
    const minMaxGUIHelper = new MinMaxGUIHelper(camera,'near','far',0.1);
    cameraFolder.add(minMaxGUIHelper, 'min', 0.1, 50, 0.1).name('near').onChange(updateCamera);
    cameraFolder.add(minMaxGUIHelper, 'max', 0.1, 50, 0.1).name('far').onChange(updateCamera);
    makeXYZGUI(gui,camera.position,'cameraPosition',updateCamera);
    cameraFolder.open();
   



    
}


function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    
    animate();
}
function getMouseMove(event){
    mouseX = (event.clientX - window.innerWidth /2 );
    mouseY = (event.clientY -window.innerHeight /2 );
}

//

function animate(){
    requestAnimationFrame( animate );
  
    var delta = clock.getDelta();
    mixer.update( delta );
    
    // controls.update();
    stats.update();
    // updateCameraMouse();
    
    renderer.render( scene, camera);
}



function makeXYZGUI(gui, vector3, name, onChangeFn){
    const folder = gui.addFolder(name);
    folder.add(vector3, 'x', -10,10).onChange(onChangeFn);
    folder.add(vector3, 'y', 0,10).onChange(onChangeFn);
    folder.add(vector3, 'z', -10,10).onChange(onChangeFn);
    folder.open();
}

function updateLight(light,helper){
    
    if(light.type == "DirectionalLight") light.target.updateMatrixWorld();
    helper.update();
}

function updateCamera(){
    camera.updateProjectionMatrix();
}

function updateCameraMouse(){
    // const timer = 0.0001*Date.now();
    camera.position.x = ( mouseX * 0.001 + cameraPositionX) ;
    camera.position.y = ( - mouseY * 0.001 + cameraPositionY) ;
}



function getPlane(size){
    var geometry = new THREE.PlaneGeometry(size, size);

    // var textureLoader = new THREE.TextureLoader();

	var material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);
	mesh.receiveShadow = true;
	

	return mesh;
}

function getBox(w, h, d) {
	var geometry = new THREE.BoxGeometry(w, h, d);
	var material = new THREE.MeshPhongMaterial({
		color: 'rgb(120,120,120)'
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);
	mesh.castShadow = true;
	mesh.receiveShadow = true;

	return mesh;
}


function getSphere(size) {
	var geometry = new THREE.SphereGeometry(size, 25,25);
	var material = new THREE.MeshPhongMaterial({
		color: 'rgb(255,255,255)'
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
    );
    
    mesh.receiveShadow = true;

	return mesh;
}


function pauseAllActions(){
    actions.forEach(function(action){
        action.paused = true;
    })
}







//---- call three js --------------------------------------------------//





function callThreeJS(elem){
    pointLight.intensity = 1;
    dirLight.intensity = 1;
    document.getElementById('threejsBlocker').style.background = 'none'
    if(WORK.classList.contains('callThreeJS')){
        pauseAllActions();
        actions[0].paused = false;
        // scene.add(sky1);
    };
}









