import React from "react";

export default function Services() {
  return (
    <div className="bg-blue-600 py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        
        {/* Roadside Assistance */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Roadside Assistance</h3>
          <p className="text-gray-700 mb-2">
            Reliable help when you need it most. Coverage includes flat tire repair/change, 12V jump start, lockout, and fuel delivery.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
            <li>Standard response times from 45–60 minutes</li>
            <li>Available 24/7 within coverage area</li>
            <li>Discounted rates with subscriptions</li>
          </ul>
        </div>

        {/* EV Charging */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">EV Charging</h3>
          <p className="text-gray-700 mb-2">
            On-demand mobile DC fast charging delivered wherever your EV is stranded. 
            Avoid the stress of range anxiety.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
            <li>Emergency Rescue: 20 kWh (~25 miles of range)</li>
            <li>Scheduled charges: 20, 30, or 40 kWh options</li>
            <li>Supported connectors: CCS1, CHAdeMO, NACS (Tesla)</li>
          </ul>
        </div>

        {/* EV Subscriptions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">EV Subscriptions</h3>
          <p className="text-gray-700 mb-2">
            Flexible plans designed to give you peace of mind and predictable costs for your EV charging needs.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
            <li>VoltGo Pass: 2 × 15 kWh charges per month + roadside</li>
            <li>VoltGo Pro: 4 × 20 kWh charges per month + premium roadside</li>
            <li>No hidden fees, transparent pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
