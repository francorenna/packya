// ...existing code...
import React, { useState } from 'react'
import '../styles/home.css'

import cajas1 from '../assets/cajas1.jpeg'
import cajas0 from '../assets/cajas0.png'
import cajas2 from '../assets/cajas2.jpeg'
import cajas3 from '../assets/cajas3.jpeg'
import cajas4 from '../assets/cajas4.jpeg'
import cajas5 from '../assets/cajas5.jpeg'
import cajas6 from '../assets/cajas6.jpeg'
import cajas7 from '../assets/cajas7.jpeg'

import bolsas0 from '../assets/bolsas0.png'
import bolsas1 from '../assets/bolsas1.jpeg'
import bolsas2 from '../assets/bolsas2.jpeg'
import bolsas3 from '../assets/bolsas3.jpeg'
import bolsas4 from '../assets/bolsas4.jpeg'
import bolsas5 from '../assets/bolsas5.jpeg'

import vino0 from '../assets/vino0.png'
import vino1 from '../assets/vino1.jpeg'

export default function Home() {
  const [expanded, setExpanded] = useState(false)
  const [mainIndex, setMainIndex] = useState(0)
  const gallery = [cajas0, cajas1, cajas2, cajas3, cajas4, cajas5, cajas6, cajas7]

  const [expandedB, setExpandedB] = useState(false)
  const [mainIndexB, setMainIndexB] = useState(0)
  const bags = [bolsas0, bolsas1, bolsas2, bolsas3, bolsas4, bolsas5]

  const [expandedV, setExpandedV] = useState(false)
  const [mainIndexV, setMainIndexV] = useState(0)
  const wines = [vino0, vino1]

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
              <img
                src={gallery[mainIndex]}
                alt={`Cajas ${mainIndex + 1}`}
                className={`showcase-main-img ${mainIndex === 0 ? 'is-priority' : ''}`}
              />
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

      {/* Bolsas showcase, same layout/behavior as Cajas */}
      <section className="product-showcase">
        <div className="container">
          <h2 className="showcase-title showcase-hero">Bolsas</h2>

          <div
            className={`showcase-gallery ${expandedB ? 'is-expanded' : ''}`}
            onMouseEnter={() => setExpandedB(true)}
            onMouseLeave={() => setExpandedB(false)}
          >
            <div
              className="showcase-main"
              onClick={() => setExpandedB((s) => !s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setExpandedB((s) => !s)}
            >
              <img
                src={bags[mainIndexB]}
                alt={`Bolsas ${mainIndexB + 1}`}
                className={`showcase-main-img ${mainIndexB === 0 ? 'is-priority' : ''}`}
              />
            </div>

            <div className="showcase-thumbs" aria-hidden={!expandedB}>
              {bags.slice(1).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Bolsas ${i + 2}`}
                  className="thumb"
                  onClick={() => {
                    setMainIndexB(i + 1)
                    setExpandedB(true)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cajas de Vino showcase */}
      <section className="product-showcase">
        <div className="container">
          <h2 className="showcase-title showcase-wine">Cajas de Vino</h2>

          <div
            className={`showcase-gallery ${expandedV ? 'is-expanded' : ''}`}
            onMouseEnter={() => setExpandedV(true)}
            onMouseLeave={() => setExpandedV(false)}
          >
            <div
              className="showcase-main"
              onClick={() => setExpandedV((s) => !s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setExpandedV((s) => !s)}
            >
              <img
                src={wines[mainIndexV]}
                alt={`Cajas de Vino ${mainIndexV + 1}`}
                className={`showcase-main-img ${mainIndexV === 0 ? 'is-priority' : ''}`}
              />
            </div>

            <div className="showcase-thumbs" aria-hidden={!expandedV}>
              {wines.slice(1).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Cajas de Vino ${i + 2}`}
                  className="thumb"
                  onClick={() => {
                    setMainIndexV(i + 1)
                    setExpandedV(true)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark highlight banner with 4 mentions */}
      <section className="highlight-banner" aria-label="Destacados">
        <div className="container highlight-grid">
          <div className="highlight-item">
            <h3>+ de 5.000 cajas impresas</h3>
          </div>
          <div className="highlight-item">
            <h3>Clientes de Mendoza y el país</h3>
          </div>
          <div className="highlight-item">
            <h3>Impresión propia</h3>
          </div>
          <div className="highlight-item">
            <h3>Entrega express real</h3>
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

      {/* Social links */}
      <section className="socials" aria-label="Redes sociales">
        <div className="container socials-inner">
          <a
            className="social-btn instagram"
            href="https://www.instagram.com/packyacajasybolsas"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.2" fill="none" />
              <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.2" fill="none" />
              <circle cx="17" cy="7" r="0.8" fill="white" />
            </svg>
            <span className="social-label">Instagram</span>
          </a>

          <a
            className="social-btn tiktok"
            href="https://www.tiktok.com/@packyacajasybolsas"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M9 7v6a3 3 0 1 0 3 3V9h3V7h-6z" fill="white" />
            </svg>
            <span className="social-label">TikTok</span>
          </a>
        </div>
      </section>
    </div>
  )
}
// ...existing code...