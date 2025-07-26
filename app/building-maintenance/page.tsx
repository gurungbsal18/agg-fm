import PageHeader from "@/components/PageHeader";
import React from "react";

export default function BuildingMaintenancePage() {
  return (
    <div>
      <PageHeader
        title="Building Maintenance"
        image="/images/building-maintenance-2.webp"
      />

      <div className="container">
        <h4 className="content-title">Building Maintenance</h4>
        <div className="content">
          <p>
            Building Management is a client‐focused building management
            department dedicated to delivering exceptional service. Our robust
            systems management, comprehensive training, and diligent staff
            oversight ensure that all service deliverables are consistently met.
          </p>
          <p>
            For over 30 years, we have developed detailed Standard Operating
            Procedures (SOPs) and Building Operating Procedures (BOPs) that
            establish clear guidelines for service delivery. Complemented by a
            comprehensive KPI system, our strata committees across Malaysia and
            Asia that can clearly define the role and expectations of a building
            manager.
          </p>
        </div>
      </div>
    </div>
  );
}
