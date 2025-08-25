import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4
                   bg-[var(--volt-blue)] text-white"
      >
        {/* Logo arriba-izquierda */}
        <Link href="/" className="flex items-center gap-2" aria-label="VoltGo Home">
          <img src="/logo-voltgo.png" alt="VoltGo" className="h-8 w-auto" />
          <span className="sr-only">VoltGo</span>
        </Link>

        {/* Menú principal */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><Link href="/" className="text-white/90 hover:text-white">Home</Link></li>
          <li><Link href="/services" className="text-white/90 hover:text-white">Services</Link></li>
          <li><Link href="/roadside" className="text-white/90 hover:text-white">Roadside</Link></li>
          <li><Link href="/app" className="text-white/90 hover:text-white">App</Link></li>
          <li><Link href="/subscribe" className="text-white/90 hover:text-white">Subscribe</Link></li>
          <li><Link href="/contact" className="text-white/90 hover:text-white">Contact</Link></li>
          <li><Link href="/pricing" className="text-white/90 hover:text-white">Pricing</Link></li>
        </ul>

        {/* Botón de emergencia */}
        <a
          href="tel:+18334VOLTGO"
          className="inline-flex items-center rounded-full bg-[var(--volt-green)]
                     px-4 py-1.5 text-sm font-semibold text-white hover:brightness-110"
        >
          Emergency 24/7 · Call 1-833-4-VOLTGO
        </a>
      </nav>
    </header>
  );
}
