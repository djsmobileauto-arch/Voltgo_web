import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--volt-gray)]">
      <Header />

      {/* HERO – Logo protagonista + claim + CTA */}
      <section className="px-6 py-16 md:py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo-voltgo.png"
              alt="VoltGo"
              width={320}
              height={96}
              className="w-[220px] md:w-[320px] h-auto"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--volt-dark)] tracking-tight">
            Power on the Go
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Emergency and on-demand EV charging with flexible subscriptions for frequent drivers.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-[var(--volt-primary)] text-white rounded-lg px-6 py-3 font-semibold hover:brightness-95"
            >
              Request EV Charge
            </a>
            <a
              href="#how"
              className="rounded-lg px-6 py-3 font-semibold border border-gray-300 hover:border-[var(--volt-primary)] hover:text-[var(--volt-primary)]"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* HOW – Los tres pilares (mantiene ID #how para el menú) */}
      <section id="how" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--volt-dark)] mb-10">
            Our Service Model
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Emergency</h3>
              <p className="text-gray-700">
                24/7 roadside assistance and immediate EV charging when you need it most.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">On-Demand</h3>
              <p className="text-gray-700">
                Book EV charging or roadside services anytime — delivered right to your location.
              </p>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Subscriptions</h3>
              <p className="text-gray-700">
                Flexible plans for frequent EV drivers. Affordable, predictable, hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES – EV Charging protagonista + servicios de apoyo */}
      <section id="services" className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Bloque destacado: EV Charging */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--volt-dark)] mb-3">
              EV Charging on Demand
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Mobile fast charging wherever you are. Get back on the road in minutes with VoltGo.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 bg-[var(--volt-primary)] text-white rounded-lg px-6 py-3 font-semibold hover:brightness-95"
            >
              Book EV Charge
            </a>
          </div>

          {/* Servicios de apoyo */}
          <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
            <li className="border p-5 rounded-xl shadow-sm">
              <span className="font-semibold block mb-1">Tire change</span>
              <span className="text-sm text-gray-600">Flat repair or spare installation.</span>
            </li>
            <li className="border p-5 rounded-xl shadow-sm">
              <span className="font-semibold block mb-1">Battery jump-start</span>
              <span className="text-sm text-gray-600">Safe boost to get you running.</span>
            </li>
            <li className="border p-5 rounded-xl shadow-sm">
              <span className="font-semibold block mb-1">Lockout service</span>
              <span className="text-sm text-gray-600">Non-destructive vehicle entry.</span>
            </li>
            <li className="border p-5 rounded-xl shadow-sm">
              <span className="font-semibold block mb-1">Fuel delivery</span>
              <span className="text-sm text-gray-600">Gas or diesel to your location.</span>
            </li>
            <li className="border p-5 rounded-xl shadow-sm">
              <span className="font-semibold block mb-1">On-site diagnostics</span>
              <span className="text-sm text-gray-600">Quick scan to pinpoint issues.</span>
            </li>
            <li className="border p-5 rounded-xl shadow-sm">
              <span className="font-semibold block mb-1">Winch-out (light)</span>
              <span className="text-sm text-gray-600">Help if stuck in a safe location.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--volt-dark)] mb-4">Contact us</h2>
          <p className="text-gray-700 mb-8">
            Tell us where you are and what you need — we’ll dispatch the nearest pro.
          </p>

          <form className="grid gap-4 text-left">
            <input className="border rounded-lg p-3" type="text" placeholder="Name" />
            <input className="border rounded-lg p-3" type="email" placeholder="Email" />
            <textarea className="border rounded-lg p-3 min-h-[120px]" placeholder="Your message" />
            <button
              type="submit"
              className="bg-[var(--volt-primary)] text-white rounded-lg px-6 py-3 font-semibold hover:brightness-95"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
