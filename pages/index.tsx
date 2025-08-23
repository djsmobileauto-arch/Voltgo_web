import Header from "../components/Header";

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
          Tu solución rápida y confiable para asistencia en carretera y carga de vehículos eléctricos ⚡🚗
        </p>
      </section>

      {/* Servicios */}
      <section id="services" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Servicios</h2>
        <ul className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <li className="p-6 border rounded-lg shadow-sm">
            🚙 Cambio de llanta
          </li>
          <li className="p-6 border rounded-lg shadow-sm">
            🔋 Arranque de batería
          </li>
          <li className="p-6 border rounded-lg shadow-sm">
            ⛽ Entrega de combustible
          </li>
          <li className="p-6 border rounded-lg shadow-sm">
            🔑 Apertura de vehículo (lockout)
          </li>
          <li className="p-6 border rounded-lg shadow-sm">
            ⚡ Carga de emergencia para vehículos eléctricos
          </li>
        </ul>
      </section>

      {/* Cómo funciona */}
      <section id="how" className="p-12 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-6">Cómo funciona</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Solicita el servicio desde la app Voltgo 🚗⚡.  
          Uno de nuestros técnicos acudirá a tu ubicación en minutos, brindándote asistencia rápida, segura y profesional.
        </p>
      </section>

      {/* Contacto */}
      <section id="contact" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Contacto</h2>
        <p className="text-center text-gray-700">
          📞 Teléfono: (203) 555-1234  
          📧 Email: soporte@voltgo.com  
        </p>
      </section>
    </main>
  );
}
