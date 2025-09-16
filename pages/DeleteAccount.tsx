import React from "react";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-400 p-6">
      <div className="bg-white max-w-2xl p-8 rounded-2xl shadow-lg text-gray-800">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
          Delete Account Request
        </h1>

        <p className="mb-4">
          If you wish to permanently delete your <span className="font-semibold">VoltGo</span> account and all associated data, please send us a request at:
        </p>

        <p className="mb-6 text-center">
          📧 <a href="mailto:support@voltgo.us" className="text-blue-600 underline">
            support@voltgo.us
          </a>
        </p>

        <p className="mb-3">When your account is deleted, the following information will also be removed from our systems:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Name and contact details (email, phone number)</li>
          <li>Account ID and profile information</li>
          <li>Location history</li>
          <li>Service history</li>
          <li>Photos and chat messages associated with services</li>
        </ul>

        <p className="mb-4">
          ⚠️ Please note: VoltGo does <strong>not</strong> support partial deletion of data (e.g., deleting only certain messages or photos).
          The only available option is <strong>full account deletion</strong>.
        </p>

        <p className="mb-2">
          Your request will be processed in accordance with our{" "}
          <a href="https://voltgo.us/pri
