import { MeshNormalMaterial } from "three"
import { OrbitControls } from "@react-three/drei"
import Avatar from "../../Avatar";

function Experience() {
  return (
   <>
   <OrbitControls/>
   <ambientLight intensity={1}/>
      <directionalLight position={[-0, 50, 50]} castShadow shadow-mapSize={1024} />
      <group position={[0, -1, 0]}>  
        <Avatar/>
      </group>
   <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
   </>
  )
}
export default Experience