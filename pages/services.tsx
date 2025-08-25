import Link from "next/link";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--volt-blue)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Services
          </h1>
          <p className="mt-3 text-blue-100 md:text-lg">
            Two paths: immediate emergency help or scheduled charging — plus memberships.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+18334VOLTGO"
              className="rounded-md bg-[var(--volt-green)] px-4 py-2 text-white font-semibold shadow hover:brightness-110"
            >
              Emergency Help Now
            </a>
            <Link
              href="/schedule"
              className="rounded-md bg-blue-500 px-4 py-2 text-white font-semibold shadow hover:bg-blue-600"
            >
              Schedule a Charge
            </Link>
            <Link
              href="/pricing"
              className="rounded-md bg-yellow-500 px-4 py-2 text-black font-semibold shadow hover:bg-yellow-400"
            >
              Membership Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Emergency */}
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,.15)]">
            <h3 className="text-lg font-semibold">Emergency Rescue</h3>
            <p className="mt-2 text-slate-600">
              Out of range or stuck roadside? We dispatch mobile fast charge, ASAP.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-slate-700">
              <li>✓ 20–30 kWh delivered (25–40 miles)</li>
              <li>✓ CCS1 / J1772 supported</li>
              <li>ETA ≈ 45 min · Cold/peak/night surcharges may apply</li>
            </ul>
            <a
              href="tel:+18334VOLTGO"
              className="mt-6 inline-flex rounded-md bg-[var(--volt-green)] px-4 py-2 text-white font-semibold shadow hover:brightness-110"
            >
              Request Now
            </a>
          </div>

          {/* On-Demand */}
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,.15)]">
            <h3 className="text-lg font-semibold">On-Demand (Scheduled)</h3>
            <p className="mt-2 text-slate-600">
              Book a one-time charge at home, work or anywhere in our coverage area.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-slate-700">
              <li>20 kWh $129 · 30 kWh $159 · 40 kWh $189</li>
              <li>10% off fleets (10+ services/mo.)</li>
            </ul>
            <Link
              href="/schedule"
              className="mt-6 inline-flex rounded-md bg-blue-500 px-4 py-2 text-white font-semibold shadow hover:bg-blue-600"
            >
              Schedule
            </Link>
          </div>

          {/* Subscriptions */}
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,.15)]">
            <h3 className="text-lg font-semibold">Subscriptions</h3>
            <p className="mt-2 text-slate-600">
              VoltGo Pass $49/mo (flexible) or VoltGo Pro from $119/mo. Save & get priority.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-slate-700">
              <li>✓ Priority response</li>
              <li>✓ Member pricing on extra kWh</li>
            </ul>
            <Link
              href="/pricing"
              className="mt-6 inline-flex rounded-md bg-yellow-500 px-4 py-2 text-black font-semibold shadow hover:bg-yellow-400"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
