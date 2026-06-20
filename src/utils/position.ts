import { STEP_X, STEP_Y, STEP_Z } from '../components/Scene/const'

export function getCardPosition(index: number): [number, number, number] {
  return [index * STEP_X, index * STEP_Y, index * STEP_Z]
}