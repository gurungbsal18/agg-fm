import { Button } from "@heroui/button";
import React from "react";
import { LuSearch, LuMail } from "react-icons/lu";

export default function HomePage() {
  const title = "Integrated Facilites Management For The Future";
  return (
    <div className="hero">
      <div className="container mx-auto">
        <div className="hero-content">
          <h1 className="title text-white">{title}</h1>
          <div className="flex items-start justify-start gap-4 w-full">
            <Button className="" radius="sm" variant="shadow" color="primary">
              <LuSearch /> Explore Services
            </Button>
            <Button
              className="bg-white"
              radius="sm"
              variant="ghost"
              color="primary"
            >
              <LuMail /> Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
