"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const slides = [
  { image: "/assets/barco8.jpg" },
  { image: "/assets/barco21.jpeg" },
  { image: "/assets/barco22.jpg" },
];

const heading = "BARCO GLOBAL LOGISTICS (PVT) LTD";

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
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
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

          {/* Responsive Positioned Heading */}
          <div
            className="absolute inset-x-0 flex justify-center pointer-events-none  bottom-6 md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2"
          >
            <motion.h1
              className="font-serif text-3xl font-bold text-center uppercase select-none sm:text-4xl md:text-6xl lg:text-7xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                background: "linear-gradient(90deg, #003366, #66b2ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              {heading.split("").map((char, idx) => (
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
