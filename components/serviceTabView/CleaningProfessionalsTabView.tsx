"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import React, { useState } from "react";

type detailProps = {
  id: number;
  content: string;
};

type cleaningProfessionalsDataProps = {
  title: string;
  image?: string;
  detail: detailProps[];
};

const generalCleaningData: cleaningProfessionalsDataProps[] = [
  {
    title: "General and common area cleaning",
    image: "/images/floor-cleaning.webp",
    detail: [
      {
        id: 1,
        content: "Sweeping, mopping, dusting, and disinfection",
      },
      {
        id: 2,
        content: "Deep cleaning for hard surfaces",
      },
      {
        id: 3,
        content: "Water pressure & carpet cleaning",
      },
      {
        id: 4,
        content: "Streak-free window & glass cleaning",
      },
      {
        id: 5,
        content: "Garden & car park upkeep",
      },
    ],
  },
];

const executiveCleaningData: cleaningProfessionalsDataProps[] = [
  {
    title: "Executive cleaning",
    detail: [
      {
        id: 1,
        content: "Specialised scrubbing, steam cleaning & graffiti removal",
      },
      {
        id: 2,
        content: "Glass and facade detailing for a spotless first impression",
      },
      {
        id: 3,
        content: "Post-construction cleanup",
      },
      {
        id: 4,
        content: "Infrastructure monitoring & fault reporting",
      },
      {
        id: 5,
        content: "WHS-compliant chemical use",
      },
    ],
  },
];

const keyCleanData: cleaningProfessionalsDataProps[] = [
  {
    title: "Key cleaning area",
    detail: [
      {
        id: 1,
        content: "Car parks & communal spaces",
      },
      {
        id: 2,
        content: "Windows, glass, & facades",
      },
      {
        id: 3,
        content: "Walkways, stairwells, & steps",
      },
      {
        id: 4,
        content: "Garbage bin management Residential & commercial buildings",
      },
    ],
  },
];

export default function CleaningProfessionalsTabView() {
  const [activeTab, setActiveTab] = useState("general");

  const renderData = (data: cleaningProfessionalsDataProps[]) => {
    return data.map((list, index) => (
      <div key={index} className="grid grid-1 md:grid-cols-12 gap-8 mt-8">
        <div className="col-span-12 md:col-span-4">
          <Image
            src={list.image || "/aggfm-logo.svg"}
            alt={list.title}
            width={1920}
            height={1080}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-4 col-span-12 md:col-span-8">
          <h4 className="content-title">{list.title}</h4>
          <ul>
            {list.detail.map((item) => (
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
    <>
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Button
          onPress={() => setActiveTab("general")}
          color={activeTab === "general" ? "primary" : "primary"}
          variant={activeTab === "general" ? "solid" : "flat"}
        >
          General and common area cleaning
        </Button>
        <Button
          onPress={() => setActiveTab("executive")}
          color={activeTab === "executive" ? "primary" : "primary"}
          variant={activeTab === "executive" ? "solid" : "flat"}
        >
          Executive cleaning
        </Button>
        <Button
          onPress={() => setActiveTab("keyClean")}
          color={activeTab === "keyClean" ? "primary" : "primary"}
          variant={activeTab === "keyClean" ? "solid" : "flat"}
        >
          Key cleaning area
        </Button>
      </div>

      {activeTab === "general" && renderData(generalCleaningData)}
      {activeTab === "executive" && renderData(executiveCleaningData)}
      {activeTab === "keyClean" && renderData(keyCleanData)}
    </>
  );
}
