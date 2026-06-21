import { OrthographicCamera } from "@react-three/drei"
import Card from '../Card'
import { cardData } from '../../data/cards'
import { getCardPosition } from '../../utils/position'
import { CAMERA_POSITION, CAMERA_ZOOM, LIGHT_POSITION, LIGHT_INTENSITY, AMBIENT_INTENSITY } from './const'
import { useCardHover } from "../../hooks/useCardHover"

function Scene() {
  const hook = useCardHover()

  return (
    <>
      <OrthographicCamera makeDefault position={CAMERA_POSITION} zoom={CAMERA_ZOOM} />
      <ambientLight intensity={AMBIENT_INTENSITY} />
      <directionalLight position={LIGHT_POSITION} intensity={LIGHT_INTENSITY} />
      <color attach="background" args={['#222']} />

      {cardData.map((card, i) => (
        <Card
          key={i}
          index={i}
          position={getCardPosition(i)}
          isHovered={hook.hoveredIndex === i}
          onHoverStart={() => hook.handleHoverStart(i)}
          onHoverEnd={hook.handleHoverEnd}
        />
      ))}
    </>
  )
}

export default Scene