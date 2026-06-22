import type { ActiveView } from '../../data/types'
import type { TransitionPhase } from '../../types/transition'

export type SceneProps = {
  displayedView: ActiveView
  phase: TransitionPhase
}
