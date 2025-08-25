// pages/schedule.tsx
import Link from "next/link";

export default function SchedulePage() {
  return (
    <section className="bg-[var(--volt-blue)] text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Schedule a Charge
        </h1>
        <p className="mt-2 max-w-2xl text-blue-100">
          Tell us where and when you’d like the charge — we’ll confirm ASAP.
        </p>

        {/* CTA buttons iguales al estilo del sitio */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="tel:+183342VOLTGO"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700"
            aria-label="Emergency Help Now"
          >
            Emergency Help Now
          </a>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-600"
            aria-label="View Membership Plans"
          >
            Membership Plans
          </Link>
        </div>
      </div>

      {/* Formulario simple */}
      <div className="mx-auto max-w-5xl px-4 pb-14">
        <div className="rounded-2xl bg-white p-6 shadow md:p-8">
          <form className="grid grid-cols-1 gap-4 text-slate-700 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Full Name</label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="John Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email Address</label>
              <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="john@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Phone Number</label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="(203) 555-0199" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">City / Area</label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Wallingford, CT" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium">Preferred Date & Time</label>
              <input type="datetime-local" className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium">Address / Notes</label>
              <textarea className="h-28 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Access notes, parking spot, gate code, etc." />
            </div>

            <div className="md:col-span-2 mt-2 flex gap-3">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Submit Request
              </button>
              <a
                href="tel:+183342VOLTGO"
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Or call 1-833-4-VOLTGO
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
