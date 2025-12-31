export default function Home() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-[#f6f2e9] py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Imprimimos tus cajas y bolsas en tiempo récord
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Packaging profesional listo para usar – sin vueltas – sin demoras
        </p>

        <a
          href="https://wa.me/5492610000000"
          target="_blank"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg hover:bg-green-700 transition"
        >
          Pedir presupuesto por WhatsApp
        </a>
      </section>

      {/* BENEFICIOS */}
      <section className="grid md:grid-cols-3 gap-8 py-16 px-6 max-w-6xl mx-auto text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">⚡ Entrega rápida</h3>
          <p>Producción express sin promesas falsas.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📦 Packaging profesional</h3>
          <p>Cajas y bolsas listas para vender.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🎨 Diseño incluido</h3>
          <p>Adaptamos tu marca al packaging.</p>
        </div>
      </section>

    </div>
  )
}
