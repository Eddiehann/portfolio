export type CardProps = {
  position: [number, number, number]
  renderOrder: number
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}