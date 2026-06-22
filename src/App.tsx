import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene'
import { LANES } from './data/cards'
import { useLaneTransition } from './hooks/useLaneTransition'

function App() {
  const { displayedView, phase, isTransitioning, requestViewChange } = useLaneTransition('projects')

  const exitCount = LANES.find((l) => l.view === displayedView)?.cards.length ?? 0

  function viewButton(view: typeof displayedView, label: string) {
    const enterCount = LANES.find((l) => l.view === view)?.cards.length ?? 0
    return (
      <button disabled={isTransitioning} onClick={() => requestViewChange(view, exitCount, enterCount)}>
        {label}
      </button>
    )
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
        {viewButton('home', 'Home')}
        {viewButton('projects', 'Projects')}
        {viewButton('experience', 'Experience')}
        {viewButton('gallery', 'Gallery')}
      </div>
      <Canvas>
        <Scene displayedView={displayedView} phase={phase} />
      </Canvas>
    </div>
  )
}

export default App
