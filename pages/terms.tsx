import Head from 'next/head'

export default function Terms() {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Head>
        <title>Terms of Service — VoltGo</title>
        <meta name="robots" content="index,follow" />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-8">Effective date: {today}</p>

        <p className="mb-6">
          Welcome to VoltGo, operated by <strong>DJ’S Mobile Auto Solutions LLC</strong> (“VoltGo”, “we”, “our”, “us”).
          By accessing or using our website, mobile application, and services (“Services”), you agree to these Terms of Service (“Terms”).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Services Provided</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mobile EV charging (emergency and on-demand)</li>
          <li>Roadside assistance (jump start, tire change, lockout, fuel delivery)</li>
          <li>Battery replacement and diagnostics</li>
          <li>Subscription plans for frequent drivers</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Eligibility</h2>
        <p>You must be at least 18 years old to use our Services.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Use of Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate information when creating an account or requesting service.</li>
          <li>Do not use the Services for unlawful or harmful purposes.</li>
          <li>Comply with all applicable traffic, safety, and local laws.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Payment and Billing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fees are disclosed prior to confirming any service request.</li>
          <li>Subscriptions are billed monthly until canceled.</li>
          <li>Payments are non-refundable unless required by law.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Disclaimer</h2>
        <p>
          We strive to provide fast and reliable service, but we are not liable for delays due to weather, traffic,
          or circumstances beyond our control, or for damages caused by pre-existing conditions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, VoltGo and DJ’S Mobile Auto Solutions LLC shall not be liable for
          indirect, incidental, or consequential damages arising from your use of the Services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Termination</h2>
        <p>We may suspend or terminate access to the Services if you violate these Terms.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">8. Governing Law</h2>
        <p>These Terms are governed by the laws of the State of Connecticut, United States.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact</h2>
        <p>
          Email: <a className="text-blue-600 underline" href="mailto:info@voltgo.us">info@voltgo.us</a><br />
          Address: 131 Knollwood Dr, Wallingford, CT 06492, USA
        </p>
      </main>
    </>
  )
}
