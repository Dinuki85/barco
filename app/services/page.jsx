"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import {
  MdOutlineLocalShipping,
  MdOutlineSupportAgent,
  MdWarehouse,
} from "react-icons/md";

const slides = [
  { image: "/assets/barco1.png" },
  { image: "/assets/barco2.jpg" },
  { image: "/assets/barco1.png" },
];

const heading = "Logistics Capabilities";

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};
const ulVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const liVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const h2ContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};
const h2LetterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const detailedServices = [
  {
    id: "warehousing",
    title: "Warehousing and Distribution",
    description:
    "At Barco Global Logistics, we offer secure, scalable warehousing and tailored distribution services designed to optimize your supply chain. Our advanced facilities and cutting-edge inventory management systems ensure efficient storage and real-time tracking of diverse goods. We create customized distribution strategies that guarantee timely, cost-effective delivery across various industries. Fully integrated with our broader logistics solutions, our services streamline operations and enhance agility. Committed to sustainability, we implement eco-friendly practices and partner with green transportation providers. Focused on building lasting client relationships, we deliver personalized support and continuously invest in technology and infrastructure to help your business succeed.",
image: "/assets/barco1.png",
  },
  {
    id: "freight",
    title: "Freight Forwarding",
    description:
      "We provide comprehensive freight forwarding solutions that simplify international shipping, optimize costs, and guarantee safety across all transportation modes.",
    image: "/assets/barco2.jpg",
  },
  {
    id: "supply",
    title: "Supply Chain Management",
    description:
      "Our supply chain management service enhances efficiency by integrating all logistics activities, providing real-time visibility, and ensuring smooth operations.",
    image: "/assets/barco1.png",
  },
  {
    id: "ecommerce",
    title: "E-commerce Logistics",
    description:
      "Tailored logistics services designed to meet the rapid demands of e-commerce businesses including last-mile delivery, returns management, and customer experience enhancement.",
    image: "/assets/barco2.jpg",
  },
  {
    id: "lastmile",
    title: "Last-Mile Delivery",
    description:
      "We specialize in last-mile delivery ensuring your products reach customers quickly and reliably with a transparent tracking system.",
    image: "/assets/barco1.png",
  },
];

export default function ServicesPage() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // For tabs & content section
  const [activeId, setActiveId] = useState(detailedServices[0].id);

  const handleTabClick = (id) => {
    setActiveId(id);
  };

  // Find active service for rendering
  const activeService = detailedServices.find((s) => s.id === activeId);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Images Slideshow */}
      <div className="relative w-full h-[550px] pt-16">
        <AnimatePresence initial={false}>
          <motion.img
            key={slides[current].image}
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Header Section */}
      <div className="relative w-full px-4 pt-10 pb-0 md:px-[8%] lg:px-[10%]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between w-full">
          <div className="flex-1 text-left">
            <motion.h1
              className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-800 inline-block"
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
            <hr className="mt-4 mb-4 border-4 border-light-blue-300 w-1/2" />
            <motion.h2
              className="flex flex-wrap items-center text-left font-serif text-lg font-thin sm:text-xl md:text-2xl"
              variants={h2ContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {"Delivering Posibilities, On Time".split("").map((word, idx) => (
                <motion.span key={idx} variants={h2LetterVariants} className="mr-2">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <motion.ul
            className="grid max-w-2xl grid-cols-1 gap-6 py-3 font-serif lg:text-sm list-none sm:grid-cols-2 md:grid-cols-2 sm:text-lg flex-1"
            variants={ulVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <MdWarehouse className="text-xl text-blue-700 " />
              Warehousing and Distribution
            </motion.li>
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <FaShippingFast className="text-xl text-blue-700" />
              Freight Forwarding
            </motion.li>
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <GiCargoCrate className="text-xl text-blue-700" />
              Supply Chain Management
            </motion.li>
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <MdOutlineLocalShipping className="text-xl text-blue-700" />
              E-commerce Logistics
            </motion.li>
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <MdOutlineSupportAgent className="text-xl text-blue-700" />
              Last-Mile Delivery
            </motion.li>
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <MdWarehouse className="text-xl text-blue-700" />
              Inventory Management
            </motion.li>
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <FaShippingFast className="text-xl text-blue-700" />
              Customs Clearance
            </motion.li>
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <GiCargoCrate className="text-xl text-blue-700" />
              Packaging Solutions
            </motion.li>
            <motion.li variants={liVariants} className="flex items-center gap-2">
              <MdOutlineLocalShipping className="text-xl text-blue-700" />
              Express Delivery
            </motion.li>
          </motion.ul>
        </div>
      </div>

      {/* New Section: Left description + Right vertical tabs */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 md:px-8 py-12 gap-10">
        {/* Left side: Only show active paragraph with transparent background image */}
        <div className="relative flex-1 p-6 bg-gray-50 rounded-lg overflow-hidden min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeService.id}
              src={activeService.image}
              alt={`${activeService.id} background`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
              style={{ filter: "brightness(0.9)" }}
            />
           <motion.div
  key={activeService.id + "-desc"}
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -20 }}
  transition={{ duration: 0.5 }}
  className="relative z-10 max-h-[450px] overflow-y-auto p-6"
>
  <h2 className="mb-4 text-2xl font-semibold text-slate-900">{activeService.title}</h2>
  <p className="text-sm text-justify text-gray-700">{activeService.description}</p>
</motion.div>
          </AnimatePresence>
        </div>

        {/* Right side: vertical tabs */}
        <nav className="flex flex-col gap-4 w-56">
          {detailedServices.map(({ id, title }) => {
            const isActive = id === activeId;
            return (
              <button
                key={id}
                onClick={() => handleTabClick(id)}
                className={`relative text-sm py-2 text-left transition-colors duration-300 ${
                  isActive ? "text-blue-800 font-semibold" : "text-gray-500 hover:text-blue-700"
                }`}
                style={{ outline: "none" }}
              >
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-900 via-blue-500 to-blue-600"
                      : "bg-transparent"
                  }`}
                ></span>
                {title}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom simple services list */}
      <div className="flex flex-col items-center justify-center w-full bg-gray-100 py-16 px-4">
        <h1 className="mb-4 text-3xl font-bold">Our Services</h1>
        <p className="max-w-xl text-lg text-center mb-6">
          Discover the services we offer to help you succeed.
        </p>
        <ul className="text-lg list-disc list-inside space-y-2">
          <li>Global Shipping</li>
          <li>Secure Warehousing</li>
          <li>Customs Clearance</li>
          <li>Customer Support</li>
        </ul>
      </div>
    </div>
  );
}
