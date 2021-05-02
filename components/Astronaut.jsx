import { useRef, useState, memo, Suspense, useEffect, useContext, useCallback} from "react";
import { Canvas , useFrame, useLoader, useThree } from '@react-three/fiber';
import {gsap} from 'gsap';

// import { useGLTF } from "@react-three/drei";
import {PerspectiveCamera} from "@react-three/drei";
import { GLTFLoader } from '../public/assets/gltf/scripts/GLTFLoader.js';
// import Model from './Astronaut_v07'
import * as THREE from 'three';
import { ClickContext} from './HomeLayout.jsx';

function Model(props) {
  const gltf = useLoader(GLTFLoader, './assets/gltf/astronaut_v07.gltf');
  const mixer = useRef(new THREE.AnimationMixer(gltf.scene));

  const fallAction = useRef(mixer.current.clipAction( gltf.animations[ 0 ] ));
  const jumpAction = useRef(mixer.current.clipAction( gltf.animations[ 1 ] ));
  const walkAction = useRef(mixer.current.clipAction( gltf.animations[ 2 ] ));
  const waveAction = useRef(mixer.current.clipAction( gltf.animations[ 3 ] ));

  useEffect(()=>{
    props.vals.astronautActions.current = {work: waveAction, skill: walkAction, paint: jumpAction, info: fallAction }
  },[])
  


  gltf.scene.traverse(child=>{
    if(child.isMesh){
      child.castShadow = true;
    }
  })
  useFrame((state, delta)=>{
    mixer.current.update(delta);
    // state.camera.lookAt( 0,1,0)
  })

  return  (
      <primitive object={gltf.scene} />
    )
    
  
}

function Rig() {
  const clickContext = useContext(ClickContext)
  const { camera } = useThree()
  // const vec = new THREE.Vector3()

  console.log('Rif is called',clickContext);

  
 
  // // camera.position.lerp(vec.set(mouse.x * 30, mouse.y * 110, camera.position.z), 20)
  return <mesh onPointerMove={(e)=>console.log('ee',e)}/>
}
function Astronaut(props){
  const [pixelRatio, setPixelRatio] = useState(1);
  const clickContext = useContext(ClickContext);
  const cameraRef = useRef(null);
  console.log('props.vals.cameraRef', props.vals.cameraRef)

  useEffect(()=>{ 
    setPixelRatio(window.devicePixelRatio)
    // dirLitRef.current.target = [-3,0,0];
  },[])
  useEffect(()=>{
    if(clickContext.menuExtended!==false){
      const camGoal = callAstronaut(clickContext.biggerElemParentId);
      console.log('camGoal',camGoal)
      if(clickContext.biggeredElem ===null){
        cameraRef.current.position.x = camGoal.position.x;
        cameraRef.current.position.y = camGoal.position.y;
        cameraRef.current.position.z = camGoal.position.z;
    
        cameraRef.current.rotation.x = camGoal.rotation.x;
        cameraRef.current.rotation.y = camGoal.rotation.y;
        cameraRef.current.rotation.z = camGoal.rotation.z;
      }else{
        gsap.to(cameraRef.current.position,{
          duration:1,
          x:camGoal.position.x,
          y:camGoal.position.y,
          z:camGoal.position.z,
          ease:"none"
        })
        gsap.to(cameraRef.current.rotation,{
          duration:1,
          x:camGoal.rotation.x,
          y:camGoal.rotation.y,
          z:camGoal.rotation.z,
          ease:"none"
        },0)
      }
    }
  },[clickContext])


  return(
    <div id='canvas-container' >
      <Canvas 
        colorManagement
        camera={{position:[0,0,5]}} 
        gl={{ antialias: false, powerPreference:"high-performance" }} 
        dpr = {pixelRatio}
        onCreated={canvasCtx => {canvasCtx.gl.physicallyCorrectLights = true}}
        flat = {THREE.ACESFilmicToneMapping}
        linear = {THREE.sRGBEncoding}
        >
        <Suspense fallback={null}>
          <PerspectiveCamera ref={cameraRef} position={[0,0,5]} makeDefault lookAt={new THREE.Vector3(0, 1, 0)}/>
          <pointLight intensity={1} color="rgb(220,51,35)" position={[-1,3,2]}  />
          <directionalLight 
            castShadow 
            intensity={1} 
            color="rgb(43,174,212)"
            position={[1.5,4,-2]}
            shadow-mapSize-width = {1024}
            shadow-mapSize-height = {1024}
            shadow-camera-far={40}
            shadow-camera-near={0.1}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
              />
          <Sphere size={5} />
          <Sky size={16} path={'./assets/images/hdr/space_00.jpg'}/>
          <Sky size={16} path={'./assets/images/hdr/space_01.jpg'}/>
          <Sky size={16} path={'./assets/images/hdr/space_02.jpg'}/>
          <Sky size={16} path={'./assets/images/hdr/space_03.jpg'}/>
          <Model vals = {props.vals}/>
          {/* <Rig/> */}
        </Suspense>
      </Canvas>
    </div>
  )
}

function callAstronaut(elemId){

  let camGoal = {position:{x:null, y:null, z:null},
                 rotation:{x:null, y:null, z:null}}
    if(elemId === 'work'){
      camGoal.position.x = 5 + innerHeight/1400 ;
      camGoal.position.y = 1.3;
      camGoal.position.z = innerWidth/470 - 0.97
      
      camGoal.rotation.x = 0;
      camGoal.rotation.y = 1.7;
      camGoal.rotation.z = -0.2;
    }else if(elemId === 'skill'){
      camGoal.position.x = 0.05 + innerWidth/1000 - innerHeight/2400;
      camGoal.position.y = 1.67 ;
      camGoal.position.z = 3.27;

      camGoal.rotation.x = -0.25;
      camGoal.rotation.y = -0.2;
      camGoal.rotation.z = 0;
    }else if(elemId === 'paint'){
      camGoal.position.x = 4.11- innerWidth/860 + innerHeight/1000; 
      camGoal.position.y = innerWidth/2100 + 3.4;
      camGoal.position.z = innerWidth/400 + 1.4;

      camGoal.rotation.x = -1.2;
      camGoal.rotation.y = 0.9;
      camGoal.rotation.z = 1;
    }else if(elemId === 'info'){
      camGoal.position.x = -2.5 + innerWidth/1225 - innerHeight/2000;
      camGoal.position.y = 4.44 - innerWidth/2550;
      camGoal.position.z = 4;

      camGoal.rotation.x = -0.96;
      camGoal.rotation.y = -0.65;
      camGoal.rotation.z = -0.71;
    }

    return camGoal

    // // if(biggeredElem ===null){
    // //   camera.position.x = camGoalPositionX;
    // //   camera.position.y = camGoalPositionY;
    // //   camera.position.z = camGoalPositionZ;
  
    // //   camera.rotation.x = camGaolRotationX;
    // //   camera.rotation.y = camGaolRotationY;
    // //   camera.rotation.z = camGaolRotationZ;
    // // }else{
    //   cameraChange(camera,{x:camGoalPositionX, y:camGoalPositionY, z:camGoalPositionZ},{x:camGaolRotationX, y:camGaolRotationY, z:camGaolRotationZ})
    // // }

    // // gsap.to(camera.position,{
    // //   duration:1,
    // //   x:camGoalPositionX,
    // //   y:camGoalPositionY,
    // //   z:camGoalPositionZ,
    // //   ease:"none"
    // // })
    // // gsap.to(camera.rotation,{
    // //   duration:1,
    // //   x:camGaolRotationX,
    // //   y:camGaolRotationY,
    // //   z:camGaolRotationZ,
    // //   ease:"none"
    // // },0)
    // // callClientX = cameraPositionX;
    // // callClientY = cameraPositionY;


}
function Sky(props){
  return(
    <mesh>
      <sphereGeometry attach="geometry" args={[props.size,25,25]}/>
      <meshBasicMaterial attach="material" map={ new THREE.TextureLoader().load(props.path)} side={THREE.BackSide}/>
    </mesh>
  )
}
function Sphere(props){
  return(
    <mesh receiveShadow position={[0,-props.size,0]}>
      <sphereGeometry attach="geometry" args={[props.size,25,25]}/>
      <meshPhongMaterial attach="material" color={'rgb(100,100,100)'} side={THREE.FrontSide} shininess={10} />
    </mesh>
  )
}
export default Astronaut