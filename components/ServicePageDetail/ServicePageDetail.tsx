import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServicePageDetail() {
  return (
    <div className="flex flex-col gap-16">
      {/* building maintenance */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-4">
          <Image
            src="/images/building-maintenance-2.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="col-span-1 md:col-span-8">
          <h4 className="content-title">Building Maintenance</h4>
          <div className="content">
            <p>
              Building Maintenance is a client‐focused building management
              department dedicated to delivering exceptional service. Our robust
              systems management, comprehensive training, and diligent staff
              oversight ensure that all service deliverables are consistently
              met.
            </p>
            <p>
              For over 30 years, we have developed detailed Standard Operating
              Procedures (SOPs) and Building Operating Procedures (BOPs) that
              establish clear guidelines for service delivery. Complemented by a
              comprehensive KPI system, our strata committees across Malaysia
              and Asia that can clearly define the role and expectations of a
              building manager.
            </p>
            <Link href="/building-maintenance">
              <Button radius="sm" color="primary">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* concierge srevices */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="order-2 md:order-1 col-span-1 md:col-span-8">
          <h4 className="content-title">Concierge Services</h4>
          <div className="content">
            <p>
              At AGGFM, we provide exceptional concierge services in Malaysia,
              ensuring a warm welcome and professional assistance for residents
              and guests. Our concierges are the first point of contact, and we
              pride ourselves on offering unmatched customer service, security,
              and convenience to elevate your living experience.
            </p>
            <p>
              Our dedicated concierge professionals are meticulously selected
              for their interpersonal skills, proactive approach, and attention
              to detail. Whether greeting residents, managing deliveries, or
              maintaining building security, our team is here to make your life
              easier.
            </p>
            <ul className="list-decimal ms-5">
              <li>Security and access control</li>
              <li>Convenience and lifestyle services</li>
              <li>Personal assistance</li>
            </ul>
            <Link href="/concierge-services">
              <Button radius="sm" color="primary" className="mt-4">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-4">
          <Image
            src="/images/service-conciergerie.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* cleaning professionals */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-4">
          <Image
            src="/images/cleaning-banner.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="col-span-1 md:col-span-8">
          <h4 className="content-title">AGGFM’s Cleaning Professionals</h4>
          <div className="content">
            <p>
              A well-maintained building enhances comfort and preserves market
              appeal. AGGFM ensures top-tier cleaning services with experienced
              professionals and strict compliance with Environmental Management,
              Quality Assurance, and Workplace Health & Safety (WHS) standards.
            </p>
            <ul className="list-decimal ms-5">
              <li>General and common area cleaning</li>
              <li>Executive cleaning</li>
              <li>Key cleaning Environments</li>
            </ul>
            <Link href="/cleaning-professionals">
              <Button radius="sm" color="primary">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* cleaning services */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="order-2 md:order-1 col-span-1 md:col-span-8">
          <h4 className="content-title">Cleaning Services</h4>
          <div className="content">
            <p>
              Airport cleaning services encompass a wide range of tasks aimed at
              maintaining cleanliness and hygiene within airport facilities.
              These services often include cleaning terminals, restrooms,
              baggage handling areas, and even aircraft interiors, ensuring a
              pleasant and safe environment for passengers and staff
            </p>
            <p>
              Educational institutions require specialized cleaning services to
              maintain a healthy and safe learning environment. These services
              typically include daily cleaning of classrooms, restrooms, and
              common areas, as well as specialized cleaning for libraries, labs,
              and sports facilities. Additional services may include deep
              cleaning, window washing, and waste management.
            </p>
            <Link href="/cleaning-services">
              <Button radius="sm" color="primary" className="mt-4">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-4">
          <Image
            src="/images/cleaning-service-banner.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* swimming maintenance */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-4">
          <Image
            src="/images/swimming-pool.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="col-span-1 md:col-span-8">
          <h4 className="content-title">
            AGGFM Swimming pool maintenance services
          </h4>
          <div className="content">
            <p>
              AGGFM swimming pool maintenance services ensure your pool remains
              clean, safe and functional. These services typically
              include regular cleaning, chemical balancing, and equipment
              maintenance. AGGFM specializes in swimming pool and water feature
              maintenance as it is part of a broader property management
              service. 
            </p>
            <p>Key aspects of swimming pool maintenance services:</p>
            <ul className="list-decimal ms-5">
              <li>Regular cleaning</li>
              <li>Chemical balancing</li>
              <li>Filtration maintenance</li>
              <li>Equipment inspection and maintenance</li>
              <li>Tile and surface cleaning</li>
              <li>Specialized treatments</li>
              <li>Professional advice</li>
            </ul>
            <Link href="/swimming-pool-and-maintenance-services">
              <Button radius="sm" color="primary" className="mt-4">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* landscape maintenance */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="order-2 md:order-1 col-span-1 md:col-span-8">
          <h4 className="content-title">
            AGGFM’s Landscape maintenance services
          </h4>
          <div className="content">
            <p>
              AGGFM’s landscape maintenance service encompass a wide range of
              tasks focused on preserving the health and appearance of outdoor
              spaces as high rise buildings. These services typically
              include mowing, trimming, pruning, fertilizing, weeding, pest
              control, irrigation management, and removal of debris. The
              specific scope of work can vary greatly depending on the client's
              needs and the type of property being maintained.
            </p>
            <p>Detailed Scope of Work Elements:</p>
            <ul className="list-decimal ms-5">
              <li>Lawn care</li>
              <li>Plant health</li>
              <li>Handscape maintenance</li>
              <li>Irrigation system</li>
              <li>Debris removal</li>
              <li>Fertilization and soil health</li>
              <li>Pest and disease control</li>
              <li>Mulching</li>
              <li>Other services</li>
            </ul>
            <Link href="/landscape-maintenance-services">
              <Button radius="sm" color="primary">
                View Detail
              </Button>
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 col-span-1 md:col-span-4">
          <Image
            src="/images/garden.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* mechanical, electrical and plumbing */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-4">
          <Image
            src="/images/mep-banner-services.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="col-span-1 md:col-span-8">
          <h4 className="content-title">
            AGGFM’s Mechanical, Electrical, and Plumbing (MEP)
          </h4>
          <div className="content">
            <p>
              AGGFM Mechanical, Electrical, and Plumbing (MEP) services,
              are essential for ensuring the functionality, safety, and comfort
              of buildings. They involve the design, installation, and
              maintenance of systems for water supply, drainage, electrical
              power, lighting, heating, ventilation, and air conditioning.
            </p>
            <p>Key Aspects of Building Electrical and Plumbing Services:</p>
            <ul className="list-decimal ms-5">
              <li>MEP Service</li>
              <li>Functionality and comfort</li>
              <li>Safety and compliance</li>
              <li>Integration</li>
              <li>Design and installation</li>
              <li>Electrical</li>
              <li>Plumbing</li>
              <li>Mechanical</li>
            </ul>
            <Link href="/mep-services">
              <Button radius="sm" color="primary" className="mt-4">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* defaulters management */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="order-2 md:order-1 col-span-1 md:col-span-8">
          <h4 className="content-title">
            AGGFM’s Defaulters Management & Recovery Services
          </h4>
          <div className="content">
            <p>
              Recovering outstanding maintenance fees under the Strata
              Management Act 2013 requires strict adherence to procedures,
              including issuing demand notices in Form 11 (for JMB) or Form
              20 (for MC). Non-compliance with these requirements often leads to
              claim rejections by the Tribunal.
            </p>
            <p>
              Strata management bodies are advised and are provided professional
              guidance on recovery options and compliance with the Strata
              Management Act and related regulations.
            </p>

            <Link href="/aggfm-defaulters-management-and-recovery-services">
              <Button radius="sm" color="primary">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-4">
          <Image
            src="/images/building-1.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* security guard maintenance */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-4">
          <Image
            src="/images/security-image.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="col-span-1 md:col-span-8">
          <h4 className="content-title">Security Guard Services</h4>
          <div className="content">
            <p>
              AGGFM Deploys a wide range of professional security services,
              bodyguards for events, personal security guards for homes,
              residential buildings, commercial malls and corporate buildings.
              Our security personnels works with you to protect you, your
              family, business and the assets with site-specific solutions.
            </p>
            <p>
              From security guards and alarm systems to access control and CCTV,
              we have the experience and expertise to tailor a security solution
              which keeps you and your guests safe. AGGFM has proven experience
              in security systems and personnel Malaysia and Asia-wide to
              protect your most critical assets – your people and facilities.
            </p>
            <p>Our security services:</p>
            <ul className="list-decimal ms-5">
              <li>Security patrols</li>
              <li>Maintaining CCTV</li>
              <li>Monitoring & Maintaining access control</li>
              <li>Site inductions and compliance</li>
              <li>Emergency response</li>
            </ul>
            <Link href="/security-guards-and-services">
              <Button radius="sm" color="primary" className="mt-4">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* inventory fixed assets */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="order-2 md:order-1 col-span-1 md:col-span-8">
          <h4 className="content-title">
            Inventory Fixed Assets Tagging Service
          </h4>
          <div className="content">
            <p>
              Inventory Asset tagging services involve the process of labeling
              physical assets with unique identifiers, such as barcodes, QR
              codes, or RFID tags, to facilitate tracking, management, and
              maintenance throughout the lifecycle. These services help
              organizations gain better visibility and control over their
              assets, leading to improved efficiency, reduced losses, and
              enhanced operational performance.
            </p>
            <Link href="/security-guards-and-services">
              <Button radius="sm" color="primary" className="mt-4">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-4">
          <Image
            src="/images/malaysia-night.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* agm/egm services */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-4">
          <Image
            src="/images/building-1.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="col-span-1 md:col-span-8">
          <h4 className="content-title">AGM/EGM Services</h4>
          <div className="content">
            <p>
              AGM/EGM services typically include the preparation, organization,
              and execution of Annual General Meetings (AGMs) and Extraordinary
              General Meetings (EGMs) for Joint Management Bodies and Management
              Corporations. These services ensure that the meetings are
              conducted smoothly, compliantly, and in accordance with relevant
              regulations.
            </p>
            <Link href="/security-guards-and-services">
              <Button radius="sm" color="primary" className="mt-4">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* valet parking */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="order-2 md:order-1 col-span-1 md:col-span-8">
          <h4 className="content-title">Valet Parking</h4>
          <div className="content">
            <p>
              Get a fully managed valet parking service at your location. We can
              customize our valet service to fit any parking locations or
              events. We hire highly trained jockeys, insurance coverage and
              charge very flexible pricing. Just drop your keys with the jockey
              and our billing solutions will offer customers on per hour or per
              entry billing after a specific time or day. This can be
              implemented for low traffic locations and on weekends. We can also
              customize monthly access for your highly valued customers. This is
              normally implemented at office building areas.
            </p>

            <Link href="/valet-parking">
              <Button radius="sm" color="primary">
                View Detail
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 md:col-span-4">
          <Image
            src="/images/valet-parking.webp"
            alt="building maintenance"
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
