// pages/roadside.tsx
export default function Roadside() {
  const phone = "1-833-4-VOLTGO";

  const items = [
    {
      title: "Jump Start",
      desc: "Dead battery? We’ll get you back on the road quickly.",
    },
    {
      title: "Flat Tire",
      desc: "On-site tire replacement or repair, anytime and anywhere.",
    },
    {
      title: "Fuel Delivery",
      desc: "Out of gas? We’ll deliver fuel straight to your location.",
    },
    {
      title: "Lockout",
      desc: "Keys locked inside? We’ll unlock your vehicle safely.",
    },
  ];

  return (
    <div className="bg-[var(--volt-blue)] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Título */}
        <h1 className="text-center text-4xl font-extrabold mb-3">
          Roadside Assistance
        </h1>

        {/* Subtítulo */}
        <p className="text-center text-blue-100 mb-10">
          24/7 roadside support — fast, safe, and reliable help when you need it most.
        </p>

        {/* Tarjetas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <div
              key={s.title}
              className="bg-white text-slate-800 p-6 rounded-2xl shadow-soft"
            >
              <h2 className="text-xl font-bold mb-2">{s.title}</h2>
              <p className="mb-4">{s.desc}</p>
              <a
                href={`tel:${phone.replaceAll("-", "")}`}
                aria-label={`Request ${s.title} help`}
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold text-white bg-[var(--volt-green)] hover:opacity-90 transition"
              >
                Request Help
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
