export default function Pricing() {
  return (
    <div className="bg-blue-700 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-12">
          Simple, Transparent Pricing
        </h1>

        {/* ===== ROW 1: ROADSIDE / EV CHARGING / SUBSCRIPTIONS ===== */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* ROADSIDE ASSISTANCE PLANS */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Roadside Assistance</h2>

            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h3 className="text-lg font-semibold">Safe Roads Basic</h3>
                <p className="text-2xl font-extrabold text-gray-900">$14.99<span className="text-base">/mo</span></p>
                <ul className="text-gray-700 list-disc ml-5 mt-2 space-y-1">
                  <li>1 servicio/mes (flat tire, lockout o jump start 12V)</li>
                  <li>Respuesta: hasta 60 minutos</li>
                  <li>Servicios adicionales con 30% off</li>
                </ul>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-semibold">Safe Roads Plus</h3>
                <p className="text-2xl font-extrabold text-gray-900">$24.99<span className="text-base">/mo</span></p>
                <ul className="text-gray-700 list-disc ml-5 mt-2 space-y-1">
                  <li>2 servicios/mes (flat, lockout, jump 12V o fuel delivery)</li>
                  <li>3er servicio al 50% off</li>
                  <li>Respuesta prioritaria: hasta 45 minutos</li>
                </ul>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-semibold">Safe Roads Fleet</h3>
                <p className="text-2xl font-extrabold text-gray-900">$99.99<span className="text-base">/mo</span></p>
                <ul className="text-gray-700 list-disc ml-5 mt-2 space-y-1">
                  <li>Hasta 5 vehículos · 8 servicios/mes</li>
                  <li>24/7 coverage</li>
                  <li>Servicios extra: $39 c/u</li>
                </ul>
              </div>

              <div className="border rounded-md p-4 bg-gray-50">
                <h4 className="font-semibold text-gray-800">Público general (sin suscripción)</h4>
                <ul className="text-gray-700 list-disc ml-5 mt-2 space-y-1">
                  <li>Jump Start (12V): <strong>$75</strong></li>
                  <li>Lockout: <strong>$85</strong></li>
                  <li>Flat Tire: <strong>$89</strong></li>
                  <li>Fuel Delivery: <strong>$99</strong> + fuel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EV CHARGING (ONE-TIME) */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">EV Charging (One-Time)</h2>

            <div className="border rounded-md p-4 mb-4">
              <h3 className="text-lg font-semibold">Emergency Rescue</h3>
              <p className="text-2xl font-extrabold text-gray-900">$199</p>
              <p className="text-gray-700 mt-1">20 kWh delivered (~25 miles of range)</p>
              <p className="text-xs text-gray-600 mt-1">Surcharges may apply: cold, peak, overnight</p>
            </div>

            <div className="border rounded-md p-4">
              <h3 className="text-lg font-semibold">On-Demand (Scheduled)</h3>
              <ul className="text-gray-700 list-disc ml-5 mt-2 space-y-1">
                <li>20 kWh — <strong>$129</strong></li>
                <li>30 kWh — <strong>$159</strong></li>
                <li>40 kWh — <strong>$189</strong></li>
              </ul>
              <p className="text-gray-700 mt-2">Plan your charge in advance (24h notice).</p>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Supported connectors: <strong>CCS1, CHAdeMO, NACS (Tesla)</strong>
            </p>
          </div>

          {/* EV SUBSCRIPTIONS (WITH ROADSIDE INCLUDED) */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">EV Subscriptions</h2>

            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h3 className="text-lg font-semibold">VoltGo Pass</h3>
                <p className="text-2xl font-extrabold text-gray-900">$59<span className="text-base">/mo</span></p>
                <ul className="text-gray-700 list-disc ml-5 mt-2 space-y-1">
                  <li>2 × 15 kWh por mes</li>
                  <li>+ 1 servicio de roadside incluido (flat, lockout o jump 12V)</li>
                  <li>Priority response: <strong>2–3 horas</strong></li>
                  <li>Surcharges: cold, peak, overnight</li>
                </ul>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-semibold">VoltGo Pro</h3>
                <p className="text-2xl font-extrabold text-gray-900">$119<span className="text-base">/mo</span></p>
                <ul className="text-gray-700 list-disc ml-5 mt-2 space-y-1">
                  <li>4 × 20 kWh por mes</li>
                  <li>+ 2 servicios de roadside incluidos</li>
                  <li>High-priority response: <strong>≤ 90 minutos</strong></li>
                  <li><strong>No</strong> surcharges (cold, peak, overnight incluidos)</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600">
                Extra roadside para suscriptores: descuentos exclusivos (según plan).
              </p>
            </div>
          </div>
        </div>

        {/* DISCLAIMER PROMO FLYERS */}
        <p className="text-center text-sm text-gray-200 mt-8">
          *Introductory promotional pricing available for the first 90 days. Standard rates apply thereafter.
        </p>
      </div>
    </div>
  );
}
