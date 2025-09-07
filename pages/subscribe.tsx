<form className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-gray-700 font-medium">Full Name</label>
      <input type="text" placeholder="John Doe" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <div>
      <label className="block text-gray-700 font-medium">Email Address</label>
      <input type="email" placeholder="you@email.com" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div>
      <label className="block text-gray-700 font-medium">Phone Number</label>
      <input type="tel" placeholder="(123) 456-7890" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <div>
      <label className="block text-gray-700 font-medium">City / Area</label>
      <input type="text" placeholder="Wallingford, CT" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div>
      <label className="block text-gray-700 font-medium">Vehicle Make & Model</label>
      <input type="text" placeholder="Tesla Model 3" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    <div>
      <label className="block text-gray-700 font-medium">Vehicle Color</label>
      <input type="text" placeholder="Blue" className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div>
      <label className="block text-gray-700 font-medium">Connector Type</label>
      <select className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Connector</option>
        <option value="CCS1">CCS1</option>
        <option value="CHAdeMO">CHAdeMO</option>
        <option value="NACS">NACS (Tesla)</option>
      </select>
    </div>

    <div>
      <label className="block text-gray-700 font-medium">Subscription Plan</label>
      <select className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">Select Plan</option>
        <option value="roadside">Roadside Assistance</option>
        <option value="voltgo-pass">VoltGo Pass</option>
        <option value="voltgo-pro">VoltGo Pro</option>
      </select>
    </div>
  </div>

  <div>
    <label className="block text-gray-700 font-medium">Notes</label>
    <textarea placeholder="Parking spot access, preferred times..." className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
  </div>

  <div className="text-center">
    <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition">
      Submit
    </button>
  </div>
</form>
