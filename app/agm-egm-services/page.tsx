import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

export default function AgmEgmServicesPage() {
  return (
    <div>
      <PageHeader title="AGM/EGM Services" image="/images/night.webp" />
      <div className="container animation-block">
        <h4 className="content-title">AGM/EGM Services</h4>
        <div className="content">
          <p>
            AGM/EGM services typically include the preparation, organization,
            and execution of Annual General Meetings (AGMs) and Extraordinary
            General Meetings (EGMs) for Joint Management Bodies and Management
            Corporations. These services ensure that the meetings are conducted
            smoothly, compliantly, and in accordance with relevant regulations.
          </p>
        </div>

        <h4 className="font-bold">Preparation and organization:</h4>
        <div className="content">
          <p>
            This includes drafting notices, agendas, proxy forms, and other
            relevant documentation for the meetings along with
            printing/photocopying, enveloping and AR postages.
          </p>
        </div>
        <h4 className="font-bold">Logistics and administration:</h4>
        <div className="content">
          <p>
            Managing venue booking, registration of attendees, and other
            logistical aspects of the meeting.
          </p>
        </div>
        <h4 className="font-bold">Secretarial support:</h4>
        <div className="content">
          <p>
            Providing assistance with the meeting proceedings, such as recording
            minutes, managing voting procedures, and handling Q&A sessions.
          </p>
        </div>
        <h4 className="font-bold">Compliance and regulatory requirements:</h4>
        <div className="content">
          <p>
            Ensuring that the meetings are conducted in accordance with company
            law, listing rules, and other relevant regulations.
          </p>
        </div>
        <h4 className="font-bold">Virtual meeting solutions:</h4>
        <div className="content">
          <p>
            Providing platforms and support for virtual or hybrid AGM/EGM
            setups, including registration, voting, and Q&A functionalities.
          </p>
        </div>
        <h4 className="font-bold">Post-meeting support:</h4>
        <div className="content">
          <p>
            Assisting with the preparation and distribution of meeting minutes
            and other follow-up actions. 
          </p>
        </div>

        <p className="font-bold">Example of service providers:</p>

        <h4 className="font-bold">
          Secretarial services for JMB/MC monthly meetings:
        </h4>
        <div className="content">
          <p>
            We offer comprehensive AGM/EGM/Monthly meeting services as part of
            our broader JMB/MC secretarial service offerings.
          </p>
        </div>
        <h4 className="font-bold">Specialized service providers:</h4>
        <div className="content">
          <p>
            Our Company focus specifically on providing AGM/EGM support,
            including virtual meeting solutions and specialized software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 my-8">
          <div className="col-span-12 md:col-span-3">
            <Image
              src="/images/agm-egm-service.webp"
              alt="valet service"
              width={1920}
              height={1080}
              className="shadow-2xl rounded-2xl"
            />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h4 className="content-title">PRE AGM/EGM SERVICES FOR JMB/MC</h4>
            <div className="content">
              <h4 className="font-bold">Our Core Services</h4>
              <ul className="list-disc ps-4">
                <li>
                  Print & Photocopy AGM/EGM notices as forwarded by MO via
                  email.
                </li>
                <li>Place documents in a sealed envelope.</li>
                <li>
                  Print name and address on stickers and paste addressed
                  stickers to envelope.
                </li>
                <li>
                  Fill in AR (Acknowledgment of Receipt) card and post AR number
                  on envelope and postage list.
                </li>
                <li>Submit at Post Laju service centre.</li>
              </ul>

              <h4 className="font-bold">Charges</h4>
              <ul className="list-disc ps-4 mb-2">
                <li>Standard printing and photocopying charges.</li>
                <li>Standard AR postal charges as per weight and distance.</li>
                <li>Enveloping and labour charges : RM 2.50 per address.</li>
              </ul>
              <p>
                Note : We also take minutes of AGM/EGM at RM 800.00 unlimited
                hours for JMB/MC
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
