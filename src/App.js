import { MathUtils } from 'three';
import React, { useRef, useState, Suspense } from 'react';
import './App.scss';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, useGLTF, SpotLight, useDepthBuffer, Environment, Reflector } from '@react-three/drei';

import Character3 from './assets/Character3.jsx';

const deg2rad = degrees => degrees * (Math.PI / 180);

function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[deg2rad(-90), 0, 0]} position={[0, 0, 0]}>
      <planeGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="#2c2c2c" />
    </mesh>
  );
}



const App = () => {
  return (
    <Canvas shadows camera={{ fov: 10, far: 100 }}>
      {/* <fog attach="fog" args={['#1c1c1c', 60, 100]} /> */}
      <OrbitControls />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <spotLight position={[50, 50, -30]} castShadow />
        <Character3 />
        <GroundPlane />
      </Suspense>
    </Canvas>
  );
};

export default App;
