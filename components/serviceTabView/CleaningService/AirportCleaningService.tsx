import Image from "next/image";
import React from "react";

export default function AirportCleaningService() {
  return (
    <>
      <Image
        src="/images/airport.webp"
        height={1080}
        width={1920}
        alt="airport"
        className="rounded-2xl shadow-2xl mr-8 mb-4 inner-page-image"
      />
      <h4 className="content-title">Airport Cleaning</h4>
      <div className="content">
        <p>
          Airport cleaning services encompass a wide range of tasks aimed at
          maintaining cleanliness and hygiene within airport facilities. These
          services often include cleaning terminals, restrooms, baggage handling
          areas, and even aircraft interiors, ensuring a pleasant and safe
          environment for passengers and staff
        </p>
        <p className="text-primary font-bold">
          Type of Airport Cleaning Services:
        </p>

        <h4 className="font-bold">Terminal Cleaning:</h4>
        <p>
          This involves cleaning and sanitizing all areas of the airport
          terminal, including floors, windows, furniture, and public spaces.
        </p>

        <h4 className="font-bold">Restroom Cleaning</h4>
        <p>
          Maintaining clean and well-stocked restrooms is crucial for passenger
          satisfaction. This includes regular cleaning, restocking supplies, and
          ensuring proper hygiene.
        </p>

        <h4 className="font-bold">Baggage Handling Area Cleaning:</h4>
        <p>
          Keeping these areas clean and free of debris is important for smooth
          baggage operations and passenger safety.
        </p>

        <h4 className="font-bold">Aircraft Interior Cleaning:</h4>
        <p>
          This involves cleaning and sanitizing the interiors of aircraft,
          including seats, tables, overhead bins, and lavatories.
        </p>

        <h4 className="font-bold">Specialized Cleaning:</h4>
        <p>
          Some airports may require specialized cleaning services, such as deep
          cleaning of kitchens or the use of advanced technologies like robotic
          floor cleaners.
        </p>

        <h4 className="font-bold">Ground Maintenance:</h4>
        <p>
          This may include landscaping, waste management, and other tasks to
          maintain the overall cleanliness and appearance of the airport
          grounds.
        </p>

        <h4 className="font-bold">24/7 sanitation guardians:</h4>
        <p>
          Some airports are now deploying robots to maintain floor sanitation
          and allow staff to focus on high-touch disinfection Brain Corp.
        </p>

        <h4 className="font-bold">
          Day-to-day contractual cleaning or supply of cleaners:
        </h4>
        <p>
          Cleaning services can be provided on a contractual basis or through
          the supply of cleaning staff to the airport
        </p>
      </div>
    </>
  );
}
