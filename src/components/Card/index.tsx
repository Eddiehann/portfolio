import type { CardProps } from './types'
import { CARD_DEPTH, HITBOX_PADDING } from './const'
import { SCENE_ROTATION } from '../../const/global'
import { useCard } from './useCard'

function Card({
  position,
  width,
  height,
  renderOrder,
  isHovered,
  onHoverStart,
  onHoverEnd,
  phase,
  cardIndex,
}: CardProps) {
  const { groupRef, materialRef } = useCard(position, isHovered, phase, cardIndex)

  return (
    <>
      <group position={position} rotation={SCENE_ROTATION}>
        <mesh
          position={[-width / 2, 0, 0]}
          onPointerOver={phase === 'idle' ? (e) => { e.stopPropagation(); onHoverStart() } : undefined}
          onPointerOut={phase === 'idle' ? (e) => { e.stopPropagation(); onHoverEnd() } : undefined}
        >
          <boxGeometry args={[width + HITBOX_PADDING.x * 2, height + HITBOX_PADDING.y * 2, CARD_DEPTH]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
      </group>

      <group ref={groupRef} position={position} rotation={SCENE_ROTATION}>
        <mesh
          position={[-width / 2, 0, 0]}
          renderOrder={renderOrder}
          raycast={() => null}
        >
          <boxGeometry args={[width, height, CARD_DEPTH]} />
          <meshStandardMaterial
            ref={materialRef}
            color="#dadada"
            roughness={0.4}
            metalness={0.1}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
      </group>
    </>
  )
}

export default Card
