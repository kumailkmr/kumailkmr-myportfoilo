"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { ReactNode } from "react";

interface SceneProps {
  children: ReactNode;
}

export function Scene({ children }: SceneProps) {
  return (
    <div className="w-full h-full absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {children}
        <Preload all />
      </Canvas>
    </div>
  );
}
