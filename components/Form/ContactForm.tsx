"use client";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Form, Input, Textarea } from "@heroui/react";
import sendEmail from "./utils/EmailUtils";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);
    setError(null);

    try {
      await sendEmail(formData);
      setIsSent(true);
      toast.success("Message sent successfully!");
      setFormData(initialFormData); // clear form on success
    } catch (err) {
      setError("Failed to send message. Please try again.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="my-8">
      <ToastContainer position="top-right" autoClose={3000} />

      <h4 className="content-title mb-4">Or Fill Out The Form</h4>
      <Form
        action="/search"
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <span className="flex flex-col gap-2 w-full">
            <Input
              isRequired
              errorMessage="Required"
              label="Full name"
              labelPlacement="inside"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
            />
          </span>
          <span className="flex flex-col gap-2 w-full">
            <Input
              isRequired
              errorMessage="Required"
              label="Email Address"
              labelPlacement="inside"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full">
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
        <div className="flex flex-col gap-2 justify-start w-full md:w-auto">
          <Button
            variant="solid"
            color="primary"
            radius="sm"
            type="submit"
            disabled={isSending}
            className="flex items-center justify-center gap-2 w-full md:w-auto"
          >
            {isSending && (
              <span
                className="loader"
                style={{
                  border: "3px solid #fff",
                  borderTop: "3px solid rgba(255,255,255,0.3)",
                  borderRadius: "50%",
                  width: "16px",
                  height: "16px",
                  animation: "spin 1s linear infinite",
                }}
              />
            )}
            {isSending ? "Sending..." : "Send"}
          </Button>

          {/* Success message */}
          {isSent && (
            <p
              className="text-green-600 mt-2 flex items-center gap-2"
              role="alert"
            >
              <FaRegCircleCheck /> Message sent successfully!
            </p>
          )}

          {/* Error message */}
          {error && (
            <p className="text-red-600 mt-2" role="alert">
              {error}
            </p>
          )}
        </div>
      </Form>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
}
