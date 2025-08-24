{/* HERO (azul corporativo + logo + botones) */}
<section className="bg-[var(--volt-blue)] text-white">
  <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
    {/* Logo */}
    <div className="mx-auto mb-6">
      <Image
        src="/logo-voltgo.png"
        alt="VoltGo"
        width={260}
        height={120}
        priority
        className="mx-auto"
      />
    </div>

    {/* Título principal */}
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--volt-green)]">
      Charge on the go
    </h1>

    {/* Subtítulo */}
    <p className="mt-3 text-lg opacity-90">
      Emergency and on-demand EV charging with flexible subscriptions for frequent drivers.
    </p>

    {/* Botones de acción */}
    <div className="mt-6 flex items-center justify-center gap-4">
      <a
        href="#contact"
        className="inline-block rounded-lg px-6 py-3 font-semibold bg-[var(--volt-green)] text-white border-2 border-[var(--volt-green)] hover:opacity-90"
      >
        Request EV Charge
      </a>

      <a
        href="#how"
        className="inline-block px-6 py-3 font-semibold border-2 border-white rounded-md text-white hover:bg-white/10"
      >
        How it works
      </a>
    </div>
  </div>
</section>
