"use client"
import { FaBullseye, FaEye } from "react-icons/fa";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
<main className="min-h-screen px-4 pt-24 pb-12 ">      
  <section className="grid items-center max-w-5xl grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-2">
  {/* Left: About Content */}
  <div>
    <h1 className="w-full font-serif text-3xl font-bold text-black sm:text-5xl md:text-6xl lg:text-7xl">About Us</h1>
    <p className="text-lg text-black">
      Barco Global Logistics (PVT) LTD is a leading provider of global logistics and supply chain solutions, delivering reliability, speed, and transparency for businesses worldwide. 
      <br /><br />
      With a global network and a commitment to innovation, we help our clients move goods efficiently and securely across borders.
    </p>
  </div>
  {/* Right: Animated Image */}
  <div className="flex items-center justify-center">
    <div className="relative w-full overflow-hidden transition-transform duration-300 shadow-lg mx-au to h-100max-w-xs rounded-2xl hover:scale-105">
      <img
        src="/assets/barco1.png"
        alt="Barco Global Logistics"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-200/40 via-blue-400/30 to-blue-900/20"></div>
    </div>
  </div>
</section>

       {/* Vision and Mission Sections */}
      <section className="max-w-3xl mx-auto mb-12">
        <div className="flex items-center mb-4">
          <FaEye className="mr-3 text-2xl text-blue-900" />
          <h2 className="text-3xl font-bold text-blue-900">Vision</h2>
        </div>
        <p className="mb-8 text-lg text-black">
          To be the most trusted logistics partner, enabling seamless global trade and growth for our clients.
        </p>
        <div className="flex items-center mb-4">
          <FaBullseye className="mr-3 text-2xl text-blue-900" />
          <h2 className="text-3xl font-bold text-blue-900">Mission</h2>
        </div>
        <p className="text-lg text-black">
          Deliver innovative, efficient, and transparent logistics solutions that empower businesses to thrive in a connected world.
        </p>
      </section>
{/*core values section*/}
      <section
  className="relative w-screen left-1/2 -translate-x-1/2 h-[350px] bg-fixed bg-center bg-cover flex items-center justify-center mb-16"
  style={{ backgroundImage: "url('/assets/barco1.png')" }}
>
 {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/30"></div>
  {/* Animated Core Values */}
  <div className="relative z-10 flex items-center justify-center w-full h-full">
    <div className="flex items-center justify-center w-full overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
        {[
          "Integrity & Trust",
          "Customer Focus",
          "Innovation",
          "Reliability",
          "Teamwork",
          "Integrity & Trust",
          "Customer Focus",
          "Innovation",
          "Reliability",
          "Teamwork",
        ].map((value, idx) => (
          <span
            key={idx}
            className="mx-8 text-4xl font-extrabold text-transparent md:text-6xl lg:text-7xl"
            style={{
              WebkitTextStroke: "2px #fff",
              textStroke: "2px #fff",
              letterSpacing: "0.1em",
            }}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  </div>
  {/* Animation CSS */}
  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 18s linear infinite;
    }
  `}</style>
</section>

{/*why choose us section*/}
<section className="max-w-5xl px-4 mx-auto mb-16">
  {/* Intro Paragraph */}
  <h1 className="w-full font-serif text-3xl font-bold text-center text-black sm:text-5xl md:text-6xl lg:text-7xl">Why Choose Us?</h1>
  <p className="mb-8 text-lg text-black">
    At Barco Global Logistics, we deliver more than just shipments. Our commitment to reliability, transparency, and customer satisfaction sets us apart. With advanced technology and a dedicated team, we ensure your business moves forward—smoothly and securely.
  </p>
  {/* Services Grid */}
  <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
    {/* Service 1 */}
    <div
      className="flex items-center gap-4 p-6 transition bg-white shadow cursor-pointer rounded-xl hover:bg-blue-50"
      onClick={() => window.location.href = "/services"}
    >
      <span className="text-3xl text-blue-700">
        {/* Example icon: FaShippingFast */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0a2 2 0 01-2-2v-2a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2m-6 0v2a2 2 0 002 2h6a2 2 0 002-2v-2" /></svg>
      </span>
      <span className="text-lg font-semibold text-blue-900">Global Freight Solutions</span>
    </div>
    {/* Service 2 */}
    <div
      className="flex items-center gap-4 p-6 transition bg-white shadow cursor-pointer rounded-xl hover:bg-blue-50"
      onClick={() => window.location.href = "/services"}
    >
      <span className="text-3xl text-blue-700">
        {/* Example icon: FaClipboardList */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h6M9 9h6m-6 4h6m-6 4h6" /></svg>
      </span>
      <span className="text-lg font-semibold text-blue-900">Customs & Compliance</span>
    </div>
    {/* Service 3 */}
    <div
      className="flex items-center gap-4 p-6 transition bg-white shadow cursor-pointer rounded-xl hover:bg-blue-50"
      onClick={() => window.location.href = "/services"}
    >
      <span className="text-3xl text-blue-700">
        {/* Example icon: FaWarehouse */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l9-7 9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" /></svg>
      </span>
      <span className="text-lg font-semibold text-blue-900">Warehousing & Distribution</span>
    </div>
  </div>
</section>

{/*team introduction section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">Meet the Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Example team members, replace with your real data */}
          <div className="flex flex-col items-center p-6 bg-white shadow bg-opacity-90 rounded-xl">
            <img src="/assets/team1.jpg" alt="CEO" className="object-cover w-24 h-24 mb-3 rounded-full" />
            <h3 className="font-semibold text-blue-900">Jane Fernando</h3>
            <p className="text-blue-700">Chief Executive Officer</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow bg-opacity-90 rounded-xl">
            <img src="/assets/team2.jpg" alt="COO" className="object-cover w-24 h-24 mb-3 rounded-full" />
            <h3 className="font-semibold text-blue-900">Ruwan Perera</h3>
            <p className="text-blue-700">Chief Operations Officer</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white shadow bg-opacity-90 rounded-xl">
            <img src="/assets/team3.jpg" alt="Head of Logistics" className="object-cover w-24 h-24 mb-3 rounded-full" />
            <h3 className="font-semibold text-blue-900">Samantha Silva</h3>
            <p className="text-blue-700">Head of Logistics</p>
          </div>
        </div>
      </section>

      
    </main>
  );
}