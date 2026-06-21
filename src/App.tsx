import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene'
import type { ActiveView } from './data/types'
import { useState } from 'react'

function App() {

  const [activeView, setActiveView] = useState<ActiveView>('home')

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
        <button onClick={() => setActiveView('home')}>Home</button>
        <button onClick={() => setActiveView('projects')}>Projects</button>
        <button onClick={() => setActiveView('experience')}>Experience</button>
        <button onClick={() => setActiveView('gallery')}>Gallery</button>
      </div>
      <Canvas>
        <Scene activeView={activeView} />
      </Canvas>
    </div>
  )
}

export default App