import { HOVER_LIFT_DIRECTION, TRANSLATE_DISTANCE } from './const'

export function calculateHoverPosition(
  position: [number, number, number],
  isHovered: boolean,
): [number, number, number] {
  if (!isHovered) return position
  return [
    position[0] + HOVER_LIFT_DIRECTION.x * TRANSLATE_DISTANCE,
    position[1] + HOVER_LIFT_DIRECTION.y * TRANSLATE_DISTANCE,
    position[2] + HOVER_LIFT_DIRECTION.z * TRANSLATE_DISTANCE,
  ]
}
