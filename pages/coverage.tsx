import React from "react";

export default function Coverage() {
  return (
    <div className="bg-blue-700 min-h-screen pt-24 pb-12 text-white">
      {/* Hero */}
      <h1 className="text-3xl font-bold text-center mb-6">Coverage Area</h1>
      <p className="text-center max-w-2xl mx-auto mb-10">
        VoltGo provides mobile EV charging and roadside assistance across
        Connecticut. Explore our current coverage areas and expansion zones
        below.
      </p>

      {/* Map Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96831.42498326362!2d-72.9051!3d41.4576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b7a5baf17959%3A0x1f4b42e38f3f00!2sWallingford%2C%20CT!5e0!3m2!1sen!2sus!4v1694526972341!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Coverage List */}
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Currently Serving
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Wallingford</li>
          <li>New Haven</li>
          <li>Hartford</li>
          <li>Manchester</li>
          <li>Surrounding areas (expanding soon)</li>
        </ul>
      </div>
    </div>
  );
}
