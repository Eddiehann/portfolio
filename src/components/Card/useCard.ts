import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { Vector3Tuple } from 'three'
import type { TransitionPhase } from '../../types/transition'
import { calculateHoverPosition } from './utils'
import {
  ENTRANCE_STAGGER_MS,
  ENTRANCE_DURATION_MS,
  FALL_DISTANCE,
} from './const'

function easeOut(p: number): number {
  return 1 - (1 - p) * (1 - p)
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v))
}

export function useCard(
  position: Vector3Tuple,
  isHovered: boolean,
  phase: TransitionPhase,
  cardIndex: number,
) {
  const groupRef = useRef<THREE.Group>(null)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)

  const phaseStartRef = useRef<number>(0)
  const prevPhaseRef = useRef<TransitionPhase>('idle')

  useFrame(({ clock }) => {
    if (!groupRef.current || !materialRef.current) return

    if (prevPhaseRef.current !== phase) {
      phaseStartRef.current = clock.elapsedTime
      prevPhaseRef.current = phase
    }

    if (phase === 'idle') {
      const target = calculateHoverPosition(position, isHovered)
      groupRef.current.position.x += (target[0] - groupRef.current.position.x) * 0.3
      groupRef.current.position.y += (target[1] - groupRef.current.position.y) * 0.3
      groupRef.current.position.z += (target[2] - groupRef.current.position.z) * 0.3
      materialRef.current.opacity = 0.9
      return
    }

    const delay = (cardIndex * ENTRANCE_STAGGER_MS) / 1000
    const duration = ENTRANCE_DURATION_MS / 1000
    const elapsed = clock.elapsedTime - phaseStartRef.current - delay
    const p = clamp(elapsed / duration, 0, 1)
    const e = easeOut(p)

    if (phase === 'entering') {
      groupRef.current.position.x = position[0]
      groupRef.current.position.y = position[1] + FALL_DISTANCE * (1 - e)
      groupRef.current.position.z = position[2]
      materialRef.current.opacity = e * 0.9
    } else {
      // exiting
      groupRef.current.position.x = position[0]
      groupRef.current.position.y = position[1] - FALL_DISTANCE * e
      groupRef.current.position.z = position[2]
      materialRef.current.opacity = (1 - e) * 0.9
    }
  })

  return { groupRef, materialRef }
}
