"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const slides = [
  { image: "/assets/barco8.jpg", heading: "NEXA GLOBAL", subtext: "The Future of Intelligent Logistics" },
  { image: "/assets/barco21.jpeg", heading: "SMART SUPPLY CHAIN", subtext: "Data-Driven Efficiency for Your Business" },
  { image: "/assets/barco22.jpg", heading: "GLOBAL REACH", subtext: "Seamlessly Connecting Markets Worldwide" },
];

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black">

        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const isActive = current === index;
            return (
              <motion.div
                key={slide.image}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  opacity: { duration: 1.5, ease: "easeInOut" },
                }}
                className="absolute top-0 left-0 w-full h-full"
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className={`object-cover transition-transform duration-[3000ms] ease-in-out ${isActive ? "scale-110" : "scale-100"}`}
                  draggable={false}
                  sizes="100vw"
                />
              </motion.div>
            );

          })}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Centered Heading with Transparent Outline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div className="flex flex-col items-center">
              <motion.h1
                key={slides[current].heading}
                className="text-3xl font-bold text-center uppercase select-none sm:text-4xl md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "var(--font-quicksand), sans-serif",

                  color: "transparent",
                  WebkitTextStroke: "1.5px #66ccff",
                  WebkitTextFillColor: "transparent",
                }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {slides[current].heading.split("").map((char, idx) => (
                  <motion.span
                    key={idx}
                    variants={letterVariants}
                    className={char === " " ? "mx-1" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 text-lg font-medium tracking-widest text-white uppercase md:text-xl opacity-80"
              >
                {slides[current].subtext}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
