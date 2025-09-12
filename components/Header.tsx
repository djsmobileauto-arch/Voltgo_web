import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6">
      {/* American Flag */}
      <div className="flex items-center">
        <Image
          src="/us-flag.png"
          alt="American Flag"
          width={100}
          height={60}
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
