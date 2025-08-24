import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-[var(--volt-dark)] text-white/95 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-voltgo.png"  /* archivo en /public */
            alt="VoltGo"
            width={160}
            height={56}
            priority
          />
          <span className="sr-only">VoltGo</span>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link className="hover:text-[var(--volt-accent)]" href="#services">Services</Link>
          <Link className="hover:text-[var(--volt-accent)]" href="#how">How it works</Link>
          <Link className="hover:text-[var(--volt-accent)]" href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
