import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

export default function LandscapeMaintenanceServices() {
  return (
    <div>
      <PageHeader
        title="Landscape Maintenance Services"
        image="/images/landscape-2.webp"
      />

      <div className="container">
        <h4 className="content-title">
          AGGFM's Landscape Maintenance Services
        </h4>
        <div className="content">
          <p>
            AGGFM’s landscape maintenance services encompass a wide range of
            tasks focused on preserving the health and appearance of outdoor
            spaces as high rise buildings. These services typically
            include mowing, trimming, pruning, fertilizing, weeding, pest
            control, irrigation management, and removal of debris. The specific
            scope of work can vary greatly depending on the client's needs and
            the type of property being maintained.
          </p>
          <p>Detailed scope of work elements:</p>
        </div>

        <h4 className="content-title">Lawn Care:</h4>
        <div className="content">
          <p>
            Mowing, edging, weed control (manual and chemical), aeration,
            overseeding, and applying fertilizers.
          </p>
        </div>

        <h4 className="content-title">Plant Health:</h4>
        <div className="content">
          <p>
            Pruning, trimming shrubs and trees, removing dead or diseased plant
            material, applying pesticides or herbicides for pest and disease
            control, and ensuring proper plant spacing.
          </p>
        </div>

        <h4 className="content-title">Hardscape Maintenance:</h4>
        <div className="content">
          <p>
            Maintaining walkways, driveways, patios, retaining walls, and other
            hardscape features by cleaning, repairing, and sealing them.
          </p>
        </div>

        <h4 className="content-title">Irrigation System:</h4>
        <div className="content">
          <p>
            Checking for leaks, repairing or replacing irrigation heads, and
            ensuring proper functioning of the irrigation system.
          </p>
        </div>

        <h4 className="content-title">Debris Removal:</h4>
        <div className="content">
          <p>
            Picking up fallen leaves, grass clippings, and other debris, as well
            as removing trash from outdoor spaces.
          </p>
        </div>

        <h4 className="content-title">Fertilization and Soil Health:</h4>
        <div className="content">
          <p>
            Applying fertilizers to lawns and beds, testing soil pH, and adding
            soil amendments to improve soil health.
          </p>
        </div>

        <h4 className="content-title">Pest and Disease Control:</h4>
        <div className="content">
          <p>
            Identifying and treating pest infestations and diseases in plants,
            using appropriate methods (e.g., biological control, targeted
            chemical treatments).
          </p>
        </div>

        <h4 className="content-title">Mulching:</h4>
        <div className="content">
          <p>
            Applying mulch to garden beds to suppress weeds, retain moisture,
            and improve soil health.
          </p>
        </div>

        <h4 className="content-title">Other Services:</h4>
        <div>
          <ul>
            <li>Snow and ice removal</li>
            <li>Landscape lighting maintenance</li>
            <li>Water feature maintenance (ponds, fountains)</li>
            <li>Hardscape installation and repair</li>
            <li>Redesign and implementation of new landscaping features</li>
          </ul>
        </div>
      </div>

      <div className="page-banner">
        <Image
          src="/images/landscape-1.webp"
          alt="lawn care"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
