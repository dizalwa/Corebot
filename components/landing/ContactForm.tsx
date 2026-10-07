"use client"

import * as React from "react"
import { Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "sent" | "error"
  >("idle")
  const [errorMsg, setErrorMsg] = React.useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: "",
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      workflow: "",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      consent: (form.elements.namedItem("consent") as HTMLInputElement).checked,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (!res.ok) throw new Error(json.error || "Failed to send message")

      setStatus("sent")
      form.reset()
    } catch (err) {
      setStatus("error")
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      )
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-8 text-center shadow-xs">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="size-6" />
        </div>
        <h3 className="mt-3 text-lg font-bold text-foreground">
          Message Received
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Thank you! We will review your details and get back to you shortly.
        </p>
        <div className="mt-6 border-t border-emerald-200/60 pt-4">
          <a
            href="https://wa.me/918102417697"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:underline"
          >
            <MessageSquare className="size-3.5" />
            <span>Want a quicker reply? Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-semibold text-foreground"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="Rahul Sharma"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-semibold text-foreground"
          >
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="business"
          className="mb-1.5 block text-xs font-semibold text-foreground"
        >
          Your Business
        </label>
        <input
          id="business"
          name="business"
          type="text"
          className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="e.g. Diagnostic Centre, Real Estate, Coaching Institute"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-semibold text-foreground"
        >
          What repetitive work is taking your team&apos;s time?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          className="w-full resize-none rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Tell us what your team repeatedly does manually…"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          disabled={status === "sending"}
          className="mt-0.5 size-3.5 rounded border-border text-primary focus:ring-primary disabled:cursor-not-allowed"
        />
        <label
          htmlFor="consent"
          className="text-[11px] leading-relaxed text-muted-foreground"
        >
          I agree to CoreBot using the information I provide to respond to my
          enquiry. See{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none disabled:opacity-60"
      >
        <Send className="size-4" />
        <span>
          {status === "sending" ? "Sending..." : "Discuss My Workflow"}
        </span>
      </button>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700">
          <AlertCircle className="size-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <p className="pt-1 text-center text-[11px] text-muted-foreground">
        No obligation. Just a practical conversation about what you can
        automate.
      </p>
    </form>
  )
}
