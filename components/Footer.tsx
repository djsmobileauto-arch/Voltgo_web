// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-gray-200 py-1 md:py-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-3">

        {/* Columna 1 - Company */}
        <div>
          <h4 className="text-white font-semibold mb-0.5 text-xs sm:text-sm">
            Company
          </h4>
          <ul className="space-y-0.5 text-xs">
            <li>
              <a href="/services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="/coverage" className="hover:text-yellow-400">
                Coverage
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 2 - Legal */}
        <div>
          <h4 className="text-white font-semibold mb-0.5 text-xs sm:text-sm">
            Legal
          </h4>
          <ul className="space-y-0.5 text-xs">
            <li>
              <a href="/terms" className="hover:text-yellow-400">
                Terms
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-yellow-400">
                Privacy
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:text-yellow-400">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3 - Apps */}
        <div>
          <h4 className="text-white font-semibold mb-0.5 text-xs sm:text-sm">
            Apps
          </h4>
          <ul className="space-y-0.5 text-xs">
            <li>
              <a href="/apps/myvoltgo" className="hover:text-yellow-400">
                MyVoltGo
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright compacto */}
      <div className="mt-1 text-center text-xs space-y-0.5">
        <p>© 2025–2026 VoltGo. All rights reserved.</p>
        <p>
          VoltGo™ is the commercial brand powered by DJ&apos;S Mobile Auto Solutions LLC –
          Wallingford, CT – D-U-N-S: 136807153.
        </p>
      </div>
    </footer>
  );
}
