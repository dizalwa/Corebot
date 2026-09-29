import * as React from "react"
import {
  Clock,
  Copy,
  MessageSquareWarning,
  BellRing,
  Table,
  Send,
  AlertCircle,
} from "lucide-react"

const PAIN_POINTS = [
  {
    icon: Clock,
    title: "Manually following up with leads",
    description:
      "Leads from website forms and Meta ads sit for hours before someone on the team writes back, losing high-intent customers.",
  },
  {
    icon: Copy,
    title: "Copying information between systems",
    description:
      "Staff spends daily hours copy-pasting customer details from WhatsApp and emails into CRMs, billing tools, and spreadsheets.",
  },
  {
    icon: MessageSquareWarning,
    title: "Answering repetitive customer questions",
    description:
      "Employees repeatedly answer the same questions regarding pricing, service availability, working hours, and preparation steps.",
  },
  {
    icon: BellRing,
    title: "Sending manual appointment reminders",
    description:
      "Chasing confirmations and sending reminder messages manually, leading to last-minute cancellations and no-shows.",
  },
  {
    icon: Table,
    title: "Updating tracking spreadsheets",
    description:
      "Maintaining manual status columns, order sheets, and dispatch logs where one typo can break inventory counts.",
  },
  {
    icon: Send,
    title: "Sending routine status notifications",
    description:
      "Staff spending time manually messaging clients about booking status, report readiness, or dispatch updates.",
  },
]

export default function ProblemSection() {
  return (
    <section className="border-b border-border/80 bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            The Operational Reality
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Too much of your team&apos;s time goes into repetitive work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Growing businesses rarely lack ambition—they get bogged down by administrative
            repetition that slows down customer responses and drains valuable employee time.
          </p>
        </div>

        {/* 6 Problem Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-border/80 bg-card p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-indigo-50 group-hover:text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Closing takeaway callout */}
        <div className="mt-12 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 sm:p-6 text-center">
          <p className="text-sm sm:text-base font-semibold text-foreground">
            If your team does the same task repeatedly, there&apos;s a good chance it can be automated.
          </p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
            You don&apos;t need to overhaul everything at once—starting with a single high-friction task often yields immediate clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
