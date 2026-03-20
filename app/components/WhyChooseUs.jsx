"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";


const images = [
    "/assets/barco26.jpg",
    "/assets/barco10.jpeg",
    "/assets/barco27.jpg"
];

const heading = "Strategic Edge";

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

const listContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

// ... (skipping unchanged code)

const whyList = [
    "Predictive Intelligence & Global Scale",
    "Precision-Engineered Supply Chains",
    "Digital-First Transparency & Control",
    "Sustainable, Adaptive Growth Solutions"
];

const WhyChooseUsSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full px-4 py-24 bg-white sm:px-6 md:px-12 lg:px-24">
            {/* Header Row */}
            <div className="flex flex-col items-start justify-between mb-12 md:flex-row">
                <motion.h1
                    className="font-sans text-3xl font-black tracking-tighter leading-tight sm:text-4xl md:text-5xl lg:text-8xl text-slate-900"
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
                <div className="flex justify-end w-full mt-6 md:w-auto md:mt-0">
                    <Link href="/about" className="flex flex-col items-end cursor-pointer select-none group">
                        <span className="flex items-center text-xl font-bold transition-colors text-accent group-hover:text-blue-700">
                            Our Story
                            <HiArrowUpRight className="ml-2 text-2xl" />
                        </span>
                        <span className="block w-full h-px mt-1 transition-colors bg-accent/30 group-hover:bg-blue-700"></span>
                    </Link>
                </div>
            </div>
            <hr className="mb-16 border-t border-slate-100" />

            {/* Content Row */}
            <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
                {/* Left: Description & List */}
                <div className="w-full md:w-1/2">
                    <motion.p
                        className="mb-10 text-lg leading-relaxed text-slate-600"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={letterVariants}
                        transition={{ duration: 0.6 }}
                    >
                        At <span className="font-bold text-slate-900">Nexa Global</span>, we transcend traditional logistics. 
                        We build the digital infrastructure for modern commerce, enabling businesses to scale 
                        with unprecedented speed and precision. As an intelligence-driven logistics partner, 
                        we empower global innovators to navigate complexity with confidence.
                        <br /><br />
                        Our methodology combines deep domain expertise with cutting-edge orchestration technology. 
                        We design resilient supply chains that are not just efficient, but adaptive—ready for 
                        the challenges of tomorrow's global marketplace.
                    </motion.p>
                    
                    <motion.ul
                        className="space-y-4"
                        variants={listContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {whyList.map((item, idx) => (
                            <motion.li key={idx} variants={listItem} className="flex items-center gap-3 font-semibold text-slate-800">
                                <FaCheckCircle className="flex-shrink-0 text-accent" />
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                {/* Right: Stacked, auto-sliding images */}
                <div className="w-full md:w-1/2 flex justify-center relative min-h-[400px]">
                    {images.map((src, idx) => (
                        <div
                            key={src + idx}
                            className={`
                                absolute transition-all duration-1000 ease-in-out
                                ${idx === current ? "opacity-100 scale-100 translate-x-0 z-20" : "opacity-0 scale-95 translate-x-4 z-10"}
                                w-full max-w-[450px] aspect-video
                            `}
                        >
                            <Image
                                src={src}
                                alt={`Strategic Edge ${idx + 1}`}
                                fill
                                className="object-cover shadow-2xl rounded-2xl"
                                sizes="(max-width: 768px) 100vw, 450px"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUsSection;