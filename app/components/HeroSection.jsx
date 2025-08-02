"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
 
   {
    video: "/assets/barco4video.mp4",
    heading: "",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
<section className="relative w-full overflow-hidden bg-black">
  {/* Video Wrapper */}
  <div className="relative w-full h-auto min-h-[220px] md:min-h-[300px] lg:h-screen">
    <AnimatePresence initial={false}>
      <motion.video
        key={slides[current].video}
        src={slides[current].video}
        autoPlay
        muted
        loop
        playsInline
        
        className="object-contain w-full h-auto md:object-cover md:h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0 }}
      />
    </AnimatePresence>
  </div>

  {/* Heading Text */}
  <div className="absolute inset-0 z-20 flex items-center justify-center px-2 text-center">
    <AnimatePresence mode="wait">
      <motion.h1
        key={slides[current].heading}
        className="font-serif font-bold leading-tight text-white text-8xl sm:text-4xl md:text-5xl lg:text-8xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {slides[current].heading}
      </motion.h1>
    </AnimatePresence>
  </div>

  {/* Dots */}
  <div className="absolute z-30 flex gap-2 left-4 sm:left-8 bottom-4 sm:bottom-8">
    {slides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => goTo(idx)}
        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 border-white transition ${
          current === idx ? "bg-white" : "bg-transparent"
        }`}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}
  </div>

  {/* Arrows */}
  <div className="absolute z-30 flex gap-2 right-4 sm:right-8 bottom-4 sm:bottom-8 sm:gap-4">
    <button
      onClick={prev}
      className="p-1 text-blue-900 transition rounded-full sm:p-2 bg-white/70 hover:bg-white"
      aria-label="Previous video"
    >
      <FiChevronLeft size={20} className="sm:w-6 sm:h-6" />
    </button>
    <button
      onClick={next}
      className="p-1 text-blue-900 transition rounded-full sm:p-2 bg-white/70 hover:bg-white"
      aria-label="Next video"
    >
      <FiChevronRight size={20} className="sm:w-6 sm:h-6" />
    </button>
  </div>
</section>



       


);
}