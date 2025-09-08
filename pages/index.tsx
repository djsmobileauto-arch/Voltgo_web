// pages/index.tsx (Hero + Services refinados)

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-700 text-center text-white pt-12 md:pt-16">
        <div className="max-w-4xl mx-auto px-4">
          <img 
            src="/voltgo-logo.png" 
            alt="VoltGo Logo" 
            className="mx-auto mb-6 w-40 md:w-52"
          />
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Mobile EV Charging & Roadside Assistance
          </h1>
          <p className="text-sm md:text-base mb-6">
            Fast, safe and reliable EV charging and roadside support whenever you need it.
          </p>
          <div className="flex justify-center space-x-3 mb-12 md:mb-16">
            <a href="/emergency" className="bg-green-600 px-4 py-2 rounded text-white">Emergency Help Now</a>
            <a href="/schedule" className="bg-blue-500 px-4 py-2 rounded text-white">Schedule a Charge</a>
            <a href="/plans" className="bg-yellow-500 px-4 py-2 rounded text-black">Membership Plans</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-blue-700 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-white text-2xl font-semibold mb-8">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Emergency Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-2">Emergency</h3>
              <p className="text-sm mb-3">
                Out of range or stuck roadside? We dispatch mobile fast charging ASAP.
              </p>
              <a href="/emergency" className="bg-green-600 text-white px-3 py-1 rounded">
                Request Emergency
              </a>
            </div>
            
            {/* On-Demand Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-2">On-Demand</h3>
              <p className="text-sm mb-3">
                Book a one-time charge at home, work, or anywhere in our coverage area.
              </p>
              <a href="/schedule" className="bg-blue-500 text-white px-3 py-1 rounded">
                Request Online
              </a>
            </div>
            
            {/* Subscription Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold mb-2">Subscription</h3>
              <p className="text-sm mb-3">
                VoltGo Pass $59/month → 2 × 15 kWh<br />
                VoltGo Pro $119/month → 4 × 20 kWh
              </p>
              <a href="/plans" className="bg-yellow-500 text-black px-3 py-1 rounded">
                View Plans
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
