import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
const resend = new Resend(process.env.RESEND_API_KEY);
// console.log("API KEY", process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "AGGFM Contact Form <onboarding@resend.dev>",
      to: ["gurungbsal18@gmail.com", "priyaa.welsh@gmail.com"],
      subject: "You have recieved new message from contact page",
      react: EmailTemplate({
        firstName: body.firstName || "empty",
        lastName: body.lastName || "empty",
        phone: body.phone || "empty",
        address: body.address || "empty",
        message: body.message || "empty",
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error }, { status: 500 });
  }
}
