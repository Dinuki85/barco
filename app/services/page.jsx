"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const slides = [
  { image: "/assets/barco1.png" },
  { image: "/assets/barco2.jpg" },
  { image: "/assets/barco1.png" },
];

export default function ServicesPage() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Add spacing below fixed navbar */}
      <div className="relative w-full h-[550px] pt-16"> {/* pt-16 pushes content down by 64px */}
        <AnimatePresence initial={false}>
          <motion.img
            key={slides[current].image}
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>


      {/* Services Content */}
      <div className="flex flex-col items-center justify-center w-full bg-gray-100 py-16 px-4">
        <h1 className="mb-4 text-3xl font-bold">Our Services</h1>
        <p className="max-w-xl text-lg text-center mb-6">
          Discover the services we offer to help you succeed.
        </p>
        <ul className="text-lg list-disc list-inside space-y-2">
          <li>Global Shipping</li>
          <li>Secure Warehousing</li>
          <li>Customs Clearance</li>
          <li>Customer Support</li>
        </ul>
      </div>
    </div>
  );
}
