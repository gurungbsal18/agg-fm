import PageHeader from "@/components/PageHeader";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import ContactForm from "@/components/Form/ContactForm";

export default function ContactPage() {
  return (
    <>
      <h1 className="title text-center text-primary">Let's Get In Touch</h1>
      <div className="bg-light-primary items-center py-16 mt-8">
        <div className="container">
          <div className="grid grid-cols-3 primary">
            <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="bg-primary p-2 text-white rounded-full">
                  <FaPhone size={24} />
                </span>
                <span className="bg-primary p-2 text-white rounded-full">
                  <BsWhatsapp size={24} />
                </span>
              </div>
              <Link href="https://wa.me/+60128907763">+60128907763</Link>
            </div>
            <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="bg-primary p-2 text-white rounded-full">
                  <LuMail size={24} />
                </span>
              </div>
              <Link href="mailto:contact@aggsfm.com">contact@aggsfm.com</Link>
            </div>
            <div className="col-span-1 flex flex-col gap-2 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="bg-primary p-2 text-white rounded-full">
                  <LuMail size={24} />
                </span>
              </div>
              <p className="text-center">
                15th Floor, Megan Legasi, Millerz Square, 357, Old Klang Rd,
                58200 Kuala Lumpur, Malaysia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ContactForm />
      </div>
    </>
  );
}
