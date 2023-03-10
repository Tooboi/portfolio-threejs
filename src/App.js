import { MathUtils } from 'three';
import React, { useRef, useState, Suspense } from 'react';
import './App.scss';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useGLTF, SpotLight, useDepthBuffer, Environment, Reflector } from '@react-three/drei';

import Character3 from './assets/Character3.jsx';
import Overlay from "./assets/Overlay.jsx"

const deg2rad = degrees => degrees * (Math.PI / 180);

function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[deg2rad(-90), 0, 0]} position={[0, 0, -10]}>
      <planeGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="#2c2c2c" />
    </mesh>
  );
}



const App = () => {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <>
    <Canvas shadows camera={{ fov: 10, far: 100, near: 0.1, position: [0, 0, 60] }}>
      {/* <fog attach="fog" args={['#1c1c1c', 60, 100]} /> */}
      {/* <OrbitControls /> */}
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <spotLight position={[50, 50, -30]} castShadow />
        <Character3 scroll={scroll} />
        {/* <GroundPlane /> */}
      </Suspense>
    </Canvas>
    <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  );
};

export default App;
