export default function Roadside() {
  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };
  const TEL_E164 = "+18334865846";
  const TEL_PRETTY = "1-833-4-VOLTGO";
  const EMAIL = "info@voltgo.us";

  const services = [
    {
      title: "Flat Tire Service",
      emoji: "🛞",
      desc:
        "On-site tire change, temporary spare fitment, and minor plug repairs when safe/legal. Valve stem fixes and TPMS attention included.",
    },
    {
      title: "TPMS Sensors",
      emoji: "📡",
      desc:
        "Sensor replacement and re-programming to clear warnings and restore proper monitoring.",
    },
    {
      title: "Jump Start",
      emoji: "🔋",
      desc:
        "12V jump start for EVs, hybrids and ICE vehicles. Safe procedures around high-voltage systems.",
    },
    {
      title: "Battery Replacement",
      emoji: "🧰",
      desc:
        "On-site 12V battery test and swap when compatible (subject to parts availability).",
    },
    {
      title: "Lockout Service",
      emoji: "🔑",
      desc:
        "Non-destructive entry whenever possible. Photo ID verification required for security.",
    },
    {
      title: "Fuel Delivery",
      emoji: "⛽",
      desc:
        "Emergency gasoline/diesel drop for ICE vehicles. For EVs, we provide mobile charge.",
    },
    {
      title: "General Assistance",
      emoji: "🛠️",
      desc:
        "Light roadside troubleshooting to get you moving or arrange a safe next step.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section
        className="text-white text-center py-16"
        style={{ backgroundColor: COLORS.blue }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Roadside Assistance Services
        </h1>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">
          Fast, reliable help within our ~45-minute coverage area from
          Wallingford, CT.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <a
            href={`tel:${TEL_E164}`}
            className="px-5 py-3 rounded-2xl font-semibold text-white"
            style={{ backgroundColor: COLORS.green }}
          >
            Call {TEL_PRETTY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="px-5 py-3 rounded-2xl font-semibold"
            style={{
              border: `2px solid ${COLORS.green}`,
              color: COLORS.green,
              backgroundColor: "transparent",
            }}
          >
            Email {EMAIL}
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">
            What we cover
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-6 shadow-sm border border-slate-200"
              >
                <div className="text-3xl" aria-hidden>
                  {s.emoji}
                </div>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>

                <div className="mt-4 flex gap-2">
                  <a
                    href={`tel:${TEL_E164}`}
                    className="px-4 py-2 rounded-xl text-white text-sm font-semibold"
                    style={{ backgroundColor: COLORS.green }}
                  >
                    Request Service
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="px-4 py-2 rounded-xl text-sm font-semibold"
                    style={{
                      border: `2px solid ${COLORS.green}`,
                      color: COLORS.green,
                      backgroundColor: "transparent",
                    }}
                  >
                    Ask a question
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* COVERAGE */}
          <div className="mt-10 text-center text-slate-600">
            <div className="font-semibold">Coverage Area</div>
            <p className="mt-2 max-w-3xl mx-auto">
              We provide service within a ~45-minute radius from Wallingford,
              including New Haven, Meriden, Middletown, Hamden, Cheshire, North
              Haven, Southington, Hartford (south area), Waterbury, Milford, and
              nearby towns across Connecticut.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
