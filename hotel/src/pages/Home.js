import React from "react";
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

import CardCarousell from "../components/CardCarousel";



function Home() {
  return (
    <div>
      <Heroo />
      <DiscoverSectionn />
      <DreamSectionn />
      <SplitHoverSectionn />
      <ExperienceSectionn />
       <PageRightt />
      <ExperienceSection22 />
           <PageLeftt />
     <AboutSectionn />
 
      <ExperienceSection33 />
      <CardCarousell />
    </div>
  );
}

export default Home;
