import React from "react";
import HeroSection from "./HeroSection";
import AboutAAboutAGGSection from "./AboutAGGSection";
import AggFacilitiesSection from "./AggFacilitiesSection";

export default function HomePageComponents() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-48 py-24 view-animation">
        <AboutAAboutAGGSection />
        <AggFacilitiesSection />
      </div>
    </>
  );
}
