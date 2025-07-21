import React from "react";
import SectionTitle from "../SectionTitle";
import { Button } from "@heroui/button";
import Image from "next/image";

export default function AboutAAboutAGGSection() {
  return (
    <div className="container home-about-agg-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="col-span-1">
          <SectionTitle title="About AGG Facilities Management PLT" />
          <div className="text-justify my-4">
            <p>
              AGG Facilities Management PLT is an integrated facilities
              management service provider in Malaysia. We are your one stop
              integrated Building Support Services Provider. With a focus on
              quality, safety and environmental responsibility. We work closely
              with our clients to deliver customized solutions and help you save
              energy, reduce costs, and improve performance.
            </p>
            <p>
              By leveraging advanced technology, we also offer market-value
              services to a variety of sectors, both locally and
              internationally. Our customers depend on us to provide essential
              services for their businesses across a diverse range of
              industries.
            </p>
            <p>
              We deliver integrated facilities services for customers across
              high end residential, commercial centres, educational
              institutions, airport terminals, transit hubs, healthcare centres
              and aged care.
            </p>
          </div>
          <Button color="primary" radius="sm" className="w-full md:w-fit">
            Read More
          </Button>
        </div>

        <div className="col-span-1">
          <Image
            src="/images/homepage-1.webp"
            alt="condominium malaysia"
            width={1920}
            height={1080}
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
