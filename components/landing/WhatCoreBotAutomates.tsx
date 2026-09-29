import * as React from "react"
import {
  UserCheck,
  MessageSquare,
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const CATEGORIES = [
  {
    icon: UserCheck,
    tag: "A. INBOUND REVENUE",
    title: "Lead & Sales Automation",
    formula: "Capture → Qualify → Follow up → Update",
    description:
      "Eliminate lost leads and delayed responses. When an enquiry arrives, automate instant qualification, CRM updates, and systematic follow-up cadence.",
    examples: [
      "Instant lead capture from Meta ads, Google ads & website",
      "Automated lead qualification based on budget & intent",
      "Multi-channel follow-up via WhatsApp and email",
      "Instant synchronization with CRM or Google Sheets",
      "Real-time notifications sent to the designated sales rep",
    ],
  },
  {
    icon: MessageSquare,
    tag: "B. CLIENT ENGAGEMENT",
    title: "Customer Communication",
    formula: "Ask → Understand → Respond → Escalate",
    description:
      "Handle routine customer queries 24/7. Provide accurate information without forcing your staff to answer the same questions day and night.",
    examples: [
      "Custom AI assistants trained on your service catalog & FAQs",
      "Automated WhatsApp workflows for instant enquiry handling",
      "Appointment scheduling and rescheduling conversations",
      "Service status notifications & preparation checklists",
      "Smooth human handoff when a query requires judgment",
    ],
  },
  {
    icon: Workflow,
    tag: "C. INTERNAL EFFICIENCY",
    title: "Business Operations",
    formula: "Collect → Process → Update → Notify",
    description:
      "Keep internal departments in sync without manual data re-entry. Eliminate copy-pasting across disparate spreadsheets and software.",
    examples: [
      "Automated data extraction from invoices, orders, and receipts",
      "Two-way synchronization between spreadsheets and databases",
      "Document processing and automated PDF generation",
      "Cross-team notifications when milestones or tasks update",
      "Automated client payment reminders and receipt dispatch",
    ],
  },
  {
    icon: Sparkles,
    tag: "D. BESPOKE LOGIC",
    title: "Custom Workflows",
    formula: "Your process → Your custom automation",
    description:
      "Every business has unique operational quirks. We map your specific manual sequence and build an automation tailored to your existing software.",
    examples: [
      "Integration across proprietary or industry-specific software",
      "Multi-step approval workflows across departments",
      "Automated client onboarding questionnaires and folders",
      "Intelligent routing based on custom business rules",
      "Legacy software connectors via webhook or database sync",
    ],
  },
]

export default function WhatCoreBotAutomates() {
  return (
    <section id="solutions" className="border-b border-border/80 bg-secondary/20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Solutions Overview
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Turn repetitive processes into automated workflows.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We focus on business outcomes, practical steps, and seamless tool connections.
            Here are the four primary areas where businesses automate manual work.
          </p>
        </div>

        {/* 4 Solution Category Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-border/90 bg-card p-6 sm:p-8 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-border/70">
                    <span className="font-mono text-xs font-semibold text-primary">
                      {cat.tag}
                    </span>
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                      <Icon className="size-4.5" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    {cat.title}
                  </h3>

                  <div className="mt-2 inline-flex items-center rounded-md bg-secondary px-2.5 py-1 font-mono text-xs font-medium text-slate-700">
                    {cat.formula}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Common Automations Included:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {cat.examples.map((ex, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 text-emerald-600 shrink-0" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/70">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>Discuss automating this process</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
