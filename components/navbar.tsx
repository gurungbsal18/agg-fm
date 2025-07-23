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
  { id: 1, title: "Building Maintenance", link: "/building-maintenance" },
  { id: 2, title: "Concierge Services", link: "/concierge-services" },
  { id: 3, title: "Cleaning Professionals", link: "/cleaning-professionals" },
  {
    id: 4,
    title: "Swimming Pool and Maintenance Services",
    link: "/swimming-pool-and-maintenance-services",
  },
  {
    id: 5,
    title: "Landscape Maintenance Services",
    link: "/landscape-maintenance-services",
  },
  {
    id: 6,
    title: "Mechanical, Electrical, and Plumbing (MEP)",
    link: "/mep-services",
  },
  {
    id: 7,
    title: "Defaulters Management and Recovery Services",
    link: "/aggfm-defaulters-management-and-recovery-services",
  },
  {
    id: 8,
    title: "Security Guard Services",
    link: "/security-guards-and-services",
  },
  {
    id: 9,
    title: "Inventory Fixed Assets Tagging Services",
    link: "/inventory-fixed-assets-tagging-service",
  },
  { id: 10, title: "AGM/EGM Services", link: "/agm-egm-services" },
  { id: 11, title: "Valet Parking", link: "valet-parking" },
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
          <Link href="/">
            <li>Home</li>
          </Link>
          <li
            className="service-menu relative hover:cursor-pointer"
            ref={serviceMenuRef}
          >
            <p
              onClick={handleServiceMenuDropdown}
              className="flex justify-between items-center gap-4"
            >
              Our Services
              {serviceMenuOpen ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </p>

            <div
              className={`absolute top-10 left-[-80] w-[400px] bg-white shadow-md transition-all duration-300 z-50 overflow-hidden ${
                serviceMenuOpen
                  ? "max-h-[500px] opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col py-2 bg-light-primary service-menu-dropdown">
                {ServiceMenuList.map((list) => (
                  <li key={list.id} className="px-4 py-2">
                    <Link
                      href={list.link}
                      onClick={() => setServiceMenuOpen(false)}
                    >
                      {list.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <Link href="#">Contact us</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div
          className="block md:hidden relative w-8 h-8 cursor-pointer"
          onClick={handleMobileMenuBtn}
        >
          <div
            className={`absolute top-0 left-0 transition-transform duration-300 ease-in-out transform ${
              isOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-90 pointer-events-none"
            }`}
          >
            <MdOutlineMenu size={28} />
          </div>
          <div
            className={`absolute top-0 left-0 transition-transform duration-300 ease-in-out transform ${
              !isOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-90 pointer-events-none"
            }`}
          >
            <MdClose size={28} />
          </div>
        </div>
      </div>

      {/* Mobile Menu: Slide from right */}
      <div
        className={`fixed top-30 right-0 h-full w-full bg-light-primary z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-4">
          <div>
            <ul className="space-y-4 text-sm">
              <li className="font-bold text-primary">
                <Link
                  href="/"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <div className="flex justify-between items-center cursor-pointer font-bold text-primary">
                  Our Services
                </div>
                <div>
                  <ul className="bg-light-primary">
                    {ServiceMenuList.map((list) => {
                      return (
                        <li key={list.id} className="px-4 py-2">
                          <Link
                            href={list.link}
                            onClick={() => {
                              setServiceMenuOpen(false);
                              setIsOpen(true);
                            }}
                          >
                            {list.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li className="font-bold text-primary">
                <Link
                  href="/about-us"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  About us
                </Link>
              </li>
              <li className="font-bold text-primary">
                <Link
                  href="#"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
