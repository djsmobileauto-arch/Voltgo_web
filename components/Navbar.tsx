// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-blue-700 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Bandera izquierda */}
          <div className="flex items-center">
            <Image
              src="/usa-flag.png"
              alt="USA Flag"
              width={36}
              height={24}
              className="rounded-sm shadow"
            />
          </div>

          {/* Links centrados */}
          <nav className="flex-1 flex justify-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
            <Link href="/services" className="text-white hover:text-gray-200">Services</Link>
            <Link href="/roadside" className="text-white hover:text-gray-200">Roadside</Link>
            <Link href="/app" className="text-white hover:text-gray-200">App</Link>
            <Link href="/subscribe" className="text-white hover:text-gray-200">Subscribe</Link>
            <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
            <Link href="/pricing" className="text-white hover:text-gray-200">Pricing</Link>
          </nav>

          {/* Botón verde derecha */}
          <div className="flex items-center">
            <a
              href="tel:18334865846"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              1-833-4VOLTGO
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
