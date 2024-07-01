import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

const Avatar = (props) => {
  const [color, setColor] = useState('purple'); // State to hold the color
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/avatar.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();

    // Change the material color dynamically
    if (nodes.unamed && color) {
      nodes.unamed.material = new MeshStandardMaterial({ color });
    }
  }, [actions, names, nodes, color]);

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  // Call generateRandomColor when component mounts to set initial color
  useEffect(() => {
    generateRandomColor();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[-0.33, -0.011, -0.114]} rotation={[Math.PI / 2, 0, 0]} scale={0.009}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh castShadow name="unamed" geometry={nodes.unamed.geometry} material={nodes.unamed.material} skeleton={nodes.unamed.skeleton} />
        </group>
      </group>
    </group>
  );
};

export default Avatar;

useGLTF.preload('/models/avatar.glb');
