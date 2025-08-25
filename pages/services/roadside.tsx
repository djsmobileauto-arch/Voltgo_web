import Link from "next/link";

export default function RoadsidePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--volt-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Roadside Charging, Wherever You Are
          </h1>
          <p className="mt-3 text-blue-100 md:text-lg">
            Mobile DC/AC charging delivered to your car. Safe, fast and reliable.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+18334VOLTGO"
              className="rounded-md bg-[var(--volt-green)] px-4 py-2 text-white font-semibold shadow hover:brightness-110"
            >
              Call 1-833-4-VOLTGO
            </a>
            <Link
              href="/pricing"
              className="rounded-md bg-yellow-500 px-4 py-2 text-black font-semibold shadow hover:bg-yellow-400"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-semibold">Coverage & ETA</h3>
            <p className="mt-2 text-slate-600">
              Typical ETA ~45 min within our metro service areas. We’ll confirm your location and connector type.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-semibold">What You Get</h3>
            <p className="mt-2 text-slate-600">
              20–30 kWh delivered (≈25–40 miles), CCS1 / J1772. Enough to get you home or to a charger.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-semibold">Surcharges</h3>
            <p className="mt-2 text-slate-600">
              Extreme cold, peak hours and overnight (10PM–6AM) may add a surcharge. We’ll disclose before dispatch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
