import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";
export const Me = () => {
  const computer = useGLTF("./gamer_desktop/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.85} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive object={computer.scene}
      scale={0.75}
      position={[2, -2.8, -1.8]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export const MeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense /* fallback={<CanvasLoader />} */>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Me/>
      </Suspense>
      <Preload all/>
    </Canvas>
  );
};
