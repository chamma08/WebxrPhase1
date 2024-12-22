import { OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import { useXR, useXRHitTest } from "@react-three/xr";

export default function XrHitCube() {
  const reticleRef = useRef();

  useXR();

  useXRHitTest((hit, hitMatrix) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.rotation,
      reticleRef.current.scale
    );
  });
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.1, 0.25, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
}
