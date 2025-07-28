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
      <div className="container animation-block">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 mb-8">
          <div className="order-2 md:order-1 col-span-12 md:col-span-3">
            <Image
              src="/images/valet-service.webp"
              alt="valet service"
              width={1920}
              height={1080}
              className="shadow-2xl rounded-2xl"
            />
          </div>
          <div className="order-1 md:order-2 col-span-12 md:col-span-9">
            <h4 className="content-title">Valet Parking</h4>
            <div className="content">
              <p>
                Get a fully managed valet parking service at your location. We
                can customize our valet service to fit any parking locations or
                events. We hire highly trained jockeys, insurance coverage and
                charge very flexible pricing. Just drop your keys with the
                jockey and our billing solutions will offer customers on per
                hour or per entry billing after a specific time or day. This can
                be implemented for low traffic locations and on weekends. We can
                also customize monthly access for your highly valued customers.
                This is normally implemented at office building areas.
              </p>
            </div>
          </div>
        </div>

        <h4 className="content-title">Seamless Service Operation</h4>

        <h4 className="font-bold">Guests arrives</h4>
        <div className="content">
          <p>
            Valet offers a concierge service, welcoming all customers, saving
            time and frustration of parking.
          </p>
        </div>

        <h4 className="font-bold">Car checked-in seamlessly by valet</h4>
        <div className="content">
          <p>
            Valet customers provide their phone number which allows the valet to
            generate an SMS ticket sent directly to their phone immediately. Car
            condition report captured and saved to cloud.
          </p>
          <p>
            Check-in takes one to two minutes. Customers can enter the showroom
            or service centre and relax in comfort.
          </p>
        </div>

        <h4 className="font-bold">
          Guest clicks on SMS link to retrive their car
        </h4>
        <div className="content">
          <p>
            Alert valet before leaving, avoiding waiting time in the car park.
          </p>
        </div>

        <h4 className="font-bold">Car is ready and waiting</h4>
        <div className="content">
          <p>
            Customer arrives at valet stand and their car is ready and waiting
            for them, having been checked for any damage. Ticket number is
            verified on their phone. Customer departs venue.
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
