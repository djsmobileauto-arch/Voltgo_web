import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="bg-volt-blue text-white">
        <div className="container mx-auto max-w-6xl px-4 py-16 text-center">
          <div className="mx-auto mb-6">
            <img
              src="/logo-voltgo.png"
              alt="VoltGo"
              width={260}
              height={120}
              className="mx-auto"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Mobile EV Charging & Roadside Assistance
          </h1>
          <p className="mt-3 text-lg opacity-90 max-w-2xl mx-auto">
            Stuck with low battery or car trouble? We bring power and help to you — fast, safe, and reliable.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-block rounded-2xl px-6 py-3 font-semibold bg-volt-green text-white hover:opacity-90"
            >
              Request Service
            </a>
            <a
              href="#how"
              className="inline-block rounded-2xl px-6 py-3 font-semibold border-2 border-white text-white hover:bg-white hover:text-volt-blue"
            >
              How it works
            </a>
          </div>

          <p className="mt-4 text-xs opacity-80">
            *Fast-charging availability depends on technician unit and vehicle connector.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Services</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <h3 className="font-semibold text-volt-blue mb-2">Mobile EV Charging</h3>
            <p className="text-sm text-slate-600">Emergency top-ups, on-demand charging, and fleet support.</p>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-slate-700">
              <li>Level-1 (AC) and DC fast* options</li>
              <li>J1772, CCS1 (CHAdeMO via adapter where available)</li>
              <li>Safe energy management</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <h3 className="font-semibold text-volt-blue mb-2">Roadside Assistance</h3>
            <ul className="text-sm list-disc pl-5 space-y-1 text-slate-700">
              <li>Jump start & battery replacement (select models)</li>
              <li>Flat tire change & minor repairs</li>
              <li>Lock-out service & fuel delivery (ICE)</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <h3 className="font-semibold text-volt-blue mb-2">Service Tiers</h3>
            <ul className="text-sm list-disc pl-5 space-y-1 text-slate-700">
              <li>Emergency (asap)</li>
              <li>On-Demand (same-day)</li>
              <li>Subscription (commuters & fleets)</li>
            </ul>
            <a
              href="#contact"
              className="mt-4 inline-block rounded-2xl bg-volt-green px-4 py-2 font-semibold text-white hover:opacity-90"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Request", body: "Tell us your location and service needs." },
              { title: "Track", body: "Get live ETA and technician updates." },
              { title: "Go", body: "We charge your EV or fix the issue safely." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Coverage Area</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Launching in Connecticut (Greater New Haven, Hartford County, and surroundings).
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
            {[
              "New Haven • West Haven • Milford",
              "Wallingford • Meriden • North Haven",
              "Hamden • East Haven • Branford",
            ].map((t) => (
              <div key={t} className="rounded-2xl bg-white p-6 shadow-soft">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Contact us</h2>
            <p className="mt-3 text-slate-600">Questions, partnerships, or media? We’d love to talk.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li><strong>Phone:</strong> 833-XXX-XXXX</li>
              <li><strong>Location:</strong> Wallingford, CT</li>
              <li><strong>Status:</strong> Fully insured • Professional technicians</li>
            </ul>
          </div>
          <form className="rounded-2xl bg-white p-6 shadow-soft space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
              <input className="rounded-2xl border px-3 py-2" placeholder="Full name" />
              <input className="rounded-2xl border px-3 py-2" placeholder="Phone" />
            </div>
            <input className="rounded-2xl border px-3 py-2" placeholder="Email" />
            <input className="rounded-2xl border px-3 py-2" placeholder="City / Location" />
            <input className="rounded-2xl border px-3 py-2" placeholder="Service needed (EV charge, tire, jump, etc.)" />
            <textarea className="rounded-2xl border px-3 py-2" placeholder="Notes (vehicle make/model, connector type, situation)" rows={4} />
            <div className="text-right">
              <button type="submit" className="rounded-2xl bg-volt-green px-4 py-2 font-semibold text-white hover:opacity-90">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
