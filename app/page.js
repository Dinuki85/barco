"use client";
import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import LogisticIntroduceSection from "./components/LogisticIntroduceSection";

const ImageContainer = dynamic(() => import("./components/ImageContainer"), { ssr: false });
const MeetTeam = dynamic(() => import("./components/MeetTeam"), { ssr: false });
const WhyChooseUsSection = dynamic(() => import("./components/WhyChooseUs"), { ssr: false });
const LogisticsProcess = dynamic(() => import("./components/LogisticsProcess"), { ssr: false });

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogisticIntroduceSection />
      <ImageContainer />
      <WhyChooseUsSection />
      <LogisticsProcess />
      <MeetTeam />
    </>
  );
}