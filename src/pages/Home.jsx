// ...existing code...
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import '../styles/home.css'

import cajas0 from '../assets/cajas0.png'
import cajas1 from '../assets/cajas1.jpeg'
import cajas2 from '../assets/cajas2.jpeg'
import cajas3 from '../assets/cajas3.jpeg'
import cajas4 from '../assets/cajas4.jpeg'
import cajas5 from '../assets/cajas5.jpeg'
import cajas6 from '../assets/cajas6.jpeg'
import cajas7 from '../assets/cajas7.jpeg'
import cajas8 from '../assets/cajas8.jpg'
import cajas9 from '../assets/cajas9.jpg'
import cajas10 from '../assets/cajas10.png'
import cajas11 from '../assets/cajas11.png'
import cajas12 from '../assets/cajas12.png'
import cajas13 from '../assets/cajas13.jpg'
import cajas14 from '../assets/cajas14.jpg'
import cajas15 from '../assets/cajas15.jpg'
import imagenportada from '../assets/imagenportada.png'

import bolsas0 from '../assets/bolsas0.png'
import bolsas1 from '../assets/bolsas1.jpeg'
import bolsas2 from '../assets/bolsas2.jpeg'
import bolsas3 from '../assets/bolsas3.jpeg'
import bolsas4 from '../assets/bolsas4.jpeg'
import bolsas5 from '../assets/bolsas5.jpeg'
import bolsas6 from '../assets/bolsas6.png'
import bolsas7 from '../assets/bolsas7.jpg'
import bolsas8 from '../assets/bolsas8.png'

import vino0 from '../assets/vino0.png'
import vino1 from '../assets/vino1.png'
import vino2 from '../assets/vino2.jpg'
import vino3 from '../assets/vino3.jpg'
import vino4 from '../assets/vino4.png'

import cajacaja0 from '../assets/cajacaja0.jpg'
import cajacaja1 from '../assets/cajacaja1.jpg'
import cajacaja2 from '../assets/cajacaja2.jpg'
import cajacaja3 from '../assets/cajacaja3.jpg'

import pcfinal from '../assets/pcfinal.png'

export default function Home() {
  const [expanded, setExpanded] = useState(false)
  const [mainIndex, setMainIndex] = useState(0)
  const gallery = [
    cajas0, cajas1, cajas2, cajas3, cajas4, cajas5, cajas6, cajas7,
    cajas8, cajas9, cajas10, cajas11, cajas12, cajas13, cajas14, cajas15
  ]

  const [expandedB, setExpandedB] = useState(false)
  const [mainIndexB, setMainIndexB] = useState(0)
  const bags = [bolsas0, bolsas1, bolsas2, bolsas3, bolsas4, bolsas5, bolsas6, bolsas7, bolsas8]

  const [expandedV, setExpandedV] = useState(false)
  const [mainIndexV, setMainIndexV] = useState(0)
  const wines = [vino0, vino1, vino2, vino3, vino4]

  const [expandedE, setExpandedE] = useState(false)
  const [mainIndexE, setMainIndexE] = useState(0)
  const packaging = [cajacaja0, cajacaja1, cajacaja2, cajacaja3]

  // Carrusel automático para cajas
  useEffect(() => {
    const intervalo = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % gallery.length)
    }, 3000)
    return () => clearInterval(intervalo)
  }, [gallery.length])

  // Carrusel automático para bolsas
  useEffect(() => {
    const intervalo = setInterval(() => {
      setMainIndexB((prev) => (prev + 1) % bags.length)
    }, 3000)
    return () => clearInterval(intervalo)
  }, [bags.length])

  // Carrusel automático para vino
  useEffect(() => {
    const intervalo = setInterval(() => {
      setMainIndexV((prev) => (prev + 1) % wines.length)
    }, 3000)
    return () => clearInterval(intervalo)
  }, [wines.length])

  // Carrusel automático para cajas de embalaje
  useEffect(() => {
    const intervalo = setInterval(() => {
      setMainIndexE((prev) => (prev + 1) % packaging.length)
    }, 3000)
    return () => clearInterval(intervalo)
  }, [packaging.length])

  return (
    <div className="home-root">
      <Helmet>
        <link rel="canonical" href="https://packya.com.ar/" />
      </Helmet>
      {/* Removed construction badge as requested */}

      <header className="home-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title hero-title-special">
              CAJAS Y BOLSAS IMPRESAS
              <br />
              <span className="highlight-delivery">FULL COLOR</span>
            </h1>
            <p className="hero-subtitle">
              Packaging con tu marca, listo para vender desde el primer día.
            </p>
            
            {/* Micro-copy clave */}
            <p className="hero-microcopy">
              ✔ Entregas rápidas · ✔ Desde 1 unidad · ✔ Mayorista por cantidad
            </p>
            
            {/* Íconos de identificación rápida */}
            <div className="hero-quick-icons">
              <div className="quick-icon">
                <span className="icon-emoji">🍕</span>
              </div>
              <div className="quick-icon">
                <span className="icon-emoji">🛍️</span>
              </div>
              <div className="quick-icon">
                <span className="icon-emoji">📦</span>
              </div>
            </div>
            
            {/* Sección de diferenciales con 4 íconos */}
            <div className="hero-differentials">
              <div className="differential-item">
                <div className="differential-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span>Entregas en 24/48 hs</span>
              </div>
              <div className="differential-item">
                <div className="differential-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <span>Desde 1 unidad para muestras</span>
              </div>
              <div className="differential-item">
                <div className="differential-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span>Precio mayorista por cantidad</span>
              </div>
              <div className="differential-item">
                <div className="differential-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </div>
                <span>Impresión personalizada</span>
              </div>
            </div>

            <div className="hero-actions">
              <a
                className="btn-whatsapp-main"
                href="https://wa.me/5492614177745?text=Hola%20Packya!%20Quiero%20lista%20de%20precios%20para%20mi%20negocio."
                target="_blank"
                rel="noreferrer"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div className="btn-whatsapp-content">
                  <span className="btn-whatsapp-text">PEDIR LISTA POR WHATSAPP</span>
                  <span className="btn-whatsapp-phone">📞 261 4177745</span>
                </div>
              </a>
              
              <Link to="/simulador" className="btn-simulator-main">
                <svg className="simulator-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" opacity=".3"/>
                </svg>
                <div className="btn-simulator-content-main">
                  <span className="btn-simulator-text">SIMULADOR DE CAJAS Y BOLSAS</span>
                  <span className="btn-simulator-subtitle">Probá tu logo y mirá cómo queda</span>
                </div>
              </Link>
            </div>

            <p className="hero-trust">
              ✔ Entrega rápida en Mendoza y envíos a todo el país
            </p>
          </div>
          
          <div className="hero-image">
            <div className="image-frame">
              <img src={imagenportada} alt="Producción de cajas personalizadas" />
            </div>
          </div>
        </div>
      </header>

      {/* Floating social links - círculos animados */}
      <section className="social-floating" aria-label="Seguinos en redes">
        <div className="container">
          <p className="social-floating-text">Seguinos en nuestras redes</p>
          <div className="social-floating-icons">
            <a
              className="social-circle instagram-circle"
              href="https://www.instagram.com/packyacajasybolsas"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg className="social-circle-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
            </a>

            <a
              className="social-circle facebook-circle"
              href="https://www.facebook.com/packyacajasybolsas"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg className="social-circle-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              className="social-circle tiktok-circle"
              href="https://www.tiktok.com/@packyacajasybolsas"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg className="social-circle-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">¿Qué dicen nuestros clientes?</h2>
          <p className="testimonials-subtitle">Más de 200 negocios confían en PACKYA para su packaging</p>
          
          <div className="testimonials-grid">
            {/* Testimonio 1 - Rapidez */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar testimonial-avatar-1">M</div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">Martín González</h3>
                  <p className="testimonial-business">Pizzería Don Mario - Godoy Cruz</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon-testimonial" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                "¡Increíble! Necesitaba cajas urgente para el fin de semana y en 48 horas las tenía en la pizzería. 
                La calidad es excelente y mis clientes ahora reconocen mi marca al toque. Super recomendable."
              </p>
            </div>

            {/* Testimonio 2 - Calidad */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar testimonial-avatar-2">C</div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">Carolina Suárez</h3>
                  <p className="testimonial-business">Empanadas del Valle - Luján</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon-testimonial" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                "El cartón es de primera calidad, mucho más resistente que otros proveedores. 
                Mis empanadas llegan perfectas y la impresión se ve profesional. ¡Me encantó trabajar con ustedes!"
              </p>
            </div>

            {/* Testimonio 3 - Atención */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar testimonial-avatar-3">R</div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">Roberto Fernández</h3>
                  <p className="testimonial-business">Burguer Street - Maipú</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon-testimonial" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                "La atención por WhatsApp es inmediata. Me ayudaron con el diseño, me mandaron muestras 
                y siempre respondieron todas mis dudas. Son un equipo de 10, se nota que les importa el cliente."
              </p>
            </div>

            {/* Testimonio 4 - Personalización */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar testimonial-avatar-4">L</div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">Lucía Morales</h3>
                  <p className="testimonial-business">Pasteleria Delicia - Capital</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon-testimonial" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                "Pedí cajas personalizadas para mi pasteleria y quedaron HERMOSAS. La impresión a full color 
                hace que mis tortas se vean aún más especiales. Mis clientas están fascinadas con el packaging."
              </p>
            </div>

            {/* Testimonio 5 - Precio y cantidad */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar testimonial-avatar-5">D</div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">Diego Ramírez</h3>
                  <p className="testimonial-business">Rotiseria El Buen Sabor - Las Heras</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon-testimonial" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                "Arranqué con 50 cajas para probar y después pedí 500. El precio mayorista es increíble y 
                no tengo que comprar miles como me pedían en otros lados. Justo lo que necesitaba para mi rotisería."
              </p>
            </div>

            {/* Testimonio 6 - Confianza y recomendación */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar testimonial-avatar-6">A</div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">Andrea Paz</h3>
                  <p className="testimonial-business">Sushi Zen - Chacras de Coria</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon-testimonial" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">
                "Ya es la tercera vez que pido y siempre impecable. Las cajas para sushi son hermosas, 
                llegan perfectas y mis clientes me felicitan por la presentación. Ya los recomendé a varios colegas. ¡Gracias PACKYA!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner clickeable para contacto por WhatsApp */}
      <section className="contact-banners">
        <div className="container">
          <div className="banners-grid">
            <a
              href="https://wa.me/5492614177745?text=Hola%20Packya!%20Quiero%20lista%20de%20precios%20para%20mi%20negocio."
              target="_blank"
              rel="noreferrer"
              className="banner-link"
            >
              <img src={pcfinal} alt="Banner - Contactar por WhatsApp" className="banner-image" />
            </a>
          </div>
        </div>
      </section>

      {/* New showcase section under banner - Prioridad 1: Gastronomía y delivery */}
      <section id="product-showcase" className="product-showcase">
        <div className="container">
          <h2 className="showcase-title showcase-hero">Cajas de Pizza para Delivery</h2>
          <p className="showcase-desc">Ideal para pizzerías, restaurantes y comercios gastronómicos. Impresión profesional que destaca tu marca en cada entrega.</p>

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

      {/* Prioridad 2: Bolsas kraft */}
      <section className="product-showcase">
        <div className="container">
          <h2 className="showcase-title showcase-hero">Bolsas Kraft Personalizadas</h2>
          <p className="showcase-desc">Ideales para delivery gastronómico, comercios y emprendimientos. Impresión digital de alta calidad que refleja tu identidad.</p>

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

      {/* Prioridad 3: Cajas de Vino */}
      <section className="product-showcase">
        <div className="container">
          <h2 className="showcase-title showcase-wine">Cajas para Vinos y Botellas</h2>
          <p className="showcase-desc">Packaging premium para bodegas, vinotecas y regalos corporativos. Tu marca en cada detalle.</p>

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

      {/* Prioridad 4: Embalaje general */}
      <section className="product-showcase">
        <div className="container">
          <h2 className="showcase-title showcase-hero">Cajas de Embalaje para E-commerce</h2>
          <p className="showcase-desc">Packaging profesional para envíos y productos. Ideal para tiendas online y emprendimientos que buscan diferenciarse.</p>

          <div
            className={`showcase-gallery ${expandedE ? 'is-expanded' : ''}`}
            onMouseEnter={() => setExpandedE(true)}
            onMouseLeave={() => setExpandedE(false)}
          >
            <div
              className="showcase-main"
              onClick={() => setExpandedE((s) => !s)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setExpandedE((s) => !s)}
            >
              <img
                src={packaging[mainIndexE]}
                alt={`Cajas de Embalaje ${mainIndexE + 1}`}
                className="showcase-main-img is-embalaje"
              />
            </div>

            <div className="showcase-thumbs" aria-hidden={!expandedE}>
              {packaging.slice(1).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Cajas de Embalaje ${i + 2}`}
                  className="thumb thumb-embalaje"
                  onClick={() => {
                    setMainIndexE(i + 1)
                    setExpandedE(true)
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
            className="social-btn facebook"
            href="https://www.facebook.com/packyacajasybolsas"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <svg className="social-icon" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="social-label">Facebook</span>
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
          <Link to="/cajas-de-embalaje">Cajas de Embalaje</Link>
          <Link to="/">Inicio</Link>
          <a href="https://wa.me/5492614177745" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5492614177745?text=Hola%20Packya!%20Quiero%20lista%20de%20precios%20para%20mi%20negocio."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="whatsapp-float-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="whatsapp-float-tooltip">Consultá ahora</span>
      </a>
    </div>
  )
}
// ...existing code...