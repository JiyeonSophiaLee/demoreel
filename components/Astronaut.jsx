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
    // state.camera.lookAt( 0,1,0)
  })

  return  (
      <primitive object={gltf.scene} />
    )
    
  
}


function Astronaut(props){
  const [pixelRatio, setPixelRatio] = useState(1);
  const dirLitRef = useRef();

  useEffect(()=>{ 
    setPixelRatio(window.devicePixelRatio)
    dirLitRef.current.target = [-3,0,0];
  },[])

  return(
    <div id='canvas-container'>
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
          <PerspectiveCamera position={[0,0,5]} makeDefault lookAt={new THREE.Vector3(0, 1, 0)}/>
          <pointLight intensity={1} color="rgb(220,51,35)" position={[-1,3,2]} />
          <directionalLight ref={dirLitRef} intensity={10} color="rgb(43,174,212)" position={[1.5,4,-2]} />
          <Sky size={16} path={'./assets/images/hdr/space_00.jpg'}/>
          <Sky size={16} path={'./assets/images/hdr/space_01.jpg'}/>
          <Sky size={16} path={'./assets/images/hdr/space_02.jpg'}/>
          <Sky size={16} path={'./assets/images/hdr/space_03.jpg'}/>
          <Model vals = {props.vals}/>
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

export default Astronaut