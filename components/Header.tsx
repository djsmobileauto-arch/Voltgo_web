import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-700">
      {/* Logo corregido */}
      <div className="flex items-center">
        <Image
          src="/voltgo-logo-final.png"   // archivo en /public
          alt="VoltGo Logo"
          width={220}                   // ajusta tamaño
          height={70}
          priority
        />
      </div>

      {/* Menú de navegación */}
      <nav className="flex space-x-6 text-white font-medium">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/roadside">Roadside</a>
        <a href="/app">App</a>
        <a href="/subscribe">Subscribe</a>
        <a href="/contact">Contact</a>
        <a href="/pricing">Pricing</a>
      </nav>
    </header>
  );
}
