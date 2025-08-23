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

      {/* Footer */}
      <Footer />
    </main>
  );
}
