import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

export default function NeedHelpSection() {
  return (
    <div className="container">
      <div className="bg-primary rounded-2xl flex flex-col items-center justify-center gap-8 px-4 py-16">
        <h4 className="text-4xl font-bold text-white">Need Help?</h4>
        <div className="text-center">
          <p className="text-white">
            If you have any questions or need assistance, free to contact us.
          </p>
          <p className="text-white">We are here to help!</p>
        </div>

        <div className="w-full flex justify-center gap-4">
          <Link href="https://wa.me/+60128907763" target="_blank">
            <Button radius="sm" className="flex items-center gap-1">
              <BsWhatsapp className="text-green-700" size={20} />
              WhatsApp
            </Button>
          </Link>
          <Link href="mailto:contact@aggsfm.com">
            {" "}
            <Button radius="sm" className="flex items-center gap-1">
              <LuMail size={20} />
              Contact Us
            </Button>
          </Link>
        </div>
        <p className="text-white">
          or email us at:{" "}
          <Link href="mailto:contact@aggsfm.com" className="underline">
            contact@aggsfm.com
          </Link>
        </p>
      </div>
    </div>
  );
}
