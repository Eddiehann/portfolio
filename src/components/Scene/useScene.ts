import { useState, useEffect, useCallback } from 'react'
import { LANES } from '../../data/cards'
import type { ActiveView } from '../../data/types'
import type { TransitionPhase } from '../../types/transition'

export function useScene(displayedView: ActiveView, phase: TransitionPhase) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    if (phase !== 'idle') setHoveredCard(null)
  }, [phase])

  const activeLane = LANES.find((lane) => lane.view === displayedView)

  const handleHoverEnd = useCallback(() => setHoveredCard(null), [])

  return {
    hoveredCard,
    handleHoverStart: (key: string) => setHoveredCard(key),
    handleHoverEnd,
    activeLane,
  }
}
