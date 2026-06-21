export type CardProps = {
  position: [number, number, number]
  index: number
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}