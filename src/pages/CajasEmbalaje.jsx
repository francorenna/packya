import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import cajacaja0 from "../assets/cajacaja0.jpg";
import cajacaja1 from "../assets/cajacaja1.jpg";
import cajacaja2 from "../assets/cajacaja2.jpg";
import cajacaja3 from "../assets/cajacaja3.jpg";

const imagenesEmbalaje = [cajacaja0, cajacaja1, cajacaja2, cajacaja3];

export default function CajasEmbalaje() {
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenesEmbalaje.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cajas de Embalaje Personalizadas en Mendoza | PACKYA</title>
        <meta
          name="description"
          content="Cajas de embalaje impresas full color para e-commerce, envíos y productos. Producción desde 20 unidades con impresión digital en Mendoza."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://packya.com.ar/cajas-de-embalaje" />
        <meta property="og:title" content="Cajas de Embalaje Personalizadas en Mendoza | PACKYA" />
        <meta property="og:description" content="Cajas de embalaje impresas full color para e-commerce, envíos y productos. Producción desde 20 unidades con impresión digital en Mendoza." />
        <meta property="og:url" content="https://packya.com.ar/cajas-de-embalaje" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="seo-section">
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '1rem'
        }}>
          <img
            src={imagenesEmbalaje[imagenActual]}
            alt={`Caja de embalaje personalizada ${imagenActual + 1}`}
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
            {imagenActual + 1} / {imagenesEmbalaje.length}
          </div>
        </div>
        <h1>Cajas de Embalaje Personalizadas</h1>

        <p>
          En PACKYA realizamos impresión de cajas de embalaje personalizadas con
          tecnología digital full color. Esto nos permite producir desde tan
          solo 20 unidades, sin matrices ni mínimos elevados, ideal para
          e-commerce, emprendimientos, envíos de productos y regalos corporativos.
        </p>

        <p>
          El packaging es fundamental para cualquier negocio. Una caja de embalaje
          personalizada transmite profesionalismo, protege tus productos y refuerza
          la identidad de marca. Perfecta para diferenciarte de la competencia
          y generar una experiencia memorable en cada entrega.
        </p>

        <h2>Versatilidad para todo tipo de productos</h2>

        <p>
          Nuestras cajas de embalaje son ideales para envíos de productos artesanales,
          regalos corporativos, suscripciones, kits personalizados, productos de belleza,
          indumentaria, accesorios y mucho más. Podés adaptar el tamaño y diseño a
          tus necesidades específicas.
        </p>

        <h2>Packaging profesional sin mínimos altos</h2>

        <p>
          Podés imprimir cajas de embalaje personalizadas desde 20 unidades, con la
          flexibilidad de cambiar diseños, crear ediciones especiales o probar
          nuevas líneas de producto sin sobrecostos. Esto es ideal para emprendedores,
          tiendas online o empresas que buscan packaging premium sin grandes inversiones.
        </p>

        <h2>Producción rápida en Mendoza</h2>

        <p>
          Realizamos entregas rápidas en toda la provincia de Mendoza y enviamos
          a todo el país. Nuestro objetivo es que puedas tener tu packaging listo
          sin demoras para que tu negocio no se detenga.
        </p>

        <h2>Impresión full color de alta calidad</h2>

        <p>
          Utilizamos impresión digital CMYK que permite reproducir diseños complejos,
          fotos, degradados y cualquier creatividad que tengas en mente. El resultado
          es un packaging profesional que destaca y genera recordación en tus clientes.
        </p>

        <h2>Pedí tu cotización ahora</h2>

        <p>
          Consultanos por WhatsApp y recibí asesoramiento personalizado para tu
          proyecto. Te ayudamos a elegir el tamaño ideal y optimizar tu diseño.
        </p>

        <a
          href="https://wa.me/5492614177745"
          className="seo-btn"
          target="_blank"
          rel="noreferrer"
        >
          Cotizar cajas de embalaje por WhatsApp
        </a>

        <h2>¿Por qué elegir PACKYA para tus cajas de embalaje?</h2>
        
        <ul>
          <li>
            <strong>Mínimo accesible:</strong> Desde 20 unidades, no 1000 como en flexografía.
          </li>
          <li>
            <strong>Tecnología digital única:</strong> Impresión directa sobre cartón, sin placas ni costos de setup.
          </li>
          <li>
            <strong>Entrega rápida:</strong> 24-48 horas en Mendoza, envíos a todo el país.
          </li>
          <li>
            <strong>Diseño incluido:</strong> Te ayudamos a adaptar tu marca al formato de caja.
          </li>
          <li>
            <strong>Variedad de tamaños:</strong> Creamos el tamaño exacto que necesitás para tus productos.
          </li>
        </ul>

        <h2>Ideal para e-commerce y emprendimientos</h2>

        <p>
          Si vendés por internet, sabés que la experiencia de unboxing es crucial.
          Una caja personalizada no solo protege tu producto, sino que genera
          una conexión emocional con tu cliente y aumenta la probabilidad de que
          comparta su compra en redes sociales, generando publicidad orgánica
          para tu marca.
        </p>

        <h2>Preguntas frecuentes sobre cajas de embalaje</h2>

        <h3>¿Qué tamaños de cajas pueden hacer?</h3>
        <p>
          Fabricamos cajas en múltiples tamaños estándar y también a medida según
          tus necesidades. Consultanos con las dimensiones de tu producto y te
          recomendamos el tamaño óptimo.
        </p>

        <h3>¿Puedo imprimir fotos en las cajas?</h3>
        <p>
          Sí, la impresión digital full color permite reproducir fotografías,
          degradados y diseños complejos con excelente calidad.
        </p>

        <h3>¿Entregan en todo el país?</h3>
        <p>
          Sí, realizamos envíos a toda Argentina. En Mendoza la entrega es en
          24-48 horas, y para el resto del país coordinaremos el envío más conveniente.
        </p>

        <Link to="/" className="seo-back-link">
          ← Volver al inicio
        </Link>
      </section>
    </>
  );
}
