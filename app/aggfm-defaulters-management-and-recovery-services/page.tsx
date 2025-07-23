import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

export default function DefaultersManagementpage() {
  return (
    <div>
      <PageHeader title="AGGFM's Defaulters Management and Recovery Services" />
      <div className="container">
        <h4 className="content-title">
          AGGFM's Defaulters Management and Recover Services
        </h4>
        <div className="content">
          <p>
            Recovering outstanding maintenance fees under the Strata Management
            Act 2013 requires strict adherence to procedures, including issuing
            demand notices in Form 11 (for JMB) or Form 20 (for MC).
            Non-compliance with these requirements often leads to claim
            rejections by the Tribunal.
          </p>
          <p>
            Strata management bodies are advised and are provided professional
            guidance on recovery options and compliance with the Strata
            Management Act and related regulations.
          </p>
          <p>Options to Recover Outstanding Maintenance Charges in Malaysia:</p>
          <ul className="list-decimal ml-6">
            <li>Issuance of Demand Notices (Form 11 or Form 20)</li>
            <li>Filing a Claim with the Strata Management Tribunal</li>
            <li>
              Warrant of Attachment: AGGFM acts on behalf of Strata management
              bodies to apply with the Commissioner  of Buildings (COB) for a
              Warrant of Attachment. This process involves:
              <ul className="list-disc ml-6">
                <li>Applying for the warrant against the defaulter.</li>
                <li>
                  Preparing an inventory of movable assets in the defaulter's
                  unit.
                </li>
                <li>
                  Authorizing the attachment and auctioning assets under COB
                  supervision.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-banner">
        <Image
          src="/images/malaysia-night.webp"
          alt="malaysia night"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
