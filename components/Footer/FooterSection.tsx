import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiEnvelope } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="bg-primary">
      <div className="container text-white py-16">
        <div className="grid grid-cols-4">
          <div>
            <p className="font-bold text-xl">Contact</p>
            <div className="flex flex-col gap-2 mpt-4">
              <p className="flex gap-1 items-center">
                <IoLogoWhatsapp size={20} />
                +123
              </p>
              <p className="flex gap-1 items-center">
                <HiEnvelope size={20} />
                contact@aggfsm.com
              </p>
              <p className="flex gap-1 items-center">
                <FaMapMarkerAlt size={20} />
                Kuala Lumpur, Malaysia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
