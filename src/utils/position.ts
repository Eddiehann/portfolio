import { DIAGONAL_STEP, LANE_OFFSET } from '../const/global'
import { MAX_CARD_SIZE } from '../components/Card/const'

export function getCardPosition(
  index: number,
  lane: number,
  labelOffsetSteps = 0,
): [number, number, number] {
  const step = index + labelOffsetSteps
  return [
    step * DIAGONAL_STEP.X + lane * LANE_OFFSET.X,
    step * DIAGONAL_STEP.Y + lane * LANE_OFFSET.Y,
    step * DIAGONAL_STEP.Z + lane * LANE_OFFSET.Z,
  ]
}

export function getLabelPosition(lane: number): [number, number, number] {
  return [
    lane * LANE_OFFSET.X,
    lane * LANE_OFFSET.Y - MAX_CARD_SIZE / 2,
    lane * LANE_OFFSET.Z,
  ]
}
