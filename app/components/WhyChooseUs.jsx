"use client";
import { useEffect, useState } from "react";

const images = [
  "/assets/barco1.jpg", 
  "/assets/barco2.jpg",
  "/assets/barco1.jpg"
];

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
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Us</h2>
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