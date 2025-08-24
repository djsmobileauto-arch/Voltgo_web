// pages/subscribe.tsx
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  vehicle: string;
  color: string;
  connector: string;
  plan: "Weekly" | "Monthly";
  notes: string;
};

export default function SubscribePage() {
  const [form, setForm] = useState<FormState>({
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

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "error">(null);

  function onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSent(null);

    try {
      // ⬇️ REEMPLAZA ESTE URL con tu endpoint real de Formspree
      const FORMSPREE_URL = "https://formspree.io/f/mzzapjey";

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent("ok");
        // Limpia el formulario
        setForm({
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
      } else {
        setSent("error");
      }
    } catch {
      setSent("error");
    } finally {
      setSending(false);
    }
  }

  const Field = (props: {
    label: string;
    children: React.ReactNode;
    hint?: string;
  }) => (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700">{props.label}</span>
      <div className="mt-1">{props.children}</div>
      {props.hint && (
        <span className="mt-1 block text-xs text-gray-500">{props.hint}</span>
      )}
    </label>
  );

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">VoltGo Subscriptions</h1>
        <p className="text-gray-600 mt-2">
          Choose <b>Weekly</b> or <b>Monthly</b>. Tell us about your vehicle and connector —
          we’ll follow up ASAP.
        </p>
        <div className="mt-4">
          <a href="tel:18334865846" className="inline-block rounded-md px-5 py-2 bg-green-600 text-white font-medium">
            Call 1-833-4-VOLTGO
          </a>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Full Name">
            <input
              name="name" value={form.name} onChange={onChange}
              required className="w-full rounded-md border px-3 py-2"
              placeholder="John Doe"
            />
          </Field>

          <Field label="Email Address">
            <input
              type="email" name="email" value={form.email} onChange={onChange}
              required className="w-full rounded-md border px-3 py-2"
              placeholder="john@example.com"
            />
          </Field>

          <Field label="Phone Number">
            <input
              name="phone" value={form.phone} onChange={onChange}
              required className="w-full rounded-md border px-3 py-2"
              placeholder="(203) 555-0199"
            />
          </Field>

          <Field label="City / Area">
            <input
              name="city" value={form.city} onChange={onChange}
              required className="w-full rounded-md border px-3 py-2"
              placeholder="Wallingford, CT"
            />
          </Field>

          <Field label="Vehicle Make & Model">
            <input
              name="vehicle" value={form.vehicle} onChange={onChange}
              required className="w-full rounded-md border px-3 py-2"
              placeholder="Tesla Model 3, Nissan Leaf, F-150 Lightning…"
            />
          </Field>

          <Field label="Vehicle Color">
            <input
              name="color" value={form.color} onChange={onChange}
              className="w-full rounded-md border px-3 py-2"
              placeholder="Blue, White, Black…"
            />
          </Field>

          <Field label="Connector Type" hint="J1772 · CCS1 · Tesla NACS (North American Charging Standard)">
            <select
              name="connector" value={form.connector} onChange={onChange}
              className="w-full rounded-md border px-3 py-2"
            >
              <option>J1772</option>
              <option>CCS1</option>
              <option>Tesla NACS</option>
            </select>
          </Field>

          <Field label="Subscription Plan">
            <select
              name="plan" value={form.plan} onChange={onChange}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </Field>
        </div>

        <Field label="Notes (optional)">
          <textarea
            name="notes" value={form.notes} onChange={onChange}
            rows={4} className="w-full rounded-md border px-3 py-2"
            placeholder="Anything we should know? Parking spot, access, preferred times…"
          />
        </Field>

        <button
          type="submit"
          disabled={sending}
          className="w-full md:w-auto rounded-md bg-blue-600 text-white px-6 py-2 font-semibold disabled:opacity-60"
        >
          {sending ? "Sending…" : "Submit"}
        </button>

        {sent === "ok" && (
          <p className="text-green-700 mt-2">Thanks! We’ll be in touch shortly.</p>
        )}
        {sent === "error" && (
          <p className="text-red-700 mt-2">There was a problem. Please try again.</p>
        )}
      </form>
    </main>
  );
}
