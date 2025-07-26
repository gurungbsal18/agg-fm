"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  detail: string;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    image: "/images/team/team-1.webp",
    name: "Damodran Madavan",
    position: "Co-Founder",
    detail:
      "Co-founder who was involved in refining strategies, expanded operations, and prepared the company to its next phase of long-term success and sustainability. He had the fire of early co-founder and the discipline of a corporate leader, as an entrepreneurial scaler.",
  },
  {
    id: 2,
    image: "/aggfm-logo.svg",
    name: "Priyaa Mukiah",
    position: "CEO",
    detail:
      "An entrepreneurial scaler’ persona - the sweetspot of a certain  personality type, as her role is unique, working as a diamond in the rough. As the CEO, she makes final decisions on company strategy and other business goals.",
  },
  {
    id: 3,
    image: "/images/team/team-3.webp",
    name: "Vincenzo Ricci",
    position: "Chief Operating Officer",
    detail:
      "Manages AGG Facilities Management's day-to-day operations. He ensures the efficient and effective functioning of all departments, aligning operations with the company's overall strategy and goals. His role is crucial for optimizing productivity, streamlining processes, and achieving profitability.",
  },
  {
    id: 4,
    image: "/images/team/team-4.webp",
    name: "Reuben Semeyon",
    position: "Director of Asset Management",
    detail:
      "Brings a strong background in real estate operations and facilities management. With proven experience in managing both residential and commercial properties, he plays a key role in ensuring that all properties under our care are well-maintained, financially sound, and fully compliant with regulatory and safety standards.",
  },
  {
    id: 5,
    image: "/images/team/team-2.webp",
    name: "Vicnesh Muthukrishna",
    position: "HR and Administration Director",
    detail:
      "HR and Administration Director who bridges the gap between the company's strategic goals and its workforce, ensuring a productive and compliant work environment. His role combines the responsibilities of both as an HR Director and an Administrative Leader, focusing on people-related initiatives alongside operational efficiency.",
  },
];

export default function OurTeam() {
  const [openModalData, setOpenModalData] = useState<TeamMember | null>(null);
  const [animateModal, setAnimateModal] = useState(false);

  // Animate on modal open
  useEffect(() => {
    if (openModalData) {
      setAnimateModal(false);
      const timeout = setTimeout(() => setAnimateModal(true), 50);
      document.body.style.overflow = "hidden";
      return () => clearTimeout(timeout);
    } else {
      document.body.style.overflow = "";
    }
  }, [openModalData]);

  return (
    <div className="my-24">
      <div className="flex flex-col justify-center items-center gap-2">
        <h4 className="content-title">Meet Our Team</h4>
        <p className="text-gray-500 text-center">
          "The People Powering AGG Facilities Management PLT"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="col-span-1 team-card hover:shadow-2xl"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={1920}
              height={1080}
            />
            <div className="team-card-content">
              <p className="text-primary font-semibold text-xl">
                {member.name}
              </p>
              <p>{member.position}</p>
              <Button
                className="w-full mt-2"
                radius="sm"
                color="primary"
                onPress={() => setOpenModalData(member)}
              >
                View Detail
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openModalData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 modal-backdrop">
          <div
            className={`bg-white rounded-xl p-6 max-w-2xl w-full relative shadow-lg transition-all ${
              animateModal ? "modal-open-animation animate" : ""
            }`}
          >
            <button
              onClick={() => setOpenModalData(null)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black hover:cursor-pointer"
            >
              <IoClose size={24} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1">
                <Image
                  src={openModalData.image}
                  alt={openModalData.name}
                  width={300}
                  height={300}
                  className="rounded-xl w-full md:w-auto"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center">
                <h4 className="text-2xl font-bold mb-2">
                  {openModalData.name}
                </h4>
                <p className="text-primary mb-1 font-medium">
                  {openModalData.position}
                </p>
                <p>{openModalData.detail}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
