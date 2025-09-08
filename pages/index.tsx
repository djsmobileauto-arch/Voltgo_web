import React from "react";
import { FaBolt, FaChargingStation, FaBox } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen text-white">
      {/* Header con logo y título */}
      <div className="text-center py-10">
        <img
          src="/logo.png"
          alt="VoltGo Logo"
          className="mx-auto mb-6 w-56"
        />
        <h1 className="text-3xl font-bold mb-4">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="text-lg mb-6">
          Fast, safe and reliable EV charging and roadside support wherever you need it.
        </p>

        {/* Botones principales */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="/roadside"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Emergency Help Now
          </a>
          <a
            href="/services"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Schedule a Charge
          </a>
          <a
            href="/pricing"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Membership Plans
          </a>
        </div>
      </div>

      {/* Sección de servicios */}
      <div className="bg-blue-600 py-12">
        <h2 className="text-2xl font-bold text-center mb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          
          {/* Emergency */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-800">
            <FaBolt className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Emergency</h3>
            <p className="mb-4">
              Out of range or stuck roadside? We dispatch mobile fast charging ASAP.
            </p>
            <a
              href="/roadside"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Request Emergency
            </a>
          </div>

          {/* On-Demand */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-800">
            <FaChargingStation className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">On-Demand</h3>
            <p className="mb-4">
              Book a one-time charge at home, work or anywhere in our coverage area.
            </p>
            <a
              href="/services"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Request Online
            </a>
          </div>

          {/* Subscription */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center text-gray-800">
            <FaBox className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Subscription</h3>
            <p className="mb-4">
              VoltGo Pass $59/month → 2 × 15 kWh <br />
              VoltGo Pro $119/month → 4 × 20 kWh
            </p>
            <a
              href="/pricing"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
