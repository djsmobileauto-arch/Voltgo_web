mport React from "react";

/* === Inline SVG icons (sin dependencias) === */
const IconBolt = (props: React.SVGProps<SVGSVGElement>) => (
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
<path
fillRule="evenodd"
d="M14.615 1.604a.75.75 0 01.133 1.052L8.936 10h4.814a.75.75 0 01.593 1.213l-6.37 8.25A.75.75 0 016.5 19.75L8.764 13H5a.75.75 0 01-.593-1.213l8.261-10.5a.75.75 0 011.947.317z"
clipRule="evenodd"
/>
</svg>
);

const IconCalendar = (props: React.SVGProps<SVGSVGElement>) => (
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
{/* Cuerpo del calendario */}
<rect x="3" y="4" width="18" height="16" rx="2" />
{/* Anillas superiores */}
<rect x="7" y="2" width="2" height="4" />
<rect x="15" y="2" width="2" height="4" />
{/* Bloque de cita */}
<rect x="7" y="10" width="10" height="6" />
</svg>
);

const IconBox = (props: React.SVGProps<SVGSVGElement>) => (
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
{/* Tapa */}
<rect x="4" y="5" width="16" height="4" rx="1" />
{/* Caja */}
<rect x="4" y="9" width="16" height="10" rx="2" />
</svg>
);

/* === Página === */
export default function Home() {
return (
<div className="bg-blue-600 min-h-screen text-white">
{/* Hero */}
<section className="text-center py-12 md:py-16">
{/* LOGO: asegúrate de tener /public/logo.png */}
<img
src="/logo.png"
alt="VoltGo Logo"
className="mx-auto mb-6 w-44 md:w-56"
/>

<h1 className="text-3xl md:text-5xl font-extrabold mb-3">
Mobile EV Charging & Roadside Assistance
</h1>
<p className="text-base md:text-lg opacity-90 mb-8">
Fast, safe and reliable EV charging and roadside support wherever you need it.
</p>

{/* CTA buttons */}
<div className="flex flex-wrap justify-center gap-4">
<a
href="/roadside"
className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold shadow"
>
Emergency Help Now
</a>
<a
href="/services"
className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow"
>
Schedule a Charge
</a>
<a
href="/pricing"
className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-lg font-semibold shadow"
>
Membership Plans
</a>
</div>
</section>

{/* Services cards sobre fondo azul */}
<section className="py-10 md:py-14">
<h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Services</h2>
<p className="text-center text-white/80 mb-8">
Two paths: immediate emergency help or scheduled charging — plus memberships.
</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
{/* Emergency */}
<div className="bg-white text-gray-800 rounded-xl shadow-lg p-6">
<div className="flex justify-center mb-4">
<IconBolt className="w-10 h-10 text-red-500" />
</div>
<h3 className="text-xl font-bold text-center mb-2">Emergency</h3>
<p className="text-center mb-4">
Out of range or stuck roadside? We dispatch mobile DC fast charge, ASAP.
</p>
<div className="flex justify-center">
<a
href="/roadside"
className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
>
Request Emergency
</a>
</div>
</div>

{/* On-Demand */}
<div className="bg-white text-gray-800 rounded-xl shadow-lg p-6">
<div className="flex justify-center mb-4">
<IconCalendar className="w-10 h-10 text-blue-500" />
</div>
<h3 className="text-xl font-bold text-center mb-2">On-Demand</h3>
<p className="text-center mb-4">
Book a one-time charge at home, work or anywhere in our coverage area.
</p>
<div className="flex justify-center">
<a
href="/services"
className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
>
Request Online
</a>
</div>
</div>

{/* Subscription */}
<div className="bg-white text-gray-800 rounded-xl shadow-lg p-6">
<div className="flex justify-center mb-4">
<IconBox className="w-10 h-10 text-amber-500" />
</div>
<h3 className="text-xl font-bold text-center mb-2">Subscription</h3>
<p className="text-center mb-4">
VoltGo Pass <strong>$59/month</strong> → 2 × 15 kWh <br />
VoltGo Pro <strong>$119/month</strong> → 4 × 20 kWh
</p>
<div className="flex justify-center">
<a
href="/pricing"
className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold"
>
View Plans
</a>
</div>
</div>
</div>
</section>
</div>
);
}
