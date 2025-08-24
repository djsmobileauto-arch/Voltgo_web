import { useState } from "react";

export default function SubscribePage() {
  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    vehicle: "",
    color: "",
    connector: "J1772",
    plan: "Monthly",
    notes: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[VoltGo] ${form.plan} subscription request — ${form.name}`);
    const lines = [
      `Full Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `City / Area: ${form.city}`,
      `Vehicle: ${form.vehicle}`,
      `Color: ${form.color}`,
      `Connector Type: ${form.connector}`,
      `Subscription Plan: ${form.plan}`,
      "",
      "Notes:",
      form.notes || "(none)",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:info@voltgo.us?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="text-white text-center py-12 px-4" style={{ backgroundColor: COLORS.blue }}>
        <h1 className="text-3xl md:text-4xl font-extrabold">VoltGo Subscriptions</h1>
        <p className="mt-2 opacity-90">
          Choose Weekly or Monthly. Tell us about your vehicle and connector — we’ll follow up ASAP.
        </p>
        <div className="mt-4">
          <a
            href="tel:+18334865846"
            className="inline-block rounded-2xl px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: COLORS.green }}
          >
            Or call 1-833-4-VOLTGO
          </a>
        </div>
      </section>

      {/* FORM */}
      <section className="px-4 py-10">
        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-2xl rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5"
        >
          {/* Contact */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Full Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="(203) 555-0199"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">City / Area</label>
              <input
                name="city"
                value={form.city}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="Wallingford, CT"
              />
            </div>
          </div>

          {/* Vehicle */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Vehicle Make & Model</label>
              <input
                name="vehicle"
                value={form.vehicle}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="Tesla Model 3, Nissan Leaf, F-150 Lightning…"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Vehicle Color</label>
              <input
                name="color"
                value={form.color}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="Blue, White, Black…"
              />
            </div>
          </div>

          {/* Connector + Plan */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Connector Type</label>
              <select
                name="connector"
                value={form.connector}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2"
              >
                <option>J1772</option>
                <option>CCS1</option>
                <option>Tesla NACS</option>
                <option>CHAdeMO</option>
                <option>Other / Not sure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold">Subscription Plan</label>
              <select
                name="plan"
                value={form.plan}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border px-3 py-2"
              >
                <option>Monthly</option>
                <option>Weekly</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-semibold">Notes (optional)</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={onChange}
              rows={5}
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="Anything we should know? Usual parking spot, access, preferred times…"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl px-5 py-3 font-semibold text-white"
            style={{ backgroundColor: COLORS.green }}
          >
            Submit subscription request
          </button>
        </form>
      </section>
    </main>
  );
}
