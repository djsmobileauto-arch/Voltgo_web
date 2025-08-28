import Head from 'next/head'

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing – VoltGo</title>
      </Head>

      {/* Encabezado / fondo azul */}
      <section className="bg-volt-blue text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Simple, transparent pricing
          </h1>
          <p className="opacity-90">
            Pay only for what you need. Upgrade to subscriptions for priority response and savings.
          </p>
        </div>
      </section>

      {/* Cards en blanco para contraste */}
      <section className="bg-volt-blue">
        <div className="max-w-7xl mx-auto px-6 pb-16 grid gap-6 md:grid-cols-3">
          {/* Emergency Rescue */}
          <div className="bg-white text-black rounded-xl shadow p-6">
            <div className="text-sm text-gray-500 mb-2">ETA ~45 min</div>
            <h3 className="text-xl font-bold mb-1">Emergency Rescue</h3>
            <p className="text-3xl font-extrabold mb-1">$199</p>
            <p className="text-sm text-gray-600 mb-4">/ service</p>
            <ul className="text-sm space-y-1 mb-6">
              <li>20–30 kWh delivered (≈25–40 miles)</li>
              <li>CCS1 / J1772 supported</li>
              <li>Surcharge: cold, peak, overnight</li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
            >
              Request Now
            </a>
          </div>

          {/* On-Demand Scheduled */}
          <div className="bg-white text-black rounded-xl shadow p-6">
            <div className="text-sm text-gray-500 mb-2">24h+</div>
            <h3 className="text-xl font-bold mb-1">On-Demand (Scheduled)</h3>
            <p className="text-sm text-gray-600 mb-4">Plan your charge in advance</p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span>20 kWh</span> <span className="font-semibold">$129</span>
              </div>
              <div className="flex items-center justify-between">
                <span>30 kWh</span> <span className="font-semibold">$159</span>
              </div>
              <div className="flex items-center justify-between">
                <span>40 kWh</span> <span className="font-semibold">$189</span>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold"
            >
              Schedule
            </a>
          </div>

          {/* VoltGo Pass */}
          <div className="bg-white text-black rounded-xl shadow p-6">
            <div className="text-sm text-gray-500 mb-2">Flexible</div>
            <h3 className="text-xl font-bold mb-1">VoltGo Pass</h3>
            <p className="text-3xl font-extrabold mb-1">$49</p>
            <p className="text-sm text-gray-600 mb-4">/ month</p>
            <ul className="text-sm space-y-1 mb-6">
              <li>≥ 2 × 20 kWh charges / month</li>
              <li>10% off extra services</li>
              <li>Standard response (4–5 hrs)</li>
            </ul>
            <a
              href="/subscribe"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
            >
              Start Pass
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
