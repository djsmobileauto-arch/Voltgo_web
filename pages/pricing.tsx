<div className="bg-blue-600 py-12">
  <h2 className="text-center text-3xl font-bold text-white mb-10">
    Simple, Transparent Pricing
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Roadside Assistance */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-4">Roadside Assistance</h3>
      <div className="mb-6">
        <h4 className="font-bold">$14.99<span className="text-sm">/month</span></h4>
        <p className="mt-2">Safe Roads Basic</p>
        <ul className="text-sm mt-2 space-y-1">
          <li>1 service/month (flat tire, lockout, jump start 12V, or fuel delivery)</li>
          <li>Response within 60 minutes</li>
          <li>Extra services: 30% off</li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold">$24.99<span className="text-sm">/month</span></h4>
        <p className="mt-2">Safe Roads Plus</p>
        <ul className="text-sm mt-2 space-y-1">
          <li>2 services/month (any combination)</li>
          <li>Response within 45 minutes</li>
          <li>Extra services: 50% off</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold">$79.99<span className="text-sm">/month</span></h4>
        <p className="mt-2">Safe Roads Fleet</p>
        <ul className="text-sm mt-2 space-y-1">
          <li>Up to 5 vehicles covered</li>
          <li>10 services/month</li>
          <li>24/7 priority response</li>
        </ul>
      </div>
    </div>

    {/* EV Charging (One-Time) */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-4">EV Charging (One-Time)</h3>
      <div className="mb-6">
        <h4 className="font-bold">$199</h4>
        <p className="mt-2">Emergency Rescue</p>
        <ul className="text-sm mt-2 space-y-1">
          <li>20 kWh delivered (~25 miles of range)</li>
          <li>Supported connectors: CCS1, CHAdeMO, NACS (Tesla)</li>
          <li>Surcharges may apply: cold, peak, overnight</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold">On-Demand (Scheduled)</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>20 kWh – $129</li>
          <li>30 kWh – $159</li>
          <li>40 kWh – $189</li>
          <li>Plan at least 24h in advance</li>
          <li>Supported connectors: CCS1, CHAdeMO, NACS (Tesla)</li>
        </ul>
      </div>
    </div>

    {/* EV Subscriptions */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-4">EV Subscriptions</h3>
      <div className="mb-6">
        <h4 className="font-bold">$59<span className="text-sm">/month</span></h4>
        <p className="mt-2">VoltGo Pass</p>
        <ul className="text-sm mt-2 space-y-1">
          <li>2 × 15 kWh charges/month</li>
          <li>+ 1 roadside assistance service (flat tire, lockout, or jump start 12V)</li>
          <li>Standard response: 2–3 hours</li>
          <li>Surcharges: cold, peak, overnight</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold">$119<span className="text-sm">/month</span></h4>
        <p className="mt-2">VoltGo Pro</p>
        <ul className="text-sm mt-2 space-y-1">
          <li>4 × 20 kWh charges/month</li>
          <li>+ 2 roadside assistance services/month</li>
          <li>High-priority response: ≤ 90 minutes</li>
          <li>No surcharges (cold, peak, overnight included)</li>
        </ul>
      </div>
    </div>

  </div>

  {/* Disclaimer */}
  <p className="text-center text-xs text-gray-200 mt-8 max-w-4xl mx-auto">
    All prices are subject to change. Roadside assistance includes flat tire, lockout, jump start 12V, and fuel delivery. 
    EV charging services depend on connector compatibility and may include surcharges for cold, peak, or overnight service. 
    Fleet plans cover up to 5 vehicles as specified.
  </p>
</div>
