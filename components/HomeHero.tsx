import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-[var(--volt-blue)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center">
        {/* LOGO GRANDE CENTRADO */}
        <img
          src="/logo-voltgo.png"
          alt="VoltGo"
          className="mx-auto mb-6 h-20 w-auto md:h-28 lg:h-32"
          loading="eager"
        />

        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-100 md:text-base">
          Fast, safe and reliable EV charging wherever you need it.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+18334VOLTGO"
            className="inline-flex items-center justify-center rounded-md bg-[var(--volt-green)]
                       px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
            aria-label="Emergency Help Now"
          >
            Emergency Help Now
          </a>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-md bg-blue-500
                       px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600"
            aria-label="Schedule a Charge"
          >
            Schedule a Charge
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500
                       px-4 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-400"
            aria-label="Membership Plans"
          >
            Membership Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
