export default function Pricing() {
  return (
  <div className="bg-blue-700 min-h-screen pt-24 pb-12 px-6">

      <h1 className="text-3xl font-bold text-white text-center mb-12">
        Simple, Transparent Pricing
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Roadside Assistance */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Roadside Assistance</h2>
          
          <h3 className="text-lg font-semibold text-blue-600">Safe Roads Basic</h3>
          <p className="mb-2">$14.99/month</p>
          <p>1 service/month (flat tire, lockout, jump start 12V, or fuel)</p>
          <p>Response time: up to 60 min</p>
          <p className="text-sm text-gray-500">Extra services 30% off</p>

          <h3 className="text-lg font-semibold text-blue-600 mt-6">Safe Roads Plus</h3>
          <p className="mb-2">$24.99/month</p>
          <p>2 services/month (any type)</p>
          <p>Priority response: ≈45 min</p>
          <p className="text-sm text-gray-500">Extra services 50% off</p>

          <h3 className="text-lg font-semibold text-blue-600 mt-6">Safe Roads Fleet</h3>
          <p className="mb-2">$79.99/month</p>
          <p>10 services/month for up to 5 vehicles</p>
          <p>24/7 coverage</p>
        </div>

        {/* EV Charging */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">EV Charging (One-Time)</h2>

          <h3 className="text-lg font-semibold text-blue-600">Emergency Rescue</h3>
          <p className="mb-2">$199</p>
          <p>20 kWh delivered (~25 miles of range)</p>
          <p className="text-sm text-gray-500">Surcharges may apply: cold, peak, overnight</p>

          <h3 className="text-lg font-semibold text-blue-600 mt-6">On-Demand (Scheduled)</h3>
          <p>20 kWh – $129</p>
          <p>30 kWh – $159</p>
          <p>40 kWh – $189</p>
          <p className="text-sm text-gray-500">Plan your charge in advance (24h notice)</p>
        </div>

        {/* EV Subscriptions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">EV Subscriptions</h2>

          <h3 className="text-lg font-semibold text-blue-600">VoltGo Pass</h3>
          <p className="mb-2">$59/month</p>
          <p>2 × 15 kWh charges/month</p>
          <p>Includes 1 roadside service/month</p>
          <p>Standard response: 2–3 hours</p>
          <p className="text-sm text-gray-500">Surcharges: cold, peak, overnight</p>

          <h3 className="text-lg font-semibold text-blue-600 mt-6">VoltGo Pro</h3>
          <p className="mb-2">$119/month</p>
          <p>4 × 20 kWh charges/month</p>
          <p>Includes 2 roadside services/month</p>
          <p>High-priority response: ≤90 min</p>
          <p className="text-sm text-gray-500">No surcharges (cold, peak, overnight included)</p>
        </div>

      </div>

      {/* Disclaimer */}
      <p className="text-xs text-center text-white mt-12 max-w-3xl mx-auto">
        *Response times may vary based on traffic, distance, and demand.  
        *All prices are subject to change. Memberships auto-renew monthly unless cancelled.  
      </p>
    </div>
  );
}
