"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Decal, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import { CupIllustration } from "@/components/visuals/cup-illustration";

function useBrandTexture() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;

    const context = canvas.getContext("2d");

    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#173f2c";
      context.strokeStyle = "#173f2c";
      context.lineCap = "round";
      context.lineJoin = "round";

      context.lineWidth = 15;
      context.beginPath();
      context.moveTo(256, 199);
      context.bezierCurveTo(255, 164, 253, 128, 251, 92);
      context.stroke();

      context.beginPath();
      context.moveTo(245, 143);
      context.bezierCurveTo(190, 137, 164, 103, 163, 60);
      context.bezierCurveTo(216, 66, 245, 92, 245, 143);
      context.fill();

      context.beginPath();
      context.moveTo(264, 126);
      context.bezierCurveTo(281, 79, 316, 62, 360, 69);
      context.bezierCurveTo(348, 112, 315, 137, 264, 126);
      context.fill();

      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "700 79px Arial, sans-serif";
      context.fillText("RE-CUP", 256, 286);

      context.font = "600 19px Arial, sans-serif";
      context.fillText("RETHINK  ·  RETURN  ·  REGROW", 256, 350);
    }

    const nextTexture = new THREE.CanvasTexture(canvas);
    nextTexture.colorSpace = THREE.SRGBColorSpace;
    nextTexture.anisotropy = 8;
    return nextTexture;
  }, []);

  useEffect(() => () => texture.dispose(), [texture]);

  return texture;
}

function CupModel() {
  const brandTexture = useBrandTexture();

  return (
    <group rotation={[-0.035, -0.13, 0]} scale={1.1}>
      <mesh castShadow>
        <cylinderGeometry args={[0.84, 0.65, 2.25, 96, 8, false]} />
        <meshStandardMaterial color="#b98553" roughness={0.88} metalness={0} />
        <Decal
          position={[0, -0.12, 0.805]}
          rotation={[0, 0, 0]}
          scale={[0.63, 0.7, 0.24]}
          map={brandTexture}
          depthTest
          polygonOffsetFactor={-6}
        />
      </mesh>

      <mesh position={[0, -1.13, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.645, 0.026, 12, 72]} />
        <meshStandardMaterial color="#9b693d" roughness={1} />
      </mesh>

      <mesh position={[0, 1.145, 0]} castShadow>
        <cylinderGeometry args={[0.93, 0.87, 0.15, 96]} />
        <meshStandardMaterial color="#f5efe2" roughness={0.58} />
      </mesh>
      <mesh position={[0, 1.085, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.87, 0.058, 18, 96]} />
        <meshStandardMaterial color="#eee5d6" roughness={0.64} />
      </mesh>
      <mesh position={[0, 1.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.84, 0.018, 12, 96]} />
        <meshStandardMaterial color="#855934" roughness={1} />
      </mesh>
      <mesh position={[0, 1.255, 0]} castShadow>
        <cylinderGeometry args={[0.795, 0.91, 0.19, 96]} />
        <meshStandardMaterial color="#fbf7ee" roughness={0.52} />
      </mesh>
      <mesh position={[0, 1.355, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow>
        <circleGeometry args={[0.795, 96]} />
        <meshStandardMaterial color="#fffaf1" roughness={0.48} />
      </mesh>
      <mesh position={[0, 1.34, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.775, 0.024, 12, 96]} />
        <meshStandardMaterial color="#e5dccd" roughness={0.68} />
      </mesh>

      <mesh position={[0, 1.362, 0.34]} castShadow>
        <boxGeometry args={[0.28, 0.018, 0.085]} />
        <meshStandardMaterial color="#b9b0a3" roughness={0.72} />
      </mesh>
    </group>
  );
}

function CursorParallaxCup() {
  const cupGroup = useRef<THREE.Group>(null);
  const cursorTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorTarget = (event: PointerEvent) => {
      if (event.buttons !== 0) {
        return;
      }

      cursorTarget.current.x = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      cursorTarget.current.y = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    };

    const centerCup = () => {
      cursorTarget.current.x = 0;
      cursorTarget.current.y = 0;
    };

    window.addEventListener("pointermove", updateCursorTarget, { passive: true });
    window.addEventListener("pointerdown", centerCup, { passive: true });
    window.addEventListener("blur", centerCup);
    document.addEventListener("mouseleave", centerCup);

    return () => {
      window.removeEventListener("pointermove", updateCursorTarget);
      window.removeEventListener("pointerdown", centerCup);
      window.removeEventListener("blur", centerCup);
      document.removeEventListener("mouseleave", centerCup);
    };
  }, []);

  useFrame((_state, delta) => {
    const group = cupGroup.current;

    if (!group) {
      return;
    }

    const blend = 1 - Math.exp(-delta * 4.5);
    const { x, y } = cursorTarget.current;

    group.position.x = THREE.MathUtils.lerp(group.position.x, x * 0.09, blend);
    group.position.y = THREE.MathUtils.lerp(group.position.y, -0.03 - y * 0.055, blend);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, y * 0.028, blend);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -x * 0.022, blend);
  });

  return (
    <group ref={cupGroup} position={[0, -0.03, 0]}>
      <CupModel />
    </group>
  );
}

function CupScene() {
  return (
    <>
      <ambientLight intensity={0.48} />
      <hemisphereLight color="#fff7e8" groundColor="#6a432b" intensity={1.1} />
      <directionalLight
        position={[-3.5, 5.5, 4.5]}
        intensity={2.25}
        color="#fff0d2"
        castShadow
      />
      <directionalLight position={[4, 1, 3]} intensity={0.7} color="#a9c595" />
      <spotLight
        position={[0, 5, 4]}
        intensity={0.7}
        angle={0.42}
        penumbra={0.8}
        color="#ffffff"
      />

      <CursorParallaxCup />

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.29}
        scale={5.5}
        blur={2.6}
        far={3.2}
        color="#3a2417"
      />

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.72}
        minPolarAngle={Math.PI * 0.34}
        maxPolarAngle={Math.PI * 0.62}
        target={[0, 0.03, 0]}
      />
    </>
  );
}

export function HeroCupExperience() {
  const [supportsScene, setSupportsScene] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wideEnough = window.matchMedia("(min-width: 768px)");

    const updateSupport = () => {
      const probe = document.createElement("canvas");
      const webgl = Boolean(probe.getContext("webgl2") || probe.getContext("webgl"));
      setSupportsScene(!reducedMotion.matches && wideEnough.matches && webgl);
    };

    const frame = window.requestAnimationFrame(updateSupport);
    reducedMotion.addEventListener("change", updateSupport);
    wideEnough.addEventListener("change", updateSupport);

    return () => {
      window.cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", updateSupport);
      wideEnough.removeEventListener("change", updateSupport);
    };
  }, []);

  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[34rem]"
      aria-hidden="true"
    >
      {supportsScene ? (
        <div className="absolute inset-0 z-0 cursor-grab touch-none active:cursor-grabbing">
          <Canvas
            camera={{ position: [0, 0.08, 6.25], fov: 35 }}
            dpr={[1, 1.65]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            shadows="basic"
          >
            <CupScene />
          </Canvas>
        </div>
      ) : null}

      <div className="pointer-events-none relative z-10">
        <CupIllustration cupOpacityClassName={supportsScene ? "opacity-0" : "opacity-100"} />
      </div>

      {supportsScene ? (
        <div className="pointer-events-none absolute bottom-[7%] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-forest/15 bg-cream-light/85 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-forest shadow-sm backdrop-blur-sm">
          Giữ trên ly và kéo để xoay 360°
        </div>
      ) : null}
    </div>
  );
}
