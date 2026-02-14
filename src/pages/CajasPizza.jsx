import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import cajas0 from "../assets/cajas0.png";
import cajas1 from "../assets/cajas1.jpeg";
import cajas2 from "../assets/cajas2.jpeg";
import cajas3 from "../assets/cajas3.jpeg";
import cajas4 from "../assets/cajas4.jpeg";
import cajas5 from "../assets/cajas5.jpeg";
import cajas6 from "../assets/cajas6.jpeg";
import cajas7 from "../assets/cajas7.jpeg";
import cajas8 from "../assets/cajas8.jpg";
import cajas9 from "../assets/cajas9.jpg";
import cajas10 from "../assets/cajas10.png";
import cajas11 from "../assets/cajas11.png";
import cajas12 from "../assets/cajas12.png";
import cajas13 from "../assets/cajas13.jpg";
import cajas14 from "../assets/cajas14.jpg";
import cajas15 from "../assets/cajas15.jpg";
import nuevaCaja0 from "../assets/Nuevas/Sin título-1_Mesa de trabajo 1 copia.jpg";
import nuevaCaja1 from "../assets/Nuevas/Sin título-1_Mesa de trabajo 1.jpg";
import nuevaCaja2 from "../assets/Nuevas/Tito.png";
import nuevaCaja3 from "../assets/Nuevas/amichipizza.png";
import nuevaCaja4 from "../assets/Nuevas/amichipizza3.png";
import nuevaCaja5 from "../assets/Nuevas/b0d63d0e-f7e1-4e54-9886-3a4ca461b619.png";
import nuevaCaja6 from "../assets/Nuevas/fugazza.png";
import nuevaCaja7 from "../assets/Nuevas/fugazza2.png";
import nuevaCaja8 from "../assets/Nuevas/fugazza3.png";
import nuevaCaja9 from "../assets/Nuevas/ilnono.png";
import nuevaCaja10 from "../assets/Nuevas/lalolita.png";
import nuevaCaja11 from "../assets/Nuevas/lomomania_Mesa de trabajo 1 copia.jpg";
import nuevaCaja12 from "../assets/Nuevas/lomomania_Mesa de trabajo 1.jpg";
import nuevaCaja13 from "../assets/Nuevas/matilde.png";
import nuevaCaja14 from "../assets/Nuevas/pizzaya.png";
import nuevaCaja15 from "../assets/Nuevas/yogui.png";

const imagenesCajas = [
  cajas0, cajas1, cajas2, cajas3, cajas4, cajas5, cajas6, cajas7, 
  cajas8, cajas9, cajas10, cajas11, cajas12, cajas13, cajas14, cajas15,
  nuevaCaja0, nuevaCaja1, nuevaCaja2, nuevaCaja3, nuevaCaja4, nuevaCaja5,
  nuevaCaja6, nuevaCaja7, nuevaCaja8, nuevaCaja9, nuevaCaja10, nuevaCaja11,
  nuevaCaja12, nuevaCaja13, nuevaCaja14, nuevaCaja15
];

export default function CajasPizza() {
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenesCajas.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cajas de Pizza Personalizadas en Mendoza | PACKYA</title>
        <meta
          name="description"
          content="Imprimí cajas de pizza personalizadas desde 20 unidades. PACKYA ofrece impresión digital full color, entrega inmediata en Mendoza y envíos a todo el país."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://packya.com.ar/cajas-de-pizza" />
        <meta property="og:title" content="Cajas de Pizza Personalizadas en Mendoza | PACKYA" />
        <meta property="og:description" content="Imprimí cajas de pizza personalizadas desde 20 unidades. PACKYA ofrece impresión digital full color, entrega inmediata en Mendoza y envíos a todo el país." />
        <meta property="og:url" content="https://packya.com.ar/cajas-de-pizza" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="seo-section">
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '1rem'
        }}>
          <img
            src={imagenesCajas[imagenActual]}
            alt={`Caja de pizza personalizada ${imagenActual + 1}`}
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
            {imagenActual + 1} / {imagenesCajas.length}
          </div>
        </div>
        <h1>Cajas de Pizza Personalizadas</h1>

        <p>
          En PACKYA realizamos impresión de cajas de pizza personalizadas
          utilizando tecnología de impresión digital full color. Esto nos
          permite producir desde tan solo 20 unidades, sin matrices ni mínimos
          elevados, ideal para pizzerías, emprendimientos gastronómicos y marcas
          que buscan diferenciarse.
        </p>

        <p>
          A diferencia de la impresión tradicional en flexografía, nuestra
          tecnología permite cambiar diseños, hacer pruebas de marca, ediciones
          especiales o tiradas pequeñas sin sobrecostos.
        </p>

        <h2>Impresión de cajas de pizza desde pocas unidades</h2>

        <p>
          Podés imprimir 20, 50, 100, 250 o 500 cajas de pizza personalizadas con
          tu logo, colores y datos de contacto. Esta modalidad es ideal para
          nuevos negocios, locales que renuevan su identidad o promociones
          especiales.
        </p>

        <h2>Entrega inmediata en Mendoza y envíos nacionales</h2>

        <p>
          Realizamos entregas rápidas en Mendoza y envíos a todo el país. Nuestro
          objetivo es que puedas resolver tu packaging sin esperas prolongadas
          ni compras masivas.
        </p>

        <h2>Pedí tu cotización ahora</h2>

        <p>
          Consultanos por WhatsApp y recibí asesoramiento personalizado para tu
          pizzería o emprendimiento.
        </p>

        <a
          href="https://wa.me/5492614177745"
          className="seo-btn"
          target="_blank"
          rel="noreferrer"
        >
          Cotizar cajas de pizza por WhatsApp
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
