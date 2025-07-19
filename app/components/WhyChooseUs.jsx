"use client";
import { useEffect, useState } from "react";
import {motion } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

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
const WhyChooseUsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-between w-full px-4 py-16 bg-white md:flex-row md:px-16">
      {/* Left: Description */}
      <div className="w-full mb-8 md:w-1/2 md:mb-0">
         <div className="relative w-full px-4 pt-10 pb-0 md:px-[8%] lg:px-[15%]">
                <motion.h1
                    className='w-full font-serif text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'
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
                {/* All Services link at bottom right */}
                <div className="flex justify-end mt-8">
                    <Link href="/about" className="flex flex-col items-end cursor-pointer select-none group">
                        <span className="flex items-center text-xl font-bold transition-colors text-slate-800 group-hover:text-blue-700">
                            All Services
                            <HiArrowUpRight className="ml-2 text-2xl" />
                        </span>
                        <span className="block w-full h-px mt-1 transition-colors bg-slate-400 group-hover:bg-blue-700"></span>
                    </Link>
                </div>
            </div>
        <p className="mb-6 text-lg text-gray-700">
          We are a leading logistics company dedicated to bridging distances and delivering dreams. 
          Our expertise, reliability, and innovative solutions ensure your 
          cargo reaches its destination safely and on time. Partner
           with us for seamless, global logistics support.
        </p>
        <ul className="pl-5 space-y-2 text-base text-gray-600 list-disc">
          <li>Global network and local expertise</li>
          <li>On-time, secure deliveries</li>
          <li>Advanced tracking and support</li>
          <li>Flexible, customer-focused solutions</li>
        </ul>
      </div>
      {/* Right: Stacked, auto-sliding images */}
      <div className="w-full md:w-1/2 flex justify-center relative min-h-[350px]">
        {images.map((src, idx) => (
          <img
            key={src}
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
    </section>
  );
};

export default WhyChooseUsSection;