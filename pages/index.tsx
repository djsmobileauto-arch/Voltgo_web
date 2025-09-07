export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen">
      {/* HERO */}
      <header className="text-center text-white py-16">
        <h1 className="text-4xl font-extrabold mb-3">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="text-lg opacity-90 mb-8">
          Fast, safe and reliable EV charging wherever you need it.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/roadside"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Emergency Help Now
          </a>

          <a
            href="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Schedule a Charge
          </a>

          {/* GOLD button */}
          <a
            href="/pricing"
            className="font-semibold px-6 py-3 rounded-lg shadow-md"
            style={{ backgroundColor: '#FFD700', color: '#0f172a' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E6C200')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#FFD700')}
          >
            Membership Plans
          </a>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
          Services
        </h2>
        <p className="text-center text-sm text-gray-200 mb-10">
          Two paths: immediate emergency help or scheduled charging — plus memberships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Emergency card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-blue-600">Emergency</h3>
            </div>
            <p className="mb-5">
              Out of range or stuck roadside? We dispatch mobile DC fast charge, ASAP.
            </p>
            <a
              href="/roadside"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Request Emergency
            </a>
          </div>

          {/* On-Demand card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v2h20V6a2 2 0 0 0-2-2h-2V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1zM22 10H2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8zm-5 3h-4v4h4v-4z"/>
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-blue-600">On-Demand</h3>
            </div>
            <p className="mb-5">
              Book a one-time charge at home, work or anywhere in our coverage area.
            </p>
            <a
              href="/services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Request Online
            </a>
          </div>

          {/* Subscription card */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
                <svg className="h-6 w-6 text-amber-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 7.1-1.1L12 2z"/>
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-blue-600">Subscription</h3>
            </div>
            <p className="mb-1"><strong>VoltGo Pass:</strong> $59/month — 2 × 15 kWh + 1 roadside service</p>
            <p className="mb-5"><strong>VoltGo Pro:</strong> $119/month — 4 × 20 kWh + 2 roadside services</p>
            <a
              href="/pricing"
              className="inline-block px-4 py-2 rounded-lg font-semibold"
              style={{ backgroundColor: '#FFD700', color: '#0f172a' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E6C200')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#FFD700')}
            >
              View Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
