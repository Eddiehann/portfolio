import { useState } from 'react'

export function useCardHover() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)

  function handleHoverStart(key: string) {
    setHoveredKey(key)
  }

  function handleHoverEnd() {
    setHoveredKey(null)
  }

  return {
    hoveredKey,
    handleHoverStart,
    handleHoverEnd
  }
}