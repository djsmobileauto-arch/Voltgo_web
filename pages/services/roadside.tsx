export default function Roadside() {
  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };

  const services = [
    { title: "Flat Tire Service", desc: "On-site tire change and minor plug repairs when safe/legal." },
    { title: "TPMS Sensors", desc: "Sensor replacement and reprogramming to clear warnings." },
    { title: "Jump Start", desc: "12V jump start for EVs, hybrids and ICE vehicles." },
    { title: "Battery Replacement", desc: "On-site 12V battery test and swap when compatible." },
    { title: "Lockout Service", desc: "Non-destructive entry when possible (ID required)." },
    { title: "Fuel Delivery", desc: "Emergency gasoline/diesel drop for ICE vehicles." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="text-white text-center py-16" style={{ backgroundColor: COLORS.blue }}>
        <h1 className="text-3xl md:text-4xl font-extrabold">Roadside Assistance Services</h1>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">Fast dispatch within ~45 minutes from Wallingford, CT.</p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <a href="tel:+18334865846" className="px-5 py-3 rounded-2xl font-semibold text-white" style={{ backgroundColor: COLORS.green }}>
            Call 1-833-4-VOLTGO
          </a>
          <a href="/request" className="px-5 py-3 rounded-2xl font-semibold" style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}>
            Request Online
          </a>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">What we cover</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <div className="mt-4 flex gap-2">
                  <a href="tel:+18334865846" className="px-4 py-2 rounded-xl text-white text-sm font-semibold" style={{ backgroundColor: COLORS.green }}>
                    Request Service
                  </a>
                  <a href="/request" className="px-4 py-2 rounded-xl text-sm font-semibold" style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}>
                    Ask Online
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-slate-600">
            <div className="font-semibold">Coverage Area</div>
            <p className="mt-2 max-w-3xl mx-auto">
              ~45-minute radius from Wallingford: New Haven, Meriden, Middletown, Hamden, Cheshire, North Haven,
              Southington, Hartford (south), Waterbury, Milford, and nearby CT towns.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

