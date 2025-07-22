import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

export default function MechanicalElectricalPlumbingPage() {
  return (
    <div>
      <PageHeader
        title="Mechanical, Electrical, and Plumbing (MEP)"
        image="/images/mep-banner.webp"
      />

      <div className="container">
        <h4 className="content-title">
          AGGFM's Mechanical, Electrical, and Plumbing (MEP)
        </h4>
        <div className="content">
          <p>
            AGGFM’s Mechanical, Electrical and Plumbing (MEP) services,
            are essential for ensuring the functionality, safety, and comfort of
            buildings. They involve the design, installation, and maintenance of
            systems for water supply, drainage, electrical power, lighting,
            heating, ventilation, and air conditioning.
          </p>
          <p>Key Aspects of Building Electrical and Plumbing Services:</p>
        </div>

        <h4 className="content-title">MEP Services:</h4>
        <div className="content">
          <p>
            This term encompasses all aspects of a building's infrastructure
            that are not part of the structural or architectural elements,
            including mechanical, electrical, and plumbing systems.
          </p>
        </div>

        <h4 className="content-title">Functionality and Comfort:</h4>
        <div className="content">
          <p>
            These services ensure that buildings have the necessary utilities
            for lighting, heating, ventilation, air conditioning, and water
            supply, making them habitable and comfortable.
          </p>
        </div>

        <h4 className="content-title">Safety and Compliance:</h4>
        <div className="content">
          <p>
            MEP services are designed and installed to meet safety standards and
            regulations, ensuring the building is safe for occupants and
            complies with relevant codes.
          </p>
        </div>

        <h4 className="content-title">Integration:</h4>
        <div className="content">
          <p>
            Proper integration of MEP systems is crucial for a building's
            overall efficiency, reducing energy consumption and operational
            costs.
          </p>
        </div>

        <h4 className="content-title">Design and Installation:</h4>
        <div className="content">
          <p>
            MEP systems are designed by specialized engineers and installed by
            skilled tradespeople, ensuring they function correctly and are safe.
          </p>
        </div>

        <h4 className="content-title">Specific Services within MEP:</h4>
        <ul>
          <li>
            <span className="font-bold">Electrical:</span>This includes wiring,
            power distribution, lighting, and control systems.
          </li>
          <li>
            <span className="font-bold">Plumbing:</span>This covers water
            supply, drainage, sanitation, and waste management systems.
          </li>
          <li>
            <span className="font-bold">Mechanical:</span>This includes heating,
            ventilation, air conditioning, and other systems that regulate the
            building's environment.
          </li>
        </ul>
      </div>

      <div className="page-banner">
        <Image
          src="/images/mep-banner-services.webp"
          alt="maintenance, electrical and plumbing service"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
