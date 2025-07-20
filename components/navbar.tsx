"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMobileMenuBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="container flex items-center justify-between navbar py-2">
        <Image
          src="/aggfm-logo.svg"
          alt="AGGFM"
          width={1920}
          height={1080}
          className="logo-img"
        />
        <ul className="nav-item hidden md:flex md:gap-4 md:items-center">
          <li>Home</li>
          <li>Our Services</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>

        <div className="block md:hidden">
          <MdOutlineMenu size={32} onClick={handleMobileMenuBtn} />
          {!isOpen && (
            <div className="bg-primary mobile-menu">
              <div>
                <ul>
                  <li>Home</li>
                  <li>Our Services</li>
                  <li>About us</li>
                  <li>Contact us</li>
                </ul>
              </div>

              <div
                className="bg-red-200 p-2 flex items-center justify-center text-red-700 rounded-full"
                onClick={handleMobileMenuBtn}
              >
                <MdClose size={32} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
