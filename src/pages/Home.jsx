// ...existing code...
import React from 'react'
import '../styles/home.css'

export default function Home() {
  return (
    <div className="home-root">
      <div className="construction-wrap" aria-hidden="false">
        <div className="construction-badge">🚧 En construcción</div>
      </div>

      <header className="home-hero">
        <div className="container">
          <h1 className="hero-title">Imprimimos tus cajas y bolsas en tiempo récord</h1>
          <p className="hero-sub">
            Packaging profesional listo para usar — sin vueltas, sin demoras.
          </p>

          <div className="hero-actions">
            <a
              className="btn-primary"
              href="https://wa.me/5492610000000"
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