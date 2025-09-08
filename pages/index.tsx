import React from "react";

export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen text-white">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="mt-2">
          Fast, safe and reliable EV charging and roadside support wherever you need it.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
            Emergency Help Now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
            Schedule a Charge
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">
            Membership Plans
          </button>
        </div>
      </header>

      {/* Services */}
      <section className="py-10">
        <h2 className="text-center text-2xl font-semibold mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
          
          {/* Emergency */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md text-center">
            <div className="text-red-500 text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Emergency</h3>
            <p className="mb-4">
              Out of range or stuck roadside? We dispatch mobile fast charging ASAP.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Request Emergency
            </button>
          </div>

          {/* On-Demand */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-500 text-3xl mb-3">📅</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">On-Demand</h3>
            <p className="mb-4">
              Book a one-time charge at home, work or anywhere in our coverage area.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Request Online
            </button>
          </div>

          {/* Subscription */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md text-center">
            <div className="text-yellow-600 text-3xl mb-3">📦</div>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Subscription</h3>
            <p className="mb-4">
              VoltGo Pass $59/month → 2 × 15 kWh<br/>
              VoltGo Pro $119/month → 4 × 20 kWh
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
              View Plans
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
