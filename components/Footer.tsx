// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-volt-blue text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm">
        {/* Fila superior: logo + copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo-voltgo.png"
              alt="VoltGo"
              className="h-8 w-auto"
            />
          </div>

          {/* Copyright */}
          <div className="text-white text-sm">
            © {new Date().getFullYear()} VoltGo. All rights reserved.
          </div>
        </div>

        {/* Secciones de enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8">
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-2 opacity-90">
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/coverage" className="hover:underline">Coverage</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2">Legal</div>
            <ul className="space-y-2 opacity-90">
              <li><a href="/terms" className="hover:underline">Terms</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy</a></li>
              <li><a href="/cookies" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2">Apps</div>
            <ul className="space-y-2 opacity-90">
              <li><span>VoltGo Driver (internal)</span></li>
              <li><span>VoltGo User (coming soon)</span></li>
            </ul>
          </div>
        </div>

        {/* Información legal corporativa */}
        <div className="mt-8 text-xs text-gray-200">
          VoltGo is the commercial brand powered by <strong>DJ’S Mobile Auto Solutions LLC</strong> — Walligford, CT 06492, United States. D-U-N-S: 136807155.
        </div>
      </div>
    </footer>
  );
}
