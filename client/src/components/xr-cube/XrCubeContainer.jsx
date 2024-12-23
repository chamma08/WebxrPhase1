import React from "react";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import XrCube from "./XrCube";

const store = createXRStore();

export default function XrCubeContainer() {
  return (
    <>
      <button onClick={() => store.enterAR()} style={
        {
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1,
          padding: "10px",
          borderRadius: "5px",
        }
      }>Enter AR</button>
      <Canvas>
        <XR store={store}>
          <XrCube />
        </XR>
      </Canvas>
    </>
  );
}
