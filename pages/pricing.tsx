export default function Pricing() {
  return (
    <div className="bg-blue-700 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-10">
          Simple, Transparent Pricing
        </h1>
        
        <div className="grid gap-8 md:grid-cols-3">

          {/* Emergency Rescue */}
          <div className="rounded-lg border border-blue-400 p-6 shadow-lg text-center text-white space-y-3">
            <h3 className="text-2xl font-bold">Emergency Rescue</h3>
            <p className="text-4xl font-extrabold">$199</p>
            <p>20 kWh delivered (~25 miles of range).</p>
            <p>Supported connectors: CCS1, CHAdeMO, NACS (Tesla).</p>
            <p className="text-sm opacity-80">Surcharges: cold, peak, overnight</p>
          </div>

          {/* On-Demand */}
          <div className="rounded-lg border border-blue-400 p-6 shadow-lg text-center text-white space-y-3">
            <h3 className="text-2xl font-bold">On-Demand (Scheduled)</h3>
            <ul className="space-y-1">
              <li>20 kWh – $129</li>
              <li>30 kWh – $159</li>
              <li>40 kWh – $189</li>
            </ul>
            <p>Plan your charge in advance (24h notice).</p>
            <p>Supported connectors: CCS1, CHAdeMO, NACS (Tesla).</p>
          </div>

          {/* VoltGo Pass */}
          <div className="rounded-lg border border-blue-400 p-6 shadow-lg text-center text-white space-y-3">
            <h3 className="text-2xl font-bold">VoltGo Pass</h3>
            <p className="text-4xl font-extrabold">$49<span className="text-lg">/month</span></p>
            <p>2 × 20 kWh charges per month</p>
            <p>10% off extra services</p>
            <p>Standard response: 4–5 hours</p>
            <p>Supported connectors: CCS1, CHAdeMO, NACS (Tesla).</p>
          </div>

        </div>
      </div>
    </div>
  );
}
