"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cerrar el menú al cambiar el tamaño de pantalla o navegar
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 text-white shadow-md" style={{ backgroundColor: COLORS.blue }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo-voltgo.png" alt="VoltGo" className="h-9 w-auto" />
              <span className="sr-only">VoltGo Home</span>
            </Link>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-[#15c26b]">Home</Link>

            {/* Services (desplegable simple en mobile lo mostramos como lista) */}
            <Link href="/#services" className="hover:text-[#15c26b]">Services</Link>
            <Link href="/services/roadside" className="hover:text-[#15c26b]">Roadside</Link>

            <Link href="/app" className="hover:text-[#15c26b]">App</Link>
            <a href="#contact" className="hover:text-[#15c26b]">Contact</a>

            <a
              href="tel:+18334865846"
              className="ml-2 rounded-2xl px-3 py-2 font-semibold text-white"
              style={{ backgroundColor: COLORS.green }}
            >
              Call 1-833-4-VOLTGO
            </a>
          </div>

          {/* Botón hamburguesa (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {/* icono */}
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu móvil */}
      {open && (
        <div className="md:hidden border-t border-white/15" onClick={() => setOpen(false)}>
          <div className="space-y-1 px-4 py-3">
            <Link href="/" className="block py-2 hover:text-[#15c26b]">Home</Link>
            <Link href="/#services" className="block py-2 hover:text-[#15c26b]">Services</Link>
            <Link href="/services/roadside" className="block py-2 hover:text-[#15c26b]">Roadside</Link>
            <Link href="/app" className="block py-2 hover:text-[#15c26b]">App</Link>
            <a href="#contact" className="block py-2 hover:text-[#15c26b]">Contact</a>
            <a
              href="tel:+18334865846"
              className="mt-2 inline-flex w-full justify-center rounded-2xl px-4 py-2 font-semibold text-white"
              style={{ backgroundColor: COLORS.green }}
            >
              Call 1-833-4-VOLTGO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
