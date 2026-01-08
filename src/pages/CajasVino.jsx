import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function CajasVino() {
  return (
    <>
      <Helmet>
        <title>Cajas de Vino Personalizadas en Mendoza | PACKYA</title>
        <meta
          name="description"
          content="Cajas de vino impresas full color para bodegas, vinotecas y regalos empresariales. Producción desde 20 unidades con impresión digital en Mendoza."
        />
      </Helmet>

      <section className="seo-section">
        <h1>Cajas de Vino Personalizadas</h1>

        <p>
          En PACKYA realizamos impresión de cajas de vino personalizadas con
          tecnología digital full color. Esto nos permite producir desde tan
          solo 20 unidades, sin matrices ni mínimos elevados, ideal para
          bodegas, vinotecas, regalos empresariales y eventos especiales.
        </p>

        <p>
          El packaging es fundamental en la industria del vino. Una caja
          personalizada transmite calidad, profesionalismo y refuerza la
          identidad de marca, tanto para ventas directas como para obsequios
          corporativos o ediciones limitadas.
        </p>

        <h2>Packaging premium sin mínimos altos</h2>

        <p>
          Podés imprimir cajas de vino personalizadas desde 20 unidades, con la
          flexibilidad de cambiar diseños, crear ediciones especiales o probar
          nuevas líneas de producto sin sobrecostos. Esto es ideal para bodegas
          boutique, lanzamientos o regalos corporativos.
        </p>

        <h2>Producción rápida en Mendoza, corazón vitivinícola</h2>

        <p>
          Estamos en Mendoza, cerca de las principales bodegas de Argentina.
          Realizamos entregas rápidas en la provincia y enviamos a todo el país.
          Nuestro objetivo es que puedas tener tu packaging listo sin demoras.
        </p>

        <h2>Pedí tu cotización ahora</h2>

        <p>
          Consultanos por WhatsApp y recibí asesoramiento personalizado para tu
          bodega, vinoteca o evento.
        </p>

        <a
          href="https://wa.me/5492614177745"
          className="seo-btn"
          target="_blank"
          rel="noreferrer"
        >
          Cotizar cajas de vino por WhatsApp
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
