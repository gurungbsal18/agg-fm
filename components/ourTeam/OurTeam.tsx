import Image from "next/image";
import React from "react";

const teamData = [
  {
    id: 1,
    image: "/images/test-user.webp",
    name: "User 1",
    position: "Founder",
  },
  {
    id: 2,
    image: "/images/test-user.webp",
    name: "User 2",
    position: "CEO",
  },
  {
    id: 3,
    image: "/images/test-user.webp",
    name: "User 4",
    position: "Manager",
  },
];

export default function OurTeam() {
  return (
    <div className="my-24">
      <div className="flex flex-col justify-center items-center gap-2">
        <h4 className="content-title">Meet Our Team</h4>
        <p className="text-gray-500">
          "The People Powering Malaysia Leading Facilities Soutions"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {teamData.map((list) => {
          return (
            <div
              key={list.id}
              className="col-span-1 team-card hover:shadow-2xl"
            >
              <Image
                src={list.image}
                alt={list.name}
                width={1920}
                height={1080}
              />
              <div className="team-card-content">
                <p className="text0-primary font-semibold text-xl">
                  {list.name}
                </p>
                <p className="">{list.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
