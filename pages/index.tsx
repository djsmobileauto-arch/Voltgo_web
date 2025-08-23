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
          Tu solución rápida y confiable para asistencia en carretera y carga de
          vehículos eléctricos.
        </p>
      </section>

      {/* Servicios */}
      <section id="services" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Nuestros Servicios
        </h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700 max-w-6xl mx-auto">
          <li className="border p-4 rounded shadow">Cambio de llantas</li>
          <li className="border p-4 rounded shadow">Arranque de batería</li>
          <li className="border p-4 rounded shadow">Entrega de combustible</li>
          <li className="border p-4 rounded shadow">Carga de emergencia para EV</li>
          <li className="border p-4 rounded shadow">Servicios de cerrajería</li>
        </ul>
      </section>

      {/* Cómo funciona */}
      <section id="how" className="p-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">¿Cómo funciona?</h2>
          <ol className="grid md:grid-cols-3 gap-6 text-gray-700 list-decimal list-inside">
            <li className="border p-4 rounded bg-white shadow">
              Solicita ayuda desde la web (o por teléfono).
            </li>
            <li className="border p-4 rounded bg-white shadow">
              Asignamos al técnico más cercano.
            </li>
            <li className="border p-4 rounded bg-white shadow">
              Llegamos y resolvemos tu emergencia.
            </li>
          </ol>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="p-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Contacto</h2>

          {/* Formulario básico (envía por email) */}
          <form
            className="grid gap-4"
            action="mailto:soporte@voltgo.com"
            method="post"
            encType="text/plain"
          >
            <input
              className="border rounded p-3"
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
            />
            <input
              className="border rounded p-3"
              type="email"
              name="email"
              placeholder="Tu email"
              required
            />
            <textarea
              className="border rounded p-3 min-h-[120px]"
              name="mensaje"
              placeholder="Cuéntanos tu necesidad"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded px-5 py-3 font-medium hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>

          {/* Datos rápidos */}
          <div className="text-center text-gray-600 mt-6">
            <p>Tel: +1 (555) 000-0000</p>
            <p>Email: soporte@voltgo.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
