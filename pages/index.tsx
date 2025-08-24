export default function Home() {
  const COLORS = {
    blue: "#0a3ccf",
    green: "#15c26b",
  };

  const CONTACT = {
    email: "info@voltgo.us",
    phonePretty: "1-833-4-VOLTGO (833-486-5846)",
    phoneE164: "+18334865846",
    city: "Wallingford, CT",
  };

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
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl font-semibold text-white"
            style={{ backgroundColor: COLORS.green }}
          >
            Request Service
          </a>
          <a
            href="#services"
            className="px-6 py-3 rounded-2xl font-semibold"
            style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}
          >
            How it works
          </a>
        </div>
      </section>

      {/* SERVICES / PILLARS */}
      <section id="services" className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center tracking-tight">Services</h2>
          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
            Three simple ways to get energy where and when you need it.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Emergency */}
            <div className="rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl" aria-hidden>⚡</div>
              <h3 className="mt-3 text-xl font-bold">Emergency</h3>
              <p className="mt-2 text-sm text-slate-600">
                Out of range or stuck roadside? We dispatch mobile fast-charge to your location ASAP.
              </p>
              <a
                href="#contact"
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
                href="#contact"
                className="inline-block mt-4 px-4 py-2 rounded-xl font-semibold"
                style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}
              >
                Book Now
              </a>
            </div>

            {/* Subscription */}
            <div className="rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl" aria-hidden>🔁</div>
              <h3 className="mt-3 text-xl font-bold">Subscription</h3>
              <p className="mt-2 text-sm text-slate-600">
                Flexible weekly or monthly plans for fleets and frequent drivers. Predictable pricing.
              </p>
              <a
                href="#contact"
                className="inline-block mt-4 px-4 py-2 rounded-xl text-white font-semibold"
                style={{ backgroundColor: COLORS.green }}
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Contact us</h2>
          <p className="mt-3 text-slate-600">We’re based in {CONTACT.city}. For service requests or questions:</p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${CONTACT.phoneE164}`}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-white"
              style={{ backgroundColor: COLORS.green }}
            >
              Call {CONTACT.phonePretty}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold"
              style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}
            >
              Email {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="text-white" style={{ backgroundColor: COLORS.blue }}>
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
            <div>
              <img src="/logo-voltgo.png" alt="VoltGo" width={120} height={50} />
              <p className="mt-3 text-sm opacity-90">
                Mobile EV charging and roadside assistance. We bring power and help to you.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Quick links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href={`tel:${CONTACT.phoneE164}`} className="hover:underline">{CONTACT.phonePretty}</a></li>
                <li><a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a></li>
                <li>{CONTACT.city}, USA</li>
              </ul>

              <h3 className="mt-5 font-semibold">Coverage Area</h3>
              <p className="mt-2 text-sm opacity-90">
                Service within a ~45-minute radius from Wallingford, including New Haven, Meriden, Middletown,
                Hamden, Cheshire, North Haven, Southington, Hartford (south area), Waterbury, Milford, and nearby CT towns.
              </p>
            </div>
          </div>

          <div className="border-t border-white/15">
            <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-center opacity-80">
              © {new Date().getFullYear()} VoltGo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
