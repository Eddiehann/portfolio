import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { CardProps } from './types'
import { CARD_DEPTH, HOVER_LIFT_DIRECTION, TRANSLATE_DISTANCE } from './const'
import { SCENE_ROTATION } from '../../const/global'

function Card({
  position,
  width,
  height,
  renderOrder,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: CardProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!meshRef.current) return
    const target = isHovered
      ? [
        position[0] + HOVER_LIFT_DIRECTION.x * TRANSLATE_DISTANCE,
        position[1] + HOVER_LIFT_DIRECTION.y * TRANSLATE_DISTANCE,
        position[2] + HOVER_LIFT_DIRECTION.z * TRANSLATE_DISTANCE,
      ]
      : position

    meshRef.current.position.x += (target[0] - meshRef.current.position.x) * 0.1
    meshRef.current.position.y += (target[1] - meshRef.current.position.y) * 0.1
    meshRef.current.position.z += (target[2] - meshRef.current.position.z) * 0.1
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={SCENE_ROTATION}
      renderOrder={renderOrder}
      onPointerOver={(e) => { e.stopPropagation(); onHoverStart() }}
      onPointerOut={(e) => { e.stopPropagation(); onHoverEnd() }}
    >
      <boxGeometry args={[width, height, CARD_DEPTH]} />
      <meshStandardMaterial
        color="#dadada"
        roughness={0.4}
        metalness={0.1}
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  )
}

export default Card