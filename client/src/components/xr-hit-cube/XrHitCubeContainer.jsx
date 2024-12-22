import React from "react";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import XrHitCube from "./XrHitCube";

const store = createXRStore();

export default function XrHitCubeContainer() {
  return (
    <>
      <button
        onClick={() => store.enterAR()}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1,
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        sessioninit={{
          requiredFeatures: ["hit-test"],
        }}
      >
        Enter AR
      </button>
      <Canvas>
        <XR store={store}>
          <XrHitCube />
        </XR>
      </Canvas>
    </>
  );
}
