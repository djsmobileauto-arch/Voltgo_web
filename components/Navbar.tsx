// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
return (
<>
{/* Nav menu */}
<nav className="hidden md:flex space-x-8">
<Link href="/" className="text-white hover:text-gray-200">
Home
</Link>
<Link href="/services" className="text-white hover:text-gray-200">
Services
</Link>
<Link href="/roadside" className="text-white hover:text-gray-200">
Roadside
</Link>
<Link href="/app" className="text-white hover:text-gray-200">
App
</Link>
<Link href="/subscribe" className="text-white hover:text-gray-200">
Subscribe
</Link>
<Link href="/contact" className="text-white hover:text-gray-200">
Contact
</Link>
<Link href="/pricing" className="text-white hover:text-gray-200">
Pricing
</Link>
</nav>

{/* Emergency button */}
<div className="flex-shrink-0">
<a
href="tel:18334865846"
className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
>
Emergency 24/7 · Call 1-833-4 VOLTGO
</a>
</div>
</>
);
}
