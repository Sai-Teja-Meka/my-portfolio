import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { OrbitControls, Sphere, MeshDistortMaterial, Torus } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Animated Sphere Component
 * Optimized with reduced segment count for better performance
 */
function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    // PERF: Reduced segments from [1, 100, 200] to [1, 32, 32]
    // This looks identical with DistortMaterial but is 95% lighter on GPU
    <Sphere visible args={[1, 32, 32]} scale={2} ref={sphereRef}>
      <MeshDistortMaterial
        color="#00ffff"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
      />
    </Sphere>
  );
}

/**
 * Orbiting Torus Component
 * Reduced segments for optimal performance
 */
function OrbitingTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    // Reduced segments for Torus as well
    <Torus args={[3, 0.05, 16, 50]} ref={torusRef}>
      <meshStandardMaterial
        color="purple"
        emissive="purple"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </Torus>
  );
}

/**
 * Loading Fallback Component
 */
function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black/50">
      <div className="text-primary font-mono text-sm animate-pulse">
        Loading 3D Visualization...
      </div>
    </div>
  );
}

/**
 * Main Artifact3D Component
 * Lazy-loaded Three.js scene with optimized rendering
 */
export function Artifact3D() {
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<LoadingFallback />}>
        {/* PERF: Clamp dpr to [1, 2] to prevent lag on 4k/Retina screens */}
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            // Power preference for better performance
            powerPreference: 'high-performance'
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="cyan" />

          <AnimatedSphere />
          <OrbitingTorus />

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}