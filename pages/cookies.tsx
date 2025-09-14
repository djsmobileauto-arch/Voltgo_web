// pages/cookies.tsx
export default function CookiePolicy() {
  return (
    <div className="bg-blue-700 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Effective date: September 14, 2025</p>

        <p className="mb-6 text-gray-700">
          VoltGo uses cookies and similar technologies to improve your browsing
          experience and provide personalized Services. This Cookie Policy
          explains how and why we use them.
        </p>

        <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
        <p className="mb-6 text-gray-700">
          Cookies are small text files stored on your device that help remember
          preferences, enhance performance, and analyze site usage.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Types of Cookies We Use</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li><strong>Essential:</strong> Security, session, and core functionality.</li>
          <li><strong>Performance:</strong> Analytics and traffic measurement.</li>
          <li><strong>Functional:</strong> Preferences such as language and saved settings.</li>
          <li><strong>Advertising:</strong> Relevant promotions and campaign measurement.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">3. How We Use Cookies</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Enable service requests and account login.</li>
          <li>Improve site performance and user experience.</li>
          <li>Measure traffic and usage patterns.</li>
          <li>Deliver relevant promotions and updates.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">4. Managing Cookies</h2>
        <p className="mb-6 text-gray-700">
          You can manage or disable cookies in your browser settings. Please note
          that disabling cookies may limit certain site functionality.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Third-Party Cookies</h2>
        <p className="mb-6 text-gray-700">
          Some cookies may be set by third-party providers, such as analytics,
          payment processors, or marketing partners.
        </p>

        <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
        <p className="text-gray-700">
          If you have any questions about this Cookie Policy, you may contact us at:
        </p>
        <p className="text-gray-700 mt-2">
          📧 <a href="mailto:info@voltgo.us" className="text-blue-600 hover:underline">info@voltgo.us</a><br />
          📍  Wallingford, CT 06492, USA
        </p>
      </div>
    </div>
  );
}
