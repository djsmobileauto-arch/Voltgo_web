// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6">
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
  );
}
