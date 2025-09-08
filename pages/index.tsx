export default function Home() {
  return (
    <div className="bg-blue-600 min-h-screen text-white">
      {/* Hero Section */}
      <header className="text-center py-16">
        <img 
          src="/logo-voltgo.png" 
          alt="VoltGo Logo" 
          className="mx-auto mb-6 w-48"
        />
        <h1 className="text-4xl font-extrabold">Mobile EV Charging & Roadside Assistance</h1>
        <p className="mt-4 text-lg text-gray-200">
          Fast, safe and reliable EV charging and roadside support wherever you need it.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold">
            Emergency Help Now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Schedule a Charge
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold">
            Membership Plans
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="bg-blue-600 py-16">
        <h2 className="text-center text-3xl font-bold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Emergency */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">Emergency</h3>
            <p className="text-gray-600">Out of range or stuck roadside? We dispatch mobile fast charging ASAP.</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Request Emergency
            </button>
          </div>

          {/* On-Demand */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-500 text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">On-Demand</h3>
            <p className="text-gray-600">Book a one-time charge at home, work or anywhere in our coverage area.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Request Online
            </button>
          </div>

          {/* Subscription */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">Subscription</h3>
            <p className="text-gray-600">VoltGo Pass $59/month → 2 × 15 kWh<br/>VoltGo Pro $119/month → 4 × 20 kWh</p>
            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
              View Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
