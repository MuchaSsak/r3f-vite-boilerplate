import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

import LoadingCube from "@/canvases/components/LoadingCube";

function ExampleCanvas() {
  // TODO: Replace !== with ===
  const isDebugMode = window.location.hash !== "#debug";
  const controls = useControls({ test: 1 });
  console.log(controls);

  return (
    <Canvas
      camera={{
        fov: 45,
        far: 1000,
      }}
    >
      {/* Controls */}
      <OrbitControls />

      {/* Lighting */}
      <ambientLight />

      {/* Performance monitor */}
      {isDebugMode && <Perf position="top-left" />}

      <Suspense fallback={<LoadingCube />}>
        <axesHelper />
      </Suspense>
    </Canvas>
  );
}

export default ExampleCanvas;
