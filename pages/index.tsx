import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          ¡Bienvenido a Voltgo!
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Tu solución rápida y confiable para asistencia en carretera y carga de vehículos eléctricos.
        </p>
      </section>

      {/* Servicios */}
      <section id="services" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Nuestros Servicios</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          <li className="border p-4 rounded shadow">Cambio de llantas</li>
          <li className="border p-4 rounded shadow">Arranque de batería</li>
          <li className="border p-4 rounded shadow">Entrega de combustible</li>
          <li className="border p-4 rounded shadow">Carga de emergencia para EV</li>
          <li className="border p-4 rounded shadow">Servicios de cerrajería</li>
        </ul>
      </section>

      {/* Cómo funciona */}
      <section id="how" className="p-12 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold mb-2">1. Solicita ayuda</h3>
            <p>Abre la app o web, selecciona el servicio que necesitas.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold mb-2">2. Te enviamos un técnico</h3>
            <p>Un profesional cercano acudirá al lugar en pocos minutos.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold mb-2">3. Solución inmediata</h3>
            <p>Resolvemos tu problema en el acto: rápido, seguro y confiable.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="p-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Contáctanos</h2>
        <form className="max-w-md mx-auto text-left space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Tu mensaje"
            className="w-full border p-2 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
