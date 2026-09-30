import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, business, message, workflow } = await req.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "CoreBot <onboarding@send.corebot.in>",
      to: ["hellocorebot@gmail.com"],
      ...(email ? { replyTo: email } : {}),
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ""}`,
      text: `
Name: ${name}
Email: ${email || "Not provided"}
Phone / WhatsApp: ${phone || "Not provided"}
Business: ${business || "—"}
Workflow Interest: ${workflow || "General Automation"}

Message:
${message}
      `.trim(),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
