export default function AppPage() {
  // ✅ Official store links
  const googlePlayUrl =
    "https://play.google.com/store/apps/details?id=us.voltgoUser.appc";

  const appStoreUrl =
    "https://apps.apple.com/us/app/myvoltgo/id6752673954";

  // ✅ Your call CTA
  const phoneNumberTel = "tel:18334658646";

  return (
    <section className="bg-blue-700 py-20 text-center min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          VoltGo App
        </h1>

        <p className="text-lg text-white mb-8">
          Request EV charging, track your service, manage subscriptions — all from your phone.
        </p>

        <p className="text-md text-white mb-10">
          Available now on iOS and Android.
        </p>

        {/* Official store buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Google Play */}
          <a
            href={googlePlayUrl}
            className="inline-block"
            aria-label="Get it on Google Play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-14"
            />
          </a>

          {/* App Store */}
          <a
            href={appStoreUrl}
            className="inline-block"
            aria-label="Download on the App Store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-14"
            />
          </a>
        </div>

        {/* Call button */}
        <div className="mt-8">
          <a
            href={phoneNumberTel}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold inline-block"
          >
            Call 1-833-4-VOLTGO
          </a>
        </div>
      </div>
    </section>
  );
}
