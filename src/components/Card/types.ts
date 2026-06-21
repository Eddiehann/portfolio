import type { Vector3Tuple } from 'three'

export type CardProps = {
  position: Vector3Tuple
  width: number
  height: number
  renderOrder: number
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}