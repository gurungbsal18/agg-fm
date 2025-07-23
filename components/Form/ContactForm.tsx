import React from "react";
import Form from "next/form";
import { Input } from "../ui/input";
import { Button } from "@heroui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  return (
    <div className="my-8">
      <h4 className="content-title mb-4">Or Fill Out The Form</h4>
      <Form action="/search" className="flex flex-col gap-8">
        <div className="flex gap-8 w-full">
          <span className="flex flex-col gap-2 w-full">
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" placeholder="First name" />
          </span>
          <span className="flex flex-col gap-2 w-full">
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Last name" />
          </span>
        </div>
        <div className="flex gap-8 w-full">
          <span className="flex flex-col gap-2 w-full">
            <Label htmlFor="address">Address</Label>
            <Input type="text" placeholder="Address" />
          </span>
          <span className="flex flex-col gap-2 w-full">
            <Label htmlFor="phone">Phone/WhatsApp Number</Label>
            <Input type="phone" placeholder="Phone/WhatsApp Number" />
          </span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="message">Message</Label>
          <Textarea />
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
