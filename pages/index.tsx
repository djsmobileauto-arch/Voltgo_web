import React from "react";

export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen flex flex-col items-center">
      {/* Logo */}
      <div className="mt-8">
        <img src="/logo-voltgo.png" alt="VoltGo Logo" className="h-24 mx-auto" />
      </div>

      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 text-center">
        Mobile EV Charging & Roadside Assistance
      </h1>
      <p className="text-white mt-2 text-center max-w-2xl">
        Fast, safe and reliable EV charging and roadside support whenever you need it.
      </p>

      {/* Botones principales */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
          Emergency Help Now
        </button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
          Schedule a Charge
        </button>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
          Membership Plans
        </button>
      </div>

      {/* Sección de Servicios */}
      <h2 className="text-2xl font-bold text-white mt-12">Services</h2>
      <p className="text-white mt-2 text-center max-w-2xl">
        Two paths: immediate emergency help or scheduled charging — plus memberships.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl w-full">
        {/* Emergency */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-red-500 text-3xl mb-3">⚡</div>
          <h3 className="text-lg font-semibold">Emergency</h3>
          <p className="text-gray-600 mt-2">
            Out of range or stuck roadside? We dispatch mobile fast charging ASAP.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
            Request Emergency
          </button>
        </div>

        {/* On-Demand */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-blue-500 text-3xl mb-3">📅</div>
          <h3 className="text-lg font-semibold">On-Demand</h3>
          <p className="text-gray-600 mt-2">
            Book a one-time charge at home, work or anywhere in our coverage area.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Request Online
          </button>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-yellow-500 text-3xl mb-3">💳</div>
          <h3 className="text-lg font-semibold">Subscription</h3>
          <p className="text-gray-600 mt-2">
            VoltGo Pass $59/month → 2 × 15 kWh<br />
            VoltGo Pro $119/month → 4 × 20 kWh
          </p>
          <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
}
