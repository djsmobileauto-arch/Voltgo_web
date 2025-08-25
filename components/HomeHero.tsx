import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-blue-700">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center text-white">
        <h1 className="text-3xl font-extrabold md:text-5xl">
          Mobile EV Charging & Roadside Assistance
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-blue-100">
          Fast, safe and reliable EV charging wherever you need it.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+18334VOLTGO"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
          >
            Emergency Help Now
          </a>

          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
          >
            Schedule a Charge
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-400"
          >
            Membership Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
