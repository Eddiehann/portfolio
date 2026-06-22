import { useState, useCallback, useEffect, useRef } from 'react'
import type { ActiveView } from '../data/types'
import type { TransitionPhase } from '../types/transition'
import { ENTRANCE_STAGGER_MS, ENTRANCE_DURATION_MS } from '../components/Card/const'

function phaseDuration(cardCount: number): number {
  if (cardCount === 0) return 0
  return (cardCount - 1) * ENTRANCE_STAGGER_MS + ENTRANCE_DURATION_MS
}

export function useLaneTransition(initialView: ActiveView) {
  const [displayedView, setDisplayedView] = useState<ActiveView>(initialView)
  const [phase, setPhase] = useState<TransitionPhase>('idle')

  const timer1Ref = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timer2Ref = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer1Ref.current) clearTimeout(timer1Ref.current)
      if (timer2Ref.current) clearTimeout(timer2Ref.current)
    }
  }, [])

  const isTransitioning = phase !== 'idle'

  const requestViewChange = useCallback((next: ActiveView, exitCount: number, enterCount: number) => {
    if (phase !== 'idle' || next === displayedView) return

    if (timer1Ref.current) clearTimeout(timer1Ref.current)
    if (timer2Ref.current) clearTimeout(timer2Ref.current)

    setPhase('exiting')

    timer1Ref.current = setTimeout(() => {
      setDisplayedView(next)
      setPhase('entering')

      timer2Ref.current = setTimeout(() => {
        setPhase('idle')
      }, phaseDuration(enterCount))
    }, phaseDuration(exitCount))
  }, [phase, displayedView])

  return { displayedView, phase, isTransitioning, requestViewChange }
}
