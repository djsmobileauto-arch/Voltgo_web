// components/Header.tsx
"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-blue-700 shadow-md fixed top-0 w-full z-50">
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

          {/* Navbar centrado con botón integrado */}
          <Navbar />

        </div>
      </div>
    </header>
  );
}
