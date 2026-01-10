import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import '../styles/simulador.css'
import cajablanca from '../assets/cajablanca.png'
import cajamarron from '../assets/cajamarron.png'

export default function Simulador() {
  const [logo, setLogo] = useState(null)
  const [logoPosition, setLogoPosition] = useState({ x: 50, y: 50 })
  const [logoSize, setLogoSize] = useState(30)
  const [logoRotation, setLogoRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [boxType, setBoxType] = useState('blanca')
  const [showMessage, setShowMessage] = useState(false)
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  const currentBox = boxType === 'blanca' ? cajablanca : cajamarron

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogo(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleMouseDown = (e) => {
    if (logo) {
      setIsDragging(true)
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setLogoPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const generateImage = () => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      const boxImage = new Image()
      boxImage.crossOrigin = 'anonymous'
      boxImage.src = currentBox
      
      boxImage.onload = () => {
        canvas.width = boxImage.width
        canvas.height = boxImage.height
        
        // Dibujar la caja
        ctx.drawImage(boxImage, 0, 0)
        
        if (logo) {
          const logoImage = new Image()
          logoImage.src = logo
          
          logoImage.onload = () => {
            // Calcular posición y tamaño del logo
            const logoWidth = (canvas.width * logoSize) / 100
            const logoHeight = (logoImage.height * logoWidth) / logoImage.width
            const centerX = (canvas.width * logoPosition.x) / 100
            const centerY = (canvas.height * logoPosition.y) / 100
            
            // Aplicar rotación
            ctx.save()
            ctx.translate(centerX, centerY)
            ctx.rotate((logoRotation * Math.PI) / 180)
            ctx.drawImage(logoImage, -logoWidth / 2, -logoHeight / 2, logoWidth, logoHeight)
            ctx.restore()
            
            resolve(canvas.toDataURL('image/png'))
          }
        } else {
          resolve(canvas.toDataURL('image/png'))
        }
      }
    })
  }

  const handleWhatsAppShare = async () => {
    const imageData = await generateImage()
    
    // Mostrar mensaje de instrucción
    setShowMessage(true)
    
    // Descargar la imagen primero
    const link = document.createElement('a')
    link.download = 'mi-caja-packya.png'
    link.href = imageData
    link.click()
    
    // Esperar un momento y luego abrir WhatsApp
    setTimeout(() => {
      const message = encodeURIComponent('Hola PACKYA, quiero cotizar esta caja con mi logo. Te adjunto la imagen 👇')
      const whatsappUrl = `https://wa.me/5492614177745?text=${message}`
      window.open(whatsappUrl, '_blank')
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => setShowMessage(false), 5000)
    }, 500)
  }

  return (
    <div className="simulador-root">
      <Helmet>
        <title>Simulador de cajas personalizadas – Probá tu logo | PACKYA</title>
        <meta name="description" content="Subí tu logo y mirá cómo queda en una caja personalizada PACKYA. Producción propia desde 50 unidades. Envíos a todo el país." />
        <meta property="og:title" content="Simulador de cajas personalizadas – Probá tu logo | PACKYA" />
        <meta property="og:description" content="Subí tu logo y mirá cómo queda en una caja personalizada PACKYA. Producción propia desde 50 unidades." />
      </Helmet>
      
      <div className="simulador-container">
        <header className="simulador-header">
          <h1 className="simulador-title">Simulador de cajas personalizadas</h1>
          <p className="simulador-subtitle">
            Subí tu logo y mirá cómo queda en tu packaging personalizado
          </p>
        </header>

        <div className="simulador-content">
          <div className="upload-section">
            <div className="box-selector">
              <button
                className={`box-selector-btn ${boxType === 'blanca' ? 'active' : ''}`}
                onClick={() => setBoxType('blanca')}
              >
                Caja Blanca
              </button>
              <button
                className={`box-selector-btn ${boxType === 'marron' ? 'active' : ''}`}
                onClick={() => setBoxType('marron')}
              >
                Caja Marrón
              </button>
            </div>

            <label className="upload-button">
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
              <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              {logo ? 'Cambiar logo' : 'Subir logo'}
            </label>

            {logo && (
              <div className="controls">
                <label className="control-label">
                  Tamaño del logo
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={logoSize}
                    onChange={(e) => setLogoSize(Number(e.target.value))}
                    className="control-slider"
                  />
                </label>
                <label className="control-label">
                  Rotación ({logoRotation}°)
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={logoRotation}
                    onChange={(e) => setLogoRotation(Number(e.target.value))}
                    className="control-slider"
                  />
                </label>
                <p className="control-hint">Arrastrá el logo para posicionarlo</p>
              </div>
            )}
          </div>

          <div 
            className="preview-section"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img src={currentBox} alt="Caja de pizza PACKYA" className="box-image" />
            {logo && (
              <img
                src={logo}
                alt="Tu logo"
                className="logo-overlay"
                style={{
                  left: `${logoPosition.x}%`,
                  top: `${logoPosition.y}%`,
                  width: `${logoSize}%`,
                  transform: `translate(-50%, -50%) rotate(${logoRotation}deg)`,
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onMouseDown={handleMouseDown}
                draggable={false}
              />
            )}
            {!logo && (
              <div className="preview-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <p>Subí tu logo para ver el resultado</p>
              </div>
            )}
          </div>
        </div>

        <div className="simulador-actions">
          {showMessage && (
            <div className="instruction-message">
              📥 Imagen descargada. Ahora adjuntala en WhatsApp manualmente
            </div>
          )}
          
          <button 
            className="btn-whatsapp-sim"
            onClick={handleWhatsAppShare}
            disabled={!logo}
          >
            <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cotizar esta caja por WhatsApp
          </button>
        </div>

        <p className="simulador-note">
          Simulación ilustrativa — el resultado final puede variar levemente
        </p>

        <div className="simulador-seo-text">
          <p>
            Este simulador te permite probar tu logo en cajas personalizadas antes de comprar. 
            PACKYA fabrica cajas y bolsas personalizadas en Mendoza con impresión profesional y 
            entrega rápida a todo el país.
          </p>
          <div className="simulador-links">
            <a 
              href="https://wa.me/5492614177745" 
              target="_blank" 
              rel="noreferrer"
              className="simulador-link"
            >
              📱 Consultar por WhatsApp
            </a>
            <Link to="/" className="simulador-link">
              🏠 Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
