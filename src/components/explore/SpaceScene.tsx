import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import type { Mesh } from "three";

function DriftingObject({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.75}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function SpaceScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#05060f"]} />
      <fog attach="fog" args={["#05060f", 12, 40]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[10, 10, 10]} intensity={180} color="#8ba7ff" />
      <pointLight position={[-10, -6, -8]} intensity={90} color="#ff7ad9" />

      <Stars
        radius={120}
        depth={60}
        count={6000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <DriftingObject position={[-3, 0.5, -1]} color="#6d8bff" scale={1.1} />
      <DriftingObject position={[3.2, -1, 0]} color="#ff7ad9" scale={0.8} />
      <DriftingObject position={[0, 2.2, -3]} color="#7affd1" scale={0.6} />

      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={18}
        autoRotate
        autoRotateSpeed={0.4}
        enableDamping
      />
    </Canvas>
  );
}
