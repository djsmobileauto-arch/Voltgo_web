export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} VoltGo. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm">
          <a className="hover:text-[var(--volt-primary)]" href="#services">Services</a>
          <a className="hover:text-[var(--volt-primary)]" href="#how">How it works</a>
          <a className="hover:text-[var(--volt-primary)]" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
