"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export function AIBrain() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create random points for the neural network particles
  const [positions] = useMemo(() => {
    const count = 400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Random positions within a sphere
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 1.2 + Math.random() * 1.8; // radius between 1.2 and 3
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central AI Core - Glowing Torus Knot */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <torusKnotGeometry args={[0.8, 0.25, 128, 32]} />
          <meshStandardMaterial 
            color="#2563EB" 
            emissive="#1D4ED8"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Orbiting Neural Particles */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Points positions={positions}>
          <PointMaterial
            transparent
            color="#3B82F6"
            size={0.04}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.8}
          />
        </Points>
      </Float>
    </group>
  );
}
