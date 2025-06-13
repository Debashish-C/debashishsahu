"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Mesh, MeshStandardMaterial, Color, Object3D, DoubleSide } from "three";

export const ModelViewer: React.FC = () => {
  return (
    <div className="h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        gl={{ alpha: true }} // transparent background
      >
        {/* Glowing cyan-ish lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 2]} intensity={2} color="#00ffff" />
        <pointLight position={[-2, -2, 1]} intensity={1.5} color="#00ffff" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          intensity={1}
          color="#88f0ff"
        />

        <EthereumModel />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
};

const EthereumModel: React.FC = () => {
  const { scene } = useGLTF("/ethereum-logo.glb");
  const modelRef = useRef<Object3D>(null);

  useEffect(() => {
    // Apply glowing silver material
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        mesh.material = new MeshStandardMaterial({
          color: new Color("#C0C0C0"), // silver
          metalness: 1,
          roughness: 0.3,
          emissive: new Color("#26C6DA"), // cyan glow
          emissiveIntensity: 0.25,
          side: DoubleSide,
        });
      }
    });
  }, [scene]);

  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta / 2;
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={0.7}
      position={[0, -0.2, 0]}
    />
  );
};
