// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/voltgo-logo-final.png"
            alt="VoltGo Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Navbar desktop */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-700">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-700">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-700">
            Contact
          </Link>
        </nav>

        {/* Bandera americana */}
        <div className="hidden md:block">
          <Image
            src="/usa-flag.png"
            alt="USA Flag"
            width={40}
            height={25}
            className="rounded-sm shadow"
          />
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navbar móvil */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-4 text-gray-800 font-medium">
          <Link href="/" className="hover:text-blue-700" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-700" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" className="hover:text-blue-700" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-700" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Image
            src="/usa-flag.png"
            alt="USA Flag"
            width={40}
            height={25}
            className="rounded-sm shadow mt-2"
          />
        </nav>
      )}
    </header>
  );
}
