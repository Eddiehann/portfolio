import * as THREE from 'three'

export const SCENE_ROTATION: [number, number, number] = [0.5, -0.4, 0]

const STEP_DISTANCE = 1.2

const euler = new THREE.Euler(...SCENE_ROTATION)

const gridLocalZ = new THREE.Vector3(0, 0, 1).applyEuler(euler)
const Re1 = new THREE.Vector3(1, 0, 0).applyEuler(euler)
const Re2 = new THREE.Vector3(0, 1, 0).applyEuler(euler)
const slope = gridLocalZ.y / gridLocalZ.x
const rx = (slope * Re2.x - Re2.y) / (Re1.y - slope * Re1.x)

const stepVector = new THREE.Vector3(rx, 1, 0)
  .applyEuler(euler)
  .normalize()
  .multiplyScalar(STEP_DISTANCE)

export const DIAGONAL_STEP = {
  X: stepVector.x,
  Y: stepVector.y,
  Z: 0,
}
export const LANE_OFFSET = { X: 5.8, Y: 0, Z: 0 }