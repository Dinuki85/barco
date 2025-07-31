"use client"
import { FaBullseye, FaEye } from "react-icons/fa";
import Footer from "../components/Footer";
import { FaShippingFast, FaClipboardList, FaWarehouse, FaProjectDiagram, FaLink, FaShoppingCart, FaSnowflake, FaShieldAlt, FaRocket } from "react-icons/fa";
import MeatTeam from "../components/MeatTeam";
import { motion } from "framer-motion";


const heading = "About Us";
const heading2 = "Why Choose Us";
const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const zigzagVariants = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60, y: -30 },
  visible: { opacity: 1, x: 0, y: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
});

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const buttonLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
};
const buttonRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
};

function AnimatedParagraph({ text }) {
  const words = text.split(" ");
  return (
    <motion.p
      className="flex flex-wrap mb-8 text-lg text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
      variants={{
        visible: { transition: { staggerChildren: 0.07 } }
      }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={wordVariants}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 pt-20 pb-12 ">
      <section className="grid items-center max-w-5xl grid-cols-1 gap-8 mx-auto mb-16 md:grid-cols-2">
        {/* Left: About Content */}
        <div>
          <motion.h1
            className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.7 }}
          >
            {heading.split("").map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                className={char === " " ? "mx-2" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="mb-6 text-lg text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={letterVariants}
            transition={{ duration: 0.6 }}
          >
            Barco Global Logistics (PVT) LTD is a leading provider of global logistics and supply chain solutions, delivering reliability, speed, and transparency for businesses worldwide.
            <br /><br />
            With a global network and a commitment to innovation, we help our clients move goods efficiently and securely across borders.
          </motion.p>
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
        {/* Vision */}
        <motion.div
          className="flex items-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={zigzagVariants("left")}
        >
          <FaEye className="mr-3 text-2xl text-blue-900" />
          <h2 className="text-3xl font-bold text-blue-900">Vision</h2>
        </motion.div>
        <AnimatedParagraph text="To be the most trusted logistics partner, enabling seamless global trade and growth for our clients." />

        {/* Mission */}
        <motion.div
          className="flex items-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          variants={zigzagVariants("right")}
        >
          <FaBullseye className="mr-3 text-2xl text-blue-900" />
          <h2 className="text-3xl font-bold text-blue-900">Mission</h2>
        </motion.div>
        <AnimatedParagraph text="Deliver innovative, efficient, and transparent logistics solutions that empower businesses to thrive in a connected world." />
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
        <motion.h1
          className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
        >
          {heading2.split("").map((char, idx) => (
            <motion.span
              key={idx}
              variants={letterVariants}
              className={char === " " ? "mx-2" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mb-6 text-lg text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={letterVariants}
          transition={{ duration: 0.6 }}
        >          Barco Global Logistics stands out for our reliability, transparency, and customer-first approach. We leverage advanced technology and a dedicated team to ensure your shipments arrive safely and on time, every time. Discover our comprehensive services designed to help your business grow.
        </motion.p>
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
              <motion.button
                key={service.label}
                className="flex items-center gap-3 px-6 py-3 font-semibold text-blue-900 transition bg-white border border-blue-200 rounded-full shadow group hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-400 hover:text-white"
                onClick={() => window.location.href = "/services"}
                variants={buttonLeftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.7 }}
              >
                {service.icon}
                {service.label}
              </motion.button>
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
              <motion.button
                key={service.label}
                className="flex items-center gap-3 px-6 py-3 font-semibold text-blue-900 transition bg-white border border-blue-200 rounded-full shadow group hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-400 hover:text-white"
                onClick={() => window.location.href = "/services"}
                variants={buttonRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.7 }}
              >
                {service.icon}
                {service.label}
              </motion.button>
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