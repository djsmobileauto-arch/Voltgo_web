// If your project uses Next.js App Router -> save as: app/pricing/page.tsx
// If it uses Pages Router -> save as: pages/pricing.tsx (export default component as below)
// Tailwind required. Replace PLACEHOLDER links (tel, WhatsApp, Square) before deploying.

import { Check, Snowflake, Moon, Sun, CalendarDays, Phone, ArrowRightCircle } from "lucide-react";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-2xl px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-black/10 bg-blue-50 text-blue-700">
      {children}
    </span>
  );
}

function Card({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`relative rounded-2xl p-6 shadow-sm ring-1 ring-black/10 bg-white ${
        highlight ? "border-2 border-blue-500/50" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Simple, transparent pricing</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Pay only for what you need. Upgrade to subscriptions for priority response and savings.
          </p>
        </div>
      </header>

      {/* Pricing grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Emergency */}
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Emergency Rescue</h2>
            <Badge>ETA ≤ 45 min</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Immediate roadside charge when you’re stranded.</p>
          <p className="mt-4 text-3xl font-bold">$199 <span className="text-base font-normal text-gray-500">/ service</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "20–30 kWh delivered (≈25–40 miles)",
              "CCS1 / J1772 supported",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> <span>{x}</span></li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl bg-gray-50 p-3 text-xs text-gray-600">
            <div className="flex items-center gap-2"><Snowflake className="h-3 w-3" /> <span>Cold (&lt; 32°F): +$30</span></div>
            <div className="flex items-center gap-2"><Moon className="h-3 w-3" /> <span>Overnight (10 PM–6 AM): +$25</span></div>
            <div className="flex items-center gap-2"><Sun className="h-3 w-3" /> <span>Peak (4–7 PM): +$15</span></div>
          </div>
          <a href="tel:+1-833-XXX-XXXX" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
            <Phone className="h-4 w-4" /> Request Now
          </a>
        </Card>

        {/* On‑Demand */}
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">On‑Demand (Scheduled)</h2>
            <Badge className="">24h+</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Plan your charge in advance for homes, offices or hubs.</p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              { kwh: 20, price: 129 },
              { kwh: 30, price: 159 },
              { kwh: 40, price: 189 },
            ].map((t) => (
              <div key={t.kwh} className="rounded-xl border p-3">
                <div className="text-xs text-gray-600">{t.kwh} kWh</div>
                <div className="text-lg font-semibold">${t.price}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-600">10% off for fleets (10+ services/mo).</p>
          <a href="/schedule" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            <CalendarDays className="h-4 w-4" /> Schedule
          </a>
        </Card>

        {/* VoltGo Pass */}
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">VoltGo Pass</h2>
            <Badge>Flexible</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">For travelers and temporary drivers.</p>
          <p className="mt-4 text-3xl font-bold">$49 <span className="text-base font-normal text-gray-500">/ month</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "2 × 20 kWh charges / month",
              "10% off extra services",
              "Standard response (≤ 45 min)",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> <span>{x}</span></li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-gray-600">Surcharges apply for cold, peak and overnight (10 PM–6 AM). No contract, cancel anytime.</p>
          <a href="https://square.link/your-pass-product" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
            <ArrowRightCircle className="h-4 w-4" /> Start Pass
          </a>
        </Card>

        {/* VoltGo Pro */}
        <Card highlight>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">VoltGo Pro</h2>
            <Badge>Best value</Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">For frequent EV drivers.</p>

          <div className="mt-4 grid grid-cols-1 gap-2">
            <div className="rounded-xl border p-3">
              <div className="text-xs text-gray-600">Monthly</div>
              <div className="text-lg font-semibold">$119 / month</div>
            </div>
            <div className="rounded-xl border p-3">
              <div className="text-xs text-gray-600">Annual (billed)</div>
              <div className="text-lg font-semibold">$1,188 / year</div>
            </div>
            <div className="rounded-xl border p-3 bg-blue-50">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-blue-700">Launch Promo</div>
                <span className="text-[10px] text-blue-700">~$83/mo • limited time</span>
              </div>
              <div className="text-lg font-semibold">$999 / year</div>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm">
            {[
              "4 × 30 kWh charges / month",
              "20% off extra services",
              "Priority response (≤ 30 min)",
              "No weather/peak surcharges",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> <span>{x}</span></li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-gray-600">Included charges are not cumulative month to month.</p>
          <a href="https://square.link/your-pro-product" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
            <ArrowRightCircle className="h-4 w-4" /> Subscribe
          </a>
        </Card>
      </section>

      {/* Corporate & notes */}
      <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <h3 className="text-lg font-semibold">Corporate Fleets</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> <span>Full Service — 40 × 30 kWh charges — <strong>$2,200 / month</strong></span></li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> <span>Flexible — Pay‑per‑use + 5 emergencies/year — <strong>$150 / charge + $1,000 / year</strong></span></li>
          </ul>
          <a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-black/5">
            Talk to sales
          </a>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Surcharges (Emergency & On‑Demand only)</h3>
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2"><Snowflake className="h-4 w-4" /> Cold (&lt; 32°F): +$30</div>
            <div className="flex items-center gap-2"><Moon className="h-4 w-4" /> Overnight (10 PM–6 AM): +$25</div>
            <div className="flex items-center gap-2"><Sun className="h-4 w-4" /> Peak (4–7 PM): +$15</div>
          </div>
          <p className="mt-3 text-xs text-gray-600">Subscriptions (Pass/Pro) are protected from or explicitly include these charges as stated above.</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Fair‑use & Availability</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Capacity limited to ~8–10 services/day per 65 kWh unit; emergencies always prioritized.</li>
            <li>Geographic coverage and connector compatibility may vary.</li>
            <li>Taxes and local regulations may apply.</li>
          </ul>
        </Card>
      </section>
    </main>
  );
}
