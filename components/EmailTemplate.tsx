import Image from "next/image";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  phone: number;
  address: string;
  message: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  phone,
  address,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <div>
        <p>
          Full Name: {firstName} {lastName}
        </p>
        <p>Phone/WhatsApp Number: {phone}</p>
        <p>Address: {address}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
}
