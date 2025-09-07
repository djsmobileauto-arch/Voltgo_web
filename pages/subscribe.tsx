export default function Subscribe() {
  return (
    <div className="bg-blue-700 py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-10">
          VoltGo Subscriptions
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Tell us about your vehicle and connector — we’ll follow up ASAP.
        </p>

        <form className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@email.com"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="(123) 456-7890"
            />
          </div>

          {/* City / Area */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">City / Area</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Wallingford, CT"
            />
          </div>

          {/* Vehicle Make & Model */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Vehicle Make & Model</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tesla Model 3"
            />
          </div>

          {/* Vehicle Color */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Vehicle Color</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Blue"
            />
          </div>

          {/* Connector Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Connector Type</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>CCS1</option>
              <option>CHAdeMO</option>
              <option>NACS (Tesla)</option>
            </select>
          </div>

          {/* Subscription Plan */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Subscription Plan</label>
            <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>VoltGo Pass - $59/month</option>
              <option>VoltGo Pro - $119/month</option>
            </select>
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Notes</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Parking spot access, preferred times, etc."
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
