// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-gray-200 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Columna 1 - Company */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/coverage" className="hover:text-yellow-400">Coverage</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
          </ul>
        </div>

        {/* Columna 2 - Legal */}
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li><a href="/terms" className="hover:text-yellow-400">Terms</a></li>
            <li><a href="/privacy" className="hover:text-yellow-400">Privacy</a></li>
            <li><a href="/cookies" className="hover:text-yellow-400">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Columna 3 - Apps */}
        <div>
          <h4 className="text-white font-semibold mb-2">Apps</h4>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li><a href="#" className="hover:text-yellow-400">VoltGo Driver (internal)</a></li>
            <li><a href="#" className="hover:text-yellow-400">VoltGo User (coming soon)</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright más compacto */}
      <div className="mt-4 text-center text-xs sm:text-sm space-y-1">
        <p>© 2025 VoltGo. All rights reserved.</p>
        <p>
          VoltGo is the commercial brand powered by DJ’S Mobile Auto Solutions LLC – 
          Wallingford, CT – D-U-N-S: 136807153.
        </p>
      </div>
    </footer>
  )
}
