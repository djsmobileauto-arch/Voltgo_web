<div className="min-h-screen bg-volt-blue text-white">
  <div className="max-w-4xl mx-auto px-6 py-12">
    <h1 className="text-3xl font-bold mb-8">VoltGo Subscriptions</h1>
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <input type="text" placeholder="Full Name" className="p-3 rounded bg-white text-black" />
      <input type="email" placeholder="Email Address" className="p-3 rounded bg-white text-black" />
      <input type="tel" placeholder="Phone Number" className="p-3 rounded bg-white text-black" />
      <input type="text" placeholder="City / Area" className="p-3 rounded bg-white text-black" />
      {/* ... resto de inputs igual */}
      <button type="submit" className="bg-green-500 text-white font-bold py-3 px-6 rounded">
        Submit
      </button>
    </form>
  </div>
</div>
