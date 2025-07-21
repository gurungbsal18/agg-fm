"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const ServiceMenuList = [
  { id: 1, title: "Building Maintenance" },
  { id: 2, title: "Concierge Services" },
  { id: 3, title: "Cleaning Professionals" },
  { id: 4, title: "Swimming Pool and Maintenance Services" },
  { id: 5, title: "Landscape Maintenance Services" },
  { id: 6, title: "Mechanical, Electrical, and Plumbing (MEP)" },
  { id: 7, title: "Defaulters Management and Recovery Services" },
  { id: 8, title: "Security Guard Services" },
  { id: 9, title: "Inventory Fixed Assets Tagging Services" },
  { id: 10, title: "AGM/EGM Services" },
  { id: 11, title: "Valet Parking" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const serviceMenuRef = useRef<HTMLLIElement>(null);

  const handleMobileMenuBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleServiceMenuDropdown = () => {
    setServiceMenuOpen(!serviceMenuOpen);
  };

  // Close service dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        serviceMenuRef.current &&
        !serviceMenuRef.current.contains(event.target as Node)
      ) {
        setServiceMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <div className="container flex items-center justify-between navbar py-2">
        <Link href="/">
          <Image
            src="/aggfm-logo.svg"
            alt="AGGFM"
            width={1920}
            height={1080}
            className="logo-img"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-item hidden md:flex md:gap-4 md:items-center">
          <li>Home</li>

          <li
            className="service-menu relative hover:cursor-pointer"
            ref={serviceMenuRef}
          >
            <p
              onClick={handleServiceMenuDropdown}
              className="flex justify-between items-center gap-2"
            >
              Our Services
              {serviceMenuOpen ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </p>

            <div
              className={`absolute top-full left-0 w-[300px] bg-white shadow-md transition-all duration-300 overflow-hidden z-50 ${
                serviceMenuOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col py-2">
                {ServiceMenuList.map((list) => (
                  <li key={list.id} className="px-4 py-2 hover:bg-gray-100">
                    {list.title}
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>About us</li>
          <li>Contact us</li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="block md:hidden">
          <MdOutlineMenu size={32} onClick={handleMobileMenuBtn} />
        </div>
      </div>

      {/* Mobile Menu: Slide from right */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-6">
          <div>
            <ul className="space-y-4 text-lg">
              <li>Home</li>
              <li>Our Services</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div
            className="bg-red-200 text-red-700 p-3 rounded-full flex justify-center items-center hover:bg-red-300 cursor-pointer"
            onClick={handleMobileMenuBtn}
          >
            <MdClose size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
