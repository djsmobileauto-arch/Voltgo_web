export default function AppPage() {
  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };

  // Reemplazar cuando tengas los IDs reales
  const IOS_APP_ID = "0000000000";      // ej. "6471234567"
  const ANDROID_PKG = "com.voltgo.app"; // ej. "com.voltgo.mobile"

  const links = {
    ios: `https://apps.apple.com/app/id${IOS_APP_ID}`,
    android: `https://play.google.com/store/apps/details?id=${ANDROID_PKG}`,
    tel: "tel:+18334865846",
    email: "mailto:info@voltgo.us",
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="text-white text-center py-16" style={{ backgroundColor: COLORS.blue }}>
        <h1 className="text-3xl md:text-4xl font-extrabold">Get the VoltGo App</h1>
        <p className="mt-3 opacity-90 max-w-2xl mx-auto">
          Book mobile EV charging, track dispatch, and manage subscriptions from your phone.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <a
            href={links.ios}
            className="px-5 py-3 rounded-2xl font-semibold text-white"
            style={{ backgroundColor: COLORS.green }}
          >
            Download on iOS
          </a>
          <a
            href={links.android}
            className="px-5 py-3 rounded-2xl font-semibold"
            style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}
          >
            Get it on Android
          </a>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Early access / Questions</h2>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          <a
            href={links.tel}
            className="px-5 py-3 rounded-2xl font-semibold text-white"
            style={{ backgroundColor: COLORS.green }}
          >
            Call 1-833-4-VOLTGO
          </a>
          <a
            href={links.email}
            className="px-5 py-3 rounded-2xl font-semibold"
            style={{ border: `2px solid ${COLORS.green}`, color: COLORS.green, backgroundColor: "transparent" }}
          >
            Email info@voltgo.us
          </a>
        </div>
      </section>
    </main>
  );
}
