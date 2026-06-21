import * as THREE from 'three'
import { SCENE_ROTATION } from '../../const/global'

export const CARD_DIMENSIONS: [number, number, number] = [2, 2.8, 0.05]
export const TRANSLATE_DISTANCE = 1
export const HOVER_LIFT_DIRECTION = new THREE.Vector3(1, 0, 0)
  .applyEuler(new THREE.Euler(...SCENE_ROTATION))
  .normalize()
