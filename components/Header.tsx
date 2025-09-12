"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // iconos de menú hamburguesa

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Bandera / Logo */}
        <div className="flex items-center">
          <Image
            src="/us-flag.png"
            alt="American Flag"
            width={80}
            height={48}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Botón Hamburguesa (solo móvil) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú en escritorio */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/roadside">Roadside</Link>
          <Link href="/app">App</Link>
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-6 pb-4">
          <nav className="flex flex-col space-y-4 font-medium">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/roadside">Roadside</Link>
            <Link href="/app">App</Link>
            <Link href="/subscribe">Subscribe</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
