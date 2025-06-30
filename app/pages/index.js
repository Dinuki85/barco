import React from "react";
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <section id="home" className="flex items-center justify-center h-screen text-white bg-lightBlue">
        <h1 className="text-5xl font-bold">Welcome to Logistica</h1>
      </section>
      <section id="about" className="flex items-center justify-center h-screen bg-white text-darkBlue">
        <h2 className="text-3xl font-semibold">About Us</h2>
      </section>
      <section id="services" className="flex items-center justify-center h-screen text-white bg-lightBlue">
        <h2 className="text-3xl font-semibold">Our Services</h2>
      </section>
      <section id="contact" className="flex items-center justify-center h-screen bg-white text-darkBlue">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
      </section>
      
    </MainLayout>
  );
}
