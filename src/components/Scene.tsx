import { OrthographicCamera } from "@react-three/drei"

function Scene() {
  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[5, 5, 5]}
        zoom={50}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <mesh rotation={[0.5, -0.5, 0]}>
        <boxGeometry args={[2, 2.8, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  )
}

export default Scene