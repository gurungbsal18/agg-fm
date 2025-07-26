import emailjs from "@emailjs/browser";

interface EmailData {
  fullName: string;
  email: string;
  address: string;
  phone: string;
  message: string;
}

const sendEmail = (data: EmailData) => {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  return emailjs
    .send(
      serviceID,
      templateID,
      {
        fullName: data.fullName,
        email: data.email,
        address: data.address,
        phone: data.phone,
        message: data.message,
      },
      publicKey
    )
    .then(() => {
      console.log("SUCCESS!");
    })
    .catch((error) => {
      console.error("FAILED...", error.text);
    });
};

export default sendEmail;
