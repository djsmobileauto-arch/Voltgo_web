import { useState } from "react";

export default function RequestPage() {
  const COLORS = { blue: "#0a3ccf", green: "#15c26b" };
  const [f, setF] = useState({ name: "", phone: "", service: "EV Emergency" });
  const on = (e: any) => setF({ ...f, [e.target.name]: e.target.value });

  const submit = (e: any) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[VoltGo] ${f.service} — ${f.name}`);
    const body = encodeURIComponent(`Name: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}`);
    window.location.href = `mailto:info@voltgo.us?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="text-white text-center py-12" style={{ backgroundColor: COLORS.blue }}>
        <h1 className="text-3xl md:text-4xl font-extrabold">Request Service</h1>
        <p className="mt-2 opacity-90">
          If this is urgent, please call now: <a href="tel:+18334865846" className="underline">1-833-4-VOLTGO</a>
        </p>
      </section>

      <section className="px-4 py-10">
        <form onSubmit={submit} className="mx-auto max-w-md rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-semibold">Full Name</label>
            <input required name="name" value={f.name} onChange={on} className="mt-1 w-full rounded-xl border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Phone</label>
            <input required name="phone" type="tel" value={f.phone} onChange={on} className="mt-1 w-full rounded-xl border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Service</label>
            <select name="service" value={f.service} onChange={on} className="mt-1 w-full rounded-xl border px-3 py-2">
              <option>EV Emergency</option>
              <option>On-Demand Charge</option>
              <option>Flat Tire</option>
              <option>TPMS Sensors</option>
              <option>Jump Start</option>
              <option>Battery Replacement</option>
              <option>Lockout Service</option>
              <option>Fuel Delivery</option>
              <option>General Assistance</option>
            </select>
          </div>
          <button type="submit" className="w-full rounded-2xl px-5 py-3 font-semibold text-white" style={{ backgroundColor: COLORS.green }}>
            Send request to info@voltgo.us
          </button>
          <div className="text-center text-sm text-slate-600">
            For urgent situations, please call: <a className="underline" href="tel:+18334865846">1-833-4-VOLTGO</a>
          </div>
        </form>
      </section>
    </main>
  );
}
