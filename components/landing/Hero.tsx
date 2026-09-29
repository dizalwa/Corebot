"use client"

import * as React from "react"
import { ArrowRight, MessageSquare, Play, RotateCcw, CheckCircle2, Clock, Sparkles } from "lucide-react"

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "New Customer Enquiry",
    source: "WhatsApp & Website Form",
    status: "Captured",
    time: "0.0s",
  },
  {
    id: 2,
    title: "AI Processes Request",
    source: "Extracts service, budget, intent",
    status: "Parsed",
    time: "+0.4s",
  },
  {
    id: 3,
    title: "Lead Details Recorded",
    source: "Synced to CRM & Google Sheets",
    status: "Saved",
    time: "+0.7s",
  },
  {
    id: 4,
    title: "Instant Response Sent",
    source: "Personalized WhatsApp reply",
    status: "Delivered",
    time: "+1.2s",
  },
  {
    id: 5,
    title: "Follow-Up Scheduled",
    source: "Reminder set in 24h if no reply",
    status: "Queued",
    time: "+1.5s",
  },
  {
    id: 6,
    title: "Sales Team Notified",
    source: "Slack & WhatsApp group alert",
    status: "Notified",
    time: "+1.8s",
  },
]

export default function Hero() {
  const [activeStep, setActiveStep] = React.useState(2)
  const [isPlaying, setIsPlaying] = React.useState(true)

  // Step progression animation loop
  React.useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= WORKFLOW_STEPS.length - 1 ? 0 : prev + 1))
    }, 2400)

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-background via-background to-secondary/30 pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Subtle background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
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
              CoreBot builds practical AI-powered workflows that automate repetitive tasks, follow-ups,
              customer communication and everyday business operations.
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

            {/* Value Indicators */}
            <div className="pt-4 border-t border-border/80 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-2 sm:gap-x-6 text-xs text-muted-foreground font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <span>Clear One-Time Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <span>You Own Everything We Build</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <span>Built For Your Existing Tools</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Workflow Visualizer */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-border/90 bg-card p-5 sm:p-6 shadow-sm">
              {/* Visualizer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-slate-300" />
                    <span className="size-2.5 rounded-full bg-slate-300" />
                    <span className="size-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-foreground">
                    live_inbound_pipeline.flow
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-700 border border-emerald-200">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                    ACTIVE
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="rounded p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    title={isPlaying ? "Pause simulation" : "Play simulation"}
                    aria-label={isPlaying ? "Pause workflow simulation" : "Resume workflow simulation"}
                  >
                    {isPlaying ? <Clock className="size-3.5" /> : <Play className="size-3.5" />}
                  </button>
                </div>
              </div>

              {/* Progress Stepper Nodes */}
              <div className="mt-4 space-y-2.5" role="region" aria-label="Live automation workflow progression">
                {WORKFLOW_STEPS.map((step, idx) => {
                  const isCurrent = idx === activeStep
                  const isPassed = idx < activeStep

                  return (
                    <div
                      key={step.id}
                      onClick={() => {
                        setActiveStep(idx)
                        setIsPlaying(false)
                      }}
                      className={`group relative flex cursor-pointer items-start justify-between rounded-xl border p-2.5 sm:p-3 transition-all ${
                        isCurrent
                          ? "border-primary/80 bg-indigo-50/50 shadow-xs ring-1 ring-primary/30"
                          : isPassed
                            ? "border-border/60 bg-card/60 opacity-85"
                            : "border-border/40 bg-secondary/20 opacity-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold font-mono transition-colors ${
                            isCurrent
                              ? "bg-primary text-primary-foreground"
                              : isPassed
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {isPassed ? "✓" : idx + 1}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-foreground">
                            {step.title}
                          </p>
                          <p className="text-[11px] sm:text-xs text-muted-foreground">
                            {step.source}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span
                          className={`inline-block rounded px-1.5 py-0.5 font-mono text-[10px] font-medium ${
                            isCurrent
                              ? "bg-primary/10 text-primary"
                              : isPassed
                                ? "bg-emerald-50 text-emerald-700"
                                : "text-slate-400"
                          }`}
                        >
                          {step.status}
                        </span>
                        <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                          {step.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Visualizer Footer */}
              <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Sparkles className="size-3 text-primary" />
                  Simulated workflow progression
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(0)
                    setIsPlaying(true)
                  }}
                  className="flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
                >
                  <RotateCcw className="size-3" />
                  Replay Run
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
