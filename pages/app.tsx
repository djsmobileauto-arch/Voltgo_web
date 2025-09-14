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
            {/* Google Play Button */}
            <a
              href="#"
              className="inline-block"
              aria-label="Download on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14"
              />
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="inline-block"
              aria-label="Download on the App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
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
    </div>
  );
}
