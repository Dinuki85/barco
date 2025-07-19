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
  {
    title: "Order Warehousing",
    description:
      "Goods are stored in warehouses or distribution centers. Proper organization and retrieval ensures efficiency.",
    icon: <FaWarehouse className="text-5xl text-blue-800 animate-pulse" />,
  },
];

const bottomItems = [
  {
    title: "Transportation",
    description:
      "Select the appropriate transportation modes (road, rail, air, sea) based on distance, cost, and speed.",
    icon: <MdLocalShipping className="text-5xl text-blue-800 animate-pulse" />,
  },
  {
    title: "Customs Handling",
    description:
      "We ensure that all customs regulations and clearances are properly handled for smooth international logistics.",
    icon: <FaShippingFast className="text-5xl text-blue-800 animate-pulse" />,
  },
  {
    title: "Package Sorting",
    description:
      "Efficient sorting processes for fast delivery at scale, tailored to your specific business needs.",
    icon: <FaBoxes className="text-5xl text-blue-800 animate-pulse" />,
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
      <div className="flex flex-col items-center justify-between gap-10 mb-12 md:flex-row">
        {topItems.map((item, index) => (
          <div key={index} className="max-w-xs text-center">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Animated Center Bar */}
      <div className="relative flex items-center justify-center h-[120px] overflow-hidden my-10">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-800 opacity-40" />
        <div className="z-10 px-4 py-2 bg-white border border-blue-300 rounded-md shadow-md animate-bounce">
          <motion.div
            className="text-xl font-bold text-blue-800 sm:text-2xl md:text-3xl whitespace-nowrap"
            variants={textMotion}
            initial="initial"
            animate="animate"
          >
            {centerServices.map((service, index) => (
              <motion.span
                key={index}
                className="inline-block px-6 py-2 mx-2 mb-1 text-blue-900 border border-blue-500 rounded-lg shadow-md bg-gradient-to-r from-blue-100 to-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.6,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Icons Row */}
      <div className="flex flex-col items-center justify-between gap-10 mt-12 md:flex-row">
        {bottomItems.map((item, index) => (
          <div key={index} className="max-w-xs text-center">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogisticsProcess;
