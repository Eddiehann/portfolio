import { OrthographicCamera } from "@react-three/drei"
import Card from '../Card'
import Label from '../Label'
import { LANES } from '../../data/cards'
import { getCardPosition, getLabelPosition } from '../../utils/position'
import { getLabelOffsetSteps } from '../../utils/labelLayout'
import { CAMERA_POSITION, CAMERA_ZOOM, LIGHT_POSITION, LIGHT_INTENSITY, AMBIENT_INTENSITY } from './const'
import { useScene } from "./useScene"
import { SCENE_ROTATION } from "../../const/global"
import type { SceneProps } from "./types"

function Scene({ activeView }: SceneProps) {
  const hook = useScene()
  const activeLanes = LANES.filter((lane) => lane.view === activeView)

  return (
    <>
      <OrthographicCamera makeDefault position={CAMERA_POSITION} zoom={CAMERA_ZOOM} />
      <ambientLight intensity={AMBIENT_INTENSITY} />
      <directionalLight position={LIGHT_POSITION} intensity={LIGHT_INTENSITY} />
      <color attach="background" args={['#f9f9f9']} />

      {/* <gridHelper args={[40, 40]} rotation={SCENE_ROTATION} />
      <axesHelper args={[16]} /> */}

      {activeLanes.map(({ cards, label }, lane) => {
        const labelOffsetSteps = 0 // getLabelOffsetSteps(label)
        return (
          <group key={lane}>
            {/* <Label position={getLabelPosition(lane)} text={label} /> */}
            {cards.map((card, cardIndex) => {
              const key = `${lane}-${cardIndex}`
              return (
                <Card
                  key={key}
                  width={card.width}
                  height={card.height}
                  renderOrder={lane * 100 - cardIndex}
                  position={getCardPosition(cardIndex, lane, labelOffsetSteps)}
                  isHovered={hook.hoveredCard === key}
                  onHoverStart={() => hook.handleHoverStart(key)}
                  onHoverEnd={hook.handleHoverEnd}
                />
              )
            })}
          </group>
        )
      })}
    </>
  )
}

export default Scene
