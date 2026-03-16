"use client";
import * as THREE from "three";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

// ৩ডি স্পিয়ার জিওমেট্রি শেয়ার করা হচ্ছে
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

// ১. পইন্টার কম্পোনেন্ট (মাউস ফলো করার জন্য)
function Pointer({ isActive }: { isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);
  const vec = new THREE.Vector3();

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

// ২. বলগুলোর জন্য কম্পোনেন্ট
function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  material,
  isActive,
}: {
  scale: number;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
  vec?: THREE.Vector3;
}) {
  const api = useRef<RapierRigidBody | null>(null);
  const r = THREE.MathUtils.randFloatSpread;

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

// ৩. মেইন সিন কনটেন্ট (যেখানে টেক্সচার লোড হয়)
function SceneContent({ isActive }: { isActive: boolean }) {
  const imageUrls = [
    "/images/react2.webp",
    "/images/next2.webp",
    "/images/node2.webp",
    "/images/express.webp",
    "/images/mongo.webp",
    "/images/mysql.webp",
    "/images/typescript.webp",
    "/images/javascript.webp",
  ];

  const textures = useLoader(THREE.TextureLoader, imageUrls);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, [textures]);

  const spheres = useMemo(() => 
    [...Array(25)].map(() => ({
      scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
    })), []);

  return (
    <Physics gravity={[0, 0, 0]}>
      <Pointer isActive={isActive} />
      {spheres.map((props, i) => (
        <SphereGeo
          key={i}
          {...props}
          material={materials[Math.floor(Math.random() * materials.length)]}
          isActive={isActive}
        />
      ))}
    </Physics>
  );
}

// ৪. মেইন টেকস্ট্যাক কম্পোনেন্ট
const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 'work' সেকশন অথবা মেইন সেকশন অনুযায়ী অ্যাক্টিভ হবে
      const scrollThreshold = 100; 
      setIsActive(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="font-space-grotesk relative w-full h-[600px] md:h-[800px] bg-black overflow-hidden flex flex-col items-center">
      <h2 className="absolute top-20 text-4xl md:text-6xl font-normal text-white z-10 uppercase tracking-widest opacity-80 pointer-events-none">
        My Techstack
      </h2>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas
          shadows
          gl={{ alpha: true, antialias: true }}
          camera={{ position: [0, 0, 20], fov: 32.5 }}
        >
          <ambientLight intensity={1} />
          <spotLight position={[20, 20, 25]} penumbra={1} castShadow />
          
          <Suspense fallback={null}>
            <SceneContent isActive={isActive} />
            <Environment files="/models/char_enviorment.hdr" />
          </Suspense>

          <EffectComposer enableNormalPass={false}>
            <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
          </EffectComposer>
        </Canvas>
      </div>
    </section>
  );
};

export default TechStack;