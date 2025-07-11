import React from "react";
import "./Home.css";
import HeroSection from "../../Component/HeroSection/HeroSection";
import WhoWeAre from "../../Component/WhoWeAre/WhoWeAre";
import Top10 from "../../Component/Top10/Top10";
import ItemGellery from "../../Component/ItemGellery/ItemGellery";
import Aboutsection from "../../Component/AboutSection/Aboutsection";
import FAQ from "../../Component/FAQ/FAQ";
import ContactSection from "../../Component/ContactSection/ContactSection";
import MiddleBanner from "../../Component/Middle-banner/MiddleBanner";

function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <Aboutsection />
      <WhoWeAre />
      <hr className="w-[90%] h-[1px]  my-[3px] text-white" />
      <MiddleBanner />
      <hr className="w-[90%] h-[1px]  my-[3px] text-white" />
      <Top10 />
      <FAQ />
      <ContactSection />
    </div>
  );
}

export default Home;
