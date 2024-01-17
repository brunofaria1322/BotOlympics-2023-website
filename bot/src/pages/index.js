import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CompetitionSection from "../components/CompetitionSection";
import ResultsSection from "../components/ResultsSection";
import TeamSection from "../components/TeamSection";
import SponsorsSection from "../components/SponsorsSection";
import FAQSection from "../components/FAQSection";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //window.scrollTo(0, 0);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <AboutSection />
      <CompetitionSection />
      <ResultsSection />
      <SponsorsSection />
      <TeamSection />
      <FAQSection />
      <LocationSection />
      <Footer/>
    </>
  );
};

export default Home;
