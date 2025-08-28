import Head from 'next/head'

export default function SubscribePage() {
  return (
    <>
      <Head>
        <title>Subscribe – VoltGo</title>
      </Head>

      <section className="bg-volt-blue text-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">VoltGo Subscriptions</h1>
          <p className="opacity-90 mb-8">
            Tell us about your vehicle and connector — we’ll follow up ASAP.
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input className="p-3 rounded bg-white text-black" placeholder="Full Name" />
            <input className="p-3 rounded bg-white text-black" placeholder="Email Address" type="email" />
            <input className="p-3 rounded bg-white text-black" placeholder="Phone Number" type="tel" />
            <input className="p-3 rounded bg-white text-black" placeholder="City / Area" />

            <input className="p-3 rounded bg-white text-black" placeholder="Vehicle Make & Model" />
            <input className="p-3 rounded bg-white text-black" placeholder="Vehicle Color" />

            <select className="p-3 rounded bg-white text-black">
              <option>Connector Type (J1772, CCS1, …)</option>
              <option>J1772</option>
              <option>CCS1</option>
              <option>NACS</option>
            </select>

            <select className="p-3 rounded bg-white text-black">
              <option>Subscription Plan</option>
              <option>Monthly</option>
              <option>VoltGo Pro</option>
            </select>

            <textarea
              rows={5}
              className="p-3 rounded bg-white text-black sm:col-span-2"
              placeholder="Notes (parking spot, access, preferred times...)"
            />

            <button
              type="submit"
              className="sm:col-span-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
