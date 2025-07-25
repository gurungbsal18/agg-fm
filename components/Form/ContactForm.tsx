"use client";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Form, Input, Textarea } from "@heroui/react";

export default function ContactForm() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone) return;

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Email send successfully!", result);
    } catch (error) {
      console.log("unable to send message", error);
    }
  };

  console.log(formData);

  return (
    <div className="my-8">
      <h4 className="content-title mb-4">Or Fill Out The Form</h4>
      <Form
        action="/search"
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-8 w-full">
          <span className="flex flex-col gap-2 w-full">
            <Input
              isRequired
              errorMessage="Required"
              label="First name"
              labelPlacement="inside"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
          </span>
          <span className="flex flex-col gap-2 w-full">
            <Input
              isRequired
              errorMessage="Required"
              label="Last name"
              labelPlacement="inside"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="flex gap-8 w-full">
          <span className="flex flex-col gap-2 w-full">
            <Input
              isRequired
              errorMessage="Required"
              label="Address"
              labelPlacement="inside"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
            />
          </span>
          <span className="flex flex-col gap-2 w-full">
            <Input
              isRequired
              errorMessage="Required"
              label="Phone/WhatsApp Number"
              labelPlacement="inside"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Textarea
            label="Message"
            labelPlacement="inside"
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-start">
          <Button variant="solid" color="primary" radius="sm" type="submit">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}
