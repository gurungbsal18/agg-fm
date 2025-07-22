"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import React, { useState } from "react";

const SecurityAndAccessControlData = [
  {
    id: 1,
    title: "Security and Access Control",
    image: "/images/building-safety.webp",
    detail: [
      {
        id: 1,
        content: "Restrict access to unauthorized individuals",
      },
      {
        id: 2,
        content: "Maintain the Daily Occurence Book (DOB)",
      },
      {
        id: 3,
        content: "Manage the Move-in and Notice Diary (MIND)",
      },
      {
        id: 4,
        content: "Maintain building safety and assist the building manager",
      },
    ],
  },
];

const ConvenienceAndLifestyleServicesData = [
  {
    id: 1,
    title: "Convenience and Lifestyle Services",
    image: "/images/delivery.webp",
    detail: [
      {
        id: 1,
        content: "Recieve and manage deliveries and packages",
      },
      {
        id: 2,
        content: "Handle dry cleaning drop-off and pick-up",
      },
      {
        id: 3,
        content: "Arrange and oversee flower deliveries",
      },
      {
        id: 4,
        content: "Provide weekly Concierge Reports (CR)",
      },
    ],
  },
];

const PersonalisedAssistanceData = [
  {
    id: 1,
    title: "Personalised Assistance",
    image: "/images/service-conciergerie.webp",
    detail: [
      {
        id: 1,
        content: "Warmly welcome residents and guests",
      },
      {
        id: 2,
        content: "Provide local knowledge and recommendations",
      },
      {
        id: 3,
        content: "Assist residents with bags and shopping",
      },
      {
        id: 4,
        content: "Open door and call lifts",
      },
      {
        id: 5,
        content: "Book taxis and arrange transportation",
      },
      {
        id: 6,
        content: "Refer residents to home cleaning services",
      },
    ],
  },
];

export default function ConciergeServiceTabView() {
  const [isActive, setIsActive] = useState(false);

  const handleSecurityTab = () => {
    setIsActive(isActive);
  };

  return (
    <div className="mt-8">
      <div className="flex gap-8">
        <Button radius="sm" onClick={() => handleSecurityTab()}>
          Security and Access Control
        </Button>
        <Button radius="sm">Convenience and Lifestyle Services</Button>
        <Button radius="sm">Personalised Assistance</Button>
      </div>

      {!isActive &&
        SecurityAndAccessControlData.map((list) => {
          return (
            <div key={list.id} className="grid grid-cols-12 gap-8 mt-8">
              <div className="col-span-4">
                <Image
                  src={list.image}
                  alt={list.title}
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="flex flex-col gap-4 col-span-8">
                <h4 className="content-title">{list.title}</h4>
                <ul>
                  {list.detail.map((items) => {
                    return (
                      <li key={items.id} className="list-decimal ms-4">
                        {items.content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

      {isActive &&
        ConvenienceAndLifestyleServicesData.map((list) => {
          return (
            <div key={list.id} className="grid grid-cols-12 gap-8 mt-8">
              <div className="col-span-4">
                <Image
                  src={list.image}
                  alt={list.title}
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="flex flex-col gap-4 col-span-8">
                <h4 className="content-title">{list.title}</h4>
                <ul>
                  {list.detail.map((items) => {
                    return (
                      <li key={items.id} className="list-decimal ms-4">
                        {items.content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

      {isActive &&
        PersonalisedAssistanceData.map((list) => {
          return (
            <div key={list.id} className="grid grid-cols-12 gap-8 mt-8">
              <div className="col-span-4">
                <Image
                  src={list.image}
                  alt={list.title}
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="flex flex-col gap-4 col-span-8">
                <h4 className="content-title">{list.title}</h4>
                <ul>
                  {list.detail.map((items) => {
                    return (
                      <li key={items.id} className="list-decimal ms-4">
                        {items.content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
}
