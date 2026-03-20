"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { FaShippingFast, FaPlus, FaMinus } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import {
  MdOutlineLocalShipping,
  MdOutlineSupportAgent,
  MdWarehouse,
} from "react-icons/md";
import MeetTeam from "../components/MeetTeam";

const heading = "Strategic Solutions";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

const h2ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.03,
        },
    },
};

const h2LetterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const liVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const slides = [
  { image: "/assets/barco14.jpg" },
  { image: "/assets/barco13.jpeg" },
  { image: "/assets/barco11.jpg" },
];


// ... (skipping unchanged variants)

const detailedServices = [
  {
    id: "warehousing",
    title: "Intelligent Warehousing",
    description:
      "At Nexa Global, our warehousing ecosystems are engineered for maximum throughput and absolute precision. We don't just store goods; we manage mission-critical inventory through a network of high-security, climate-controlled hubs. Powered by proprietary WMS technology, our facilities offer real‑time visibility and predictive stock management. From automated retrieval systems to scalable racking architectures, we ensure your assets are protected and ready for rapid deployment across any global market.",
    image: "/assets/barco31.jpg",
  },
  {
    id: "freight",
    title: "Global Interconnect",
    description:
      "Nexa Global's freight forwarding is the digital link in your international trade strategy. We orchestrate complex multi-modal movements across sea, air, and land with surgical precision. By leveraging a hyper-scaled network of premium carriers, we secure priority capacity and optimized transit routes. Our architects handle every aspect of global compliance, from advanced documentation to tactical customs navigation, ensuring your capital remains in motion and your supply chain stays resilient.",
    image: "/assets/barco26.jpg",
  },
  {
    id: "supply",
    title: "Supply Chain Architecture",
    description:
      "We deliver high-fidelity supply chain management that transforms logistics into a competitive advantage. Nexa Global integrates every touchpoint—from source procurement to final delivery—into a single, transparent workflow. Utilizing predictive analytics and real-time peering, we identify and mitigate risks before they impact your operations. Our consultants architect lean, adaptive systems that reduce waste, accelerate cycles, and empower you to scale with absolute confidence.",
    image: "/assets/barco27.jpg",
  },
  {
    id: "ecommerce",
    title: "Next-Gen E-Commerce",
    description:
      "Designed for the world's most ambitious digital brands, Nexa Global's e-commerce logic prioritizes high-velocity fulfillment and premium customer experience. We provide multi-node inventory positioning, automated order processing, and seamless omnichannel integration. Our systems are built to handle massive surge events with zero latency, providing your customers with the rapid, reliable delivery they expect. With branded tracking and tactical reverse logistics, we turn fulfillment into a loyalty engine.",
    image: "/assets/barco19.jpeg",
  },
  {
    id: "lastmile",
    title: "Precision Last-Mile",
    description:
      "The final touch is the most critical. Nexa Global's last-mile network is engineered for the highest standards of reliability and visual transparency. We offer hyper-local delivery solutions with real-time GPS orchestration and exact-window notifications. Our fleet is adaptive, handling everything from high-value white-glove installations to high-volume parcel drops. By obsessing over delivery performance and customer feedback, we protect your brand's reputation at the point of impact.",
    image: "/assets/barco1.png",
  },
];

const additionalServices = [
  {
    id: "customs",
    title: "Tactical Customs Navigation",
    description:
      "Our compliance experts ensure seamless border transits through advanced classification, automated duty calculation, and proactive regulatory peering across all global jurisdictions.",
  },
  {
    id: "inventory",
    title: "Predictive Inventory Logic",
    description:
      "Harness real-time data to optimize stock levels, minimize holding costs, and ensure 100% availability through automated replenishment and demand-sensing technology.",
  },
  {
    id: "packaging",
    title: "Engineered Packaging",
    description:
      "From high-impact industrial protective systems to premium sustainable consumer materials, our packaging solutions are designed to protect both your product and your brand's image.",
  },
  {
    id: "express",
    title: "Mission-Critical Express",
    description:
      "When timing is everything, our priority express circuits guarantee the fastest possible transit through dedicated handlers and expedited global clearance channels.",
  },
];

export default function ServicesPage() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const [activeId, setActiveId] = useState(detailedServices[0].id);
  const [accordionOpen, setAccordionOpen] = useState("");

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const activeService = detailedServices.find((s) => s.id === activeId);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
     {/* Hero Section */}
<div className="relative w-full h-[550px] pt-16 overflow-hidden">
  {slides.map((slide, idx) => (
    <motion.div
      key={idx}
      className="absolute inset-0 w-full h-full"
      initial={{ scale: 1.1, opacity: 0.15 }}
      animate={{ scale: 1, opacity: 0.2 }}
      transition={{ duration: 10, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      style={{ zIndex: idx + 1 }}
    >
      <Image
        src={slide.image}
        alt={`Slide ${idx + 1}`}
        fill
        priority={idx === 0}
        className="object-cover"
        draggable={false}
        sizes="100vw"
      />
    </motion.div>
  ))}

</div>

      {/* Heading */}
      <div className="relative w-full px-4 pt-10 pb-0 md:px-[8%] lg:px-[10%]">
        <div className="flex flex-col w-full gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 text-left">
            <motion.h1
              className="inline-block font-sans text-3xl font-black tracking-tighter leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-900"
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
            <hr className="w-1/2 mt-4 mb-4 border-4 border-accent" />
            <motion.h2
              className="flex flex-wrap items-center font-sans text-sm font-bold tracking-tight text-left sm:text-xl md:text-2xl text-primary"
              variants={h2ContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {"Intelligent Logistics, Orchestrated".split("").map((word, idx) => (
                <motion.span key={idx} variants={h2LetterVariants} className="mr-2">
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <motion.ul
            className="grid flex-1 max-w-2xl grid-cols-1 gap-6 py-3 font-serif list-none lg:text-sm sm:grid-cols-2 md:grid-cols-2 sm:text-lg"
            variants={ulVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[
              [MdWarehouse, "Warehousing and Distribution"],
              [FaShippingFast, "Freight Forwarding"],
              [GiCargoCrate, "Supply Chain Management"],
              [MdOutlineLocalShipping, "E‑commerce Logistics"],
              [MdOutlineSupportAgent, "Last‑Mile Delivery"],
              [MdWarehouse, "Inventory Management"],
              [FaShippingFast, "Customs Clearance"],
              [GiCargoCrate, "Packaging Solutions"],
              [MdOutlineLocalShipping, "Express Delivery"],
            ].map(([Icon, label], i) => (
              <motion.li
                key={i}
                variants={liVariants}
                className="flex items-center gap-2"
              >
                <Icon className="text-xl text-blue-700" /> {label}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Tab Section */}
      <div className="flex flex-col gap-10 px-4 py-12 mx-auto lg:flex-row max-w-7xl md:px-8">
        <div className="relative flex-1 px-6 py-6 bg-gray-50 rounded-lg overflow-hidden min-h-[450px] max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
            >
                <Image
                    src={activeService.image}
                    alt={`${activeService.id} background`}
                    fill
                    className="object-cover"
                    style={{ filter: "brightness(0.9)" }}
                    sizes="(max-width: 1024px) 100vw, 768px"
                />
            </motion.div>

            <motion.div
              key={activeService.id + "-desc"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 max-h-[450px] overflow-y-auto p-6"
            >
              <h2 className="mb-4 text-4xl font-semibold text-center text-slate-900">
                {activeService.title}
              </h2>
              <p className="font-sans text-sm leading-relaxed text-center text-gray-700">
                {activeService.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <nav className="flex flex-col w-56 gap-4">
          {detailedServices.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => setActiveId(id)}
              className={`relative text-sm py-2 text-left transition-colors duration-300 ${
                id === activeId
                  ? "text-blue-800 font-semibold"
                  : "text-gray-500 hover:text-blue-700"
              }`}
            >
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full transition-all duration-300 ${
                  id === activeId
                    ? "bg-gradient-to-r from-blue-900 via-blue-500 to-blue-600"
                    : "bg-transparent"
                }`}
              ></span>
              {title}
            </button>
          ))}
        </nav>
      </div>
      {/* Accordion Section */}
      <div className="flex justify-center w-full px-4 py-16">
        <div className="flex flex-col w-full gap-10 lg:flex-row max-w-7xl md:px-8">
          <div className="flex-1 space-y-4">
            {additionalServices.map(({ id, title, description }) => {
              const isOpen = accordionOpen === id;
              return (
                <div key={id} className="pb-2 border-b">
                  <button
                    onClick={() => setAccordionOpen(isOpen ? "" : id)}
                    className="flex items-center justify-between w-full text-lg font-semibold text-left transition-colors text-slate-800 hover:text-blue-700"
                  >
                    <h4>{title}</h4>
                    <span className="text-blue-700">
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 font-sans text-sm leading-relaxed text-gray-600"
                      >
                        {description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="w-full lg:w-[40%] relative min-h-[300px]">
            <Image
              src="/assets/barco10.jpeg"
              alt="Additional Services"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>

        </div>
      </div>

      <div className="w-full px-0 mx-auto">
        <MeetTeam />
      </div>
    </div>
  );
}
