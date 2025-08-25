export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--volt-blue)] text-white text-center px-6">
      <h1 className="text-6xl font-extrabold mb-4">500</h1>
      <p className="text-xl mb-6">Something went wrong on our side. Please try again later.</p>
      <a
        href="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-soft transition"
      >
        Back to Home
      </a>
    </div>
  );
}
