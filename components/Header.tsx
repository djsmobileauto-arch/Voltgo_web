// components/Header.tsx
"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Bandera izquierda */}
          <div className="flex items-center">
            <Image
              src="/usa-flag.png"   // archivo en /public/usa-flag.png
              alt="USA Flag"
              width={36}
              height={24}
              className="rounded-sm shadow"
            />
          </div>

          {/* Menú centro */}
          <div className="flex-1 flex justify-center">
            <Navbar />
          </div>

          {/* Botón verde derecha */}
          <div className="flex items-center">
            <a
              href="tel:18334VOLTGO"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow"
            >
              1-833-4VOLTGO
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
