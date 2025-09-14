import React from "react";

export default function VoltGoApp() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            VoltGo App
          </h1>
          <p className="text-lg text-white mb-8">
            Request EV charging, track your service, manage subscriptions — all
            from your phone.
          </p>
          <p className="text-md text-white mb-10">
            Coming soon to iOS and Android.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed">
               App Store (Soon)
            </button>
            <button className="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed">
              ▶ Google Play (Soon)
            </button>
          </div>

          <div className="mt-8">
            <a
              href="tel:18334865846"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Call 1-833-4-VOLTGO
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-12">
            What you’ll be able to do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Request EV service fast
              </h3>
              <p className="text-gray-600 mb-6">
                Emergency or on-demand charging in just a few taps.
              </p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Learn More
              </button>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Track your job
              </h3>
              <p className="text-gray-600 mb-6">
                Get notified when a truck is on the way and when it arrives.
              </p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Track
              </button>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Manage subscriptions
              </h3>
              <p className="text-gray-600 mb-6">
                Flexible weekly or monthly plans designed for fleets and
                frequent drivers.
              </p>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Manage
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
