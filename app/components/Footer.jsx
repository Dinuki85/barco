"use client";
import Link from "next/link";

export default function ConnectFooter() {
  return (
    <footer className="w-full text-white bg-blue-950">
      {/* Top Section with Fixed Image Background */}
      <div
        className="relative h-[350px] bg-fixed bg-center bg-cover flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/assets/barco1.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="mb-3 text-4xl font-bold">
            Let’s Connect with <span className="text-yellow-300">Barco Global Logistic</span>
          </h2>
          <p className="mb-6 text-lg">
            Delivering trust, across borders. Reach out to us for expert logistics solutions.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 font-semibold text-black transition-all duration-300 bg-yellow-400 rounded-full hover:bg-yellow-500">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Contact Details */}
      <div className="grid gap-6 px-6 py-10 text-sm text-white md:px-16 md:grid-cols-3 md:text-base bg-blue-950">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-yellow-300">📍 Address</h3>
          <p>No. 12, Marine Drive,<br />Colombo 03,<br />Sri Lanka</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-yellow-300">📞 Contact</h3>
          <p>Phone: +94 77 123 4567<br />Email: info@barcologistics.com</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-yellow-300">⏰ Office Hours</h3>
          <p>Mon - Fri: 8:30 AM – 6:00 PM<br />Saturday: 9:00 AM – 1:00 PM<br />Sunday: Closed</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-sm text-center text-gray-300 border-t border-gray-600 bg-blue-950">
        &copy; {new Date().getFullYear()} Barco Global Logistic. All rights reserved.
      </div>
    </footer>
  );
}
