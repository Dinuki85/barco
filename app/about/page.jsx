"use client"
import { FaBullseye, FaEye } from "react-icons/fa";
import Footer from "../components/Footer";
import { FaShippingFast, FaClipboardList, FaWarehouse, FaProjectDiagram, FaLink, FaShoppingCart, FaSnowflake, FaShieldAlt, FaRocket } from "react-icons/fa";
import MeatTeam from "../components/MeatTeam";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 pt-20 pb-12 ">
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



      {/* Why Choose Us Section */}
      <section className="max-w-5xl px-4 mx-auto mb-16">
        <h2 className="w-full font-serif text-3xl font-bold text-center text-black sm:text-5xl md:text-6xl lg:text-7xl">Why Choose Us?</h2>
        <p className="mb-8 text-lg text-black">
          Barco Global Logistics stands out for our reliability, transparency, and customer-first approach. We leverage advanced technology and a dedicated team to ensure your shipments arrive safely and on time, every time. Discover our comprehensive services designed to help your business grow.
        </p>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          {/* Left side buttons */}
          <div className="flex flex-col gap-6">
            {[
              { label: "Global Freight Solutions", icon: <FaShippingFast className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
              { label: "Customs & Compliance", icon: <FaClipboardList className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
              { label: "Warehousing & Distribution", icon: <FaWarehouse className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
              { label: "Supply Chain Management", icon: <FaLink className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
              { label: "Project Cargo Handling", icon: <FaProjectDiagram className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
            ].map((service, idx) => (
              <button
                key={service.label}
                className="flex items-center gap-3 px-6 py-3 font-semibold text-blue-900 transition bg-white border border-blue-200 rounded-full shadow group hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-400 hover:text-white"
                onClick={() => window.location.href = "/services"}
              >
                {service.icon}
                {service.label}
              </button>
            ))}
          </div>
          {/* Vertical line */}
          <div className="hidden md:block h-[340px] w-0.5 bg-blue-700 mx-8"></div>
          {/* Right side buttons */}
          <div className="flex flex-col gap-6">
            {[
              { label: "E-Commerce Logistics", icon: <FaShoppingCart className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
              { label: "Temperature Controlled Transport", icon: <FaSnowflake className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
              { label: "Cargo Insurance", icon: <FaShieldAlt className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
              { label: "Last Mile Delivery", icon: <FaRocket className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
            ].map((service, idx) => (
              <button
                key={service.label}
                className="flex items-center gap-3 px-6 py-3 font-semibold text-blue-900 transition bg-white border border-blue-200 rounded-full shadow group hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-400 hover:text-white"
                onClick={() => window.location.href = "/services"}
              >
                {service.icon}
                {service.label}
              </button>
            ))}
          </div>
        </div>
      </section>


      <div className="w-full px-0 mx-auto">
        <MeatTeam />
      </div>

    </main>
  );
}