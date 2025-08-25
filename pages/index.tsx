import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-blue-700">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center text-white">
        {/* Logo opcional arriba si lo usas */}
        {/* <img src="/logo-voltgo.svg" alt="VoltGo" className="mx-auto mb-4 h-8" /> */}

        <h1 className="text-3xl font-extrabold md:text-5xl">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-blue-100">
          Fast, safe and reliable EV charging wherever you need it.
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* Emergencias (Verde) */}
          <a
            href="tel:+18334VOLTGO"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
            aria-label="Emergency Help Now"
          >
            Emergency Help Now
          </a>

          {/* Programar carga (Azul) */}
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
            aria-label="Schedule a Charge"
          >
            Schedule a Charge
          </Link>

          {/* Planes de membresía (Dorado) */}
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-400"
            aria-label="Membership Plans"
          >
            Membership Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
