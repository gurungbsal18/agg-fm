import React from "react";
import { Button } from "@heroui/button";
import { LuSearch, LuMail } from "react-icons/lu";

export default function HeroSection() {
  const title = "Integrated Facilites Management For The Future";

  return (
    <div className="hero">
      <div className="container mx-auto">
        <div className="hero-content">
          <h1 className="title text-white">{title}</h1>
          <div className="flex items-start justify-center md:justify-start gap-4 w-full">
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
