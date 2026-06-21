import { useState } from 'react'

export function useCardHover() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  function handleHoverStart(index: number) {
    setHoveredIndex(index)
  }

  function handleHoverEnd() {
    setHoveredIndex(null)
  }

  return {
    hoveredIndex,
    handleHoverStart,
    handleHoverEnd
  }
}