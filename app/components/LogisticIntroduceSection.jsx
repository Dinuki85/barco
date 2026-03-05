"use client";
import { useEffect, useState, useRef } from 'react'
import { MdWarehouse, MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import Link from 'next/link';
import { FaShippingFast } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { motion, useInView } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

// Animation variants
const heading = "Business Capabilities";

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
const ulVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const liVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
};

const h2ContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06
        }
    }
};
const h2LetterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};


function useCounter(targetNumber, duration =1000, trigger = true) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) {
            setCount(0);
            return;
        }
        let start = 0;
        const end = parseInt(targetNumber);
        if (start === end) return;
        let incrementTime = Math.max(10, Math.floor(duration / end));
        let timer = setInterval(() => {
            start += 5;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
        return () => clearInterval(timer);
    }, [targetNumber, duration, trigger]);

    return count;
}

const LogisticIntroduceSection = () => {
    const statsRef = useRef(null);
    const isStatsInView = useInView(statsRef, { amount: 0.5, once: false });
    // Counters for stats
    const count1 = useCounter(100, 2000, isStatsInView);
    const count2 = useCounter(85, 2000, isStatsInView);
    const count3 = useCounter(95, 2000, isStatsInView);

    return (
        <section className='relative flex flex-col w-full min-h-screen bg-light-blue-100'>
            
            <div className="relative w-full px-4 pt-10 pb-0 md:px-[8%] lg:px-[15%]">
                <motion.h1
                    className='font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-800'
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
                {/* All Services link at bottom right */}
                <div className="flex justify-end mt-8">
                    <Link href="/services" className="flex flex-col items-end cursor-pointer select-none group">
                        <span className="flex items-center text-xl font-bold transition-colors text-slate-800 group-hover:text-blue-700">
                            All Services
                            <HiArrowUpRight className="ml-2 text-2xl" />
                        </span>
                        <span className="block w-full h-px mt-1 transition-colors bg-slate-400 group-hover:bg-blue-700"></span>
                    </Link>
                </div>
            </div>
            <hr className='mt-8 mb-0 border-8 border-light-blue-300' />

            <motion.h2
                className='flex flex-wrap items-center justify-center px-4 py-3 font-serif text-lg font-thin md:px-7 sm:text-xl md:text-2xl'
                variants={h2ContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {"Delivering Posibilities, On Time".split("").map((word, idx) => (
                    <motion.span
                        key={idx}
                        variants={h2LetterVariants}
                        className="mx-2"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.h2>

            <motion.ul
                className="grid max-w-4xl grid-cols-1 gap-6 py-3 mx-auto font-serif text-base list-none sm:grid-cols-2 md:grid-cols-3 sm:text-lg"
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

            {/* Statistics Section */}
            <div ref={statsRef} className="w-full px-2 mt-10 sm:px-6 md:px-10">
                <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
                    <div className="flex flex-col items-center w-full">
                        <span className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[120px] font-bold text-outline">
                            {count1}%
                        </span>
                        <hr className="w-full my-2 border-t border-gray-200" />
                        <span className="mt-2 text-lg font-bold text-center text-blue-900 sm:text-xl md:text-2xl">On-Time Deliveries</span>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <span className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[120px] font-bold text-outline">
                            {count2}%
                        </span>
                        <hr className="w-full my-2 border-t border-gray-200" />
                        <span className="mt-2 text-lg font-bold text-center text-blue-900 sm:text-xl md:text-2xl">Global Network Coverage</span>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <span className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[120px] font-bold text-outline">
                            {count1}%
                        </span>
                        <hr className="w-full my-2 border-t border-gray-200" />
                        <span className="mt-2 text-lg font-bold text-center text-blue-900 sm:text-xl md:text-2xl">Cross-Border Efficiency</span>
                    </div>
                </div>
            </div>
            {/* End Statistics Section */}
         
        </section>
    )
}

export default LogisticIntroduceSection