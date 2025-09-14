// pages/privacy.tsx
import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>VoltGo | Privacy Policy</title>
      </Head>

      {/* Fondo azul */}
      <main className="min-h-screen bg-blue-700 py-12 px-4">
        {/* Tarjeta blanca centrada */}
        <div className="mx-auto max-w-4xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="p-6 sm:p-10">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Privacy Policy
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Effective date: September 14, 2025
            </p>

            {/* --- CONTENIDO --- */}
            <section className="mt-8 space-y-8 text-gray-800">
              <div>
                <h2 className="text-lg font-medium">1. Information We Collect</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Personal information (name, email, phone, billing details)</li>
                  <li>Vehicle information (make, model, plate)</li>
                  <li>Location data (for dispatching services)</li>
                  <li>Usage data (service requests, subscription activity)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-medium">2. How We Use Information</h2>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Provide and improve our Services</li>
                  <li>Process payments and subscriptions</li>
                  <li>Communicate updates, offers, and support</li>
                  <li>Safety, security, and fraud prevention</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-medium">3. Sharing of Information</h2>
                <p className="mt-2">
                  We do not sell your personal data. We may share information with:
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Service providers assisting with operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Partners necessary to deliver our Services</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

