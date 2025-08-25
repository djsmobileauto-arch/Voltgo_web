// pages/subscribe.tsx
import React, { useCallback, useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mzzapjey"; 
// Ejemplo: "https://formspree.io/f/abcd1234"

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
    city: "Wallingford, CT",
    vehicle: "",
    color: "",
    connector: "J1772",
    plan: "Monthly",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      // Actualizamos manteniendo el resto de campos (evita pisarlos)
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_URL.startsWith("https://")) {
      alert("Falta pegar el endpoint de Formspree en FORMSPREE_URL.");
      return;
    }
    try {
      setStatus("sending");
      const resp = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (resp.ok) {
        setStatus("ok");
        setForm({
          name: "",
          email: "",
          phone: "",
          city: "Wallingford, CT",
          vehicle: "",
          color: "",
          connector: "J1772",
          plan: "Monthly",
          notes: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">VoltGo Subscriptions</h1>
      <p className="text-gray-700 mb-8">
        Choose Weekly or Monthly. Tell us about your vehicle and connector — we’ll follow up ASAP.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="John Doe"
            autoComplete="name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="john@example.com"
            autoComplete="email"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="(203) 555-0199"
            autoComplete="tel"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="city">City / Area</label>
          <input
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Wallingford, CT"
            autoComplete="address-level2"
          />
        </div>

        {/* Vehicle */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="vehicle">Vehicle Make & Model</label>
          <input
            id="vehicle"
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Tesla Model 3, Nissan Leaf, F-150 Lightning…"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="color">Vehicle Color</label>
          <input
            id="color"
            name="color"
            value={form.color}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Blue, White, Black…"
          />
        </div>

        {/* Connector */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="connector">Connector Type</label>
          <select
            id="connector"
            name="connector"
            value={form.connector}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white"
          >
            <option value="J1772">J1772</option>
            <option value="NACS (Tesla)">NACS (Tesla)</option>
            <option value="CCS1">CCS1</option>
            <option value="CHAdeMO">CHAdeMO</option>
          </select>
        </div>

        {/* Plan */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="plan">Subscription Plan</label>
          <select
            id="plan"
            name="plan"
            value={form.plan}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1" htmlFor="notes">Notes (optional)</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Anything we should know? Usual parking spot, access, preferred times…"
            rows={4}
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 mt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
          {status === "ok" && <span className="ml-3 text-green-700">Thanks! We’ll be in touch.</span>}
          {status === "error" && <span className="ml-3 text-red-600">Something went wrong. Try again.</span>}
        </div>
      </form>
    </div>
  );
}

