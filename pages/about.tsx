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

        {/* About Copy (tu texto) */}
        <div className="space-y-5 text-gray-900 leading-relaxed">
          <p>
            VoltGo is a roadside assistance platform focused on restoring vehicle
            mobility during unexpected roadside events. Our services are designed
            to provide on-site solutions that help drivers safely continue their
            journey without unnecessary towing or prolonged immobilization.
          </p>

          <p>
            Powered by DJ’S Mobile Auto Solutions LLC, VoltGo operates through a
            supervised, event-based service model, delivering practical roadside
            support for electric and conventional vehicles where fixed
            infrastructure is unavailable or impractical.
          </p>

          <p>
            VoltGo combines field experience, operational discipline, and modern
            mobility solutions to address real-world roadside needs—efficiently,
            responsibly, and without overpromising.
          </p>
        </div>
      </div>
    </div>
  );
}
