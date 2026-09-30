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
    tag: "1",
    title: "Get More Leads Handled",
    description:
      "Respond to new enquiries quickly and make sure promising leads don't get forgotten.",
    examples: [
      "Automatically respond to new enquiries",
      "Capture customer requirements",
      "Send follow-ups when needed",
    ],
  },
  {
    icon: MessageSquare,
    tag: "2",
    title: "Keep Customers Updated",
    description:
      "Keep customers informed without your staff having to remember every message and reminder.",
    examples: [
      "Appointment reminders",
      "Booking confirmations",
      "Report or status notifications",
    ],
  },
  {
    icon: Workflow,
    tag: "3",
    title: "Save Staff Time",
    description:
      "Take repetitive office work off your team's daily workload.",
    examples: [
      "Move information between systems",
      "Update spreadsheets automatically",
      "Send routine messages and notifications",
    ],
  },
  {
    icon: Sparkles,
    tag: "4",
    title: "Automate Your Own Process",
    description:
      "If your business has a repetitive process, CoreBot can turn it into a simpler, more consistent workflow.",
    examples: [
      "Enquiry-to-appointment process",
      "Daily reporting",
      "Internal task assignment",
    ],
  },
]

export default function WhatCoreBotAutomates() {
  return (
    <section id="solutions" className="border-b border-border/80 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            What CoreBot Automates
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            What kind of work can CoreBot take off your team's hands?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Most businesses have routine tasks that take up hours every week.
            Here are four areas where CoreBot helps.
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
                    <span className="text-xs font-semibold text-primary">
                      {cat.tag}
                    </span>
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                      <Icon className="size-4.5" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    {cat.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Examples:
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
