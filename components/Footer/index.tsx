import React from "react";
import NeedHelpSection from "./NeedHelpSection";
import FooterSection from "./FooterSection";
import CopyrightSection from "./CopyrightSection";

export default function Footer() {
  return (
    <div className="flex flex-col gap-32">
      <NeedHelpSection />
      <div>
        <FooterSection />
        <CopyrightSection />
      </div>
    </div>
  );
}
