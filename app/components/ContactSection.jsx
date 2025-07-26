"use client";
import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

// Change this to your actual image path
const BACKGROUND_IMAGE = "/assets/barco1.png";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzpkwyr");
  const bgRef = useRef(null);

  useEffect(() => {
    let timeout;
    function animateZoom() {
      if (bgRef.current) {
        bgRef.current.classList.add("zoomed");
        timeout = setTimeout(() => {
          bgRef.current.classList.remove("zoomed");
        }, 2000); // Zoom duration
      }
    }
    animateZoom();
    const interval = setInterval(animateZoom, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed animated background */}
      <div
        ref={bgRef}
        className="contact-bg fixed inset-0 w-full h-full -z-10 pointer-events-none transition-transform duration-[2000ms]"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Page content */}
      <div className="relative z-10 py-16">
        {state.succeeded ? (
          <div className="py-10 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-green-600">🎉 Thank you!</h2>
            <p className="text-gray-700">Your message has been successfully sent. We'll get back to you soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg p-6 mx-auto space-y-5 bg-white rounded-lg shadow-md"
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
      {/* Styles for zoom animation */}
      <style jsx global>{`
        .contact-bg {
          transform: scale(1);
        }
        .contact-bg.zoomed {
          transform: scale(1.08);
          transition: transform 2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}