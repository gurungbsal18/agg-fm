import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

export default function ValetParkingPage() {
  return (
    <div>
      <PageHeader
        title="Valet Parking Services"
        image="/images/valet-parking.webp"
      />
      <div className="container">
        <h4 className="content-title">Valet Parking</h4>
        <div className="content">
          <p>
            Get a fully managed valet parking service at your location. We can
            customize our valet service to fit any parking locations or events.
            We hire highly trained jockeys, insurance coverage and charge very
            flexible pricing. Just drop your keys with the jockey and our
            billing solutions will offer customers on per hour or per entry
            billing after a specific time or day. This can be implemented for
            low traffic locations and on weekends. We can also customize monthly
            access for your highly valued customers. This is normally
            implemented at office building areas.
          </p>
        </div>
      </div>

      {/* <div className="page-banner">
        <Image
          src="/images/valet-parking-img.webp"
          alt="valet parking"
          width={1920}
          height={1080}
        />
      </div> */}
    </div>
  );
}
