"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center justify-center h-screen text-white bg-darkBlue">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full"
        src="/assets/hero-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay for text content */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center md:px-8">
        <motion.h1
          className="mb-6 text-4xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Reliable Logistics Solutions
        </motion.h1>
        <motion.p
          className="mb-8 text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Connecting the world through our efficient logistics network.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <a
            href="#services"
            className="px-6 py-3 text-white transition rounded-md bg-lightBlue hover:bg-white hover:text-darkBlue"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 transition bg-white rounded-md text-darkBlue hover:bg-lightBlue hover:text-white"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
