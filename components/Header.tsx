import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-700">
      {/* Logo con fallback */}
      <div className="flex items-center">
        {!logoError ? (
          <Image
            src="/voltgo-logo-final.png"
            alt="VoltGo Logo"
            width={220}
            height={70}
            priority
            onError={() => setLogoError(true)} // si falla la carga, activa fallback
          />
        ) : (
          <span className="text-white text-2xl font-bold">VoltGo</span>
        )}
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
