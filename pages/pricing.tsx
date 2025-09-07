export default function Pricing() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      
      <div className="rounded-lg border p-6 shadow service-card">
        <h3 className="text-xl font-bold mb-2">Emergency Rescue</h3>
        <p className="text-2xl font-semibold mb-2">$199</p>
        <p>20 kWh delivered (~25 miles of range).</p>
        <p>Supported connectors: CCS1, CHAdeMO, NACS (Tesla).</p>
        <p className="text-sm text-gray-500">Surcharges may apply: cold, peak, overnight.</p>
      </div>

      <div className="rounded-lg border p-6 shadow service-card">
        <h3 className="text-xl font-bold mb-2">On-Demand (Scheduled)</h3>
        <ul className="list-disc ml-5 mb-2">
          <li>20 kWh – $129</li>
          <li>30 kWh – $159</li>
          <li>40 kWh – $189</li>
        </ul>
        <p>Plan your charge in advance (24h notice).</p>
        <p>Supported connectors: CCS1, CHAdeMO, NACS (Tesla).</p>
      </div>

      <div className="rounded-lg border p-6 shadow service-card">
        <h3 className="text-xl font-bold mb-2">VoltGo Pass</h3>
        <p className="text-2xl font-semibold mb-2">$49/month</p>
        <p>2 × 20 kWh charges per month.</p>
        <p>10% off extra services.</p>
        <p>Standard response: 4–5 hours.</p>
        <p>Supported connectors: CCS1, CHAdeMO, NACS (Tesla).</p>
      </div>

    </div>
  );
}
