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
      {/* Animated Center Bar */}
<div className="relative flex items-center justify-center h-[100px] overflow-hidden my-10">
  <div className="absolute w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-800 opacity-40" />

  <motion.div
    className="absolute flex gap-6 whitespace-nowrap"
    animate={{ x: ["100%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear"
    }}
  >
    {centerServices.map((service, index) => (
      <span
        key={index}
        className="inline-block px-6 py-2 text-xl font-semibold text-blue-800 border border-blue-400 rounded-lg shadow-md md:text-2xl bg-gradient-to-r from-blue-50 to-white"
      >
        {service}
      </span>
    ))}
    {/* Repeat the same services to create seamless loop */}
    {centerServices.map((service, index) => (
      <span
        key={`repeat-${index}`}
        className="inline-block px-6 py-2 text-xl font-semibold text-blue-800 border border-blue-400 rounded-lg shadow-md md:text-2xl bg-gradient-to-r from-blue-50 to-white"
      >
        {service}
      </span>
    ))}
  </motion.div>
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
