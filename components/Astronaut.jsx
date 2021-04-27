import { useRef, useState, memo, Suspense, useEffect, useContext} from "react";
import { Canvas , useFrame, useLoader } from '@react-three/fiber'
// import { useGLTF } from "@react-three/drei";
import {PerspectiveCamera} from "@react-three/drei";
import { GLTFLoader } from '../public/assets/gltf/scripts/GLTFLoader.js';
// import Model from './Astronaut_v07'
import * as THREE from 'three';
import { EnableClickContext} from './HomeLayout.jsx';


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
    state.camera.lookAt(0,1,0)
  })

  return  (
      <primitive object={gltf.scene} />
    )
    
  
}


function Astronaut(props){

  return(
    <div id='canvas-container'>
      <Canvas camera={{position:[0,0,5]}}>
        <Suspense fallback={null}>
          {/* <PerspectiveCamera position={[0,0,15]}  /> */}
          <pointLight intensity={1} color="rgb(220,51,35)" position={[-1,3,2]}/>
          <directionalLight intensity={1} color="rgb(43,174,212)" position={[1.5,4,-2]}/>
          <Model vals = {props.vals}/>
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