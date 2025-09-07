import React from "react";

export default function Roadside() {
  return (
    <div className="bg-blue-600 min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Roadside Assistance
      </h1>
      <p className="text-center text-white mb-12">
        24/7 roadside support — fast, safe, and reliable help when you need it most.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Jump Start</h2>
          <p className="mb-6">Dead battery? We’ll get you back on the road quickly.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Request Help
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Flat Tire</h2>
          <p className="mb-6">On-site tire replacement or repair, anytime and anywhere.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Request Help
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Fuel Delivery</h2>
          <p className="mb-6">Out of gas? We’ll deliver fuel straight to your location.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Request Help
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Lockout</h2>
          <p className="mb-6">Keys locked inside? We’ll unlock your vehicle safely.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Request Help
          </button>
        </div>
      </div>
    </div>
  );
}
