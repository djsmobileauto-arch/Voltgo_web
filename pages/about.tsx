'use client';

export default function About() {
  return (
    <div className="bg-blue-700 min-h-screen flex justify-center items-center py-16">
      {/* Contenedor pergamino */}
      <div
        className="max-w-4xl w-full p-10 text-black shadow-2xl"
        style={{
          backgroundColor: "#fffdf5", // blanco tipo pergamino
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/parchment.png')",
          backgroundSize: "cover",
          border: "3px solid #d4af37", // borde dorado
          borderRadius: "15px",
        }}
      >
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
          About VoltGo
        </h1>
        <p className="text-center text-lg mb-10 text-gray-700 italic">
          Driving Innovation in Roadside Assistance & EV Charging
        </p>

        {/* Secciones */}
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-8">
          VoltGo, powered by DJ’S Mobile Auto Solutions LLC, was created with one
          purpose: to redefine the way drivers access roadside assistance and
          energy. We combine over a decade of experience in mobile automotive
          solutions with cutting-edge EV fast charging technology, delivering a
          service that is both reliable for customers and scalable for partners
          and investors.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Value Proposition</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>
            ⚡ Mobile DC Fast Charging – Up to 65 kWh delivered on-site, giving EV
            drivers up to 60 miles of range in less than an hour.
          </li>
          <li>
            🔋 Full Roadside Assistance – Battery replacements, jump starts, tire
            services, lockouts, and more.
          </li>
          <li>
            🌍 Smart Coverage – Serving Connecticut with scalable expansion plans
            to surrounding states.
          </li>
          <li>
            🤝 B2C & B2B – Tailored solutions for individual drivers, fleets, and
            corporate partners.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          VoltGo is more than a service—it’s the future of roadside assistance.
          We aim to become a recognized leader in mobile EV charging and
          automotive support, ensuring no driver is left stranded, whether
          they’re commuting locally or traveling cross-state.
        </p>
      </div>
    </div>
  );
}
