import React from "react";

export default function Pricing() {
  return (
    <div className="bg-blue-600 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Simple, Transparent Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        
        {/* Roadside Assistance */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Roadside Assistance</h3>
          
          <h4 className="text-lg font-semibold text-blue-600">Safe Roads Basic</h4>
          <p className="text-gray-700">$14.99/month</p>
          <p className="text-sm text-gray-600">1 service/month (flat tire, lockout, jump start 12V, or fuel)</p>
          <p className="text-sm text-gray-600">Response time: up to 60 min</p>
          <p className="text-sm text-gray-600">Extra services 30% off</p>

          <h4 className="text-lg font-semibold text-blue-600 mt-6">Safe Roads Plus</h4>
          <p className="text-gray-700">$24.99/month</p>
          <p className="text-sm text-gray-600">2 services/month (any type: flat tire, lockout, jump start, 12V, or fuel)</p>
          <p className="text-sm text-gray-600">Response time: ≤ 45 min</p>
          <p className="text-sm text-gray-600">Extra services 50% off</p>

          <h4 className="text-lg font-semibold text-blue-600 mt-6">Safe Roads Fleet</h4>
          <p className="text-gray-700">$79.99/month</p>
          <p className="text-sm text-gray-600">Up to 10 services/month</p>
          <p className="text-sm text-gray-600">Covers up to 5 vehicles</p>
          <p className="text-sm text-gray-600">24/7 coverage</p>
        </div>

        {/* EV Charging */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">EV Charging (One-Time)</h3>
          
          <h4 className="text-lg font-semibold text-blue-600">Emergency Rescue</h4>
          <p className="text-gray-700">$199</p>
          <p className="text-sm text-gray-600">20 kWh delivered (~25 miles of range)</p>
          <p className="text-sm text-gray-600">Surcharges may apply: cold, peak, overnight</p>

          <h4 className="text-lg font-semibold text-blue-600 mt-6">On-Demand (Scheduled)</h4>
          <p className="text-sm text-gray-600">20 kWh – $129</p>
          <p className="text-sm text-gray-600">30 kWh – $159</p>
          <p className="text-sm text-gray-600">40 kWh – $189</p>
          <p className="text-sm text-gray-600">Plan your charge in advance (24h notice)</p>
          <p className="text-sm text-gray-600">Supported connectors: CCS1, CHAdeMO, NACS (Tesla)</p>
        </div>

        {/* EV Subscriptions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">EV Subscriptions</h3>

          <h4 className="text-lg font-semibold text-blue-600">VoltGo Pass</h4>
          <p className="text-gray-700">$59/month</p>
          <p className="text-sm text-gray-600">2 × 15 kWh charges/month</p>
          <p className="text-sm text-gray-600">Includes 1 roadside assistance service (flat tire, lockout, or jump start 12V)</p>
          <p className="text-sm text-gray-600">Standard response: 2–3 hours</p>
          <p className="text-sm text-gray-600">Surcharges: cold, peak, overnight</p>

          <h4 className="text-lg font-semibold text-blue-600 mt-6">VoltGo Pro</h4>
          <p className="text-gray-700">$119/month</p>
          <p className="text-sm text-gray-600">4 × 20 kWh charges/month</p>
          <p className="text-sm text-gray-600">Includes 2 roadside assistance services</p>
          <p className="text-sm text-gray-600">High-priority response: ≤ 90 minutes</p>
          <p className="text-sm text-gray-600">No surcharges (cold, peak, overnight included)</p>
        </div>
      </div>
    </div>
  );
}
