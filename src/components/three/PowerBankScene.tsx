"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import PowerBankModel from "./PowerBankModel";

export default function PowerBankScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }} className="cursor-grab active:cursor-grabbing">
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <PowerBankModel />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
