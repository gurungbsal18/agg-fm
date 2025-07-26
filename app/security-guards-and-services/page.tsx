import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

export default function SecuriGuardAndServicesPage() {
  return (
    <div>
      <PageHeader
        title="Security Guards and Services"
        image="/images/security-guard-banner.webp"
      />
      <div className="container animation-block">
        <h4 className="content-title">Our Security Services</h4>
        <div className="content">
          <p>
            AGGFM Deploys a wide range of professional security services,
            bodyguards for events, personal security guards for homes,
            residential buildings, commercial malls and corporate buildings. Our
            security personnels works with you to protect you, your family,
            business and the assets with site-specific solutions.
          </p>
          <p>
            From security guards and alarm systems to access control and CCTV,
            we have the experience and expertise to tailor a security solution
            which keeps you and your guests safe. AGGFM has proven experience in
            security systems and personnel Malaysia and Asia-wide to protect
            your most critical assets – your people and facilities.
          </p>
        </div>

        <h4 className="text-primary font-bold">Security Protocol</h4>
        <div className="content">
          <p>
            AGGFM’s security patrols are a highly visible deterrent to crime,
            providing regular checks of your premises and their surroundings.
          </p>
        </div>

        <h4 className="text-primary font-bold">Static Guards</h4>
        <div className="content">
          <p>
            For a more permanent security presence, our static guards can be
            assigned to various locations, including entrances, exits, reception
            areas, and parking lots.
          </p>
        </div>

        <h4 className="text-primary font-bold">Maintaining CCTV</h4>
        <div className="content">
          <p>
            AGGFM’s team of qualified security technicians can maintain and
            repair your CCTV system, ensuring it is always operating at peak
            performance.
          </p>
        </div>

        <h4 className="text-primary font-bold">
          Monitoring & Maintaining access control
        </h4>
        <div className="content">
          <p>
            AGGFM Security team can monitor and maintain your access control
            system, ensuring that only authorised personnel can access your
            premises.
          </p>
        </div>

        <h4 className="text-primary font-bold">
          Site inductions and compliance
        </h4>
        <div className="content">
          <p>
            AGGFM’s Security team can provide comprehensive inductions for new
            staff and visitors to your premises, ensuring they have a thorough
            understanding of your security procedures.
          </p>
        </div>

        <h4 className="text-primary font-bold">Emergency response</h4>
        <div className="content">
          <p>
            In the event of an emergency, AGGFM security guards are trained to
            provide a rapid response, ensuring the safety of your personnel and
            property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 pt-8">
          <div className="col-span-1 md:col-span-4">
            <Image
              src="/images/security-image.webp"
              alt="security image"
              width={1920}
              height={1080}
              className="shadow-2xl rounded-lg"
            />
          </div>
          <div className="col-span-1 md:col-span-8">
            <h4 className="content-title">
              AGGFM Security Team Meets the needs of diverse industries
            </h4>
            <div className="content">
              <p>
                With experience servicing diverse sectors – from defence and
                large-scale warehouses to professional events – we ensure utmost
                attention to safety and compliance requirements of each
                industry. Security monitoring services are managed by Grade A1
                ASIAL rated control rooms, giving you peace of mind 24/7. We
                also specialise in concierge services for sporting and large
                events, deploying security, event management and crowd control
                options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
