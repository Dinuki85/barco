import Image from "next/image";
import HeroSection from "./components/HeroSection";
import LogisticIntroduceSection from "./components/LogisticIntroduceSection";
import ImageContainer from "./components/ImageContainer";
import MeetTeam from "./components/MeetTeam";
import WhyChooseUsSection from "./components/WhyChooseUs";
import LogisticsProcess from "./components/LogisticsProcess";



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