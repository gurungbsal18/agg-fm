import Image from "next/image";
import React from "react";

interface PageHeaderProps {
  title: string;
  image?: string;
}

export default function PageHeader({ title, image }: PageHeaderProps) {
  return (
    <div className="page-header mb-24">
      <Image
        src={image || "/images/malaysia-home-banner.webp"}
        alt={title}
        width={1920}
        height={1080}
      />
      <div className="container page-header-content">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}
