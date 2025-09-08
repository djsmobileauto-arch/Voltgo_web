import React from "react";

export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-center py-8">
        <img
          src="/logo.png"
          alt="VoltGo Logo"
          className="mx-auto w-48 h-auto mb-4" // antes era pequeño → ahora más grande
        />
        <h1 className="text-3xl font-bold text-white">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="text-white mt-2">
          Fast, safe and reliable EV charging and roadside support whenever you need it.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Emergency Help Now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Schedule a Charge
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
            Membership Plans
          </button>
        </div>
      </header>

      {/* Services Section */}
      <main className="flex-grow bg-blue-600 py-12">
        <h2 className="text-center text-2xl font-bold text-white mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Emergency */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-red-500 text-3xl mb-2">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Emergency</h3>
            <p className="text-gray-600 mb-4">
              Out of range or stuck roadside? We dispatch mobile fast charging ASAP.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Request Emergency
            </button>
          </div>

          {/* On-Demand */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-blue-500 text-3xl mb-2">📅</div>
            <h3 className="text-xl font-semibold mb-2">On-Demand</h3>
            <p className="text-gray-600 mb-4">
              Book a one-time charge at home, work or anywhere in our coverage area.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Request Online
            </button>
          </div>

          {/* Subscription */}
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-yellow-600 text-3xl mb-2">📦</div>
            <h3 className="text-xl font-semibold mb-2">Subscription</h3>
            <p className="text-gray-600 mb-4">
              VoltGo Pass $59/month → 2 × 15 kWh
              <br />
              VoltGo Pro $119/month → 4 × 20 kWh
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
              View Plans
            </button>
          </div>
        </div>
      </main>

      {/* Footer (compacto) */}
      <footer className="bg-blue-700 text-white py-6 text-center text-sm">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
          <p>© 2025 VoltGo. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            VoltGo is the commercial brand powered by DJ’s Mobile Auto Solutions LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
