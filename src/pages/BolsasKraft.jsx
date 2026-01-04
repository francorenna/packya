import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function BolsasKraft() {
  return (
    <>
      <Helmet>
        <title>Bolsas Kraft Personalizadas en Mendoza | PACKYA</title>
        <meta
          name="description"
          content="Bolsas kraft impresas a todo color desde 20 unidades. Ideales para comercios, boutiques, ferias y regalos. Impresión digital sin mínimos en Mendoza."
        />
      </Helmet>

      <section className="seo-section">
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
          href="https://wa.me/5492615108060"
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
            <a href="https://wa.me/5492615108060" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}
