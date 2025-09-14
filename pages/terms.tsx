// pages/terms.tsx
import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>VoltGo | Terms of Service</title>
      </Head>

      {/* Fondo azul a toda la pantalla */}
      <main className="min-h-screen bg-blue-700 py-12 px-4">
        {/* Tarjeta blanca centrada */}
        <div className="mx-auto max-w-4xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="p-6 sm:p-10">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Terms of Service
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Effective date: September 14, 2025
            </p>

            {/* --- CONTENIDO --- */}
            <section className="mt-8 space-y-8 text-gray-800">
              <div>
                <h2 className="text-lg font-medium">1. Services Provided</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Mobile EV charging (emergency and on-demand)</li>
                  <li>Roadside assistance (jump start, tire change, lockout, fuel delivery)</li>
                  <li>Battery replacement and diagnostics</li>
                  <li>Subscription plans for frequent drivers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-medium">2. Eligibility</h2>
                <p className="mt-2">
                  You must be at least 18 years old to use our Services.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium">3. Use of Services</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Provide accurate information when creating an account or requesting service.</li>
                  <li>Do not use the Services for unlawful or harmful purposes.</li>
                  <li>Comply with all applicable traffic, safety, and local law.</li>
                </ul>
              </div>

              {/* agrega aquí el resto de secciones existentes */}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
