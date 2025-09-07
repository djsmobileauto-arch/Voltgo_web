export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen">
      {/* Hero Section */}
      <div className="text-center text-white py-16">
        <h1 className="text-4xl font-bold mb-4">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="text-lg mb-6">
          Fast, safe, and reliable EV charging wherever you need it.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
            Emergency Help Now
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
            Schedule a Charge
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
            Membership Plans
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          
          {/* Emergency */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Emergency</h3>
            <p className="text-gray-700 mb-4">
              Out of range or stuck roadside? We dispatch mobile fast charge, ASAP.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              Request Emergency
            </button>
          </div>

          {/* On-Demand */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">On-Demand</h3>
            <p className="text-gray-700 mb-4">
              Book a one-time charge at home, work or anywhere in our coverage area.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Request Online
            </button>
          </div>

          {/* Subscription */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Subscription</h3>
            <p className="text-gray-700 mb-4">
              VoltGo Pass $59/month (flexible) or VoltGo Pro from $119/month.
              Save and get priority.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
