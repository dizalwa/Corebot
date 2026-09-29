"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "What exactly can CoreBot automate?",
    a: "CoreBot automates repetitive business processes involving structured data and communication. Examples include capturing leads from ads/website, sending instant WhatsApp follow-ups, updating CRMs and Google Sheets, answering customer inquiries 24/7, routing support requests, and scheduling appointments.",
  },
  {
    q: "Do I need to replace my existing software?",
    a: "No. CoreBot connects directly to the tools your business already uses—such as WhatsApp, Google Sheets, Gmail, Notion, Airtable, Slack, HubSpot, or industry-specific software. You do not need to migrate or buy a completely new suite of tools.",
  },
  {
    q: "Can CoreBot automate WhatsApp?",
    a: "Yes. Using the official WhatsApp Business API, we can build automated flows for instant lead responses, order confirmations, appointment reminders, and AI assistants capable of handling customer queries 24/7.",
  },
  {
    q: "What tools can CoreBot integrate with?",
    a: "We integrate with any tool that has an API or webhook. Commonly connected systems include WhatsApp Business, Google Workspace (Sheets, Gmail, Drive), Airtable, Notion, Slack, HubSpot, Zoho, Razorpay, OpenAI, Claude, and custom database endpoints.",
  },
  {
    q: "Do I need technical knowledge to manage this?",
    a: "No. We build, test, and configure everything for you. When we hand over the workflow, we provide plain-English operational documentation and a clear walkthrough so non-technical staff can comfortably monitor day-to-day runs.",
  },
  {
    q: "Who owns the automation?",
    a: "You own 100% of the automation. All workflows, accounts, credentials, and API connections reside in your own accounts. CoreBot does not hold your workflows hostage, and there is no vendor lock-in.",
  },
  {
    q: "What happens if an automation stops working?",
    a: "We build workflows with error-logging and automated alert notifications (e.g. sending a warning to your designated WhatsApp or Slack channel if a third-party API has an issue). Every project includes 30 or 60 days of post-launch support to resolve any initial edge cases.",
  },
  {
    q: "Are there additional software costs?",
    a: "Our fee covers custom design, engineering, testing, and deployment. If your workflows require paid third-party software plans (such as WhatsApp Business API messaging fees or cloud hosting for n8n/Make), you pay those directly to the providers at cost. We help you choose the most economical options.",
  },
  {
    q: "How is my business data handled?",
    a: "Workflows execute directly between your designated tools and accounts. We do not store or sell your business or customer records. We follow strict data-handling practices during setup and test with anonymized or dummy data whenever feasible.",
  },
  {
    q: "Can I start with just one workflow?",
    a: "Yes. Our Starter plan is specifically designed for businesses wanting to automate a single high-friction bottleneck first. Once you see the time saved and operational clarity, you can automate additional workflows as needed.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Clear Answers
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Everything you need to know about how CoreBot works, ownership, tools, and pricing.
          </p>
        </div>

        {/* 10 FAQ Accordion Items */}
        <div className="mt-12 space-y-3.5" role="region" aria-label="Frequently Asked Questions">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-border/90 bg-card transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-border/60 px-5 pt-3 pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
