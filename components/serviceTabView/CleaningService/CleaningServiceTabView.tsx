"use client";
import { Button } from "@heroui/button";
import React, { useEffect, useState } from "react";
import AirportCleaningService from "./AirportCleaningService";
import SpecificService from "./SpecificService";

export default function CleaningServiceTabView() {
  const [activeTab, setActiveTab] = useState("airport");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <>
      <div className="mb-4 flex flex-row gap-4 items-center">
        <Button
          color="primary"
          variant={activeTab === "airport" ? "solid" : "flat"}
          onPress={(e) => setActiveTab("airport")}
          radius="sm"
          className="w-full md:w-auto"
        >
          Airport Cleaning
        </Button>
        <Button
          color="primary"
          variant={activeTab === "specific-service" ? "solid" : "flat"}
          onPress={(e) => setActiveTab("specific-service")}
          radius="sm"
          className="w-full md:w-auto"
        >
          Specific Services Offered
        </Button>
      </div>

      {activeTab === "airport" && (
        <div
          className={`${
            animate ? "hero-title-animation animate" : "hero-title-animation"
          }`}
        >
          <AirportCleaningService />
        </div>
      )}

      {activeTab === "specific-service" && (
        <div
          className={`${
            animate ? "hero-title-animation animate" : "hero-title-animation"
          }`}
        >
          <SpecificService />
        </div>
      )}

      {/* <AirportCleaningService />
      <SpecificService /> */}
    </>
  );
}
