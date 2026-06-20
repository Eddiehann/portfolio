import type { CardProps } from './types'
import { CARD_DIMENSIONS, CARD_ROTATION } from './const'

function Card({ position, index }: CardProps) {
  return (
    <mesh
      position={position}
      rotation={CARD_ROTATION}
      renderOrder={-index}
    >
      <boxGeometry args={CARD_DIMENSIONS} />
      <meshStandardMaterial
        color="#ffffff"
        roughness={0.4}
        metalness={0.1}
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  )
}

export default Card