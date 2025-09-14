
import React from "react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-blue-700 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Effective date: September 14, 2025</p>

        <p className="mb-6">
          VoltGo uses cookies and similar technologies to improve your browsing experience and 
          provide personalized Services. This policy explains how and why we use them.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
        <p className="mb-6">
          Small text files stored on your device that help remember preferences and analyze usage.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Types of Cookies We Use</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Essential:</strong> security, session, core functionality
          </li>
          <li>
            <strong>Performance:</strong> analytics and traffic measurement
          </li>
          <li>
            <strong>Functional:</strong> preferences such as language
          </li>
          <li>
            <strong>Advertising:</strong> relevant promotions and campaign measurement
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Cookies</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Enable service requests and account login</li>
          <li>Improve site performance and user experience</li>
          <li>Measure traffic and usage patterns</li>
          <li>Deliver relevant promotions</li>
        </ul>
      </div>
    </div>
  );
}
