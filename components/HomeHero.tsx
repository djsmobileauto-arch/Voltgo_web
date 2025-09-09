// components/HomeHero.tsx

export default function HomeHero() {
  return (
    <section className="bg-blue-700 text-center text-white pt-14 md:pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">

        {/* Logo */}
        <img
  src="/voltgo-logo-final.png"
  alt="VoltGo Logo"
  className="mx-auto mb-10 w-40 md:w-56"
/>


        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
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
      </div>
    </section>
  );
}
