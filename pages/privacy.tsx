import Head from 'next/head'

export default function Privacy() {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Head>
        <title>Privacy Policy — VoltGo</title>
        <meta name="robots" content="index,follow" />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Effective date: {today}</p>

        <p className="mb-6">
          This Privacy Policy explains how <strong>VoltGo</strong>, operated by <strong>DJ’S Mobile Auto Solutions LLC</strong> (“we”, “our”, “us”),
          collects, uses, and protects your personal information when you use our Services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal information (name, email, phone, billing details)</li>
          <li>Vehicle information (make, model, plate)</li>
          <li>Location data (for dispatching services)</li>
          <li>Usage data (service requests, subscription activity)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide and improve our Services</li>
          <li>Process payments and subscriptions</li>
          <li>Communicate updates, offers, and support</li>
          <li>Safety, security, and fraud prevention</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell your personal data. We may share information with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Service technicians/contractors (only what’s necessary to complete your request)</li>
          <li>Payment processors</li>
          <li>Authorities if required by law</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Retention</h2>
        <p>We retain personal data only as long as necessary for the purposes described in this policy.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Security</h2>
        <p>We apply reasonable safeguards, but no system is 100% secure.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Request access, correction, or deletion of your data</li>
          <li>Opt out of marketing emails</li>
          <li>Disable location sharing (may limit service availability)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">7. Children’s Privacy</h2>
        <p>We do not knowingly collect data from individuals under 18.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">8. Changes to This Policy</h2>
        <p>We may update this Policy; changes will be posted here with a new “Last Updated” date.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact</h2>
        <p>
          Email: <a className="text-blue-600 underline" href="mailto:info@voltgo.us">info@voltgo.us</a><br />
          Address: 131 Knollwood Dr, Wallingford, CT 06492, USA
        </p>
      </main>
    </>
  )
}

