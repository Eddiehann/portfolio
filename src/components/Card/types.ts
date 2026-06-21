export type CardProps = {
  position: [number, number, number]
  width: number
  height: number
  renderOrder: number
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}