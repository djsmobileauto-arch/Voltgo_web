export default function Home() {
  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* HERO */}
      <section className="text-white text-center py-20" style={{ backgroundColor: COLORS.blue }}>
        <div className="mb-6">
          <img src="/logo-voltgo.png" alt="VoltGo" width={260} height={120} className="mx-auto" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Fast, safe and reliable EV charging wherever you need it.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          {/* Primario: EMERGENCIA */}
          <a
            href="tel:+18334865846"
            className="px-6 py-3 rounded-2xl font-semibold text-white"
            style={{ backgroundColor: COLORS.green }}
          >
            Emergency Help Now
          </a>
          {/* Secundario: solicitud online */}
          <a
            href="/request"
            className="px-6 py-3 rounded-2xl font-semibold"
            style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}
          >
            Schedule a Charge
          </a>
          {/* Tercero: suscripciones (suave) */}
          <a href="/subscribe" className="text-sm underline opacity-90">
            Membership plans
          </a>
        </div>
      </section>

      {/* Services / Pillars (lo que ya tenías) */}
      <section id="services" className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center tracking-tight">Services</h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
            Two paths: immediate emergency help or scheduled charging — plus memberships.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Emergency */}
            <div className="rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl" aria-hidden>⚡</div>
              <h3 className="mt-3 text-xl font-bold">Emergency</h3>
              <p className="mt-2 text-sm text-slate-600">
                Out of range or stuck roadside? We dispatch mobile fast-charge ASAP.
              </p>
              <a
                href="tel:+18334865846"
                className="inline-block mt-4 px-4 py-2 rounded-xl text-white font-semibold"
                style={{ backgroundColor: COLORS.green }}
              >
                Request Emergency
              </a>
            </div>

            {/* On-Demand */}
            <div className="rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl" aria-hidden>📍</div>
              <h3 className="mt-3 text-xl font-bold">On-Demand</h3>
              <p className="mt-2 text-sm text-slate-600">
                Book a one-time charge at home, work, or anywhere within our coverage area.
              </p>
              <a
                href="/request"
                className="inline-block mt-4 px-4 py-2 rounded-xl font-semibold"
                style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}
              >
                Request Online
              </a>
            </div>

            {/* Subscription */}
            <div className="rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl" aria-hidden>🔁</div>
              <h3 className="mt-3 text-xl font-bold">Subscription</h3>
              <p className="mt-2 text-sm text-slate-600">
                Flexible Weekly or Monthly plans for fleets and frequent drivers.
              </p>
              <a
                href="/subscribe"
                className="inline-block mt-4 px-4 py-2 rounded-xl text-white font-semibold"
                style={{ backgroundColor: COLORS.green }}
              >
                View Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT (ya lo tenías; mantenerlo igual) */}
      <section id="contact" className="px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Contact us</h2>
          <p className="mt-3 text-slate-600">We’re based in Wallingford, CT. For service requests or questions:</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18334865846"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-white"
              style={{ backgroundColor: COLORS.green }}
            >
              Call 1-833-4-VOLTGO
            </a>
            <a
              href="mailto:info@voltgo.us"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold"
              style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}
            >
              Email info@voltgo.us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER: igual al que ya tienes con Coverage Area */}
    </main>
  );
}
