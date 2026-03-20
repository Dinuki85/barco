"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaBuilding } from "react-icons/fa";

const BACKGROUND_IMAGE = "/assets/barco1.png";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzpkwyr");

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen gap-8 px-4 md:flex-row"
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
          group relative flex flex-col gap-6 justify-center items-start
          w-full max-w-md mb-8 md:mb-0 md:mr-8
          rounded-3xl p-10 shadow-2xl
          border border-slate-200/50
          backdrop-blur-xl
          transition-all duration-500
          hover:scale-[1.02]
          premium-glass-card
        `}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-2xl bg-primary/10">
            <FaBuilding className="text-3xl text-primary" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">
           NEXA<span className="text-accent underline decoration-2 underline-offset-4">GLOBAL</span>
          </span>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <FaMapMarkerAlt className="text-accent" />
            </div>
            <span className="font-semibold tracking-tight text-slate-700">
              Skyline Tower, Financial District, Colombo 05
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <FaPhoneAlt className="text-accent" />
            </div>
            <span className="font-semibold tracking-tight text-slate-700">
              +94 11 234 5678
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <FaEnvelope className="text-accent" />
            </div>
            <span className="font-semibold tracking-tight text-slate-700">
              solutions@nexaglobal.io
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-accent/10">
              <FaClock className="text-accent" />
            </div>
            <span className="font-semibold tracking-tight text-slate-700">
              24/7 Priority Support Ecosystem
            </span>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-200">
          <p className="text-lg font-medium leading-relaxed text-slate-500">
            Architecting the future of global trade. We deliver high-fidelity, intelligent logistics solutions for growth-oriented enterprises.
          </p>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="flex flex-col items-center w-full max-w-lg p-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-100">
        <h1 className="mb-10 text-5xl font-black tracking-tighter text-slate-900">Get in Touch</h1>
        {state.succeeded ? (
          <div className="py-10 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-accent">🎉 Transmission Received</h2>
            <p className="text-slate-600 font-medium">Our strategic team will be in contact shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-bold tracking-widest text-slate-500 uppercase mb-2">
                Business Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="partnership@startup.io"
                className="block w-full px-5 py-4 bg-slate-50 border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-accent transition-all duration-300"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold tracking-widest text-slate-500 uppercase mb-2">
                How can we collaborate?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Specify your logistical requirements..."
                className="block w-full px-5 py-4 bg-slate-50 border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-accent transition-all duration-300"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="premium-button w-full py-5 text-lg font-black tracking-widest uppercase bg-primary hover:bg-slate-800"
              >
                {state.submitting ? "Processing..." : "Initiate Partnership"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}