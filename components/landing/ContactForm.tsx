"use client"

import * as React from "react"
import { Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle")
  const [errorMsg, setErrorMsg] = React.useState("")
  const [selectedWorkflow, setSelectedWorkflow] = React.useState("Lead Follow-Up & Sales")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      workflow: selectedWorkflow,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
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
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-8 text-center shadow-xs">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="size-6" />
        </div>
        <h3 className="mt-3 text-lg font-bold text-foreground">
          Inquiry Received
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Thank you! We will review your process details and reply within one business day.
        </p>
        <div className="mt-6 pt-4 border-t border-emerald-200/60">
          <a
            href="https://wa.me/918102417697"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:underline"
          >
            <MessageSquare className="size-3.5" />
            <span>Need an urgent answer? Chat on WhatsApp now</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-foreground">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="Rahul Sharma"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-foreground">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="rahul@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-foreground">
            Phone / WhatsApp Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="business" className="mb-1.5 block text-xs font-semibold text-foreground">
            Business / Practice Name <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            placeholder="Apex Diagnostics / Sharma Agency"
          />
        </div>
      </div>

      <div>
        <label htmlFor="workflow-type" className="mb-1.5 block text-xs font-semibold text-foreground">
          Primary Workflow to Automate
        </label>
        <select
          id="workflow-type"
          value={selectedWorkflow}
          onChange={(e) => setSelectedWorkflow(e.target.value)}
          className="w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
        >
          <option value="Lead Follow-Up & Sales">Lead Follow-Up &amp; Inbound Sales</option>
          <option value="WhatsApp Customer AI Assistant">WhatsApp Customer AI Assistant</option>
          <option value="Appointment Reminders & Scheduling">Appointment Reminders &amp; Scheduling</option>
          <option value="Internal Ops & Spreadsheet Sync">Internal Ops &amp; Spreadsheet Sync</option>
          <option value="Invoicing & Document Extraction">Invoicing &amp; Document Extraction</option>
          <option value="Custom Business Workflow">Other Custom Business Workflow</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-foreground">
          Tell us about the repetitive work you want to eliminate <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          className="w-full resize-none rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="e.g. We get 15 leads daily from ads. My team manually copy-pastes them into a sheet and writes WhatsApp messages one by one..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Send className="size-4" />
        <span>{status === "sending" ? "Sending Details..." : "Discuss Your Workflow"}</span>
      </button>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
          <AlertCircle className="size-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <p className="text-center text-[11px] text-muted-foreground pt-1">
        We respect your time. No spam. You will hear back from us within one business day.
      </p>
    </form>
  )
}
