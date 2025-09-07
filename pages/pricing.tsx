export default function Pricing() {
  return (
    <div className="bg-blue-700 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-10">
          Simple, Transparent Pricing
        </h1>
        
        <div className="grid gap-8 md:grid-cols-3">

          {/* Emergency Rescue */}
          <div className="rounded-lg bg-white p-6 shadow-lg text-center space-y-3">
            <h3 className="text-2xl font-bold text-blue-700">Emergency Rescue</h3>
            <p className="text-4xl font-extrabold text-gray-900">$199</p>
            <p className="text-gray-700">20 kWh delivered (~25 miles of range).</p>
            <p className="text-sm text-gray-600">
              Supported connectors: CCS1, CHAdeMO, NACS (Tesla).
            </p>
            <p className="text-xs text-gray-500">Surcharges: cold, peak, overnight</p>
          </div>

          {/* On-Demand */}
          <div className="rounded-lg bg-white p-6 shadow-lg text-center space-y-3">
            <h3 className="text-2xl font-bold text-blue-700">On-Demand (Scheduled)</h3>
            <ul className="text-gray-700 space-y-1">
              <li>20 kWh – $129</li>
              <li>30 kWh – $159</li>
              <li>40 kWh – $189</li>
            </ul>
            <p className="text-gray-700">Plan your charge in advance (24h notice).</p>
            <p className="text-sm text-gray-600">
              Supported connectors: CCS1, CHAdeMO, NACS (Tesla).
            </p>
          </div>

          {/* VoltGo Pass */}
          <div className="rounded-lg bg-white p-6 shadow-lg text-center space-y-3">
            <h3 className="text-2xl font-bold text-blue-700">VoltGo Pass</h3>
            <p className="text-4xl font-extrabold text-gray-900">
              $49<span className="text-lg">/month</span>
            </p>
            <p className="text-gray-700">2 × 20 kWh charges per month</p>
            <p className="text-gray-700">10% off extra services</p>
            <p className="text-gray-700">Standard response: 4–5 hours</p>
            <p className="text-sm text-gray-600">
              Supported connectors: CCS1, CHAdeMO, NACS (Tesla).
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
