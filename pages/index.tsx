import React from "react";
import { LightningBoltIcon, CalendarIcon, CreditCardIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen">
      {/* Hero */}
      <header className="text-center py-16">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="VoltGo Logo"
          className="h-16 mx-auto mb-6"
        />

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="mt-3 text-lg text-white max-w-2xl mx-auto">
          Fast, safe and reliable EV charging and roadside support wherever you need it.
        </p>

        {/* Botones principales */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow">
            Emergency Help Now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow">
            Schedule a Charge
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow">
            Membership Plans
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="bg-blue-600 py-16">
        <h2 className="text-2xl font-bold text-center text-white mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {/* Emergency */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <LightningBoltIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Emergency</h3>
            <p className="text-gray-600 mb-4">
              Out of range or stuck roadside? We dispatch mobile fast charging ASAP.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Request Emergency
            </button>
          </div>

          {/* On-Demand */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CalendarIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-blue-600">On-Demand</h3>
            <p className="text-gray-600 mb-4">
              Book a one-time charge at home, work or anywhere in our coverage area.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Request Online
            </button>
          </div>

          {/* Subscription */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CreditCardIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-blue-600">Subscription</h3>
            <p className="text-gray-600 mb-4">
              VoltGo Pass $59/month → 2 × 15 kWh <br />
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
