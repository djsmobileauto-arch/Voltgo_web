import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-voltgo.png"   // archivo en /public
            alt="VoltGo"
            width={140}
            height={48}
            priority
          />
          <span className="sr-only">VoltGo</span>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link className="hover:text-[var(--volt-primary)]" href="#services">Services</Link>
          <Link className="hover:text-[var(--volt-primary)]" href="#how">How it works</Link>
          <Link className="hover:text-[var(--volt-primary)]" href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
