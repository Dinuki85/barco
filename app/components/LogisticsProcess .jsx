"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaTruck, FaBoxes, FaWarehouse, FaShippingFast } from "react-icons/fa";
import { MdLocalShipping, MdOutlineInventory2 } from "react-icons/md";


const centerServices = [
  "Freight Services",
  "Courier Services",
  "Customs Clearance",
  "Warehousing & Distribution",
  "Supply Chain Management",
  "Project Cargo Handling",
];

const topItems = [
  {
    title: "Order Placement",
    description:
      "The process begins when a customer places an order for goods through various channels, such as a website, phone, or in-person.",
    icon: <FaTruck className="text-5xl text-blue-800 animate-pulse" />,
  },
  {
    title: "Inventory Management",
    description:
      "Managing inventory involves monitoring stock levels, replenishing items as needed, and avoiding overstock or stockouts.",
    icon: <MdOutlineInventory2 className="text-5xl text-blue-800 animate-pulse" />,
  },
  
];

const fadeInUp = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};



const bottomItems = [
  {
    title: "Transportation",
    description:
      "Select the appropriate transportation modes (road, rail, air, sea) based on distance, cost, and speed.",
    icon: <MdLocalShipping className="text-5xl text-blue-800 animate-pulse" />,
  },
  {
    title: "Order Warehousing & Storage",
    description:
      "Goods are stored in warehouses or distribution centers. Proper organization and retrieval ensures efficiency.",
    icon: <FaWarehouse className="text-5xl text-blue-800 animate-pulse" />,
  },
  
  
];

const textMotion = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: [30, -10, 0, 10, 0],
    transition: {
      repeat: Infinity,
      repeatDelay: 1,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const LogisticsProcess = () => {
  return (
    <section className="w-full px-4 py-16 bg-white md:px-12 lg:px-24">
      {/* Top Icons Row */}
      <div className="grid grid-cols-1 gap-10 mb-12 md:grid-cols-2 place-items-center">
        {topItems.map((item, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-xs p-6 text-center transition-all shadow-md rounded-xl bg-blue-900/10 hover:bg-blue-800/20"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated Center Bar */}
      <div className="relative flex items-center justify-center h-[120px] overflow-hidden my-10 px-4">
        {/* Outer card wrapper */}
        <div className="absolute z-0 w-full h-full max-w-6xl mx-auto border border-blue-300 shadow-lg rounded-2xl bg-gradient-to-r from-blue-900/60 via-blue-500/40 to-blue-300/30 backdrop-blur-sm" />

        {/* Center line */}
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-800 opacity-40 z-10" />

        {/* Animated Text Row */}
        <div className="absolute z-20 flex w-full max-w-6xl mx-auto overflow-hidden">
          {[0, 1].map((loopIndex) => (
            <motion.div
              key={loopIndex}
              className="flex gap-6 px-4 shrink-0 whitespace-nowrap"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              style={{ minWidth: "100%" }}
            >
              {centerServices.map((service, index) => (
                <span
                  key={`${loopIndex}-${index}`}
                  className="inline-block px-6 py-2 text-xl font-semibold text-blue-800 border border-blue-400 rounded-lg shadow-md md:text-2xl bg-gradient-to-r from-blue-50 to-white"
                >
                  {service}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Icons Row */}
      <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 place-items-center">
        {bottomItems.map((item, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-xs p-6 text-center transition-all shadow-md rounded-xl bg-blue-900/10 hover:bg-blue-800/20"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LogisticsProcess;
