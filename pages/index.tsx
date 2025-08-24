/* HERO (azul corporativo + logo + botones) */
export default function Home() {
  return (
    <section className="bg-[var(--volt-blue)] text-white">
      <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
        
        {/* Logo */}
        <div className="mx-auto mb-6">
          <img
            src="/logo-voltgo.png"
            alt="VoltGo"
            width={260}
            height={120}
            className="mx-auto"
          />
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
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
            className="inline-block rounded-lg px-6 py-3 font-semibold bg-[var(--volt-green)] text-white hover:opacity-90"
          >
            Request EV Charge
          </a>
          <a
            href="#how"
            className="inline-block rounded-lg px-6 py-3 font-semibold border-2 border-white text-white hover:bg-white hover:text-[var(--volt-blue)]"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
