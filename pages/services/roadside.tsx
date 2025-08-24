export default function Roadside() {
  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };
  const tel = "tel:+18334865846";
  const email = "mailto:info@voltgo.us";

  const services = [
    { title: "Flat Tire", desc: "On-site tire change or temporary fit to reach a safe location." },
    { title: "TPMS Sensors", desc: "Sensor replacement and reprogramming to clear warnings." },
    { title: "Tire Repairs", desc: "Minor puncture repair (where safe/legal); referral if replacement required." },
    { title: "Jump Start", desc: "12V jump start for EVs and hybrids. Safe procedures for high-voltage systems." },
    { title: "Battery Replacement", desc: "12V battery testing and swap when compatible (parts availability may vary)." },
    { title: "Lockout Service", desc: "Non-destructive entry where possible; ID verification required." },
    { title: "Fuel Delivery", desc: "Emergency fuel drop for ICE vehicles; EVs get mobile charge instead." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="text-white text-center py-16" style={{ backgroundColor: COLORS.blue }}>
        <h1 className="text-3xl md:text-4xl font-extrabold">Roadside Assistance</h1>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">Fast dispatch within ~45 minutes from Wallingford, CT.</p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <a href={tel} className="px-5 py-3 rounded-2xl font-semibold text-white" style={{ backgroundColor: COLORS.green }}>
            Call 1-833-4-VOLTGO
          </a>
          <a href={email} className="px-5 py-3 rounded-2xl font-semibold" style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}>
            Email info@voltgo.us
          </a>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">What we cover</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-slate-600">
            Coverage radius: ~45 minutes from Wallingford, including New Haven, Meriden, Middletown,
            Hamden, Cheshire, North Haven, Southington, Hartford (south), Waterbury, Milford, and nearby CT towns.
          </div>
        </div>
      </section>
    </main>
  );
}
