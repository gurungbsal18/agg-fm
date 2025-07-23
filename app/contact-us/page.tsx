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
    </>
  );
}
