<section className="bg-[var(--volt-blue)] text-white py-12 px-4">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-3xl font-extrabold">VoltGo Subscriptions</h1>
    <p className="mt-2 text-slate-100">
      Tell us about your vehicle and connector — we’ll follow up ASAP.
    </p>

    <form className="mt-8 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-md p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1">Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-md p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="(203) 555-0199"
            className="w-full rounded-md p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1">City / Area</label>
          <input
            type="text"
            placeholder="Wallingford, CT"
            className="w-full rounded-md p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1">Vehicle Make & Model</label>
          <input
            type="text"
            placeholder="Tesla Model 3, Nissan Leaf, F-150 Lightning..."
            className="w-full rounded-md p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1">Vehicle Color</label>
          <input
            type="text"
            placeholder="Blue, White, Black..."
            className="w-full rounded-md p-2 text-black"
          />
        </div>

        <div>
          <label className="block text-white text-sm mb-1">Connector Type</label>
          <select className="w-full rounded-md p-2 text-black">
            <option>J1772</option>
            <option>CCS1</option>
            <option>NEMA 14-50</option>
          </select>
        </div>

        <div>
          <label className="block text-white text-sm mb-1">Subscription Plan</label>
          <select className="w-full rounded-md p-2 text-black">
            <option>Monthly</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-white text-sm mb-1">Notes (optional)</label>
        <textarea
          placeholder="Anything we should know? Usual parking spot, access, preferred times..."
          className="w-full rounded-md p-2 text-black"
          rows={4}
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-[var(--volt-green)] text-white px-6 py-2 rounded-md font-semibold shadow-soft hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>
