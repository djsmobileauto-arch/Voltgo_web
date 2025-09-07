import React from "react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Our Services
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Emergency Rescue */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Emergency Rescue
          </h2>
          <p className="text-2xl font-bold text-blue-600 mb-4">$199</p>
          <p className="text-gray-600">20 kWh delivered (~25 miles of range)</p>
          <p className="text-gray-600 mt-2">
            Supported connectors: CCS1, CHAdeMO, NACS (Tesla)
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Surcharges may apply: cold, peak, overnight
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
            Request Now
          </button>
        </div>

        {/* On-Demand (Scheduled) */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            On-Demand (Scheduled)
          </h2>
          <p className="text-gray-600">Plan your charge in advance (24h notice)</p>
          <ul className="text-gray-700 mt-3 space-y-1">
            <li>20 kWh – $129</li>
            <li>30 kWh – $159</li>
            <li>40 kWh – $189</li>
          </ul>
          <p className="text-gray-600 mt-2">
            Supported connectors: CCS1, CHAdeMO, NACS (Tesla)
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
            Schedule
          </button>
        </div>

        {/* Subscriptions */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Subscriptions
          </h2>
          <ul className="text-gray-700 mt-3 space-y-2">
            <li>
              <span className="font-semibold">VoltGo Pass</span>: $59/month – 2x 15 kWh
            </li>
            <li>
              <span className="font-semibold">VoltGo Pro</span>: $119/month – 4x 20 kWh
            </li>
          </ul>
          <p className="text-gray-500 mt-2 text-sm">
            Subscribers also pay surcharges (cold, peak, overnight).  
            Standard response: 3–5 hours. Emergency response: priority.  
            Supported connectors: CCS1, CHAdeMO, NACS (Tesla).
          </p>
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
}
