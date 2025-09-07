{/* --- Services Section (Homepage) --- */}
<section className="bg-blue-600 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-white mb-12">
      Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Roadside Assistance */}
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-blue-600 mb-3">Roadside Assistance</h3>
        <p className="text-gray-700 mb-2">Flat tire repair/change, 12V jump start, lockout, and fuel delivery.</p>
        <p className="text-gray-500 text-sm mb-4">Available 24/7 within coverage area. Discounted rates with subscription plans.</p>
        <a href="/roadside" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Request Help
        </a>
      </div>

      {/* EV Charging */}
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-blue-600 mb-3">EV Charging</h3>
        <p className="text-gray-700 mb-2"><strong>Emergency Rescue:</strong> $199 — 20 kWh (~25 miles of range)</p>
        <p className="text-gray-700 mb-2"><strong>On-Demand:</strong> 20 kWh $129 | 30 kWh $159 | 40 kWh $189</p>
        <p className="text-gray-500 text-sm mb-4">Surcharges may apply (cold, peak, overnight). Supported: CCS1, CHAdeMO, NACS (Tesla).</p>
        <a href="/services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Schedule a Charge
        </a>
      </div>

      {/* Subscriptions */}
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-blue-600 mb-3">Subscriptions</h3>
        <p className="text-gray-700 mb-2">
          <strong>VoltGo Pass:</strong> $59/month — 2 × 15 kWh + 1 roadside service
        </p>
        <p className="text-gray-700 mb-2">
          <strong>VoltGo Pro:</strong> $119/month — 4 × 20 kWh + 2 roadside services
        </p>
        <p className="text-gray-500 text-sm mb-4">Priority response & transparent pricing.</p>
        <a href="/pricing" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          View Plans
        </a>
      </div>
    </div>
  </div>
</section>

