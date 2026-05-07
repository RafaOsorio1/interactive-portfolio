import {
  Float,
  MeshDistortMaterial,
  PointMaterial,
  Points,
  Sphere,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const count = 2000;
const particles = new Float32Array(count * 3);
for (let i = 0; i < count; i++) {
  particles[i * 3] = (Math.random() - 0.5) * 15;
  particles[i * 3 + 1] = (Math.random() - 0.5) * 15;
  particles[i * 3 + 2] = (Math.random() - 0.5) * 15;
}

const DataNode = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -time * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

      <Float speed={3} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1.4, 64, 64]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Points
        ref={pointsRef}
        positions={particles}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </>
  );
};

export const Scene = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
      >
        <DataNode />
      </Canvas>
    </div>
  );
};
