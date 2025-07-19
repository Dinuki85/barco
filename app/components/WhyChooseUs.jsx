"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";

const images = [
    "/assets/barco1.jpg",
    "/assets/barco2.jpg",
    "/assets/barco1.jpg"
];

const heading = "Why Choose Us";

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

const listContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const listItem = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
};

const whyList = [
    "Global network and local expertise",
    "On-time, secure deliveries",
    "Advanced tracking and support",
    "Flexible, customer-focused solutions"
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
        <section className="w-full px-2 py-16 bg-white sm:px-4 md:px-12 lg:px-24">
            {/* Header Row */}
            <div className="flex flex-col items-start justify-between mb-8 md:flex-row">
                <motion.h1
                    className="font-serif text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.7 }}
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
                        <span className="flex items-center text-xl font-bold transition-colors text-slate-800 group-hover:text-blue-700">
                            About Us
                            <HiArrowUpRight className="ml-2 text-2xl" />
                        </span>
                        <span className="block w-full h-px mt-1 transition-colors bg-slate-400 group-hover:bg-blue-700"></span>
                    </Link>
                </div>
            </div>
            <hr className="mb-10 border-t border-gray-200" />

            {/* Content Row */}
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                {/* Left: Description & List */}
                <div className="w-full mb-10 md:w-1/2 md:mb-0">
                  <motion.p
                        className="mb-6 text-lg text-gray-700"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={letterVariants}
                        transition={{ duration: 0.6 }}
                    >
                        At Barco Global Logistic, we don't just move goods; we move businesses forward. As a premium provider of global logistics and freight forwarding services, we empower enterprises to connect markets, navigate global trade, and scale operations with confidence.

                        With a deep understanding of complex supply chains, we provide innovative, efficient, and tailored logistics solutions. Our reliability, strategic partnerships, and technology-driven operations set us apart in a highly competitive industry.
                    </motion.p>
                   <motion.ul
                        className="space-y-4"
                        variants={listContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {whyList.map((item, idx) => (
                            <motion.li
                                key={idx}
                                className="flex items-center text-base text-gray-700"
                                variants={listItem}
                            >
                                <FaCheckCircle className="flex-shrink-0 mr-3 text-blue-700" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                {/* Right: Stacked, auto-sliding images */}
                <div className="w-full md:w-1/2 flex justify-center relative min-h-[350px]">
                    {images.map((src, idx) => (
                        <img
                            key={src + idx}
                            src={src}
                            alt={`Why Choose Us ${idx + 1}`}
                            className={`
                absolute rounded-lg shadow-lg transition-all duration-700
                ${idx === current ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10"}
                ${idx === (current + images.length - 1) % images.length ? "left-8 top-8 opacity-60 scale-90 z-10" : ""}
                ${idx === (current + images.length - 2) % images.length ? "left-16 top-16 opacity-40 scale-90 z-0" : ""}
                w-[80vw] max-w-[400px] h-[300px] object-cover
              `}
                            style={{
                                left: idx === current ? 0 : undefined,
                                top: idx === current ? 0 : undefined,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;