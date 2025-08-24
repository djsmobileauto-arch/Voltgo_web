export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">

      {/* HERO */}
      <section
        className="text-white text-center py-20"
        style={{ backgroundColor: "#0a3ccf" }} // azul corporativo
      >
        {/* Logo */}
        <div className="mb-6">
          <img
            src="/logo-voltgo.png"
            alt="VoltGo"
            width={260}
            height={120}
            className="mx-auto"
          />
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Mobile EV Charging & Roadside Assistance
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Fast, safe and reliable EV charging wherever you need it.
        </p>

        {/* Botones */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          {/* Botón primario */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl font-semibold text-white"
            style={{ backgroundColor: "#15c26b" }} // verde sólido
          >
            Request Service
          </a>

          {/* Botón secundario */}
          <a
            href="#how"
            className="px-6 py-3 rounded-2xl font-semibold"
            style={{
              border: "2px solid #15c26b",
              color: "#15c26b",
              backgroundColor: "transparent",
            }}
          >
            How it works
          </a>
        </div>
      </section>
    </main>
  );
}
