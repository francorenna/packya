// ...existing code...
import { useEffect, useState, useCallback } from 'react'
import logo from '../assets/logopackya.svg'

export default function Splash({ duration = 2200, onFinish }) {
  const [hiding, setHiding] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handleSkip = useCallback(() => {
    setHiding(true)
    setTimeout(() => onFinish?.(), 300)
  }, [onFinish])

  useEffect(() => {
    // fuerza la clase de entrada para garantizar que la animación dispare
    const tM = setTimeout(() => setMounted(true), 20)
    const tHide = setTimeout(() => setHiding(true), Math.max(0, duration - 400))
    const tEnd = setTimeout(() => onFinish?.(), duration)

    // bloquear scroll mientras está el splash
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') handleSkip()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      clearTimeout(tM)
      clearTimeout(tHide)
      clearTimeout(tEnd)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [duration, onFinish, handleSkip])

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Cargando Packya"
      className={`splash ${hiding ? 'splash--hide' : ''}`}
      onClick={handleSkip}
      onTouchStart={() => {}}
    >
      <div className="splash-ring" aria-hidden="true" />
      <img
        src={logo}
        alt="Packya"
        className={`splash-logo ${mounted ? 'splash-logo--enter' : ''}`}
        loading="eager"
        decoding="async"
      />
    </div>
  )
}
// ...existing code...