import  avatar from "../../../assets/images/solvety-avatar.png"
import {motion} from 'framer-motion'
import { useState } from 'react'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Avatar = () => {
    // const [animate, setAnimate] = useState(false);
    return (
      

      <Canvas style={{ height: '100vh', width: '100vw', backgroundColor:'#fff' }} camera={{ position: [1, 1.5, 2.5], fov: 50 }} shadows>
        <Experience />         

      </Canvas>
      );







};
export default Avatar


 // <div className="qwesty-avatar" >
        // <motion.img
        //   src={avatar}
        //   alt="qwesty-avatar"
        //   animate={{
        //     rotate: [0,5,-5],
        //     scale: [1,1.1,1,0.9],
        //     x:  [0, 10,  -10],
        //     y: [0, 20, -20],
        //     filter:  "hue-rotate(0deg) brightness(120%)"
             
        //   }}
        //   transition={{
        //     repeat:Infinity,
        //     duration: 15,
        //         }}
        //   onMouseEnter={() => setAnimate(true)}
        //   onMouseLeave={() => setAnimate(false)}
        // />
        // </div>