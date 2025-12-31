import { useState } from 'react'
import Splash from './components/Splash'
import Home from './pages/Home'
import Banner from './components/banner'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      <Banner />
      {showSplash ? (
        <Splash duration={2000} onFinish={() => setShowSplash(false)} />
      ) : (
        <Home />
      )}
    </>
  )
}