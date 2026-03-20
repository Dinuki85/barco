"use client";
import { useEffect, useState, useRef } from 'react'
import { MdWarehouse, MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import Link from 'next/link';
import { FaShippingFast } from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { motion, useInView } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

// Animation variants
const heading = "Strategic Capabilities";

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

// Custom Hook for Counter Animation
const useCounter = (end, duration, startTrigger) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startTrigger) return;

        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration, startTrigger]);

    return count;
};

// ... (skipping unchanged code)

const LogisticIntroduceSection = () => {
    const statsRef = useRef(null);
    const isStatsInView = useInView(statsRef, { amount: 0.5, once: false });
    // Counters for stats
    const count1 = useCounter(99, 2000, isStatsInView);
    const count2 = useCounter(50, 2000, isStatsInView);
    const count3 = useCounter(100, 2000, isStatsInView);

    return (
        <section className='relative flex flex-col w-full min-h-screen bg-slate-50'>
            
            <div className="relative w-full px-4 pt-10 pb-0 md:px-[8%] lg:px-[15%]">
                <motion.h1
                    className='font-sans text-3xl font-black tracking-tighter leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-900'
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
                        <span className="flex items-center text-xl font-bold transition-colors text-accent group-hover:text-blue-700">
                            Explore Solutions
                            <HiArrowUpRight className="ml-2 text-2xl" />
                        </span>
                        <span className="block w-full h-px mt-1 transition-colors bg-accent/30 group-hover:bg-blue-700"></span>
                    </Link>
                </div>
            </div>
            <hr className='mt-8 mb-0 border-8 border-slate-200' />

            <motion.h2
                className='flex flex-wrap items-center justify-center px-4 py-8 font-sans text-lg font-medium md:px-7 sm:text-xl md:text-2xl text-slate-600'
                variants={h2ContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {"Efficiency Redefined, Globally Connected".split("").map((word, idx) => (
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
                className="grid max-w-5xl grid-cols-1 gap-6 py-10 mx-auto font-sans text-base list-none sm:grid-cols-2 md:grid-cols-3 sm:text-lg text-slate-700"
                variants={ulVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <motion.li variants={liVariants} className="flex items-center gap-3 p-4 transition-all border rounded-xl bg-white/50 hover:bg-white hover:shadow-md">
                    <MdWarehouse className="text-2xl text-accent" />
                    <span className="font-semibold">Smart Warehousing</span>
                </motion.li>
                <motion.li variants={liVariants} className="flex items-center gap-3 p-4 transition-all border rounded-xl bg-white/50 hover:bg-white hover:shadow-md">
                    <FaShippingFast className="text-2xl text-accent" />
                    <span className="font-semibold">Global Forwarding</span>
                </motion.li>
                <motion.li variants={liVariants} className="flex items-center gap-3 p-4 transition-all border rounded-xl bg-white/50 hover:bg-white hover:shadow-md">
                    <GiCargoCrate className="text-2xl text-accent" />
                    <span className="font-semibold">Supply Orchestration</span>
                </motion.li>
                <motion.li variants={liVariants} className="flex items-center gap-3 p-4 transition-all border rounded-xl bg-white/50 hover:bg-white hover:shadow-md">
                    <MdOutlineLocalShipping className="text-2xl text-accent" />
                    <span className="font-semibold">E-commerce Logistics</span>
                </motion.li>
                <motion.li variants={liVariants} className="flex items-center gap-3 p-4 transition-all border rounded-xl bg-white/50 hover:bg-white hover:shadow-md">
                    <MdOutlineSupportAgent className="text-2xl text-accent" />
                    <span className="font-semibold">Real-time Support</span>
                </motion.li>
                <motion.li variants={liVariants} className="flex items-center gap-3 p-4 transition-all border rounded-xl bg-white/50 hover:bg-white hover:shadow-md">
                    <MdWarehouse className="text-2xl text-accent" />
                    <span className="font-semibold">Adaptive Inventory</span>
                </motion.li>
            </motion.ul>

            {/* Statistics Section */}
            <div ref={statsRef} className="w-full px-4 py-20 mt-10 bg-primary sm:px-6 md:px-10">
                <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-3">
                    <div className="flex flex-col items-center w-full">
                        <span className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[120px] font-black gradient-text tracking-tighter">
                            {count1}%
                        </span>
                        <hr className="w-full my-4 border-t border-slate-700" />
                        <span className="mt-2 text-sm font-bold tracking-widest text-center text-slate-400 uppercase">Operational Reliability</span>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <span className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[120px] font-black gradient-text tracking-tighter">
                            {count2}+
                        </span>
                        <hr className="w-full my-4 border-t border-slate-700" />
                        <span className="mt-2 text-sm font-bold tracking-widest text-center text-slate-400 uppercase">Global Strategic Hubs</span>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <span className="text-[70px] sm:text-[90px] md:text-[110px] lg:text-[120px] font-black gradient-text tracking-tighter">
                            {count3}%
                        </span>
                        <hr className="w-full my-4 border-t border-slate-700" />
                        <span className="mt-2 text-sm font-bold tracking-widest text-center text-slate-400 uppercase">Delivery Transparency</span>
                    </div>
                </div>
            </div>
            {/* End Statistics Section */}
         
        </section>
    )
}

export default LogisticIntroduceSection