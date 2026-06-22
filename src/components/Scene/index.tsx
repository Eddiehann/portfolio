import { OrthographicCamera } from '@react-three/drei'
import Card from '../Card'
import { getCardPosition } from './utils'
import { CAMERA_POSITION, CAMERA_ZOOM, LIGHT_POSITION, LIGHT_INTENSITY, AMBIENT_INTENSITY } from './const'
import { useScene } from './useScene'
import { useScroll } from './useScroll'
import type { SceneProps } from './types'

function Scene({ displayedView, phase }: SceneProps) {
  const { hoveredCard, handleHoverStart, handleHoverEnd, activeLane } = useScene(displayedView, phase)
  const scrollGroupRef = useScroll(phase === 'idle', displayedView, activeLane?.cards.length ?? 0)

  return (
    <>
      <OrthographicCamera makeDefault position={CAMERA_POSITION} zoom={CAMERA_ZOOM} />
      <ambientLight intensity={AMBIENT_INTENSITY} />
      <directionalLight position={LIGHT_POSITION} intensity={LIGHT_INTENSITY} />
      <color attach="background" args={['#f9f9f9']} />

      {activeLane && (
        <group ref={scrollGroupRef} key={activeLane.view}>
          {activeLane.cards.map((card, cardIndex) => {
            const key = `${displayedView}:${cardIndex}`
            return (
              <Card
                key={key}
                width={card.width}
                height={card.height}
                renderOrder={-cardIndex}
                position={getCardPosition(cardIndex)}
                isHovered={hoveredCard === key}
                onHoverStart={() => handleHoverStart(key)}
                onHoverEnd={handleHoverEnd}
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
