import * as THREE from 'three'
import { DIAGONAL_STEP, SCENE_ROTATION, STEP_DISTANCE } from '../const/global'
import { LABEL_FONT_SIZE, LABEL_LETTER_SPACING } from '../components/Label/const'

const CHAR_WIDTH_RATIO = 0.6

const textDirection = new THREE.Vector3(1, 0, 0)
  .applyEuler(new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2))
  .applyEuler(new THREE.Euler(...SCENE_ROTATION))
  .normalize()

const stepDirection = new THREE.Vector3(DIAGONAL_STEP.X, DIAGONAL_STEP.Y, DIAGONAL_STEP.Z).normalize()

export function estimateTextWidth(text: string): number {
  if (text.length === 0) return 0
  const charWidth = LABEL_FONT_SIZE * CHAR_WIDTH_RATIO
  const spacing = LABEL_FONT_SIZE * LABEL_LETTER_SPACING
  return text.length * charWidth + (text.length - 1) * spacing
}

export function getLabelOffsetSteps(label: string): number {
  const textWidth = estimateTextWidth(label)
  const widthTowardCards = textWidth * Math.max(0, textDirection.dot(stepDirection))
  return Math.ceil(widthTowardCards / STEP_DISTANCE)
}
