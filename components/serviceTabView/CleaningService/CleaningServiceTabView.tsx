"use client";
import { Button } from "@heroui/button";
import React, { useState } from "react";
import AirportCleaningService from "./AirportCleaningService";
import SpecificService from "./SpecificService";

export default function CleaningServiceTabView() {
  const [activeTab, setActiveTab] = useState("airport");

  return (
    <>
      <div className="mb-4 flex flex-col md:flex-row gap-4 items-center">
        <Button
          color="primary"
          variant={activeTab === "airport" ? "solid" : "flat"}
          onPress={(e) => setActiveTab("airport")}
        >
          Airport Cleaning
        </Button>
        <Button
          color="primary"
          variant={activeTab === "specific-service" ? "solid" : "flat"}
          onPress={(e) => setActiveTab("specific-service")}
        >
          Specific Services Offered
        </Button>
      </div>

      {activeTab === "airport" && (
        <>
          <AirportCleaningService />
        </>
      )}

      {activeTab === "specific-service" && (
        <>
          <SpecificService />
        </>
      )}

      {/* <AirportCleaningService />
      <SpecificService /> */}
    </>
  );
}
