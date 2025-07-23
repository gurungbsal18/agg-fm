import OurTeam from "@/components/ourTeam/OurTeam";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function AboutUsPage() {
  return (
    <>
      <PageHeader title="About us" />
      <div className="container">
        <div className="content">
          <p>
            AGG Facilities Management PLT is an integrated facilities management
            service provider in Malaysia. Our customers depend on us to provide
            essential services for their businesses across a diverse range of
            industries.
          </p>
          <p>
            We deliver integrated facilities services for customers across high
            end residential, commercial centres, educational institutions,
            airport terminals, transit hubs, healthcare centres and aged care.
          </p>
          <p>
            We have a diverse workforce of highly trained professionals
            delivering services across the spectrum, from frontline soft
            services in high-risk settings to high-end hospitality services in
            iconic venues to mechanical HVAC and refurbishment services for
            corporate buidlings to security services for events, airports and
            hospitals.
          </p>
          <p>
            These facility management services include: Swimming Pool &
            Landscape maintenance, cleaning, concierge, security services, car
            parking, and whole-of-life asset management services.
          </p>
          <p>
            With a 30-year history in these sectors operating as Spotless, our
            focus is to deliver operational excellence, investing in systems and
            applying innovative technologies that provide value for our
            customers including comprehensive data inventory systems and real
            time location services.
          </p>
          <p>
            Sustainability is a key feature of asset maintenance with a focus on
            energy efficient solutions as well as water conservation and
            monitoring services for grounds and garden maintenance.
          </p>
          <p>
            We can provide property and facilities management services for
            government departments, agencies and authorities at the federal,
            state and municipal level. Our streamlined approach to asset
            management systems works to move maintenance from ‘reactive’ to
            ‘planned’ spends. This allows our customers to better understand the
            costs of upkeep.
          </p>
        </div>

        <OurTeam />
      </div>
    </>
  );
}
