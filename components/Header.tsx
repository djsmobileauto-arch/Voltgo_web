import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6">
      {/* Logo */}
      <div className="flex items-center border border-red-500 bg-yellow-200">
        <Image
          src="/voltgo-logo-final.png"
          alt="VoltGo Logo"
          width={220}
          height={70}
          priority
        />
      </div>

      {/* Menú de navegación */}
      <nav className="flex space-x-6 text-white font-medium">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/roadside">Roadside</a>
      </nav>
    </header>
  );
}
