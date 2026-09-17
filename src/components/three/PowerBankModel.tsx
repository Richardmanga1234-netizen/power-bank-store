"use client";

// Temporary procedural stand-in for the real product, built to the visible
// proportions and finish of the reference photography (flat rounded slab,
// dark mirror-glass top panel, diagonal accent striping, LED readout, lit
// edge, port cluster). Swap in `/public/models/powerbank.glb` later — the
// group below is the single attach point for a real GLTF scene.

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import type { Group, Mesh } from "three";
import type { ColorId } from "@/lib/product";

const BODY_COLOR: Record<ColorId, string> = {
  black: "#0c0c0e",
  red: "#8f1420",
};

function useDisplayTexture() {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 96;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#eaf6ff";
      ctx.font = "700 56px 'Courier New', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "#7dd3fc";
      ctx.shadowBlur = 18;
      ctx.fillText("100%", canvas.width / 2, canvas.height / 2 + 2);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

export default function PowerBankModel({
  color = "black",
}: {
  color?: ColorId;
}) {
  const groupRef = useRef<Group>(null);
  const edgeRef = useRef<Mesh>(null);
  const displayTexture = useDisplayTexture();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.045;
    }
    if (edgeRef.current) {
      const mat = edgeRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.1 + Math.sin(t * 1.6) * 0.35;
    }
  });

  const bodyColor = BODY_COLOR[color];

  return (
    <group ref={groupRef} rotation={[0.32, -0.55, 0]}>
      {/* Body */}
      <RoundedBox args={[2.3, 0.42, 1.1]} radius={0.09} smoothness={4} castShadow receiveShadow>
        <meshPhysicalMaterial
          color={bodyColor}
          metalness={0.65}
          roughness={0.35}
          clearcoat={0.4}
        />
      </RoundedBox>

      {/* Mirror-glass top panel */}
      <RoundedBox
        args={[2.18, 0.05, 0.98]}
        radius={0.07}
        smoothness={4}
        position={[0, 0.235, 0]}
      >
        <meshPhysicalMaterial
          color="#050506"
          metalness={0.9}
          roughness={0.06}
          clearcoat={1}
          clearcoatRoughness={0.05}
          reflectivity={1}
        />
      </RoundedBox>

      {/* Diagonal chrome accent stripes on the glass */}
      {[[-0.35, 1], [0.05, 0.75], [0.35, 0.55]].map(([offset, opacity], i) => (
        <mesh
          key={i}
          position={[offset as number, 0.262, 0]}
          rotation={[-Math.PI / 2, 0, 0.62]}
        >
          <planeGeometry args={[0.16, 1.5]} />
          <meshStandardMaterial
            color="#dfe7ef"
            metalness={0.4}
            roughness={0.2}
            transparent
            opacity={opacity as number}
          />
        </mesh>
      ))}

      {/* LED percentage display */}
      <mesh position={[0.7, 0.263, 0.02]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.46, 0.18]} />
        <meshBasicMaterial map={displayTexture} toneMapped={false} />
      </mesh>

      {/* Lit front edge */}
      <mesh ref={edgeRef} position={[0, 0.21, 0.545]}>
        <boxGeometry args={[2.15, 0.035, 0.02]} />
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#7dd3fc"
          emissiveIntensity={1.2}
          toneMapped={false}
        />
      </mesh>

      {/* Port cluster + power button on the end face */}
      <group position={[1.16, 0, 0]}>
        {[-0.36, -0.2, -0.02, 0.16].map((z, i) => (
          <RoundedBox
            key={i}
            args={[0.02, 0.09, 0.1]}
            radius={0.015}
            position={[0, 0.02, z]}
          >
            <meshStandardMaterial color="#050506" metalness={0.2} roughness={0.8} />
          </RoundedBox>
        ))}
        <mesh position={[0.015, -0.08, 0.4]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.045, 0.045, 0.02, 24]} />
          <meshStandardMaterial color="#1a1a1d" metalness={0.5} roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
