import Image from "next/image";
import HeroSection from "./components/HeroSection";
import LogisticIntroduceSection from "./components/LogisticIntroduceSection";
import ImageContainer from "./components/ImageContainer";
import MeatTeam from "./components/MeatTeam";
import WhyChooseUsSection from "./components/WhyChooseUs";
import LogisticsProcess from "./components/LogisticsProcess ";



export default function Home() {

  return (
    <>
      <HeroSection />
      <LogisticIntroduceSection />

      <ImageContainer />

      <WhyChooseUsSection />
      <LogisticsProcess />
      <MeatTeam />
   

    </>
  );
}