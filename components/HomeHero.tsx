// components/HomeHero.tsx
export default function HomeHero() {
  return (
    <section className="bg-blue-700 text-center text-white pt-16 pb-12">
      {/* Logo */}
      <img
        src="/voltgo-logo-final.png"
        alt="VoltGo Logo"
        className="mx-auto mb-6 w-56 md:w-64"
      />

      {/* Título */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
        Mobile EV Charging & Roadside Assistance
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-100 mb-8">
        Fast, safe and reliable EV charging and roadside support whenever you need it.
      </p>

      {/* Botones */}
      <div className="flex justify-center space-x-4 mb-12">
        <a
          href="/services"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md"
        >
          Emergency Help Now
        </a>
        <a
          href="/services"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold shadow-md"
        >
          Schedule a Charge
        </a>
        <a
          href="/services"
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg text-black font-semibold shadow-md"
        >
          Membership Plans
        </a>
      </div>
    </section>
  );
}
