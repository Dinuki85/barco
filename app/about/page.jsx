"use client"

import { FaShippingFast, FaClipboardList, FaWarehouse, FaProjectDiagram, FaLink, FaShoppingCart, FaSnowflake, FaShieldAlt, FaRocket } from "react-icons/fa";
import MeatTeam from "../components/MeatTeam";
import { motion } from "framer-motion";
import { useState } from "react";
import ParallaxImage from "../components/ParallaxImage";


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
  History: `At Business Artica  (Pvt) Ltd, we are more than a logistics provider — we are the driving force behind efficient, reliable, and innovative supply chain solutions. Since our inception, we have been dedicated to bridging the gap between businesses and markets with precision, speed, and care. Founded on the principles of integrity and customer-centric service, Barco Global Logistics has evolved into a trusted global partner, delivering tailored logistics and freight services that empower our clients to thrive in a dynamic international marketplace. With decades of expertise and a forward-thinking approach, we continue to set the standard for excellence in logistics across borders and industries.`,
  Vision: `To transform the logistics industry by setting the highest benchmarks for innovation, efficiency, and sustainability. We envision a world where businesses connect effortlessly, borders become gateways, and opportunities are boundless. Through advanced technology, eco-friendly solutions, and an unwavering commitment to excellence, we strive to be the driving force that reshapes global trade. By consistently surpassing expectations, embracing progress, and delivering unmatched value, we aim to be the trusted global leader shaping the future of logistics.`,
  Mission: `At Business Artica (Pvt) Ltd, our mission is to be a catalyst for global trade and business growth. We are committed to delivering innovative, dependable, and customized logistics solutions that enable our clients to succeed in an ever-evolving marketplace. Driven by excellence and a customer-first mindset, we work tirelessly to create seamless supply chains, overcome logistical challenges, and unlock new opportunities. Leveraging our expertise, advanced technology, and relentless dedication, we strive to be the trusted partner that businesses rely on to navigate the complexities of logistics with confidence and ease.`,
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
          src="/assets/barco12.png" // <-- use your high quality image path here
          alt="About Business Artica"
          className="object-cover w-full h-full"
          loading="eager"
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
              <div className="w-100 h-0.5 mt-4 mb-6 bg-gray-500 rounded-full"></div>

              {/* Subheading */}
              <h3 className="text-xl font-medium text-blue-900">
                Beyond Logistics, It's Our Passion
              </h3>
            </div>

            {/* Right: Stacked Carousel */}
            <div className="relative w-full overflow-hidden shadow-xl h-72 md:h-80 lg:h-96 rounded-xl">
              <img
                src="/assets/barco14.jpg"
                alt="Stack 1"
                className="absolute inset-0 object-cover w-full h-full rounded-xl animate-stack1"
              />
              <img
                src="/assets/barco30.jpg"
                alt="Stack 2"
                className="absolute inset-0 object-cover w-full h-full rounded-xl animate-stack2"
              />
              <img
                src="/assets/barco31.jpg"
                alt="Stack 3"
                className="absolute inset-0 object-cover w-full h-full rounded-xl animate-stack3"
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


          {/* Centered and Justified Paragraph */}
          <motion.p
            className="max-w-4xl px-2 mx-auto mt-12 font-sans text-base leading-relaxed text-justify text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={letterVariants}
            transition={{ duration: 0.6 }}
          >
            At Business Artica (Pvt) Ltd, we are more
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
            <div className="w-full text-sm leading-relaxed text-gray-700 md:w-1/2">
              <h2 className="mb-6 text-xl font-semibold ">Why Choose Barco Global Logistics(PVT) Ltd?</h2>
              <ol className="space-y-4 list-decimal list-inside">
                <li><strong>Reliability:</strong> Our track record speaks for itself. With a commitment to on-time deliveries and secure handling, your cargo is in safe hands.</li>
                <li><strong>Innovation:</strong> In a rapidly evolving industry, we stay ahead of the curve by adopting cutting-edge technologies and creative solutions that streamline your supply chain.</li>
                <li><strong>Global Reach:</strong> No destination is too far. Our extensive network of partners and agents spans the globe, ensuring your goods reach their destination, no matter where that may be.</li>
                <li><strong>Transparency:</strong> We believe in open communication. Throughout the journey, you’ll have real-time access to tracking and updates, giving you peace of mind.</li>
                <li><strong>Sustainability:</strong> Responsibility is at the heart of what we do. We’re committed to reducing our environmental footprint and promoting eco-friendly practices.</li>
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
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="object-cover w-full h-64 transition-transform duration-300 ease-in-out hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>


        <div className="w-full px-0 mx-auto">
          <MeatTeam />
        </div>

      </main>
    </>
  );
}