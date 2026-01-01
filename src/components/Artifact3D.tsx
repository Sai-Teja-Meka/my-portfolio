import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
  Icosahedron,
  Torus,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function AICore() {
  const coreRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const cageRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2;
    }
    if (cageRef.current) {
        cageRef.current.rotation.x = t * 0.3;
        cageRef.current.rotation.z = t * -0.1;
    }
    // Orbiting rings with different axes for depth
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.y = t * 0.6;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * -0.4;
      ring2Ref.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group ref={coreRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Central Pulsing Core */}
        <Icosahedron args={[0.8, 1]}>
          <MeshDistortMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
            distort={0.3} // Makes it pulse organically
            speed={2}
            wireframe={false}
          />
        </Icosahedron>

        {/* Outer Wireframe Cage */}
        <Sphere ref={cageRef} args={[1.1, 16, 16]}>
            <meshStandardMaterial color="#00ffff" wireframe={true} transparent opacity={0.2} />
        </Sphere>

        {/* Orbiting Data Rings */}
        <Torus ref={ring1Ref} args={[1.6, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#8a2be2" emissive="#8a2be2" emissiveIntensity={0.8} />
        </Torus>

        <Torus ref={ring2Ref} args={[2, 0.03, 16, 100]} rotation={[0, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
        </Torus>
      </Float>
    </group>
  );
}

export function Artifact3D() {
  return (
    <div className="w-full h-full bg-transparent">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        <color attach="background" args={['transparent']} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#purple" />

        <AICore />

        <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate={true}
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI - Math.PI / 3}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}