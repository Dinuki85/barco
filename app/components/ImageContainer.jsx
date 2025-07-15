"use client";
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

const assets = [
  {
    image: "/assets/barco1.jpg",
    heading: "Barco Image 1"
  },
  {
    image: "/assets/barco2.jpg",
    heading: "Barco Image 2"
  },
  {
    image: "/assets/barco1.jpg",
    heading: "Barco Image 3"
  },
  {
    image: "/assets/barco2.jpg",
    heading: "Barco Image 4"
  },
   {
    image: "/assets/barco1.jpg",
    heading: "Barco Image 1"
  },
  {
    image: "/assets/barco2.jpg",
    heading: "Barco Image 2"
  },
];

const IMAGE_WIDTH = 320; // px, adjust to your image width

const ImageContainer = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % assets.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Duplicate images for seamless loop
  const imagesToShow = [...assets, ...assets];

  return (
    <section className="flex flex-col items-center justify-center w-full py-8">
      <div
        className="relative w-full overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent 0, black 40px, black calc(100% - 40px), transparent 100%)" }}
      >
        <div
          className="flex flex-row transition-transform duration-700"
          style={{
            width:`${imagesToShow.length * 30}vw`,
            transform: `translateX(-${current * 30}vw)`,
            willChange: "transform"
          }}
        >
          {imagesToShow.map((asset, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-center group"
              style={{
                width: "30vw",
                minWidth:"30vw",
                height:"260px",
                flexShrink: 0
              }}
            >
              <Image
                src={asset.image}
                alt={asset.heading}
                fill
                className="object-cover transition-transform duration-500 rounded-md group-hover:scale-110"
                sizes="320px"
                style={{ pointerEvents: "auto" }}
              />
              {asset.heading && (
                <span className="absolute px-3 py-1 text-sm text-white rounded bottom-2 left-2 bg-black/60">
                  {asset.heading}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageContainer;