import { MathUtils } from 'three';
import React, { useRef, useState, Suspense } from 'react';
import './App.scss';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useGLTF, SpotLight, useDepthBuffer, Environment, Reflector } from '@react-three/drei';

import Character3 from './assets/Character3.jsx';

function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}



const App = () => {
  return (
    <Canvas concurrent shadows camera={{ fov: 20, far: 100, position: [0, -10, 50], zoom: 1.5 }}>
      {/* <ambientLight intensity={0.1} /> */}
      <OrbitControls />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <Character3 />
        <GroundPlane />
      </Suspense>
    </Canvas>
  );
};

export default App;
