export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--volt-blue)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-3 text-blue-100 md:text-lg">
            Questions about service, coverage or partnerships? We’re here to help.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow text-center">
            <div className="text-sm font-semibold text-slate-700">Phone</div>
            <a href="tel:+18334VOLTGO" className="mt-2 block text-lg font-bold text-[var(--volt-blue)]">
              1-833-4-VOLTGO
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow text-center">
            <div className="text-sm font-semibold text-slate-700">Email</div>
            <a href="mailto:info@voltgo.us" className="mt-2 block text-lg font-bold text-[var(--volt-blue)]">
              info@voltgo.us
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow text-center">
            <div className="text-sm font-semibold text-slate-700">Emergency</div>
            <a href="tel:+18334VOLTGO" className="mt-2 inline-flex rounded-md bg-[var(--volt-green)] px-4 py-2 text-white font-semibold">
              Call Now
            </a>
          </div>
        </div>

        {/* Simple form (no backend) */}
        <form
          action="mailto:info@voltgo.us"
          method="post"
          encType="text/plain"
          className="mt-10 space-y-4 rounded-2xl bg-white p-6 shadow"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Full name" name="name" />
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email" name="email" />
          </div>
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Subject" name="subject" />
          <textarea className="w-full rounded-md border border-slate-300 px-3 py-2" rows={5} placeholder="Message" name="message" />
          <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
