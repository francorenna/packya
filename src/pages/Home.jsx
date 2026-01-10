// ...existing code...
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

import cajas1 from '../assets/cajas1.jpeg'
import cajas0 from '../assets/cajas0.png'
import cajas2 from '../assets/cajas2.jpeg'
import cajas3 from '../assets/cajas3.jpeg'
import cajas4 from '../assets/cajas4.jpeg'
import cajas5 from '../assets/cajas5.jpeg'
import cajas6 from '../assets/cajas6.jpeg'
import cajas7 from '../assets/cajas7.jpeg'
import imagenportada from '../assets/imagenportada.png'

import bolsas0 from '../assets/bolsas0.png'
import bolsas1 from '../assets/bolsas1.jpeg'
import bolsas2 from '../assets/bolsas2.jpeg'
import bolsas3 from '../assets/bolsas3.jpeg'
import bolsas4 from '../assets/bolsas4.jpeg'
import bolsas5 from '../assets/bolsas5.jpeg'

import vino0 from '../assets/vino0.png'
import vino1 from '../assets/vino1.jpeg'

import pcb from '../assets/pcb.png'
import pcm from '../assets/pcm.png'

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
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Cajas y bolsas personalizadas para tu marca
              <span className="hero-subtitle-title">Fabricación directa – sin intermediarios</span>
            </h1>
            <p className="hero-subtitle">
              Producción propia desde 50 unidades · Entrega rápida · Envíos a todo el país
            </p>
            
            <ul className="hero-features">
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Impresión profesional</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Atención directa por WhatsApp</span>
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Producción propia</span>
              </li>
            </ul>

            <div className="hero-actions">
              <a
                className="btn-whatsapp"
                href="https://wa.me/5492614177745"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cotizar ahora por WhatsApp
              </a>
              <a className="btn-secondary" href="#product-showcase">
                Ver trabajos reales
              </a>
            </div>
            
            <p className="hero-trust">
              <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Más de 1.000 cajas producidas para marcas de Mendoza
            </p>
          </div>
          
          <div className="hero-image">
            <div className="image-frame">
              <img src={imagenportada} alt="Producción de cajas personalizadas" />
            </div>
          </div>
        </div>
      </header>

      {/* Banners clickeables para contacto por WhatsApp */}
      <section className="contact-banners">
        <div className="container">
          <div className="banners-grid">
            <a
              href="https://wa.me/5492614177745"
              target="_blank"
              rel="noreferrer"
              className="banner-link"
            >
              <img src={pcb} alt="Banner PCB - Contactar por WhatsApp" className="banner-image" />
            </a>
            <a
              href="https://wa.me/5492614177745"
              target="_blank"
              rel="noreferrer"
              className="banner-link"
            >
              <img src={pcm} alt="Banner PCM - Contactar por WhatsApp" className="banner-image" />
            </a>
          </div>
        </div>
      </section>

      {/* New showcase section under banner */}
      <section id="product-showcase" className="product-showcase">
        <div className="container">
          <h2 className="showcase-title showcase-hero">Cajas de Pizza Personalizadas</h2>
          <p className="showcase-desc">Impresión full color en cartón corrugado. Desde 20 unidades. Ideal para pizzerías y delivery.</p>

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
          <h2 className="showcase-title showcase-hero">Bolsas Personalizadas</h2>
          <p className="showcase-desc">Bolsas kraft, papel madera y más. Impresión digital de alta calidad. Perfectas para tiendas y emprendimientos.</p>

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
          <h2 className="showcase-title showcase-wine">Cajas para Vinos y Botellas</h2>
          <p className="showcase-desc">Packaging premium para bodegas y vinotecas. Diseños personalizados que destacan tu marca.</p>

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
            <h3>Desde 20 unidades</h3>
          </div>
          <div className="highlight-item">
            <h3>Tecnología única en Argentina</h3>
          </div>
          <div className="highlight-item">
            <h3>Impresión digital full color</h3>
          </div>
          <div className="highlight-item">
            <h3>Entrega inmediata en Mendoza</h3>
          </div>
        </div>
      </section>

      {/* Nueva sección: Por qué PACKYA es diferente */}
      <section id="por-que-packya" className="why-packya">
        <div className="container">
          <h2 className="section-title">Por qué PACKYA es diferente</h2>
          <p className="section-intro">
            Somos la única empresa en Argentina con tecnología de impresión digital para packaging. 
            Esto nos permite ofrecerte lo que nadie más puede.
          </p>
          
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-head">🎯</div>
              <h3 className="feature-title">Sin mínimos imposibles</h3>
              <p className="feature-desc">
                Imprimimos desde 20 unidades. A diferencia de la flexografía tradicional que exige mínimos de 1000+, 
                PACKYA es ideal para emprendedores que recién arrancan o negocios que quieren probar diseños nuevos.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-head">🖨️</div>
              <h3 className="feature-title">Impresión digital full color</h3>
              <p className="feature-desc">
                Tecnología de impresión directa sobre cartón. Sin placas, sin costos de setup. 
                Podés cambiar el diseño en cada pedido sin pagar de más.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-head">⚡</div>
              <h3 className="feature-title">Producción y entrega inmediata</h3>
              <p className="feature-desc">
                Fabricación propia en Mendoza. Entrega express en 24-48hs en zona metropolitana. 
                Envíos a toda Argentina con seguimiento.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-head">💡</div>
              <h3 className="feature-title">Alternativa real a la flexografía</h3>
              <p className="feature-desc">
                ¿Te pidieron 3000 cajas mínimo? En PACKYA imprimimos lo que realmente necesitás. 
                Perfecto para testear mercado, eventos o temporadas cortas.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-head">🎨</div>
              <h3 className="feature-title">Diseños variables sin costo extra</h3>
              <p className="feature-desc">
                Cada caja puede tener un diseño diferente en el mismo pedido. 
                Ideal para ediciones limitadas, promociones o personalización por cliente.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-head">🏆</div>
              <h3 className="feature-title">Para emprendedores que piensan en grande</h3>
              <p className="feature-desc">
                Tu packaging profesional desde el día uno, sin inversión inicial gigante. 
                Crecé a tu ritmo, nosotros te acompañamos con cada pedido.
              </p>
            </article>
          </div>

          <div className="cta-center">
            <a
              className="btn-primary-large"
              href="https://wa.me/5492614177745"
              target="_blank"
              rel="noreferrer"
            >
              💬 Consultar disponibilidad y precio
            </a>
          </div>
        </div>
      </section>

      {/* Nueva sección: Qué podés imprimir */}
      <section className="what-to-print">
        <div className="container">
          <h2 className="section-title">Qué podés imprimir con PACKYA</h2>
          
          <div className="print-options">
            <div className="print-category">
              <h3 className="category-title">📦 Cajas</h3>
              <ul className="category-list">
                <li>Cajas de pizza (25cm a 45cm)</li>
                <li>Cajas para delivery de comida</li>
                <li>Cajas para hamburguesas y sandwiches</li>
                <li>Cajas para empanadas y panificados</li>
                <li>Cajas para productos artesanales</li>
                <li>Cajas para vinos y botellas</li>
                <li>Cajas para regalos corporativos</li>
                <li>Cajas para e-commerce</li>
              </ul>
            </div>

            <div className="print-category">
              <h3 className="category-title">🛍️ Bolsas</h3>
              <ul className="category-list">
                <li>Bolsas kraft personalizadas</li>
                <li>Bolsas papel madera con tu logo</li>
                <li>Bolsas para delivery</li>
                <li>Bolsas para tiendas de ropa</li>
                <li>Bolsas para librerías</li>
                <li>Bolsas para farmacias</li>
                <li>Bolsas para ferias y eventos</li>
                <li>Bolsas institucionales</li>
              </ul>
            </div>
          </div>

          <div className="info-box">
            <p>
              <strong>¿No encontrás lo que buscás?</strong> Consultanos por WhatsApp. 
              Tenemos más formatos y podemos desarrollar soluciones a medida.
            </p>
          </div>
        </div>
      </section>

      {/* Nueva sección: Zonas de entrega */}
      <section className="delivery-zones">
        <div className="container">
          <h2 className="section-title">Zonas de entrega</h2>
          
          <div className="zones-grid">
            <div className="zone-card zone-primary">
              <div className="zone-icon">🚚</div>
              <h3 className="zone-title">Entrega inmediata en Mendoza</h3>
              <p className="zone-desc">
                <strong>24-48 horas</strong> en Gran Mendoza: Capital, Godoy Cruz, Las Heras, 
                Guaymallén, Maipú, Luján de Cuyo.
              </p>
              <p className="zone-detail">
                También llegamos a San Rafael, San Martín, Tunuyán, Tupungato y Valle de Uco.
              </p>
            </div>

            <div className="zone-card">
              <div className="zone-icon">📍</div>
              <h3 className="zone-title">Retiro en planta</h3>
              <p className="zone-desc">
                Retirá tu pedido en nuestras instalaciones en Mendoza. 
                Coordinamos horario por WhatsApp.
              </p>
            </div>

            <div className="zone-card">
              <div className="zone-icon">🇦🇷</div>
              <h3 className="zone-title">Envíos a toda Argentina</h3>
              <p className="zone-desc">
                Despachamos a Buenos Aires, Córdoba, Rosario, y todo el país vía correo. 
                Tiempo estimado: 3-7 días hábiles según destino.
              </p>
            </div>
          </div>

          <div className="cta-center">
            <a
              className="btn-primary-large"
              href="https://wa.me/5492614177745"
              target="_blank"
              rel="noreferrer"
            >
              📲 Consultar costo de envío a mi zona
            </a>
          </div>
        </div>
      </section>

      <main className="container main-content">
        <section id="beneficios" className="features-grid-compact">
          <h2 className="section-title-small">Cómo trabajamos</h2>
          
          <article className="feature-card">
            <div className="feature-head">⚡</div>
            <h3 className="feature-title">1. Contacto express</h3>
            <p className="feature-desc">
              Escribinos por WhatsApp con lo que necesitás. Respondemos en minutos con asesoramiento personalizado.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-head">🎨</div>
            <h3 className="feature-title">2. Diseño y presupuesto</h3>
            <p className="feature-desc">
              Te enviamos propuesta visual y cotización en 24-48 horas. Si ya tenés diseño, lo adaptamos sin cargo.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-head">📦</div>
            <h3 className="feature-title">3. Producción y entrega</h3>
            <p className="feature-desc">
              Fabricamos tu pedido con seguimiento en tiempo real. Entrega coordinada o envío con tracking.
            </p>
          </article>
        </section>

        <section className="faq-section">
          <h2 className="section-title-small">Preguntas frecuentes</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">¿Cuál es el mínimo de unidades?</h3>
              <p className="faq-answer">
                Desde 20 unidades. No cobramos costos de setup ni placas como en flexografía tradicional.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Cuánto tarda la producción?</h3>
              <p className="faq-answer">
                24-48 horas para pedidos estándar en Mendoza. Para envíos al interior sumá 3-7 días hábiles según destino.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Puedo imprimir a todo color?</h3>
              <p className="faq-answer">
                Sí, impresión digital full color CMYK. Podés usar fotos, degradados y cualquier diseño complejo.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">¿Hacen el diseño?</h3>
              <p className="faq-answer">
                Sí, incluimos adaptación de tu marca al packaging. Si no tenés diseño, te ayudamos a crearlo desde cero.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>PACKYA</h3>
            <p>Impresión digital de cajas y bolsas personalizadas</p>
            <p>Mendoza, Argentina</p>
          </div>
          <div className="footer-links">
            <h4>Contacto</h4>
            <p>
              <a href="https://wa.me/5492614177745" target="_blank" rel="noreferrer">
                WhatsApp: +54 9 261 417-7745
              </a>
            </p>
            <p>Seguinos en redes sociales ⬇️</p>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} PACKYA — Cajas y bolsas personalizadas Mendoza | 
          Impresión digital desde 20 unidades | Packaging para emprendedores
        </div>
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

      <footer className="seo-footer">
        <p className="seo-footer-title">Explorá nuestros productos</p>
        <div className="seo-links">
          <Link to="/cajas-de-pizza">Cajas de Pizza</Link>
          <Link to="/bolsas-kraft">Bolsas Kraft</Link>
          <Link to="/cajas-de-vino">Cajas de Vino</Link>
          <Link to="/">Inicio</Link>
          <a href="https://wa.me/5492614177745" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  )
}
// ...existing code...