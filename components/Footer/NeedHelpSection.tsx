import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

export default function NeedHelpSection() {
  return (
    <div className="container need-help-section bg-primary rounded-2xl">
      <div className="flex flex-col items-center justify-center gap-8 px-4 py-16 text-white text-center need-help-section-content">
        <h4 className="text-4xl font-bold">Need Help?</h4>

        <div>
          <p>
            If you have any questions or need assistance, feel free to contact
            us.
          </p>
          <p>We are here to help!</p>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/60128907763"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button radius="sm" className="flex items-center gap-2">
              <BsWhatsapp className="text-green-600" size={20} />
              WhatsApp
            </Button>
          </a>
          <Link href="/contact-us">
            <Button radius="sm" className="flex items-center gap-2">
              <LuMail size={20} />
              Contact Us
            </Button>
          </Link>
        </div>

        <p>
          or email us at:{" "}
          <a
            href="mailto:contact@aggsfm.com"
            className="underline underline-offset-2"
          >
            contact@aggsfm.com
          </a>
        </p>
      </div>
    </div>
  );
}
