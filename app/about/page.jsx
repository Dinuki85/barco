"use client"

import { FaShippingFast, FaClipboardList, FaWarehouse, FaProjectDiagram, FaLink, FaShoppingCart, FaSnowflake, FaShieldAlt, FaRocket } from "react-icons/fa";
import MeetTeam from "../components/MeetTeam";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ParallaxImage from "../components/ParallaxImage";



const heading = "Our Identity";
const heading2 = "Strategic edge";
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
  History: `Nexa Global was founded on a singular premise: that the future of trade belongs to those who can master its complexity. We didn't just start a logistics company; we engineered a platform for global growth. From our initial launch, we've focused on integrating high-level strategy with granular operational execution. Today, Nexa Global stands as a beacon of intelligent logistics, orchestrating supply chains that are as resilient as they are efficient. We've moved beyond traditional freight forwarding to become the digital backbone for international commerce.`,
  Vision: `To establish Nexa Global as the definitive standard for intelligent, sustainable, and hyper-efficient global supply chains. We envision a world where logistics is no longer a bottleneck but a competitive advantage. Through proprietary algorithms, a commitment to zero-carbon initiatives, and a passion for architectural excellence in trade, we are building the gateways of tomorrow. Our vision is to empower every global innovator with the tools to connect, scale, and lead in a borderless economy.`,
  Mission: `Our mission is to architect the world's most adaptive logistics ecosystem. We provide mission-critical supply chain solutions that enable global enterprises to operate with speed, precision, and total transparency. By combining advanced predictive analytics with a relentless focus on client success, we solve the most complex logistical challenges before they even arise. We are the trusted partners that growth-oriented businesses rely on to navigate the global landscape with absolute confidence.`,
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
        <Image
          src="/assets/barco2.jpg"
          alt="About Nexa Global"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <main className="min-h-screen px-4 pt-20 pb-12 ">


        {/* Why Choose Us Section */}
        <section className="max-w-6xl px-4 mx-auto mb-20">
          {/* Heading + Image Grid */}
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left: Heading & Slogan */}
            <div>
              <motion.h1
                className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-800"
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
              <div className="w-100 h-0.5 mt-4 mb-6 bg-accent rounded-full"></div>

              {/* Subheading */}
              <h3 className="text-xl font-bold tracking-tight text-primary">
                Intelligent Logistics, Orchestrated.
              </h3>
            </div>

            {/* Right: Stacked Carousel */}
            <div className="relative w-full overflow-hidden shadow-xl h-72 md:h-80 lg:h-96 rounded-xl">
              <div className="absolute inset-0 animate-stack1">
                <Image src="/assets/barco14.jpg" alt="Stack 1" fill className="object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 500px" />
              </div>
              <div className="absolute inset-0 animate-stack2">
                <Image src="/assets/barco30.jpg" alt="Stack 2" fill className="object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 500px" />
              </div>
              <div className="absolute inset-0 animate-stack3">
                <Image src="/assets/barco31.jpg" alt="Stack 3" fill className="object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 500px" />
              </div>


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


          {/* Centered and Justified Paragraph */}
          <motion.p
            className="max-w-4xl px-2 mx-auto mt-12 font-sans text-lg leading-relaxed text-justify text-slate-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={letterVariants}
            transition={{ duration: 0.6 }}
          >
            Nexa Global represents the convergence of deep domain expertise and next-generation 
            technology. We are more than just a logistics provider — we are the strategic architects 
            of your growth. Since our inception, we have been committed to simplifying the 
            complexities of global trade, providing our partners with the speed and precision 
            required to lead in a competitive world.
            <br /><br />
            Our approach is built on a foundation of reliability, transparency, and relentless 
            innovation. We don't just move cargo; we move your business forward. At Nexa Global, 
            we bridge the gap between global ambition and local execution, ensuring every 
            milestone of your supply chain is a step toward greater success.
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
            className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-800"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
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

          {/*UNDERLINE */}

          <div className="w-100 h-0.5 mt-4 mb-6 bg-gray-500 rounded-full"></div>

          {/* Subheading */}
          <h3 className="text-xl font-medium text-blue-900">
            Beyond Logistics, It's Our Passion
          </h3>

          {/* --------- ADD TAB + PARAGRAPH SECTION ABOVE BUTTONS --------- */}
          <div className="flex items-start gap-6 mt-8 mb-12">
            {/* Left side - tab list */}
            <div className="flex flex-col justify-start gap-6 min-w-[140px]">
              {Object.keys(tabContent).map((tab) => {
                const isSelected = tab === selectedTab;
                return (
                  <h4
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`cursor-pointer pb-2 font-semibold text-lg
            ${isSelected
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
              className="flex-1 text-justify text-gray-700"
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
            <div className="flex flex-col w-full gap-6 md:w-1/2">
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
        {/* New Large Image + Text Section */}
        <section className="w-full max-w-6xl px-4 mx-auto mt-20">
          <div className="flex flex-col items-center gap-10 md:flex-row">

            {/* Left: Image with no animation */}
            <ParallaxImage
              src="/assets/barco34.jpg" // Replace with your actual large image path
              alt="Elevating Business through Next-Level Logistics"
              className="w-full md:w-1/2" // Ensures the image takes up half of the width
            />

            {/* Right: Text content */}
            <div className="w-full text-base leading-relaxed text-slate-600 md:w-1/2">
              <h2 className="mb-6 text-3xl font-black tracking-tighter text-slate-900">The Nexa Advantage</h2>
              <ol className="space-y-6 list-decimal list-inside">
                <li><strong className="text-slate-900">Technical Precision:</strong> Our systems are engineered for total accuracy, ensuring your data and cargo are perfectly synchronized.</li>
                <li><strong className="text-slate-900">Predictive Logic:</strong> We use industry-leading analytics to anticipate bottlenecks and optimize routes before challenges arise.</li>
                <li><strong className="text-slate-900">Global Connectivity:</strong> Our hyper-scaled network ensures your business has local presence in every major market worldwide.</li>
                <li><strong className="text-slate-900">Absolute Transparency:</strong> Real-time peering into every movement provides the clarity needed for confident decision-making.</li>
                <li><strong className="text-slate-900">Resilient Growth:</strong> We architect supply chains that are built to scale, ensuring your logistics infrastructure grows with you.</li>
              </ol>
            </div>

          </div>
        </section>


        {/* Beyond Logistics Image Grid Section */}
        <section className="max-w-6xl px-4 mx-auto mt-20">
          {/* Subheading */}
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-extrabold text-black">Beyond Business, It's Our Aim</h2>
            <p className="text-base text-gray-600">A  journey through our commitment, precision, and innovation</p>
            <div className="w-20 mx-auto mt-4 bg-blue-600 rounded-full h-100"></div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/assets/barco6.jpg",
              "/assets/barco11.jpg",
              "/assets/barco21.jpeg",
              
             

            ].map((src, idx) => (
              <div key={idx} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}

          </div>
        </section>


        <div className="w-full px-0 mx-auto">
          <MeetTeam />
        </div>

      </main>
    </>
  );
}