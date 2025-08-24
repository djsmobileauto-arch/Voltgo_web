export default function Home() {
  const CONTACT = {
    email: "info@voltgo.us",
    phoneE164: "+12035550199", // cambia por el tuyo real
    phonePretty: "(203) 555-0199",
    city: "Wallingford, CT",
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* HERO */}
      <section
        className="text-white text-center py-20"
        style={{ backgroundColor: "#0a3ccf" }}
      >
        <div className="mb-6">
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

        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Fast, safe and reliable EV charging wherever you need it.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl font-semibold text-white"
            style={{ backgroundColor: "#15c26b" }}
          >
            Request Service
          </a>
          <a
            href="#how"
            className="px-6 py-3 rounded-2xl font-semibold"
            style={{
              border: "2px solid #15c26b",
              color: "#15c26b",
              backgroundColor: "transparent",
            }}
          >
            How it works
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Contact us
          </h2>
          <p className="mt-3 text-slate-600">
            We’re based in {CONTACT.city}. For service requests or questions:
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${CONTACT.phoneE164}`}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold text-white"
              style={{ backgroundColor: "#15c26b" }}
            >
              Call {CONTACT.phonePretty}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold"
              style={{
                border: "2px solid #15c26b",
                color: "#15c26b",
                backgroundColor: "transparent",
              }}
            >
              Email {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto">
        <div className="text-white" style={{ backgroundColor: "#0a3ccf" }}>
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
            {/* Logo + descripción */}
            <div>
              <img src="/logo-voltgo.png" alt="VoltGo" width={120} height={50} />
              <p className="mt-3 text-sm opacity-90">
                Mobile EV charging and roadside assistance. We bring power and help to you.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold">Quick links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#how" className="hover:underline">How it works</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Contact + Coverage */}
            <div>
              <h3 className="font-semibold">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={`tel:${CONTACT.phoneE164}`} className="hover:underline">
                    {CONTACT.phonePretty}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                    {CONTACT.email}
                  </a>
                </li>
                <li>{CONTACT.city}, USA</li>
              </ul>

              <h3 className="mt-5 font-semibold">Coverage Area</h3>
              <p className="mt-2 text-sm opacity-90">
                We provide service within a 45-minute radius from Wallingford, including New Haven, Meriden, Middletown, Hamden, Cheshire, North Haven, Southington, Hartford (south area), Waterbury, Milford, and nearby towns across Connecticut.
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
