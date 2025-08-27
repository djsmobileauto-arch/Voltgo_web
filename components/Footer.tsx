export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm">
        {/* Top Row: Logo + Brand + Legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-volt-blue grid place-content-center">
              <span className="font-volt text-white">⚡</span>
            </div>
            <div className="font-extrabold tracking-tight">VOLTGO</div>
          </div>

          <div className="text-slate-500">
            © {new Date().getFullYear()} VoltGo. All rights reserved.
            <div className="mt-2 text-xs text-slate-500">
              VoltGo is the commercial brand powered by{" "}
              <strong>DJ’S Mobile Auto Solutions LLC</strong> —  
              131 Knollwood Dr, Wallingford, CT 06492, United States.  
              D-U-N-S: 136807155.
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="/services" className="hover:text-volt-blue">Services</a>
              </li>
              <li>
                <a href="/coverage" className="hover:text-volt-blue">Coverage</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-volt-blue">Contact</a>
              </li>
              <li>
                <a href="/about" className="hover:text-volt-blue">About</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2">Legal</div>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="/terms" className="hover:text-volt-blue">Terms</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-volt-blue">Privacy</a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-volt-blue">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2">Apps</div>
            <ul className="space-y-2 opacity-80">
              <li>
                <span>VoltGo Driver (internal)</span>
              </li>
              <li>
                <span>VoltGo User (coming soon)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
