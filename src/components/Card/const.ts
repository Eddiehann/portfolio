import * as THREE from 'three'
import { SCENE_ROTATION } from '../../const/global'

export const CARD_DIMENSIONS: [number, number, number] = [2, 5, 0.05]
export const MAX_CARD_SIZE = Math.max(CARD_DIMENSIONS[0], CARD_DIMENSIONS[1])
export const CARD_DEPTH = CARD_DIMENSIONS[2]

// Hover
export const HITBOX_PADDING = { x: 0.4, y: 0.4 }
export const HOVER_TRANSLATE_DISTANCE = 2
export const HOVER_DIRECTION = new THREE.Vector3(1, 0, 0)
  .applyEuler(new THREE.Euler(...SCENE_ROTATION))
  .normalize()

// Fade in/out
export const ENTRANCE_STAGGER_MS = 80
export const ENTRANCE_DURATION_MS = 300
export const FALL_DISTANCE = 3