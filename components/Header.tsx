import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-[var(--volt-blue)]/95 backdrop-blur text-white">
      <div className="container mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo de barra superior (pequeño) */}
          <Image
            src="/logo-voltgo.png"
            alt="VoltGo"
            width={140}
            height={48}
            priority
          />
          <span className="sr-only">VoltGo</span>
        </Link>

        <nav className="flex gap-8 text-sm">
          <Link className="hover:text-[var(--volt-green)]" href="#services">Services</Link>
          <Link className="hover:text-[var(--volt-green)]" href="#how">How it works</Link>
          <Link className="hover:text-[var(--volt-green)]" href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
