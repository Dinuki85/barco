"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const heading = "Let's Connect Together";

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

export default function Footer() {
    return (
        <>
            {/* Heading Section - OUTSIDE FOOTER */}
            <div className="relative w-full px-4 pt-10 pb-0 text-center md:px-[8%] lg:px-[15%]">
                <motion.h1
                    className="w-full font-serif text-3xl font-bold text-black sm:text-5xl md:text-6xl lg:text-7xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.7 }}
                >
                    {heading.split("").map((char, idx) => (
                        <motion.span
                            key={idx}
                            variants={letterVariants}
                            // For spaces, just render space without extra margin
                            className={char === " " ? "" : ""}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

            </div>

            {/* Footer starts here */}
            <footer className="w-full bg-blue-950">
                {/* Top Section with Fixed Image Background */}
                <div
                    className="relative h-[350px] bg-fixed bg-center bg-cover flex items-center justify-center text-center px-4"
                    style={{ backgroundImage: "url('/assets/barco1.png')" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />


                    {/* Content */}
                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
                        <h2 className="mb-3 text-4xl font-bold">
                            <span className="text-white">Barco Global Logistics(PVT) Ltd</span>
                        </h2>
                        <p className="mb-6 text-lg italic">"Beyond Logistics, It's Our Passion"</p>

                        {/* Centered Button */}
                        <div className="flex justify-center">
                            <Link href="/contact">
                                <button className="flex items-center gap-2 px-5 py-2 text-white transition-all duration-300 border border-white rounded-full hover:bg-white hover:text-blue-950">

                                    Contact Us
                                    <HiArrowUpRight className="text-xl" />
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Contact Details */}
                <div className="grid gap-6 px-6 py-10 text-sm text-white bg-blue-500 md:px-16 md:grid-cols-3 md:text-base">
                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-black">📍 Address</h3>
                        <p>
                            Level 35, West Tower ,World Trade Center
                            <br />
                            Colombo 01,
                            <br />
                            Sri Lanka
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-black">📞 Contact</h3>
                        <p>
                            Phone: +94 77 123 4567
                            <br />
                            Email: sales@barco.lk
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-lg font-semibold text-black">⏰ Office Hours</h3>
                        <p>
                            Mon - Fri: 8:30 AM – 6:00 PM
                            <br />
                            Saturday: 9:00 AM – 1:00 PM
                            <br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-4 text-sm text-center text-gray-300 border-t border-gray-600 bg-blue-950">
                    &copy;  {new Date().getFullYear()}  Barco Global Logistics(Pvt) Ltd. All rights reserved.
                </div>
            </footer>
        </>
    );
}
