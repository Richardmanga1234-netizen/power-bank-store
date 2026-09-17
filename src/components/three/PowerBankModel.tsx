"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Cylinder } from "@react-three/drei";
import type { Group } from "three";

export default function PowerBankModel() {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[1.1, 2.2, 0.35]} radius={0.12} smoothness={4}>
        <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.25} />
      </RoundedBox>
      <Cylinder
        args={[0.05, 0.05, 0.1, 16]}
        position={[0, 1.15, 0.05]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.6} />
      </Cylinder>
      {[0.25, 0, -0.25].map((y) => (
        <RoundedBox
          key={y}
          args={[0.5, 0.08, 0.02]}
          radius={0.02}
          position={[0, y, 0.19]}
        >
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={y === 0 ? 1 : 0.3}
          />
        </RoundedBox>
      ))}
    </group>
  );
}
