import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-[#2563eb] text-white">
      <div className="container mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
          <Link className="hover:text-[#22c55e]" href="#services">Services</Link>
          <Link className="hover:text-[#22c55e]" href="#how">How it works</Link>
          <Link className="hover:text-[#22c55e]" href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
