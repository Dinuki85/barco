"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const watermarkImages = [
  "/public/assets/barco1.jpg",
  "/public/assets/barco2.jpg",
  "/public/assets/barco3.jpg",
  // Add more images as needed
];

export default function WatermarkSlider({ side = "right" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % watermarkImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`
        pointer-events-none
        fixed
        top-0
        ${side === "left" ? "left-0" : "right-0"}
        h-full
        w-1/3
        flex
        items-center
        justify-center
        z-0
      `}
      style={{
        opacity: 0.12, // watermark transparency
        transition: "opacity 0.5s",
        userSelect: "none",
      }}
    >
      <div className="relative flex items-center justify-center w-full h-2/3">
        <Image
          src={watermarkImages[current]}
          alt="Watermark"
          fill
          className="object-contain"
          priority
          draggable={false}
        />
      </div>
    </div>
  );
}