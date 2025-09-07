import React from "react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-white mb-12">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Roadside Assistance */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Roadside Assistance
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li><span className="font-semibold">Safe Roads Basic</span>: $14.99/mo – 1 service/month</li>
            <li><span className="font-semibold">Safe Roads Plus</span>: $24.99/mo – 2 services/month, 3rd at 50% off</li>
            <li><span className="font-semibold">Safe Roads Fleet</span>: $99.99/mo – 8 services for up to 5 vehicles</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            Public pricing: Jump Start $75 · Lockout $85 · Flat Tire $89 · Fuel Delivery $99 + fuel
          </p>
        </div>

        {/* EV Charging */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            EV Charging
          </h2>
          <p className="text-gray-600 mb-3">
            On-demand mobile DC fast charging at your location.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>Emergency Rescue – $199 (20 kWh)</li>
            <li>On-Demand Scheduled: 20 kWh – $129 · 30 kWh – $159 · 40 kWh – $189</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            Supported connectors: CCS1, CHAdeMO, NACS (Tesla)
          </p>
        </div>

        {/* Subscriptions */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Subscriptions
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">VoltGo Pass</span>: $59/mo – 2×15 kWh + 1 roadside included
            </li>
            <li>
              <span className="font-semibold">VoltGo Pro</span>: $119/mo – 4×20 kWh + 2 roadside included
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            Subscribers enjoy discounted extra roadside services and faster response times.
          </p>
        </div>
      </div>
    </div>
  );
}
