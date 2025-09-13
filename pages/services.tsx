import React from "react";

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-600 pt-24 pb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Services
        </h2>
      </section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mb-12">
        
        {/* Roadside Assistance */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Roadside Assistance
          </h3>
          <p className="text-gray-700 mb-4">
            Reliable help when you need it most. Coverage includes flat tire
            repair/change, 12V jump start, lockout, and fuel delivery.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
            <li>Standard response time from 45–60 minutes</li>
            <li>Available 24/7 within coverage area</li>
            <li>Discounted rates with subscriptions</li>
          </ul>
        </div>

        {/* EV Charging */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            EV Charging
          </h3>
          <p className="text-gray-700 mb-4">
            On-demand mobile DC fast charging delivered wherever your EV is
            stranded. Avoid the stress of range anxiety.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
            <li>Emergency Rescue: 20 kWh (~25 miles of range)</li>
            <li>Scheduled charges: 20, 30, or 40 kWh options</li>
            <li>Supported connectors: CCS1, CHAdeMO, NACS (Tesla)</li>
          </ul>
        </div>

        {/* Corporate / Fleet Solutions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Corporate Solutions
          </h3>
          <p className="text-gray-700 mb-4">
            Power your fleet with VoltGo. Tailored plans for companies,
            ride-sharing, and delivery services that need reliable on-demand EV
            charging and roadside support.
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
            <li>Flexible packages for multiple vehicles</li>
            <li>Priority roadside support</li>
            <li>Dedicated account manager</li>
          </ul>
          <a
            href="/fleet"
            className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
