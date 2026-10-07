import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { name, email, phone, business, message, workflow, consent } =
      await req.json()

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof phone !== "string" ||
      !phone.trim() ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Name, phone number, and message are required." },
        { status: 400 }
      )
    }

    if (consent !== true) {
      return NextResponse.json(
        { error: "Consent is required before sending an enquiry." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "The enquiry service is currently unavailable. Please try again later.",
        },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: "CoreBot <onboarding@send.corebot.in>",
      to: ["vipul@corebot.in"],
      ...(typeof email === "string" && email ? { replyTo: email } : {}),
      subject: `New enquiry from ${name.trim()}${typeof business === "string" && business ? ` — ${business}` : ""}`,
      text: `
Name: ${name.trim()}
Email: ${typeof email === "string" && email ? email : "Not provided"}
Phone / WhatsApp: ${phone.trim()}
Business: ${typeof business === "string" && business ? business : "—"}
Workflow Interest: ${typeof workflow === "string" && workflow ? workflow : "General Automation"}

Message:
${message.trim()}
      `.trim(),
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
