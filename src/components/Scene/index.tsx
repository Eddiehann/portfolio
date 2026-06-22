import { useEffect } from 'react'
import { OrthographicCamera } from '@react-three/drei'
import Card from '../Card'
import { LANES } from '../../data/cards'
import { getCardPosition } from './utils'
import { CAMERA_POSITION, CAMERA_ZOOM, LIGHT_POSITION, LIGHT_INTENSITY, AMBIENT_INTENSITY } from './const'
import { useScene } from './useScene'
import type { SceneProps } from './types'

function Scene({ displayedView, phase }: SceneProps) {
  const hook = useScene()

  useEffect(() => {
    if (phase !== 'idle') hook.handleHoverEnd()
  }, [phase])
  const activeLane = LANES.find((lane) => lane.view === displayedView)

  return (
    <>
      <OrthographicCamera makeDefault position={CAMERA_POSITION} zoom={CAMERA_ZOOM} />
      <ambientLight intensity={AMBIENT_INTENSITY} />
      <directionalLight position={LIGHT_POSITION} intensity={LIGHT_INTENSITY} />
      <color attach="background" args={['#f9f9f9']} />

      {activeLane && (
        <group key={activeLane.view}>
          {activeLane.cards.map((card, cardIndex) => {
            const key = `${displayedView}:${cardIndex}`
            return (
              <Card
                key={key}
                width={card.width}
                height={card.height}
                renderOrder={-cardIndex}
                position={getCardPosition(cardIndex)}
                isHovered={hook.hoveredCard === key}
                onHoverStart={() => hook.handleHoverStart(key)}
                onHoverEnd={hook.handleHoverEnd}
                phase={phase}
                cardIndex={cardIndex}
              />
            )
          })}
        </group>
      )}
    </>
  )
}

export default Scene
