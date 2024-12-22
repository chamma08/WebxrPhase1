import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function () {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += 0.03;
  });
  return (
    <>
      <mesh ref={cubeRef} position={[0, 0, -3]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}
