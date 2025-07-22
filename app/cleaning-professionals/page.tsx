import PageHeader from "@/components/PageHeader";
import CleaningProfessionalsTabView from "@/components/serviceTabView/CleaningProfessionalsTabView";
import React from "react";

export default function CleaningProfessionalsPage() {
  return (
    <div>
      <PageHeader
        title="AGGFM's Cleaning Professionals"
        image="/images/cleaning-banner.webp"
      />
      <div className="container">
        <h4 className="content-title">AGGFM's Cleaning Professionals</h4>
        <div className="content">
          <p>
            A well-maintained building enhances comfort and preserves market
            appeal. AGGFM ensures top-tier cleaning services with experienced
            professionals and strict compliance with Environmental Management,
            Quality Assurance, and Workplace Health & Safety (WHS) standards.
          </p>
          <ul className="list-decimal ms-4">
            <li>
              Expertise - Highly skilled professionals available for all types
              of environments and  diverse industries.
            </li>
            <li>
              Proaxtivity - Efficiently addressing and meeting diverse cleaning
              needs for optimal results
            </li>
            <li>
              High Standards - Highly skilled and experienced professionals
              available for all types  of environments.
            </li>
            <li>
              Safety First - WHS methods for enhancing workplace health and
              safety
            </li>
          </ul>
        </div>

        <CleaningProfessionalsTabView />
      </div>
    </div>
  );
}
