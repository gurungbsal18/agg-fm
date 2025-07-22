import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiEnvelope } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="bg-primary footer">
      <div className="container text-white py-16">
        <div className="grid grid-1 xl:grid-cols-12 gap-8 pb-8">
          <div className="col-span-1 xl:col-span-3">
            <p className="font-bold text-xl">Contact</p>
            <div className="flex flex-col gap-2 mt-4">
              <ul className="flex flex-col gap-2 text-sm">
                <Link href="https://wa.me/+60128907763">
                  <li className="flex gap-1 items-center hover:underline">
                    <span>
                      <IoLogoWhatsapp size={20} />
                    </span>
                    +60128907763
                  </li>
                </Link>
                <Link href="mailto:contact@aggsfm.com">
                  <li className="flex gap-1 items-center hover:underline">
                    <span>
                      <HiEnvelope size={20} />
                    </span>
                    contact@aggfsm.com
                  </li>
                </Link>
                <li className="flex gap-1 items-center hover:underline">
                  <span>
                    <FaMapMarkerAlt size={20} />
                  </span>
                  <p>
                    15th Floor, Megan Legasi, Millerz Square, 357, Old Klang Rd,
                    58200 Kuala Lumpur, Malaysia
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* useful link section */}
          <div className="col-span-1 xl:col-span-2">
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
          <div className="col-span-1 xl:col-span-3">
            <p className="font-bold text-xl">Useful Services</p>
            <div className="flex flex-col gap-2 my-4">
              <ul className="flex flex-col gap-2 text-sm">
                <Link href="/building-maintenance">
                  <li className="hover:underline">Building Maintenance</li>
                </Link>
                <Link href="/concierge-services">
                  <li className="hover:underline">Concierge Services</li>
                </Link>
                <Link href="/cleaning-professionals">
                  <li className="hover:underline">Cleaning Professionals</li>
                </Link>
                <Link href="/swimming-pool-and-maintenance-services">
                  <li className="hover:underline">
                    Swimming Pool and Maintenance Services
                  </li>
                </Link>
                <Link href="/landscape-maintenance-services">
                  <li className="hover:underline">
                    Landscape Maintenance Services
                  </li>
                </Link>
                <Link href="/mep-services">
                  <li className="hover:underline">
                    Mechanical, Electrical, and Plumbing (MEP)
                  </li>
                </Link>
                <Link href="/">
                  <li className="hover:underline">
                    Defaulters Management and Recovery Services
                  </li>
                </Link>
                <Link href="/">
                  <li className="hover:underline">Security Guard Services</li>
                </Link>
                <Link href="/">
                  <li className="hover:underline">
                    Inventory Fixed Assests Tagging Management Services
                  </li>
                </Link>
                <Link href="/">
                  <li className="hover:underline">AGM/EGM Services</li>
                </Link>
                <Link href="/">
                  <li className="hover:underline">Valet Parking Services</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4">
            <p className="font-bold text-xl">Our Location</p>
            <div className="flex flex-col gap-2 my-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.00226890945135!2d101.6730226495987!3d3.0898259999999973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b4087c1e0e3%3A0x5a02f4dc27e411fc!2sMegan%20Legasi%20%E2%80%A2%20Millerz%20Square%20%E2%80%A2%20OKR!5e0!3m2!1sen!2snp!4v1753214153741!5m2!1sen!2snp"
                width="600"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center pt-8 border-t-1 border-gray-400">
          <div className="footer-logo">
            <Image
              src="/aggfm-logo.svg"
              alt="aggfm logo"
              height={1920}
              width={1080}
            />
          </div>
          <p className="font-semibold">AGG Soft Facilities Management</p>
          <div className="bg-white text-primary w-full md:w-1/4 flex flex-col gap-1 items-center justify-center rounded-lg md:rounded-full py-2">
            <p>Follow us</p>
            <div className="flex gap-2">
              <FaFacebookF size={8} className="footer-social-icon" />
              <FaInstagramSquare size={8} className="footer-social-icon" />{" "}
              <FaLinkedinIn size={8} className="footer-social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
