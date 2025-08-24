// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";

const COLORS = { blue: "#0a3ccf", green: "#15c26b" };

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/services/roadside", label: "Roadside" },
    { href: "/app", label: "App" },
    { href: "/subscribe", label: "Subscribe" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 text-white" style={{ backgroundColor: COLORS.blue }}>
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-voltgo.png" alt="VoltGo" className="h-8 w-auto" />
          <span className="sr-only">VoltGo Home</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#15c26b]">
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+18334865846"
            className="rounded-2xl px-4 py-2 font-semibold text-white"
            style={{ backgroundColor: COLORS.green }}
          >
            Emergency 24/7 • Call 1-833-4-VOLTGO
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50" style={{ backgroundColor: COLORS.blue }}>
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)}>
                <img src="/logo-voltgo.png" alt="VoltGo" className="h-8 w-auto" />
              </Link>
              <button aria-label="Close menu" className="text-2xl" onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="mt-6 space-y-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-lg hover:text-[#15c26b]"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:+18334865846"
                className="mt-4 inline-block w-full text-center rounded-2xl px-4 py-3 font-semibold text-white"
                style={{ backgroundColor: COLORS.green }}
                onClick={() => setOpen(false)}
              >
                Emergency 24/7 • Call 1-833-4-VOLTGO
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
