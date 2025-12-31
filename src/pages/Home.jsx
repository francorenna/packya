// ...existing code...
import React, { useState } from 'react'
import '../styles/home.css'

import cajas1 from '../assets/cajas1.jpeg'
import cajas2 from '../assets/cajas2.jpeg'
import cajas3 from '../assets/cajas3.jpeg'
import cajas4 from '../assets/cajas4.jpeg'
import cajas5 from '../assets/cajas5.jpeg'
import cajas6 from '../assets/cajas6.jpeg'
import cajas7 from '../assets/cajas7.jpeg'

export default function Home() {
  const [expanded, setExpanded] = useState(false)
  const [mainIndex, setMainIndex] = useState(0)
  const gallery = [cajas1, cajas2, cajas3, cajas4, cajas5, cajas6, cajas7]

  return (
    <div className="home-root">
      {/* Removed construction badge as requested */}

      <header className="home-hero">
        <div className="container">
          <h1 className="hero-title">Imprimimos tus cajas y bolsas en tiempo récord</h1>
          <p className="hero-sub">
            Packaging profesional listo para usar — sin vueltas, sin demoras.
          </p>

          <div className="hero-actions">
            <a
              className="btn-primary"
              href="https://wa.me/5492615108060"
              target="_blank"
              rel="noreferrer"
            >
              📲 Pedir presupuesto por WhatsApp
            </a>
            <a className="link-secondary" href="#beneficios">
              Conoce nuestros beneficios
            </a>
          </div>
        </div>
      </header>

      {/* New showcase section under banner */}
      <section className="product-showcase">
        <div className="container">
          {/* Removed repetitive heading; make Cajas de Pizza the main showcase title */}
          <h2 className="showcase-title showcase-hero">Cajas de Pizza</h2>

          <div
            className={`showcase-gallery ${expanded ? 'is-expanded' : ''}`}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
          >
            <div
              className="showcase-main"
              onClick={() => setExpanded((s) => !s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setExpanded((s) => !s)}
            >
              <img src={gallery[mainIndex]} alt={`Cajas ${mainIndex + 1}`} className="showcase-main-img" />
            </div>

            <div className="showcase-thumbs" aria-hidden={!expanded}>
              {gallery.slice(1).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Cajas ${i + 2}`}
                  className="thumb"
                  onClick={() => {
                    setMainIndex(i + 1)
                    setExpanded(true)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container main-content">
        <section id="beneficios" className="features-grid">
          <article className="feature-card">
            <div className="feature-head">⚡</div>
            <h3 className="feature-title">Entrega rápida</h3>
            <p className="feature-desc">
              Producción express y logística optimizada para que recibas tu pedido a tiempo.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-head">📦</div>
            <h3 className="feature-title">Packaging profesional</h3>
            <p className="feature-desc">
              Cajas y bolsas con acabados de calidad listos para la venta o envío.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-head">🎨</div>
            <h3 className="feature-title">Diseño incluido</h3>
            <p className="feature-desc">
              Adaptamos tu marca al packaging con propuestas prácticas y escalables.
            </p>
          </article>
        </section>

        <section className="how-section">
          <h4 className="how-title">¿Cómo trabajamos?</h4>
          <ol className="how-list">
            <li>Consultoría rápida para medir tus necesidades.</li>
            <li>Propuesta de diseño y presupuesto en 24-48 horas.</li>
            <li>Producción y entrega con seguimiento.</li>
          </ol>
        </section>
      </main>

      <footer className="home-footer">
        © {new Date().getFullYear()} Packya — Página en progreso.
      </footer>
    </div>
  )
}
// ...existing code...