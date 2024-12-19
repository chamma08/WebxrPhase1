import React from "react";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import XrCube from "./XrCube";

const store = createXRStore();

export default function XrCubeContainer() {
  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <XrCube />
        </XR>
      </Canvas>
    </>
  );
}
