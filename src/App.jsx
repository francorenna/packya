import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Splash from './components/Splash'
import Home from './pages/Home'
import CajasPizza from './pages/CajasPizza'
import BolsasKraft from './pages/BolsasKraft'
import CajasVino from './pages/CajasVino'
import Banner from './components/banner'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const location = useLocation()
  
  // Solo mostrar splash en la home
  const isHome = location.pathname === '/'

  return (
    <>
      <Banner />
      {showSplash && isHome ? (
        <Splash duration={2000} onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cajas-de-pizza" element={<CajasPizza />} />
          <Route path="/bolsas-kraft" element={<BolsasKraft />} />
          <Route path="/cajas-de-vino" element={<CajasVino />} />
        </Routes>
      )}
    </>
  )
}