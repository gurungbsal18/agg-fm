import emailjs from "@emailjs/browser";

const sendEmail = (data: emailData) => {
  emailjs
    .send(
      "service_o6krszm",
      "template_3ezmls8",
      {
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phone: data.phone,
        message: data.message,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};

export default sendEmail;
