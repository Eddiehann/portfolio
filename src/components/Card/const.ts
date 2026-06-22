import * as THREE from 'three'
import { SCENE_ROTATION } from '../../const/global'

export const MAX_CARD_SIZE = 5
export const CARD_DEPTH = 0.05

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