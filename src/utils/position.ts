import { DIAGONAL_STEP, LANE_OFFSET } from '../const/global'
import { CARD_DIMENSIONS } from '../components/Card/const'

export function getCardPosition(index: number, lane: number): [number, number, number] {
  return [
    index * DIAGONAL_STEP.X + lane * LANE_OFFSET.X,
    index * DIAGONAL_STEP.Y + lane * LANE_OFFSET.Y,
    index * DIAGONAL_STEP.Z + lane * LANE_OFFSET.Z,
  ]
}

export function getLabelPosition(lane: number): [number, number, number] {
  const cardX = -DIAGONAL_STEP.X / 2 + lane * LANE_OFFSET.X
  const cardY = -DIAGONAL_STEP.Y / 2 + lane * LANE_OFFSET.Y
  const cardZ = -DIAGONAL_STEP.Z / 2 + lane * LANE_OFFSET.Z

  const cardYOffset = cardY - CARD_DIMENSIONS[1] / 2

  return [cardX, cardYOffset, cardZ]
}