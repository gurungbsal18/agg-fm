import PageHeader from "@/components/PageHeader";
import CleaningServiceTabView from "@/components/serviceTabView/CleaningService/CleaningServiceTabView";
import React from "react";

export default function CleaningServicesPage() {
  return (
    <div>
      <PageHeader
        title="Cleaning Services"
        image="/images/cleaning-service-banner.webp"
      />
      <div className="container">
        <CleaningServiceTabView />
      </div>{" "}
    </div>
  );
}
