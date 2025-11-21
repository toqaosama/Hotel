import React from "react";
import Navbar from "../components/Navbar";
import Heroo from "../components/Hero";
import DiscoverSectionn from "../components/DiscoverSection";
import DreamSectionn from "./../components/DreamSection";
import SplitHoverSectionn from "./../components/SplitHoverSection";
import ExperienceSectionn from "../components/ExperienceSection";
import ExperienceSection22 from "../components/ExperienceSection2";
import ExperienceSection33 from "../components/ExperienceSection3";
import PageLeftt from "../components/PageLeft";
import PageRightt from "../components/PageRight";
import AboutSectionn from "../components/AboutSection";
import LandingSliderr from "../components/LandingSlider";
import CardCarousell from "../components/CardCarousel";
import PreFooter from "../components/preFooter";
import Footerr from "../components/Footer";



function Home() {
  return (
    <div>
      <Navbar />
      <Heroo />
      <DiscoverSectionn />
      <DreamSectionn />
      <SplitHoverSectionn />
      <ExperienceSectionn />
       <PageRightt />
      <ExperienceSection22 />
           <PageLeftt />
     <AboutSectionn />
 <LandingSliderr />
      <ExperienceSection33 />
      <CardCarousell />
      <PreFooter />
      <Footerr />
    </div>
  );
}

export default Home;
