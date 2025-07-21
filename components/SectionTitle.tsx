import React from "react";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
    </div>
  );
}
