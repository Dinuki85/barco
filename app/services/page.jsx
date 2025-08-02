"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaShippingFast, FaPlus, FaMinus } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import {
  MdOutlineLocalShipping,
  MdOutlineSupportAgent,
  MdWarehouse,
} from "react-icons/md";
import MeatTeam from "../components/MeatTeam";

const slides = [
  { image: "/assets/barco14.jpg" },
  { image: "/assets/barco13.jpeg" },
  { image: "/assets/barco11.jpg" },
];

const heading = "Logistics Capabilities";

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};
const ulVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};
const liVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};
const h2ContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
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
      "At Barco Global Logistics, our warehousing and distribution service offers more than just storage — it’s a strategic backbone of your supply chain. With cutting‑edge security systems, climate control options, fire safety protocols and scalable racking designs across multiple strategically placed facilities, we ensure your cargo is protected and stored under optimal conditions. Our advanced Warehouse Management System integrates real‑time tracking, automated stock alerts and comprehensive reporting to help you manage inventory with precision. We also provide tailored distribution services, coordinating shipment routing, consolidation and carrier negotiation to ensure goods are dispatched efficiently and cost‑effectively. Whether you operate in retail, manufacturing or e‑commerce, we provide customized workflows, transparent processes and proactive planning to meet fluctuating demands. Our dedicated logistics team works closely with clients to align warehouse throughput with delivery schedules, thereby reducing lead times and minimizing inventory holding costs. With our focus on green initiatives, energy‑efficient lighting, reusable packaging and low‑emission transport partners, we help you reduce environmental impact while supporting scalability. Ultimately, this integrated warehousing and distribution solution delivers operational efficiency, inventory accuracy and sustainable logistics performance to empower your business growth.",
    image: "/assets/barco31.jpg",
  },
  {
    id: "freight",
    title: "Freight Forwarding",
    description:
      "Barco Global Logistics’ freight forwarding service acts as a global logistics concierge — making international shipping seamless and stress‑free. Leveraging a vast network of trusted carriers across sea, air and land routes, we negotiate competitive rates and optimal transit times tailored to your cargo type and destination. Our team handles every detail — bill of lading, export/import documentation, customs declarations, duties, and compliance regulations — to ensure shipments move smoothly without delays. We offer door‑to‑door tracking, shipment consolidation for cost‑efficiency, and scalable options that support both small‑quantity e‑commerce parcels and full container loads. With real‑time updates, proactive alerts and transparent status communication, you remain informed at every stage. Our industry expertise enables us to mitigate risks such as port congestion, customs holds or regulatory changes — helping you avoid unexpected costs or disruptions. Whether you're shipping perishables, hazardous goods or retail merchandise, our tailored freight forwarding service prioritizes reliability, visibility and cost control to help your supply chain adapt and thrive.",
    image: "/assets/barco26.jpg",
  },
  {
    id: "supply",
    title: "Supply Chain Management",
    description:
      "Barco Global Logistics delivers comprehensive supply chain management solutions that unify all logistics processes under one coordinated plan. From procurement and inventory planning to warehousing, transportation, and delivery, we integrate operations to eliminate silos and boost efficiency. Using state‑of‑the‑art software, we provide live tracking dashboards, demand forecasting, order validation, and performance analytics — enabling well‑informed decisions and swift reaction to disruptions. Our team consults on layout optimization, supplier coordination, shipment timing and inventory buffers to reduce waste and improve throughput. Through continuous monitoring and communication with all stakeholders, delays in procurement or transport are flagged early and resolved without affecting customer deliveries. With our focus on cost reduction and increased visibility, we support just‑in‑time delivery and lean inventory strategies while maintaining buffer safety stocks. Ultimately, our integrated supply chain management approach helps you maintain operational agility, reduce costs and scale logistics without losing control.",
    image: "/assets/barco27.jpg",
  },
  {
    id: "ecommerce",
    title: "E‑commerce Logistics",
    description:
      "For fast‑growing online retailers, Barco Global Logistics offers tailored e‑commerce logistics that prioritize customer experience and operational efficiency. Our services include fast order fulfillment, flexible inventory allocation across fulfillment centers, easy returns processing and customizable delivery options. With real‑time order and shipment tracking, branded notifications, multi‑carrier routing and transparent rate choices, your customers enjoy a seamless digital purchase experience. We support omnichannel strategies by synchronizing inventory, order status and fulfillment across online marketplace platforms and physical stores. Our reverse logistics program simplifies returns and exchanges, reducing processing time and improving customer satisfaction. With scalable infrastructure, weekend fulfillment and surge handling during promotional periods, we enable consistent service during peak demand. Through data insights on package status, delivery windows and feedback loops, we continuously refine logistics flow. In combining speed, flexibility and transparent communication, our e‑commerce logistics empowers brands to outperform expectations and build loyalty.",
    image: "/assets/barco19.jpeg",
  },
  {
    id: "lastmile",
    title: "Last‑Mile Delivery",
    description:
      "Barco Global Logistics understands that the final leg of delivery is critical — it’s where the promise meets the customer. Our last‑mile delivery network is built for speed, visibility and reliability — offering home and commercial deliveries with precise routing, real‑time GPS tracking and live ETA notifications. We offer flexible delivery slots, weekend schedules and safe handling protocols to ensure packages arrive intact and on time. Our operations include transparent tracking interfaces, proof‑of‑delivery confirmation and customer support to resolve delays or missed deliveries. Whether delivering bulky goods or small parcels, our scalable fleet adapts to geographic and volume demands. We constantly monitor delivery performance, customer feedback and route efficiency to optimize speed and satisfaction. By turning final‑mile delivery into a dependable experience, we help you enhance brand reputation, lower return rates and increase customer loyalty — giving you a measurable competitive edge in today’s fast‑moving market.",
    image: "/assets/barco1.png",
  },
];

const additionalServices = [
  {
    id: "customs",
    title: "Customs Clearance",
    description:
      "Our customs clearance service ensures smooth cross‑border movement through expert documentation management, duty calculation, regulatory compliance and proactive communication with authorities.",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description:
      "We support demand planning, real‑time stock monitoring, inventory audits and replenishment automation to maintain optimal stock levels without overage or shortage.",
  },
  {
    id: "packaging",
    title: "Packaging Solutions",
    description:
      "Our packaging experts deliver custom solutions — from protective wrapping, labelling and pallets to eco‑friendly packaging strategies — to protect goods and uphold brand image.",
  },
  {
    id: "express",
    title: "Express Delivery",
    description:
      "For urgent shipments, our express delivery service guarantees rapid transit times, priority handling, fast tracking, and time‑sensitive support.",
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
    <motion.img
      key={idx}
      src={slide.image}
      alt={`Slide ${idx + 1}`}
      className="absolute inset-0 object-cover w-full h-full"
      initial={{ scale: 1.1, opacity: 0.15 }}
      animate={{ scale: 1, opacity: 0.2 }}
      transition={{ duration: 10, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      draggable={false}
      style={{ zIndex: idx + 1 }}
    />
  ))}
</div>

      {/* Heading */}
      <div className="relative w-full px-4 pt-10 pb-0 md:px-[8%] lg:px-[10%]">
        <div className="flex flex-col w-full gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 text-left">
            <motion.h1
              className="inline-block font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-800"
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
            <hr className="w-1/2 mt-4 mb-4 border-4 border-light-blue-300" />
            <motion.h2
              className="flex flex-wrap items-center font-serif text-sm font-thin text-left sm:text-xl md:text-2xl"
              variants={h2ContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {"Delivering Possibilities, On Time".split("").map((word, idx) => (
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
            <motion.img
              key={activeService.id}
              src={activeService.image}
              alt={`${activeService.id} background`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none select-none"
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
          <div className="w-full lg:w-[40%]">
            <img
              src="/assets/barco10.jpeg"
              alt="Additional Services"
              className="object-cover w-full h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-0 mx-auto">
        <MeatTeam />
      </div>
    </div>
  );
}
