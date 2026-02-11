import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – VoltGo</title>
      </Head>

     <section className="bg-blue-700 text-white">

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
 
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Contact</h1>
          <p className="opacity-90">
            Questions about service, coverage or partnerships? We&apos;re here to help.
          </p>

          {/* Tarjetas de contacto */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white text-black rounded-xl shadow p-6">
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-xl font-bold">1-833-4-VOLTGO</p>
              <a
                href="tel:18334886546"
                className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
              >
                Call Now
              </a>
            </div>
            <div className="bg-white text-black rounded-xl shadow p-6">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-xl font-bold">info@voltgo.us</p>
              <a
                href="mailto:info@voltgo.us"
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold"
              >
                Email Us
              </a>
            </div>
            <div className="bg-white text-black rounded-xl shadow p-6">
              <p className="text-sm text-gray-500">Emergency</p>
              <p className="text-xl font-bold">24/7 Dispatch</p>
              <a
                href="tel:18334886546"
                className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold"
              >
                Call 24/7
              </a>
            </div>
          </div>

          {/* Formulario */}
          <form className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input className="p-3 rounded bg-white text-black" placeholder="Full name" />
            <input className="p-3 rounded bg-white text-black" placeholder="Email" type="email" />
            <input className="p-3 rounded bg-white text-black" placeholder="Subject" />
            <input className="p-3 rounded bg-white text-black" placeholder="Phone" type="tel" />
            <textarea className="p-3 rounded bg-white text-black sm:col-span-2" rows={5} placeholder="Message" />
            <button
              type="submit"
              className="sm:col-span-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
