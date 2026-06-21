import { OrthographicCamera } from "@react-three/drei"
import Card from '../Card'
import Label from '../Label'
import { LANES } from '../../data/cards'
import { getCardPosition, getLabelPosition } from '../../utils/position'
import { CAMERA_POSITION, CAMERA_ZOOM, LIGHT_POSITION, LIGHT_INTENSITY, AMBIENT_INTENSITY } from './const'
import { useCardHover } from "../../hooks/useCardHover"
import { SCENE_ROTATION } from "../../const/global"

function Scene() {
  const hook = useCardHover()

  return (
    <>
      <OrthographicCamera makeDefault position={CAMERA_POSITION} zoom={CAMERA_ZOOM} />
      <ambientLight intensity={AMBIENT_INTENSITY} />
      <directionalLight position={LIGHT_POSITION} intensity={LIGHT_INTENSITY} />
      <color attach="background" args={['#f9f9f9']} />

      <gridHelper args={[40, 40]} rotation={SCENE_ROTATION} />
      <axesHelper args={[16]} />

      {LANES.map(({ cards, label }, lane) => (
        <group key={lane}>
          <Label position={getLabelPosition(lane)} text={label} />
          {cards.map((_, cardIndex) => {
            const key = `${lane}-${cardIndex}`
            return (
              <Card
                key={key}
                renderOrder={lane * 100 - cardIndex}
                position={getCardPosition(cardIndex, lane)}
                isHovered={hook.hoveredKey === key}
                onHoverStart={() => hook.handleHoverStart(key)}
                onHoverEnd={hook.handleHoverEnd}
              />
            )
          })}
        </group>
      ))}
    </>
  )
}

export default Scene