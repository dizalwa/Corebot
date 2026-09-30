"use client"

import * as React from "react"
import { ArrowRight, MessageSquare, CheckCircle2, ChevronDown } from "lucide-react"

const BUSINESS_STEPS = [
  {
    id: 1,
    label: "New Enquiry",
    description: "A customer reaches out to your business",
    icon: "📩",
  },
  {
    id: 2,
    label: "Instant Reply",
    description: "Customer gets an immediate response",
    icon: "💬",
  },
  {
    id: 3,
    label: "Customer Details Saved",
    description: "Name, number and requirement are recorded",
    icon: "📋",
  },
  {
    id: 4,
    label: "Follow-Up Reminder",
    description: "A reminder is created so nothing is missed",
    icon: "🔔",
  },
  {
    id: 5,
    label: "Team Notified",
    description: "The right person on your team is informed",
    icon: "👤",
  },
]

export default function Hero() {
  const [activeStep, setActiveStep] = React.useState(0)

  // Simple step progression animation
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= BUSINESS_STEPS.length - 1 ? 0 : prev + 1))
    }, 2600)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-background pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Subtle blue radial glow behind hero content */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] rounded-full bg-primary/[0.035] blur-3xl -z-10"
        aria-hidden="true"
      />
      {/* Subtle background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#0F172A 1px, transparent 1px), radial-gradient(#0F172A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/70 px-3.5 py-1 text-xs font-semibold text-primary tracking-wide">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span>PRACTICAL AI AUTOMATION FOR BUSINESSES</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Stop Doing Work Your Business Can Automate.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              CoreBot helps businesses reduce repetitive follow-ups, customer communication,
              data entry and routine work — so your team can spend more time on the work that
              actually grows the business.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Find What You Can Automate</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href="https://wa.me/918102417697"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground shadow-2xs transition-all hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <MessageSquare className="size-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Line */}
            <p className="text-xs text-muted-foreground font-medium pt-1">
              Based in Ranchi · Built for Indian SMEs · Start with one process
            </p>
          </div>

          {/* Right Column: Simple Business Scenario Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-border/90 bg-card p-5 sm:p-6 shadow-sm">
              {/* Header */}
              <div className="pb-4 border-b border-border/70">
                <p className="text-sm font-semibold text-foreground">
                  What happens when a new customer enquires
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Handled automatically — with less manual work for your team
                </p>
              </div>

              {/* Business Process Steps */}
              <div className="mt-5 space-y-0" role="region" aria-label="Business automation process">
                {BUSINESS_STEPS.map((step, idx) => {
                  const isActive = idx === activeStep
                  const isCompleted = idx < activeStep

                  return (
                    <React.Fragment key={step.id}>
                      {/* Step Card */}
                      <div
                        className={`relative flex items-center gap-3.5 rounded-xl border p-3 transition-all duration-300 ${
                          isActive
                            ? "border-primary/70 bg-indigo-50/50 shadow-xs ring-1 ring-primary/20"
                            : isCompleted
                              ? "border-border/60 bg-card/80"
                              : "border-border/40 bg-secondary/20 opacity-60"
                        }`}
                      >
                        {/* Step Icon */}
                        <div
                          className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-base transition-colors ${
                            isActive
                              ? "bg-primary/10"
                              : isCompleted
                                ? "bg-emerald-50"
                                : "bg-slate-50"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="size-4.5 text-emerald-600" />
                          ) : (
                            <span>{step.icon}</span>
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="min-w-0">
                          <p className="text-[13px] sm:text-sm font-semibold text-foreground leading-tight">
                            {step.label}
                          </p>
                          <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-snug">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Connector Arrow between steps */}
                      {idx < BUSINESS_STEPS.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ChevronDown
                            className={`size-4 transition-colors duration-300 ${
                              idx < activeStep
                                ? "text-emerald-400"
                                : idx === activeStep
                                  ? "text-primary/60"
                                  : "text-slate-300"
                            }`}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>

              {/* Footer note */}
              <div className="mt-4 pt-3 border-t border-border/70">
                <p className="text-[11px] text-muted-foreground text-center">
                  The routine work is handled automatically, so your team can focus on customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
