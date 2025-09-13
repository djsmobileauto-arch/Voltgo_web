// components/Header.tsx
"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Bandera americana */}
      <div>
        <Image
          src="/usa-flag.png"
          alt="USA Flag"
          width={40}
          height={25}
          className="rounded-sm"
        />
      </div>

      {/* Menú de navegación */}
      <Navbar />

      {/* Botón verde con teléfono */}
      <div>
        <a
          href="tel:18334VOLTGO"
          className="bg-green-600 text-white px-4 py-2 rounded-md font-bold shadow hover:bg-green-700"
        >
          1-833-4VOLTGO
        </a>
      </div>
    </header>
  );
}
