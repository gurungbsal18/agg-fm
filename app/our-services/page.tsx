import PageHeader from "@/components/PageHeader";
import ServicePageDetail from "@/components/ServicePageDetail/ServicePageDetail";
import React from "react";

export default function OurServicepage() {
  return (
    <div>
      <PageHeader title="Our Services" image="/images/building-1.webp" />
      <div className="container">
        <ServicePageDetail />
      </div>
    </div>
  );
}
