"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaTruck, FaBoxes, FaWarehouse, FaShippingFast } from "react-icons/fa";
import { MdLocalShipping, MdOutlineInventory2 } from "react-icons/md";
import { FaShoppingCart, FaWarehouse, FaTruckMoving } from "react-icons/fa";
import { MdInventory } from "react-icons/md";

const steps = [
  {
    title: "Order Placement",
    description:
      "The journey begins when customers place orders through various channels such as websites, mobile apps, or physical counters. We instantly capture the order and initiate the fulfillment process.",
    icon: <FaShoppingCart className="text-4xl text-blue-900" />,
  },
  {
    title: "Inventory Management",
    description:
      "Smart inventory systems track item availability in real-time, optimize stock levels, and ensure that products are ready for dispatch without delay or overstock.",
    icon: <MdInventory className="text-4xl text-blue-900" />,
  },
  {
    title: "Order Warehousing & Storage",
    description:
      "Goods are stored in secured, climate-controlled facilities, categorized for efficient picking and packing. Warehousing plays a key role in fast and accurate delivery.",
    icon: <FaWarehouse className="text-4xl text-blue-900" />,
  },
  {
    title: "Transportation",
    description:
      "We select the optimal mode of transport — road, air, sea, or rail — to deliver goods safely, swiftly, and affordably across regions and borders.",
    icon: <FaTruckMoving className="text-4xl text-blue-900" />,
  },
];


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
{/* Animated Center Bar Card */}
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
