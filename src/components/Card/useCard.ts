import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { calculateHoverPosition } from './utils'

export function useCard(
  position: [number, number, number],
  isHovered: boolean,
) {
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!ref.current) return
    const target = calculateHoverPosition(position, isHovered)
    ref.current.position.x += (target[0] - ref.current.position.x) * 0.1
    ref.current.position.y += (target[1] - ref.current.position.y) * 0.1
    ref.current.position.z += (target[2] - ref.current.position.z) * 0.1
  })

  return ref
}
