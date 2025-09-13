// components/Header.tsx
"use client";

import Link from "next/link";
import Navbar from "./Navbar"; // Importa el Navbar

export default function Header() {
return (
<header className="bg-blue-700">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

{/* Logo */}
<div className="flex-shrink-0">
<Link href="/">
<img
className="h-10 w-auto"
src="/voltgo-logo-final.png"
alt="VoltGo Logo"
/>
</Link>
</div>

{/* Usa el componente Navbar aquí */}
<Navbar />

</div>
</div>
</header>
);
}
