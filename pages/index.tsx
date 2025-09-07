export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen text-white">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="text-lg mb-6">
          Fast, safe and reliable EV charging wherever you need it.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold">
            Emergency Help Now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Schedule a Charge
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
            Membership Plans
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white text-gray-800 rounded-t-3xl shadow-lg p-10">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-10">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Emergency */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Emergency</h3>
            <p className="mb-4">
              Out of range or stuck roadside? We dispatch mobile fast
              charge, ASAP.
            </p>
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium text-white">
              Request Emergency
            </button>
          </div>

          {/* On-Demand */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">On-Demand</h3>
            <p className="mb-4">
              Book a one-time charge at home, work or anywhere in our
              coverage area.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium text-white">
              Request Online
            </button>
          </div>

          {/* Subscription */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Subscription</h3>
            <p className="mb-4">
              VoltGo Pass $59/mo (flexible) or VoltGo Pro from $119/mo.
              Save and get priority.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-medium text-white">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
