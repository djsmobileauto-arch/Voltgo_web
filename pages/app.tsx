export default function AppLanding() {
  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="text-white text-center py-14 px-4" style={{ backgroundColor: COLORS.blue }}>
        <h1 className="text-3xl md:text-5xl font-extrabold">VoltGo App</h1>
        <p className="mt-3 max-w-2xl mx-auto opacity-95">
          Request EV charging, track your service, manage subscriptions — all from your phone.
        </p>
        <p className="mt-1 text-white/80">Coming soon to iOS and Android.</p>

        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          {/* Badges “coming soon” */}
          <a
            aria-disabled
            className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-4 py-3 text-white/80 cursor-not-allowed"
            title="App Store (coming soon)"
          >
            {/* Apple logo (inline SVG) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.45 2.2-1.19 2.98-.76.82-1.98 1.45-3.16 1.37-.14-1.1.47-2.28 1.23-3.05.77-.8 2.1-1.4 3.12-1.3.03.01.06.01.08.02.02.01.02.01.02.01zM21.06 17.21c-.57 1.33-1.28 2.66-2.31 3.82-1.06 1.2-2.4 2.5-4.15 2.52-1.54.03-1.95-.99-3.64-.99-1.69 0-2.14.96-3.67 1.02-1.75.07-3.09-1.31-4.15-2.5C1.32 19.73.37 17.4.22 15.17c-.17-2.62.86-4.99 2.52-6.58 1.11-1.05 2.6-1.86 4.15-1.89 1.63-.03 3.17 1.08 3.64 1.08.47 0 2.29-1.33 3.87-1.14.66.03 2.5.27 3.67 2.05-3.24 1.94-2.72 6.63.99 8.52z"/></svg>
            <span className="font-semibold">App Store</span>
            <span className="ml-2 text-xs rounded-full bg-white/20 px-2 py-0.5">Soon</span>
          </a>

          <a
            aria-disabled
            className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-4 py-3 text-white/80 cursor-not-allowed"
            title="Google Play (coming soon)"
          >
            {/* Play logo (inline SVG) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.5l11.4 6.6-2.7 2.7L3.6 1.5zm0 21l8.7-8.7 2.7 2.7L3.6 22.5zM14.1 9.6l2.8-2.8c.8.5 1.3 1.1 1.6 1.9.5 1.2.5 2.6 0 3.8-.3.8-.8 1.4-1.6 1.9l-2.8-2.8 0-2zM3 3.1v17.8c0 .8.9 1.3 1.5.9l9.8-5.6-3.5-3.5L4.5 2.2C3.9 1.8 3 2.3 3 3.1z"/></svg>
            <span className="font-semibold">Google Play</span>
            <span className="ml-2 text-xs rounded-full bg-white/20 px-2 py-0.5">Soon</span>
          </a>
        </div>

        <div className="mt-6">
          <a href="tel:+18334865846" className="inline-block rounded-2xl px-5 py-3 font-semibold text-white" style={{ backgroundColor: COLORS.green }}>
            Call 1-833-4-VOLTGO
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">What you’ll be able to do</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Feature title="Request EV service fast" desc="Emergency or on-demand charging in a few taps." />
          <Feature title="Track your job" desc="We’ll notify you when a truck is on the way and when it arrives." />
          <Feature title="Manage subscriptions" desc="Flexible weekly/monthly plans for fleets and frequent drivers." />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-4 pb-16 max-w-3xl mx-auto text-center">
        <p className="text-slate-600">Questions about the app?</p>
        <div className="mt-3 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:info@voltgo.us" className="rounded-2xl border px-5 py-3 font-semibold">Email info@voltgo.us</a>
          <a href="tel:+18334865846" className="rounded-2xl px-5 py-3 font-semibold text-white" style={{ backgroundColor: COLORS.green }}>
            Call us
          </a>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}
