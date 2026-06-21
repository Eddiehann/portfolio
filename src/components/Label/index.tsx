import { Text } from "@react-three/drei"
import { SCENE_ROTATION } from '../../const/global'
import { LABEL_FONT_SIZE } from './const'
import type { LabelProps } from './types'

function Label({ position, text }: LabelProps) {
  return (
    <group position={position} rotation={SCENE_ROTATION}>
      <Text
        font="/fonts/Dirtyline.otf"
        fontSize={LABEL_FONT_SIZE}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        letterSpacing={0.1}
        anchorX="right"
        anchorY="middle"
        color="black"
      >
        {text}
      </Text>
    </group>
  )
}

export default Label