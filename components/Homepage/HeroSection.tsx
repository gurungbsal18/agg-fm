import React from "react";
import { Button } from "@heroui/button";
import { LuSearch, LuMail } from "react-icons/lu";

export default function HeroSection() {
  const title =
    "AGG Facilities Management PLT As An Integrated Facilities Management For The Future";

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="title text-white text-center mb-4">{title}</h1>
          <div className="flex items-start justify-center gap-4 w-full">
            <Button className="" radius="sm" variant="shadow" color="primary">
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
