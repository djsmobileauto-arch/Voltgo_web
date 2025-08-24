import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="p-12 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--volt-primary)]">
          Power on the Go
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Emergency and on-demand EV charging with flexible subscriptions for frequent drivers.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#contact" className="btn btn-primary">Request EV Charge</a>
          <a href="#how" className="btn btn-ghost">How it works</a>
        </div>
      </section>

      {/* Pillars */}
      <section id="services" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Emergency */}
          <div className="bg-white rounded-xl border shadow-sm p-5">
            <h3 className="font-bold text-[var(--volt-primary)] mb-2">Emergency</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• EV charge (priority)</li>
              <li>• Battery jump-start</li>
              <li>• Lockout service</li>
              <li>• Fuel delivery</li>
            </ul>
          </div>

          {/* On-Demand */}
          <div className="bg-white rounded-xl border shadow-sm p-5">
            <h3 className="font-bold text-[var(--volt-primary)] mb-2">On-Demand</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• EV charge at home or work</li>
              <li>• Tire change</li>
              <li>• On-site diagnostics</li>
            </ul>
          </div>

          {/* Subscriptions */}
          <div className="bg-white rounded-xl border shadow-sm p-5">
            <h3 className="font-bold text-[var(--volt-primary)] mb-2">Subscriptions</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Weekly / Monthly EV charge plans</li>
              <li>• Preferred response times</li>
              <li>• Member discounts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="p-12 bg-[var(--volt-gray)]">
        <h2 className="text-2xl font-semibold text-center mb-6">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl border shadow-sm p-5">
            <h3 className="font-bold mb-1">1. Request help</h3>
            <p className="text-gray-600">Tell us your location and the service you need.</p>
          </div>
          <div className="bg-white rounded-xl border shadow-sm p-5">
            <h3 className="font-bold mb-1">2. We dispatch a pro</h3>
            <p className="text-gray-600">A vetted technician heads your way immediately.</p>
          </div>
          <div className="bg-white rounded-xl border shadow-sm p-5">
            <h3 className="font-bold mb-1">3. You’re back on the road</h3>
            <p className="text-gray-600">Quick, safe, and reliable service—on your terms.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact</h2>
        <form className="max-w-xl mx-auto grid gap-3">
          <input className="w-full border p-3 rounded" placeholder="Name" type="text" />
          <input className="w-full border p-3 rounded" placeholder="Email" type="email" />
          <textarea className="w-full border p-3 rounded" placeholder="Your message" rows={4} />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
