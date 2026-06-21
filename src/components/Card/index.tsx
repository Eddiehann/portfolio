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
}: CardProps) {
  const visualRef = useCard(position, isHovered)

  return (
    <>
      <group position={position} rotation={SCENE_ROTATION}>
        <mesh
          position={[-width / 2, 0, 0]}
          renderOrder={renderOrder}
          onPointerOver={(e) => { e.stopPropagation(); onHoverStart() }}
          onPointerOut={(e) => { e.stopPropagation(); onHoverEnd() }}
        >
          <boxGeometry args={[width + HITBOX_PADDING.x * 2, height + HITBOX_PADDING.y * 2, CARD_DEPTH]} />
          <meshBasicMaterial transparent opacity={0} depthWrite={false} />
        </mesh>
      </group>

      <group ref={visualRef} position={position} rotation={SCENE_ROTATION}>
        <mesh
          position={[-width / 2, 0, 0]}
          renderOrder={renderOrder}
          raycast={() => null}
        >
          <boxGeometry args={[width, height, CARD_DEPTH]} />
          <meshStandardMaterial
            color="#dadada"
            roughness={0.4}
            metalness={0.1}
            transparent={true}
            opacity={0.9}
          />
        </mesh>
      </group>
    </>
  )
}

export default Card