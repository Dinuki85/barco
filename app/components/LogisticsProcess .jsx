"use client";
import { motion } from "framer-motion";
import {
    FaRegClipboard,
    FaShippingFast,
    FaBoxes,
    FaTruckLoading,
    FaWarehouse,
} from "react-icons/fa";
import {
    MdOutlineInventory,
    MdLocalShipping,
} from "react-icons/md";

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
        title: "Intelligent Orchestration",
        description:
            "Proprietary algorithms analyze global demand patterns to initiate the most efficient supply cycle.",
        icon: <FaRegClipboard className="text-4xl text-accent" />,
    },
    {
        title: "Digital Inventory Sync",
        description:
            "Real-time visibility across global hubs ensures optimal stock levels with zero latency.",
        icon: <MdOutlineInventory className="text-4xl text-accent" />,
    },
];

const bottomItems = [
    {
        title: "Dynamic Routing",
        description:
            "AI-driven selection of multimodal transport paths to maximize speed and minimize carbon footprint.",
        icon: <MdLocalShipping className="text-4xl text-accent" />,
    },
    {
        title: "Autonomous Fulfillment",
        description:
            "Smart warehousing systems ensure precision picking and rapid dispatch for end-to-end reliability.",
        icon: <FaWarehouse className="text-4xl text-accent" />,
    },
];

const LogisticsProcess = () => {
    return (
        <section className="w-full px-4 py-16 bg-white md:px-12 lg:px-24">
            <div className="relative flex flex-col items-center">
                {/* Top Items with connecting lines */}
                <div className="z-20 grid w-full max-w-6xl grid-cols-1 gap-16 mb-20 md:grid-cols-2">
                    {topItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="relative p-6 text-center transition-all shadow-md bg-blue-900/10 hover:bg-blue-800/20 backdrop-blur rounded-xl"
                        >
                            {/* Connector line */}
                            <div className="absolute z-0 w-1 h-16 -translate-x-1/2 bg-blue-400 left-1/2 top-full opacity-60" />
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Animated Center Bar */}
                <div className="relative w-full max-w-6xl h-[120px] flex items-center justify-center my-6 z-10">
                    {/* Background Card */}
                    <div className="absolute inset-0 z-0 border border-blue-300 shadow-lg rounded-2xl bg-gradient-to-r from-blue-900/60 via-blue-500/40 to-blue-300/30 backdrop-blur-sm" />
                    {/* Center Line */}
                    <div className="absolute w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-800 opacity-40 z-10" />
                    {/* Scrolling services */}
                    <div className="absolute z-20 flex w-full mx-auto overflow-hidden">
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

                {/* Bottom Items with connecting lines */}
                <div className="z-20 grid w-full max-w-6xl grid-cols-1 gap-16 mt-20 md:grid-cols-2">
                    {bottomItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="relative p-6 text-center transition-all shadow-md bg-blue-900/10 hover:bg-blue-800/20 backdrop-blur rounded-xl"
                        >
                            {/* Connector line */}
                            <div className="absolute z-0 w-1 h-16 -translate-x-1/2 bg-blue-400 left-1/2 -top-16 opacity-60" />
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogisticsProcess;
