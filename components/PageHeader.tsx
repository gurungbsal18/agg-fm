"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface PageHeaderProps {
  title: string;
  image?: string;
}

export default function PageHeader({ title, image }: PageHeaderProps) {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.disconnect(); // Remove observer after animation runs once
        }
      },
      {
        threshold: 0.5, // Trigger when 50% is visible
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  return (
    <div className="page-header mb-12 md:mb-24">
      <Image
        src={image || "/images/malaysia-home-banner.webp"}
        alt={title}
        width={1920}
        height={1080}
      />
      <div
        ref={titleRef}
        className="container flex justify-center page-header-content hero-title-animation"
      >
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}
