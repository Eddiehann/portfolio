import { Text } from "@react-three/drei"
import { SCENE_ROTATION } from '../../const/global'
import { LABEL_FONT_SIZE, LABEL_LETTER_SPACING } from './const'
import type { LabelProps } from './types'

function Label({ position, text }: LabelProps) {
  return (
    <group position={position} rotation={SCENE_ROTATION}>
      <Text
        font="/fonts/Dirtyline.otf"
        fontSize={LABEL_FONT_SIZE}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        letterSpacing={LABEL_LETTER_SPACING}
        anchorX="left"
        anchorY="middle"
        color="gray"
      >
        {text}
      </Text>
    </group>
  )
}

export default Label
