import Image from "next/image";
import React from "react";

export default function Navbar() {
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
        <ul className="nav-item">
          <li>Home</li>
          <li>Our Services</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}
