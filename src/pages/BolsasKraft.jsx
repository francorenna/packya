import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import bolsas0 from "../assets/bolsas0.png";
import bolsas1 from "../assets/bolsas1.jpeg";
import bolsas2 from "../assets/bolsas2.jpeg";
import bolsas3 from "../assets/bolsas3.jpeg";
import bolsas4 from "../assets/bolsas4.jpeg";
import bolsas5 from "../assets/bolsas5.jpeg";
import bolsas6 from "../assets/bolsas6.png";
import bolsas7 from "../assets/bolsas7.jpg";
import bolsas8 from "../assets/bolsas8.png";

const imagenesBolsas = [
  bolsas0, bolsas1, bolsas2, bolsas3, bolsas4, bolsas5, bolsas6, bolsas7, bolsas8
];

export default function BolsasKraft() {
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenesBolsas.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bolsas Kraft Personalizadas en Mendoza | PACKYA</title>
        <meta
          name="description"
          content="Bolsas kraft impresas a todo color desde 20 unidades. Ideales para comercios, boutiques, ferias y regalos. Impresión digital sin mínimos en Mendoza."
        />
        <link rel="canonical" href="https://packya.com.ar/bolsas-kraft" />
      </Helmet>

      <section className="seo-section">
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '1rem'
        }}>
          <img
            src={imagenesBolsas[imagenActual]}
            alt={`Bolsa kraft personalizada ${imagenActual + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '500px',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
          <div style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
            {imagenActual + 1} / {imagenesBolsas.length}
          </div>
        </div>
        <h1>Bolsas Kraft Personalizadas</h1>

        <p>
          En PACKYA imprimimos bolsas kraft personalizadas utilizando tecnología
          de impresión digital full color. Esto nos permite producir desde solo
          20 unidades, sin necesidad de matrices ni grandes tiradas, ideal para
          comercios, boutiques, ferias, eventos y regalos empresariales.
        </p>

        <p>
          Las bolsas kraft son una opción ecológica, resistente y estética que
          transmite valores de calidad y responsabilidad ambiental. Al
          personalizarlas con tu marca, transformás cada venta en una
          oportunidad de branding.
        </p>

        <h2>Impresión digital sin mínimos elevados</h2>

        <p>
          Podés imprimir bolsas kraft personalizadas desde 20 unidades, con la
          posibilidad de cambiar diseños, probar variantes o crear ediciones
          especiales sin costos adicionales de matriz. Esto es ideal para nuevos
          emprendimientos, tiendas que renuevan su identidad o eventos
          temporales.
        </p>

        <h2>Entrega rápida en Mendoza y envíos nacionales</h2>

        <p>
          Realizamos entregas rápidas en Mendoza y enviamos a todo el país.
          Nuestro objetivo es que puedas tener tu packaging personalizado sin
          esperas prolongadas ni inversiones masivas.
        </p>

        <h2>Pedí tu presupuesto ahora</h2>

        <p>
          Consultanos por WhatsApp y recibí asesoramiento personalizado para tu
          comercio o evento.
        </p>

        <a
          href="https://wa.me/5492614177745"
          className="seo-btn"
          target="_blank"
          rel="noreferrer"
        >
          Cotizar bolsas kraft por WhatsApp
        </a>

        <footer className="seo-footer">
          <p className="seo-footer-title">Explorá más productos</p>
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
      </section>
    </>
  );
}
