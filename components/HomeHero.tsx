"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-700">
      <div className="container mx-auto px-4 pt-10 md:pt-12 pb-10 text-center">
        {/* LOGO */}
        <Image
          src="/voltgo-logo-final.png"
          alt="VoltGo — Charge on the Go"
          priority
          className="mx-auto block h-auto
                     w-48              /* base mobile */
                     md:w-60 lg:w-64 xl:w-72"  /* ≈ +20% en desktop */
        />

        {/* TITULAR */}
        <h1 className="mt-3 md:mt-2 text-white text-3xl md:text-5xl font-extrabold">
          Mobile EV Charging & Roadside Assistance
        </h1>

        {/* SUBTÍTULO opcional */}
        <p className="mt-3 text-lg md:text-xl text-white/90">
          Fast, safe and reliable EV charging and roadside support whenever you need it.
        </p>

        {/* BOTONES CTA */}
        <div className="mt-5 md:mt-6 flex justify-center gap-3 flex-wrap">
          <a
            href="#emergency"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded font-semibold"
          >
            Emergency Help Now
          </a>
          <a
            href="#schedule"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded font-semibold"
          >
            Schedule a Charge
          </a>
          <a
            href="#plans"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-3 rounded font-semibold"
          >
            Membership Plans
          </a>
        </div>
      </div>
    </section>
  );
}
