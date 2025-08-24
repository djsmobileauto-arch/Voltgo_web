export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-volt-blue grid place-content-center">
              <span className="text-white">⚡</span>
            </div>
            <div>
              <div className="font-extrabold tracking-tight">VOLTGO</div>
              <div className="text-slate-500">© {new Date().getFullYear()} VoltGo. All rights reserved.</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <div className="font-semibold mb-2">Company</div>
              <ul className="space-y-2 opacity-80">
                <li><a href="#services" className="hover:text-volt-blue">Services</a></li>
                <li><a href="#coverage" className="hover:text-volt-blue">Coverage</a></li>
                <li><a href="#contact" className="hover:text-volt-blue">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Legal</div>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:text-volt-blue">Terms</a></li>
                <li><a href="#" className="hover:text-volt-blue">Privacy</a></li>
                <li><a href="#" className="hover:text-volt-blue">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Apps</div>
              <ul className="space-y-2 opacity-80">
                <li><span>MyVoltGo — coming soon</span></li>
                <li><span>VoltGo Driver — internal</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
