"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import React, { useState } from "react";
import { GoShieldCheck } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";

// -------------------------
// ✅ Types
// -------------------------
type ServiceDetail = {
  id: number;
  content: string;
};

type ServiceData = {
  id: number;
  title: string;
  image: string;
  detail: ServiceDetail[];
};

// -------------------------
// ✅ Static Data
// -------------------------
const SecurityAndAccessControlData: ServiceData[] = [
  {
    id: 1,
    title: "Security and Access Control",
    image: "/images/building-safety.webp",
    detail: [
      { id: 1, content: "Restrict access to unauthorized individuals" },
      { id: 2, content: "Maintain the Daily Occurence Book (DOB)" },
      { id: 3, content: "Manage the Move-in and Notice Diary (MIND)" },
      {
        id: 4,
        content: "Maintain building safety and assist the building manager",
      },
    ],
  },
];

const ConvenienceAndLifestyleServicesData: ServiceData[] = [
  {
    id: 1,
    title: "Convenience and Lifestyle Services",
    image: "/images/concierge-1.webp",
    detail: [
      { id: 1, content: "Recieve and manage deliveries and packages" },
      { id: 2, content: "Handle dry cleaning drop-off and pick-up" },
      { id: 3, content: "Arrange and oversee flower deliveries" },
      { id: 4, content: "Provide weekly Concierge Reports (CR)" },
    ],
  },
];

const PersonalisedAssistanceData: ServiceData[] = [
  {
    id: 1,
    title: "Personalised Assistance",
    image: "/images/service-conciergerie.webp",
    detail: [
      { id: 1, content: "Warmly welcome residents and guests" },
      { id: 2, content: "Provide local knowledge and recommendations" },
      { id: 3, content: "Assist residents with bags and shopping" },
      { id: 4, content: "Open door and call lifts" },
      { id: 5, content: "Book taxis and arrange transportation" },
      { id: 6, content: "Refer residents to home cleaning services" },
    ],
  },
];

// -------------------------
// ✅ Component
// -------------------------
export default function ConciergeServiceTabView() {
  const [activeTab, setActiveTab] = useState<
    "security" | "convenience" | "personalised"
  >("security");

  const renderTabData = (data: ServiceData[]) => {
    return data.map((list: ServiceData) => (
      <div key={list.id} className="grid grid-1 md:grid-cols-12 gap-8 mt-8">
        <div className="col-span-12 md:col-span-4">
          <Image
            src={list.image}
            alt={list.title}
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-4 col-span-12 md:col-span-8">
          <h4 className="content-title">{list.title}</h4>
          <ul>
            {list.detail.map((item: ServiceDetail) => (
              <li key={item.id} className="list-decimal ms-4">
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <Button
          radius="sm"
          onPress={() => setActiveTab("security")}
          color={activeTab === "security" ? "primary" : "primary"}
          variant={activeTab === "security" ? "solid" : "flat"}
        >
          <GoShieldCheck size={18} />
          Security and Access Control
        </Button>
        <Button
          radius="sm"
          onPress={() => setActiveTab("convenience")}
          color={activeTab === "convenience" ? "primary" : "primary"}
          variant={activeTab === "convenience" ? "solid" : "flat"}
        >
          <HiOutlineHome size={18} />
          Convenience and Lifestyle Services
        </Button>
        <Button
          radius="sm"
          onPress={() => setActiveTab("personalised")}
          color={activeTab === "personalised" ? "primary" : "primary"}
          variant={activeTab === "personalised" ? "solid" : "flat"}
        >
          <HiUser size={18} />
          Personalised Assistance
        </Button>
      </div>

      {activeTab === "security" && renderTabData(SecurityAndAccessControlData)}
      {activeTab === "convenience" &&
        renderTabData(ConvenienceAndLifestyleServicesData)}
      {activeTab === "personalised" &&
        renderTabData(PersonalisedAssistanceData)}
    </div>
  );
}
