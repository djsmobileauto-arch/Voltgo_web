import React from "react";

export default function PricingPage() {
  return (
    <div className="bg-blue-600 py-12">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        Simple, Transparent Pricing
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Roadside Assistance */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Roadside Assistance</h3>
          <p className="font-bold text-2xl mb-2">Safe Roads Basic</p>
          <p className="mb-4">$14.99/month</p>
          <p>1 service/month (flat tire, lockout, jump start 12V, or fuel)</p>
          <p>Response time: up to 60 min</p>
          <p className="text-sm mt-2">Extra services 30% off</p>

          <hr className="my-4" />

          <p className="font-bold text-2xl mb-2">Safe Roads Plus</p>
          <p className="mb-4">$24.99/month</p>
          <p>2 services/month (any type: flat tire, lockout, jump start 12V, or fuel)</p>
          <p>Priority response: ~45 min</p>
          <p className="text-sm mt-2">Extra services 50% off</p>

          <hr className="my-4" />

          <p className="font-bold text-2xl mb-2">Safe Roads Fleet</p>
          <p className="mb-4">$79.99/month</p>
          <p>For up to 5 vehicles</p>
          <p>10 services/month</p>
          <p>24/7 coverage</p>
        </div>

        {/* EV Charging (One-Time) */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">EV Charging (One-Time)</h3>
          <p className="font-bold text-2xl mb-2">Emergency Rescue</p>
          <p className="mb-4">$199</p>
          <p>20 kWh delivered (~25 miles of range)</p>
          <p className="text-sm mb-4">Surcharges may apply: cold, peak, overnight</p>

          <hr className="my-4" />

          <p className="font-bold text-2xl mb-2">On-Demand (Scheduled)</p>
          <p>20 kWh – $129</p>
          <p>30 kWh – $159</p>
          <p>40 kWh – $189</p>
          <p className="text-sm mt-2">Plan your charge in advance (24h notice)</p>
          <p className="text-sm">Supported connectors: CCS1, CHAdeMO, NACS (Tesla)</p>
        </div>

        {/* EV Subscriptions */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">EV Subscriptions</h3>
          
          <p className="font-bold text-2xl mb-2">VoltGo Pass</p>
          <p className="mb-4">$59/month</p>
          <p>2 × 15 kWh charges/month</p>
          <p>Includes 1 roadside assistance service (flat tire, lockout, or jump start 12V)</p>
          <p>Standard response: 2–3 hours</p>
          <p className="text-sm">Surcharges: cold, peak, overnight</p>

          <hr className="my-4" />

          <p className="font-bold text-2xl mb-2">VoltGo Pro</p>
          <p className="mb-4">$119/month</p>
          <p>4 × 20 kWh charges/month</p>
          <p>Includes 2 roadside assistance services</p>
          <p>High-priority response: ≤ 90 minutes</p>
          <p>No surcharges (cold, peak, overnight included)</p>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-xs text-gray-200 mt-8 max-w-4xl mx-auto">
        All prices are subject to change. Roadside assistance includes flat tire, lockout, jump start 12V, and fuel delivery. 
        EV charging services depend on connector compatibility and may include surcharges for cold, peak, or overnight service. 
        Fleet plans cover up to 5 vehicles as specified.
      </p>
    </div>
  );
}
