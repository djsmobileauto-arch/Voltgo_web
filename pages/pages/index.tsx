export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <span className="font-bold text-xl">VOLTGO</span>
            <nav className="flex gap-6 text-sm">
              <a className="hover:underline" href="#services">Services</a>
              <a className="hover:underline" href="#how">How it works</a>
              <a className="hover:underline" href="#contact">Contact</a>
            </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Mobile EV Charging — <span className="text-blue-600">VOLTGO</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Fast, reliable, professional help wherever you are. Flat tire, battery jump,
            lockout, fuel delivery, or an emergency Level-1 EV charge — we’ve got you covered.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 rounded-xl bg-black text-white px-6 py-3"
          >
            Get help now
          </a>
        </div>
        <div className="rounded-2xl border p-10 text-center">
          <p className="text-gray-700">Hero image / illustration</p>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Voltgo. All rights reserved.
      </footer>
    </main>
  );
}
