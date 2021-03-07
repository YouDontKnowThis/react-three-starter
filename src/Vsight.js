import React, { useState, useRef } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { useSpring, a } from "react-spring/three";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => orbitRef.current.update());

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />;
};

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <a.meshPhysicalMaterial attach="material" color="#1a0313" />
    </mesh>
  );
};

const Box = () => {
  const meshRef = useRef();
  const { clock } = useThree();
  const [active, setActive] = useState(false);
  const props = useSpring({
    move: active ? [0, 0.5, 0.5] : [0, 0, 0],
    rotate: active ? [-1.5, 0.5, 0] : [0, 0, 0],
    scale: active ? [1.1, 1.1, 1.1] : [1, 1, 1],
    color: active ? "#961280" : "gray",
  });

  useFrame(
    () => (meshRef.current.position.y = Math.sin(clock.getElapsedTime()))
  );

  return (
    <a.mesh
      onClick={() => setActive(!active)}
      scale={props.scale}
      position={props.move}
      rotation={props.rotate}
      ref={meshRef}
      receiveShadow
      castShadow
    >
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <a.meshPhysicalMaterial
        attach="material"
        color={props.color}
        roughness={0.5}
        metalness={0.5}
        wireframe={true}
      />
    </a.mesh>
  );
};

const Vsight = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <fog attach="fog" args={["#750453", 5, 15]} />
      {/* <Controls /> */}
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <Plane />
      <Box />
    </Canvas>
  );
};

export default Vsight;
