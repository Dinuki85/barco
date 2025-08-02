"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  { image: "/assets/barco8.jpg", label: "Warehouse" },
  { image: "/assets/barco21.jpeg", label: "Transport" },
  { image: "/assets/barco22.jpg", label: "Shipping" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />

      <section className="relative w-full overflow-hidden bg-black min-h-[300px] md:min-h-[400px] lg:min-h-screen">
        <div className="relative w-full h-auto min-h-[220px] md:min-h-[300px] lg:h-screen">
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
                className="absolute top-0 left-0 w-full h-[220px] md:h-[300px] lg:h-screen object-cover"
                draggable={false}
              />
            );
          })}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Bottom curved label */}
          <div
            className="absolute px-4 py-3 transform -translate-x-1/2 bottom-4 left-1/2 rounded-2xl"
            style={{
              background: "linear-gradient(to top, rgba(0,51,102,0.2), transparent)",
              backdropFilter: "blur(3px)",
              borderRadius: "2rem",
            }}
          >
            <motion.div
              key={slides[current].label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-center gap-[4px] sm:gap-[6px] md:gap-[8px] lg:gap-[10px]"
            >
              {slides[current].label.split("").map((letter, idx) => {
                const offset = Math.sin(idx / 1.5) * 10;
                return (
                  <span
                    key={idx}
                    className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.8rem] font-bold"
                    style={{
                      transform: `translateY(-${offset}px) rotate(${offset * 0.2}deg)`,
                      background: "linear-gradient(90deg, #003366, #66b2ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: "'Playfair Display', serif",
                      userSelect: "none",
                      display: "inline-block",
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute z-30 flex gap-2 left-4 sm:left-8 bottom-20 sm:bottom-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full border-2 border-white transition ${
                current === idx ? "bg-white" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev/Next buttons */}
        <div className="absolute z-30 flex gap-3 right-4 sm:right-8 bottom-16 sm:bottom-12">
          <button
            onClick={prev}
            className="p-2 text-blue-900 transition rounded-full bg-white/70 hover:bg-white"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-2 text-blue-900 transition rounded-full bg-white/70 hover:bg-white"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </section>
    </>
  );
}
