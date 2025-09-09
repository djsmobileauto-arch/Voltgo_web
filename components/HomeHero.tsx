// components/HomeHero.tsx

export default function HomeHero() {
  return (
    <section className="bg-blue-700 text-center text-white pt-14 md:pt-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Logo */}
        <img 
          src="/logo-voltgo.png" 
          alt="VoltGo Logo" 
          className="mx-auto mb-4 w-24 md:w-32"
        />

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Mobile EV Charging & Roadside Assistance
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-100 mb-8">
          Fast, safe and reliable EV charging and roadside support whenever you need it.
        </p>

        {/* Botones CTA */}
        <div className="flex justify-center space-x-4 mb-12">
          <a 
            href="/emergency" 
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-medium shadow-md"
          >
            Emergency Help Now
          </a>
          <a 
            href="/schedule" 
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-medium shadow-md"
          >
            Schedule a Charge
          </a>
          <a 
            href="/plans" 
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg text-black font-medium shadow-md"
          >
            Membership Plans
          </a>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14">
          
          {/* Emergency */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-semibold mb-2 text-gray-900">Emergency</h3>
            <p className="text-sm mb-3 text-gray-700">
              Out of range or stuck roadside? We dispatch mobile fast charging ASAP.
            </p>
            <a 
              href="/emergency" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Request Emergency
            </a>
          </div>

          {/* On-Demand */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-semibold mb-2 text-gray-900">On-Demand</h3>
            <p className="text-sm mb-3 text-gray-700">
              Book a one-time charge at home, work, or anywhere in our coverage area.
            </p>
            <a 
              href="/schedule" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Request Online
            </a>
          </div>

          {/* Subscription */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="font-semibold mb-2 text-gray-900">Subscription</h3>
            <p className="text-sm mb-3 text-gray-700">
              VoltGo Pass $59/month → 2 × 15 kWh<br />
              VoltGo Pro $119/month → 4 × 20 kWh
            </p>
            <a 
              href="/plans" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
