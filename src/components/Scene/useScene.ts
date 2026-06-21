import { useState } from 'react'

export function useScene() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  function handleHoverStart(key: string) {
    setHoveredCard(key)
  }

  function handleHoverEnd() {
    setHoveredCard(null)
  }

  return {
    hoveredCard,
    handleHoverStart,
    handleHoverEnd
  }
}