import Link from "next/link";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="bg-[var(--volt-blue)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        {/* Logo grande centrado */}
        <Image
          src="/logo-voltgo.png"
          alt="VoltGo Logo"
          width={360}  // subí a 400–440 si querés aún más grande
          height={140}
          priority
          className="mx-auto mb-6"
        />

        {/* Título / subtítulo */}
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-blue-100">
          Fast, safe and reliable EV charging wherever you need it.
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+18334VOLTGO"
            aria-label="Emergency Help Now"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-green-700"
          >
            Emergency Help Now
          </a>

          <Link
            href="/schedule"
            aria-label="Schedule a Charge"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-blue-600"
          >
            Schedule a Charge
          </Link>

          <Link
            href="/pricing"
            aria-label="Membership Plans"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black shadow-soft transition hover:bg-yellow-600"
          >
            Membership Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
