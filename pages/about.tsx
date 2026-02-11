'use client';

export default function About() {
  return (
    <div className="bg-blue-700 min-h-screen flex justify-center items-center py-16">
      {/* Contenedor pergamino */}
      <div
        className="max-w-4xl w-full p-10 text-black shadow-2xl"
        style={{
          backgroundColor: '#fffdf5', // blanco tipo pergamino
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/parchment.png')",
          backgroundSize: 'cover',
          border: '3px solid #d4af37', // borde dorado
          borderRadius: '15px',
        }}
      >
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
          About VoltGo
        </h1>

        <p className="text-center text-lg mb-10 text-gray-700 italic">
          Roadside mobility solutions, delivered where and when they are needed.
        </p>

        {/* Our Mission */}
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-8">
          VoltGo is a roadside assistance platform focused on restoring vehicle
          mobility during unexpected roadside events. Our mission is to provide
          on-site solutions that help drivers safely continue their journey
          without unnecessary towing or prolonged immobilization.
        </p>

        {/* Our Value Proposition */}
        <h2 className="text-2xl font-semibold mb-4">Our Value Proposition</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>
            On-site, event-based roadside interventions focused on mobility
            recovery
          </li>
          <li>
            Supervised service execution by trained and authorized personnel
          </li>
          <li>
            Support for electric and conventional vehicles where fixed
            infrastructure is unavailable or impractical
          </li>
          <li>
            Operational clarity aligned with roadside assistance and insurance
            frameworks
          </li>
        </ul>

        {/* Our Vision */}
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p>
          We envision a roadside assistance ecosystem where mobility recovery is
          faster, more efficient, and better adapted to modern vehicles—without
          overreliance on towing or fixed infrastructure.
        </p>
      </div>
    </div>
  );
}
