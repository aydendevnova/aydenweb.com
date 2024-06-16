"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useEffect, MutableRefObject } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type GLTFModelProps = {
  path: string;
};

function GLTFModel({ path }: GLTFModelProps) {
  const ref = useRef<THREE.Object3D>(null);

  // Use useFrame to add rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Controls the speed of the rotation
    }
  });
  useEffect(() => {
    const handleScroll = () => {
      const rotation = window.scrollY / 500; // Adjust this divisor to control the sensitivity
      if (ref.current) {
        ref.current.rotation.x = rotation;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { scene } = useGLTF(path);
  scene.rotation.y += 0.01; // Optionally, start with an initial rotation offset if needed
  return <primitive object={scene} ref={ref} />;
}

const ModelViewer = () => {
  const controlsRef = useRef(null);

  return (
    <Canvas
      camera={{
        position: [180, 150, 180], // Starting position at a 45-degree angle
        fov: 75,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <GLTFModel path="cube.glb" />
      </Suspense>
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        maxDistance={300}
        minDistance={300}
      />
    </Canvas>
  );
};

export default ModelViewer;
