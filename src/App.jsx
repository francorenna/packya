import { useState } from 'react'
import Splash from './components/Splash'
import Home from './pages/Home'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  return showSplash ? (
    <Splash duration={2000} onFinish={() => setShowSplash(false)} />
  ) : (
    <Home />
  )
}