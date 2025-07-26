"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type innerContentProps = {
  id: number;
  title: string;
};

type detailProps = {
  id: number;
  content: string;
  innerContent?: innerContentProps[];
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
    image: "/images/executive-clean.webp",
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
    title: "Key cleaning environments",
    image: "/images/key-cleaning.webp",
    detail: [
      {
        id: 1,
        content: "Residential Condominium",
      },
      {
        id: 2,
        content: "Post Construction Cleaning : Types of Construction Cleaning",
        innerContent: [
          {
            id: 1,
            title:
              "Rough clean- Removing large debris and construction residue",
          },
          {
            id: 2,
            title:
              "Final clean (or sparkle clean) -A more detailed cleaning, ensuring a spotless finish",
          },
        ],
      },
      {
        id: 3,
        content: "Office Cleaning",
      },
      {
        id: 4,
        content: "Airport/Terminal Cleaning",
      },
      {
        id: 5,
        content: "Educational Institution Cleaning",
      },
      {
        id: 6,
        content:
          "Emcompasses a broader range of cleaning for manufacturer's premise, mall, commercial settings, industrial and retail premises",
      },
    ],
  },
];

export default function CleaningProfessionalsTabView() {
  const [activeTab, setActiveTab] = useState("general");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const renderData = (data: cleaningProfessionalsDataProps[]) => {
    return data.map((list, index) => (
      <div
        key={index}
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 mt-8 ${
          animate ? "hero-title-animation animate" : "hero-title-animation"
        }`}
      >
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
                {item.innerContent && (
                  <ul className="list-disc ms-8">
                    {item.innerContent.map((inner) => (
                      <li key={inner.id}>{inner.title}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
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
          Key cleaning environments
        </Button>
      </div>

      {activeTab === "general" && renderData(generalCleaningData)}
      {activeTab === "executive" && renderData(executiveCleaningData)}
      {activeTab === "keyClean" && renderData(keyCleanData)}
    </>
  );
}
