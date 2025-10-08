"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface Product3DViewerProps {
  productType: string;
  color: string;
}

function TShirtModel({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* T-Shirt body */}
      <group>
        {/* Main body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2.5, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Left sleeve */}
        <mesh position={[-1.3, 0.5, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[0.8, 1, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Right sleeve */}
        <mesh position={[1.3, 0.5, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.8, 1, 0.3]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Collar */}
        <mesh position={[0, 1.3, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.2, 16]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </mesh>
  );
}

function HoodieModel({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <group>
        {/* Main body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 2.8, 0.4]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Left sleeve */}
        <mesh position={[-1.4, 0.3, 0]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.9, 1.5, 0.4]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Right sleeve */}
        <mesh position={[1.4, 0.3, 0]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.9, 1.5, 0.4]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Hood */}
        <mesh position={[0, 1.5, 0.1]}>
          <sphereGeometry args={[0.6, 16, 16, 0, Math.PI]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Kangaroo pocket */}
        <mesh position={[0, -0.5, 0.25]}>
          <boxGeometry args={[1.2, 0.8, 0.2]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </mesh>
  );
}

function ToteBagModel({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <group>
        {/* Main bag body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2.5, 0.5]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Left handle */}
        <mesh position={[-0.5, 1.5, 0]}>
          <torusGeometry args={[0.3, 0.08, 8, 16, Math.PI]} />
          <meshStandardMaterial color={color} />
        </mesh>
        
        {/* Right handle */}
        <mesh position={[0.5, 1.5, 0]}>
          <torusGeometry args={[0.3, 0.08, 8, 16, Math.PI]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </mesh>
  );
}

export default function Product3DViewer({ productType, color }: Product3DViewerProps) {
  const renderModel = () => {
    switch (productType) {
      case "hoodie":
        return <HoodieModel color={color} />;
      case "tote":
        return <ToteBagModel color={color} />;
      default:
        return <TShirtModel color={color} />;
    }
  };

  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={0.5} />
        
        {/* Model */}
        {renderModel()}
      </Canvas>
    </div>
  );
}
