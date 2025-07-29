import Link from "next/link";
import React from "react";

export default function CopyrightSection() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container py-2 text-gray-500">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-1">
        <p className="text-xs">
          &copy; {currentYear} AGGSFM. All rights reserved
        </p>
        <Link
          href="https://www.itsansaar.com.np/"
          target="_blank"
          className="hover:text-primary hover:underline"
        >
          <p className="text-xs">Developed by: IT Sansaar</p>
        </Link>
      </div>
    </div>
  );
}
