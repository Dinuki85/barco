"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

// Make sure this path is correct and the file exists in public/assets/barco1.jpg
const BACKGROUND_IMAGE = "/assets/barco1.png";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzpkwyr");

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-16"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE})`,
        backgroundSize: "fill",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center w-full max-w-lg p-8 bg-white rounded-lg shadow-md bg-opacity-90">
        
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
    </div>
  );
}