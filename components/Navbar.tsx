import { useState } from "react";
import Link from "next/link";

const COLORS = { blue: "#0a3ccf", green: "#15c26b" };

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/roadside", label: "Roadside" },
    { href: "/app", label: "App" },
    { href: "/subscribe", label: "Subscribe" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" }, // 👉 nuevo link
  ];

  return (
    <nav className="flex items-center gap-6">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="hover:underline">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
