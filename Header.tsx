import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          VOLTGO
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link className="hover:text-blue-600" href="#servicios">Servicios</Link>
          <Link className="hover:text-blue-600" href="#como-funciona">Cómo funciona</Link>
          <Link className="hover:text-blue-600" href="#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
