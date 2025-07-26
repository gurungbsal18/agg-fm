"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@heroui/button";
import { LuSearch, LuMail } from "react-icons/lu";

export default function HeroSection() {
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
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h1
            ref={titleRef}
            className="title text-white text-center mb-4 hero-title-animation"
          >
            AGG Facilities Management PLT <br />
            As An Integrated Facilities Mangement <br />
            For The Future
          </h1>
          <div className="flex items-start justify-center gap-4 w-full">
            <Button radius="sm" variant="shadow" color="primary">
              <LuSearch /> Explore Services
            </Button>
            <Button radius="sm">
              <LuMail /> Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
