"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const slides = [
  { image: "/assets/barco8.jpg", heading: "BARCO GLOBAL LOGISTICS (PVT) LTD" },
  { image: "/assets/barco21.jpeg", heading: "INTERNATIONAL FREIGHT SOLUTIONS" },
  { image: "/assets/barco22.jpg", heading: "RELIABLE SUPPLY CHAIN PARTNER" },
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
      {/* Import Quicksand font from Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full h-screen overflow-hidden bg-black">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const isActive = current === index;
            return (
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={`Slide ${index + 1}`}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? [1, 1.1] : 1,
                }}
                transition={{
                  opacity: { duration: 1.5, ease: "easeInOut" },
                  scale: { duration: 3, ease: "easeInOut" },
                }}
                className="absolute top-0 left-0 object-cover w-full h-full"
                draggable={false}
              />
            );
          })}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Centered Heading with Transparent Outline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h1
              key={slides[current].heading}
              className="text-3xl font-bold text-center uppercase select-none sm:text-4xl md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "'Quicksand', sans-serif",
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
          </div>
        </div>
      </section>
    </>
  );
}
