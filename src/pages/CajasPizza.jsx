import { Helmet } from "react-helmet";

export default function CajasPizza() {
  return (
    <>
      <Helmet>
        <title>Cajas de Pizza Personalizadas en Mendoza | PACKYA</title>
        <meta
          name="description"
          content="Imprimí cajas de pizza personalizadas desde 20 unidades. PACKYA ofrece impresión digital full color, entrega inmediata en Mendoza y envíos a todo el país."
        />
      </Helmet>

      <section className="seo-section">
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
          href="https://wa.me/5492615108060"
          className="seo-btn"
          target="_blank"
          rel="noreferrer"
        >
          Cotizar cajas de pizza por WhatsApp
        </a>
      </section>
    </>
  );
}
