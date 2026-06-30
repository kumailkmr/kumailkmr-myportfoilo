/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export function AIBrain() {
  const outerGroupRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const dataStreamsRef = useRef<THREE.Points>(null);
  
  // Create circular data streams representing "thinking/automation"
  // Generate points using useMemo to avoid pure-function warnings
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const ring = i % 3;
      const angle = (Math.random() * Math.PI * 2);
      const radius = 1.8 + Math.random() * 0.4;
      
      let x = 0, y = 0, z = 0;
      
      if (ring === 0) {
        x = Math.cos(angle) * radius;
        z = Math.sin(angle) * radius;
        y = (Math.random() - 0.5) * 0.2;
      } else if (ring === 1) {
        y = Math.cos(angle) * radius;
        z = Math.sin(angle) * radius;
        x = (Math.random() - 0.5) * 0.2;
      } else {
        x = Math.cos(angle) * radius;
        y = Math.sin(angle) * radius;
        z = (Math.random() - 0.5) * 0.2;
      }
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.y = time * 0.2;
      outerGroupRef.current.rotation.x = time * 0.1;
      outerGroupRef.current.rotation.z = time * 0.05;
    }
    
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y = -time * 0.3;
      innerCoreRef.current.rotation.x = -time * 0.2;
      
      // Subtle pulse effect on the core
      const scale = 1 + Math.sin(time * 2) * 0.05;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }
    
    if (dataStreamsRef.current) {
      dataStreamsRef.current.rotation.y = time * 0.5;
      dataStreamsRef.current.rotation.x = time * 0.3;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        
        {/* Outer Wireframe Shield */}
        <group ref={outerGroupRef}>
          <mesh>
            <icosahedronGeometry args={[1.2, 1]} />
            <meshStandardMaterial 
              color="#06b6d4" // Cyan
              emissive="#0891b2"
              emissiveIntensity={0.8}
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>
        </group>

        {/* Inner Solid Core */}
        <mesh ref={innerCoreRef}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial 
            color="#2563EB" // Electric Blue
            emissive="#3b82f6"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Orbiting Data Streams */}
        <Points ref={dataStreamsRef} positions={particles}>
          <PointMaterial
            transparent
            color="#22d3ee" // Cyan glowing dots
            size={0.03}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.8}
          />
        </Points>

      </Float>
    </group>
  );
}
