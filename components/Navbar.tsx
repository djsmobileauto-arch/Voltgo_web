import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-800">
      {/* Bandera */}
      <div className="flex items-center">
        <Image
          src="/us-flag.png"
          alt="American Flag"
          width={120}
          height={72}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Links de navegación */}
      <div className="flex space-x-6 text-white font-medium">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/roadside">Roadside</a>
        <a href="/app">App</a>
        <a href="/subscribe">Subscribe</a>
        <a href="/contact">Contact</a>
        <a href="/pricing">Pricing</a>
      </div>
    </nav>
  );
}
