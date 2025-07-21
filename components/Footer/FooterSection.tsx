import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiEnvelope } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="bg-primary">
      <div className="container text-white py-16">
        <div className="grid grid-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-2">
            <p className="font-bold text-xl">Contact</p>
            <div className="flex flex-col gap-2 mt-4">
              <ul className="flex flex-col gap-2 text-sm">
                <li className="flex gap-1 items-center hover:underline">
                  <IoLogoWhatsapp size={20} />
                  +123
                </li>
                <li className="flex gap-1 items-center hover:underline">
                  <HiEnvelope size={20} />
                  contact@aggfsm.com
                </li>
                <li className="flex gap-1 items-center hover:underline">
                  <FaMapMarkerAlt size={20} />
                  Kuala Lumpur, Malaysia
                </li>
              </ul>
            </div>
          </div>

          {/* useful link section */}
          <div className="col-span-1 md:col-span-2">
            <p className="font-bold text-xl">Useful Links</p>
            <div className="flex flex-col gap-2 my-4">
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:underline">Our Services</li>
                <li className="hover:underline">About us</li>
                <li className="hover:underline">Contact us</li>
              </ul>
            </div>
          </div>

          {/* our services section */}
          <div className="col-span-1 md:col-span-3">
            <p className="font-bold text-xl">Useful Services</p>
            <div className="flex flex-col gap-2 my-4">
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:underline">Building Maintenance</li>
                <li className="hover:underline">Concierge Services</li>
                <li className="hover:underline">Cleaning Professionals</li>
                <li className="hover:underline">
                  Swimming Pool Maintenance Services
                </li>
                <li className="hover:underline">
                  Landscape Maintenance Services
                </li>
                <li className="hover:underline">
                  Mechanical, Electrical, and Plumbing (MEP)
                </li>
                <li className="hover:underline">
                  Defaulters Management and Recovery Services
                </li>
                <li className="hover:underline">Security Guard Services</li>
                <li className="hover:underline">
                  Inventory Fixed Assests Tagging Management Services
                </li>
                <li className="hover:underline">AGM/EGM Services</li>
                <li className="hover:underline">Valet Parking Services</li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-5">
            <p className="font-bold text-xl">Our Location</p>
            <div className="flex flex-col gap-2 my-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127480.96968843792!2d101.64475629395612!3d3.1525576860397075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2snp!4v1753100492377!5m2!1sen!2snp"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
