import Head from 'next/head'

export default function Cookies() {
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <>
      <Head>
        <title>Cookie Policy — VoltGo</title>
        <meta name="robots" content="index,follow" />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Cookie Policy</h1>
        <p className="text-sm text-slate-500 mb-8">Effective date: {today}</p>

        <p className="mb-6">
          VoltGo uses cookies and similar technologies to improve your browsing experience and provide personalized Services.
          This policy explains how and why we use them.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">1. What Are Cookies?</h2>
        <p>Small text files stored on your device that help remember preferences and analyze usage.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">2. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Essential:</strong> security, session, core functionality</li>
          <li><strong>Performance:</strong> analytics and traffic measurement</li>
          <li><strong>Functional:</strong> preferences such as language</li>
          <li><strong>Advertising:</strong> relevant promotions and campaign measurement</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">3. How We Use Cookies</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Enable service requests and account login</li>
          <li>Improve site performance and user experience</li>
          <li>Measure traffic and usage patterns</li>
          <li>Deliver relevant promotions</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">4. Managing Cookies</h2>
        <p>
          You can manage or disable cookies in your browser settings. Disabling cookies may affect some functionality.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">5. Third-Party Cookies</h2>
        <p>Some cookies may be set by payment providers, analytics, or marketing partners.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">6. Contact</h2>
        <p>
          Email: <a className="text-blue-600 underline" href="mailto:info@voltgo.us">info@voltgo.us</a><br />
          Address: 131 Knollwood Dr, Wallingford, CT 06492, USA
        </p>
      </main>
    </>
  )
}
