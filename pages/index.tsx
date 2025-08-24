import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-[var(--volt-text)]">
      {/* Header */}
      <Header />

      {/* HERO: Logo + claim centrado */}
      <section className="container mx-auto max-w-5xl px-6 pt-10 pb-6 text-center">
        {/* Logo grande en el centro */}
        <div className="flex justify-center">
          <Image
            src="/logo-voltgo.png"
            alt="VoltGo — Charge on the go"
            width={520}
            height={230}
            priority
          />
        </div>

        {/* Subtítulo explicativo */}
        <p className="mt-4 text-gray-600">
          Emergency and on-demand EV charging with flexible subscriptions for frequent drivers.
        </p>

        {/* CTA buttons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#ev-on-demand"
            className="rounded-md bg-[var(--volt-green)] px-5 py-2.5 text-white font-medium shadow hover:opacity-90 transition"
          >
            Request EV Charge
          </a>

          <a
            href="#how"
            className="rounded-md px-5 py-2.5 font-medium text-[var(--volt-blue)] border-[3px] border-[var(--volt-blue)] bg-white hover:bg-[var(--volt-blue)]/5 transition"
          >
            How it works
          </a>
        </div>
      </section>

      {/* EV CHARGING (On-Demand) — protagonista */}
      <section id="ev-on-demand" className="container mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[var(--volt-blue)]">
          EV Charging on Demand
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Mobile fast charging wherever you are. We bring the power to your EV—at home, work, or roadside.
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="#contact"
            className="rounded-md bg-[var(--volt-green)] px-5 py-2.5 text-white font-medium shadow hover:opacity-90 transition"
          >
            Book EV Charge
          </a>
        </div>
      </section>

      {/* Tres pilares */}
      <section id="services" className="container mx-auto max-w-6xl px-6 pb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Our Services</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {/* Emergency */}
          <div className="rounded-lg border bg-white p-5 shadow-sm">
            <h3 className="font-bold mb-3 text-[var(--volt-blue)]">Emergency</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="rounded border p-3">EV charge (priority)</li>
              <li className="rounded border p-3">Flat tire</li>
              <li className="rounded border p-3">Battery jump-start</li>
              <li className="rounded border p-3">Battery replacement</li>
              <li className="rounded border p-3">Fuel delivery</li>
              <li className="rounded border p-3">Lockout service</li>
            </ul>
          </div>

          {/* On-Demand */}
          <div className="rounded-lg border bg-white p-5 shadow-sm">
            <h3 className="font-bold mb-3 text-[var(--volt-blue)]">On-Demand</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="rounded border p-3">EV charge (priority)</li>
              <li className="rounded border p-3">Battery replacement</li>
              <li className="rounded border p-3">TPMS sensors replaced</li>
              <li className="rounded border p-3">Light towing (dispatch)</li>
            </ul>
          </div>

          {/* Subscriptions */}
          <div className="rounded-lg border bg-white p-5 shadow-sm">
            <h3 className="font-bold mb-3 text-[var(--volt-blue)]">Subscriptions</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="rounded border p-3">Monthly plans for frequent drivers</li>
              <li className="rounded border p-3">Discounted EV charging</li>
              <li className="rounded border p-3">Priority dispatch</li>
              <li className="rounded border p-3">Add-ons for fleets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="how" className="container mx-auto max-w-6xl px-6 py-10 bg-gray-100 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="rounded border bg-white p-5 shadow-sm">
            <h3 className="font-bold">1. Request help</h3>
            <p className="mt-1 text-gray-600">Tell us your location and EV model.</p>
          </div>
          <div className="rounded border bg-white p-5 shadow-sm">
            <h3 className="font-bold">2. We dispatch a pro</h3>
            <p className="mt-1 text-gray-600">Nearby technician heads your way.</p>
          </div>
          <div className="rounded border bg-white p-5 shadow-sm">
            <h3 className="font-bold">3. You’re back on the road</h3>
            <p className="mt-1 text-gray-600">Fast charge or service on the spot.</p>
          </div>
        </div>
      </section>

      {/* Contacto simple */}
      <section id="contact" className="container mx-auto max-w-3xl px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Contact</h2>
        <form className="mt-6 grid gap-4">
          <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
          <textarea rows={4} placeholder="Your message" className="w-full border p-3 rounded" />
          <button
            type="submit"
            className="rounded-md bg-[var(--volt-green)] px-5 py-2.5 text-white font-medium shadow hover:opacity-90 transition w-fit"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
