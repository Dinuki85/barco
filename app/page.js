import Image from "next/image";
import HeroSection from "./components/HeroSection";
import LogisticIntroduceSection from "./components/LogisticIntroduceSection";
import ImageContainer from "./components/ImageContainer";
import MeatTeam from "./components/MeatTeam";
import WhyChooseUsSection from "./components/WhyChooseUs";
import LogisticsProcess from "./components/LogisticsProcess ";
import Footer from "./components/Footer";


export default function Home() {

  return (
    <>
      <HeroSection />
      <LogisticIntroduceSection />

      <ImageContainer />

      <WhyChooseUsSection />
      <LogisticsProcess />
      <MeatTeam />
      <Footer />

    </>
  );
}