import Link from "next/link";
import React from "react";
import { LuMail } from "react-icons/lu";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function TopBar() {
  const contactData = [
    {
      id: 1,
      content: "+60128907763",
      icon: BsWhatsapp,
      link: "https://wa.me/+60128907763",
    },
    {
      id: 2,
      content: "contact@aggsfm.com",
      icon: LuMail,
      link: "mailto:contact@aggsfm.com",
    },
  ];

  const socialData = [
    {
      id: 1,
      icon: FaFacebookF,
      link: "https://facebook.com",
    },
    {
      id: 1,
      icon: BsInstagram,
      link: "https://instagram.com",
    },
    {
      id: 1,
      icon: FaLinkedinIn,
      link: "https://linkedin.com",
    },
  ];

  return (
    <div className="bg-primary py-2 text-sm">
      <div className="container text-white">
        <div className="flex items-center justify-center md:justify-between">
          <div className="flex gap-4">
            {contactData.map((list) => {
              return (
                <div key={list.id}>
                  <Link href={list.link} className="hover:underline">
                    <p className="flex gap-1 items-center">
                      <list.icon />
                      {list.content}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="hidden md:flex gap-4 items-center">
            {socialData.map((list) => {
              return (
                <div
                  key={list.id}
                  className="bg-light-primary p-1 rounded-full text-primary hover:bg-blue-600 hover:text-white"
                >
                  <Link href={list.link}>
                    <list.icon />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
