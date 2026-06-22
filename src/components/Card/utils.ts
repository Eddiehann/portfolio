import type { Vector3Tuple } from 'three'
import { HOVER_DIRECTION, HOVER_TRANSLATE_DISTANCE } from './const'

export function calculateHoverPosition(
  position: Vector3Tuple,
  isHovered: boolean,
): Vector3Tuple {
  if (!isHovered) return position
  return [
    position[0] + HOVER_DIRECTION.x * HOVER_TRANSLATE_DISTANCE,
    position[1] + HOVER_DIRECTION.y * HOVER_TRANSLATE_DISTANCE,
    position[2] + HOVER_DIRECTION.z * HOVER_TRANSLATE_DISTANCE,
  ]
}
