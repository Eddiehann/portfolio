import type { Vector3Tuple } from 'three'
import { DIAGONAL_STEP } from '../../const/global'

export function getCardPosition(
  index: number,
): Vector3Tuple {
  return [
    index * DIAGONAL_STEP.X,
    index * DIAGONAL_STEP.Y,
    index * DIAGONAL_STEP.Z
  ]
}