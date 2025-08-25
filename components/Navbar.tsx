import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo-voltgo.png"  // << usa el PNG que ya tenés en /public
            alt="VoltGo"
            className="h-8 w-auto"
          />
          <span className="sr-only">VoltGo</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/roadside">Roadside</Link></li>
          <li><Link href="/app">App</Link></li>
          <li><Link href="/subscribe">Subscribe</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
        </ul>

        {/* CTA Emergencia */}
        <a
          href="tel:+18334VOLTGO"
          className="inline-flex items-center rounded-full bg-[var(--volt-green)] px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:brightness-110"
        >
          Emergency 24/7 · Call 1-833-4-VOLTGO
        </a>
      </nav>
    </header>
  );
}
