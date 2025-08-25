import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Services</h2>
          <p className="mt-1 text-sm text-gray-600">
            Two paths: immediate emergency help or scheduled charging — plus memberships.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Emergency */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-2xl">⚡</div>
            <h3 className="mt-2 text-lg font-semibold">Emergency</h3>
            <p className="mt-1 text-sm text-gray-600">
              Out of range or stuck roadside? We dispatch mobile fast charge, ASAP.
            </p>
            <a
              href="tel:+18334VOLTGO"
              className="mt-4 inline-flex w-full justify-center rounded-md bg-[var(--volt-green)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110"
            >
              Request Emergency
            </a>
          </div>

          {/* On-Demand */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-2xl">📍</div>
            <h3 className="mt-2 text-lg font-semibold">On-Demand</h3>
            <p className="mt-1 text-sm text-gray-600">
              Book a one-time charge at home, work or anywhere in our coverage area.
            </p>
            <Link
              href="/schedule"
              className="mt-4 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Request Online
            </Link>
          </div>

          {/* Memberships */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-2xl">🛡️</div>
            <h3 className="mt-2 text-lg font-semibold">Subscription</h3>
            <p className="mt-1 text-sm text-gray-600">
              VoltGo Pass $49/mo (flexible) or VoltGo Pro from $119/mo. Save and get priority.
            </p>
            <Link
              href="/pricing"
              className="mt-4 inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-400"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
