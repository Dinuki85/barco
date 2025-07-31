"use client"
import { FaBullseye, FaEye } from "react-icons/fa";
import Footer from "../components/Footer";
import { FaShippingFast, FaClipboardList, FaWarehouse, FaProjectDiagram, FaLink, FaShoppingCart, FaSnowflake, FaShieldAlt, FaRocket } from "react-icons/fa";
import MeatTeam from "../components/MeatTeam";
import { motion } from "framer-motion";
import { useState } from "react";


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

const tabContent = {
  History: `Founded in 1984, Barco Global Logistics began with a commitment to revolutionize supply chain management...`,
  Vision: `To be the most trusted logistics partner, enabling seamless global trade and growth for our clients.`,
  Mission: `Deliver innovative, efficient, and transparent logistics solutions that empower businesses to thrive in a connected world.`,
};

function AnimatedParagraph({ text }) {
  const words = text.split(" ");
  return (
    
    <motion.p
      className="flex flex-wrap mb-8 text-lg text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
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
   const [selectedTab, setSelectedTab] = useState("History");
  return (
    <>
    {/* Top full-width image */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 h-[200px] md:h-[450px] lg:h-[550px] bg-black">
        <img
          src="/assets/barco1.png" // <-- use your high quality image path here
          alt="About Barco Global Logistics"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
    <main className="min-h-screen px-4 pt-20 pb-12 ">
   {/* Why Choose Us Section */}
<section className="max-w-6xl mx-auto px-4 mb-20">
  {/* Heading + Image Grid */}
  <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
    {/* Left: Heading & Slogan */}
    <div>
      <motion.h1
        className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight text-gray-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
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

      {/* Underline */}
      <div className="w-100 h-0.5 mt-4 mb-6 bg-gray-400 rounded-full"></div>

      {/* Subheading */}
      <h3 className="text-xl font-medium text-blue-900">
        Beyond Logistics, It's Our Passion
      </h3>
    </div>

    {/* Right: Stacked Carousel */}
<div className="relative w-full h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-xl">
  <img
    src="/assets/barco1.png"
    alt="Stack 1"
    className="absolute inset-0 w-full h-full object-cover rounded-xl animate-stack1"
  />
  <img
    src="/assets/barco1.jpg"
    alt="Stack 2"
    className="absolute inset-0 w-full h-full object-cover rounded-xl animate-stack2"
  />
  <img
    src="/assets/barco2.jpg"
    alt="Stack 3"
    className="absolute inset-0 w-full h-full object-cover rounded-xl animate-stack3"
  />

  {/* Stack animation styles */}
  <style jsx>{`
    @keyframes stack1 {
      0%, 20% { opacity: 1; transform: translate(0, 0) scale(1); z-index: 3; }
      25%, 100% { opacity: 0; transform: translate(20px, 20px) scale(0.95); z-index: 1; }
    }

    @keyframes stack2 {
      0%, 45% { opacity: 0; transform: translate(20px, 20px) scale(0.95); z-index: 1; }
      50%, 70% { opacity: 1; transform: translate(0, 0) scale(1); z-index: 3; }
      75%, 100% { opacity: 0; transform: translate(20px, 20px) scale(0.95); z-index: 1; }
    }

    @keyframes stack3 {
      0%, 70% { opacity: 0; transform: translate(20px, 20px) scale(0.95); z-index: 1; }
      75%, 95% { opacity: 1; transform: translate(0, 0) scale(1); z-index: 3; }
      100% { opacity: 0; transform: translate(20px, 20px) scale(0.95); z-index: 1; }
    }

    .animate-stack1 {
      animation: stack1 5s infinite ease-in-out;
    }
    .animate-stack2 {
      animation: stack2 5s infinite ease-in-out;
    }
    .animate-stack3 {
      animation: stack3 5s infinite ease-in-out;
    }
  `}</style>
</div>
  </div>

  {/* Centered Paragraph */}
  {/* Centered and Justified Paragraph */}
<motion.p
  className="mt-12 text-base leading-relaxed text-justify text-gray-700 font-sans max-w-4xl mx-auto px-2"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  variants={letterVariants}
  transition={{ duration: 0.6 }}
>
  At Barco Global Logistics (Pvt) Ltd, we are more
   than just a logistics provider — we are 
    partners in global connectivity, builders of 
     supply chains, and catalysts for business transformation.
      With a firm belief in innovation and operational excellence, 
       have continuously evolved to meet the dynamic demands of the 
       logistics landscape. Established with a vision to revolutionize 
       the movement of goods, Barco began its journey with a strong 
       commitment to reliability, agility, and customer satisfaction. 
       Over the years, we have grown into a trusted name in the industry, 
       facilitating seamless trade and transport across borders and industries. 
       Our mission is to empower businesses by delivering tailored logistics solutions
        that simplify complexity, accelerate growth, and unlock global opportunities.
         At Barco, we bridge distances — not just geographically, but between ambition and achievement.
  </motion.p>
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

  {/* --------- ADD TAB + PARAGRAPH SECTION ABOVE BUTTONS --------- */}
  <div className="flex gap-6 mb-12 mt-8">
    {/* Left side - tab list */}
    <div className="flex flex-col justify-start gap-6 min-w-[140px]">
      {Object.keys(tabContent).map((tab) => {
        const isSelected = tab === selectedTab;
        return (
          <h4
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`cursor-pointer pb-2 font-semibold text-lg
              ${
                isSelected
                  ? "text-blue-700 border-b-4 border-transparent bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent"
                  : "text-gray-600 border-b-4 border-gray-300 hover:text-blue-400 hover:border-blue-400"
              }
              transition-colors duration-300`}
          >
            {tab}
          </h4>
        );
      })}
    </div>

    {/* Right side - paragraph content */}
    <motion.p
      key={selectedTab} // key to trigger re-animate on tab change
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-gray-700 text-justify flex-1"
    >
      {tabContent[selectedTab]}
    </motion.p>
  </div>

  {/* --------- EXISTING BUTTONS SECTION BELOW --------- */}
  <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
    {/* Left side buttons */}
    <div className="flex flex-col gap-6">
      {[
        { label: "Global Freight Solutions", icon: <FaShippingFast className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
        { label: "Customs & Compliance", icon: <FaClipboardList className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
        { label: "Warehousing & Distribution", icon: <FaWarehouse className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
        { label: "Supply Chain Management", icon: <FaLink className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
        { label: "Project Cargo Handling", icon: <FaProjectDiagram className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
      ].map((service) => (
        <motion.button
          key={service.label}
          className="flex items-center gap-3 px-6 py-3 font-semibold text-blue-900 transition bg-white border border-blue-200 rounded-full shadow group hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-400 hover:text-white"
          onClick={() => window.location.href = "/services"}
          variants={buttonLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          type="button"
        >
          {service.icon}
          {service.label}
        </motion.button>
      ))}
    </div>

    {/* Vertical line */}
    <div className="hidden md:block h-[340px] w-0.5 bg-blue-700 mx-8"></div>

    {/* Right side buttons */}
    <div className="flex flex-col gap-6 w-full md:w-1/2">
      {[
        { label: "E-Commerce Logistics", icon: <FaShoppingCart className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
        { label: "Temperature Controlled Transport", icon: <FaSnowflake className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
        { label: "Cargo Insurance", icon: <FaShieldAlt className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
        { label: "Last Mile Delivery", icon: <FaRocket className="text-2xl text-blue-700 transition-colors group-hover:text-black" /> },
      ].map((service) => (
        <motion.button
          key={service.label}
          className="flex items-center gap-3 px-6 py-3 font-semibold text-blue-900 transition bg-white border border-blue-200 rounded-full shadow group hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-400 hover:text-white"
          onClick={() => window.location.href = "/services"}
          variants={buttonRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.7 }}
          type="button"
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
    </>
  );
}