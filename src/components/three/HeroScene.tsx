"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, MeshTransmissionMaterial, PerformanceMonitor, Sparkles } from "@react-three/drei";
import { useState, useRef } from "react";
import { MathUtils, type Group } from "three";

type SceneProps = { active: boolean; lite: boolean; onReady: () => void };

/* ---------- Glasskulptur ---------- */

function Sculpture({ lite }: { lite: boolean }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Langsame Eigenrotation + sanftes Nachziehen zur Mausposition
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, state.pointer.y * 0.35, 2.5, delta);
    group.current.rotation.z = MathUtils.damp(group.current.rotation.z, -state.pointer.x * 0.25, 2.5, delta);
    group.current.position.x = MathUtils.damp(group.current.position.x, 0.6 + state.pointer.x * 0.25, 2, delta);
  });

  return (
    <group ref={group} position-x={0.6} scale={0.82}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh>
          <torusKnotGeometry args={[1, 0.34, lite ? 128 : 200, lite ? 20 : 32]} />
          {lite ? (
            // Günstiges Material für Handys: schillernd statt echter Lichtbrechung
            <meshPhysicalMaterial
              color="#c9d6ff"
              metalness={0.15}
              roughness={0.08}
              iridescence={1}
              iridescenceIOR={1.6}
              clearcoat={1}
            />
          ) : (
            <MeshTransmissionMaterial
              backside
              samples={4}
              resolution={256}
              thickness={0.7}
              roughness={0.04}
              ior={1.45}
              chromaticAberration={0.45}
              anisotropicBlur={0.2}
              distortion={0.35}
              distortionScale={0.4}
              temporalDistortion={0.12}
              color="#eef2ff"
            />
          )}
        </mesh>
      </Float>
    </group>
  );
}

/* ---------- Farbige Lichtkugeln hinter dem Glas – werden darin gebrochen ---------- */

function Orbs() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * 0.08;
  });

  return (
    // Dicht hinter dem Knoten: Sie sind fast nur durch das Glas hindurch zu sehen
    <group ref={group} position={[0.6, 0, -2]}>
      <mesh position={[-0.7, 0.5, 0]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshBasicMaterial color="#5b8cff" toneMapped={false} />
      </mesh>
      <mesh position={[0.8, -0.5, -0.3]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#9b7bff" toneMapped={false} />
      </mesh>
      <mesh position={[0.2, 0.9, -0.5]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ---------- Studio-Licht ohne externe HDR-Datei ---------- */

function Studio() {
  return (
    <Environment resolution={128}>
      <group rotation={[-Math.PI / 3, 0, 1]}>
        <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
        <Lightformer form="ring" color="#5b8cff" intensity={6} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={4} />
        <Lightformer form="rect" color="#9b7bff" intensity={5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 4, 1]} />
      </group>
    </Environment>
  );
}

const MAX_DPR = 1.5;

export default function HeroScene({ active, lite, onReady }: SceneProps) {
  const [dpr, setDpr] = useState(lite ? 1 : MAX_DPR);

  return (
    <Canvas
      // Außerhalb des Sichtbereichs wird nicht gerendert → spart Akku & GPU
      frameloop={active ? "always" : "never"}
      dpr={dpr}
      onCreated={() => requestAnimationFrame(onReady)}
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      {/* Fällt die Bildrate, wird die Auflösung gesenkt – flüssig schlägt gestochen scharf */}
      <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(lite ? 1 : MAX_DPR)} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Orbs />
      <Sculpture lite={lite} />
      <Sparkles count={lite ? 30 : 60} scale={[10, 6, 4]} size={1.6} speed={0.3} opacity={0.6} color="#a8c0ff" />
      <Studio />
    </Canvas>
  );
}
