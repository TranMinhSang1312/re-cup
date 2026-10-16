"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

import { CupIllustration } from "@/components/visuals/cup-illustration";

function drawTrackedText(
  context: CanvasRenderingContext2D,
  text: string,
  centerX: number,
  y: number,
  tracking: number,
) {
  const glyphs = [...text];
  const width = glyphs.reduce(
    (total, glyph, index) =>
      total + context.measureText(glyph).width + (index < glyphs.length - 1 ? tracking : 0),
    0,
  );
  let x = centerX - width / 2;

  glyphs.forEach((glyph, index) => {
    context.fillText(glyph, x, y);
    x += context.measureText(glyph).width + (index < glyphs.length - 1 ? tracking : 0);
  });
}

function useCoconutFiberTextures() {
  const sourceTexture = useTexture("/textures/coconut-fiber-albedo-v2.webp");
  const textures = useMemo(() => {
    const colorMap = sourceTexture.clone();
    colorMap.colorSpace = THREE.SRGBColorSpace;
    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
    colorMap.repeat.set(2, 1.82);
    colorMap.anisotropy = 8;
    colorMap.needsUpdate = true;

    const bumpMap = sourceTexture.clone();
    bumpMap.colorSpace = THREE.NoColorSpace;
    bumpMap.wrapS = bumpMap.wrapT = THREE.RepeatWrapping;
    bumpMap.repeat.copy(colorMap.repeat);
    bumpMap.anisotropy = 8;
    bumpMap.needsUpdate = true;

    return { colorMap, bumpMap };
  }, [sourceTexture]);

  useEffect(
    () => () => {
      textures.colorMap.dispose();
      textures.bumpMap.dispose();
    },
    [textures],
  );

  return textures;
}

function useBrandTexture() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 768;
    canvas.height = 1024;

    const context = canvas.getContext("2d");

    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#173f2c";
      context.strokeStyle = "#173f2c";
      context.lineCap = "round";
      context.lineJoin = "round";

      context.lineWidth = 20;
      context.beginPath();
      context.moveTo(384, 338);
      context.bezierCurveTo(383, 282, 378, 227, 372, 172);
      context.stroke();

      context.beginPath();
      context.moveTo(369, 292);
      context.bezierCurveTo(284, 273, 245, 220, 249, 147);
      context.bezierCurveTo(326, 160, 366, 208, 369, 292);
      context.fill();

      context.beginPath();
      context.moveTo(395, 268);
      context.bezierCurveTo(420, 187, 477, 157, 548, 171);
      context.bezierCurveTo(522, 247, 468, 286, 395, 268);
      context.fill();

      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "700 132px Arial, sans-serif";
      context.fillText("RE-CUP", 384, 476);

      context.lineWidth = 10;
      context.beginPath();
      context.moveTo(288, 570);
      context.lineTo(480, 570);
      context.stroke();

      context.font = "700 48px Arial, sans-serif";
      drawTrackedText(context, "RETHINK", 384, 662, 16);
      drawTrackedText(context, "RETURN", 384, 746, 16);
      drawTrackedText(context, "REGROW", 384, 830, 16);
    }

    const nextTexture = new THREE.CanvasTexture(canvas);
    nextTexture.colorSpace = THREE.SRGBColorSpace;
    nextTexture.anisotropy = 8;
    return nextTexture;
  }, []);

  useEffect(() => () => texture.dispose(), [texture]);

  return texture;
}

function useCupGeometry() {
  const geometry = useMemo(() => {
    const profile = [
      new THREE.Vector2(0, -1.1),
      new THREE.Vector2(0.5, -1.1),
      new THREE.Vector2(0.57, -1.095),
      new THREE.Vector2(0.595, -1.06),
      new THREE.Vector2(0.607, -0.99),
      new THREE.Vector2(0.605, -0.93),
      new THREE.Vector2(0.6, -0.9),
      new THREE.Vector2(0.87, 0.99),
      new THREE.Vector2(0.88, 1.025),
      new THREE.Vector2(0.895, 1.055),
      new THREE.Vector2(0.897, 1.08),
      new THREE.Vector2(0.888, 1.105),
      new THREE.Vector2(0.868, 1.128),
      new THREE.Vector2(0.84, 1.138),
      new THREE.Vector2(0.812, 1.132),
      new THREE.Vector2(0.79, 1.115),
      new THREE.Vector2(0.776, 1.09),
      new THREE.Vector2(0.773, 1.06),
      new THREE.Vector2(0.78, 1.025),
      new THREE.Vector2(0.79, 0.99),
      new THREE.Vector2(0.525, -0.89),
      new THREE.Vector2(0, -0.89),
    ];
    const nextGeometry = new THREE.LatheGeometry(profile, 192);
    const positions = nextGeometry.getAttribute("position");
    const sourceUv = nextGeometry.getAttribute("uv");
    const uv = new Float32Array(positions.count * 2);

    for (let index = 0; index < positions.count; index += 1) {
      const y = positions.getY(index);
      uv[index * 2] = sourceUv.getX(index);
      uv[index * 2 + 1] = (y + 1.1) / 2.248;
    }

    nextGeometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    const sourceIndex = nextGeometry.getIndex();

    if (sourceIndex) {
      const profileSegments = profile.length - 1;
      const surfaceRanges = [
        [0, 7],
        [7, 19],
        [19, profileSegments],
      ] as const;
      const groupedIndices: number[] = [];

      nextGeometry.clearGroups();
      surfaceRanges.forEach(([firstStrip, endStrip], materialIndex) => {
        const groupStart = groupedIndices.length;

        for (let segment = 0; segment < 192; segment += 1) {
          for (let strip = firstStrip; strip < endStrip; strip += 1) {
            const sourceStart = (segment * profileSegments + strip) * 6;

            for (let offset = 0; offset < 6; offset += 1) {
              groupedIndices.push(sourceIndex.getX(sourceStart + offset));
            }
          }
        }

        nextGeometry.addGroup(
          groupStart,
          groupedIndices.length - groupStart,
          materialIndex,
        );
      });
      nextGeometry.setIndex(groupedIndices);
    }

    return nextGeometry;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return geometry;
}

function CupModel() {
  const brandTexture = useBrandTexture();
  const geometry = useCupGeometry();
  const fiberTextures = useCoconutFiberTextures();

  return (
    <group scale={1.12}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          attach="material-0"
          color="#ffffff"
          map={fiberTextures.colorMap}
          bumpMap={fiberTextures.bumpMap}
          bumpScale={0.014}
          roughness={0.97}
          metalness={0}
          side={THREE.DoubleSide}
        />
        <meshStandardMaterial
          attach="material-1"
          color="#f4ddbf"
          map={fiberTextures.colorMap}
          bumpMap={fiberTextures.bumpMap}
          bumpScale={0.011}
          roughness={0.98}
          metalness={0}
          side={THREE.DoubleSide}
        />
        <meshStandardMaterial
          attach="material-2"
          color="#9b6a47"
          map={fiberTextures.colorMap}
          bumpMap={fiberTextures.bumpMap}
          bumpScale={0.008}
          roughness={0.99}
          metalness={0}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh position={[0, -0.09, 0]}>
        <cylinderGeometry args={[0.79, 0.65, 0.98, 56, 1, true, -0.62, 1.24]} />
        <meshStandardMaterial
          map={brandTexture}
          transparent
          alphaTest={0.03}
          depthWrite={false}
          polygonOffset
          polygonOffsetFactor={-8}
          roughness={0.9}
          metalness={0}
        />
      </mesh>
    </group>
  );
}

function CursorParallaxCup({ dragActive }: { dragActive: { current: boolean } }) {
  const cupGroup = useRef<THREE.Group>(null);
  const cursorTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorTarget = (event: PointerEvent) => {
      if (dragActive.current || event.buttons !== 0) {
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
  }, [dragActive]);

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
  const dragActive = useRef(false);

  return (
    <>
      <ambientLight intensity={0.62} />
      <hemisphereLight color="#fffaf2" groundColor="#74513a" intensity={0.92} />
      <directionalLight
        position={[-3.5, 5.5, 4.5]}
        intensity={2.45}
        color="#fff8ec"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00015}
        shadow-normalBias={0.015}
      />
      <directionalLight position={[4, 1, 3]} intensity={0.48} color="#c4d2b6" />
      <spotLight
        position={[0, 5, 4]}
        intensity={0.45}
        angle={0.42}
        penumbra={0.8}
        color="#ffffff"
      />
      <pointLight position={[0, 2.8, 2.2]} intensity={0.34} distance={6} color="#fff8ee" />

      <CursorParallaxCup dragActive={dragActive} />

      <ContactShadows
        position={[0, -1.3, 0]}
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
        minPolarAngle={Math.PI * 0.27}
        maxPolarAngle={Math.PI * 0.7}
        target={[0, -0.03, 0]}
        onStart={() => {
          dragActive.current = true;
        }}
        onEnd={() => {
          dragActive.current = false;
        }}
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

    updateSupport();
    const supportCheck = window.setTimeout(updateSupport, 160);
    reducedMotion.addEventListener("change", updateSupport);
    wideEnough.addEventListener("change", updateSupport);

    return () => {
      window.clearTimeout(supportCheck);
      reducedMotion.removeEventListener("change", updateSupport);
      wideEnough.removeEventListener("change", updateSupport);
    };
  }, []);

  return (
    <div
      className="hero-cup-stage relative mx-auto aspect-[4/5] w-full max-w-[34rem]"
      aria-hidden="true"
    >
      {supportsScene ? (
        <div className="absolute inset-0 z-0 cursor-grab touch-none active:cursor-grabbing">
          <Canvas
            camera={{ position: [0, 2.1, 6.05], fov: 35 }}
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

    </div>
  );
}
