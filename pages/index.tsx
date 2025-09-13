// pages/index.tsx
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HomeHero />

      {/* Services Section */}
      <section className="bg-blue-700 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-white text-2xl font-semibold mb-8">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Emergency Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="font-semibold mb-2 text-gray-900">Emergency</h3>
              <p className="text-sm mb-3 text-gray-700">
                Out of range or stuck roadside? We dispatch mobile fast charging ASAP.
     </p>
<a
  href="tel:18334865846"
  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
>
  Request Emergency
</a>
 

            </div>

            {/* On-Demand Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="font-semibold mb-2 text-gray-900">On-Demand</h3>
              <p className="text-sm mb-3 text-gray-700">
                Book a one-time charge at home, work, or anywhere in our coverage area.
              </p>
              <a
                href="/schedule"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Request Online
              </a>
            </div>

            {/* Subscription Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="font-semibold mb-2 text-gray-900">Subscription</h3>
              <p className="text-sm mb-3 text-gray-700">
                VoltGo Pass $59/month → 2 × 15 kWh <br />
                VoltGo Pro $119/month → 4 × 20 kWh
              </p>
              <a
                href="/plans"
                className="bg-yellow-500 text-black px-4 py-2 rounded"
              >
                View Plans
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
