import { useRef, useState, memo, Suspense, useEffect, useContext} from "react";
import { Canvas , useFrame, useLoader } from '@react-three/fiber'
// import { useGLTF } from "@react-three/drei";
import {PerspectiveCamera} from "@react-three/drei";
import { GLTFLoader } from '../public/assets/gltf/scripts/GLTFLoader.js';
// import Model from './Astronaut_v07'
import * as THREE from 'three';
import { EnableClickContext} from './HomeLayout.jsx';


function Model() {
  const gltf = useLoader(GLTFLoader, './assets/gltf/astronaut_v07.gltf');
  const mixer = new THREE.AnimationMixer(gltf.scene);
  const actionNumb = useRef({work:'waveAction', skill:'walkAction', paint:'jumpAction', info: 'fallAction'})


  const fallAction = useRef(mixer.clipAction( gltf.animations[ 0 ] ).stop());
  const jumpAction = useRef(mixer.clipAction( gltf.animations[ 1 ] ).stop());
  const walkAction = useRef(mixer.clipAction( gltf.animations[ 2 ] ).stop());
  const waveAction = useRef(mixer.clipAction( gltf.animations[ 3 ] ).stop());


  gltf.scene.traverse(child=>{
    if(child.isMesh){
      child.castShadow = true;
    }
  })
  useFrame((state, delta)=>{
    mixer.update(delta)
  })
  return  (

    // <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    // </Suspense>

    )
    
  
}


function Astronaut(){

  return(
    <div id='canvas-container'>
      <Canvas camera={{position:[0,0,5]}}>
        <Suspense fallback={null}>
          {/* <PerspectiveCamera position={[0,0,15]}  /> */}
          <pointLight intensity={1} color="rgb(220,51,35)" position={[-1,3,2]}/>
          <directionalLight intensity={1} color="rgb(43,174,212)" position={[1.5,4,-2]}/>
          <Model/>
        </Suspense>
      </Canvas>
    </div>
  )
}

// function getSphereGeometry(size){
//   return(
//     <mesh>
//       <sphereGeometry/>
//       <meshBasicMaterial args={size,25,25}/>
//     </mesh>
//   )
// }

export default Astronaut