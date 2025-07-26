"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaBuilding } from "react-icons/fa";

const BACKGROUND_IMAGE = "/assets/barco1.png";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzpkwyr");

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-16 md:flex-row"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Company Details Card */}
     <div
  className={`
    group relative flex flex-col gap-5 justify-center items-start
    w-full max-w-md mb-10 md:mb-0 md:mr-8
    rounded-2xl p-8 shadow-xl
    border border-blue-200
    backdrop-blur-md
    transition-transform duration-300
    hover:scale-105
    animated-bg
  `}
  style={{
    boxShadow: "0 8px 32px 0 rgba(31, 64, 104, 0.18)",
  }}
>
  <div className="flex items-center gap-3 mb-2">
    <FaBuilding className="text-2xl text-blue-900 transition-colors duration-300 group-hover:text-blue-100" />
    <span className="text-xl font-bold text-blue-900 transition-colors duration-300 group-hover:text-white">
      Barco Global Logistics (PVT) LTD
    </span>
         </div>
  <div className="flex items-center gap-3">
    <FaMapMarkerAlt className="text-blue-700 transition-colors duration-300 group-hover:text-blue-200" />
    <span className="font-medium text-blue-900 transition-colors duration-300 group-hover:text-white">
      123 Marine Drive, Colombo 03, Sri Lanka
    </span>
  </div>
  <div className="flex items-center gap-3">
    <FaPhoneAlt className="text-blue-700 transition-colors duration-300 group-hover:text-blue-200" />
    <span className="font-medium text-blue-900 transition-colors duration-300 group-hover:text-white">
      +94 11 234 5678
    </span>
  </div>
  <div className="flex items-center gap-3">
    <FaEnvelope className="text-blue-700 transition-colors duration-300 group-hover:text-blue-200" />
    <span className="font-medium text-blue-900 transition-colors duration-300 group-hover:text-white">
      info@barcologistics.com
    </span>
         </div>
  <div className="flex items-center gap-3">
    <FaClock className="text-blue-700 transition-colors duration-300 group-hover:text-blue-200" />
    <span className="font-medium text-blue-900 transition-colors duration-300 group-hover:text-white">
      Mon - Fri: 8:30 AM - 6:00 PM
    </span>
  </div>
  <div className="mt-4 text-sm leading-relaxed text-blue-800 transition-colors duration-300 group-hover:text-blue-100">
    <span className="font-semibold">
      Your trusted partner in global logistics and supply chain solutions. We deliver reliability, speed, and transparency for your business worldwide.
    </span>
  </div>
</div>

      {/* Contact Form Card */}
      <div className="flex flex-col items-center w-full max-w-lg p-8 bg-white rounded-lg shadow-md bg-opacity-90">
        <h1 className="mb-8 text-3xl font-bold text-center text-blue-900">Contact Us</h1>
        {state.succeeded ? (
          <div className="py-10 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-green-600">🎉 Thank you!</h2>
            <p className="text-gray-700">Your message has been successfully sent. We'll get back to you soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-5"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Your message..."
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-4 py-2 font-semibold text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
      {/* Custom color animation for the company card */}
      <style jsx>{`
        .animated-bg {
          background: linear-gradient(135deg, #e0f2fecc 60%, #bae6fdcc 80%, #a5d8fccf 100%);
          animation: lightPulse 2s infinite alternate;
        }
        .animated-bg:hover {
          animation: none !important;
          background: linear-gradient(135deg, #1e3a8aee 60%, #2563ebee 100%);
          background-blend-mode: multiply;
        }
        @keyframes lightPulse {
          0% {
            background: linear-gradient(135deg, #e0f2fecc 60%, #bae6fdcc 80%, #a5d8fccf 100%);
          }
          100% {
            background: linear-gradient(135deg, #dbeafecc 60%, #bfdbfecc 80%, #93c5fdcc 100%);
          }
        }
      `}</style>
    </div>
  );
}