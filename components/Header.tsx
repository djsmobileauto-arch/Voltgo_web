import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Asegúrate de haber subido /public/logo-voltgo.png */}
          <Image src="/logo-voltgo.png" alt="VoltGo" width={140} height={50} priority />
          <span className="sr-only">VoltGo</span>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link className="hover:text-blue-600" href="#services">Services</Link>
          <Link className="hover:text-blue-600" href="#how">How it works</Link>
          <Link className="hover:text-blue-600" href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
