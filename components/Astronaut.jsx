import { useRef, useState, memo, Suspense, useEffect, useContext, useCallback} from "react";
import { Canvas , useFrame, useLoader, useThree } from '@react-three/fiber';
import {gsap} from 'gsap';
import { callAstronaut } from '../public/assets/js/utilities.js'

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

function Rig(props) {
  console.log('-------Rig-----------' )
  const { camera } = useThree();
  const [camGoal,setCamGoal] = useState({position:{x:0,y:0,z:5}, rotation:{x:0,y:0,z:0}, on:false});
  const vec = new THREE.Vector3();
  // let mouseX= 0;
  // let mouseY= 0;
  var lastMove = Date.now();
  
  useEffect(()=>{
    if(props.vals.clickContext.menuExtended!==false){
      setCamGoal( {on:true, ...callAstronaut(props.vals.clickContext.biggerElemParentId)} );
    }
  },[props.vals.clickContext])
  
  const mouseMoveHandler = (e)=>{
    if (Date.now() - lastMove < 30) { 
      return;
    } else {
      lastMove = Date.now();
    }

    camera.position.x = e.clientX * 0.001;
    camera.position.y = camGoal.position.y;
    camera.position.z = camGoal.position.z;
    // mouseX = e.clientX;
    // mouseY = e.clientY;
    console.log("in mousemove event mouseX",e.clientX,camera.position.x)
  }
    

  useEffect(() => {
    if (camGoal.on===false){
      window.addEventListener("mousemove", mouseMoveHandler);
    }
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  },[camGoal]);

  
  useFrame(() =>{
    // console.log('mouse',mouse.x)
    if(camGoal.on ===false){
      // console.log('if')
      // console.log('mouseX', mouseX)
      // camera.position.lerp(vec.set(mouseX * 10, mouseY * 10, camera.position.z), 0.1)
    }else{
      // console.log('else')
      camera.position.lerp(vec.set(camGoal.position.x,camGoal.position.y,camGoal.position.z), 0.1)
      console.log(camGoal.position.x,camera.position.x)
      if(camGoal.position.x === parseFloat(camera.position.x.toFixed(2))) {
        setCamGoal({...camGoal, on:false});
        console.log('camGoal.on',camGoal.on)
      }

    }
  })
  return <>
  {/* <Mouse vals={setCamGoal}/> */}
  </>
}
function Mouse(props){
  
  const mouseMoveHandler = (e)=>{
    // mouseX = e.clientX;
    // mouseY = e.clientY;
    console.log('mouseX ',e.clientX)
    props.va
  }
  useEffect(() => {
    // if (clickContext.menuExtended!=false){
    //   console.log('addEventListener')
      window.addEventListener("mousemove", mouseMoveHandler);
    // }
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  },[]);

  return <></>
}
function Astronaut(props){
  const [pixelRatio, setPixelRatio] = useState(1);
  const clickContext = useContext(ClickContext);
  const cameraRef = useRef(null);
  console.log('---------Astronaut----------')

  useEffect(()=>{ 
    setPixelRatio(window.devicePixelRatio)
    // dirLitRef.current.target = [-3,0,0];
  },[])
  // useEffect(()=>{
  //   if(clickContext.menuExtended!==false){
  //     const camGoal = callAstronaut(clickContext.biggerElemParentId);
  //     if(clickContext.biggeredElem ===null){
  //       cameraRef.current.position.x = camGoal.position.x;
  //       cameraRef.current.position.y = camGoal.position.y;
  //       cameraRef.current.position.z = camGoal.position.z;
    
  //       cameraRef.current.rotation.x = camGoal.rotation.x;
  //       cameraRef.current.rotation.y = camGoal.rotation.y;
  //       cameraRef.current.rotation.z = camGoal.rotation.z;
  //     }else{
  //       gsap.to(cameraRef.current.position,{
  //         duration:1,
  //         x:camGoal.position.x,
  //         y:camGoal.position.y,
  //         z:camGoal.position.z,
  //         ease:"none"
  //       })
  //       gsap.to(cameraRef.current.rotation,{
  //         duration:1,
  //         x:camGoal.rotation.x,
  //         y:camGoal.rotation.y,
  //         z:camGoal.rotation.z,
  //         ease:"none"
  //       },0)
  //     }
  //   }
  // },[clickContext])
  
  // const mouseMoveHandler = (e)=>{
  //   // mouseX = e.clientX;
  //   // mouseY = e.clientY;
  //   console.log('mouseX ',e.clientX)
  // }
  // useEffect(() => {
  //   // if (clickContext.menuExtended!=false){
  //   //   console.log('addEventListener')
  //     window.addEventListener("mousemove", mouseMoveHandler);
  //   // }
  //   return () => window.removeEventListener("mousemove", mouseMoveHandler);
  // },[clickContext]);

  return(
    <div id='canvas-container' >
      <Canvas 
        colorManagement
        camera={{position: [0,0,5]}} 
        gl={{ antialias: false, powerPreference:"high-performance" }} 
        dpr = {pixelRatio}
        onCreated={canvasCtx => {canvasCtx.gl.physicallyCorrectLights = true}}
        flat = {THREE.ACESFilmicToneMapping}
        linear = {THREE.sRGBEncoding}
        >
        <Suspense fallback={null}>
          {/* <PerspectiveCamera ref={cameraRef} position={[0,0,5]} makeDefault lookAt={new THREE.Vector3(0, 1, 0)}/> */}
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
          <Rig vals = {{clickContext}}/>
        </Suspense>
      </Canvas>
    </div>
  )
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