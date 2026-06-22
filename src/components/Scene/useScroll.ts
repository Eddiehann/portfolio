import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { DIAGONAL_STEP, STEP_DISTANCE } from '../../const/global'
import type { ActiveView } from '../../data/types'
import { SCROLL_SPEED, SCROLL_LERP, SCROLL_MIN, SCROLL_END_CARDS } from './const'

// Unit vector of the card-stack diagonal in world space
const DIAG_UNIT = new THREE.Vector2(
  DIAGONAL_STEP.X / STEP_DISTANCE,
  DIAGONAL_STEP.Y / STEP_DISTANCE,
)

export function useScroll(enabled: boolean, displayedView: ActiveView, cardCount: number) {
  const { camera, gl } = useThree()

  const groupRef = useRef<THREE.Group>(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)
  const isDraggingRef = useRef(false)
  const lastPointerRef = useRef({ x: 0, y: 0 })
  const scrollMaxRef = useRef(0)

  useEffect(() => {
    scrollMaxRef.current = Math.max(0, (cardCount - 1 - SCROLL_END_CARDS) * STEP_DISTANCE)
  }, [cardCount])

  // Reset scroll when the displayed view changes
  useEffect(() => {
    targetRef.current = 0
    currentRef.current = 0
    if (groupRef.current) groupRef.current.position.set(0, 0, 0)
  }, [displayedView])

  useEffect(() => {
    const el = gl.domElement

    function clampTarget() {
      targetRef.current = Math.max(SCROLL_MIN, Math.min(scrollMaxRef.current, targetRef.current))
    }

    function onWheel(e: WheelEvent) {
      if (!enabled) return
      e.preventDefault()
      targetRef.current += e.deltaY * SCROLL_SPEED
      clampTarget()
    }

    function onPointerDown(e: PointerEvent) {
      if (!enabled) return
      isDraggingRef.current = true
      lastPointerRef.current = { x: e.clientX, y: e.clientY }
      el.setPointerCapture(e.pointerId)
    }

    function onPointerMove(e: PointerEvent) {
      if (!isDraggingRef.current) return
      const dx = e.clientX - lastPointerRef.current.x
      const dy = e.clientY - lastPointerRef.current.y
      lastPointerRef.current = { x: e.clientX, y: e.clientY }

      // Project pixel delta onto the screen-space diagonal.
      // Orthographic zoom = world units per pixel (inverted: pixels = worldUnits * zoom).
      const zoom = (camera as THREE.OrthographicCamera).zoom
      const sdx = DIAG_UNIT.x * zoom   // screen-space diagonal X (px per unit)
      const sdy = -DIAG_UNIT.y * zoom  // screen-space diagonal Y (px per unit, Y flipped)
      const denom = sdx * sdx + sdy * sdy
      const projection = (dx * sdx + dy * sdy) / denom
      targetRef.current -= projection
      clampTarget()
    }

    function onPointerUp(e: PointerEvent) {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      el.releasePointerCapture(e.pointerId)
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)

    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
    }
  }, [gl, camera, enabled])

  useFrame(() => {
    if (!groupRef.current) return
    currentRef.current += (targetRef.current - currentRef.current) * SCROLL_LERP
    groupRef.current.position.x = -currentRef.current * DIAG_UNIT.x
    groupRef.current.position.y = -currentRef.current * DIAG_UNIT.y
  })

  return groupRef
}
