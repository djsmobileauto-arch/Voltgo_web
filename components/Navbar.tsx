import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-volt-blue text-white border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="VoltGo Home">
          <div className="h-9 w-9 rounded-xl bg-white/10 grid place-content-center">
            <span className="text-xl font-bold">⚡</span>
          </div>
          <span className="font-extrabold tracking-tight text-xl">VOLTGO</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-volt-green">Services</a>
          <a href="#how" className="hover:text-volt-green">How it works</a>
          <a href="#coverage" className="hover:text-volt-green">Coverage</a>
          <a href="#contact" className="hover:text-volt-green">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:8330000000"
            className="hidden sm:inline-block text-sm font-semibold hover:text-volt-green"
            aria-label="Call VoltGo"
          >
            833-XXX-XXXX
          </a>
          <a
            href="#contact"
            className="inline-block rounded-2xl bg-volt-green px-4 py-2 font-semibold text-white hover:opacity-90"
          >
            Request Service
          </a>
        </div>
      </div>
    </header>
  );
}
