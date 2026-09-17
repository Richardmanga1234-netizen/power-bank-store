"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import PowerBankModel from "./PowerBankModel";
import type { ColorId } from "@/lib/product";

// Lighting is fully local (no HDR environment fetch) so the scene never
// depends on network access to render its reflections.
export default function PowerBankScene({
  color = "black",
}: {
  color?: ColorId;
}) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.1, 4.4], fov: 32 }}
      className="cursor-grab touch-none active:cursor-grabbing"
      dpr={[1, 1.75]}
    >
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#7dd3fc" />
      <pointLight position={[0, 2.5, 2]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-2, -1, 2]} intensity={0.3} color="#7dd3fc" />
      <Suspense fallback={null}>
        <PowerBankModel color={color} />
        <ContactShadows
          position={[0, -0.32, 0]}
          opacity={0.55}
          scale={6}
          blur={2.4}
          far={2}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.9}
      />
    </Canvas>
  );
}
