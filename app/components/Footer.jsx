"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const heading = "Next-Gen Connectivity";

// ... (skipping unchanged code)

export default function Footer() {
    return (
        <>
            {/* Heading Section - OUTSIDE FOOTER */}
            <div className="relative w-full px-4 pt-20 pb-0 text-center md:px-[8%] lg:px-[15%]">
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
            </div>

            {/* Footer starts here */}
            <footer className="w-full mt-20 bg-primary">
                {/* Top Section with Fixed Image Background */}
                <div
                    className="relative h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center text-center px-4"
                    style={{ backgroundImage: "url('/assets/barco1.png')" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
                        <h2 className="mb-4 text-5xl font-black tracking-tighter">
                            NEXA<span className="text-accent underline decoration-4 underline-offset-8">GLOBAL</span>
                        </h2>
                        <p className="mb-10 text-xl font-medium tracking-wide opacity-80">"Intelligent Logistics, Orchestrated"</p>

                        {/* Centered Button */}
                        <div className="flex justify-center">
                            <Link href="/contact">
                                <button className="premium-button bg-accent border-none">
                                    Start a Conversation
                                    <HiArrowUpRight className="inline-block ml-2 text-xl" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="grid gap-12 px-6 py-20 text-white bg-accent md:px-16 md:grid-cols-3">
                    <div className="space-y-4">
                        <h3 className="text-sm font-black tracking-widest text-primary uppercase">📍 Headquarters</h3>
                        <p className="text-lg font-medium">
                            Skyline Tower, 12th Floor
                            <br />
                            Financial District, Colombo 05
                            <br />
                            Sri Lanka
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-black tracking-widest text-primary uppercase">📞 Dispatch & Support</h3>
                        <p className="text-lg font-medium">
                            +94 11 234 5678
                            <br />
                            solutions@nexaglobal.io
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-black tracking-widest text-primary uppercase">⏰ Global Operations</h3>
                        <p className="text-lg font-medium">
                            Mon - Fri: 24/7 Priority Support
                            <br />
                            Sat - Sun: 09:00 AM – 06:00 PM
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-8 text-sm font-medium text-center text-slate-500 border-t border-slate-800 bg-primary">
                    &copy; {new Date().getFullYear()} Nexa Global Solutions Ltd. Built for the future of trade.
                </div>
            </footer>
        </>
    );
        </>
    );
}
