import { DIAGONAL_STEP, LANE_OFFSET } from '../../const/global'

export function getCardPosition(
  index: number,
  lane: number,
): [number, number, number] {
  return [
    index * DIAGONAL_STEP.X + lane * LANE_OFFSET.X,
    index * DIAGONAL_STEP.Y + lane * LANE_OFFSET.Y,
    index * DIAGONAL_STEP.Z + lane * LANE_OFFSET.Z,
  ]
}