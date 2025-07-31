"use client"
import { FaBullseye, FaEye } from "react-icons/fa";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
<main className="min-h-screen px-4 pt-24 pb-12 ">      
  <section className="grid items-center max-w-5xl grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-2">
  {/* Left: About Content */}
  <div>
    <h1 className="mb-4 text-4xl font-extrabold text-black md:text-5xl">About Us</h1>
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

      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">Why Choose Us?</h2>
        <ul className="space-y-2 text-blue-800 list-disc list-inside">
          <li>Global network and expertise</li>
          <li>Transparent and competitive pricing</li>
          <li>Personalized customer service</li>
          <li>Advanced technology and tracking</li>
          <li>Proven track record of reliability</li>
        </ul>
      </section>

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

      <Footer />
    </main>
  );
}