import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero */}
      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to VoltGo!
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Fast, reliable roadside assistance and EV charging on the go.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Services</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
          <li className="border p-4 rounded shadow">Tire change</li>
          <li className="border p-4 rounded shadow">Battery jump-start</li>
          <li className="border p-4 rounded shadow">Fuel delivery</li>
          <li className="border p-4 rounded shadow">Emergency EV charge</li>
          <li className="border p-4 rounded shadow">Lockout service</li>
          <li className="border p-4 rounded shadow">Light towing (dispatch)</li>
        </ul>
      </section>

      {/* How it works */}
      <section id="how" className="p-12 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold mb-2">1. Request help</h3>
            <p>Use our app or website to choose the service you need.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold mb-2">2. We dispatch a pro</h3>
            <p>A nearby technician heads to your location in minutes.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-bold mb-2">3. You’re back on the road</h3>
            <p>Quick, safe and reliable assistance—on the spot.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
