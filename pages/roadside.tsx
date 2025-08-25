// pages/roadside.tsx
export default function Roadside() {
  return (
    <div className="bg-[var(--volt-blue)] min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Título */}
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          Roadside Assistance
        </h1>

        {/* Descripción */}
        <p className="text-lg text-center mb-12 text-blue-100">
          24/7 roadside support — fast, safe, and reliable help when you need it most.
        </p>

        {/* Secciones de servicio */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Jump Start */}
          <div className="bg-white text-slate-800 p-6 rounded-2xl shadow-soft">
            <h2 className="text-xl font-bold mb-2">Jump Start</h2>
            <p className="mb-4">Dead battery? We’ll get you back on the road quickly.</p>
            <button className="bg-[var(--volt-green)] text-white px-4 py-2 rounded-lg font-semibold">
              Request Help
            </button>
          </div>

          {/* Tire Change */}
          <div className="bg-white text-slate-800 p-6 rounded-2xl shadow-soft">
            <h2 className="text-xl font-bold mb-2">Flat Tire</h2>
            <p className="mb-4">On-site tire replacement or repair, anytime and anywhere.</p>
            <button className="bg-[var(--volt-green)] text-white px-4 py-2 rounded-lg font-semibold">
              Request Help
            </button>
          </div>

          {/* Fuel Delivery */}
          <div className="bg-white text-slate-800 p-6 rounded-2xl shadow-soft">
            <h2 className="text-xl font-bold mb-2">Fuel Delivery</h2>
            <p className="mb-4">Out of gas? We’ll deliver fuel straight to your location.</p>
            <button className="bg-[var(--volt-green)] text-white px-4 py-2 rounded-lg font-semibold">
              Request Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
