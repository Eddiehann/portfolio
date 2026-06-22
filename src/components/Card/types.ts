import type { Vector3Tuple } from 'three'
import type { TransitionPhase } from '../../types/transition'

export type CardProps = {
  position: Vector3Tuple
  width: number
  height: number
  renderOrder: number
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
  phase: TransitionPhase
  cardIndex: number
}