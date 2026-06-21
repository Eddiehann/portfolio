import { OrthographicCamera } from '@react-three/drei'
import Card from '../Card'
import { LANES } from '../../data/cards'
import { getCardPosition } from './utils'
import { CAMERA_POSITION, CAMERA_ZOOM, LIGHT_POSITION, LIGHT_INTENSITY, AMBIENT_INTENSITY } from './const'
import { useScene } from './useScene'
import type { SceneProps } from './types'
// import { SCENE_ROTATION } from "../../const/global"

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

      {activeLanes.map(({ cards }, lane) => {
        return (
          <group key={lane}>
            {cards.map((card, cardIndex) => {
              const key = `${lane}-${cardIndex}`
              return (
                <Card
                  key={key}
                  width={card.width}
                  height={card.height}
                  renderOrder={lane * 100 - cardIndex}
                  position={getCardPosition(cardIndex, lane)}
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
