"use client";
import React from "react";
import { Button } from "@heroui/button";
import { Form, Input, Textarea } from "@heroui/react";

export default function ContactForm() {
  return (
    <div className="my-8">
      <h4 className="content-title mb-4">Or Fill Out The Form</h4>
      <Form action="/search" className="flex flex-col gap-8">
        <div className="flex gap-8 w-full">
          <span className="flex flex-col gap-2 w-full">
            <Input
              type="text"
              isRequired
              label="First name"
              labelPlacement="inside"
            />
          </span>
          <span className="flex flex-col gap-2 w-full">
            <Input
              type="email"
              isRequired
              label="Last name"
              labelPlacement="inside"
            />
          </span>
        </div>
        <div className="flex gap-8 w-full">
          <span className="flex flex-col gap-2 w-full">
            <Input
              type="text"
              isRequired
              label="Address"
              labelPlacement="inside"
            />
          </span>
          <span className="flex flex-col gap-2 w-full">
            <Input
              type="phone"
              isRequired
              label="Phone/WhatsApp Number"
              labelPlacement="inside"
            />
          </span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Textarea label="Message" labelPlacement="inside" />
        </div>
        <div className="flex justify-start">
          <Button variant="solid" color="primary" radius="sm">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
}
