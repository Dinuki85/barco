"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="relative w-full bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/barco1.jpg')" }}>
      {/* Overlay */}
      <div className="px-6 py-20 text-white bg-black bg-opacity-60 backdrop-blur-sm md:px-16">
        {/* Headline and CTA */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Let's Connect with <span className="text-yellow-400">Barco Global Logistic</span>
          </h2>
          <p className="mb-6 text-lg">Delivering trust, across borders. Reach out to us for reliable freight, courier, and logistics solutions tailored to your needs.</p>
          <Link href="/contact">
            <button className="px-6 py-3 font-semibold text-black transition-all duration-300 bg-yellow-400 rounded-full hover:bg-yellow-500">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Contact Info Columns */}
        <div className="grid max-w-5xl gap-8 mx-auto text-sm md:grid-cols-3 md:text-base">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-lg font-semibold text-yellow-400">Address</h3>
            <p>No. 12, Marine Drive,<br />Colombo 03,<br />Sri Lanka</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-lg font-semibold text-yellow-400">Contact</h3>
            <p>Phone: +94 77 123 4567<br />Email: info@barcologistics.com</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-lg font-semibold text-yellow-400">Office Hours</h3>
            <p>Mon - Fri: 8:30 AM – 6:00 PM<br />Saturday: 9:00 AM – 1:00 PM<br />Sunday: Closed</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-500"></div>

        {/* Footer Bottom */}
        <div className="text-sm text-center text-gray-300">
          &copy; {new Date().getFullYear()} Barco Global Logistic. All rights reserved.
        </div>
      </div>
    </section>
  );
}
