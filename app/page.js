import Image from "next/image";
import HeroSection from "./components/HeroSection";
import LogisticIntroduceSection from "./components/LogisticIntroduceSection";
import ImageContainer from "./components/ImageContainer";
import MeatTeam from "./components/MeatTeam";


export default function Home() {
 
  return (
    <>
      <HeroSection />
     <LogisticIntroduceSection />
    <ImageContainer />
    <MeatTeam />
      
    </>
  );
}